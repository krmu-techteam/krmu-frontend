import { StrapiMedia } from "./common";

export interface VIDEO {
  id: number;
  title: string;
  videofield: string;
}

export interface VideoGalleriesResponse {
  data: {
    id: number;
    documentId: string;
    Title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    videos: VIDEO[];
    bgimage: StrapiMedia;
  };
  meta: unknown;
}
