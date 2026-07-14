export interface HeroSectionProps {
  title: string;
  description: string;
}

export interface RegulationLink {
  label: string;
  url: string;
}
export interface RegulationCard {
  title: string;
  url?: string;
  showNewTag?: boolean;
  links?: RegulationLink[];
}
export interface ContactSection {
  title: string;
  email: string[];
}
export interface PhdRegulationData {
  heroSection: HeroSectionProps;
  regulationCards: RegulationCard[];
  contactSection: ContactSection;
}
export interface PhdRegulationResponse {
  data: PhdRegulationData;
}
