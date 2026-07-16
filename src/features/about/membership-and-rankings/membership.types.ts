import { StrapiMedia } from "@/lib/types/common";

// API Response Types

export interface MembershipCardResponse {
  id: number;
  cardtitle: string;
  cardurl: string | null;
  cardimg: StrapiMedia;
}

export interface RankingCardResponse {
  id: number;
  title: string;
  cardimg: StrapiMedia;
}

export interface MembershipResponseData {
  id: number;
  documentId: string;
  title: string;
  description: string;
  rankingtitle: string;
  memberships: MembershipCardResponse[];
  rankings: RankingCardResponse[];
}

export interface MembershipResponse {
  data: MembershipResponseData;
  meta: Record<string, never>;
}

// Domain Types

export interface MembershipCard {
  id: number;
  title: string;
  url: string | null;
  image: string;
}

export interface RankingCard {
  id: number;
  title: string;
  image: string;
}

export interface MembershipDomain {
  id: number;
  documentId: string;
  title: string;
  description: string;
  rankingTitle: string;
  memberships: MembershipCard[];
  rankings: RankingCard[];
}
