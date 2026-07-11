import { StrapiMedia } from "./common";

export interface PedagogyResponse {
  data: PedagogyData;
  meta: Record<string, unknown>;
}

export interface PedagogyData {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;

  pedagogy_hero: PedagogyHero;
  classroom_teaching: ClassroomTeaching;
  lecture: PedagogySection;
  practicals: PedagogySection;
  innovative_work_lab: PedagogySection;
  workshop_guest_lecture: PedagogySection;
  technology_enable_learning: PedagogySection;
  mock_interview: PedagogySection;
  mentor_prog: PedagogySection;
  industry_connect: IndustryConnect;
}

export interface PedagogyHero {
  id: number;
  title: string;
  description: string;
  content: string;
  title2: string;
  hero_bg: StrapiMedia;
}

export interface ClassroomTeaching {
  id: number;
  heading: string;
  desc: string;
}

export interface PedagogySection {
  id: number;
  title: string;
  content: string;
  peda_img: StrapiMedia;
}

export interface IndustryConnect {
  id: number;
  title: string;
  subheading: string;
  industry_connect_content: string;
  bgimage: StrapiMedia;
  mob_indus_connect_img: StrapiMedia;
}
