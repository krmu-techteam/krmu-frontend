import { BaseRepository, BaseService, createProvider } from "@/lib/core";
import { NSSConnectResponse } from "@/lib/api/community-connect";
import { COMMUNITY_CONNECT_QUERIES } from "./community-connect.queries";
import { CommunityConnectMapper } from "./community-connect.mapper";
import { CommunityConnectDomain } from "./community-connect.types";

// ── 1. Repository ────────────────────────────────────────

class CommunityConnectRepository extends BaseRepository<
  NSSConnectResponse,
  CommunityConnectDomain
> {
  protected readonly query = COMMUNITY_CONNECT_QUERIES.getNssConnect();

  protected mapToDomain(raw: NSSConnectResponse): CommunityConnectDomain {
    return CommunityConnectMapper.toDomain(raw);
  }

  protected emptyDomain(): CommunityConnectDomain {
    return CommunityConnectMapper.toDomain(null);
  }
}

// ── 2. Service Interface ─────────────────────────────────

export interface ICommunityConnectService {
  getData(): Promise<CommunityConnectDomain>;
}

// ── 3. Service ───────────────────────────────────────────

class CommunityConnectService
  extends BaseService<CommunityConnectDomain>
  implements ICommunityConnectService
{
  constructor(private readonly communityRepository: CommunityConnectRepository) {
    super(communityRepository);
  }
}

// ── 4. Provider (Singleton) ──────────────────────────────

export const getCommunityConnectService = createProvider<ICommunityConnectService>(
  () => new CommunityConnectService(new CommunityConnectRepository()),
);
