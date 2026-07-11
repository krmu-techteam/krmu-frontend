// contentType.ts

import { LucideIcon } from "lucide-react";

export type HeroCTA = {
  label: string;
  href: string;
};

export type ImageType = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type PGProgramCard = {
  image: string;
  title: string;
  description: string;
  format: string; // Full-time / Part-time / Online
  duration: string; // e.g. "2 Years"
  eligibility: string;
  focus: string; // Specialization or Key Focus
  annualFee: string; // e.g. "Rs 1,20,000"
};

export type ProgramCardType = PGProgramCard[];

export type PGTestimonial = {
  brand: string;
  text: string;
  author: string;
  color: string;
  featured: boolean;
};

export type PGTestimonialsBlock = {
  header: {
    eyebrow: string;
    title: string;
    highlight: string;
    cta?: {
      label: string;
      href?: string;
    };
  };
  items: PGTestimonial[];
};

// export type PGTestimonial = {
//   brand: string;
//   text: string;
//   author: string;
//   color: string; // Tailwind / hex background class
//   featured: boolean;
// };

// export type ProgramCardType = {
//   image: string;
//   title: string;
//   description: string;
//   format: string; // e.g. Full-time / Part-time / Online
//   duration: string; // e.g. "2 Years"
//   eligibility: string;
//   focus: string; // e.g. Specialization or Key Focus
//   annualFee: string; // e.g. "Rs 1,20,000"
// }[];

export type HeroContent = {
  title: string;
  description: string;
  primaryCta: HeroCTA;
  secondaryCta: HeroCTA;
  image: ImageType;
  bgImage: string;
  ugHeroClsName: string;
};
// placementStats.types.ts

export type PlacementStatItem = {
  value: string;
  label: string;
};

export type PlacementStatsContent = {
  stats: PlacementStatItem[];
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export type RecruiterLogo = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ProminentRecruiterPerson = {
  name: string;
  package: string;
  profileImage: RecruiterLogo;
  companyLogo: RecruiterLogo;
  companyName: string;
};

export type ProminentRecruiterContent = {
  title: string;
  logos: RecruiterLogo[];
  people: ProminentRecruiterPerson[];
};

// aboutUs.types.ts

export type AboutUsContent = {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

// industryExperts.types.ts

export type IndustryExpertLogo = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type IndustryExpertsContent = {
  title: string;
  description: string;
  experts?: IndustryExpertLogo[];
};

// businessLeader.types.ts

export type Course = {
  id: string;
  title: string;
  desc: string;
  color: string;
};

export type Semester = {
  id: number;
  title: string;
  duration: string;
  subtitle: string;
  heading: string;
  description: string;
  courses: Course[];
};

export type BusinessLeaderContent = {
  sectionTitle: string;
  sectionDescription: string;
  semesters: Semester[];
};

// prospectusDownload.types.ts

export type ProspectusDownloadContent = {
  title: string;
  description: string;
  button: {
    label: string;
    href?: string;
  };
  image: {
    src: string;
    alt: string;
  };
};

// admissionProcess.types.ts

export type AdmissionStep = {
  step: string;
  title: string;
  points: string[];
};

export type admisCTA = {
  label: string;
  href?: string;
};

export type AdmissionProcessContent = {
  eyebrow: string;
  title: string;
  description: string;
  cta: admisCTA;
  steps: AdmissionStep[];
};

// mbaComparison.types.ts

export type ComparisonRow = {
  icon: LucideIcon;
  label: string;
  traditional: string;
  krmu: {
    title: string;
    desc: string;
  };
};

export type MbaComparisonContent = {
  title: string;
  highlight: string;
  description: string;
  traditionalHeader: string;
  krmuHeader: string;
  rows: ComparisonRow[];
};

export type BusinessHubHighlight = {
  text: string;
};

// Image config
export type BusinessHubImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

// Main Business Hub section
export type BusinessHubSection = {
  heading: string; // supports <br />
  description: string;
  highlights: BusinessHubHighlight[];
  mapImage: BusinessHubImage;
  formNote: string; // supports <br />
  formImage: BusinessHubImage;
};

// Single FAQ item
export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

// FAQ Section
export type FAQSectionData = {
  eyebrow: string;
  heading: string;
  description: string;
  faqs: FAQItem[];
};

// Single facility item
export type ScholarFacility = {
  id: number;
  title: string;
};

// Main section type
export type LifeAsPhDScholarSection = {
  heading: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  facilities: ScholarFacility[];
  additionalFacilities: ScholarFacility[];
};

// CTA button type
export type SectionCTA = {
  label: string;
  href: string;
};

export type ComeToLifeSlideItem = {
  image: string;
  alt?: string;
};

// CTA type (reuse across sections if you want)
// export type SectionCTA = {
//   label: string;
//   href: string;
// };

// Main Come To Life section
export type ComeToLifeSection = {
  heading: string; // supports <br />
  description: string; // supports <br />
  footerText: string; // supports <br />
  cta: SectionCTA;
  slides: ComeToLifeSlideItem[];
};
