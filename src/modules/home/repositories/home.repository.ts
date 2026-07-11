import { apiRequest } from "@/lib/api-request";
import { IHomeRepository } from "../interfaces/home.interfaces";
import {
  HomePageComponent,
  HomePageResponse,
  NewsEventsResponse,
} from "../types";
import { HOMEPAGE_QUERY, TESTIMONIALS_QUERY } from "../constants";
import {
  TestimonialItem,
  TestimonialResponse,
} from "@/lib/constants/testimonial";
import { getNewsEventsWP } from "@/lib/api/news-events";

export class HomeRepository implements IHomeRepository {
  async getHomePage(): Promise<HomePageComponent[]> {
    const response = await apiRequest<HomePageResponse>(HOMEPAGE_QUERY);
    return response.data.PageContent;
  }

  async getNewsEvents(
    page: number = 1,
    perPage: number = 10,
  ): Promise<NewsEventsResponse> {
    try {
      return await getNewsEventsWP(page, perPage);
    } catch (error) {
      console.error("News and events repository fetch error:", error);
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
      return response.data;
    } catch (error) {
      console.error("Testimonials repository fetch error:", error);
      return [];
    }
  }
}
