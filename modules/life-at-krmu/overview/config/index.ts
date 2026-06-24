import { RendererConfig } from "@/lib/types/common";
import { CampusLifeSection, HeroSection } from "../sections";

export const Sections: RendererConfig[] = [
  {
    key: "hero",
    Component: HeroSection,
    propName: "heroSection",
    dataKey: "heroSection",
  },
  {
    key: "campus-life",
    Component: CampusLifeSection,
    propName: "campusLifeSection",
    dataKey: "campusLifeSection",
  },
];
