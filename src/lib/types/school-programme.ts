import { ParagraphBlock } from "./about";
import { ButtonType, StrapiMedia } from "./common";

export interface SchoolProgrammeResponse {
  data: Programme[];
  meta: {
    pagination: Pagination;
  };
}

export interface ProgrammeScopeType {
  id: number;
  scopeheading: string;
  scopecontent: string;
  scopeimg: StrapiMedia;
  scopebtn: ButtonType;
  scopeFormId: string;
  scopeContainerId: string;
}

export interface HiglightCard {
  id: number;
  title: string;
  subtitle: string;
  highlightimage: StrapiMedia;
}

export interface ProgrammeHighlight {
  id: number;
  heading: string;
  highlightheading: string;
  subheading: string;
  programmehighlightcards: HiglightCard[];
}

export interface SpecialisationCard {
  id: number;
  title: string;
  specialisationimg: StrapiMedia;
  link: string;
}

export interface Specialisation {
  id: number;
  highlightheading: string;
  heading: string;
  specialisationcards: SpecialisationCard[];
}

export interface AdmisionProcessCard {
  id: number;
  title: string;
  description: string;
  mobcounting: string;
  link: string;
}

export interface AdmissionProcess {
  id: number;
  heading: string;
  highlightheading: string;
  description: string;
  admissionprocesscard: AdmisionProcessCard[];
  desktopadmissionprocessimg: StrapiMedia;
  admissionbtn: ButtonType;
  admFormField: string;
  admissionFormId: string;
}
export interface Subject {
  id: number;
  subjectname: string;
  course_name: ExtraCourseName[];
}

export interface ExtraCourseName {
  id: number;
  sub_name: string;
}

export interface Semester {
  id: number;
  semestername: string;
  subjects: Subject[];
  pdfbtns?: ButtonType[];
  semFormField: string;
  popupFormId: string;
  containerPopupFormId: string;
}

export interface Year {
  id: number;
  year: string;
  semester: Semester[];
}

export interface Curriculum {
  id: number;
  highlightheading: string;
  heading: string;
  description: string;
  years: Year[];
  currbtn: ButtonType;
  currFormId: string;
  currContainerId: string;
  only_years: boolean;
}

export interface LabCard {
  id: number;
  title: string;
  description: string;
}

export interface LabsFacilities {
  id: number;
  heading: string;
  highlightheading: string;
  labscontent: ParagraphBlock[]; // replace 'any' with a proper type if you know the structure
  labsimage: StrapiMedia; // replace 'any' with proper type if available
  labbtn: ButtonType; // replace 'any' with proper type if available
  labcards: LabCard[];
}

export interface BeyondClassroom {
  id: number;
  heading: string;
  highlightheading: string;
  description: string;
  beyondclassroomimages: StrapiMedia[];
}

export interface CareerCard {
  id: number;
  num: string;
  title: string;
  description: string;
}

export interface Career {
  id: number;
  heading: string;
  highlightheading: string;
  description: string;
  careerimg: StrapiMedia;
  careerbtn: ButtonType;
  careercards: CareerCard[];
  careerFormId: string;
}

export interface DreamCareer {
  id: number;
  heading: string;
  description: string;
  highestpackagenum: string;
  highestpackagetitle: string;
  campusrecruitersnum: string;
  campusrecruitertitle: string;
  placementassistnum: string;
  placementassisttitle: string;
  careerlogos: StrapiMedia[];
}

export interface FinancialAssistance {
  id: number;
  heading: string;
  highlightheading: string;
  description: string;
  point1: string;
  point2: string;
  point3: string;
  point4: string;
  point5: string;
  point6: string;
  point7: string;
  financelogos: StrapiMedia[];
}

export interface FAQ {
  id: number;
  ques: string;
  ans: string;
}

export interface TOCFAQ {
  id: number;
  tocpoint: string;
  faq: FAQ[];
}

export interface TOC {
  id: number;
  heading: string;
  highlightheading: string;
  description: string;
  tocfaq: TOCFAQ[];
  tocimg: StrapiMedia;
  tocbtn: ButtonType;
}

export interface OurLocation {
  id: number;
  badgetext: string;
  heading: string;
  img1: StrapiMedia;
  img2: StrapiMedia;
}
export interface SchoolCategoryType {
  id: number;
  documentId: string;
  name: string;
  slug: string;
}

export interface Programme {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  programmeslug: string;
  highlightitle: string;
  school_categories?: SchoolCategory[]; // optional if missing sometimes
  herosection?: HeroSection; // optional (your JSON had {})
  programmeeligibility?: ProgrammeEligibility;
  programmescope?: ProgrammeScopeType;
  programmehighlight?: ProgrammeHighlight;
  specialisation?: Specialisation;
  admissionprocess?: AdmissionProcess;
  curriculum?: Curriculum;
  labsfacilities?: LabsFacilities;
  beyondclassroom?: BeyondClassroom;
  career?: Career;
  dreamcareer?: DreamCareer;
  financialassistance: FinancialAssistance;
  toc?: TOC;
  ourlocation: OurLocation;
  degree: ProgrammeDegreeCard;
  criteria: CriteriaType;
  formId: string;
  school_category: SchoolCategoryType;
}

export interface CriteriaType {
  id: number;
  eligibility_criteria: string;
  Duration: string;
  semester_i: string;
  semester_ii: string;
  programme_fee_per_year: string;
  eligibility_utm_links: string;
}
export interface ProgrammeDegreeCard {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface SchoolCategory {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface HeroSection {
  id: number;
  subtitle: string;
  description: string;
  herobtn: ButtonType;
  heroimg: StrapiMedia;
  imgvideo: string;
  videofield: string;
  formField: string;
  formId: string;
}

export interface ProgrammeEligibility {
  id: number;
  elgibility: EligibilityItem[]; // keep typo as per API
  mobherobtn: ButtonType;
}

export interface EligibilityItem {
  id: number;
  title: string;
  subtitle: string;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

////////////////////// school Programme card info

export interface SCHOOLPROGRAMMECARDINFORESPONSE {
  data: ProgrammeCardData[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface ProgrammeCardData {
  id: number;
  documentId: string;
  title: string;
  programmeslug: string;
  criteria: Criteria;
  highlightitle: string;
}

export interface Criteria {
  id: number;
  Duration: string;
  eligibility_criteria: string;
  semester_i: string;
  semester_ii: string;
  programme_fee_per_year: string;
  eligibility_utm_links: string;
  degree: ProgrammeDegree;
}

export interface ProgrammeDegree {
  id: number;
  documentId: string;
  name: string;
  slug: string;
}

//////////////////////////// PHD Programmes
export interface SchoolPhDProgrammeResponse {
  data: PhdProgrammeCardData[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface PhdProgrammeCardData {
  id: number;
  documentId: string;
  heading: string;
  degree: string;
  updatedAt: string;
  phdslug: string;
  school_category: PhdProgrammeCategory;
  criteria: Criteria;
}

export interface PhdProgrammeCategory {
  id: number;
  documentId: string;
  name: string;
  slug: string;
}
