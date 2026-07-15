import { BaseRepository } from "@/lib/core/base.repository";
import { BaseService } from "@/lib/core/base.service";
import { createProvider } from "@/lib/core/create-provider";
import { FINANCIAL_ASSISTANCE_QUERY } from "./financial-assistance.queries";
import { FinancialAssistanceMapper } from "./financial-assistance.mapper";
import { FinancialAssistanceDomain, FinancialAssistancePageResponse } from "./financial-assistance.types";
import { MOCK_FINANCIAL_ASSISTANCE_DATA } from "./financial-assistance.constants";

// ── 1. Repository ────────────────────────────────────────

class FinancialAssistanceRepository extends BaseRepository<
  FinancialAssistancePageResponse,
  FinancialAssistanceDomain
> {
  protected readonly query = FINANCIAL_ASSISTANCE_QUERY;

  protected mapToDomain(raw: FinancialAssistancePageResponse): FinancialAssistanceDomain {
    return FinancialAssistanceMapper.toDomain(raw);
  }

  protected emptyDomain(): FinancialAssistanceDomain {
    return MOCK_FINANCIAL_ASSISTANCE_DATA;
  }
}

// ── 2. Service Interface ─────────────────────────────────

export interface IFinancialAssistanceService {
  getData(): Promise<FinancialAssistanceDomain>;
  getFinancialAssistanceData(): Promise<FinancialAssistanceDomain>;
}

// ── 3. Service ───────────────────────────────────────────

class FinancialAssistanceService
  extends BaseService<FinancialAssistanceDomain>
  implements IFinancialAssistanceService
{
  constructor(private readonly financialAssistanceRepository: FinancialAssistanceRepository) {
    super(financialAssistanceRepository);
  }

  // Alias for backward compatibility / page.tsx usage
  async getFinancialAssistanceData(): Promise<FinancialAssistanceDomain> {
    return this.getData();
  }
}

// ── 4. Provider (Singleton) ──────────────────────────────

export const getFinancialAssistanceService = createProvider<IFinancialAssistanceService>(
  () => new FinancialAssistanceService(new FinancialAssistanceRepository()),
);
