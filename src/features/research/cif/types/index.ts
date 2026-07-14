// HERO SECTION

export interface HeroSectionProps {
  title: string;
  imageUrl: string;
}

// OVERVIEW SECTION
export interface ObjectiveType {
  title: string;
  list: string[];
}
export interface CIFGalleryImages {
  url: string;
}
export interface OverviewSectionProps {
  description: string;
  objectives: ObjectiveType;
  images: CIFGalleryImages[];
}

export interface DirectorMessageSectionProps {
  title: string;
  message: string;
  imageUrl: string;
  name: string;
  role: string;
}

export interface CIFTeamMember {
  name: string;
  designation: string;
  image: string;
  link: string;
}

export interface CIFCTA {
  text: string;
  url: string;
  iconUrl: string;
}

export interface CIFTeamSectionProps {
  title: string;
  cta: CIFCTA;
  teamMember: CIFTeamMember;
}

export interface CIFFacility {
  label: string;
  url: string;
}

export interface CIFFacilitiesSectionProps {
  title: string;
  facilities: CIFFacility[];
}

export interface Achievement {
  title: string;
  imageUrl: string;
  url: string;
}
export interface AchievementSectionProps {
  title: string;
  achievements: Achievement[];
}

export interface UpcomingEventsSectionProps {
  title: string;
  imageUrl: string;
}

// CIF DATA
export interface CIFSectionData {
  heroSection: HeroSectionProps;
  overviewSection: OverviewSectionProps;
  directorMessageSection: DirectorMessageSectionProps;
  cifTeamSection: CIFTeamSectionProps;
  cifFacilitiesSection: CIFFacilitiesSectionProps;
}

// CIF PAGE
export interface CIFSectionProps {
  data: CIFSectionData;
}
