import {
  HomePageComponent,
  HomePageResponse,
  NewsEventDomain,
  NewsEventsResult,
  TestimonialResponse,
  WPNewsEventRaw,
  WPNewsEventsRawResponse,
} from "./home.types";

export class HomeMapper {
  // ── Strapi ──────────────────────────────────────────────

  static toComponentList(response: HomePageResponse): HomePageComponent[] {
    return response.data.PageContent;
  }

  static toTestimonialList(response: TestimonialResponse) {
    return response.data;
  }

  // ── WordPress ──────────────────────────────────────────────

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
