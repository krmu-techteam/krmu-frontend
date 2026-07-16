import { createProvider } from "@/lib/core/create-provider";
import { BaseRepository } from "@/lib/core/base.repository";
import { BaseService } from "@/lib/core/base.service";
import { ACADEMIC_LEADERSHIP_QUERY } from "./academic-leadership.queries";
import { AcademicLeadershipMapper } from "./academic-leadership.mapper";
import {
  LeadershipDomain,
  LeadershipResponse,
} from "./academic-leadership.types";

export class AcademicLeadershipRepository extends BaseRepository<
  LeadershipResponse,
  LeadershipDomain
> {
  protected readonly query = ACADEMIC_LEADERSHIP_QUERY;

  protected mapToDomain(raw: LeadershipResponse): LeadershipDomain {
    return AcademicLeadershipMapper.toDomain(raw);
  }

  protected emptyDomain(): LeadershipDomain {
    return EMPTY_ACADEMIC_LEADERSHIP;
  }
}

export interface IAcademicLeadershipService {
  getData(): Promise<LeadershipDomain>;
}

export class AcademicLeadershipService
  extends BaseService<LeadershipDomain>
  implements IAcademicLeadershipService
{
  constructor(private readonly repo: AcademicLeadershipRepository) {
    super(repo);
  }
}

export const getAcademicLeadershipService = createProvider(
  () => new AcademicLeadershipService(new AcademicLeadershipRepository()),
);

const EMPTY_ACADEMIC_LEADERSHIP: LeadershipDomain = {
  id: 0,
  documentId: "",
  academicLeadership: [],
};
