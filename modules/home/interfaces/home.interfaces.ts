import { TestimonialItem } from "@/lib/constants/testimonial";
import { HomePageComponent } from "../types";

export interface IHomeRepository {
  getHomePage(): Promise<HomePageComponent[]>;
  getTestimonials(): Promise<TestimonialItem[]>;
}

export interface IHomeService {
  getHomePage(): Promise<HomePageComponent[]>;
  getNewsEvents(page?: number, perPage?: number): Promise<object>;
  getTestimonials(): Promise<TestimonialItem[]>;
}
