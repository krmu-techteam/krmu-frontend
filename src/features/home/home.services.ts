import { IHomeRepository, IHomeService } from "./home.interfaces";
import {
  HomeComponentMap,
  HomePageComponent,
  NewsEventsResult,
  TestimonialItem,
} from "./home.types";

export class HomeService implements IHomeService {
  constructor(private readonly repository: IHomeRepository) {}

  async getHomePage(): Promise<HomePageComponent[]> {
    return this.repository.getHomePage();
  }

  async getComponent<K extends keyof HomeComponentMap>(
    key: K,
  ): Promise<HomeComponentMap[K] | undefined> {
    const components = await this.getHomePage();
    return components.find(
      (item): item is HomeComponentMap[K] => item.__component === key,
    );
  }

  async getNewsEvents(
    page?: number,
    perPage?: number,
  ): Promise<NewsEventsResult> {
    return await this.repository.getNewsEvents(page, perPage);
  }

  async getTestimonials(): Promise<TestimonialItem[]> {
    return await this.repository.getTestimonials();
  }
}
