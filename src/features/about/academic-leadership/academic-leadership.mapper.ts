import {
  LeadershipDomain,
  LeadershipResponse,
} from "./academic-leadership.types";

export class AcademicLeadershipMapper {
  static toDomain(raw: LeadershipResponse): LeadershipDomain {
    return {
      id: raw.data.id,
      documentId: raw.data.documentId,
      academicLeadership: raw.data.academic_leadership.map((item) => ({
        id: item.id,
        name: item.name,
        designation: item.desg,
        content: item.content,
        image: item.academic_leadership_img.url,
      })),
    };
  }
}
