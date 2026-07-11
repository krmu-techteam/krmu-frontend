import { FETCH_STRAPI_URL } from "@/app/constant";

export async function getCorpAdvisoryTeamData(): Promise<
  CorporateAdvisoryResponse["data"]
> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/corporate-advisory-boards?fields[0]=name&fields[1]=corp_adv_info&populate[corp_adv_img][fields][0]=url&pagination[pageSize]=20&pagination[page]=1`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch corp advisory data");
  const json = await res.json();
  return json.data;
}

export interface CorporateAdvisoryResponse {
  data: CorporateAdvisorItem[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface CorporateAdvisorItem {
  id: number;
  documentId: string;
  name: string;
  corp_adv_info: string; // HTML string
  corp_adv_img: CorporateAdvisorImage;
}

export interface CorporateAdvisorImage {
  id: number;
  documentId: string;
  url: string;
}

// {

// fields: ['name', 'corp_adv_info'],
// populate:{
//   corp_adv_img: {
//     fields: ['url']
//   }
// },
// pagination: {
//   pageSize: 20,
//   page: 1,
// },

// }
