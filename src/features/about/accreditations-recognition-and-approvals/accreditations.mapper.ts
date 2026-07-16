import {
  AccreditationDomain,
  AccreditationResponse,
} from "./accreditations.types";

export class AccreditationsMapper {
  static toDomain(raw: AccreditationResponse): AccreditationDomain {
    return raw.data;
  }
}
