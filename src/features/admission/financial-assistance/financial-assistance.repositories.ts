import { getFinancialPageData } from "@/lib/api/financialAssistance";
import { IFinancialAssistanceRepository } from "./financial-assistance.interfaces";
import { FinancialAssistanceDomain } from "./financial-assistance.types";
import { FinancialAssistanceMapper } from "./financial-assistance.mapper";
import { MOCK_FINANCIAL_ASSISTANCE_DATA } from "./financial-assistance.constants";

export class FinancialAssistanceRepository implements IFinancialAssistanceRepository {
  private dataPromise: Promise<FinancialAssistanceDomain | undefined> | null = null;

  async getFinancialAssistanceData(): Promise<FinancialAssistanceDomain | undefined> {
    if (!this.dataPromise) {
      this.dataPromise = (async () => {
        try {
          const rawData = await getFinancialPageData();
          return FinancialAssistanceMapper.toDomain(rawData);
        } catch (error) {
          console.warn("Failed to fetch Live Financial Assistance data, falling back to static state:", error);
          this.dataPromise = null;
          return MOCK_FINANCIAL_ASSISTANCE_DATA;
        }
      })();
    }
    return this.dataPromise;
  }
}

export class MockFinancialAssistanceRepository implements IFinancialAssistanceRepository {
  async getFinancialAssistanceData(): Promise<FinancialAssistanceDomain | undefined> {
    return MOCK_FINANCIAL_ASSISTANCE_DATA;
  }
}
