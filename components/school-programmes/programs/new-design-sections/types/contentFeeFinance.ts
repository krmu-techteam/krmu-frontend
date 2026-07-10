export interface ProgramFeeType {
  title: string;
  amount: string;
  unit: string;
  subtext: string;
  bullets: string[];
  button: {
    text: string;
    link: string;
  };
}

export interface LoanPartnersType {
  title: string;
  description: string;
  partners: string[];
  bullets: string[];
}

export interface FeeFinanceContentType {
  badge: string;
  title: string;
  programFee: ProgramFeeType;
  loanPartners: LoanPartnersType;
}

export interface FeeFinancePageContentType {
  feeFinance: FeeFinanceContentType;
}
