import { FETCH_STRAPI_URL } from "@/app/constant";
import { PedagogyResponse } from "../types/pedagogy";

export async function getPedagogyContent(): Promise<PedagogyResponse["data"]> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/pedagogy?populate[pedagogy_hero][fields][0]=title&populate[pedagogy_hero][fields][1]=description&populate[pedagogy_hero][fields][2]=content&populate[pedagogy_hero][fields][3]=title2&populate[pedagogy_hero][populate][hero_bg][fields][0]=url&populate[classroom_teaching][fields][0]=heading&populate[classroom_teaching][fields][1]=desc&populate[lecture][fields][0]=title&populate[lecture][fields][1]=content&populate[lecture][populate][peda_img][fields][0]=url&populate[practicals][fields][0]=title&populate[practicals][fields][1]=content&populate[practicals][populate][peda_img][fields][0]=url&populate[innovative_work_lab][fields][0]=title&populate[innovative_work_lab][fields][1]=content&populate[innovative_work_lab][populate][peda_img][fields][0]=url&populate[workshop_guest_lecture][fields][0]=title&populate[workshop_guest_lecture][fields][1]=content&populate[workshop_guest_lecture][populate][peda_img][fields][0]=url&populate[technology_enable_learning][fields][0]=title&populate[technology_enable_learning][fields][1]=content&populate[technology_enable_learning][populate][peda_img][fields][0]=url&populate[mock_interview][fields][0]=title&populate[mock_interview][fields][1]=content&populate[mock_interview][populate][peda_img][fields][0]=url&populate[mentor_prog][fields][0]=title&populate[mentor_prog][fields][1]=content&populate[mentor_prog][populate][peda_img][fields][0]=url&populate[industry_connect][fields][0]=title&populate[industry_connect][fields][1]=subheading&populate[industry_connect][fields][2]=industry_connect_content&populate[industry_connect][populate][bgimage][fields][0]=url&populate[industry_connect][populate][mob_indus_connect_img][fields][0]=url`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch Pedagogy Data");
  const json: PedagogyResponse = await res.json();
  return json.data;
}

// {
//   populate: {
//     pedagogy_hero: {
//       fields: ['title', 'description', 'content', 'title2'],
//       populate: {
//         hero_bg: {
//           fields: ['url']
//         }
//       }
//     },
//     classroom_teaching: {
//       fields: ['heading', 'desc'],
//     },
//     lecture: {
//       fields: ['title', 'content'],
//       populate: {
//         peda_img: {
//           fields: ['url']
//         }
//       }
//     },
//     practicals: {
//       fields: ['title', 'content'],
//       populate: {
//         peda_img: {
//           fields: ['url']
//         }
//       }
//     },
//     innovative_work_lab: {
//       fields: ['title', 'content'],
//       populate: {
//         peda_img: {
//           fields: ['url']
//         }
//       }
//     },
//     workshop_guest_lecture: {
//       fields: ['title', 'content'],
//       populate: {
//         peda_img: {
//           fields: ['url']
//         }
//       }
//     },
//     technology_enable_learning: {
//       fields: ['title', 'content'],
//       populate: {
//         peda_img: {
//           fields: ['url']
//         }
//       }
//     },
//      mock_interview: {
//       fields: ['title', 'content'],
//       populate: {
//         peda_img: {
//           fields: ['url']
//         }
//       }
//     },
//      mentor_prog: {
//       fields: ['title', 'content'],
//       populate: {
//         peda_img: {
//           fields: ['url']
//         }
//       }
//     },
//     industry_connect: {
//       fields: ['title', 'subheading', 'industry_connect_content'],
//       populate: {
//         bgimage: {fields: ['url']},
//         mob_indus_connect_img: {
//           fields: ['url']
//         }
//       }
//     }
//   }
// }
