import { cache } from "react";
import data from "./data/index.json";
import { YouthRedCrossCommitteeResponse } from "./youth-red-cross-committee.types";

export const getYouthRedCrossCommitteeData = cache(
  async (): Promise<YouthRedCrossCommitteeResponse> => {
    return data;
  },
);
