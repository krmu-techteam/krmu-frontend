import { IAboutService } from "./about.interfaces";
import { AboutRepository } from "./about.repositories";
import { AboutService } from "./about.services";

let _instance: IAboutService | null = null;

export function getAboutService(): IAboutService {
  if (!_instance) {
    const repository = new AboutRepository();
    _instance = new AboutService(repository);
  }
  return _instance;
}
