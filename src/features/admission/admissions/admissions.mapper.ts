import { AdmissionsDomain, AdmissionsPageResponse } from "./admissions.types";

export class AdmissionsMapper {
  static toDomain(response: AdmissionsPageResponse): AdmissionsDomain {
    return response.data;
  }
}
