import { apiRequest } from "@/lib/api-request";
import { IHomeRepository } from "./home.interfaces";
import {
  HOMEPAGE_QUERY,
  TESTIMONIALS_QUERY,
  NEWS_EVENTS_QUERY,
} from "./home.queries";
import { HomeMapper } from "./home.mapper";
import {
  HomeComponentMap,
  HomePageComponent,
  HomePageResponse,
  NewsEventsResult,
  TestimonialItem,
  TestimonialResponse,
  WPNewsEventsRawResponse,
} from "./home.types";

export class HomeRepository implements IHomeRepository {
  private homePageDataPromise: Promise<HomePageComponent[]> | null = null;

  async getHomePage(): Promise<HomePageComponent[]> {
    if (!this.homePageDataPromise) {
      this.homePageDataPromise = (async () => {
        try {
          const raw = await apiRequest<HomePageResponse>(HOMEPAGE_QUERY);
          return HomeMapper.toComponentList(raw);
        } catch (error) {
          console.error("Home page repository fetch error:", error);
          this.homePageDataPromise = null;
          return [];
        }
      })();
    }
    return this.homePageDataPromise;
  }

  async getComponent<K extends keyof HomeComponentMap>(
    key: K,
  ): Promise<HomeComponentMap[K] | undefined> {
    const data = await this.getHomePage();
    return data.find(
      (item): item is HomeComponentMap[K] => item.__component === key,
    );
  }

  async getNewsEvents(
    page: number = 1,
    perPage: number = 10,
  ): Promise<NewsEventsResult> {
    try {
      const res = await fetch(NEWS_EVENTS_QUERY(page, perPage), {
        next: {
          revalidate: 3600,
        },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch news & events");
      }

      const data = await res.json();

      const total = Number(res.headers.get("X-WP-Total"));
      const totalPages = Number(res.headers.get("X-WP-TotalPages"));

      const rawResponse: WPNewsEventsRawResponse = {
        data,
        pagination: {
          page,
          perPage,
          total,
          totalPages,
        },
      };

      return HomeMapper.toNewsEventsResult(rawResponse);
    } catch (error) {
      console.error("WP news & events fetch error:", error);
      return {
        data: [],
        pagination: {
          page,
          perPage,
          total: 0,
          totalPages: 0,
        },
      };
    }
  }

  async getTestimonials(): Promise<TestimonialItem[]> {
    try {
      const response =
        await apiRequest<TestimonialResponse>(TESTIMONIALS_QUERY);
      return HomeMapper.toTestimonialList(response);
    } catch (error) {
      console.error("Testimonials repository fetch error:", error);
      return [];
    }
  }
}
