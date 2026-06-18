export interface HeroSectionProps {
  title: string;
  backgroundImage: string;
  description: string;
}

export interface CardItem {
  heading: string;
  items: string[];
}

export interface SkillCard {
  heading: string;
  description: string;
}

export interface TrainingMethodology {
  title: string;
  points: string[];
  cards: CardItem[];
}

export interface SkillBuilding {
  title: string;
  points: string[];
  cards: SkillCard[];
}

export interface TrainingPlacementSectionProps {
  introText: string;
  topCards: CardItem[];
  trainingMethodology: TrainingMethodology;
  skillBuilding: SkillBuilding;
}

export interface CareerDevelopmentCentre {
  heroSection: HeroSectionProps;
  trainingPlacementSection: TrainingPlacementSectionProps;
}
export interface CareerServicesSectionData {
  data: CareerDevelopmentCentre;
}