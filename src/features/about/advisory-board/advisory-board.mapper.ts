import { AdvisoryBoardDomain } from "./advisory-board.types";

export class AdvisoryBoardMapper {
  static toDomain(raw: any): AdvisoryBoardDomain {
    return raw;
  }
}
