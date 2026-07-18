import { StrapiMedia } from "@/lib/types/common";

export interface CodeOfConductResponse {
  data: CodeOfConductData;
  meta: Record<string, never>;
}

export type CodeOfConductDomain = CodeOfConductData;

export interface CodeOfConductData {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  breadcrumb: Breadcrumb;
  cocitems: CocItem[];
}

export interface Breadcrumb {
  id: number;
  breadcrumbtext: string;
  backgroundimage: StrapiMedia;
}

export interface CocItem {
  id: number;
  listtext: string;
  listlink: string;
  listicon: StrapiMedia;
}
