import { RendererConfig } from "@/lib/types/common";
import {
  CampusLifeSection,
  HeroSection,
  StudentLifeSection,
} from "../sections";

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
];
