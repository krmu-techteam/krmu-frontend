import { StrapiMedia } from "@/features/home";

export interface AboutHeroSection {
  title: string;
  subtitle: string;
}

export interface RichTextChild {
  text: string;
  type: "text";
}

export interface RichTextListItem {
  type: "list-item";
  children: RichTextChild[];
}

export interface RichTextParagraph {
  type: "paragraph";
  children: RichTextChild[];
}

export interface RichTextList {
  type: "list";
  format: "ordered" | "unordered";
  children: RichTextListItem[];
}

export type RichTextBlock = RichTextParagraph | RichTextList;

export interface AboutButton {
  id: number;
  buttontext: string;
  buttonlink: string;
  buttonclass: string | null;
  popupFormId: number | null;
  containerPopupFormId: number | null;
}

export interface AccrediationRaw {
  id: number;
  title: string;
  accrediationlogos: StrapiMedia[];
}

export interface KRMGroupRaw {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  krmbranch: StrapiMedia[];
}

export interface HallFameItemRaw {
  id: number;
  title: string;
  description: string;
}

export interface HallOfFameRaw {
  id: number;
  title: string;
  hallfame: HallFameItemRaw[];
}

export interface VisionMissionRaw {
  id: number;
  visiontitle: string;
  missiontitle: string;
  visiondescription: RichTextBlock[];
  missiondescription: RichTextBlock[];
}

export interface InternationalCollabRaw {
  id: number;
  title: string;
  description: RichTextBlock[];
  intcollabbtn: AboutButton;
  internationcollablogos: StrapiMedia[];
  image: StrapiMedia;
}

export interface KRMUCommitteeRaw {
  id: number;
  title: string;
  description: RichTextBlock[];
  committeebtn: AboutButton;
}

export interface AboutPageRaw {
  id: number;
  documentId: string;
  title: string;
  subtitle: string;
  thenexgentitle: string;
  thenexgendescription: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  letsexplorecontent: string | null;
  accrediation: AccrediationRaw;
  krmugroup: KRMGroupRaw;
  halloffame: HallOfFameRaw;
  visionmission: VisionMissionRaw;
  internationcollaboration: InternationalCollabRaw;
  krmucommittee: KRMUCommitteeRaw;
}

export interface AboutPageResponse {
  data: AboutPageRaw;
  meta: Record<string, unknown>;
}

export interface AccrediationDomain {
  title: string;
  accrediationlogos: StrapiMedia[];
}

export interface KRMGroupDomain {
  title: string;
  subtitle: string;
  description: string;
  krmbranch: StrapiMedia[];
}

export interface HallFameItemDomain {
  id: number;
  title: string;
  description: string;
}

export type HALLFAME = HallFameItemDomain;

export interface HallOfFameDomain {
  title: string;
  hallfame: HallFameItemDomain[];
}

export type HALLOFFAME = HallOfFameDomain;

export interface VisionMissionDomain {
  visiontitle: string;
  missiontitle: string;
  visiondescription: RichTextBlock[];
  missiondescription: RichTextBlock[];
}

export interface InternationalCollabDomain {
  title: string;
  description: RichTextBlock[];
  intcollabbtn: AboutButton;
  internationcollablogos: StrapiMedia[];
  image: StrapiMedia;
}

export interface KRMUCommitteeDomain {
  title: string;
  description: RichTextBlock[];
  committeebtn: AboutButton;
}

export interface AboutPageDomain {
  id: number;
  documentId: string;
  title: string;
  subtitle: string;
  thenexgentitle: string;
  thenexgendescription: string;
  accrediation: AccrediationDomain;
  krmugroup: KRMGroupDomain;
  halloffame: HallOfFameDomain;
  visionmission: VisionMissionDomain;
  internationcollaboration: InternationalCollabDomain;
  krmucommittee: KRMUCommitteeDomain;
}
