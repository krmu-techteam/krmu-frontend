import { StrapiMedia } from "../common";
import { Button } from "../home";

export type PlacementOverviewResponse = {
  data: {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    placementsoverviewcontainer: PlacementOverview[];
  };
  meta: Record<string, unknown>; // or a stricter type if you know the structure
};

export type PlacementCounter = {
  id: number;
  title: string;
  subtitle: string;
  classname: string;
};

export type PlacementOverviewHero = {
  __component: "placement-overview.placement-hero";
  id: number;
  title: string;
  subtitle: string;
  overviewvideo: string;
  overviewcounter: PlacementCounter[];
};

export type PlacementOverviewHighlight = {
  __component: "placement-overview.placement-highlight";
  id: number;
  heading: string;
  placementhighlights: StrapiMedia[];
  highlightbtn: Button;
};

export type PlacementOverview =
  | PlacementOverviewHero
  | PlacementOverviewHighlight;

export interface RecruiterLogo {
  id: number;
  documentId: string;
  url: string;
  alternativeText: string | null;
}

export interface RecruitersData {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  recruiters_logo: RecruiterLogo[];
}

export interface RecruitersApiResponse {
  data: RecruitersData;
  meta: Record<string, unknown>;
}
