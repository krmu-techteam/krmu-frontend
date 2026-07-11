import { cache } from "react";
import RESEARCH_CENTRE_DATA from "../data/index.json";
import { ResearchCentreResponse } from "../types";

export const getResearchCentreContent = cache(
  async (): Promise<ResearchCentreResponse> => RESEARCH_CENTRE_DATA,
);
