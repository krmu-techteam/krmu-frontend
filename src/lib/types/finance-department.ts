import { BREADCRUMB, StrapiMedia } from "./common";

export interface FinanceEmployee {
  id: number;
  employeename: string;
  designation: string;
  email: string;
  employeeimage: StrapiMedia;
}

export interface FinanceDepartment {
  data: {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    breadcrumb: BREADCRUMB;
    financeemployees: FinanceEmployee[];
  };
}
