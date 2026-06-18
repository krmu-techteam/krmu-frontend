import { cache } from "react";
import heroData from "../data/hero.json";
import highlightData from "../data/highlight.json";
import { HeroSectionProps, StatItem } from "../types";

export const getHeroSectionContent = cache(
  async (): Promise<HeroSectionProps> => heroData.heroSection,
);

export const getHighlightSectionContent = cache(
  async (): Promise<StatItem[]> => highlightData.stats,
);
