import { FETCH_STRAPI_URL } from "@/app/constant";
import { FEEStructureResponse } from "../types/feestructure";

export async function getFeeStructurePageData(): Promise<
  FEEStructureResponse["data"]
> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/fee-structure?populate[fee_structure_hero][fields][0]=heading&populate[fee_structure_hero][fields][1]=fee_structure_url&populate[fee_structure_saarc][fields][0]=saarc_btn&populate[fee_structure_tab][fields][0]=tab_heading&populate[fee_structure_tab][populate][fee_structure_acc][fields][0]=panel_heading&populate[fee_structure_tab][populate][fee_structure_acc][fields][1]=panel_content`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!res.ok) throw new Error("Failed to fetch Fee Structure Page");
  const json = await res.json();
  return json.data;
}

// {
// populate: {
// fee_structure_hero: {
//    fields: ['heading','fee_structure_url']
// },
// fee_structure_saarc: {
//    fields: ['saarc_btn']
//   },
//   fee_structure_tab: {
//     fields: ['tab_heading'],
//     populate: {
//       fee_structure_acc : {
//         fields: ['panel_heading', 'panel_content'] 
//       }
//     }
//   }
//  }
// }
