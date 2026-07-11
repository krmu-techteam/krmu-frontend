import { FETCH_STRAPI_URL } from "@/app/constant";
import { DeanHonorResponse } from "../types/dean-honors";

export async function getDeansHonorsData(): Promise<
  DeanHonorResponse["data"]
> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/dean-honor-list?fields[0]=title&populate[herobg]=true&populate[dean_honor_acc][fields][0]=title&populate[dean_honor_acc][populate][dean_honor_html][populate]=*`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch industry connect page data");
  const json: DeanHonorResponse = await res.json();
  return json.data;
}

// {
//   fields: ['title'],
//   populate: {
//     herobg: true,
//     dean_honor_acc: {
//       fields: ['title'],
//       populate: {
//         dean_honor_html: {
//           populate: '*',
//         },
//       },
//     },
//   },
// }
