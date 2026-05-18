import { FETCH_STRAPI_URL } from "@/app/constant";

export async function getProgramMetadata(currentSlug: string) {
  try {
    const res = await fetch(
      `${FETCH_STRAPI_URL}/api/school-programmes?filters[programmeslug][$eq]=${currentSlug}&populate[school_category][populate]=*&populate[degree][populate]=*`,
      { cache: "no-store" }
    );
    if (res.ok) {
      const json = await res.json();
      const prog = json.data?.[0];
      return {
        schoolCategoryName: prog?.school_category?.name,
        degreeName: prog?.degree?.name,
      };
    }
  } catch (error) {
    console.error("Error fetching program metadata:", error);
  }
  return { schoolCategoryName: undefined, degreeName: undefined };
}
