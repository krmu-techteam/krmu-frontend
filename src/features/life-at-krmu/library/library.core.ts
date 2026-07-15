import { BaseRepository } from "@/lib/core/base.repository";
import { BaseService } from "@/lib/core/base.service";
import { createProvider } from "@/lib/core/create-provider";
import { ApiResponse, LibraryDomain } from "./library.types";
import { LibraryMapper } from "./library.mapper";
import { LIBRARY_QUERY } from "./library.queries";

// ── 1. Repository ────────────────────────────────────────

class LibraryRepository extends BaseRepository<
  ApiResponse,
  LibraryDomain
> {
  protected readonly query = LIBRARY_QUERY;

  // Override getData directly since there is no actual HTTP query path yet
  async getData(): Promise<LibraryDomain> {
    return this.emptyDomain();
  }

  protected mapToDomain(raw: ApiResponse): LibraryDomain {
    return LibraryMapper.toDomain(raw);
  }

  protected emptyDomain(): LibraryDomain {
    return LibraryMapper.toDomain(null);
  }
}

// ── 2. Service Interface ─────────────────────────────────

export interface ILibraryService {
  getData(): Promise<LibraryDomain>;
}

// ── 3. Service ───────────────────────────────────────────

class LibraryService
  extends BaseService<LibraryDomain>
  implements ILibraryService
{
  constructor(private readonly libraryRepository: LibraryRepository) {
    super(libraryRepository);
  }
}

// ── 4. Provider (Singleton) ──────────────────────────────

export const getLibraryService = createProvider<ILibraryService>(
  () => new LibraryService(new LibraryRepository()),
);
