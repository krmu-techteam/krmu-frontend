import { FETCH_STRAPI_URL } from "@/app/constant";
import { COCType } from "../types/coc";

export async function getCoC(): Promise<COCType["data"]> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/code-of-conduct?populate[breadcrumb][fields][0]=breadcrumbtext&populate[breadcrumb][populate][backgroundimage]=true&populate[cocitems][fields][0]=listtext&populate[cocitems][fields][1]=listlink&populate[cocitems][populate][listicon]=true`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );
  if (!res.ok) {
    throw new Error("Failed To fetch COC Data");
  }

  const json: COCType = await res.json();
  return json.data;
}
