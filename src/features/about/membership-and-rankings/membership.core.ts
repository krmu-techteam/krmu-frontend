import { BaseRepository } from "@/lib/core/base.repository";
import { MembershipDomain, MembershipResponse } from "./membership.types";
import { MEMBERSHIP_AND_RANKINGS_QUERY } from "./membership.queries";
import { MembershipMapper } from "./membership.mapper";
import { BaseService } from "@/lib/core/base.service";
import { createProvider } from "@/lib/core/create-provider";

export class MembershipRepository extends BaseRepository<
  MembershipResponse,
  MembershipDomain
> {
  protected readonly query = MEMBERSHIP_AND_RANKINGS_QUERY;

  protected mapToDomain(raw: MembershipResponse): MembershipDomain {
    return MembershipMapper.toDomain(raw);
  }

  protected emptyDomain(): MembershipDomain {
    return EMPTY_MEMBERSHIP_AND_RANKINGS;
  }
}

export interface IMembershipService {
  getData(): Promise<MembershipDomain>;
}

export class MembershipService
  extends BaseService<MembershipDomain>
  implements IMembershipService
{
  constructor(private readonly repo: MembershipRepository) {
    super(repo);
  }
}

export const getMembershipService = createProvider(
  () => new MembershipService(new MembershipRepository()),
);

const EMPTY_MEMBERSHIP_AND_RANKINGS: MembershipDomain = {
  id: 0,
  documentId: "",
  title: "",
  description: "",
  rankingTitle: "",
  memberships: [],
  rankings: [],
};
