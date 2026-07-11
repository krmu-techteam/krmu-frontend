import { StrapiMedia } from "./common";

// Rich text children
export interface RichTextChild {
  type: "text";
  text: string;
  bold?: boolean;
}

export interface RichTextBlock {
  type: "paragraph";
  children: RichTextChild[];
}

// Club accordion content
export interface ClubAccordion {
  id: number;
  title: string;
  content: string;
  clubimages: StrapiMedia[];
}

// Main data item
export interface ClubsAndSocietiesData {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  desc: RichTextBlock[];
  featured_image: StrapiMedia;
  clubsaccordions: ClubAccordion[];
}

// Full API response
export interface ClubsAndSocietiesResponse {
  data: ClubsAndSocietiesData;
  meta: Record<string, unknown>;
}
