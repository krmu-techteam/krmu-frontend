export interface FinancialAssistanceResponse {
  data: {
    id: number;
    documentId: string;
    heading: string;
    subheading: string;
    content: string;
    bank_loan: BankLoan;
    nbfc_card: NBFCARDS;
  };
  meta: Record<string, unknown>; // or MetaType if you have a defined structure
}

export interface NBFCARDS {
  id: number;
  nbfc_cards : BankLoanCard[];
}

export interface BankLoan {
  id: number;
  bank_loan_card: BankLoanCard[];
}

export interface BankLoanCard {
  id: number;
  bank_contact_person: string;
  download_btn_url: string;
  quick_apply_btn_url: string;
  bankinfo: string;
  bank_img: FinancialImg[];
}

export interface FinancialImg {
  id: number;
  documentId: string;
  url: string;
}
