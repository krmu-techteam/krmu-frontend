import { HeroPageContentType } from "../types/contentHero";
import HeroContentData from "../data/fintech/heroContent.json";
import digitalHeroContent from "../data/digitalMarketing/digitalheroContent.json";
import ibmHeroContent from "../data/ibm/ibmheroContent.json";

import { LogoPageContentType } from "../types/contentLogo";
import LogoContentData from "../data/fintech/logoContent.json";
import { CareerOutcomePageContentType } from "../types/contentCareerOutcome";
import CareerOutcomeContentData from "../data/fintech/careerOutcomeContent.json";
import { MbaExistsPageContentType } from "../types/contentMbaExists";
import MbaExistsContentData from "../data/fintech/mbaExistsContent.json";
import { TwoYearArcPageContentType } from "../types/contentTwoYearArc";
import TwoYearArcContentData from "../data/fintech/twoYearArcContent.json";

import { CareerGoalPageContentType } from "../types/contentCareerGoal";
import CareerGoalContentData from "../data/fintech/careerGoalContent.json";
import ibmCareerGoalContentData from "../data/ibm/ibmCareerGoalContent.json";
import digitalCareerGoalContentData from "../data/digitalMarketing/digitalCareerGoalContent.json";

import { LeaveWithPageContentType } from "../types/contentLeaveWith";
import LeaveWithContentData from "../data/fintech/leaveWithContent.json";

import { FacultyAndIndustryPageContentType } from "../types/contentFacultyAndIndustry";
import FacultyAndIndustryContentData from "../data/fintech/facultyAndIndustryContent.json";
import ibmFacultyAndIndustryContentData from "../data/ibm/ibmFacultyAndIndustryContent.json";
import digitalFacultyAndIndustryContentData from "../data/digitalMarketing/digitalFacultyAndIndustryContent.json";

import { ExperimentalInfraPageContentType } from "../types/contentExperimentalInfra";
import ExperimentalInfraContentData from "../data/fintech/experimentalInfraContent.json";
import ibmExperimentalInfraContentData from "../data/ibm/ibmExperimentalInfraContent.json";
import digitalExperimentalInfraContentData from "../data/digitalMarketing/digitalExperimentalInfraContent.json";

import { ExpectationsPageContentType } from "../types/contentExpectations";
import ExpectationsContentData from "../data/fintech/expectationsContent.json";
import { CareerProspectsPageContentType } from "../types/contentCareerProspects";
import CareerProspectsContentData from "../data/fintech/careerProspectsContent.json";
import { FeeFinancePageContentType } from "../types/contentFeeFinance";
import FeeFinanceContentData from "../data/fintech/feeFinanceContent.json";
import { HowToApplyPageContentType } from "../types/contentHowToApply";
import HowToApplyContentData from "../data/fintech/howToApplyContent.json";
import { LocationPageContentType } from "../types/contentLocation";
import LocationContentData from "../data/fintech/locationContent.json";
import { ThreeIndustryTracksPageContentType } from "../types/contentThreeIndustryTracks";
import ThreeIndustryTracksContentData from "../data/fintech/threeIndustryTracksContent.json";

import { CommonQuestionPageContentType } from "../types/contentCommonQuestion";
import CommonQuestionContentData from "../data/fintech/commonQuestionContent.json";
import ibmCommonQuestionContentData from "../data/ibm/ibmCommonQuestionContent.json";
// import digitalCommonQuestionContentData from "../data/digitalMarketing/digitalCommonQuestionContent.json";

export function getContent(): HeroPageContentType {
  return HeroContentData as HeroPageContentType;
}

export function getDigitalContent(): HeroPageContentType {
  return digitalHeroContent as HeroPageContentType;
}

export function getIBMContent(): HeroPageContentType {
  return ibmHeroContent as HeroPageContentType;
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

export function getIBMGoalContent(): CareerGoalPageContentType {
  return ibmCareerGoalContentData as CareerGoalPageContentType;
}

export function getDigitalGoalContent(): CareerGoalPageContentType {
  return digitalCareerGoalContentData as CareerGoalPageContentType;
}

export function getLeaveWithContent(): LeaveWithPageContentType {
  return LeaveWithContentData as LeaveWithPageContentType;
}

export function getFacultyAndIndustryContent(): FacultyAndIndustryPageContentType {
  return FacultyAndIndustryContentData as FacultyAndIndustryPageContentType;
}

export function getIBMFacultyAndIndustryContent(): FacultyAndIndustryPageContentType {
  return ibmFacultyAndIndustryContentData as FacultyAndIndustryPageContentType;
}

export function getDigitalFacultyAndIndustryContent(): FacultyAndIndustryPageContentType {
  return digitalFacultyAndIndustryContentData as FacultyAndIndustryPageContentType;
}

export function getExperimentalInfraContent(): ExperimentalInfraPageContentType {
  return ExperimentalInfraContentData as ExperimentalInfraPageContentType;
}

export function getIBMEExperimentalInfraContent(): ExperimentalInfraPageContentType {
  return ibmExperimentalInfraContentData as ExperimentalInfraPageContentType;
}

export function getDigitalExperimentalInfraContent(): ExperimentalInfraPageContentType {
  return digitalExperimentalInfraContentData as ExperimentalInfraPageContentType;
}

export function getExpectationsContent(): ExpectationsPageContentType {
  return ExpectationsContentData as ExpectationsPageContentType;
}

export function getCareerProspectsContent(): CareerProspectsPageContentType {
  return CareerProspectsContentData as CareerProspectsPageContentType;
}

export function getFeeFinanceContent(): FeeFinancePageContentType {
  return FeeFinanceContentData as FeeFinancePageContentType;
}

export function getHowToApplyContent(): HowToApplyPageContentType {
  return HowToApplyContentData as HowToApplyPageContentType;
}

export function getLocationContent(): LocationPageContentType {
  return LocationContentData as LocationPageContentType;
}

export function getThreeIndustryTracksContent(): ThreeIndustryTracksPageContentType {
  return ThreeIndustryTracksContentData as ThreeIndustryTracksPageContentType;
}

export function getCommonQuestionContent(): CommonQuestionPageContentType {
  return CommonQuestionContentData as CommonQuestionPageContentType;
}

export function getIBMCommonQuestionContent(): CommonQuestionPageContentType {
  return ibmCommonQuestionContentData as CommonQuestionPageContentType;
}
