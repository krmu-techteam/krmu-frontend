import { AboutComponentKey } from "./about.constants";
import {
  AboutPageDomain,
  AccrediationDomain,
  HallOfFameDomain,
  InternationalCollabDomain,
  KRMGroupDomain,
  KRMUCommitteeDomain,
  VisionMissionDomain,
} from "./about.types";

export interface AboutComponentMap {
  accrediation: AccrediationDomain;
  krmugroup: KRMGroupDomain;
  halloffame: HallOfFameDomain;
  visionmission: VisionMissionDomain;
  internationcollaboration: InternationalCollabDomain;
  krmucommittee: KRMUCommitteeDomain;
}

export interface IAboutRepository {
  getAboutPage(): Promise<AboutPageDomain>;
  getSection<K extends AboutComponentKey>(
    key: K,
  ): Promise<AboutComponentMap[K] | undefined>;
}

export interface IAboutService {
  getAboutPage(): Promise<AboutPageDomain>;
  getSection<K extends AboutComponentKey>(
    key: K,
  ): Promise<AboutComponentMap[K] | undefined>;
}
