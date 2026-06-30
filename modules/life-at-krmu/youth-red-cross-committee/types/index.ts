export interface HeroSectionProps {
  heading: string;
  descriptions: string[];
  imageUrl: string;
}

export interface CommitteeSectionProps {
  heading: string;
  description: string;
  focusTitle: string;
  focusAreas: string[];
  closingDescription: string;
}

export interface LinkItem {
  year: string;
  url: string;
}
export interface MagazineContent {
  heading: string;
  links: LinkItem[];
  imageUrl: string;
}
export interface ObjectiveContent {
  heading: string;
  items: string[];
}
export interface ResourcesSectionProps {
  objectiveContent: ObjectiveContent;
  magazineContent: MagazineContent;
}

export interface BenefitsSectionProps {
  heading: string;
  points: string[];
  imageUrl: string;
}

export interface EligibilitySectionProps {
  heading: string;
  points: string[];
}

export interface CommitteeActivitiesSectionProps {
  heading: string;
  descriptions: string[];
  imageUrl: string;
}

export interface AwardsSectionProps {
  heading: string;
  images: {
    url: string;
  }[];
  description: string;
}

export interface MottoSectionProps {
  heading: string;
  description: string;
}
export interface FuturePlansSectionProps {
  heading: string;
  description: string;
  points: string[];
}
export interface Category {
  title: string;
  images: string[];
}
export interface ActivityGallerySectionProps {
  heading: string;
  categories: Category[];
}

export interface ContactSectionProps {
  heading: string;
  description: string;
  contacts: { value: string; href?: string }[];
  callToAction: { text: string };
}

export interface DataProps {
  heroSection: HeroSectionProps;
  committeeSection: CommitteeSectionProps;
  resourcesSection: ResourcesSectionProps;
  benefitsSection: BenefitsSectionProps;
  eligibilitySection: EligibilitySectionProps;
  committeeActivitiesSection: CommitteeActivitiesSectionProps;
  awardsSection: AwardsSectionProps;
  mottoSection: MottoSectionProps;
  futurePlansSection: FuturePlansSectionProps;
  activityGallerySection: ActivityGallerySectionProps;
  contactSection: ContactSectionProps;
}

export interface YouthRedCrossCommitteeResponse {
  data: DataProps;
}
