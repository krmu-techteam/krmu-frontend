import { RendererConfig } from "@/lib/types/common";
import {
  AwardsSection,
  BenefitsSection,
  CommitteeSection,
  EligibilitySection,
  GallerySection,
  HeroSection,
  NssMottoSection,
  NssOverviewSection,
  ObjectivesSection,
} from "@/presentation/life-at-krmu/community-connect/sections";

export const Sections: RendererConfig[] = [
  {
    key: "hero",
    Component: HeroSection,
    propName: "heroSection",
    dataKey: "heroSection",
  },
  {
    key: "nssMotto",
    Component: NssMottoSection,
    propName: "nssMottoSection",
    dataKey: "nssMottoSection",
  },
  {
    key: "nssOverview",
    Component: NssOverviewSection,
    propName: "nssOverviewSection",
    dataKey: "nssOverviewSection",
  },
  {
    key: "objectives",
    Component: ObjectivesSection,
    propName: "objectivesSection",
    dataKey: "objectivesSection",
  },
  {
    key: "benefits",
    Component: BenefitsSection,
    propName: "benefitsSection",
    dataKey: "benefitsSection",
  },
  {
    key: "committee",
    Component: CommitteeSection,
    propName: "committeeSection",
    dataKey: "committeeSection",
  },
  {
    key: "eligibility",
    Component: EligibilitySection,
    propName: "eligibilitySection",
    dataKey: "eligibilitySection",
  },
  {
    key: "gallery",
    Component: GallerySection,
    propName: "gallerySection",
    dataKey: "gallerySection",
  },
  {
    key: "awards",
    Component: AwardsSection,
    propName: "awardsSection",
    dataKey: "awardsSection",
  },
];
