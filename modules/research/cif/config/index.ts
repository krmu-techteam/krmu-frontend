import { HeroSection, OverviewSection } from "../sections";
import { RendererConfig } from "@/lib/types/common";

export const CIFConfig: RendererConfig[] = [
  {
    key: "hero",
    Component: HeroSection,
    propName: "heroSection",
    dataKey: "heroSection",
  },
  {
    key: "overview",
    Component: OverviewSection,
    propName: "overviewSection",
    dataKey: "overviewSection",
  },
];
