import { cache } from "react";
import CIF_DATA from "../data/index.json";
import { CIFSectionProps } from "../types";

export const getCIFContent = cache(
  async (): Promise<CIFSectionProps> => CIF_DATA,
);
