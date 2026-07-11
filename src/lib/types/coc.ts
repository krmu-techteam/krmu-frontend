import { BREADCRUMB, StrapiMedia } from "./common";



export interface COCLists {
  id: number;
  listtext: string;
  listicon: StrapiMedia;
  listlink: string;
}

export interface COCType {
  data: {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    breadcrumb: BREADCRUMB;
    cocitems: COCLists[];
  };
}
