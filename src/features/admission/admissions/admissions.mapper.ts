import { AdmissionsDomain } from "./admissions.types";

export class AdmissionsMapper {
  static toDomain(raw: any): AdmissionsDomain {
    return raw;
  }
}
