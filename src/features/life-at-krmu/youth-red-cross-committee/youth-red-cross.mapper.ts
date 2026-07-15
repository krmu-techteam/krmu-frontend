import {
  YouthRedCrossCommitteeDomain,
  YouthRedCrossCommitteeResponse,
} from "./youth-red-cross-committee.types";

export class YouthRedCrossMapper {
  static toDomain(
    raw: YouthRedCrossCommitteeResponse,
  ): YouthRedCrossCommitteeDomain {
    return raw.data;
  }
}
