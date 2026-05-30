export interface HomeStatType {
  number?: string;
  label: string;
}

export interface JourneyVideoType {
  id: number;
  title: string;
  thumbnail: string;
  duration: string;
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
// Property 'style' is missing in type '{ style: { background: string; }; }[]' but required in type 'PlacementCardConfigType'.
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