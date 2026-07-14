import { BaseRepository, BaseService, createProvider } from "@/lib/core";
import { AdvisoryBoardResponse } from "@/lib/types/advisory-type";
import { AdvisoryBoardDomain } from "./advisory-board.types";
import { AdvisoryBoardMapper } from "./advisory-board.mapper";
import { ADVISORY_BOARD_ENDPOINTS } from "./advisory-board.queries";

// ── 1. Repository ────────────────────────────────────────

class AdvisoryBoardRepository extends BaseRepository<
  AdvisoryBoardResponse,
  AdvisoryBoardDomain
> {
  protected readonly query = ADVISORY_BOARD_ENDPOINTS.getAdvisoryBoard();

  protected mapToDomain(raw: AdvisoryBoardResponse): AdvisoryBoardDomain {
    return AdvisoryBoardMapper.toDomain(raw);
  }

  protected emptyDomain(): AdvisoryBoardDomain {
    return EMPTY_ADVISORY_BOARD;
  }
}

// ── 2. Service Interface ─────────────────────────────────

export interface IAdvisoryBoardService {
  getData(): Promise<AdvisoryBoardDomain>;
}

// ── 3. Service ───────────────────────────────────────────

class AdvisoryBoardService
  extends BaseService<AdvisoryBoardDomain>
  implements IAdvisoryBoardService
{
  constructor(private readonly advisoryRepository: AdvisoryBoardRepository) {
    super(advisoryRepository);
  }
}

// ── 4. Provider (Singleton) ──────────────────────────────

export const getAdvisoryBoardService = createProvider<IAdvisoryBoardService>(
  () => new AdvisoryBoardService(new AdvisoryBoardRepository()),
);

// ── Safe empty fallback ──────────────────────────────────

const EMPTY_ADVISORY_BOARD: AdvisoryBoardDomain = {
  id: 0,
  documentId: "",
  createdAt: "",
  updatedAt: "",
  publishedAt: "",
  description: [],
  advisoryboard: [],
};
