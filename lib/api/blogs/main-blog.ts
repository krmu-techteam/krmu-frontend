import { FETCH_STRAPI_URL, krmBlogURL } from "@/app/constant";
import {
  BlogCategoryPageSEOResponse,
  BlogPageSEOResponse,
  MainBlogResponse,
} from "@/lib/types/blogs/main-blogs";

// lib/api/blogs/main-blog.ts
//
// ⚠️ Replace ONLY getAllBlogsByPerPageOrCategorySlug (and add getMediaMap above it)
// in your existing file. Keep your existing `krmBlogURL` import, `getBlogPageInfo`,
// and any other exports as they are.

import { MainBlogs } from "@/lib/types/blogs/main-blogs";
// import { krmBlogURL } from "..."; // <- keep your existing import for this

type BlogsResult = {
  blogs: MainBlogs[];
  totalPages: number;
  error: boolean;
};

// Netlify functions time out at ~10s, so abort well before that
const FETCH_TIMEOUT_MS = 6000;

// Fetch featured image URLs for ALL posts on the page in ONE request
async function getMediaMap(ids: number[]): Promise<Record<number, string>> {
  const uniqueIds = Array.from(new Set(ids.filter(Boolean)));
  if (!uniqueIds.length) return {};

  try {
    const res = await fetch(
      `${krmBlogURL}/wp-json/wp/v2/media?include=${uniqueIds.join(",")}&per_page=${uniqueIds.length}&_fields=id,source_url,media_details`,
      {
        next: { revalidate: 3600, tags: ["blogs"] },
        signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
        headers: { Accept: "application/json" },
      },
    );
    if (!res.ok) return {};

    const media = await res.json();
    if (!Array.isArray(media)) return {};

    const map: Record<number, string> = {};
    for (const m of media) {
      // Prefer WordPress's 768px version: much lighter than the full-size original
      const sizes = m?.media_details?.sizes;
      const url =
        sizes?.medium_large?.source_url ??
        sizes?.large?.source_url ??
        m?.source_url;
      if (m?.id && url) map[m.id] = url;
    }
    return map;
  } catch (error) {
    console.error("Blog media fetch error:", error);
    return {};
  }
}

export async function getAllBlogsByPerPageOrCategorySlug(
  num_of_blogs: number = 6,
  page: number = 1,
  categorySlug?: string,
): Promise<BlogsResult> {
  try {
    const params = new URLSearchParams({
      per_page: String(num_of_blogs),
      page: String(page),
      // no `content`: list pages don't need it. (`_embed` is not used because
      // your WordPress does not return `_embedded`; images come from getMediaMap.)
      _fields: "id,slug,title,excerpt,date_gmt,featured_media",
    });

    if (categorySlug) {
      const catRes = await fetch(
        `${krmBlogURL}/wp-json/wp/v2/categories?slug=${encodeURIComponent(categorySlug)}&_fields=id`,
        {
          next: { revalidate: 3600, tags: ["blogs"] },
          signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
        },
      );

      const cats = catRes.ok ? await catRes.json() : [];

      // Unknown category -> empty result (not an error)
      if (!Array.isArray(cats) || !cats.length) {
        return { blogs: [], totalPages: 0, error: false };
      }

      params.append("categories", String(cats[0].id));
    }

    const res = await fetch(`${krmBlogURL}/wp-json/wp/v2/posts?${params}`, {
      next: { revalidate: 3600, tags: ["blogs"] },
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
      headers: { Accept: "application/json" },
    });

    // WordPress returns 400 when `page` is past the last page
    if (res.status === 400) {
      return { blogs: [], totalPages: 0, error: false };
    }
    if (!res.ok) throw new Error(`WP responded ${res.status}`);

    const data = await res.json();
    if (!Array.isArray(data)) throw new Error("Unexpected WP response");
    const raw = data as MainBlogs[];

    // One extra request for all featured images on this page
    const mediaMap = await getMediaMap(raw.map((b) => b.featured_media));

    const blogs: MainBlogs[] = raw.map((b) => ({
      ...b,
      image_url: mediaMap[b.featured_media] ?? null,
    }));

    return {
      blogs,
      totalPages: Number(res.headers.get("X-WP-TotalPages")) || 1,
      error: false,
    };
  } catch (error) {
    console.error("Blog fetch error:", error);
    return { blogs: [], totalPages: 0, error: true };
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
    const res = await fetch(`${krmBlogURL}/wp-json/wp/v2/posts?per_page=20`, {
      next: { revalidate: 3600, tags: ["blogs"] },
    });
    if (!res.ok) throw new Error("Failed to fetch recent posts");
    const json: MainBlogResponse = await res.json();
    return json;
  } catch (error) {
    console.error("Recent posts fetch error:", error);
    return [];
  }
}

export async function getBlogPageInfo(): Promise<
  BlogPageSEOResponse["data"] | null
> {
  try {
    const res = await fetch(
      `${FETCH_STRAPI_URL}/api/blog?fields[0]=Title&populate[blog_seo][populate][shareImage][fields][0]=url`,
      {
        next: { revalidate: 3600 },
      },
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
      },
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
