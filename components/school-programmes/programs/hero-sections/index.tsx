import { HeroSection } from "@/lib/types/school-programme";
import { StrapiMedia } from "@/lib/types/common";
import ProgramHeroCinematic from "./ProgramHeroCinematic";
import ProgramHeroDefault from "./ProgramHeroDefault";

type Props = {
  title: string;
  highlightitle: string;
  heroSection: HeroSection;
  formId?: string;
  slug: string;
  dreamcareerSection?: {
    highestpackagenum: string;
    highestpackagetitle: string;
    campusrecruitersnum: string;
    campusrecruitertitle: string;
    placementassistnum: string;
    placementassisttitle: string;
    heading: string;
  };
  logos?: StrapiMedia[];
};

const ProgramHero = (props: Props) => {
  const { slug } = props;

  switch (slug) {
    case "bba-hr":
    case "b-tech-cse":
    case "btech-cse-ai-ml":
    case "btech-cse-cyber-security":
    case "btech-cse-in-data-science":
    case "btech-full-stack-development":
    case "btech-cse-ui-ux":
      return <ProgramHeroCinematic {...props} />;
    default:
      return <ProgramHeroDefault {...props} />;
  }
};

export default ProgramHero;
