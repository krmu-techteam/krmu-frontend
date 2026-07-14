import { apiRequest } from "@/lib/api-request";
import { ABOUT_QUERY } from "./about.queries";
import { AboutMapper } from "./about.mapper";
import { AboutPageDomain, AboutPageResponse } from "./about.types";
import { AboutComponentKey } from "./about.constants";
import { AboutComponentMap, IAboutRepository } from "./about.interfaces";

export class AboutRepository implements IAboutRepository {
  private aboutPageDataPromise: Promise<AboutPageDomain> | null = null;

  async getAboutPage(): Promise<AboutPageDomain> {
    if (!this.aboutPageDataPromise) {
      this.aboutPageDataPromise = (async () => {
        try {
          const raw = await apiRequest<AboutPageResponse>(ABOUT_QUERY);
          return AboutMapper.toDomain(raw);
        } catch (error) {
          console.error("About page repository fetch error:", error);
          this.aboutPageDataPromise = null;
          return emptyAboutDomain();
        }
      })();
    }
    return this.aboutPageDataPromise;
  }

  async getSection<K extends AboutComponentKey>(
    key: K,
  ): Promise<AboutComponentMap[K] | undefined> {
    const data = await this.getAboutPage();
    return data[key] as AboutComponentMap[K];
  }
}

// ── Safe empty fallback ──────────────────────────────────

function emptyAboutDomain(): AboutPageDomain {
  return {
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
}
