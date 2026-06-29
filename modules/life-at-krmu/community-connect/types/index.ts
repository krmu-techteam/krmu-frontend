// Hero Section
export interface HeroSectionProps {
  heading: string;
  description: string;
  descriptionTwo: string;
  imageUrl: string;
}

// NSS Motto Section
export interface NSSMottoSectionProps {
  heading: string;
  description: string;
}

// NSS Overview Section
export interface NSSOverviewSectionProps {
  heading: string;
  descriptions: string[];
}

// Objectives Section
export interface Documents {
  year: string;
  pdfUrl: string;
}
export interface Magazine {
  heading: string;
  imageUrl: string;
  documents: Documents[];
}
export interface ObjectivesSectionProps {
  heading: string;
  points: string[];
  magazine: Magazine;
}

// Benefits Section
export interface BenefitsSectionProps {
  heading: string;
  imageUrl: string;
  points: string[];
}

// Committee Section
export interface Members {
  name: string;
  designation: string;
  mobile: string;
  email: string;
}

// Eligibility Section

export interface EligibilityCriteria {
  heading: string;
  points: string[];
}

export interface EligibilitySectionProps {
  joinCriteria: EligibilityCriteria;
  certificateCriteria: EligibilityCriteria;
}

export interface CommitteeSectionProps {
  heading: string;
  subHeading: string;
  imageUrl: string;
  members: Members;
}

// Data Props
export interface DataProps {
  heroSection: HeroSectionProps;
  nssMottoSection: NSSMottoSectionProps;
  nssOverviewSection: NSSOverviewSectionProps;
  objectivesSection: ObjectivesSectionProps;
  benefitsSection: BenefitsSectionProps;
  committeeSection: CommitteeSectionProps;
  eligibilitySection: EligibilitySectionProps;
}

// Response Props
export interface CommunityConnectResponse {
  data: DataProps;
}
