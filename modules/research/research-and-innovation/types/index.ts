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

export interface ResearchAndInnovationResponse {
  data: {
    heroSection: HeroSectionProps;
  };
}
