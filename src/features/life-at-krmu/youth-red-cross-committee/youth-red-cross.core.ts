import { BaseRepository } from "@/lib/core/base.repository";
import { BaseService } from "@/lib/core/base.service";
import { createProvider } from "@/lib/core/create-provider";
import {
  YouthRedCrossCommitteeDomain,
  YouthRedCrossCommitteeResponse,
} from "./youth-red-cross-committee.types";
import { YOUTH_RED_CROSS_QUERY } from "./youth-red-cross.queries";
import { YouthRedCrossMapper } from "./youth-red-cross.mapper";
import youthRedCrossData from "./data/index.json";

// ── 1. Repository ────────────────────────────────────────

export class YouthRedCrossRepository extends BaseRepository<
  YouthRedCrossCommitteeResponse,
  YouthRedCrossCommitteeDomain
> {
  protected readonly query = YOUTH_RED_CROSS_QUERY;

  protected mapToDomain(
    raw: YouthRedCrossCommitteeResponse,
  ): YouthRedCrossCommitteeDomain {
    return YouthRedCrossMapper.toDomain(raw);
  }

  protected emptyDomain(): YouthRedCrossCommitteeDomain {
    return EMPTY_YOUTH_RED_CROSS_COMMITTEE;
  }
}

// ── 2. Service Interface ─────────────────────────────────

export interface IYouthRedCrossCommitteeService {
  getData(): Promise<YouthRedCrossCommitteeDomain>;
  getStaticData(): Promise<YouthRedCrossCommitteeDomain>;
}

// ── 3. Service ───────────────────────────────────────────

export class YouthRedCrossService
  extends BaseService<YouthRedCrossCommitteeDomain>
  implements IYouthRedCrossCommitteeService
{
  constructor(
    private readonly youthRedCrossRepository: YouthRedCrossRepository,
  ) {
    super(youthRedCrossRepository);
  }

  async getStaticData(): Promise<YouthRedCrossCommitteeDomain> {
    return youthRedCrossData.data;
  }
}

// ── 4. Provider (Singleton) ──────────────────────────────

export const getYouthRedCrossService =
  createProvider<IYouthRedCrossCommitteeService>(
    () => new YouthRedCrossService(new YouthRedCrossRepository()),
  );

// ── Safe empty fallback ──────────────────────────────────

export const EMPTY_YOUTH_RED_CROSS_COMMITTEE: YouthRedCrossCommitteeDomain = {
  heroSection: {
    heading: "",
    descriptions: [],
    imageUrl: "",
  },
  committeeSection: {
    heading: "",
    description: "",
    focusTitle: "",
    focusAreas: [],
    closingDescription: "",
  },
  resourcesSection: {
    objectiveContent: {
      heading: "",
      items: [],
    },
    magazineContent: {
      heading: "",
      links: [],
      imageUrl: "",
    },
  },
  benefitsSection: {
    heading: "",
    points: [],
    imageUrl: "",
  },
  eligibilitySection: {
    heading: "",
    points: [],
  },
  committeeActivitiesSection: {
    heading: "",
    descriptions: [],
    imageUrl: "",
  },
  awardsSection: {
    heading: "",
    images: [],
    description: "",
  },
  mottoSection: {
    heading: "",
    description: "",
  },
  futurePlansSection: {
    heading: "",
    description: "",
    points: [],
  },
  activityGallerySection: {
    heading: "",
    categories: [],
  },
  contactSection: {
    heading: "",
    description: "",
    contacts: [],
    callToAction: {
      text: "",
    },
  },
};
