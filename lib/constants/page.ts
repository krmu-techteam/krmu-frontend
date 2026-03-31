import { FETCH_STRAPI_URL } from "@/app/constant";
import { StrapiMedia } from "../types/common";

export async function getCustomPageData(
  slug: string = "",
): Promise<CustomPageResponse["data"]> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/pages?filters[slug][$eq]=${slug}&populate[fields][0]=title&populate[fields][1]=maincontent2&populate[fields][2]=custom_page_css&populate[fields][3]=custom_page_js&populate[fields][4]=is_custom_page&populate[seo][populate]=*`,
    {
      next: {
        revalidate: 120,
      },
    },
  );
  if (!res.ok) throw new Error("Failed to fetch Custom page data");
  const json = await res.json();
  return json.data;
}

export async function checkCustomPage(
  slug: string = "",
): Promise<IsCustomPageResponse["data"]> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/pages?filters[slug][$eq]=${slug}&fields[0]=is_custom_page&fields[1]=slug`,
    {
      next: {
        revalidate: 300,
      },
    },
  );
  if (!res.ok) throw new Error("Failed to fetch is Custom page data");
  const json = await res.json();
  return json.data;
}
export type IsCustomPageResponse = {
  data: isCustPage[];
  meta: Meta;
};

export type isCustPage = {
  id: number;
  documentId: string;
  is_custom_page: string;
  slug: string;
};

// {
//   filters:{
//     slug: {
//        $eq: 'my-slug'
//      }
//   },

//    fields: ['is_custom_page', 'slug'],

// }

export interface CustomPageResponse {
  data: PageData[];
  meta: Meta;
}

export interface PageData {
  id: number;
  documentId: string;
  slug: string;
  title: string;
  maincontent2: string | null;
  is_custom_page: string;
  custom_page_css: string | null;
  custom_page_js: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  seo: Seo;
}

export interface Seo {
  id: number;
  metaTitle: string;
  metaDescription: string;
  canonical: string | null;
  metaKeyword: string | null;
  noIndex: boolean;
  tags: string | null;
  shareImage: StrapiMedia;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

// {

// filters: {
//   slug: {
//     $eq: 'my-slug',
//   },
// },
//  populate: {
//     fields: ['title', 'maincontent', 'custom_page_css', 'custom_page_js', 'is_custom_page'],
//     seo: {
//       populate: '*'
//     }
//  }
// }
