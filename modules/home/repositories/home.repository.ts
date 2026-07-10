import { apiRequest } from "@/lib/api-request";
import { IHomeRepository } from "../interfaces/home.interfaces";
import { HomePageComponent, HomePageResponse } from "../types";
import { HOMEPAGE_QUERY, TESTIMONIALS_QUERY } from "../constants";
import { TestimonialItem, TestimonialResponse } from "@/lib/constants/testimonial";

export class HomeRepository implements IHomeRepository {
  async getHomePage(): Promise<HomePageComponent[]> {
    const response = await apiRequest<HomePageResponse>(HOMEPAGE_QUERY);
    return response.data.PageContent;
  }

  async getTestimonials(): Promise<TestimonialItem[]> {
    try {
      const response = await apiRequest<TestimonialResponse>(TESTIMONIALS_QUERY);
      return response.data;
    } catch (error) {
      console.error("Testimonials repository fetch error:", error);
      return [];
    }
  }
}
