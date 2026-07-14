import { AdvisoryBoardDomain } from "./advisory-board.types";

export interface IAdvisoryBoardRepository {
  getAdvisoryBoardData(): Promise<AdvisoryBoardDomain | undefined>;
}

export interface IAdvisoryBoardService {
  getAdvisoryBoardData(): Promise<AdvisoryBoardDomain | undefined>;
}
