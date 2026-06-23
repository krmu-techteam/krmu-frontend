import { StrapiMedia } from "./common";

export interface DeanHonorResponse {
  data: DeanHonorData;
  meta: Record<string, unknown>;
}

export interface DeanHonorData {
  id: number;
  documentId: string;
  title: string;
  herobg: StrapiMedia;
  dean_honor_acc: DeanHonorAcc[];
}

export interface DeanHonorAcc {
  id: number;
  title: string;
  dean_honor_html: DeanHonorHTML[];
}

export interface DeanHonorHTML {
  id: number;
  dean_honor_html_field: string; // HTML string content
  acc_title: string;
}
 