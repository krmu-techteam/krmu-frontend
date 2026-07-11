import { FETCH_STRAPI_URL } from "@/app/constant";
import { FEEStructureSAARCResponse } from "../types/feestructuresaarc";

export async function getFeeStructureSAARCPageData(): Promise<
  FEEStructureSAARCResponse["data"]
> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/fee-structure-saarc-country?fields[0]=heading&fields[1]=subheading&fields[2]=saarc_url&populate[fee_struct_saarc_approval][fields][0]=office_order_url&populate[fee_struct_saarc_approval][fields][1]=fee_struct_click_here&populate[fee_structure_saarc_tab][fields][0]=fee_structure_saarc_panel_heading&populate[fee_structure_saarc_tab][populate][fee_structure_saarc_accc][fields][0]=panel_heading&populate[fee_structure_saarc_tab][populate][fee_structure_saarc_accc][fields][1]=panel_content`,
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
//   fields: ['heading', 'subheading', 'saarc_url'],
//   populate: {
//   fee_struct_saarc_approval:{
//      fields:['office_order_url', 'fee_struct_click_here'],  
//   },
//     fee_structure_saarc_tab : {
//       fields: ['fee_structure_saarc_panel_heading'],
//       populate:{
//         fee_structure_saarc_accc: {
//           fields: ['panel_heading', 'panel_content']
//         }
//       }
//     }
//   }
// }
