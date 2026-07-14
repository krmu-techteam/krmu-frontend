
import {
  AcademicResourcesSection,
  CIFSection,
  ContactEnquiriesSection,
  HeroSection,
  IPRLegalEthicsSection,
  KEICSection,
  OnGoingProjectsSection,
  PublicationAchievementsSection,
  RDCSection,
  ResearchAchievementsSection,
  ResearchDeanMessageSection,
  ResearchHighlightSection,
  TeamLibrarySection,
  TeamRDCSection,
} from "@/presentation/research/research-and-innovation/sections"; 

export const researchSections = [
  {
    key: "hero",
    Component: HeroSection,
    propName: "heroSection",
    dataKey: "heroSection",
  },
  {
    key: "rdc",
    Component: RDCSection,
    propName: "rdcSection",
    dataKey: "rdcSection",
  },
  {
    key: "research-dean-message",
    Component: ResearchDeanMessageSection,
    propName: "researchDeanMessageSection",
    dataKey: "researchDeanMessageSection",
  },
  {
    key: "team-rdc",
    Component: TeamRDCSection,
    propName: "teamRdcSection",
    dataKey: "teamRdcSection",
  },
  {
    key: "cif",
    Component: CIFSection,
    propName: "cifSection",
    dataKey: "cifSection",
  },
  {
    key: "keic",
    Component: KEICSection,
    propName: "keicSection",
    dataKey: "keicSection",
  },
  {
    key: "ipr",
    Component: IPRLegalEthicsSection,
    propName: "iprLegalEthicsSection",
    dataKey: "iprLegalEthicsSection",
  },
  {
    key: "ongoing",
    Component: OnGoingProjectsSection,
    propName: "onGoingProjectsSection",
    dataKey: "onGoingProjectsSection",
  },
  {
    key: "highlight",
    Component: ResearchHighlightSection,
    propName: "researchHighlightSection",
    dataKey: "researchHighlightSection",
  },
  {
    key: "achievement",
    Component: ResearchAchievementsSection,
    propName: "researchAchievementSection",
    dataKey: "researchAchievementSection",
  },
  {
    key: "publication",
    Component: PublicationAchievementsSection,
    propName: "publicationAndAchievementSection",
    dataKey: "publicationAndAchievementSection",
  },
  {
    key: "academic-resources",
    Component: AcademicResourcesSection,
    propName: "academicResourcesSection",
    dataKey: "academicResourcesSection",
  },
  {
    key: "team-library",
    Component: TeamLibrarySection,
    propName: "teamLibrarySection",
    dataKey: "teamLibrarySection",
  },
  {
    key: "contact-enquiries",
    Component: ContactEnquiriesSection,
    propName: "contactEnquiriesSection",
    dataKey: "contactEnquiriesSection",
  },
] as const;