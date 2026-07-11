import { cache } from "react";
import RESEARCH_AND_INNOVATION_DATA from "../data/hero-section.json";
import { ResearchAndInnovationResponse } from "../types";

export const getResearchandinnovationContent = cache(
  async (): Promise<ResearchAndInnovationResponse> =>
    RESEARCH_AND_INNOVATION_DATA,
);
