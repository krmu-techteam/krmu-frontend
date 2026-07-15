import { BaseRepository } from "@/lib/core/base.repository";
import { BaseService } from "@/lib/core/base.service";
import { createProvider } from "@/lib/core/create-provider";
import { ReflectionDomain, ReflectionsResponse } from "./reflection.types";
import { REFLECTION_QUERY } from "./reflection.queries";
import { ReflectionMapper } from "./reflection.mapper";

// ── 1. Repository ────────────────────────────────────────

class ReflectionRepository extends BaseRepository<
  ReflectionsResponse,
  ReflectionDomain
> {
  protected readonly query = REFLECTION_QUERY;

  protected mapToDomain(raw: ReflectionsResponse): ReflectionDomain {
    return ReflectionMapper.toDomain(raw);
  }

  protected emptyDomain(): ReflectionDomain {
    return EMPTY_REFLECTION;
  }
}

// ── 2. Service Interface ─────────────────────────────────

export interface IReflectionService {
  getData(): Promise<ReflectionDomain>;
}

// ── 3. Service ───────────────────────────────────────────

class ReflectionService
  extends BaseService<ReflectionDomain>
  implements IReflectionService
{
  constructor(private readonly reflectionRepository: ReflectionRepository) {
    super(reflectionRepository);
  }
}

// ── 4. Provider (Singleton) ──────────────────────────────

export const getReflectionService = createProvider<IReflectionService>(
  () => new ReflectionService(new ReflectionRepository()),
);

// ── Safe empty fallback ──────────────────────────────────

const EMPTY_REFLECTION: ReflectionDomain = {
  id: 0,
  documentId: "",
  title: "",
  reflectioncontent: [],
  bgimage: {
    id: 0,
    documentId: "",
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
    previewUrl: "",
    provider: "",
    provider_metadata: null,
    createdAt: "",
    updatedAt: "",
    publishedAt: "",
  },
  magazinecard: [],
  createdAt: "",
  updatedAt: "",
  publishedAt: "",
};
