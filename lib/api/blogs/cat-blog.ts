import { krmBlogURL } from "@/app/constant";

export async function getCategoryBySlug(slug: string) {
  try {
    const res = await fetch(
      `${krmBlogURL}/wp-json/wp/v2/categories?slug=${slug}`,
      { next: { revalidate: 3600, tags: ["blogs"] } }
    );

    if (!res.ok) return null;

    const data = await res.json();
    return data?.[0] || null;
  } catch (error) {
    console.error("Category fetch error:", error);
    return null;
  }
}
