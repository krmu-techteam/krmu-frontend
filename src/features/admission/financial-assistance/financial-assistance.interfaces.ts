import { FinancialAssistanceDomain } from "./financial-assistance.types";

export interface IFinancialAssistanceRepository {
  getFinancialAssistanceData(): Promise<FinancialAssistanceDomain | undefined>;
}

export interface IFinancialAssistanceService {
  getFinancialAssistanceData(): Promise<FinancialAssistanceDomain | undefined>;
}
