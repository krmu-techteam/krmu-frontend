import { StrapiMedia, CounterItem, AlumniMedia, ButtonType } from "@/lib/types/common";

export interface Button {
  id: number;
  buttontext: string;
  buttonlink: string;
  buttonclass: string;
}

export interface HeroBannerProps {
  title: string;
  admBtn: Button;
}

export interface LogoMarqueeProps {
  logos?: StrapiMedia[];
  speed?: number;
}

export interface OverviewSectionProps {
  heading: string;
  subheading: string;
  // desc: ParagraphBlock[];
  desc: string;
  counters: CounterItem[];
  slug: string;
}

export interface StatCardProps {
  title: string;
  desc: string;
  index?: number;
}

export interface AlumniSectionProps {
  title: string;
  alumniLogos: AlumniMedia[] | StrapiMedia[];
};

export interface AlumniLogoCarouselProps {
  AluLogos: AlumniMedia[] | StrapiMedia[];
};

export interface AlumniLogoCardProps {
  logoUrl: string;
  altText: string;
};

export interface ExcitedNewsletterSectionProps {
  excitedHeading: string;
  excitedDesc: string;
  excbtns: ButtonType[];
  newsLetterHeading: string;
  newsLetterDesc: string;
  newsLetterBtns: Button[];
};