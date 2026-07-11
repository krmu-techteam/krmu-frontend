import { FETCH_STRAPI_URL } from "@/app/constant";
import { AboutKRMU } from "../types/about";

export async function getAboutKRMU(): Promise<AboutKRMU["data"]> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/about-krmu?populate[accrediation][fields][0]=title&populate[accrediation][populate][accrediationlogos]=true&populate[krmugroup][fields][0]=title&populate[krmugroup][fields][1]=subtitle&populate[krmugroup][fields][2]=description&populate[krmugroup][populate][krmbranch]=true&populate[halloffame][fields][0]=title&populate[halloffame][populate][hallfame]=true&populate[visionmission][fields][0]=visiontitle&populate[visionmission][fields][1]=missiontitle&populate[visionmission][fields][2]=visiondescription&populate[visionmission][fields][3]=missiondescription&populate[internationcollaboration][fields][0]=title&populate[internationcollaboration][fields][1]=description&populate[internationcollaboration][populate][intcollabbtn]=true&populate[internationcollaboration][populate][internationcollablogos]=true&populate[internationcollaboration][populate][image]=true&populate[krmucommittee][fields][0]=title&populate[krmucommittee][fields][1]=description&populate[krmucommittee][populate][committeebtn]=true`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );
  if (!res.ok) throw new Error("Failed To Fetch AboutKRMU Data");

  const json: AboutKRMU = await res.json();
  return json.data;
}

// {
//   populate: {
//     accrediation: {
//       fields: ['title'],
//       populate: {
//         accrediationlogos: true
//       }
//     },
//     krmugroup: {
//       fields: ['title', 'subtitle', 'description'],
//       populate: {
//         krmbranch: true
//       }
//     },
//     halloffame: {
//       fields: ['title'],
//       populate: {
//         hallfame: true
//       }
//     },
//     visionmission: {
//       fields: ['visiontitle', 'missiontitle', 'visiondescription', 'missiondescription']
//     },
//     internationcollaboration: {
//       fields: ['title', 'description'],
//       populate: {
//         intcollabbtn: true,
//         internationcollablogos: true,
//         image: true
//       }
//     },
//     krmucommittee: {
//       fields: ['title', 'description'],
//       populate: {
//         committeebtn: true
//       }
//     }
//   }
// }
