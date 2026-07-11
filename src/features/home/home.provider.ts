import { INewsProvider, IHomeService } from "./home.interfaces";
import { HomeRepository } from "./home.repositories";
import { HomeService } from "./home.services";

type HomeServiceInstance = IHomeService;

let _instance: HomeServiceInstance | null = null;

export function getHomeService(): HomeServiceInstance {
  if (!_instance) {
    const repository = new HomeRepository();
    _instance = new HomeService(repository);
  }
  return _instance;
}

export function getNewsService(): INewsProvider {
  return getHomeService();
}
