import { LeadershipApiResponse, LeadershipDomain } from "./leadership.type";

export class LeadershipMapper {
  static toDomain(raw: LeadershipApiResponse): LeadershipDomain {
    return {
      id: raw.data.id,
      documentId: raw.data.documentId,
      createdAt: raw.data.createdAt,
      updatedAt: raw.data.updatedAt,
      publishedAt: raw.data.publishedAt,
      leadership: raw.data.leadership.map((item) => {
        return {
          id: item.id,
          name: item.name,
          desg: item.desg,
          content: item.content,
          leadership_img: {
            id: item.leadership_img.id,
            documentId: item.leadership_img.documentId,
            url: item.leadership_img.url,
          },
        };
      }),
    };
  }
}
