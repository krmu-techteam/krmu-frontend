import { common_btn } from "./common";

// Root object
export interface PhDProgrammeResponse {
  data: PhDProgramme[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface PhDProgramme {
  id: number;
  documentId: string;
  heading: string;
  phdslug: string;
  degree: string;
  bgimg: ImageAsset;
  phdfaqtitle: string;
  duration: CounterBlock;
  fee_per_year: CounterBlock;
  eligibility_criteria: CounterBlock;
  phdoverview: PhDOverview;
  scholarsponsoredparttime: ScholarSponsoredPartTime;
  connectingtalent: ConnectingTalent;
  phdlogoslide: PhDLogo[];
  careeroptions: CareerOptions;
  phdoutcome: PhDOutcome;
  programmehighlight: ProgrammeHighlight;
  pursue: Pursue;
  phdadmissionselect: PhDAdmissionSelect;
  phdprogrammefaq: PhDFaq[];
  seo: SEO;
  school_category: SchoolCategory;
  commence_journey: CommenceJourney;
}

// === Shared small structures ===

export interface CounterBlock {
  id: number;
  countertext: string;
  countercontent: string;
}

export interface ParagraphBlock {
  type: "paragraph";
  children: { text: string; type: "text" }[];
}

// === Nested Sections ===

export interface PhDOverview {
  id: number;
  title: string;
  desc: ParagraphBlock[];
  overviewimage: ImageAsset;
}

export interface ScholarSponsoredPartTime {
  id: number;
  title1: string;
  desc1: string;
  title2: string;
  desc2: string;
  title3: string;
  desc3: string;
  scholarshipimg: ImageAsset;
}

export interface ConnectingTalent {
  id: number;
  title: string;
  desc: ParagraphBlock[];
  dreamimg: ImageAsset;
  dreamcounter: CounterBlock[];
} 

export interface PhDLogo {
  id: number;
  documentId: string;
  url: string;
}

export interface CareerOptions {
  id: number;
  title: string;
  desc: string;
  testimonialheading: string;
  careerpointers: CareerPointer[];
  testimonials: CounterBlock[];
}

export interface CareerPointer {
  id: number;
  listtext: string;
  listlink: string;
}

export interface PhDOutcome {
  id: number;
  title: string;
  phdoutcome: PhDOutcomeItem[];
}

export interface PhDOutcomeItem {
  id: number;
  outcomedesc: ParagraphBlock[];
}

export interface ProgrammeHighlight {
  id: number;
  heading: string;
  phdcontent: ParagraphBlock[];
  bgimage: ImageAsset;
}

export interface Pursue {
  id: number;
  title: string;
  pursue: ParagraphBlock[];
  bgimage: ImageAsset;
}

export interface PhDAdmissionSelect {
  id: number;
  title1: ParagraphBlock[];
  desc1: ParagraphBlock[];
  title2: ParagraphBlock[];
  desc2: ParagraphBlock[];
  bgimg: ImageAsset | null;
}

export interface PhDFaq {
  id: number;
  ques: string;
  ans: string;
}

export interface SEO {
  id: number;
  metaTitle: string;
  metaDescription: string;
  canonical: string | null;
  metaKeyword: string | null;
  noIndex: boolean;
  tags: string | null;
  shareImage: string | null;
}

export interface SchoolCategory {
  id: number;
  documentId: string;
  slug: string;
  name: string;
}

export interface CommenceJourney {
  id: number;
  heading: string;
  highlight_heading: string;
  bgimg: ImageAsset;
  commence_btn: common_btn
}

export interface ImageAsset {
  id: number;
  documentId: string;
  url: string;
}
