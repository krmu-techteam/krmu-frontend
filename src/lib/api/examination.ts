import { FETCH_STRAPI_URL } from "@/app/constant";
import { ExaminationResponse } from "../types/examination";

export async function getExaminationPageData(): Promise<
  ExaminationResponse["data"]
> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/examination?populate[examination_hero][fields][0]=title&populate[examination_hero][populate][bgimg][fields][0]=url&populate[imp_download][fields][0]=heading&populate[imp_download][populate][imp_download_card][fields][0]=title&populate[imp_download][populate][imp_download_card][populate][download_btn][fields][0]=btn_text&populate[imp_download][populate][imp_download_card][populate][download_btn][fields][1]=btn_link&populate[imp_download][populate][imp_download_card][populate][download_btn][fields][2]=btn_class&populate[abc_nad_digilocker][fields][0]=heading&populate[abc_nad_digilocker][fields][1]=desc&populate[abc_nad_digilocker][fields][2]=url&populate[abc_nad_digilocker][populate][abc_nad_btns][fields][0]=btn_text&populate[abc_nad_digilocker][populate][abc_nad_btns][fields][1]=btn_link&populate[abc_nad_digilocker][populate][abc_nad_btns][fields][2]=btn_class&populate[abc_nad_digilocker][populate][abc_nad_img][fields][0]=url&populate[apply_online][fields][0]=apply_online_content&populate[examination_faq][fields][0]=heading&populate[examination_faq][populate][faq_accordion][fields][0]=title&populate[examination_faq][populate][faq_accordion][populate][exam_faq_acc][fields][0]=ques&populate[examination_faq][populate][faq_accordion][populate][exam_faq_acc][fields][1]=answer`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch Examination Data");
  const json: ExaminationResponse = await res.json();
  return json.data;
}

// {
//  populate: {
//    examination_hero: {
//      fields: ['title'],
//      populate: {
//       bgimg: {
//         fields: ['url']
//       }
//      }
//    },
//    imp_download: {
//      fields: ['heading'],
//      populate: {
//        imp_download_card : {
//          fields: ['title'],
//          populate: {
//            download_btn: {
//              fields: ['btn_text', 'btn_link', 'btn_class']
//            }
//          }
//        }
//      }
//    },
//    abc_nad_digilocker: {
//      fields: ['heading', 'desc', 'url'],
//      populate: {
//      abc_nad_btns : {
//       fields: ['btn_text', 'btn_link', 'btn_class']
//      },
//      abc_nad_img: {
//       fields: ['url']
//      }
//      }
//    },
//    apply_online: {
//     fields: ['apply_online_content']
//    },
//    examination_faq: {
//      fields: ['heading'],
//      populate: {
//       faq_accordion: {
//         fields: ['title'],
//         populate: {
//          exam_faq_acc: {
//            fields: ['ques', 'answer']
//          }
//         }
//       }
//      }
//    }
//  }
// }
