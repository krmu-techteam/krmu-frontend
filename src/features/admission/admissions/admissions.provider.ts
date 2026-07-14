import { AdmissionsRepository } from "./admissions.repositories";
import { AdmissionsService } from "./admissions.services";
import { IAdmissionsService } from "./admissions.interfaces";

let serviceInstance: IAdmissionsService | null = null;

export function getAdmissionsService(): IAdmissionsService {
  if (!serviceInstance) {
    const repository = new AdmissionsRepository();
    serviceInstance = new AdmissionsService(repository);
  }
  return serviceInstance;
}
