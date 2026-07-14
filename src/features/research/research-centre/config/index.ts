import { HeroSection, ResearchCentersSection } from "@/presentation/research/research-centre/sections";

export const researchCentreConfig = [
  {
    key: "hero",
    Component: HeroSection,
    propName: "heroSection",
    dataKey: "heroSection",
  },
  {
    key: "research-centres",
    Component: ResearchCentersSection,
    propName: "researchCentersSection",
    dataKey: "researchCentersSection",
  },
] as const;
