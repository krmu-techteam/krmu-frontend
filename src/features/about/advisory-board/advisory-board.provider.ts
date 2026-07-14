import { AdvisoryBoardRepository } from "./advisory-board.repositories";
import { AdvisoryBoardService } from "./advisory-board.services";
import { IAdvisoryBoardService } from "./advisory-board.interfaces";

let serviceInstance: IAdvisoryBoardService | null = null;

export function getAdvisoryBoardService(): IAdvisoryBoardService {
  if (!serviceInstance) {
    const repository = new AdvisoryBoardRepository();
    serviceInstance = new AdvisoryBoardService(repository);
  }
  return serviceInstance;
}
