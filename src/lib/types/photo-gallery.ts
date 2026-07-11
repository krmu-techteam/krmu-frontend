import { StrapiMedia } from "./common";

// Pagination meta
export type PaginationMeta = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

export interface PhotoGalleryApiResponse {
  data: {
    id: number;
    documentId: string;
    title: string;
    slug: string;
    gallery_images: StrapiMedia[];
  }[];
  meta: { pagination: PaginationMeta };
}
