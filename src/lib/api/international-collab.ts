import { FETCH_STRAPI_URL } from "@/app/constant";
import { INTCOLLABRESPONSE } from "../types/international-collab";

export async function getInternationCollabData(): Promise<
  INTCOLLABRESPONSE["data"]
> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/international-collaboration?fields[0]=title&fields[1]=desc&populate[int_collab_btn]=true&populate[int_collab_hero_grid]=true&populate[intcollab_card][fields][0]=int_collab_card_content&populate[intcollab_card][populate][int_collab_img]=true&populate[int_collab_full_width_card][fields][0]=int_collab_full_width_content&populate[int_collab_full_width_card][populate][int_collab_full_width_card_img]=true`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch industry connect page data");
  const json: INTCOLLABRESPONSE = await res.json();
  return json.data;
}

// {
//   fields: ['title', 'desc'],
//   populate: {
//     int_collab_btn: true,
//     int_collab_hero_grid: true,
//     intcollab_card: {
//       fields: ['int_collab_card_content'],
//       populate: {
//         int_collab_img: true,
//       },
//     },
//     int_collab_full_width_card: {
//       fields: ['int_collab_full_width_content'],
//       populate: {
//         int_collab_full_width_card_img: true,
//       },
//     },
//   },
// }
