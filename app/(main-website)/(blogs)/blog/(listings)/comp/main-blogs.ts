// lib/types/blogs/main-blogs.ts
//
// ⚠️ Merge with your existing type. The important addition is `_embedded`.

export type MainBlogs = {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  featured_media: number;
  date_gmt: string;
  _embedded?: {
    "wp:featuredmedia"?: { source_url?: string }[];
  };
};