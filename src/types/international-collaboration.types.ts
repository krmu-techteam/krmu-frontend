import { StrapiMedia } from "@/lib/types/common";
import { BlocksContent } from "@strapi/blocks-react-renderer";

export interface InternationalCollaborationResponse {
  data: InternationalCollaborationData;
  meta: Record<string, unknown>;
}

export type InternationalCollaborationDomain = InternationalCollaborationData;

export interface InternationalCollaborationData {
  id: number;
  documentId: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  title: BlocksContent;
  desc: string;
  int_collab_btn: Button;
  int_collab_hero_grid: HeroGridItem[];
  intcollab_card: CollaborationCard[];
  int_collab_full_width_card: FullWidthCard[];
}

export interface Button {
  id: number;
  buttontext: string;
  buttonlink: string;
  buttonclass: string | null;
  popupFormId: string | null;
  containerPopupFormId: string | null;
}

export interface HeroGridItem {
  id: number;
  content: string | null;
}

export interface CollaborationCard {
  id: number;
  int_collab_card_content: BlocksContent;
  int_collab_img: StrapiMedia;
}

export interface FullWidthCard {
  id: number;
  int_collab_full_width_content: BlocksContent;
  int_collab_full_width_card_img: StrapiMedia;
}
