import { FETCH_STRAPI_URL } from "@/app/constant";

export async function getSportAndFacilityPageData(): Promise<
  SportFacilityResponse["data"]
> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/sport-facility?populate[sport_facility_grid][fields][0]=heading&populate[sport_facility_grid][populate][sport_fac_img][fields][0]=caption&populate[sport_facility_grid][populate][sport_fac_img][populate][img][fields][0]=url`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!res.ok) throw new Error("Do not fetch Sport Facility Page");
  const json: SportFacilityResponse = await res.json();
  return json.data;
}

export interface SportFacilityResponse {
  data: SportFacilityData;
  meta: Record<string, any>;
}

export interface SportFacilityData {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  sport_facility_grid: SportFacilityGridItem[];
}

export interface SportFacilityGridItem {
  id: number;
  heading: string;
  sport_fac_img: SportFacilityImageItem[];
}

export interface SportFacilityImageItem {
  id: number;
  caption: string;
  img: SportFacilityImage;
}

export interface SportFacilityImage {
  id: number;
  documentId: string;
  url: string;
}
