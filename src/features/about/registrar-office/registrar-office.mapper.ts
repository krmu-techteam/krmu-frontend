import { IMapper } from "@/lib/core/mapper.interface";
import {
  RegistrarOfficeData,
  RegistrarOfficeDomain,
  RegistrarOfficeResponse,
} from "./registrar-office.types";

export class RegistrarOfficeMapper implements IMapper<
  RegistrarOfficeResponse,
  RegistrarOfficeDomain
> {
  toDomain(raw: RegistrarOfficeResponse): RegistrarOfficeDomain {
    return this.mapToDomain(raw.data);
  }

  private mapToDomain(data: RegistrarOfficeData): RegistrarOfficeDomain {
    return {
      id: data.id,
      documentId: data.documentId,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
      publishedAt: data.publishedAt,
      registrarname: data.registrarname,
      registrardesignation: data.registrardesignation,
      registraremail: data.registraremail,
      registrarinfo: data.registrarinfo,
      registrardescription: data.registrardescription,
      registrarimage: {
        ...data.registrarimage,
      },
      breadcrumb: {
        ...data.breadcrumb,
      },
      department: data.department.map((department) => ({
        ...department,
        employeecard: department.employeecard.map((employee) => ({
          ...employee,
          employeeimage: {
            ...employee.employeeimage,
          },
        })),
      })),
    };
  }
}
