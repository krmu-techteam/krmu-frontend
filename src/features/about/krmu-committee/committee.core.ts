import { BaseRepository } from "@/lib/core/base.repository";
import { BaseService } from "@/lib/core/base.service";
import { createProvider } from "@/lib/core/create-provider";
import {
  KrmuCommitteeData,
  KrmuCommitteeDomain,
  KrmuCommitteeResponse,
} from "./committee.types";
import { COMMITTEE_QUERY } from "./committee.queries";
import { CommitteeMapper } from "./committee.mapper";
import COMMITTEE_DATA from "./data/index.json";

export class CommitteeRepository extends BaseRepository<
  KrmuCommitteeResponse,
  KrmuCommitteeDomain
> {
  protected readonly query: string = COMMITTEE_QUERY;

  protected mapToDomain(raw: KrmuCommitteeResponse): KrmuCommitteeDomain {
    return CommitteeMapper.toDomain(raw);
  }

  protected emptyDomain(): KrmuCommitteeData {
    return EMPTY_COMMITTEE;
  }
}

export interface ICommitteService {
  getData(): Promise<KrmuCommitteeDomain>;
  getStaticData(): Promise<KrmuCommitteeDomain>;
}

export class CommitteService
  extends BaseService<KrmuCommitteeDomain>
  implements ICommitteService
{
  constructor(private readonly repo: CommitteeRepository) {
    super(repo);
  }

  async getStaticData(): Promise<KrmuCommitteeDomain> {
    return COMMITTEE_DATA.data;
  }
}

export const getCommitteeService = createProvider<ICommitteService>(
  () => new CommitteService(new CommitteeRepository()),
);

const EMPTY_COMMITTEE: KrmuCommitteeDomain = {
  heroSection: {
    title: "",
    description: "",
  },
  antiDiscriminationSection: {
    title: "",
    descriptions: [],
    objectivesTitle: "",
    objectives: [],
    committee: {
      title: "",
      members: [],
    },
    helpline: {
      title: "",
      contactInfo: {
        label: "",
        value: "",
      },
    },
    documents: {
      title: "",
      url: "",
    },
    memberSecretary: {
      title: "",
      contactInfo: {
        label: "",
        value: "",
      },
    },
  },
  genderSensitisationSection: {
    title: "",
    description: "",
    helpline: {
      title: "",
      contactInfo: {
        label: "",
        value: "",
      },
    },
    documents: {
      title: "",
      url: "",
    },
    committee: {
      title: "",
      members: [],
    },
  },
  internalComplaintsSection: {
    title: "",
    descriptions: [],
    committee: {
      title: "",
      members: [],
    },
    helpline: {
      title: "",
      contactInfo: {
        label: "",
        value: "",
      },
    },
    documents: {
      title: "",
      url: "",
    },
    complaintButton: {
      title: "",
      url: "",
    },
    importantLinks: [],
  },
  antiRaggingSection: {
    title: "",
    descriptions: [],
    documents: [],
    complaintButton: {
      title: "",
      url: "",
    },
    committee: {
      title: "",
      members: [],
    },
    helpline: {
      memberSecretary: {
        heading: "",
        contact: {
          label: "",
          value: "",
        },
      },
      university: {
        contact: {
          emailLabel: "",
          emailValue: "",
          phoneLabel: "",
          phoneValue: "",
        },
      },
      ugc: {
        contact: {
          label: "",
          value: "",
        },
      },
    },
  },
  grievanceRedressalSection: {
    title: "",
    descriptions: [],
    committee: {
      title: "",
      members: [],
    },
    helpline: {
      title: "",
      contactInfo: {
        label: "",
        value: "",
      },
    },
    documents: [],
  },
  studentDisciplineSection: {
    title: "",
    descriptions: [],
    committee: {
      title: "",
      members: [],
    },
    helpline: {
      title: "",
      contactInfo: {
        label: "",
        value: "",
      },
    },
    documents: [],
  },
};
