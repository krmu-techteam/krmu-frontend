import { FinancialAssistanceDomain } from "./financial-assistance.types";

export class FinancialAssistanceMapper {
  static toDomain(raw: any): FinancialAssistanceDomain {
    return raw;
  }
}
