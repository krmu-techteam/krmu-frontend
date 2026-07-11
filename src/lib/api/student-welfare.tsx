import { FETCH_STRAPI_URL } from "@/app/constant";
import { StrapiMedia } from "../types/common";

export async function getStudentWelfareData(): Promise<
  StudentWelfareResponse["data"]
> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/student-welfare?populate[tab_scroll][fields][0]=html&populate[tab_scroll][fields][1]=css&populate[tab_scroll][fields][2]=js&populate[photo_gallery][fields][0]=heading&populate[photo_gallery][populate][photo_gallery_imgs][fields][0]=url`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!res.ok) throw new Error("Failed to fetch Student Achievements");
  const json: StudentWelfareResponse = await res.json();
  return json.data;
}

export type StudentWelfareResponse = {
  data: PhotoGalleryData;
  meta: Record<string, unknown>;
};

export type PhotoGalleryData = {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  tab_scroll: TabScrollSection;
  photo_gallery: PhotoGallerySection;
};

export type TabScrollSection = {
  id: number;
  html: string;
  css: string;
  js: string;
};

export type PhotoGallerySection = {
  id: number;
  heading: string;
  photo_gallery_imgs: StrapiMedia[];
};

// {
//  populate: {
//  tab_scroll: {
//     fields: ['html', 'css', 'js']
//  },
//    photo_gallery: {
//    fields: ['heading'],
//    populate: {
//     photo_gallery_imgs: {
//       fields: ['url']
//     }
//    }
//   }
//  }
// }
