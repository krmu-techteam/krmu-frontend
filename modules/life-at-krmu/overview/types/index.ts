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

export interface CampusHappeningsProps {
  title: string;
  subTitleOne: string;
  subTitleTwo: string;
  subTitleThree: string;
  instaImageUrl: string;
  instaHandle: string;
  instaLabel: string;
  instaLink: string;
  viewMoreText: string;
  viewMoreLink: string;
}
export interface StudentLifeSectionProps {
  title: string;
  subTitleOne: string;
  subTitleTwo: string;
  subTitleThree: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  campusHappenings: CampusHappeningsProps;
}

interface dataProps {
  heroSection: HeroSectionProps;
  campusLifeSection: CampusLifeSectionProps;
  studentLifeSection: StudentLifeSectionProps;
}

export interface OverviewContentProps {
  data: dataProps;
}
