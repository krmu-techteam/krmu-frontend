import { cache } from "react";
import DATA from "../data/index.json";
import { ApiResponse } from "../types";

export const getLibraryContent = cache(async (): Promise<ApiResponse> => {
  return DATA;
});
