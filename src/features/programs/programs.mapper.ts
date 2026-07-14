import { SchoolProgrammeDomain, PHDProgrammeDomain } from "./programs.types";

export class ProgramsMapper {
  static toSchoolProgrammeDomain(raw: any): SchoolProgrammeDomain {
    return raw;
  }

  static toPHDProgrammeDomain(raw: any): PHDProgrammeDomain {
    return raw;
  }
}
