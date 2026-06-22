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

export interface RDCSectionData {
  heroSection: HeroSectionProps;
  rdcSection: RDCSectionProps;
}

export interface ResearchAndInnovationResponse {
  data: RDCSectionData;
}
