import { FinancialAssistanceRepository } from "./financial-assistance.repositories";
import { FinancialAssistanceService } from "./financial-assistance.services";
import { IFinancialAssistanceService } from "./financial-assistance.interfaces";

let serviceInstance: IFinancialAssistanceService | null = null;

export function getFinancialAssistanceService(): IFinancialAssistanceService {
  if (!serviceInstance) {
    const repository = new FinancialAssistanceRepository();
    serviceInstance = new FinancialAssistanceService(repository);
  }
  return serviceInstance;
}
