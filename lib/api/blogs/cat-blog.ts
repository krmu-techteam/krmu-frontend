import { krmBlogURL } from "@/app/constant";

export async function getCategoryBySlug(slug: string) {
  const res = await fetch(
    `${krmBlogURL}/wp-json/wp/v2/categories?slug=${slug}`,
    { next: { revalidate: 3600, tags: ["blogs"] } }
  );

  const data = await res.json();
  return data?.[0] || null;
}
