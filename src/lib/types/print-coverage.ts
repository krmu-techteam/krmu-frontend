

import { StrapiMedia } from "./common";

export interface PrintCoverageYear {
  id: number;
  documentId: string;
  Years: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface DataItem {
  id: number;
  documentId: string;
  Title: string;
  desc: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  upload_data: StrapiMedia;
  print_coverage_years: PrintCoverageYear[];
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface Meta {
  pagination: Pagination;
}

export interface PrintCoverageResponse {
  data: DataItem[];
  meta: Meta;
}









// Represents each print coverage item linked to a year
export interface PrintCoverageYearItem {
  id: number;
  documentId: string;
  Years: string; // The year as a string, e.g., "2025"
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  print_coverage: {
    id: number;
    documentId: string;
    Title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

// Pagination metadata
export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

// Meta object in the response
export interface PrintCoverageYearsMeta {
  pagination: Pagination;
}

// Full API response
export interface PrintCoverageYearsResponse {
  data: PrintCoverageYearItem[];
  meta: PrintCoverageYearsMeta;
}
