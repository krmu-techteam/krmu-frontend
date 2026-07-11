export type FEEStructureResponse = {
  data: {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    fee_structure_tab: FeeStructureTab[];
    fee_structure_hero: FeeStructHero;
    fee_structure_saarc: FeeStructSAARC;
  };
};

export type FeeStructureTab = {
  id: number;
  tab_heading: string;
  fee_structure_acc: feeStructreAcc[];
};

export type feeStructreAcc = {
  id: number;
  panel_heading: string;
  panel_content: string;
};

export type FeeStructHero = {
  id: number;
  heading: string;
  fee_structure_url: string;
};

export type FeeStructSAARC = {
  id: number;
  saarc_btn: string;
};
