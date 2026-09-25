// lib/api/blogs/single-blog.ts  (complete file, replace everything)

import { cache } from "react";
import { krmBlogURL } from "@/app/constant";
import {
  AllBlogCategoriesResponse,
  BlogImageIdResponse,
  SingleBlogResponse,
} from "@/lib/types/blogs/single-blog";

// During `next build` there is no 10s limit, so be patient and retry.
// At runtime on Netlify a function is killed at ~10s, so fail fast instead.
const IS_BUILD = process.env.NEXT_PHASE === "phase-production-build";
const POST_TIMEOUT_MS = IS_BUILD ? 25000 : 6500;
const LIST_TIMEOUT_MS = IS_BUILD ? 15000 : 4000;
const MEDIA_TIMEOUT_MS = IS_BUILD ? 15000 : 2500;
const MAX_ATTEMPTS = IS_BUILD ? 3 : 1;

// fetch with timeout (+ retries during build). Throws on any failure.
async function wpFetch(url: string, timeoutMs: number): Promise<Response> {
  let lastError: unknown;

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    try {
      const res = await fetch(url, {
        next: { revalidate: 3600, tags: ["blogs"] },
        signal: AbortSignal.timeout(timeoutMs),
        headers: { Accept: "application/json" },
      });
      if (res.ok) return res;
      lastError = new Error(`WP responded ${res.status} for ${url}`);
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError;
}

// ------------------------------------------------------------
// One post by slug.
//  - returns []  -> WordPress answered and the post really doesn't exist (404)
//  - THROWS      -> WordPress was slow/down (so a 404 is never cached by mistake)
// cache() lets generateMetadata and the page share one request.
// ------------------------------------------------------------
export const getSingleBlogDataBySlug = cache(
  async (slug: string = ""): Promise<SingleBlogResponse> => {
    const params = new URLSearchParams({
      slug,
      // Embed only what the page uses (author, featured image, categories/tags).
      // A bare `_embed` embeds every link, which is much heavier.
      _embed: "author,wp:featuredmedia,wp:term",
    });

    const res = await wpFetch(
      `${krmBlogURL}/wp-json/wp/v2/posts?${params}`,
      POST_TIMEOUT_MS,
    );

    const json: SingleBlogResponse = await res.json();
    if (!Array.isArray(json)) throw new Error("Unexpected WP response");
    return json;
  },
);

// ------------------------------------------------------------
// All categories (non-critical: falls back to an empty list)
// ------------------------------------------------------------
export async function getAllBlogCategories(): Promise<AllBlogCategoriesResponse> {
  try {
    const res = await wpFetch(
      `${krmBlogURL}/wp-json/wp/v2/categories?per_page=100&_fields=id,name,slug,taxonomy`,
      LIST_TIMEOUT_MS,
    );
    const json: AllBlogCategoriesResponse = await res.json();
    return json;
  } catch (error) {
    console.error("All categories fetch error:", error);
    return [];
  }
}

// ------------------------------------------------------------
// Image URL by media id (author photo, etc.)
// Same result as before (guid.rendered), but with a short timeout.
// Never throws: a slow or missing image must not break the page.
// ------------------------------------------------------------
export const getBlogImageById = cache(
  async (imgId?: number | null): Promise<string | null> => {
    if (!imgId) return null;

    try {
      const res = await wpFetch(
        `${krmBlogURL}/wp-json/wp/v2/media/${imgId}?_fields=guid`,
        MEDIA_TIMEOUT_MS,
      );
      const json: BlogImageIdResponse = await res.json();
      return json?.guid?.rendered ?? null;
    } catch (error) {
      console.error("Error fetching image:", imgId, error);
      return null;
    }
  },
);

// ------------------------------------------------------------
// Used from client components (runs in the browser)
// ------------------------------------------------------------
export async function getBlogImageByIdClientComp(id: number) {
  try {
    const res = await fetch(
      `${krmBlogURL}/wp-json/wp/v2/media/${id}?_fields=source_url`,
    );
    if (!res.ok) return null;
    const json = await res.json();
    return json.source_url;
  } catch (error) {
    console.error("Client image fetch error:", error);
    return null;
  }
}

// ------------------------------------------------------------
// Slugs of the latest posts, used to pre-render them at build time.
// Returns [] on failure so a hiccup here never breaks the build.
// ------------------------------------------------------------
export async function getAllBlogSlugs(limit: number = 20): Promise<string[]> {
  try {
    const res = await wpFetch(
      `${krmBlogURL}/wp-json/wp/v2/posts?per_page=${limit}&_fields=slug`,
      LIST_TIMEOUT_MS,
    );
    const data = await res.json();
    if (!Array.isArray(data)) return [];
    return data.map((p) => p?.slug).filter(Boolean);
  } catch (error) {
    console.error("Blog slugs fetch error:", error);
    return [];
  }
}

// // lib/api/blogs/single-blog.ts  (complete file, replace everything)

// import { cache } from "react";
// import { krmBlogURL } from "@/app/constant";
// import {
//   AllBlogCategoriesResponse,
//   BlogImageIdResponse,
//   SingleBlogResponse,
// } from "@/lib/types/blogs/single-blog";

// // During `next build` there is no 10s limit, so be patient and retry.
// // At runtime on Netlify a function is killed at ~10s, so fail fast instead.
// const IS_BUILD = process.env.NEXT_PHASE === "phase-production-build";
// const POST_TIMEOUT_MS = IS_BUILD ? 25000 : 6500;
// const LIST_TIMEOUT_MS = IS_BUILD ? 15000 : 4000;
// const MEDIA_TIMEOUT_MS = IS_BUILD ? 15000 : 2500;
// const MAX_ATTEMPTS = IS_BUILD ? 3 : 1;

// // fetch with timeout (+ retries during build). Throws on any failure.
// async function wpFetch(url: string, timeoutMs: number): Promise<Response> {
//   let lastError: unknown;

//   for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
//     try {
//       const res = await fetch(url, {
//         next: { revalidate: 3600, tags: ["blogs"] },
//         signal: AbortSignal.timeout(timeoutMs),
//         headers: { Accept: "application/json" },
//       });
//       if (res.ok) return res;
//       lastError = new Error(`WP responded ${res.status} for ${url}`);
//     } catch (error) {
//       lastError = error;
//     }
//   }

//   throw lastError;
// }

// // ------------------------------------------------------------
// // One post by slug.
// //  - returns []  -> WordPress answered and the post really doesn't exist (404)
// //  - THROWS      -> WordPress was slow/down (so a 404 is never cached by mistake)
// // cache() lets generateMetadata and the page share one request.
// // ------------------------------------------------------------
// export const getSingleBlogDataBySlug = cache(
//   async (slug: string = ""): Promise<SingleBlogResponse> => {
//     const params = new URLSearchParams({
//       slug,
//       // Embed only what the page uses (author, featured image, categories/tags).
//       // A bare `_embed` embeds every link, which is much heavier.
//       _embed: "author,wp:featuredmedia,wp:term",
//     });

//     const res = await wpFetch(
//       `${krmBlogURL}/wp-json/wp/v2/posts?${params}`,
//       POST_TIMEOUT_MS,
//     );

//     const json: SingleBlogResponse = await res.json();
//     if (!Array.isArray(json)) throw new Error("Unexpected WP response");
//     return json;
//   },
// );

// // ------------------------------------------------------------
// // All categories (non-critical: falls back to an empty list)
// // ------------------------------------------------------------
// export async function getAllBlogCategories(): Promise<AllBlogCategoriesResponse> {
//   try {
//     const res = await wpFetch(
//       `${krmBlogURL}/wp-json/wp/v2/categories?per_page=100&_fields=id,name,slug,taxonomy`,
//       LIST_TIMEOUT_MS,
//     );
//     const json: AllBlogCategoriesResponse = await res.json();
//     return json;
//   } catch (error) {
//     console.error("All categories fetch error:", error);
//     return [];
//   }
// }

// // ------------------------------------------------------------
// // Image URL by media id (author photo, etc.)
// // Same result as before (guid.rendered), but with a short timeout.
// // Never throws: a slow or missing image must not break the page.
// // ------------------------------------------------------------
// export const getBlogImageById = cache(
//   async (imgId?: number | null): Promise<string | null> => {
//     if (!imgId) return null;

//     try {
//       const res = await wpFetch(
//         `${krmBlogURL}/wp-json/wp/v2/media/${imgId}?_fields=guid`,
//         MEDIA_TIMEOUT_MS,
//       );
//       const json: BlogImageIdResponse = await res.json();
//       return json?.guid?.rendered ?? null;
//     } catch (error) {
//       console.error("Error fetching image:", imgId, error);
//       return null;
//     }
//   },
// );

// // ------------------------------------------------------------
// // Used from client components (runs in the browser)
// // ------------------------------------------------------------
// export async function getBlogImageByIdClientComp(id: number) {
//   try {
//     const res = await fetch(
//       `${krmBlogURL}/wp-json/wp/v2/media/${id}?_fields=source_url`,
//     );
//     if (!res.ok) return null;
//     const json = await res.json();
//     return json.source_url;
//   } catch (error) {
//     console.error("Client image fetch error:", error);
//     return null;
//   }
// }

// // ------------------------------------------------------------
// // Slugs of the latest posts, used to pre-render them at build time.
// // Returns [] on failure so a hiccup here never breaks the build.
// // ------------------------------------------------------------
// export async function getAllBlogSlugs(limit: number = 20): Promise<string[]> {
//   try {
//     const res = await wpFetch(
//       `${krmBlogURL}/wp-json/wp/v2/posts?per_page=${limit}&_fields=slug`,
//       LIST_TIMEOUT_MS,
//     );
//     const data = await res.json();
//     if (!Array.isArray(data)) return [];
//     return data.map((p) => p?.slug).filter(Boolean);
//   } catch (error) {
//     console.error("Blog slugs fetch error:", error);
//     return [];
//   }
// }
