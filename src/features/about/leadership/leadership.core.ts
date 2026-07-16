import { BaseRepository } from "@/lib/core/base.repository";
import { BaseService } from "@/lib/core/base.service";
import { createProvider } from "@/lib/core/create-provider";
import { LeadershipApiResponse, LeadershipDomain } from "./leadership.type";
import { LEADERSHIP_QUERY } from "./leadership.queries";
import { LeadershipMapper } from "./leadership.mapper";

export class LeadershipRepository extends BaseRepository<
  LeadershipApiResponse,
  LeadershipDomain
> {
  protected readonly query = LEADERSHIP_QUERY;

  protected mapToDomain(raw: LeadershipApiResponse): LeadershipDomain {
    return LeadershipMapper.toDomain(raw);
  }

  protected emptyDomain(): LeadershipDomain {
    return EMPTY_LEADERSHIP;
  }
}

export interface ILeadershipService {
  getData(): Promise<LeadershipDomain>;
}

export class LeadershipService
  extends BaseService<LeadershipDomain>
  implements ILeadershipService
{
  constructor(private readonly leadershipRepository: LeadershipRepository) {
    super(leadershipRepository);
  }
}

export const getLeadershipService = createProvider<ILeadershipService>(
  () => new LeadershipService(new LeadershipRepository()),
);

const EMPTY_LEADERSHIP: LeadershipDomain = {
  id: 0,
  documentId: "",
  createdAt: "",
  updatedAt: "",
  publishedAt: "",
  leadership: [],
};
