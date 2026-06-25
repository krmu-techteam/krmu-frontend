import { HeroPageContentType } from "../types/contentHero";
import HeroContentData from "../data/heroContent.json";
import { LogoPageContentType } from "../types/contentLogo";
import LogoContentData from "../data/logoContent.json";
import { CareerOutcomePageContentType } from "../types/contentCareerOutcome";
import CareerOutcomeContentData from "../data/careerOutcomeContent.json";

export function getContent(): HeroPageContentType {
  return HeroContentData as HeroPageContentType;
}

export function getLogoContent(): LogoPageContentType {
  return LogoContentData as LogoPageContentType;
}

export function getCareerOutcomeContent(): CareerOutcomePageContentType {
  return CareerOutcomeContentData as CareerOutcomePageContentType;
}
