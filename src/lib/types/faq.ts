import { common_btn } from "./common";

export interface FAQsResponse {
  data: FAQSData;
  meta: Record<string, unknown>; // or define a proper shape if known
}

export interface SingleFAQ {
  id: number;
  ques: string;
  ans: string;
}

export interface FAQSData {
  id: number;
  documentId: string;
  heading: string;
  subheading: string;
  btn: common_btn;
  faqs: SingleFAQ[];
}
