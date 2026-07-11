import { FETCH_STRAPI_URL } from "@/app/constant";
import { StrapiMedia } from "../types/common";

export async function getKRMUTimesPageData(): Promise<
  KRMUTimesResponse["data"]
> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/krmu-time?fields[0]=heading&populate[krmu_time_cards][fields][0]=pdf_url&populate[krmu_time_cards][populate][img][fields][0]=url`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch KRMU Times Data");
  const json = await res.json();
  return json.data;
}

export interface KRMUTimesResponse {
  data: KRMUTimesData; 
  meta: Record<string, any>;
}

export interface KRMUTimesData {
  id: number;
  documentId: string;
  heading: string;
  krmu_time_cards: KRMUTimesCard[];
}

export interface KRMUTimesCard {
  id: number;
  pdf_url: string;
  img: StrapiMedia;
}

export interface KRMUTimesImage {
  id: number;
  documentId: string;
  url: string;
}

// {
//  fields: ['heading'],
//  populate: {
//    krmu_time_cards : {
//      fields: ['pdf_url'],
//     populate:{
//        img: {
//       fields: ['url']
//      }
//     }
//    }
//  }
// }
