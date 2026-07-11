import { ParagraphBlock } from "./about";
import { StrapiMedia } from "./common";

export interface ADVISORYBOARD {
  id: number;
  title: string;
  advisoryboardinfo: ParagraphBlock[];
  advisoryimage: StrapiMedia;
}

export interface AdvisoryBoardResponse {
  data: {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    description: ParagraphBlock[];
    advisoryboard: ADVISORYBOARD[];
  };
}
