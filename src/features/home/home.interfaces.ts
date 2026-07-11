// home.interfaces.ts

import {
  HomeComponentMap,
  HomePageComponent,
  NewsEventsResult,
  TestimonialItem,
} from "./home.types";

export interface IPageDataProvider {
  getHomePage(): Promise<HomePageComponent[]>;

  getComponent<K extends keyof HomeComponentMap>(
    key: K,
  ): Promise<HomeComponentMap[K] | undefined>;
}

export interface ITestimonialProvider {
  getTestimonials(): Promise<TestimonialItem[]>;
}

export interface INewsProvider {
  getNewsEvents(page?: number, perPage?: number): Promise<NewsEventsResult>;
}

export interface IHomeRepository
  extends IPageDataProvider, ITestimonialProvider, INewsProvider {}

export interface IHomeService {
  getComponent<K extends keyof HomeComponentMap>(
    key: K,
  ): Promise<HomeComponentMap[K] | undefined>;

  getTestimonials(): Promise<TestimonialItem[]>;

  getNewsEvents(page?: number, perPage?: number): Promise<NewsEventsResult>;
}
