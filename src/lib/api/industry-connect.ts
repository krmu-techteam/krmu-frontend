import { FETCH_STRAPI_URL } from "@/app/constant";
import { IndustryConnectResponse } from "../types/industry-connect";

export async function getIndustryConnectPage(): Promise<
  IndustryConnectResponse["data"]
> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/industry-connect?fields[0]=title&fields[1]=description&fields[2]=partnerships_title&populate[bgimage]=true&populate[partnership_logos][populate]=*&populate[cuisines][fields][0]=heading&populate[cuisines][fields][1]=desc&populate[cuisines][populate][cuisine_img]=true&populate[mural_event][fields][0]=heading&populate[mural_event][fields][1]=desc&populate[mural_event][populate][mural_img]=true&populate[networking_opportunities][fields][0]=heading&populate[networking_opportunities][fields][1]=desc&populate[networking_opportunities][fields][2]=opportunities_content&populate[networking_opportunities][populate][opportunities_img_1]=true&populate[networking_opportunities][populate][opportunities_img_2]=true&populate[shaping_career][fields][0]=heading&populate[shaping_career][fields][1]=shaping_career&populate[shaping_career][populate][shaping_career_img_1]=true&populate[shaping_career][populate][shaping_career_img_2]=true&populate[seminar][fields][0]=heading&populate[seminar][fields][1]=desc&populate[seminar][populate][seminar_img_1]=true&populate[seminar][populate][seminar_img_2]=true&populate[idea_forge][fields][0]=heading&populate[idea_forge][fields][1]=desc&populate[idea_forge][populate][idea_forge_img_1]=true&populate[expert_talk_role][fields][0]=heading&populate[expert_talk_role][fields][1]=desc&populate[expert_talk_role][populate][expert_talk_img]=true&populate[deputy_commissioner][fields][0]=big_para&populate[deputy_commissioner][fields][1]=desc&populate[deputy_commissioner][populate][deputy_img]=true`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch industry connect page data");
  const json: IndustryConnectResponse = await res.json();
  return json.data;
}

// {
//  fields: ['title', 'description', 'partnerships_title'],
//  populate: {
//    bgimage: true,
//    partnership_logos : {
//      populate: '*'
//    },

//    cuisines:{
//     fields: ['heading', 'desc'],
//     populate: {
//      cuisine_img: true
//     }
//    } ,
//    mural_event : {
//     fields: ['heading', 'desc'],
//     populate: {
//      mural_img: true
//     }
//    },
//    networking_opportunities: {
//     fields: ['heading', 'desc', 'opportunities_content'],
//     populate: {
//      opportunities_img_1: true,
//      opportunities_img_2: true
//     }
//    },
//    shaping_career: {
//      fields: ['heading', 'shaping_career'],
//       populate: {
//      shaping_career_img_1: true,
//      shaping_career_img_2: true
//     }
//    },
//    seminar: {
//      fields: ['heading', 'desc'],
//       populate: {
//      seminar_img_1: true,
//      seminar_img_2: true
//     }
//    },
//    idea_forge: {
//      fields: ['heading', 'desc'],
//       populate: {
//      idea_forge_img_1: true,
//     }
//    },
//    expert_talk_role: {
//      fields: ['heading', 'desc'],
//       populate: {
//      expert_talk_img: true,
//     }
//    },
//    deputy_commissioner: {
//       fields: ['big_para', 'desc'],
//       populate: {
//      deputy_img: true,
//     }
//    }

//  }
// }
