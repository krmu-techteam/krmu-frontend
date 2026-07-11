import { FETCH_STRAPI_URL } from "@/app/constant";
import {
  PlacementOverviewResponse,
  RecruitersApiResponse,
} from "@/lib/types/placements/placements-overview";

export async function getPlacementOverview(): Promise<
  PlacementOverviewResponse["data"]
> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/placement-overview?populate[placementsoverviewcontainer][on][placement-overview.placement-hero][populate][fields][0]=title&populate[placementsoverviewcontainer][on][placement-overview.placement-hero][populate][fields][1]=subtitle&populate[placementsoverviewcontainer][on][placement-overview.placement-hero][populate][fields][2]=overviewvideo&populate[placementsoverviewcontainer][on][placement-overview.placement-hero][populate][overviewcounter][populate]=*&populate[placementsoverviewcontainer][on][placement-overview.placement-highlight][populate]=*&populate[placementsoverviewcontainer][on][placement-overview.placement-path][populate]=*`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch Meta info Data");

  const json: PlacementOverviewResponse = await res.json();
  return json.data;
}

export async function getPlacementRecruitersData(): Promise<
  RecruitersApiResponse["data"]
> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/placement-recruiter?populate[recruiters_logo][fields][0]=url&populate[recruiters_logo][fields][1]=alternativeText`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch Placement Recruiters Data");

  const json: RecruitersApiResponse = await res.json();
  return json.data;
}

// {
//  populate: {
//    placementsoverviewcontainer: {
//      on: {
//        'placement-overview.placement-hero' : {
//          populate: {
//            fields: ['title', 'subtitle', 'overviewvideo' ],
//            overviewcounter : {
//              populate: '*'
//            }
//          }
//        }
//      }
//    }
//  }
// }
