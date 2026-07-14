 

import { HERO_CONFIGS } from "@/features/programs/constants";
import { ProgramHeroCinematic, ProgramHeroDefault } from "../components";
import { HeroSectionProps } from "@/features/programs/types";

 
const ProgramHero = (props: HeroSectionProps) => {
  const { slug } = props;

  if (slug in HERO_CONFIGS) {
    return <ProgramHeroCinematic {...props} />;
  }
  return <ProgramHeroDefault {...props} />;
};

export default ProgramHero;
