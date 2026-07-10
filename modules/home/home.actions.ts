import { cache } from "react";
import { homeService } from "./home.provider";

export const getHomePageContent = cache(async () => homeService.getHomePage());
