import { cache } from "react";
import data from "../data/index.json";
import { OverviewContentProps } from "../types";

export const getOverviewContent = cache(
  async (): Promise<OverviewContentProps> => data,
);
