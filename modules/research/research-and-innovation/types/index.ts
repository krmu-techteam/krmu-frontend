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

export interface RDCSectionData {
  heroSection: HeroSectionProps;
  rdcSection: RDCSectionProps;
  researchDeanMessageSection: ResearchDeanMessageProps;
  teamRdcSection: TeamRDCSectionProps;
  cifSection: CIFSectionProps;
}

export interface ResearchAndInnovationResponse {
  data: RDCSectionData;
}
