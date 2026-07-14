import { cache } from "react";
import researchOverviewData from "./data/research-overview.json"

export const getResearchOverviewContent = cache(async () => {
  return researchOverviewData.data;
});