import {
  InternationalCollaborationData,
  InternationalCollaborationDomain,
  InternationalCollaborationResponse,
} from "../../../types/international-collaboration.types";

export class InternationalCollaborationMapper {
  toDomain(
    raw: InternationalCollaborationResponse,
  ): InternationalCollaborationDomain {
    return this.mapToDomain(raw.data);
  }

  private mapToDomain(
    data: InternationalCollaborationData,
  ): InternationalCollaborationDomain {
    return {
      id: data.id,
      documentId: data.documentId,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
      publishedAt: data.publishedAt,

      title: [...data.title],

      desc: data.desc,

      int_collab_btn: {
        ...data.int_collab_btn,
      },

      int_collab_hero_grid: data.int_collab_hero_grid.map((item) => ({
        ...item,
      })),

      intcollab_card: data.intcollab_card.map((card) => ({
        ...card,

        int_collab_card_content: [...card.int_collab_card_content],

        int_collab_img: {
          ...card.int_collab_img,
        },
      })),

      int_collab_full_width_card: data.int_collab_full_width_card.map(
        (card) => ({
          ...card,

          int_collab_full_width_content: [
            ...card.int_collab_full_width_content,
          ],

          int_collab_full_width_card_img: {
            ...card.int_collab_full_width_card_img,
          },
        }),
      ),
    };
  }
}
