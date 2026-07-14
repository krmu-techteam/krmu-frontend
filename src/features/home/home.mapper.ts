/**
 * @file features/home/home.mapper.ts
 * Sirf transform — koi API call nahi
 */

import {
  HomePageComponent,
  HomePageDomain,
  HomePageResponse,
  NewsEventDomain,
  NewsEventsResult,
  TestimonialItem,
  TestimonialResponse,
  WPNewsEventRaw,
  WPNewsEventsRawResponse,
} from "./home.types";

export class HomeMapper {
  // ── Strapi Home Page ─────────────────────────────────

  static toDomain(response: HomePageResponse): HomePageDomain {
    return {
      components: response.data.PageContent,
      testimonials: [],
    };
  }

  static toComponentList(response: HomePageResponse): HomePageComponent[] {
    return response.data.PageContent;
  }

  // ── Testimonials ─────────────────────────────────────

  static toTestimonialList(response: TestimonialResponse): TestimonialItem[] {
    return response.data;
  }

  // ── WordPress News & Events ───────────────────────────

  static toNewsEventDomain(raw: WPNewsEventRaw): NewsEventDomain {
    return {
      id: raw.id,
      documentId: raw.documentId,
      title: raw.title.rendered,
      slug: raw.slug,
      date: raw.date,
      modifiedAt: raw.modified,
      featuredMediaId: raw.featured_media,
      eventStartDate: raw.acf?.event_start_date ?? null,
      eventVenue: raw.acf?.event_venue ?? "",
      eventImageIds: raw.acf?.event_images ?? [],
    };
  }

  static toNewsEventsResult(raw: WPNewsEventsRawResponse): NewsEventsResult {
    return {
      data: raw.data.map(HomeMapper.toNewsEventDomain),
      pagination: raw.pagination,
    };
  }
}
