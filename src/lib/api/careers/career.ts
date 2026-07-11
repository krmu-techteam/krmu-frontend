import { FETCH_STRAPI_URL, KRMUWordUrl } from "@/app/constant";
import { CareerResponse, SingleJobResponse } from "@/lib/types/careers/career";

export async function getAllJobsOrAlsoWithSearch(
  search: string = ""
): Promise<CareerResponse> {
  const baseURL = `${KRMUWordUrl}/careers2/wp-json/wp/v2/awsm_job_openings`;

  const url = `${baseURL}?page=1&per_page=60&_fields=id,slug,title.rendered${
    search ? `&search=${search}` : ""
  }`;

  const res = await fetch(url, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) throw new Error("Failed to fetch jobs");
  return res.json();
}

// export async function getAllJobsOrAlsoWithSearch(): Promise<CareerResponse> {
//   const res = await fetch(
//     "https://www.krmangalam.edu.in/careers/wp-json/wp/v2/awsm_job_openings?page=1&per_page=60&_fields=id,slug,title.rendered",
//     {
//       next: {
//         revalidate: 3600,
//       },
//     }
//   );
//   if (!res.ok) throw new Error("Failed to fetch jobs");
//   const json: CareerResponse = await res.json();
//   return json;
// }

export async function getSingleJobBySlug(slug: string = "") {
  const res = await fetch(
    `${KRMUWordUrl}/careers2/wp-json/wp/v2/awsm_job_openings?per_page=1&slug=${slug}&_fields=id,content,title,date,slug,class_list`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch Single jobs");
  const json: SingleJobResponse = await res.json();
  return json;
}
export async function getCareerPageData(): Promise<CareerPageResponse["data"]> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/career?populate[openings][populate][opening_btn][fields][0]=btn_text&populate[openings][populate][opening_btn][fields][1]=btn_link`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch Career Page Data");
  const json = await res.json();
  return json.data;
}
export interface CareerPageResponse {
  data: Data;
  meta: Record<string, unknown>;
}

export interface Data {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  openings: Openings;
}

export interface Openings {
  id: number;
  opening_btn: OpeningButton;
}

export interface OpeningButton {
  id: number;
  btn_text: string;
  btn_link: string;
}

// {
//  populate: {
//    openings: {
//    populate: {
//      opening_btn: {
//       fields: ['btn_text', 'btn_link']
//     }
//    }
//   }
//  }
// }
