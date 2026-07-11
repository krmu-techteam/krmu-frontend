import { FETCH_STRAPI_URL } from "@/app/constant";
import {
  PhdAdmissionResponse,
} from "../types/admissionenroll";

export async function getPhdAdmissionData(): Promise<
  PhdAdmissionResponse["data"]
> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/phd-admission?fields[0]=heading&fields[1]=subheading&fields[2]=content&populate[hero_btn][fields][0]=btn_text&populate[hero_btn][fields][1]=btn_link&populate[heroimg][fields][0]=url&populate[phdprogramme_offered][fields][0]=phdOffered_heading&populate[phdprogramme_offered][populate][phd_programmes_schools][populate][offered_schools][fields][0]=heading&populate[phdprogramme_offered][populate][phd_programmes_schools][populate][offered_schools][fields][1]=content&populate[phdprogramme_offered][populate][phd_programmes_schools][populate][offered_schools][fields][2]=url&populate[phdprogramme_offered][populate][phd_programmes_schools][populate][offered_schools][populate][school_img][fields][0]=url&populate[phdprogramme_offered][populate][even_odd_sem_card][fields][0]=title&populate[phdprogramme_offered][populate][even_odd_sem_card][fields][1]=url&populate[personal_interview][fields][0]=heading&populate[personal_interview][fields][1]=info_heading&populate[personal_interview][fields][2]=content&populate[personal_interview][populate][personal_interview_img][fields][0]=url&populate[phd_admission_acc][fields][0]=ques&populate[phd_admission_acc][fields][1]=ans`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!res.ok) throw new Error("Failed to fetch Phd Admission Data");
  const json = await res.json();
  return json.data;
}

// {
//  fields: ['heading', 'subheading', 'content'],
//  populate: {
//    hero_btn: {
//      fields: ['btn_text', 'btn_link']
//    },
   
//    heroimg: {
//     fields: ['url']
//    },
//    phdprogramme_offered: {
//     fields: ['phdOffered_heading'],
   
//        populate: {
//        phd_programmes_schools: {
//          populate: {
//           offered_schools : {
//             fields: ['heading', 'content', 'url'],
//            populate: {
//              school_img: {
//               fields: ['url']
//             }
//            }
//           }
//          }
//        },
//        even_odd_sem_card : {
//          fields: ['title', 'url']

//        }
//        }
     
//    },
//    personal_interview: {
//      fields: ['heading', 'info_heading', 'content'],
//      populate: {
//         personal_interview_img: {
//           fields: ['url']
//         }
//       }
//    },
//    phd_admission_acc : {
//       fields: ['ques', 'ans']

//    }
//  }
// }