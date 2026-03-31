import { ParagraphBlock } from "./about";
import { StrapiMedia } from "./common";

// Root response
export interface NewsEventsPageResponse {
  data: NewsEventsPageData;
  meta: Record<string, unknown>;
}

// Main data for the page
export interface NewsEventsPageData {
  id: number;
  documentId: string;
  main_heading: ParagraphBlock[];
  main_desc: ParagraphBlock[];
}

// Root API response
export interface NewsEventsListResponse {
  data: NewsEventItem[];
  meta: {
    pagination: Pagination;
  };
}

// Pagination info
export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

// Each news/event item
export interface NewsEventItem {
  id: number;
  documentId: string;
  title: {
    rendered: string;
  };
  slug: string;
  modified: string;
  date: string;
  // publishedAt: string;
  // featured_img: StrapiMedia;
  // newsmedia: StrapiMedia[];
  featured_media: number;
  acf: {
    event_start_date: null;
    event_venue: string;
    event_images: number[];
  };
}
