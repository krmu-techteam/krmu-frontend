import { IProgramsRepository, IProgramsService } from "./programs.interfaces";
import { SchoolProgrammeDomain, PHDProgrammeDomain } from "./programs.types";

export class ProgramsService implements IProgramsService {
  constructor(private readonly repository: IProgramsRepository) {}

  async getSchoolProgramme(slug: string): Promise<SchoolProgrammeDomain | undefined> {
    return await this.repository.getSchoolProgramme(slug);
  }

  async getPHDProgramme(slug: string): Promise<PHDProgrammeDomain | undefined> {
    return await this.repository.getPHDProgramme(slug);
  }

  async getSchoolProgrammeSEO(slug: string): Promise<any> {
    return await this.repository.getSchoolProgrammeSEO(slug);
  }

  async getSchoolProgrammeInfoByDegree(deg: string, schoolCatName: string): Promise<any[]> {
    return await this.repository.getSchoolProgrammeInfoByDegree(deg, schoolCatName);
  }

  async getSchoolProgrammePhdDataDegree(deg: string, schoolCatName: string): Promise<any[]> {
    return await this.repository.getSchoolProgrammePhdDataDegree(deg, schoolCatName);
  }
}
