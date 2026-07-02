export interface ButtonType {
  title: string;
  link: string;
  variant?: "primary" | "secondary";
}

export interface StatType {
  label: string;
  value: string;
}

export interface BannerType {
  text: string;
  text2: string;
  linkText?: string;
  link?: string;
}

export interface HeroContentType {
  sub_heading: string;
  heading: string;
  content: string;
  content2?: string;
  image: string;
  button: ButtonType[];
  stats: StatType[];
  banner: BannerType;
}

export interface HeroPageContentType {
  hero: HeroContentType;
}
