import { StrapiMedia } from "./common";

export interface NOTICEPDFS {
  id: number;
  content: string;
  pdf_url: string;
}

export interface NoticeResponse {
  data: {
    id: number;
    documentId: string;
    title: string;
    bgimage: StrapiMedia; // or a more specific type if you know the structure
    noticepdfs: NOTICEPDFS[];
  };
  meta: Record<string, unknown>; // empty object, but typed flexibly
}
