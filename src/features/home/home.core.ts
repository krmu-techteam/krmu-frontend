import { apiRequest } from "@/lib/api-request";
import { BaseRepository } from "@/lib/core/base.repository";
import { BaseService } from "@/lib/core/base.service";
import { createProvider } from "@/lib/core/create-provider";
import {
  HOMEPAGE_QUERY,
  NEWS_EVENTS_QUERY,
  TESTIMONIALS_QUERY,
} from "./home.queries";
import { HomeMapper } from "./home.mapper";
import {
  HomeComponentMap,
  HomePageDomain,
  HomePageResponse,
  NewsEventsResult,
  TestimonialItem,
  TestimonialResponse,
  WPNewsEventsRawResponse,
} from "./home.types";

// ── 1. Repository ────────────────────────────────────────

class HomeRepository extends BaseRepository<HomePageResponse, HomePageDomain> {
  protected readonly query = HOMEPAGE_QUERY;

  protected mapToDomain(raw: HomePageResponse): HomePageDomain {
    return HomeMapper.toDomain(raw);
  }

  protected emptyDomain(): HomePageDomain {
    return { components: [], testimonials: [] };
  }

  // ── Typed component accessor ─────────────────────────

  async getComponent<K extends keyof HomeComponentMap>(
    key: K,
  ): Promise<HomeComponentMap[K] | undefined> {
    const { components } = await this.getData();
    return components.find(
      (item): item is HomeComponentMap[K] => item.__component === key,
    );
  }

  // ── Testimonials (separate Strapi endpoint) ──────────

  private testimonialsPromise: Promise<TestimonialItem[]> | null = null;

  async getTestimonials(): Promise<TestimonialItem[]> {
    if (!this.testimonialsPromise) {
      this.testimonialsPromise = apiRequest<TestimonialResponse>(
        TESTIMONIALS_QUERY,
      )
        .then(HomeMapper.toTestimonialList)
        .catch((err) => {
          console.error("[HomeRepository] Testimonials fetch error:", err);
          this.testimonialsPromise = null;
          return [];
        });
    }
    return this.testimonialsPromise;
  }

  // ── News & Events (WordPress endpoint) ───────────────

  async getNewsEvents(
    page: number = 1,
    perPage: number = 10,
  ): Promise<NewsEventsResult> {
    try {
      const res = await fetch(NEWS_EVENTS_QUERY(page, perPage), {
        next: { revalidate: 3600 },
      });

      if (!res.ok) throw new Error("Failed to fetch news & events");

      const data = await res.json();
      const total = Number(res.headers.get("X-WP-Total"));
      const totalPages = Number(res.headers.get("X-WP-TotalPages"));

      const rawResponse: WPNewsEventsRawResponse = {
        data,
        pagination: { page, perPage, total, totalPages },
      };

      return HomeMapper.toNewsEventsResult(rawResponse);
    } catch (error) {
      console.error("[HomeRepository] News & Events fetch error:", error);
      return {
        data: [],
        pagination: { page, perPage, total: 0, totalPages: 0 },
      };
    }
  }
}

// ── 2. Service Interface ─────────────────────────────────

export interface IHomeService {
  getData(): Promise<HomePageDomain>;
  getComponent<K extends keyof HomeComponentMap>(
    key: K,
  ): Promise<HomeComponentMap[K] | undefined>;
  getTestimonials(): Promise<TestimonialItem[]>;
  getNewsEvents(page?: number, perPage?: number): Promise<NewsEventsResult>;
}

// ── 3. Service ───────────────────────────────────────────

class HomeService extends BaseService<HomePageDomain> implements IHomeService {
  constructor(private readonly homeRepository: HomeRepository) {
    super(homeRepository);
  }

  async getComponent<K extends keyof HomeComponentMap>(
    key: K,
  ): Promise<HomeComponentMap[K] | undefined> {
    return this.homeRepository.getComponent(key);
  }

  async getTestimonials(): Promise<TestimonialItem[]> {
    return this.homeRepository.getTestimonials();
  }

  async getNewsEvents(
    page?: number,
    perPage?: number,
  ): Promise<NewsEventsResult> {
    return this.homeRepository.getNewsEvents(page, perPage);
  }
}

// ── 4. Provider (Singleton) ──────────────────────────────

export const getHomeService = createProvider<IHomeService>(
  () => new HomeService(new HomeRepository()),
);

// backward compat — news service
export const getNewsService = () => getHomeService();
