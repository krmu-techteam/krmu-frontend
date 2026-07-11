import { FETCH_STRAPI_URL } from "@/app/constant";
import { MagazineReflectionResponse } from "../types/magazine-reflection";

export async function getMagazineReflection() {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/magazine-reflection?populate[bgimage]=true&populate[magazinecard][populate]=*`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );
  if (!res.ok) throw new Error("Fetch to fetch Magazines");

  const json: MagazineReflectionResponse = await res.json();
  return json.data;
}
