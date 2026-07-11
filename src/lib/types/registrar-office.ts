import { BREADCRUMB, StrapiMedia } from "./common";

export interface EmployeeCard {
  id: number;
  employeename: string;
  designation: string;
  email: string;
  employeeimage: StrapiMedia;
}

export interface Departments {
  id: number;
  departmentname: string;
  employeecard: EmployeeCard[];
}

export interface RegistrarOffice {
  data: {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    registrarname: string;
    registrardesignation: string;
    registraremail: string;
    registrarinfo: string;
    registrarimage: StrapiMedia;
    breadcrumb: BREADCRUMB;
    department: Departments[];
    registrardescription: string;
  };
}
