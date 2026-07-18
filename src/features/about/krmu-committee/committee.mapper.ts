import { KrmuCommitteeDomain, KrmuCommitteeResponse } from "./committee.types";

export class CommitteeMapper {
  static toDomain(raw: KrmuCommitteeResponse): KrmuCommitteeDomain {
    return {
      heroSection: raw.data.heroSection,
      antiDiscriminationSection: raw.data.antiDiscriminationSection,
      genderSensitisationSection: raw.data.genderSensitisationSection,
      internalComplaintsSection: raw.data.internalComplaintsSection,
      antiRaggingSection: raw.data.antiRaggingSection,
      grievanceRedressalSection: raw.data.grievanceRedressalSection,
      studentDisciplineSection: raw.data.studentDisciplineSection,
    };
  }
}
