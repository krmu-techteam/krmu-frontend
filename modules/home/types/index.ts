import { ButtonType, CounterItem, StrapiMedia } from "@/lib/types/common";
import { ADecadeSectionComponent } from "@/lib/types/home";

export interface HomeStatType {
  number?: string;
  label: string;
}

export interface JourneyVideoType {
  id: number;
  title: string;
  thumbnail: string;
  duration: string;
  link: string;
}

export interface GalleryImageType {
  id: number;
  src: string;
  alt: string;
}

export interface RecruiterLogoType {
  name: string;
  logo: string;
}

export interface SuccessStoryType {
  name: string;
  school: string;
  course: string;
  package: string;
  image: string;
}

export interface PlacementStatType {
  label: string;
  value: string;
}

export interface PlacementCardConfigType {
  style: React.CSSProperties;
}

export interface LifeAtKRMUGalleryType {
  id: number;
  src: string;
  alt: string;
}

export interface LifeAtKRMUFeatureCardType {
  title: string;
  label: string;
  bg: string;
  accent: string;
  url: string;
}

export interface HomeEventAndNewsType {
  title: string;
  date: string;
  image: string;
  link: string;
}

export interface PartnerUniversityType {
  name: string;
  logo: string;
}

export interface ResearchStatsType {
  value: string;
  label: string;
}

export interface TestimonialType {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
}

// ==========================================
// CMS API / Strapi Schema Component Types
// ==========================================

// Hero Section Component Type
export interface HeroSectionComponent {
  __component: "homepage-components.hero-section";
  id: number;
  title: string;
  subtitle: string;
  HeroSectionVideo: StrapiMedia | null;
}

// A Decade Section (About) Component Type
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

export interface AboutSectionComponentProps {
  __component: "homepage-components.a-decade-section";
  id: number;
  adecadeleftcol: ADecadeLeftCol;
  adecaderightcol: ADecadeRightCol;
}

// Your Journey Component Type
export interface Button {
  id: number;
  buttontext: string;
  buttonlink: string;
  buttonclass: string | null;
  popupFormId?: string | null;
  containerPopupFormId?: string | null;
}

export interface YourJourneyComponent {
  __component: "homepage-components.yourjourney";
  id: number;
  title: string;
  description: string;
  button: Button[];
}

// AFS Section Component Type
export interface AFSComponent {
  __component: "homepage-components.afs-section";
  id: number;
  afs1content: string;
  afs2content: string;
  afs3content: string;
  afsimage1: StrapiMedia;
  afsimage2: StrapiMedia;
  afsimage3: StrapiMedia;
  link1: string;
  link2: string;
  link3: string;
}

// Our Top Recruiters Component Type
export interface OurTopRecruitComp {
  __component: "homepage-components.our-top-recruiters";
  id: number;
  title: string;
  counter: CounterItem[];
  logos: StrapiMedia[];
}

// Fee Structure & Scholarship Banner Component Type
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

// Why KRMU Component Type
export interface whyKRMU {
  __component: "homepage-components.whykrmu";
  id: number;
  title: string;
  subtitle: string;
  Descriptions: string;
}

// Elevate Campus Component Type
export interface ElevateCampusContent {
  id: number;
  highlighttext: string;
  subtitle: string;
  content: string;
  linktext: string;
  linkclass: string;
  link: string;
  beforehighlighttext: string;
  afterhighlighttext: string | null;
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

// Testimonials Component Type
export interface HomeKRMTestimonial {
  __component: "homepage-components.home-testimonials";
  id: number;
  title: string;
  description: string;
}

// Shaping Future (Research) Component Type
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

// Global Partner Component Type
export interface GlobalPartnerType {
  __component: "homepage-components.global-partener";
  id: number;
  title: string;
  descriptions: string;
  logosliderheading: string;
  globalpartnerimages: StrapiMedia[];
}

// Visit and Explore Component Type
export interface VisitExploreType {
  __component: "homepage-components.visit-explore";
  id: number;
  title1: string;
  title2: string;
  description: string;
  visitexplorebtn: ButtonType[];
}

// Home News and Events Component Type
export interface HomeNewsandEventsType {
  __component: "homepage-components.home-events-and-news";
  id: number;
  title: string;
  newsandeventbtn: ButtonType;
}

// Union of all Page Content Components
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

// HomePage API Response Structure
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
