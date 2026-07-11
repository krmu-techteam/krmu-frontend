import React from "react";
import { ButtonType } from "@/lib/types/common";

// ========================================================
// Common Types
// ========================================================

export interface StrapiMediaFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

export interface StrapiMedia {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number | null;
  height: number | null;

  formats: {
    thumbnail?: StrapiMediaFormat;
    small?: StrapiMediaFormat;
    medium?: StrapiMediaFormat;
    large?: StrapiMediaFormat;
  } | null;

  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: unknown;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface BaseComponent {
  id: number;
  __component: string;
}

export interface Button {
  id: number;
  buttontext: string;
  buttonlink: string;
  buttonclass: string;
  popupFormId: number | null;
  containerPopupFormId: number | null;
}

export interface Counter {
  id: number;
  countertext: string;
  countercontent: string;
}

export interface CTA {
  id: number;
  beforehighlighttext?: string | null;
  highlighttext: string;
  afterhighlighttext?: string | null;

  subtitle: string;
  content: string;

  linktext: string;
  linkclass: string;
  link: string;
}

// ========================================================
// Components
// ========================================================

export interface HeroSectionComponent extends BaseComponent {
  __component: "homepage-components.hero-section";
  title: string;
  subtitle: string;
}

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

export interface NewsEventItem {
  id: number;
  documentId: string;
  title: {
    rendered: string;
  };
  slug: string;
  modified: string;
  date: string;
  // publishedAt: string;
  // featured_img: StrapiMedia;
  // newsmedia: StrapiMedia[];
  featured_media: number;
  acf: {
    event_start_date: null;
    event_venue: string;
    event_images: number[];
  };
}

export interface NewsEventsResponse {
  data: NewsEventItem[];
  pagination: {
    page: number;
    perPage: number;
    total: number;
    totalPages: number;
  };
}

export interface ADecadeSectionComponent extends BaseComponent {
  __component: "homepage-components.a-decade-section";
  adecadeleftcol: ADecadeLeftCol;
  adecaderightcol: ADecadeRightCol;
}

export interface JourneyComponent extends BaseComponent {
  __component: "homepage-components.yourjourney";

  title: string;
  description: string;

  button: Button[];
}

export interface AFSComponent extends BaseComponent {
  __component: "homepage-components.afs-section";

  afs1content: string;
  afs2content: string;
  afs3content: string;

  link1: string;
  link2: string;
  link3: string;

  afsimage1: StrapiMedia;
  afsimage2: StrapiMedia;
  afsimage3: StrapiMedia;
}

export interface RecruitersComponent extends BaseComponent {
  __component: "homepage-components.our-top-recruiters";

  title: string;

  counter: Counter[];

  logos: StrapiMedia[];
}

export interface FeeScholarComponent extends BaseComponent {
  __component: "homepage-components.fee-scholar";

  text1: string;
  text2: string;

  link1: string;
  link2: string;

  FeeStructureImage: StrapiMedia;
  ScholarshipImage: StrapiMedia;
}

export interface WhyKrmuComponent extends BaseComponent {
  __component: "homepage-components.whykrmu";

  title: string;
  subtitle: string;
  Descriptions: string;
}

export interface ElevateCampusComponent extends BaseComponent {
  __component: "homepage-components.elevate-campus";

  elevatecampus1: CTA;
  ElevateCampus2: CTA;
  elevatecampus3: CTA;

  elevatecampusimage1: StrapiMedia;
  elevatecampusimage2: StrapiMedia;
  elevatecampusimage3: StrapiMedia;
}

export interface TestimonialsComponent extends BaseComponent {
  __component: "homepage-components.home-testimonials";

  title: string;
  description: string;
}

export interface ShapingFutureComponent extends BaseComponent {
  __component: "homepage-components.shaping-future";

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

  shapingCounter: Counter[];
}

export interface GlobalPartnerComponent extends BaseComponent {
  __component: "homepage-components.global-partener";

  title: string;
  descriptions: string;
  logosliderheading: string;

  globalpartnerimages: StrapiMedia[];
}

export interface HomeEventsAndNewsComponent extends BaseComponent {
  __component: "homepage-components.home-events-and-news";
  title: string;
  newsandeventbtn: ButtonType;
}

// ========================================================
// Union
// ========================================================

export type HomePageComponent =
  | HeroSectionComponent
  | ADecadeSectionComponent
  | JourneyComponent
  | AFSComponent
  | RecruitersComponent
  | FeeScholarComponent
  | WhyKrmuComponent
  | ElevateCampusComponent
  | TestimonialsComponent
  | ShapingFutureComponent
  | GlobalPartnerComponent
  | HomeEventsAndNewsComponent;

// ========================================================
// API Response
// ========================================================

export interface HomePageResponse {
  data: {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;

    PageContent: HomePageComponent[];
  };

  meta: Record<string, unknown>;
}

export interface HomeComponentMap {
  "homepage-components.hero-section": HeroSectionComponent;

  "homepage-components.a-decade-section": ADecadeSectionComponent;

  "homepage-components.yourjourney": JourneyComponent;

  "homepage-components.afs-section": AFSComponent;

  "homepage-components.our-top-recruiters": RecruitersComponent;

  "homepage-components.fee-scholar": FeeScholarComponent;

  "homepage-components.whykrmu": WhyKrmuComponent;

  "homepage-components.elevate-campus": ElevateCampusComponent;

  "homepage-components.home-testimonials": TestimonialsComponent;

  "homepage-components.shaping-future": ShapingFutureComponent;

  "homepage-components.global-partener": GlobalPartnerComponent;

  "homepage-components.home-events-and-news": HomeEventsAndNewsComponent;
}

export interface HomeStatType {
  number?: string;
  label: string;
}

export interface JourneyVideoType {
  id: number;
  title: string;
  thumbnail: string;
  duration: string;
  link?: string;
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
  url?: string;
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
