import { StrapiMedia } from "@/lib/types/common";

/* ===========================
 * API Response Types
 * =========================== */

export interface AcademicLeadershipResponse {
  id: number;
  name: string;
  desg: string;
  content: string;
  academic_leadership_img: StrapiMedia;
}

export interface LeadershipResponseData {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  academic_leadership: AcademicLeadershipResponse[];
}

export interface LeadershipResponse {
  data: LeadershipResponseData;
  meta: Record<string, never>;
}

/* ===========================
 * Domain Types
 * =========================== */

export interface AcademicLeadership {
  id: number;
  name: string;
  designation: string;
  content: string;
  image: string;
}

export interface LeadershipDomain {
  id: number;
  documentId: string;
  academicLeadership: AcademicLeadership[];
}
