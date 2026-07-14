import { ApiResponse, LibraryDomain } from "./library.types";
import staticData from "./data/index.json";

export class LibraryMapper {
  static toDomain(raw: ApiResponse | null): LibraryDomain {
    if (raw && raw.data) {
      return raw.data;
    }
    return staticData.data;
  }
}
