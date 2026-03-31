// Shared with law-2026/contentype.ts — re-exported here for local usage
export type { HeroMarqueeSection } from "../law-2026/contentype";

// Nav link
export type NavLink = {
  label: string;
  href: string;
};

// Single stat card displayed in the hero
export type StatCard = {
  value: string;
  label: string;
};

// Single stint card for the Apprenticeship section
export type StintCard = {
  badge: string;
  duration: string;
  description: string;
  stipend: string;
};

// Data shape for the Apprenticeship section
export type ApprenticeshipSectionData = {
  headingLine1: string;
  headingLine2Start: string;
  headingLine2Highlight: string;
  headingLine2End: string;
  descriptionLines: string[];
  stints: StintCard[];
  footnote: string;
  brochureHref: string;
  brochureLabel: string;
  applyHref: string;
  applyLabel: string;
};

// Single feature card for the "Why" section
export type FeatureCard = {
  number: string;
  title: string;
  description: string;
};

// Data shape for the full "Why" section
export type WhySectionData = {
  headingRed: string;
  headingDark: string;
  features: FeatureCard[];
  brochureHref: string;
  brochureLabel: string;
  applyHref: string;
  applyLabel: string;
};

// Single career track card for the Tracks section
export type TrackCard = {
  icon: "briefcase" | "chart" | "actuarial";
  title: string;
  alignedWith: string;
  bestFor: string;
  careerRoles: string[];
};

// Data shape for the full Tracks section
export type TracksSectionData = {
  badge: string;
  headingDark: string;
  headingRed: string;
  tracks: TrackCard[];
  brochureHref: string;
  brochureLabel: string;
  applyHref: string;
  applyLabel: string;
};

// Data shape for the "Aligned with" curriculum section (white bg)
export type AlignedWithSectionData = {
  headingRed: string;
  headingDark: string;
  logos: Array<{ src: string; alt: string }>;
  alignmentLines: string[];
};

// Data shape for the "Organisations" section (black bg)
export type OrganisationsSectionData = {
  headingLine1: string;
  headingHighlight: string;
  headingLine2: string;
  headingLine3: string;
  statLabel: string;
  statValue: string;
  tabs: Array<{ label: string }>;
};

// Single card for the Curriculum section
export type CurriculumCard = {
  iconSrc: string;
  title: string;
  description: string;
};

// Data shape for the Curriculum section
export type CurriculumSectionData = {
  headingRed: string;
  headingDark: string;
  cards: CurriculumCard[];
  footerText: string;
};

// Single timeline year entry
export type TimelineYear = {
  year: string;
  title: string;
  description: string;
};

// Single degree pathway item
export type DegreePathwayItem = {
  label: string;
  value: string;
};

// Data shape for the Pathway section
export type PathwaySectionData = {
  headingRed: string;
  headingDark: string;
  pathwayLabel: string;
  pathwayItems: DegreePathwayItem[];
  timeline: TimelineYear[];
  brochureHref: string;
  brochureLabel: string;
  applyHref: string;
  applyLabel: string;
};

// Single semester accordion item
export type SemesterItem = {
  credits: string;
  title: string;
  courses: string;
};

// Data shape for the Semester section
export type SemesterSectionData = {
  headingLine1: string;
  headingLine2: string;
  headingLine3: string;
  semesters: SemesterItem[];
  brochureHref: string;
  brochureLabel: string;
  applyHref: string;
  applyLabel: string;
};

// Single FAQ item
export type FaqItem = {
  question: string;
  answer: string;
};

// Data shape for the FAQ section
export type FaqSectionData = {
  badge: string;
  headingDark: string;
  headingRed: string;
  description: string;
  faqs: FaqItem[];
};

// Single step item for the Six Steps section
export type SixStepItem = {
  title: string;
  subtitle: string;
  subtitleHref?: string;
};

// Data shape for the Six Steps section
export type SixStepsSectionData = {
  headingRed: string;
  headingDark: string;
  steps: SixStepItem[];
  brochureHref: string;
  brochureLabel: string;
  applyHref: string;
  applyLabel: string;
};

// Custom hero content for BSc Finance 2026 (unique design — no form widget)
export type BscFinanceHeroContent = {
  schoolLabel: string;
  heading: string;
  subheading: string;
  description: string;
  countdownTargetDate: string;
  lastDateLabel: string;
  applyBtnLabel: string;
  applyBtnHref: string;
  brochureBtnLabel: string;
  brochureBtnHref: string;
  lpclName: string; // CSS class for MainSection background
};
