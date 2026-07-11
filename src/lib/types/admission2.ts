import { StrapiMedia } from "./common";

export type Admission2Response = {
  data: {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    adm_toc: Adm2TOC;
    adm2_alumni: Adm2Alumni[];
  };
};

export type Adm2Alumni = {
  id: number;
  name: string;
  content: string;
  qualification: string;
  review_img: StrapiMedia;
  alumni_img: StrapiMedia;
};

export type Adm2TOC = {
  id: number;
  heading: string;
  highlightheading: string;
  description: string;
  tocimg?: StrapiMedia;
  tocfaq: Adm2FAQ[];
  tocbtn: adm2btn;
};

export type Adm2FAQ = {
  id: number;
  tocpoint: string;
  faq: Adm2Acc[];
};

export type Adm2Acc = {
  id: number;
  ques: string;
  ans: string;
};

export type adm2btn = {
  id: number;
  btn_link: string;
  btn_text: string;
};
