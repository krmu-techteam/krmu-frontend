import { cache } from "react";
import PHD_REGULATIONS_DATA from "../data/phd-regulations.json";
import { PhdRegulationResponse } from "../types";

export const getHeroSectionContent = cache(
  async (): Promise<PhdRegulationResponse> =>
    PHD_REGULATIONS_DATA
);

 
