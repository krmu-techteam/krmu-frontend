export interface HeroSectionProps{
    title: string;
    bannerImage: string;
    description: string[];
}
export interface StatItem {
  id: number;
  number: string;
  label: string;
  bgColor: string;
}

export interface HighlightSectionProps {
  stats: StatItem[];
}