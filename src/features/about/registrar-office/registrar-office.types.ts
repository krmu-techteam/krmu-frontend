import { StrapiMedia } from "@/lib/types/common";

export interface RegistrarOfficeResponse {
  data: RegistrarOfficeDomain;
  meta: Record<string, unknown>;
}

export type RegistrarOfficeDomain = RegistrarOfficeData;

export interface RegistrarOfficeData {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  registrarname: string;
  registrardesignation: string;
  registraremail: string;
  registrarinfo: string;
  registrardescription: string;
  registrarimage: StrapiMedia;
  breadcrumb: BreadCrumb;
  department: Department[];
}

export interface BreadCrumb {
  id: number;
  breadcrumbtext: string;
  breadcrumbbgcolor: string;
  backgroundimage: StrapiMedia | null;
}

export interface Department {
  id: number;
  departmentname: string;
  employeecard: EmployeeCard[];
}

export interface EmployeeCard {
  id: number;
  employeename: string;
  designation: string;
  email: string;
  employeeimage: StrapiMedia;
}
