import { ButtonType, CardWithoutImage, StrapiMedia } from "./common";
import { Button } from "./home";
export interface FeeDetails {
  __component: "admissionpage-components.fee-details";
  id: number;
  badgetext: string;
  highlighttext: string;
  beforehighlighttext: string;
  description: string;
  paymentinfotitle: string;
  paymentinfocontent: string;
}

export interface Alumni {
  __component: "admissionpage-components.alumni";
  id: string;
  highlighttext: string;
  beforehighlighttext: string;
  content: string;
  alumniinfo: CardWithoutImage[];
}

export interface AchievementsData {
  id: number;
  value: string;
  content: string;
}

export interface WhyChoose {
  __component: "aboutwhychooseus-component.why-choose-us";
  id: string;
  badgeheading: string;
  titlebluetext: string;
  titlehighlighttext: string;
  beforehighlighttitletext: string;
  maindescription: string;
  beforetitlebluetext: string;
  achievementstitle: string;
  achievementsdescriptions: string;
  ourachievements: AchievementsData[];
  awardstitle: string;
}

export interface readybtn {
  id: number;
  buttontext: string;
  buttonlink: string;
  buttonclass: string;
}

// Individual component interfaces
export interface AdmissionProcess {
  __component: "admissionpage-components.admissionprocesscomponent";
  id: number;
  highlighttext: string;
  beforehighlight: string;
  badgetext: string;
  description: string;
  title2: string;
  descriptions2: string;
  needhelptext: string;
  needhelplink: string;
  needhelplinktext: string;
  readytobeginsbtns: readybtn[];
}

export interface visitus {
  id: number;
  badgetext: string;
  highlighttext: string;
  beforehighlighttext: string;
  description: string;
}

export interface VisitUs {
  id: number;
  badgetext: string;
  highlighttext: string;
  beforehighlighttext: string;
  description: string;
}

export interface VisitUsResponse {
  data: {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    visitus: VisitUs;
  };
  meta: unknown;
}

export interface AcademicExcellence {
  __component: "admissionpage-components.academic-excellence";
  id: number;
  badgetext: string;
  highlighttext: string;
  beforehighlighttext: string;
  content: string;
  button: Button;
}

export interface LocationType {
  __component: "admissionpage-components.location";
  id: string;
  badgetext: string;
  beforehighlighttext: string;
  highlighttext: string;
  description: string;
}

// Union type for components in the AdmissionPageComponent array
export type AdmissionPageComponent =
  | AdmissionProcess
  | WhyChoose
  | Alumni
  | FeeDetails
  | AcademicExcellence
  | LocationType;

// Root response structure
export interface AdmissionPageResponse {
  data: {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    AdmissionPageComponent: AdmissionPageComponent[];
  };
  meta: unknown;
}

export interface AdmissionBanner {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: StrapiMedia;
  badge: string;
  ctas: ButtonType[];
}

export interface AdmissionHeroBannerResponse {
  data: {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    admissionherobanner: AdmissionBanner[];
  };
}
