import { cache } from "react";
import careerDevelopmentCentre from "./data/career-development-centre.json";
import { CareerDevelopmentCentre } from "./career-development-centre.types";

export const getCareerDevelopmentCentreContent = cache(
  async (): Promise<CareerDevelopmentCentre> => {
    return careerDevelopmentCentre.data;
  }
);
 