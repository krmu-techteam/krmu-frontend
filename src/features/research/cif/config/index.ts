import {
  AchievementSection,
  CIFFacilitiesSection,
  CIFTeamSection,
  DirectorMessageSection,
  HeroSection,
  OverviewSection,
  UpcomingEventsSection,
} from "@/presentation/research/cif/sections";
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
  {
    key: "cif-facilities",
    Component: CIFFacilitiesSection,
    propName: "cifFacilitiesSection",
    dataKey: "cifFacilitiesSection",
  },
  {
    key: "achivement",
    Component: AchievementSection,
    propName: "achievementSection",
    dataKey: "achievementSection",
  },
  {
    key: "upcoming-events",
    Component: UpcomingEventsSection,
    propName: "upcomingEventsSection",
    dataKey: "upcomingEventsSection",
  },
];
