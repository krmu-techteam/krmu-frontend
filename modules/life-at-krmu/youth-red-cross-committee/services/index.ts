import { cache } from "react";
import data from "../data/index.json";
import { YouthRedCrossCommitteeResponse } from "../types";

export const getYouthRedCrossCommitteeData = cache(
  async (): Promise<YouthRedCrossCommitteeResponse> => {
    return data;
  },
);
