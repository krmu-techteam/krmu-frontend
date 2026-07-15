import { BaseRepository } from "@/lib/core/base.repository";
import { BaseService } from "@/lib/core/base.service";
import { createProvider } from "@/lib/core/create-provider";
import { OVERVIEW_QUERY } from "./overview.queries";
import { OverviewMapper } from "./overview.mapper";
import { LifeAtKRMUOverviewDomain, LifeAtKRMUOverviewResponse, OverviewContentProps } from "./overview.types";
import staticData from "./data/index.json";

// ── 1. Repository ────────────────────────────────────────

class OverviewRepository extends BaseRepository<
  LifeAtKRMUOverviewResponse,
  LifeAtKRMUOverviewDomain
> {
  protected readonly query = OVERVIEW_QUERY;

  protected mapToDomain(raw: LifeAtKRMUOverviewResponse): LifeAtKRMUOverviewDomain {
    return OverviewMapper.toDomain(raw);
  }

  protected emptyDomain(): LifeAtKRMUOverviewDomain {
    return EMPTY_OVERVIEW;
  }
}

// ── 2. Service Interface ─────────────────────────────────

export interface IOverviewService {
  getData(): Promise<LifeAtKRMUOverviewDomain>;
  getStaticData(): Promise<OverviewContentProps>;
  getLatestEvents(): Promise<any>;
}

// ── 3. Service ───────────────────────────────────────────

class OverviewService
  extends BaseService<LifeAtKRMUOverviewDomain>
  implements IOverviewService
{
  constructor(private readonly overviewRepository: OverviewRepository) {
    super(overviewRepository);
  }

  async getStaticData(): Promise<OverviewContentProps> {
    return staticData;
  }

  async getLatestEvents(): Promise<any> {
    const res = await fetch(
      "https://krmangalam.edu.in/wp-json/wp/v2/events-and-news?per_page=20&orderby=date&order=desc&_fields=id,title,slug,excerpt,featured_media",
      {
        next: {
          revalidate: 3600,
        },
      },
    );
    if (!res.ok) throw new Error("Failed to fetch overview latest events");
    return res.json();
  }
}

// ── 4. Provider (Singleton) ──────────────────────────────

export const getOverviewService = createProvider<IOverviewService>(
  () => new OverviewService(new OverviewRepository()),
);

// ── Safe empty fallback ──────────────────────────────────

const EMPTY_OVERVIEW: LifeAtKRMUOverviewDomain = {
  id: 0,
  documentId: "",
  heading: "",
  subheading: "",
  overview_video: {
    id: 0,
    name: "",
    alternativeText: null,
    caption: null,
    width: null,
    height: null,
    formats: null,
    hash: "",
    ext: "",
    mime: "",
    size: 0,
    url: "",
    previewUrl: null,
    provider: "",
    provider_metadata: null,
    createdAt: "",
    updatedAt: "",
    publishedAt: "",
  },
  hear_it_testimonials: [],
};
