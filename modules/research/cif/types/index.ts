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

// CIF DATA
export interface CIFSectionData {
  heroSection: HeroSectionProps;
  overviewSection: OverviewSectionProps;
}

// CIF PAGE
export interface CIFSectionProps {
  data: CIFSectionData;
}
