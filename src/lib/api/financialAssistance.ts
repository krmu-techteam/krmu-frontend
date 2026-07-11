import { FETCH_STRAPI_URL } from "@/app/constant";
import { FinancialAssistanceResponse } from "../types/financialAssistance";

export async function getFinancialPageData(): Promise<
  FinancialAssistanceResponse["data"]
> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/financial-assistance?fields[0]=heading&fields[1]=subheading&fields[2]=content&populate[bank_loan][populate][bank_loan_card][fields][0]=bank_contact_person&populate[bank_loan][populate][bank_loan_card][fields][1]=download_btn_url&populate[bank_loan][populate][bank_loan_card][fields][2]=quick_apply_btn_url&populate[bank_loan][populate][bank_loan_card][fields][3]=bankinfo&populate[bank_loan][populate][bank_loan_card][populate][bank_img][fields][0]=url&populate[nbfc_card][populate][nbfc_cards][fields][0]=bank_contact_person&populate[nbfc_card][populate][nbfc_cards][fields][1]=download_btn_url&populate[nbfc_card][populate][nbfc_cards][fields][2]=quick_apply_btn_url&populate[nbfc_card][populate][nbfc_cards][fields][3]=bankinfo&populate[nbfc_card][populate][nbfc_cards][populate][bank_img][fields][0]=url`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!res.ok)
    throw new Error("Failed to fetch Financial Assistance Page Data");
  const json = await res.json();
  return json.data;
}

// {
//  fields: ['heading', 'subheading', 'content'],
//  populate: {
//   bank_loan: {
//     populate: {
//       bank_loan_card : {
//         fields: ['bank_contact_person', 'download_btn_url', 'quick_apply_btn_url', 'bankinfo'],
//         populate: {
//           bank_img: {
//             fields: ['url']
//           }
//         } 
//       }
//     }
//   },
//   nbfc_card: {
//     populate: {
//       nbfc_cards : {
//         fields: ['bank_contact_person', 'download_btn_url', 'quick_apply_btn_url', 'bankinfo'],
//         populate: {
//           bank_img: {
//             fields: ['url']
//           }
//         } 
//       }
//     }
//   } 
//  }
// }