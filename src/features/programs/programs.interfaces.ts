import { SchoolProgrammeDomain, PHDProgrammeDomain } from "./programs.types";

export interface IProgramsRepository {
  getSchoolProgramme(slug: string): Promise<SchoolProgrammeDomain | undefined>;
  getPHDProgramme(slug: string): Promise<PHDProgrammeDomain | undefined>;
  getSchoolProgrammeSEO(slug: string): Promise<any>;
  getSchoolProgrammeInfoByDegree(deg: string, schoolCatName: string): Promise<any[]>;
  getSchoolProgrammePhdDataDegree(deg: string, schoolCatName: string): Promise<any[]>;
}

export interface IProgramsService {
  getSchoolProgramme(slug: string): Promise<SchoolProgrammeDomain | undefined>;
  getPHDProgramme(slug: string): Promise<PHDProgrammeDomain | undefined>;
  getSchoolProgrammeSEO(slug: string): Promise<any>;
  getSchoolProgrammeInfoByDegree(deg: string, schoolCatName: string): Promise<any[]>;
  getSchoolProgrammePhdDataDegree(deg: string, schoolCatName: string): Promise<any[]>;
}
