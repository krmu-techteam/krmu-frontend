import { ParagraphBlock } from "./about";
import { StrapiMedia } from "./common";

// Root response
export interface IndustryConnectResponse {
  data: IndustryConnectData;
  meta: Meta;
}

export interface IndustryConnectData {
  id: number;
  documentId: string;
  title: string;
  description: string;
  partnerships_title: string;
  bgimage: StrapiMedia;
  partnership_logos: StrapiMedia[];
  cuisines: CUISINE;
  mural_event: MURALEVENT;
  networking_opportunities: NETWORKINGOPPORTUNITIES;
  shaping_career: SHAPINGCAREER;
  seminar: SEMINAR;
  idea_forge: IDEAFORGE;
  expert_talk_role: EXPERTTALKROLE;
  deputy_commissioner: DEPUTYCOMMISSIONER;
}

export interface DEPUTYCOMMISSIONER {
  id: number;
  big_para: string;
  desc: string;
  deputy_img: StrapiMedia;
}

export interface EXPERTTALKROLE {
  id: number;
  heading: string;
  desc: string;
  expert_talk_img: StrapiMedia;
}

export interface IDEAFORGE {
  id: number;
  heading: string;
  desc: string;
  idea_forge_img_1: StrapiMedia;
}

export interface SEMINAR {
  id: number;
  heading: string;
  desc: string;
  seminar_img_1: StrapiMedia;
  seminar_img_2: StrapiMedia;
}

export interface SHAPINGCAREER {
  id: number;
  heading: string;
  shaping_career: ParagraphBlock[];
  shaping_career_img_1: StrapiMedia;
  shaping_career_img_2: StrapiMedia;
}

export interface NETWORKINGOPPORTUNITIES {
  id: number;
  heading: string;
  desc: string;
  opportunities_content: ParagraphBlock[];
  opportunities_img_1: StrapiMedia;
  opportunities_img_2: StrapiMedia;
}

export interface CUISINE {
  id: number;
  heading: string;
  desc: string;
  cuisine_img: StrapiMedia;
}

export interface MURALEVENT {
  id: number;
  heading: string;
  desc: string;
  mural_img: StrapiMedia;
}

export interface Meta {
  pagination?: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}
