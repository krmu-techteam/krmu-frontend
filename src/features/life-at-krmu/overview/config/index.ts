import { RendererConfig } from "@/lib/types/common";
import {
  CampusLifeSection,
  HeroSection,
  HostelLifeSection,
  ImpactingLivesSection,
  LibrarySection,
  StudentLifeSection,
  StudentTestimonialsSection,
  WellBeingAndInterestSection,
} from "@/presentation/life-at-krmu/overview/sections";

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
  {
    key: "student-life",
    Component: StudentLifeSection,
    propName: "studentLifeSection",
    dataKey: "studentLifeSection",
  },
  {
    key: "well-being-and-interest",
    Component: WellBeingAndInterestSection,
    propName: "wellBeingAndInterestSection",
    dataKey: "wellBeingAndInterestSection",
  },
  {
    key: "student-testimonial",
    Component: StudentTestimonialsSection,
    propName: "studentTestimonialSection",
    dataKey: "studentTestimonialSection",
  },
  {
    key: "hostel-life",
    Component: HostelLifeSection,
    propName: "hostelLifeSection",
    dataKey: "hostelLifeSection",
  },
  {
    key: "impacting-lives",
    Component: ImpactingLivesSection,
    propName: "impactingLivesSection",
    dataKey: "impactingLivesSection",
  },
  {
    key: "library",
    Component: LibrarySection,
    propName: "librarySection",
    dataKey: "librarySection",
  },
];
