import { MembershipDomain, MembershipResponse } from "./membership.types";

export class MembershipMapper {
  static toDomain(raw: MembershipResponse): MembershipDomain {
    return {
      id: raw.data.id,
      documentId: raw.data.documentId,
      title: raw.data.title,
      description: raw.data.description,
      rankingTitle: raw.data.rankingtitle,

      memberships: raw.data.memberships.map((item) => ({
        id: item.id,
        title: item.cardtitle,
        url: item.cardurl,
        image: item.cardimg.url,
      })),

      rankings: raw.data.rankings.map((item) => ({
        id: item.id,
        title: item.title,
        image: item.cardimg.url,
      })),
    };
  }
}
