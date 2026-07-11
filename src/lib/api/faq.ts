import { FETCH_STRAPI_URL } from "@/app/constant";
import { FAQsResponse } from "../types/faq";

export async function getFaqsData(): Promise<FAQsResponse["data"]> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/faq?fields[0]=heading&fields[1]=subheading&populate[btn][fields][0]=btn_text&populate[btn][fields][1]=btn_link&populate[faqs][fields][0]=ques&populate[faqs][fields][1]=ans`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch FAQS Data");
  const json: FAQsResponse = await res.json();
  return json.data;
}


// {
// fields: ['heading', 'subheading'],
// populate: {
//   btn: {
//     fields: ['btn_text', 'btn_link']
//   },
//   faqs: {
//     fields: ['ques', 'ans']
//   }
// }
// }