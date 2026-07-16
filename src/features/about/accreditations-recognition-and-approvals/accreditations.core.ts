import { BaseRepository } from "@/lib/core/base.repository";
import { BaseService } from "@/lib/core/base.service";
import { createProvider } from "@/lib/core/create-provider";
import {
  AccreditationDomain,
  AccreditationResponse,
} from "./accreditations.types";
import { ACCREDITATION_QUERY } from "./accreditations.queries";
import { AccreditationsMapper } from "./accreditations.mapper";

export class AccreditationsRepository extends BaseRepository<
  AccreditationResponse,
  AccreditationDomain
> {
  protected readonly query = ACCREDITATION_QUERY;

  protected mapToDomain(raw: AccreditationResponse): AccreditationDomain {
    return AccreditationsMapper.toDomain(raw);
  }

  protected emptyDomain(): AccreditationDomain {
    return EMPTY_ACCREDITATION;
  }
}

export interface IAccreditationsService {
  getData(): Promise<AccreditationDomain>;
}

export class AccreditationsService
  extends BaseService<AccreditationDomain>
  implements IAccreditationsService
{
  constructor(private readonly repo: AccreditationsRepository) {
    super(repo);
  }
}

export const getAccreditationsService = createProvider(
  () => new AccreditationsService(new AccreditationsRepository()),
);

export const EMPTY_ACCREDITATION: AccreditationDomain = {
  id: 0,
  documentId: "",
  title: "",
  description: "",
  accrediationrecogapprovals: [],
};
