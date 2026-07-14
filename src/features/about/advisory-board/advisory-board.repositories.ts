import { getAdvisoryBoard } from "@/lib/api/common";
import { IAdvisoryBoardRepository } from "./advisory-board.interfaces";
import { AdvisoryBoardDomain } from "./advisory-board.types";
import { AdvisoryBoardMapper } from "./advisory-board.mapper";

export class AdvisoryBoardRepository implements IAdvisoryBoardRepository {
  private dataPromise: Promise<AdvisoryBoardDomain | undefined> | null = null;

  async getAdvisoryBoardData(): Promise<AdvisoryBoardDomain | undefined> {
    if (!this.dataPromise) {
      this.dataPromise = (async () => {
        try {
          const rawData = await getAdvisoryBoard();
          if (!rawData) return undefined;
          return AdvisoryBoardMapper.toDomain(rawData);
        } catch (error) {
          console.error("Failed to fetch Advisory Board data:", error);
          this.dataPromise = null;
          return undefined;
        }
      })();
    }
    return this.dataPromise;
  }
}
