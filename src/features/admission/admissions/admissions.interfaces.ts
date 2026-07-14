import { AdmissionsDomain } from "./admissions.types";

export interface IAdmissionsRepository {
  getAdmissionPageData(): Promise<AdmissionsDomain | undefined>;
}

export interface IAdmissionsService {
  getAdmissionPageData(): Promise<AdmissionsDomain | undefined>;
}
