import { TestimonialItem } from "@/lib/constants/testimonial";
import { IHomeRepository, IHomeService } from "../interfaces";
import { HomeComponentMap, HomePageComponent } from "../types";

export class HomeService implements IHomeService {
  constructor(private readonly repository: IHomeRepository) {}
  async getHomePage(): Promise<HomePageComponent[]> {
    return await this.repository.getHomePage();
  }

  async getComponent<K extends keyof HomeComponentMap>(
    component: K,
  ): Promise<HomeComponentMap[K] | undefined> {
    const data = await this.getHomePage();

    return data.find(
      (item): item is HomeComponentMap[K] => item.__component === component,
    );
  }

  async getNewsEvents(page: number = 1, perPage: number = 10) {
    const { getHomeNewsEvents } = await import("./index");
    return await getHomeNewsEvents(page, perPage);
  }

  async getTestimonials(): Promise<TestimonialItem[]> {
    return await this.repository.getTestimonials();
  }
}
