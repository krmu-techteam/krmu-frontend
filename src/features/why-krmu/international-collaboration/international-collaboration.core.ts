import { BaseRepository } from "@/lib/core/base.repository";
import { BaseService } from "@/lib/core/base.service";
import { createProvider } from "@/lib/core/create-provider";
import {
  InternationalCollaborationDomain,
  InternationalCollaborationResponse,
} from "../../../types/international-collaboration.types";
import { INTERNATIONAL_COLLABORATION_QUERY } from "./international-collaboration.queries";
import { InternationalCollaborationMapper } from "./international-collaboration.mapper";
import { EMPTY_INTERNATIONAL_COLLABORATION } from "./international-collabaration.constants";

export class InternationalCollabRepository extends BaseRepository<
  InternationalCollaborationResponse,
  InternationalCollaborationDomain
> {
  protected readonly query: string = INTERNATIONAL_COLLABORATION_QUERY;
  protected readonly mapper = new InternationalCollaborationMapper();

  protected mapToDomain(
    raw: InternationalCollaborationResponse,
  ): InternationalCollaborationDomain {
    return this.mapper.toDomain(raw);
  }

  protected emptyDomain(): InternationalCollaborationDomain {
    return EMPTY_INTERNATIONAL_COLLABORATION;
  }
}

export interface IInternationalCollaborationService {
  getData(): Promise<InternationalCollaborationDomain>;
}

export class InternationalCollaborationService
  extends BaseService<InternationalCollaborationDomain>
  implements InternationalCollaborationService
{
  constructor(private readonly repo: InternationalCollabRepository) {
    super(repo);
  }
}

export const getInternationalCollaborationService = createProvider(
  () =>
    new InternationalCollaborationService(new InternationalCollabRepository()),
);
