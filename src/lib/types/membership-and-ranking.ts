import { StrapiMedia } from "./common";

export interface Memberships {
  id: number;
  cardtitle: string;
  cardimg: StrapiMedia;
  cardurl: string; 
}
export interface Rankings {
  id: number;
  title: string;
  cardimg: StrapiMedia;
}

export interface MembershipAndRankingResponseType {
  data: {
    id: number;
    documentId: string;
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    rankingtitle: string;
    memberships: Memberships[];
    rankings: Rankings[];
  };
}
