import { FETCH_STRAPI_URL } from "@/app/constant";
import { Admission2Response } from "@/lib/types/admission2";

export async function getAdmission2PageData(): Promise<
  Admission2Response["data"]
> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/admission2?populate[adm_toc][fields][0]=heading&populate[adm_toc][fields][1]=highlightheading&populate[adm_toc][fields][2]=description&populate[adm_toc][populate][tocimg][fields][0]=url&populate[adm_toc][populate][tocfaq][fields][0]=tocpoint&populate[adm_toc][populate][tocfaq][populate][faq][fields][0]=ques&populate[adm_toc][populate][tocfaq][populate][faq][fields][1]=ans&populate[adm_toc][populate][tocbtn][fields][0]=btn_text&populate[adm_toc][populate][tocbtn][fields][1]=btn_link&populate[adm2_alumni][fields][0]=name&populate[adm2_alumni][fields][1]=qualification&populate[adm2_alumni][fields][2]=content&populate[adm2_alumni][populate][review_img][fields][0]=url&populate[adm2_alumni][populate][alumni_img][fields][0]=url`,
    {
      next: {
        revalidate: 10800,
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch Admission 2 page Data");
  const json = await res.json();
  return json.data;
}

// {
//   populate: {
  
//     adm_toc: {
//       fields: ['heading', 'highlightheading', 'description'],
       
//       populate: {
//         tocimg: {
//           fields: ['url']
//         },
//         tocfaq: {
//           fields: ['tocpoint'],
//           populate: {
//             faq: {
//               fields: ['ques', 'ans']
//             }
//           }
//         },
//         tocbtn: {
//           fields: ['btn_text', 'btn_link']
//         }
//       },
     
//     },
//      adm2_alumni : {
//          fields: ['name', 'qualification', 'content'],
//          populate:{
//            review_img: {
//              fields: ['url']
//            },
//            alumni_img: {
//             fields: ['url']
//            }
//          } 
//       },
//   }
// }
