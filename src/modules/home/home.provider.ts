import { HomeRepository } from "./repositories";
import { HomeService } from "./services";

export const homeService = new HomeService(new HomeRepository());
