export interface StatType {
  value: string;
  label: string;
  desc: string;
  icon: string;
}

export interface FeatureType {
  title: string;
  desc: string;
  icon: string;
}

export interface SectionTwoType {
  heading: string;
  image: string;
  features: FeatureType[];
}

export interface CareerOutcomeContentType {
  badge: string;
  title: string;
  stats: StatType[];
  sectionTwo: SectionTwoType;
}

export interface CareerOutcomePageContentType {
  careerOutcome: CareerOutcomeContentType;
}
