import { FinancialAssistanceDomain, FinancialAssistancePageResponse } from "./financial-assistance.types";

export class FinancialAssistanceMapper {
  static toDomain(response: FinancialAssistancePageResponse): FinancialAssistanceDomain {
    return response.data;
  }
}
