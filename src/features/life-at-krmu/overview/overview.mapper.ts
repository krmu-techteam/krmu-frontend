import { LifeAtKRMUOverviewDomain, LifeAtKRMUOverviewResponse } from "./overview.types";

export class OverviewMapper {
  static toDomain(response: LifeAtKRMUOverviewResponse): LifeAtKRMUOverviewDomain {
    return response.data;
  }
}
