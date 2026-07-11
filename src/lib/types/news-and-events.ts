import { ParagraphBlock } from "./about";
import { StrapiMedia } from "./common";

export interface NewsAndEventResponse {
  data: NewsAndEvent[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface NewsAndEvent {
  id: number;
  documentId: string;
  title: string;
  content: ParagraphBlock[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  slug: string;
  newsmedia: StrapiMedia[];
  bgimg: StrapiMedia;
}

export interface ContentBlock {
  type: string;
  children: ContentChild[];
}

export interface ContentChild {
  type: string;
  text: string;
}


export interface RelatedNewsAndEvent {
  __type: string;
  id: number;
  documentId: string;
  title: string;
  content: ContentBlock[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  slug: string;
}
