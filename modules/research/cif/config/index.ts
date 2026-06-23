import {
  CIFTeamSection,
  DirectorMessageSection,
  HeroSection,
  OverviewSection,
} from "../sections";
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
  {
    key: "director-message",
    Component: DirectorMessageSection,
    propName: "directorMessageSection",
    dataKey: "directorMessageSection",
  },
  {
    key: "cif-team",
    Component: CIFTeamSection,
    propName: "cifTeamSection",
    dataKey: "cifTeamSection",
  },
];
