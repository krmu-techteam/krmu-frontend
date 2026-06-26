import { HeroPageContentType } from "../types/contentHero";
import HeroContentData from "../data/heroContent.json";
import { LogoPageContentType } from "../types/contentLogo";
import LogoContentData from "../data/logoContent.json";
import { CareerOutcomePageContentType } from "../types/contentCareerOutcome";
import CareerOutcomeContentData from "../data/careerOutcomeContent.json";
import { MbaExistsPageContentType } from "../types/contentMbaExists";
import MbaExistsContentData from "../data/mbaExistsContent.json";
import { TwoYearArcPageContentType } from "../types/contentTwoYearArc";
import TwoYearArcContentData from "../data/twoYearArcContent.json";
import { CareerGoalPageContentType } from "../types/contentCareerGoal";
import CareerGoalContentData from "../data/careerGoalContent.json";
import { LeaveWithPageContentType } from "../types/contentLeaveWith";
import LeaveWithContentData from "../data/leaveWithContent.json";
import { FacultyAndIndustryPageContentType } from "../types/contentFacultyAndIndustry";
import FacultyAndIndustryContentData from "../data/facultyAndIndustryContent.json";
import { ExperimentalInfraPageContentType } from "../types/contentExperimentalInfra";
import ExperimentalInfraContentData from "../data/experimentalInfraContent.json";
import { ExpectationsPageContentType } from "../types/contentExpectations";
import ExpectationsContentData from "../data/expectationsContent.json";

export function getContent(): HeroPageContentType {
  return HeroContentData as HeroPageContentType;
}

export function getLogoContent(): LogoPageContentType {
  return LogoContentData as LogoPageContentType;
}

export function getCareerOutcomeContent(): CareerOutcomePageContentType {
  return CareerOutcomeContentData as CareerOutcomePageContentType;
}

export function getMbaExistsContent(): MbaExistsPageContentType {
  return MbaExistsContentData as MbaExistsPageContentType;
}

export function getTwoYearArcContent(): TwoYearArcPageContentType {
  return TwoYearArcContentData as TwoYearArcPageContentType;
}

export function getCareerGoalContent(): CareerGoalPageContentType {
  return CareerGoalContentData as CareerGoalPageContentType;
}

export function getLeaveWithContent(): LeaveWithPageContentType {
  return LeaveWithContentData as LeaveWithPageContentType;
}

export function getFacultyAndIndustryContent(): FacultyAndIndustryPageContentType {
  return FacultyAndIndustryContentData as FacultyAndIndustryPageContentType;
}

export function getExperimentalInfraContent(): ExperimentalInfraPageContentType {
  return ExperimentalInfraContentData as ExperimentalInfraPageContentType;
}

export function getExpectationsContent(): ExpectationsPageContentType {
  return ExpectationsContentData as ExpectationsPageContentType;
}




