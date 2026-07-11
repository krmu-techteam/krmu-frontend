import { ParagraphBlock } from "./about";
import { StrapiMedia } from "./common";
import { Button } from "./home";

export interface INTCOLLABRESPONSE {
  data: IntCollabData;
  meta: Record<string, unknown>;
}

export interface IntCollabData {
  id: number;
  documentId: string;
  title: ParagraphBlock[];
  desc: string;
  int_collab_btn: Button;
  int_collab_hero_grid: INTCOLLABHEROGRID[];
  intcollab_card: INTCOLLABCARD[];
  int_collab_full_width_card: INTCOLLABFULLWIDTHCARD[];
}

export interface INTCOLLABFULLWIDTHCARD {
  id: number;
  int_collab_full_width_content: ParagraphBlock[];
  int_collab_full_width_card_img: StrapiMedia;
}

export interface INTCOLLABCARD {
  id: number;
  int_collab_card_content: ParagraphBlock[];
  int_collab_img: StrapiMedia;
}

export interface INTCOLLABHEROGRID {
  id: number;
  content: string;
}
