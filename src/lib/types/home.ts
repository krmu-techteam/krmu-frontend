import { ButtonType, CounterItem, StrapiMedia } from "./common";

// Hero section type
export interface HeroSectionComponent {
  __component: "homepage-components.hero-section";
  id: number;
  title: string;
  subtitle: string;
  HeroSectionVideo: StrapiMedia | null;
}

// A-decade section subcomponent
export interface ADecadeLeftCol {
  id: number;
  adecadetitle: string;
  adecadesubtitle: string;
  adecadedescription: string;
  button1text: string;
  button1link: string;
  button2text: string;
  button2link: string;
}
export interface ADecadeRightCol {
  id: number;
  counter1text: string;
  counter1content: string;
  counter2text: string;
  counter2content: string;
  counter3text: string;
  counter3content: string;
  counter4text: string;
  counter4content: string;
}
// A-decade section main component
export interface ADecadeSectionComponent {
  __component: "homepage-components.a-decade-section";
  id: number;
  adecadeleftcol: ADecadeLeftCol;
  adecaderightcol: ADecadeRightCol;
}

export interface Button {
  id: number;
  buttontext: string;
  buttonlink: string;
  buttonclass: string;
}

export interface YourJourneyComponent {
  __component: "homepage-components.yourjourney";
  id: number;
  title: string;
  description: string;
  button: Button[];
}

export interface afsMedia {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: unknown; // You can define this further if formats structure is known
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: unknown;
  createdAt: string; // ISO date string
  updatedAt: string;
  publishedAt: string;
}

export interface AFSComponent {
  __component: "homepage-components.afs-section";
  afs1content: string;
  afs2content: string;
  afs3content: string;
  afsimage1: afsMedia;
  afsimage2: afsMedia;
  afsimage3: afsMedia;
  link1: string;
  link2: string;
  link3: string;
}

export interface OurTopRecruitComp {
  __component: "homepage-components.our-top-recruiters";
  id: number;
  title: string;
  counter: CounterItem[];
  logos: StrapiMedia[];
}

export interface FeeStructureScholar {
  __component: "homepage-components.fee-scholar";
  id: number;
  text1: string;
  text2: string;
  FeeStructureImage: StrapiMedia;
  ScholarshipImage: StrapiMedia;
  link1: string;
  link2: string;
}

export interface whyKRMU {
  __component: "homepage-components.whykrmu";
  id: number;
  title: string;
  subtitle: string;
  Descriptions: string;
}

export interface ElevateCampusContent {
  id: number;
  highlighttext: string;
  subtitle: string;
  content: string;
  linktext: string;
  linkclass: string;
  link: string;
  beforehighlighttext: string;
  afterhighlighttext: string;
}

export interface ElevateCampus {
  __component: "homepage-components.elevate-campus";
  id: number;
  elevatecampus1: ElevateCampusContent;
  elevatecampusimage1: StrapiMedia;
  ElevateCampus2: ElevateCampusContent;
  elevatecampusimage2: StrapiMedia;
  elevatecampus3: ElevateCampusContent;
  elevatecampusimage3: StrapiMedia;
}

export interface HomeKRMTestimonial {
  __component: "homepage-components.home-testimonials";
  id: number;
  title: string;
  description: string;
}

export interface ShapingFutureType {
  __component: "homepage-components.shaping-future";
  id: number;
  subtitle: string;
  highlightext: string;
  afterhighlighttext: string;
  descriptions: string;
  link1text: string;
  link1: string;
  link2text: string;
  link2: string;
  shapingimage: StrapiMedia;
  mobileshapingimage: StrapiMedia;
  shapingCounter: CounterItem[];
}

export interface GlobalPartnerType {
  __component: "homepage-components.global-partener";
  id: number;
  title: string;
  descriptions: string;
  logosliderheading: string;
  globalpartnerimages: StrapiMedia[];
}

export interface VisitExploreType {
  __component: "homepage-components.visit-explore";
  id: number;
  title1: string;
  title2: string;
  description: string;
  visitexplorebtn: ButtonType[];
}

export interface HomeNewsandEventsType {
  __component: "homepage-components.home-events-and-news";
  id: number;
  title: string;
  newsandeventbtn: ButtonType;
}

// Full page content union
export type PageComponent =
  | HeroSectionComponent
  | ADecadeSectionComponent
  | YourJourneyComponent
  | AFSComponent
  | OurTopRecruitComp
  | FeeStructureScholar
  | whyKRMU
  | ElevateCampus
  | HomeKRMTestimonial
  | ShapingFutureType
  | GlobalPartnerType
  | VisitExploreType
  | HomeNewsandEventsType;

// Home page response structure
export interface HomePageResponse {
  data: {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    PageContent: PageComponent[];
  };
  meta: unknown;
}
