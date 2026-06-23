export interface HeroSectionProps {
  title: string;
  subTitle: string;
  scrollImage: string;
  scrollArrow: string;
}

interface dataProps {
  heroSection: HeroSectionProps;
}

export interface OverviewContentProps {
  data: dataProps;
}
