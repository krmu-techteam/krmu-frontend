import { RendererConfig } from "@/lib/types/common";
import {
  ActivityGallerySection,
  AwardsSection,
  BenefitsSection,
  CommitteeActivitiesSection,
  CommitteeSection,
  ContactSection,
  EligibilitySection,
  FuturePlansSection,
  HeroSection,
  MottoSection,
  ResourcesSection,
} from "@/presentation/life-at-krmu/youth-red-cross-committee/sections";

export const Sections: RendererConfig[] = [
  {
    key: "hero",
    Component: HeroSection,
    propName: "heroSection",
    dataKey: "heroSection",
  },
  {
    key: "committee",
    Component: CommitteeSection,
    propName: "committeeSection",
    dataKey: "committeeSection",
  },
  {
    key: "resources",
    Component: ResourcesSection,
    propName: "resourcesSection",
    dataKey: "resourcesSection",
  },
  {
    key: "benefits",
    Component: BenefitsSection,
    propName: "benefitsSection",
    dataKey: "benefitsSection",
  },
  {
    key: "eligibility",
    Component: EligibilitySection,
    propName: "eligibilitySection",
    dataKey: "eligibilitySection",
  },
  {
    key: "committeeActivities",
    Component: CommitteeActivitiesSection,
    propName: "committeeActivitiesSection",
    dataKey: "committeeActivitiesSection",
  },
  {
    key: "awards",
    Component: AwardsSection,
    propName: "awardsSection",
    dataKey: "awardsSection",
  },
  {
    key: "motto",
    Component: MottoSection,
    propName: "mottoSection",
    dataKey: "mottoSection",
  },
  {
    key: "futurePlans",
    Component: FuturePlansSection,
    propName: "futurePlansSection",
    dataKey: "futurePlansSection",
  },
  {
    key: "activityGallery",
    Component: ActivityGallerySection,
    propName: "activityGallerySection",
    dataKey: "activityGallerySection",
  },
  {
    key: "contact",
    Component: ContactSection,
    propName: "contactSection",
    dataKey: "contactSection",
  },
];
