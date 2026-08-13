import { FETCH_STRAPI_URL } from "@/app/constant";
import { ProgrammePageDataResponse } from "../types/programme";

export async function getProgrammePageData(): Promise<
  ProgrammePageDataResponse["data"] | null
> {
  try {
    const res = await fetch(
      `${FETCH_STRAPI_URL}/api/programme?populate[alumni][populate]=*`,
      {
        next: {
          revalidate: 3600,
        },
      }
    );

    if (!res.ok) return null;

    const json: ProgrammePageDataResponse = await res.json();
    return json.data;
  } catch (error) {
    console.error("ProgrammePageData fetch error:", error);
    return null;
  }
}

// {
//  populate: {
//    alumni: {
//      populate: '*'
//    }
//  }
// }
