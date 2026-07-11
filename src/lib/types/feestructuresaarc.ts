export type FEEStructureSAARCResponse = {
  data: {
    id: number;
    documentId: string;
    heading: string;
    subheading: string;
    saarc_url: string;
    fee_structure_saarc_tab: FeeStructureSAARCTab[];
    fee_struct_saarc_approval: FEEStructureApproval;
  };
};

export type FeeStructureSAARCTab = {
  id: number;
  fee_structure_saarc_panel_heading: string;
  fee_structure_saarc_accc: feeStructrSAARCeAcc[];
};

export type feeStructrSAARCeAcc = {
  id: number;
  panel_heading: string;
  panel_content: string;
};

export type FEEStructureApproval = {
  id: number;
  office_order_url: string;
  fee_struct_click_here: string;
};

// export type FeeStructHero = {
//   id: number;
//   heading: string;
//   fee_structure_url: string;
// };

// export type FeeStructSAARC = {
//   id: number;
//   saarc_btn: string;
// };
