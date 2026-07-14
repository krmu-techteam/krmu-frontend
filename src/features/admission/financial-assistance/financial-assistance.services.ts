import { IFinancialAssistanceRepository, IFinancialAssistanceService } from "./financial-assistance.interfaces";
import { FinancialAssistanceDomain } from "./financial-assistance.types";

export class FinancialAssistanceService implements IFinancialAssistanceService {
  constructor(private readonly repository: IFinancialAssistanceRepository) {}

  async getFinancialAssistanceData(): Promise<FinancialAssistanceDomain | undefined> {
    return await this.repository.getFinancialAssistanceData();
  }
}