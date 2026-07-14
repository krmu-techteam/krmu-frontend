import { IAdmissionsRepository, IAdmissionsService } from "./admissions.interfaces";
import { AdmissionsDomain } from "./admissions.types";

export class AdmissionsService implements IAdmissionsService {
  constructor(private readonly repository: IAdmissionsRepository) {}

  async getAdmissionPageData(): Promise<AdmissionsDomain | undefined> {
    return await this.repository.getAdmissionPageData();
  }
}
