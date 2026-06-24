import { StrapiMedia } from "@/lib/types/common";

export interface OverviewVideoProps {
  overview_video: StrapiMedia;
}
export interface HeroSectionProps {
  title: string;
  subTitle: string;
  scrollImage: string;
  scrollArrow: string;
}

export interface CampusLifeSectionProps {
  title: string;
  description: string;
  videoSrc: string;
}

interface dataProps {
  heroSection: HeroSectionProps;
  campusLifeSection: CampusLifeSectionProps;
}

export interface OverviewContentProps {
  data: dataProps;
}
