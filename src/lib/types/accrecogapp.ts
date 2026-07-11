// accrediation.ts
import { StrapiMedia } from "./common";

export interface AccrediationRecogApproval {
  id: number;
  cardtitle: string;
  cardurl: string;
  cardimg: StrapiMedia;
}

export interface AccrediationRecogApprovalsData {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  description: string;
  accrediationrecogapprovals: AccrediationRecogApproval[];
}

export interface AccrediationRecogApprovalsResponse {
  data: AccrediationRecogApprovalsData;
  meta: unknown;
}
