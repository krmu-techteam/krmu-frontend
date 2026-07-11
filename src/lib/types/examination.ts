export interface ExaminationResponse {
  data: ExaminationData;
  meta: Record<string, unknown>;
}

export interface ExaminationData {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;

  examination_hero: ExaminationHero;
  imp_download: ImportantDownloads;
  abc_nad_digilocker: AbcNadDigilocker;
  apply_online: ApplyOnline;
  examination_faq: ExaminationFAQ;
}

export interface ExaminationHero {
  id: number;
  title: string;
  bgimg: Media;
}

export interface ImportantDownloads {
  id: number;
  heading: string;
  imp_download_card: ImportantDownloadCard[];
}

export interface ImportantDownloadCard {
  id: number;
  title: string; // HTML content as string
  download_btn: DownloadButton;
}

export interface DownloadButton {
  id: number;
  btn_text: string;
  btn_link: string | null;
  btn_class: string | null;
}

export interface AbcNadDigilocker {
  id: number;
  heading: string;
  desc: string;
  url: string;
  abc_nad_btns: AbcNadButton[];
  abc_nad_img: Media;
}

export interface AbcNadButton {
  id: number;
  btn_text: string;
  btn_link: string | null;
  btn_class: string | null;
}

export interface ApplyOnline {
  id: number;
  apply_online_content: string; // HTML content as string
}

export interface ExaminationFAQ {
  id: number;
  heading: string;
  faq_accordion: FAQAccordion[];
}

export interface FAQAccordion {
  id: number;
  title: string;
  exam_faq_acc: ExamFaqItem[];
}

export interface ExamFaqItem {
  id: number;
  ques: string;
  answer: string; // HTML content as string
}

export interface Media {
  id: number;
  documentId: string;
  url: string;
}
