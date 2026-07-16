import { StrapiMedia } from "@/lib/types/common";

export interface ImageFormat {
  url: string;
  width: number;
  height: number;
}

export interface MediaFormats {
  thumbnail?: ImageFormat;
}

interface AccreditationCard {
  id: number;
  cardtitle: string;
  cardurl: string | null;
  cardimg: StrapiMedia;
}

export interface Accreditation {
  id: number;
  documentId: string;
  title: string;
  description: string;
  accrediationrecogapprovals: AccreditationCard[];
}

export type AccreditationDomain = Accreditation;

export interface AccreditationResponse {
  data: Accreditation;
  meta: Record<string, never>;
}
