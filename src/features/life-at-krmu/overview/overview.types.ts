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
export interface StudentWelfareSectionProps {
  title: string;
  description: string;
  linkInfo: {
    text: string;
    url?: string;
  };
}

export interface StudentInterestSectionProps {
  title: string;
  subTitle: string;
  description: string;
  linkInfo: {
    text: string;
    url?: string;
  };
}

export interface WellBeingAndInterestSectionProps {
  studentwelfare: StudentWelfareSectionProps;
  studentInterest: StudentInterestSectionProps;
}

export interface StudentTestimonialSectionProps {
  title: string;
  description: string;
}

export interface LinkInfo {
  text: string;
  url?: string;
}
export interface HostelImages {
  url: string;
}

export interface HostelLifeSectionProps {
  title: string;
  description: string;
  linkInfo: LinkInfo;
  images: HostelImages[];
}

export interface ImpactingLivesCards {
  title: string;
  points: string[];
}

export interface ImpactingLivesSectionProps {
  tagLine: string;
  heading: string;
  description: string[];
  cards: ImpactingLivesCards[];
}

export interface LibrarySectionProps {
  title: string;
  description: string;
  linkInfo: LinkInfo;
}
interface dataProps {
  heroSection: HeroSectionProps;
  campusLifeSection: CampusLifeSectionProps;
  studentLifeSection: StudentLifeSectionProps;
  wellBeingAndInterestSection: WellBeingAndInterestSectionProps;
  studentTestimonialSection: StudentTestimonialSectionProps;
  hostelLifeSection: HostelLifeSectionProps;
  impactingLivesSection: ImpactingLivesSectionProps;
  librarySection: LibrarySectionProps;
}

export interface OverviewContentProps {
  data: dataProps;
}

export interface HearItTestimonials {
  id: number;
  name: string;
  qualification: string;
  info: string;
  img: StrapiMedia;
}

export interface LifeAtKRMUOverviewDomain {
  id: number;
  documentId: string;
  heading: string;
  subheading: string;
  overview_video: StrapiMedia;
  hear_it_testimonials: HearItTestimonials[];
}

export interface LifeAtKRMUOverviewResponse {
  data: LifeAtKRMUOverviewDomain;
  meta?: Record<string, unknown>;
}

