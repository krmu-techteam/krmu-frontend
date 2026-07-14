import { getSchoolProgrammeData, getSchoolProgrammeInfoByDegree, getSchoolProgrammePhdDataDegree } from "@/lib/api/school-programmes";
import { getPHDProgramme } from "@/lib/api/phd-programmes";
import { getSchoolProgrammeSEO } from "@/lib/api/common";
import { IProgramsRepository } from "./programs.interfaces";
import { SchoolProgrammeDomain, PHDProgrammeDomain } from "./programs.types";
import { ProgramsMapper } from "./programs.mapper";

export class ProgramsRepository implements IProgramsRepository {
  private schoolProgramDataPromise: Map<string, Promise<SchoolProgrammeDomain | undefined>> = new Map();
  private phdProgramDataPromise: Map<string, Promise<PHDProgrammeDomain | undefined>> = new Map();

  async getSchoolProgramme(slug: string): Promise<SchoolProgrammeDomain | undefined> {
    if (!this.schoolProgramDataPromise.has(slug)) {
      this.schoolProgramDataPromise.set(
        slug,
        (async () => {
          try {
            const rawData = await getSchoolProgrammeData(slug);
            const single = rawData.find((p) => p.programmeslug === slug);
            return single ? ProgramsMapper.toSchoolProgrammeDomain(single) : undefined;
          } catch (error) {
            console.error(`Failed to fetch school programme for slug ${slug}:`, error);
            this.schoolProgramDataPromise.delete(slug);
            return undefined;
          }
        })()
      );
    }
    return this.schoolProgramDataPromise.get(slug);
  }

  async getPHDProgramme(slug: string): Promise<PHDProgrammeDomain | undefined> {
    if (!this.phdProgramDataPromise.has(slug)) {
      this.phdProgramDataPromise.set(
        slug,
        (async () => {
          try {
            const rawData = await getPHDProgramme(slug);
            const single = rawData?.find((p) => p?.phdslug === slug);
            return single ? ProgramsMapper.toPHDProgrammeDomain(single) : undefined;
          } catch (error) {
            console.error(`Failed to fetch PHD programme for slug ${slug}:`, error);
            this.phdProgramDataPromise.delete(slug);
            return undefined;
          }
        })()
      );
    }
    return this.phdProgramDataPromise.get(slug);
  }

  async getSchoolProgrammeSEO(slug: string): Promise<any> {
    try {
      return await getSchoolProgrammeSEO(slug);
    } catch (error) {
      console.error(`Failed to fetch SEO for slug ${slug}:`, error);
      return [];
    }
  }

  async getSchoolProgrammeInfoByDegree(deg: string, schoolCatName: string): Promise<any[]> {
    try {
      return await getSchoolProgrammeInfoByDegree(deg, schoolCatName);
    } catch (error) {
      console.error("Failed to fetch programs by degree", error);
      return [];
    }
  }

  async getSchoolProgrammePhdDataDegree(deg: string, schoolCatName: string): Promise<any[]> {
    try {
      return await getSchoolProgrammePhdDataDegree(deg, schoolCatName);
    } catch (error) {
      console.error("Failed to fetch PhD programs by degree", error);
      return [];
    }
  }
}
