import { FETCH_STRAPI_URL } from "@/app/constant";
import { StrapiMedia } from "../types/common";

export async function getFacultyAdvisory(): Promise<
  AdvisoryApiResponse["data"]
> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/faculties?filters[faculty_type][$eq]=Advisory&fields[0]=faculty_name&fields[1]=faculty_type&fields[2]=facultyslug&fields[3]=faculty_card_desg&populate[faculty_img][fields][0]=url`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch Advisory Data");
  const json = await res.json();
  return json.data;
}

// Faculty item
export type Advisory = {
  id: number;
  documentId: string;
  faculty_name: string;
  faculty_type: "Advisory" | string;
  facultyslug: string;
  faculty_img: StrapiMedia;
  faculty_card_desg: string;
};

// Pagination
export type Pagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

// Meta wrapper
export type Meta = {
  pagination: Pagination;
};

// Full API response
export type AdvisoryApiResponse = {
  data: Advisory[];
  meta: Meta;
};

// {

// filters: {
//   faculty_type: {
//     $eq: 'Advisory',
//   },
// },
// fields: ['faculty_name', 'faculty_type', 'facultyslug', 'faculty_card_desg'],
//  populate: {
//   faculty_img: {
//     fields: ['url']
//   }
//  }
// }