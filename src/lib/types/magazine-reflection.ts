import { ListBlock, ParagraphBlock } from "./about";
import { StrapiMedia } from "./common";

export interface MagazineCard {
  id: number;
  magazineimg: StrapiMedia;
  magazinepdf: StrapiMedia;
}

export interface MagazineReflectionResponse {
  data: {
    id: number;
    documentId: string;
    title: string;
    reflectioncontent: ParagraphBlock[] | ListBlock[];
    createdAt: string;
    updatedAt: string;
    bgimage: StrapiMedia;
    magazinecard: MagazineCard[];
  };
}
