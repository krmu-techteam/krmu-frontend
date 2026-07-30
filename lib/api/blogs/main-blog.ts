import { FETCH_STRAPI_URL, krmBlogURL } from "@/app/constant";
import {
  BlogCategoryPageSEOResponse,
  BlogPageSEOResponse,
  MainBlogResponse,
} from "@/lib/types/blogs/main-blogs";

export async function getAllBlogsByPerPageOrCategorySlug(
  num_of_blogs: number = 6,
  page: number = 1,
  categorySlug?: string
) {
  try {
    // Make sure page is always valid
    const currentPage =
      Number.isInteger(page) && page > 0 ? page : 1;

    const params = new URLSearchParams({
      per_page: String(num_of_blogs),
      page: String(currentPage),
      _fields:
        "id,slug,title,featured_media,content,excerpt,date_gmt",
    });

    let categoryId: number | null = null;

    // Get category ID
    if (categorySlug) {
      const catRes = await fetch(
        `${krmBlogURL}/wp-json/wp/v2/categories?slug=${encodeURIComponent(
          categorySlug
        )}`,
        {
          next: {
            revalidate: 3600,
            tags: ["blogs"],
          },
        }
      );

      if (!catRes.ok) {
        console.error(
          "Category API failed:",
          catRes.status,
          catRes.statusText
        );

        return {
          blogs: [],
          totalPages: 0,
        };
      }

      const cats = await catRes.json();

      if (!Array.isArray(cats) || cats.length === 0) {
        return {
          blogs: [],
          totalPages: 0,
        };
      }

      categoryId = Number(cats[0]?.id) || null;

      if (!categoryId) {
        return {
          blogs: [],
          totalPages: 0,
        };
      }

      params.set("categories", String(categoryId));
    }

    const finalURL =
      `${krmBlogURL}/wp-json/wp/v2/posts?${params.toString()}`;

    const res = await fetch(finalURL, {
      next: {
        revalidate: 3600,
        tags: ["blogs"],
      },
    });

    // Handle WordPress error response safely
    if (!res.ok) {
      const errorText = await res.text();

      console.error("WordPress posts API failed:", {
        status: res.status,
        statusText: res.statusText,
        page: currentPage,
        url: finalURL,
        response: errorText,
      });

      return {
        blogs: [],
        totalPages: 0,
      };
    }

    const data = await res.json();

    // Make sure WordPress actually returned an array
    const blogs = Array.isArray(data) ? data : [];

    const totalPagesHeader =
      res.headers.get("X-WP-TotalPages");

    const totalPages = Number(totalPagesHeader) || 1;

    return {
      blogs,
      totalPages,
    };
  } catch (error) {
    console.error(
      "getAllBlogsByPerPageOrCategorySlug error:",
      error
    );

    return {
      blogs: [],
      totalPages: 0,
    };
  }
}
// export async function getAllBlogsByPerPageOrCategorySlug(
//   num_of_blogs: number = 6,
//   page: number = 1,
//   categorySlug?: string
// ) {
//   try {
//     const params = new URLSearchParams({
//       per_page: String(num_of_blogs),
//       page: String(page),
//       _fields: "id,slug,title,featured_media,content,excerpt,date_gmt",
//     });

//     let categoryId: number | null = null;

//     // 🟢 Fetch category ID only if slug exists
//     if (categorySlug) {
//       const catRes = await fetch(
//         `${krmBlogURL}/wp-json/wp/v2/categories?slug=${categorySlug}`,
//         { next: { revalidate: 3600, tags: ["blogs"] } }
//       );

//       if (catRes.ok) {
//         const cats = await catRes.json();
//         if (cats?.length) categoryId = cats[0].id;
//       }

//       // ❗ Invalid slug → return empty result instantly (faster)
//       if (!categoryId) return { blogs: [], totalPages: 0 };
//     }

//     // If category found, add filter
//     if (categoryId) params.append("categories", String(categoryId));

//     // 🔥 Optimized single fetch call
//     const finalURL = `${krmBlogURL}/wp-json/wp/v2/posts?${params.toString()}`;

//     const res = await fetch(finalURL, { next: { revalidate: 3600, tags: ["blogs"] } });

//     if (!res.ok) throw new Error("Failed to fetch blogs");

//     const totalPages = Number(res.headers.get("X-WP-TotalPages")) || 1;
//     const blogs = await res.json();

//     return { blogs, totalPages };
//   } catch (error) {
//     console.error("Blog fetch error:", error);
//     return { blogs: [], totalPages: 0 };
//   }
// }

export async function getRecentPosts() {
  try {
    const res = await fetch(
      `${krmBlogURL}/wp-json/wp/v2/posts?per_page=20`,
      { next: { revalidate: 3600, tags: ["blogs"] } }
    );
    if (!res.ok) throw new Error("Failed to fetch recent posts");
    const json: MainBlogResponse = await res.json();
    return json;
  } catch (error) {
    console.error("Recent posts fetch error:", error);
    return [];
  }
}

export async function getBlogPageInfo(): Promise<BlogPageSEOResponse["data"] | null> {
  try {
    const res = await fetch(
      `${FETCH_STRAPI_URL}/api/blog?fields[0]=Title&populate[blog_seo][populate][shareImage][fields][0]=url`,
      {
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) throw new Error("Failed to fetch blog page info");

    const json: BlogPageSEOResponse = await res.json();
    return json.data;
  } catch (error) {
    console.error("Blog page info fetch error:", error);
    return null;
  }
}
export async function getBlogCategoryPageInfo(): Promise<
  BlogCategoryPageSEOResponse["data"] | null
> {
  try {
    const res = await fetch(
      `${FETCH_STRAPI_URL}/api/blog-category?fields[0]=Title&populate[blog_category_seo][populate][shareImage][fields][0]=url`,
      {
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) throw new Error("Failed to fetch blog category page info");

    const json: BlogCategoryPageSEOResponse = await res.json();
    return json.data;
  } catch (error) {
    console.error("Blog category page info fetch error:", error);
    return null;
  }
}

// {
//  fields: ['Title'],
//  populate: {
//    blog_seo: {
//     populate: {
//       shareImage: {
//         fields: ['url']
//        }
//     }

//    }
//  }
// }

// export async function getAllBlogsByPerPage(
//   num_of_blogs: number = 6,
//   page: number = 1
// ) {
//   const res = await fetch(
//     `${krmBlogURL}/wp-json/wp/v2/posts?per_page=${num_of_blogs}&page=${page}&_embed`,
//     {
//       next: { revalidate: 3600 },
//     }
//   );

//   if (!res.ok) throw new Error("Failed to fetch blogs");

//   const totalPages = Number(res.headers.get("X-WP-TotalPages")) || 1;
//   const json = await res.json();

//   return { blogs: json, totalPages };
// }

// export async function getAllBlogsByPerPage(
//   num_of_blogs: number = 6,
//   page: number = 1
// ): Promise<MainBlogResponse> {
//   const res = await fetch(
//     // `${krmBlogURL}/wp-json/wp/v2/posts?per_page=${num_of_blogs}&_embed`,
//     `${krmBlogURL}/wp-json/wp/v2/posts?per_page=${num_of_blogs}&page=${page}&_embed`,
//     {
//       next: {
//         revalidate: 3600,
//       },
//     }
//   );
//   if (!res.ok) throw new Error("Failed to fetch Single Blog");
//   const json: MainBlogResponse = await res.json();
//   return json;
// }
