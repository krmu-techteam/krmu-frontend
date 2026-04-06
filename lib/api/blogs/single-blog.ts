import { cache } from "react";
import { krmBlogURL } from "@/app/constant";
import {
  AllBlogCategoriesResponse,
  BlogImageIdResponse,
  SingleBlogResponse,
} from "@/lib/types/blogs/single-blog";

export const getSingleBlogDataBySlug = cache(async (
  slug: string = "",
): Promise<SingleBlogResponse> => {
  try {
    const res = await fetch(
      `${krmBlogURL}/wp-json/wp/v2/posts?slug=${slug}&_embed`,
      {
        next: { revalidate: 3600 }
      },
    );
    if (!res.ok) throw new Error("Failed to fetch Single Blog");
    const json: SingleBlogResponse = await res.json();
    return json;
  } catch (error) {
    console.error("Single blog fetch error:", error);
    return [];
  }
});

// {
//   filters: {
//     blog_slug: {
//       $eq: "is-cat-exam-tough",
//     },
//   },
//   fields: ["title", "blog_slug"],
//   populate: {
//   featured_image: {
//    populate: '*'
//   },
//     single_blog: {
//       on: {
//         "blog.single-blog-component": {
//           populate: {
//             fields:['single_blog_content'],
//             faqs: {
//               populate: '*'
//             }
//           }
//         }
//       }
//     }
//   }
// }

export async function getAllBlogCategories(): Promise<AllBlogCategoriesResponse> {
  try {
    const res = await fetch(
      `${krmBlogURL}/wp-json/wp/v2/categories?per_page=100&_fields=id,name,slug,taxonomy`,
      {
        next: { revalidate: 3600 }
      },
    );
    if (!res.ok) throw new Error("Failed to fetch Blog Categories");
    const json: AllBlogCategoriesResponse = await res.json();
    return json;
  } catch (error) {
    console.error("All categories fetch error:", error);
    return [];
  }
}

// export async function getBlogImageById(imgId: number): Promise<string> {
//   if (!imgId) throw new Error("Image ID is required");

//   const res = await fetch(
//     `${krmBlogURL}/wp-json/wp/v2/media/${imgId}?_fields=guid`,
//     {
//       next: { revalidate: 3600 },
//     }
//   );

//   if (!res.ok) {
//     throw new Error("Failed to fetch image by ID");
//   }

//   const json: BlogImageIdResponse = await res.json();

//   return json?.guid?.rendered ?? "";
// }

export const getBlogImageById = cache(async (imgId: number): Promise<string | null> => {
  if (!imgId) return null;

  try {
    const res = await fetch(
      `${krmBlogURL}/wp-json/wp/v2/media/${imgId}?_fields=guid`,
      {
        next: { revalidate: 3600 }
      }
    );

    if (!res.ok) {
      console.warn("Image not found for ID:", imgId, res.status);
      return null;
    }

    const json: BlogImageIdResponse = await res.json();
    return json?.guid?.rendered ?? null;
  } catch (error) {
    console.error("Error fetching image:", imgId, error);
    return null;
  }
});

export async function getBlogImageByIdClientComp(id: number) {
  try {
    const res = await fetch(`${krmBlogURL}/wp-json/wp/v2/media/${id}`);
    if (!res.ok) return null;
    const json = await res.json();
    return json.source_url;
  } catch (error) {
    console.error("Client image fetch error:", error);
    return null;
  }
}
