import { StrapiMedia } from "../types/common";
export interface TestimonialItem {
  id: number;
  documentId: string;
  profilename: string;
  profileinfo: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  profiledesignation: string;
  profile: StrapiMedia;
}

export interface TestimonialResponse {
  data: TestimonialItem[];
}