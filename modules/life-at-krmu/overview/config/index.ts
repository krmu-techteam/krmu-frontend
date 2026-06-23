import { RendererConfig } from "@/lib/types/common";
import { HeroSection } from "../sections";

export const Sections: RendererConfig[] = [
  {
    key: "hero",
    Component: HeroSection,
    propName: "heroSection",
    dataKey: "heroSection",
  },
];
