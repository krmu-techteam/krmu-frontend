import { ButtonType, StrapiMedia } from "@/lib/types/common";
import { HeroConfig } from "../constants";
import { ParagraphBlock } from "@/lib/types/about";

export interface HeroSectionData {
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

export interface HeroSectionProps {
  title: string;
  highlightitle: string;
  heroSection: HeroSectionData;
  formId?: string;
  slug: string;
  dreamcareerSection?: {
    highestpackagenum: string;
    highestpackagetitle: string;
    campusrecruitersnum: string;
    campusrecruitertitle: string;
    placementassistnum: string;
    placementassisttitle: string;
    heading: string;
  };
  logos?: StrapiMedia[];
}

export interface DreamCareerSection {
  dreamcareerSection?: {
    highestpackagenum: string;
    highestpackagetitle: string;
    campusrecruitersnum: string;
    campusrecruitertitle: string;
    placementassistnum: string;
    placementassisttitle: string;
    heading: string;
  };
};

export interface CinematicRecruiterStripProps {
  dreamcareerSection?: {
    heading: string;
  };
  logos?: StrapiMedia[];
};

export interface CinematicHeroSectionProps{
  title: string;
  highlightitle: string;
  heroSection: HeroSectionData;
  formId?: string;
  slug: string;
  config: HeroConfig;
};

export interface CinematicFormProps {
  formId?: string;
  isMobile?: boolean;
};

export interface RecruiterCarouselProps {
  logos: StrapiMedia[] | undefined;
  showNumberOfSlides?: string;
};


// Programs Scope
export interface ProgrammeScopeType {
  id: number;
  scopeheading: string;
  scopecontent: string;
  scopeimg: StrapiMedia;
  scopebtn: ButtonType;
  scopeFormId: string;
  scopeContainerId: string;
}
export interface ProgrammeHeroSection {
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
export interface ProgrammeScopeSectionProps {
  scopeData: ProgrammeScopeType;
  heroSection?: ProgrammeHeroSection;
  allowedFormSlugs: string[];
  slug: string;
};

// Programme Highlight Section
export interface HiglightCard {
  id: number;
  title: string;
  subtitle: string;
  highlightimage: StrapiMedia;
}

export interface ProgrammeHighlightSectionProps {
  heading: string;
  highlightHeading: string;
  desc: string;
  highlights: HiglightCard[];
  slug?: string;
};

// Admission Process Section
export interface AdmisionProcessCard {
  id: number;
  title: string;
  description: string;
  mobcounting: string;
  link: string;
}

export interface AdmissionProcessSectionProps {
  heading: string;
  highlight: string;
  desc: string;
  deskimg: StrapiMedia;
  admissionCards: AdmisionProcessCard[];
  admisbtn: ButtonType;
  slug?: string;
};

// Lab Facilities Section
export interface LabCard {
  id: number;
  title: string;
  description: string;
}
export interface LabFacilitiesSectionProps {
  heading: string;
  highlight: string;
  btn: ButtonType;
  labimg: StrapiMedia;
  labcontent: ParagraphBlock[];
  labcards: LabCard[];
  slug: string;
};

// Financial Assistance Section
export interface FinancialPartnerLogoProps {
  logo: StrapiMedia;
}
export interface FinancialPointCardProps {
  point: string;
  className?: string;
}
export interface FinancialAssistanceSectionProps {
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
  logos: StrapiMedia[];
}

// Frequently Asked Questions Section
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
export interface FrequentlyAskedQuestionsSectionProps {
  heading: string;
  highlight: string;
  desc: string;
  tocfaqs: TOCFAQ[];
  tocimg: StrapiMedia;
  tocbtn: ButtonType;
};

export interface FAQAccordionProps {
  tocfaqs: TOCFAQ[];
  tocbtn?: ButtonType;
};