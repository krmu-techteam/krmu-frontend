 

import { HERO_CONFIGS } from "../constants";
import { ProgramHeroCinematic, ProgramHeroDefault } from "../components";
import { HeroSectionProps } from "../types";

 
const ProgramHero = (props: HeroSectionProps) => {
  const { slug } = props;

  if (slug in HERO_CONFIGS) {
    return <ProgramHeroCinematic {...props} />;
  }
  return <ProgramHeroDefault {...props} />;
};

export default ProgramHero;
