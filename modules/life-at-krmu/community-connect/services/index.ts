import { cache } from "react";
import data from "../data/index.json";
import { CommunityConnectResponse } from "../types";

export const getCommunityConnectData = cache(
  async (): Promise<CommunityConnectResponse> => {
    return data;
  },
);
