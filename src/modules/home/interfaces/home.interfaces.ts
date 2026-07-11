import { TestimonialItem } from "@/lib/constants/testimonial";
import { HomePageComponent, NewsEventsResponse } from "../types";

export interface IHomeRepository {
  getHomePage(): Promise<HomePageComponent[]>;
  getTestimonials(): Promise<TestimonialItem[]>;
  getNewsEvents(page?: number, perPage?: number): Promise<NewsEventsResponse>;
}

export interface IHomeService {
  getHomePage(): Promise<HomePageComponent[]>;
  getNewsEvents(page?: number, perPage?: number): Promise<NewsEventsResponse>;
  getTestimonials(): Promise<TestimonialItem[]>;
}
