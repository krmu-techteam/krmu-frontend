import { ReflectionDomain, ReflectionsResponse } from "./reflection.types";

export class ReflectionMapper {
  static toDomain(raw: ReflectionsResponse): ReflectionDomain {
    return raw.data;
  }
}
