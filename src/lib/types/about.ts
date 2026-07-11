import { ButtonType, StrapiMedia } from "./common";

// --------------------
// Accreditation Section
// --------------------
export interface Accreditation {
  id: number;
  title: string;
  accrediationlogos: StrapiMedia[];
}

// --------------------
// KRMU Group Section
// --------------------
export interface KRMUGroup {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  krmbranch: StrapiMedia[];
}

// --------------------
// Hall of Fame Section
// --------------------
export interface HALLFAME {
  id: number;
  title: string;
  description: string;
}
export interface HALLOFFAME {
  id: number;
  title: string;
  hallfame: HALLFAME[];
}

// --------------------
// Vision & Mission Rich Text
// --------------------
export interface TextNode {
  type: "text";
  text: string;
}

export interface ParagraphBlock {
  type: "paragraph";
  children: TextNode[];
}

export interface ListItemBlock {
  type: "list-item";
  children: TextNode[];
}

export interface ListBlock {
  type: "list";
  format: "unordered" | "ordered";
  children: ListItemBlock[];
}


// --- Union Type for All Possible Content Blocks ---
export type CardBlock = ParagraphBlock | ListBlock;

// --------------------
// VisionMission Section
// --------------------
export interface VisionMission {
  id: number;
  visiontitle: string;
  missiontitle: string;
  visiondescription: ParagraphBlock[];
  missiondescription: ListBlock[];
}

// --------------------
// International Collaboration Section
// --------------------
export interface IntCollabButton {
  id: number;
  buttontext: string;
  buttonlink: string;
  buttonclass: string | null;
}

export interface Internationcollaboration {
  id: number;
  title: string;
  description: ParagraphBlock[]; // still valid even if it's an empty array
  intcollabbtn: IntCollabButton;
  internationcollablogos: StrapiMedia[];
  image: StrapiMedia;
}

// --------------------
// KRMU Committee
// --------------------

export interface KRMUCommittee {
  id: number;
  title: string;
  description: ParagraphBlock[];
  committeebtn: ButtonType;
}

// --------------------
// AboutKRMU Main Response
// --------------------
export interface AboutKRMU {
  data: {
    id: number;
    documentId: string;
    title: string;
    subtitle: string;
    thenexgentitle: string;
    thenexgendescription: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    accrediation: Accreditation;
    krmugroup: KRMUGroup;
    halloffame: HALLOFFAME;
    visionmission: VisionMission;
    internationcollaboration: Internationcollaboration;
    krmucommittee: KRMUCommittee;
  };
  meta: unknown;
}
