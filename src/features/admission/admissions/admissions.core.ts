import { BaseRepository } from "@/lib/core/base.repository";
import { BaseService } from "@/lib/core/base.service";
import { createProvider } from "@/lib/core/create-provider";
import { ADMISSIONS_QUERY } from "./admissions.queries";
import { AdmissionsMapper } from "./admissions.mapper";
import { AdmissionsDomain, AdmissionsPageResponse } from "./admissions.types";

// ── 1. Repository ────────────────────────────────────────

class AdmissionsRepository extends BaseRepository<
  AdmissionsPageResponse,
  AdmissionsDomain
> {
  protected readonly query = ADMISSIONS_QUERY;

  protected mapToDomain(raw: AdmissionsPageResponse): AdmissionsDomain {
    return AdmissionsMapper.toDomain(raw);
  }

  protected emptyDomain(): AdmissionsDomain {
    return EMPTY_ADMISSIONS;
  }
}

// ── 2. Service Interface ─────────────────────────────────

export interface IAdmissionsService {
  getData(): Promise<AdmissionsDomain>;
  getAdmissionPageData(): Promise<AdmissionsDomain>;
}

// ── 3. Service ───────────────────────────────────────────

class AdmissionsService
  extends BaseService<AdmissionsDomain>
  implements IAdmissionsService
{
  constructor(private readonly admissionsRepository: AdmissionsRepository) {
    super(admissionsRepository);
  }

  // Alias for backward compatibility / page.tsx usage
  async getAdmissionPageData(): Promise<AdmissionsDomain> {
    return this.getData();
  }
}

// ── 4. Provider (Singleton) ──────────────────────────────

export const getAdmissionsService = createProvider<IAdmissionsService>(
  () => new AdmissionsService(new AdmissionsRepository()),
);

// ── Safe empty fallback ──────────────────────────────────

const EMPTY_ADMISSIONS: AdmissionsDomain = {
  id: 0,
  documentId: "",
  createdAt: "",
  updatedAt: "",
  publishedAt: "",
  adm_toc: {
    id: 0,
    heading: "",
    highlightheading: "",
    description: "",
    tocfaq: [],
    tocbtn: {
      id: 0,
      btn_link: "",
      btn_text: "",
    },
  },
  adm2_alumni: [],
};
