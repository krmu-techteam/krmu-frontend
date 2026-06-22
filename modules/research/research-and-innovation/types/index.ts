interface Links {
  label: string;
  url: string;
}
export interface HeroSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  links: Links[];
}

export interface DeanInfo {
  name: string;
  designation: string;
}

export interface RDCSectionProps {
  title: string;
  description_one: string;
  description_two: string;
  imageUrl: string;
  deanInfo: DeanInfo;
}

export interface ResearchDeanMessageProps {
  title: string;
  subTitle: string;
  description_one: string;
  description_two: string;
  description_three: string;
  description_four: string;
}

export interface CIFImages {
  url: string;
}

export interface CIFSectionProps {
  title: string;
  description_one: string;
  description_two: string;
  images: CIFImages[];
  linkInfo: Links;
}
export interface TeamRDCMembers {
  name: string;
  designation: string;
  facultyUrl: string;
  facultyImageUrl: string;
}
export interface TeamRDCSectionProps {
  title: string;
  teamRDCMembers: TeamRDCMembers[];
}
export interface KEICImages {
  url: string;
}
export interface KEICSectionProps {
  title: string;
  description: string;
  linkInfo: Links;
  images: KEICImages[];
}
export interface IPRImages {
  url: string;
}
export interface IPRLegalEthicsSectionProps {
  title: string;
  description_one: string;
  description_two: string;
  description_three: string;
  linkInfo: Links;
  images: IPRImages[];
}
export interface OnGoingProjectsImages {
  url: string;
}
export interface OnGoingProjectsSectionProps {
  title: string;
  description_one: string;
  description_two: string;
  description_three: string;
  images: OnGoingProjectsImages[];
}
export interface ResearchHighlights {
  imageUrl: string;
  link: string;
  content: string;
}
export interface ResearchHighlightsProps {
  title: string;
  highlights: ResearchHighlights[];
}

export interface ResearchAchievement {
  name: string;
  designation: string;
  school: string;
  imageUrl: string;
  certificateUrl: string;
  content: string;
}
export interface ResearchAchievementSectionProps {
  title: string;
  achievements: ResearchAchievement[];
}

export interface Statistics {
  label: string;
  value: string;
}
export interface PublicationAndAchievementSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  statistics: Statistics[];
}

export interface AcademicResourcesImages {
  url: string;
}
export interface AcademicResourcesSectionProps {
  title: string;
  subTitle: string;
  description_one: string;
  description_two: string;
  description_three: string;
  description_four: string;
  linkInfo: Links;
  images: AcademicResourcesImages[];
}

export interface TeamLibrarySliders {
  imageUrl: string;
  content: string;
}
export interface TeamLibrarySectionProps {
  title: string;
  teamLibrarySliders: TeamLibrarySliders[];
}

export interface PhoneNumber {
  label: string;
  number: string;
}

export interface Email {
  label: string;
  email: string;
  mailTo: string;
}

export interface QuickLink {
  label: string;
  url: string;
}
export interface PhoneNumber {
  number: string;
  formatted: string;
  link: string;
}

export interface Email {
  email: string;
  mailTo: string;
}

export interface QuickLink {
  label: string;
  url: string;
}
 
export interface CompanyRegistrationForm {
  label: string;
  url: string;
  linkText: string;
}

export interface ContactEnquiriesSectionProps {
  title: string;
  description: string;
  companyRegistrationForm: CompanyRegistrationForm;
  phoneNumbers: {
    numbers: PhoneNumber[];
  };
  email: Email;
  quickLinks: {
    links: QuickLink[];
  };
}

export interface RDCSectionData {
  heroSection: HeroSectionProps;
  rdcSection: RDCSectionProps;
  researchDeanMessageSection: ResearchDeanMessageProps;
  teamRdcSection: TeamRDCSectionProps;
  cifSection: CIFSectionProps;
  keicSection: KEICSectionProps;
  iprLegalEthicsSection: IPRLegalEthicsSectionProps;
  onGoingProjectsSection: OnGoingProjectsSectionProps;
  researchHighlightSection: ResearchHighlightsProps;
  researchAchievementSection: ResearchAchievementSectionProps;
  publicationAndAchievementSection: PublicationAndAchievementSectionProps;
  academicResourceSection: AcademicResourcesSectionProps;
  teamLibrarySection: TeamLibrarySectionProps;
  contactEnquiriesSection: ContactEnquiriesSectionProps;
}

export interface ResearchAndInnovationResponse {
  data: RDCSectionData;
}
