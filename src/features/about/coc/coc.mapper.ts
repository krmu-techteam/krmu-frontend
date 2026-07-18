import { IMapper } from "@/lib/core/mapper.interface";
import {
  CodeOfConductData,
  CodeOfConductDomain,
  CodeOfConductResponse,
} from "./coc.types";

export class CodeOfConductMapper implements IMapper<CodeOfConductResponse, CodeOfConductDomain> {
  toDomain(raw: CodeOfConductResponse): CodeOfConductDomain {
    return this.mapToDomain(raw.data);
  }

  private mapToDomain(data: CodeOfConductData): CodeOfConductDomain {
    return {
      id: data.id,
      documentId: data.documentId,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
      publishedAt: data.publishedAt,
      breadcrumb: {
        ...data.breadcrumb,
      },
      cocitems: data.cocitems.map((item) => ({
        ...item,
      })),
    };
  }
}
