import { FETCH_STRAPI_URL } from "@/app/constant";
import { ProgrammePageDataResponse } from "../types/programme";

export async function getProgrammePageData(): Promise<
  ProgrammePageDataResponse["data"]
> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/programme?populate[alumni][populate]=*`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!res.ok) throw new Error("Failed to fetch ProgrammePageData");

  // Type the JSON explicitly
  const json: ProgrammePageDataResponse = await res.json();
  return json.data;
}

// {
//  populate: {
//    alumni: {
//      populate: '*'
//    }
//  }
// }
