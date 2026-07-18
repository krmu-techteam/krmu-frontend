import { BaseRepository } from "@/lib/core/base.repository";
import { BaseService } from "@/lib/core/base.service";
import { createProvider } from "@/lib/core/create-provider";
import {
  CodeOfConductData,
  CodeOfConductDomain,
  CodeOfConductResponse,
} from "./coc.types";
import { CODE_OF_CONDUCT_QUERY } from "./coc.queries";
import { CodeOfConductMapper } from "./coc.mapper";
import { EMPTY_CODE_OF_CONDUCT } from "./coc.constants";

export class CodeOfConductRepository extends BaseRepository<
  CodeOfConductResponse,
  CodeOfConductDomain
> {
  protected readonly query: string = CODE_OF_CONDUCT_QUERY;
  private readonly mapper = new CodeOfConductMapper();

  protected mapToDomain(raw: CodeOfConductResponse): CodeOfConductDomain {
    return this.mapper.toDomain(raw);
  }

  protected emptyDomain(): CodeOfConductData {
    return EMPTY_CODE_OF_CONDUCT;
  }
}

export interface ICodeOfConductService {
  getData(): Promise<CodeOfConductDomain>;
}

export class CodeOfConductService
  extends BaseService<CodeOfConductDomain>
  implements ICodeOfConductService
{
  constructor(private readonly repo: CodeOfConductRepository) {
    super(repo);
  }
}

export const getCodeOfConductService = createProvider<ICodeOfConductService>(
  () => new CodeOfConductService(new CodeOfConductRepository()),
);
