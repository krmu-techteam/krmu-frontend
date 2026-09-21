import { HeroSection } from "@/lib/types/school-programme";
import { StrapiMedia } from "@/lib/types/common";
import ProgramHeroCinematic from "./ProgramHeroCinematic";
import ProgramHeroDefault from "./ProgramHeroDefault";
import { heroConfigs } from "../data/programs";

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

  if (slug in heroConfigs) {
    return <ProgramHeroCinematic {...props} />;
  }
  return <ProgramHeroDefault {...props} />;
};

export default ProgramHero;
