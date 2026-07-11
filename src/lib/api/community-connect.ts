import { FETCH_STRAPI_URL } from "@/app/constant";
import { StrapiMedia } from "../types/common";

export async function getNSSCommunityConnectData(): Promise<
  NSSConnectResponse["data"]
> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/community-connect?populate[nss_connect_connect_img_grid][fields][0]=heading&populate[nss_connect_connect_img_grid][populate][nssimgs][fields][0]=url`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch NSS Community Connect");
  const json = await res.json();
  return json.data;
}

export interface NSSConnectResponse {
  data: NSSConnectData;
  meta: Record<string, any>;
}

export interface NSSConnectData {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  nss_connect_connect_img_grid: NSSGridItem[];
}

export interface NSSGridItem {
  id: number;
  heading: string;
  nssimgs: StrapiMedia[];
}

export interface NSSImage {
  id: number;
  documentId: string;
  url: string;
}

// {
//  populate: {
//    nss_connect_connect_img_grid : {
//      fields: ['heading'],
//      populate: {
//        nssimgs : {
//         fields: ['url']
//       }
//      }
//    }
//  }
// }
