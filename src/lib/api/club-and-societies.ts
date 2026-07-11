import { FETCH_STRAPI_URL } from "@/app/constant";
import { ClubsAndSocietiesResponse } from "../types/club-and-societies";

export async function getClubAndSocitiesData() {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/club-and-society?populate[fields][0]=title&populate[fields][1]=desc&populate[featured_image][fields][0]=url&populate[clubsaccordions][fields][0]=title&populate[clubsaccordions][fields][1]=content&populate[clubsaccordions][populate][clubimages]=true`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch home page");

  const json: ClubsAndSocietiesResponse = await res.json();
  return json.data;
}

// {
//   populate: {
//     fields: ['title', 'desc'],

//       featured_image: {
//        fields: ['url']
//       },

//       clubsaccordions: {
//         fields: ['title', 'content'],
//         populate: {
//           clubimages : true
//         }
//       }

//   }
// }
