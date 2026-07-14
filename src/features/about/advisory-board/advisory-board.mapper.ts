import { AdvisoryBoardResponse } from "@/lib/types/advisory-type";
import { AdvisoryBoardDomain } from "./advisory-board.types";

export class AdvisoryBoardMapper {
  static toDomain(raw: AdvisoryBoardResponse): AdvisoryBoardDomain {
    return raw.data;
  }
}
