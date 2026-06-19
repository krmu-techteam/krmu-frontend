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
  directorMessage: DirectorMessageProps;
  contactSection: ContactSectionProps;
}
export interface CareerServicesSectionData {
  data: CareerDevelopmentCentre;
}

export interface ContactSectionProps {
  title: string;
  description: string;
  registrationLabel: string;
  registrationLink: string;
  phone: string;
  email: string;
  bgImage: string;
}

export interface DirectorMessageProps {
  id: number;
  title: string;
  directorName: string;
  designation: string;
  email: string;
  contactNumber: string;
  profileImage: {
    url: string;
    alternativeText: string;
  };
  message: {
    id: number;
    content: string;
  }[];
}