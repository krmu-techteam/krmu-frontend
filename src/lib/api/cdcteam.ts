import { FETCH_STRAPI_URL } from "@/app/constant";

export async function getCDCTeam(): Promise<CdcTeamResponse["data"]> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/career-development-centre-teams?fields[0]=cdc_name&fields[1]=cdc_designation&populate[cdc_team_img][fields][0]=url&pagination[pageSize]=30&pagination[page]=1`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );
  if (!res.ok)
    throw new Error("Failed to fetch Career Development Centre Team");
  const json = await res.json();
  return json.data;
}
export interface CdcTeamResponse {
  data: CdcTeamItem[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface CdcTeamItem {
  id: number;
  documentId: string;
  cdc_name: string;
  cdc_designation: string;
  cdc_team_img: CdcTeamImage;
}

export interface CdcTeamImage {
  id: number;
  documentId: string;
  url: string;
}

// {
// fields: ['cdc_name', 'cdc_designation'],
// populate: {
//   cdc_team_img:{
//     fields: ['url']
//   }
// },
// pagination: {
//   pageSize: 30,
//   page: 1,
// },

// }
