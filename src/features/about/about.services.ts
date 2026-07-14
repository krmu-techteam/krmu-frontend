import { AboutComponentKey } from "./about.constants";
import {
  AboutComponentMap,
  IAboutRepository,
  IAboutService,
} from "./about.interfaces";
import { AboutPageDomain } from "./about.types";

export class AboutService implements IAboutService {
  constructor(private readonly repository: IAboutRepository) {}

  async getAboutPage(): Promise<AboutPageDomain> {
    return await this.repository.getAboutPage();
  }

  async getSection<K extends AboutComponentKey>(
    key: K,
  ): Promise<AboutComponentMap[K] | undefined> {
    return await this.repository.getSection(key);
  }
}
