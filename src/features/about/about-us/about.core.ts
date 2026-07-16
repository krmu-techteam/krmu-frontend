import { BaseRepository } from "@/lib/core/base.repository";
import { BaseService } from "@/lib/core/base.service";
import { createProvider } from "@/lib/core/create-provider";
import { ABOUT_QUERY } from "./about.queries";
import { AboutMapper } from "./about.mapper";
import {
  AboutPageDomain,
  AboutPageResponse,
  AboutSectionKey,
  AboutSectionMap,
} from "./about.types";

// ── 1. Repository ────────────────────────────────────────

class AboutRepository extends BaseRepository<
  AboutPageResponse,
  AboutPageDomain
> {
  protected readonly query = ABOUT_QUERY;

  protected mapToDomain(raw: AboutPageResponse): AboutPageDomain {
    return AboutMapper.toDomain(raw);
  }

  protected emptyDomain(): AboutPageDomain {
    return EMPTY_ABOUT;
  }

  // Typed section accessor
  async getSection<K extends AboutSectionKey>(
    key: K,
  ): Promise<AboutSectionMap[K]> {
    const data = await this.getData();
    return data[key] as AboutSectionMap[K];
  }
}

// ── 2. Service Interface ─────────────────────────────────

export interface IAboutService {
  getData(): Promise<AboutPageDomain>;
  getSection<K extends AboutSectionKey>(key: K): Promise<AboutSectionMap[K]>;
}

// ── 3. Service ───────────────────────────────────────────

class AboutService
  extends BaseService<AboutPageDomain>
  implements IAboutService
{
  constructor(private readonly aboutRepository: AboutRepository) {
    super(aboutRepository);
  }

  async getSection<K extends AboutSectionKey>(
    key: K,
  ): Promise<AboutSectionMap[K]> {
    return this.aboutRepository.getSection(key);
  }
}

// ── 4. Provider (Singleton) ──────────────────────────────

export const getAboutService = createProvider<IAboutService>(
  () => new AboutService(new AboutRepository()),
);

// ── Safe empty fallback ──────────────────────────────────

const EMPTY_ABOUT: AboutPageDomain = {
  id: 0,
  documentId: "",
  title: "",
  subtitle: "",
  thenexgentitle: "",
  thenexgendescription: "",
  accrediation: { title: "", accrediationlogos: [] },
  krmugroup: { title: "", subtitle: "", description: "", krmbranch: [] },
  halloffame: { title: "", hallfame: [] },
  visionmission: {
    visiontitle: "",
    missiontitle: "",
    visiondescription: [],
    missiondescription: [],
  },
  internationcollaboration: {
    title: "",
    description: [],
    intcollabbtn: {
      id: 0,
      buttontext: "",
      buttonlink: "",
      buttonclass: null,
      popupFormId: null,
      containerPopupFormId: null,
    },
    internationcollablogos: [],
    image: {
      id: 0,
      documentId: "",
      name: "",
      alternativeText: null,
      caption: null,
      width: null,
      height: null,
      formats: null,
      hash: "",
      ext: "",
      mime: "",
      size: 0,
      url: "",
      previewUrl: null,
      provider: "",
      provider_metadata: null,
      createdAt: "",
      updatedAt: "",
      publishedAt: "",
    },
  },
  krmucommittee: {
    title: "",
    description: [],
    committeebtn: {
      id: 0,
      buttontext: "",
      buttonlink: "",
      buttonclass: null,
      popupFormId: null,
      containerPopupFormId: null,
    },
  },
};
