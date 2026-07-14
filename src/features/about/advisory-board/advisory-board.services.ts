import { IAdvisoryBoardRepository, IAdvisoryBoardService } from "./advisory-board.interfaces";
import { AdvisoryBoardDomain } from "./advisory-board.types";

export class AdvisoryBoardService implements IAdvisoryBoardService {
  constructor(private readonly repository: IAdvisoryBoardRepository) {}

  async getAdvisoryBoardData(): Promise<AdvisoryBoardDomain | undefined> {
    return await this.repository.getAdvisoryBoardData();
  }
}
