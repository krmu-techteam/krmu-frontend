import { StrapiMedia } from "./common";

export interface ImageGalleryResponse {
  data: ImageGalleryData;
  meta: Record<string, unknown>;
}

export interface ImageGalleryData {
  id: number;
  documentId: string;
  title: string;
  bgimage: StrapiMedia;
}
export interface PhotoGalleryResponse {
  data: PhotoGallery[];
  meta: Meta;
}

export interface PhotoGallery {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  publishedAt: string;
  published_date_text: string;
  gallery_images: StrapiMedia[];
  
}

export interface Meta {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}
