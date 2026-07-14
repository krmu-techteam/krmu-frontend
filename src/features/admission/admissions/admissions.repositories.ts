import { getAdmission2PageData } from "@/lib/api/Admission/admission2";
import { IAdmissionsRepository } from "./admissions.interfaces";
import { AdmissionsDomain } from "./admissions.types";
import { AdmissionsMapper } from "./admissions.mapper";

export class AdmissionsRepository implements IAdmissionsRepository {
  private pageDataPromise: Promise<AdmissionsDomain | undefined> | null = null;

  async getAdmissionPageData(): Promise<AdmissionsDomain | undefined> {
    if (!this.pageDataPromise) {
      this.pageDataPromise = (async () => {
        try {
          const rawData = await getAdmission2PageData();
          return AdmissionsMapper.toDomain(rawData);
        } catch (error) {
          console.error("Failed to fetch Admission page data:", error);
          this.pageDataPromise = null;
          return undefined;
        }
      })();
    }
    return this.pageDataPromise;
  }
}
