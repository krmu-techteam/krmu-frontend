import { ParagraphBlock } from "./about";
import { StrapiMedia } from "./common";

export interface SingleNewsandEventResponse {
  data: {
    id: number;
    documentId: string;
    title: string;
    content: ParagraphBlock[];
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    slug: string;
    newsmedia: StrapiMedia[];
  };
}
