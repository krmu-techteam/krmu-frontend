import { BaseRepository, BaseService, createProvider } from "@/lib/core";
import { CampusLifeDomain } from "./campus-life.types";
import { CampusLifeMapper } from "./campus-life.mapper";
import { CAMPUS_LIFE_QUERIES } from "./campus-life.queries";

// ── 1. Repository ────────────────────────────────────────

class CampusLifeRepository extends BaseRepository<
  any,
  CampusLifeDomain
> {
  protected readonly query = CAMPUS_LIFE_QUERIES.getCampusLife();

  async getData(): Promise<CampusLifeDomain> {
    return this.emptyDomain();
  }

  protected mapToDomain(raw: any): CampusLifeDomain {
    return CampusLifeMapper.toDomain(raw);
  }

  protected emptyDomain(): CampusLifeDomain {
    return CampusLifeMapper.toDomain(null);
  }
}

// ── 2. Service Interface ─────────────────────────────────

export interface ICampusLifeService {
  getData(): Promise<CampusLifeDomain>;
}

// ── 3. Service ───────────────────────────────────────────

class CampusLifeService
  extends BaseService<CampusLifeDomain>
  implements ICampusLifeService
{
  constructor(private readonly campusRepository: CampusLifeRepository) {
    super(campusRepository);
  }
}

// ── 4. Provider (Singleton) ──────────────────────────────

export const getCampusLifeService = createProvider<ICampusLifeService>(
  () => new CampusLifeService(new CampusLifeRepository()),
);
