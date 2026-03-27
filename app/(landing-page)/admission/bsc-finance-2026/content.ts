import {
  AlignedWithSectionData,
  ApprenticeshipSectionData,
  BscFinanceHeroContent,
  CurriculumSectionData,
  FaqSectionData,
  FeatureCard,
  HeroMarqueeSection,
  NavLink,
  OrganisationsSectionData,
  PathwaySectionData,
  SemesterSectionData,
  SixStepsSectionData,
  StatCard,
  TracksSectionData,
  WhySectionData,
} from "./contentype";

export const Hero: BscFinanceHeroContent = {
  schoolLabel: "SCHOOL OF MANAGEMENT & COMMERCE - GURUGRAM",
  heading: "BSc (Hons) Finance",
  subheading: "Four Years. Three Tracks. One Defining Career.",
  description:
    "Graduate with a degree, 12 months of paid industry experience, and a curriculum aligned to CFA, FRM & actuarial examinations",
  countdownTargetDate: "2026-04-30T23:59:59",
  lastDateLabel: "Last Date to apply - 30th April 2026",
  applyBtnLabel: "Apply for 2026-27 Batch",
  applyBtnHref: "#apply-section",
  brochureBtnLabel: "Download Brochure",
  brochureBtnHref: "#",
  lpclName: "MainSection",
};

export const heroNavLinks: NavLink[] = [
  { label: "Apprenticeship", href: "#apprenticeship" },
  { label: "Tracks", href: "#tracks" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Admissions", href: "#admissions" },
];

export const heroStatCards: StatCard[] = [
  { value: "12", label: "Guaranteed Paid Apprenticeship" },
  { value: "\u20B910L", label: "Expected Median Placement" },
  { value: "\u20B950K", label: "Stipend per month (up to)" },
  { value: "100", label: "Seats Only" },
];

export const whyFeatures: FeatureCard[] = [
  {
    number: "1",
    title: "12 months paid apprenticeship",
    description:
      "Two stints. Two companies. Guaranteed by KRMU through signed MoUs. AEDP governed.",
  },
  {
    number: "2",
    title: "Three career tracks from Year 2",
    description:
      "Core Finance · Quantitative Finance · Actuarial Science. Pick the direction that fits you.",
  },
  {
    number: "3",
    title: "CFA · FRM · Actuarial aligned",
    description:
      "Curriculum mirrors professional exam syllabi. Graduate ahead of everyone else.",
  },
  {
    number: "4",
    title: "Python · R · Excel · VBA · SQL · Market Analytics",
    description:
      "Not electives. Core from Semester 1. Because every finance role demands them.",
  },
  {
    number: "5",
    title: "Designed by industry + academia",
    description:
      "CFA charterholders, qualified actuaries, quant professionals, and Big 4 practitioners built every course.",
  },
  {
    number: "6",
    title: "Gurugram — India's financial capital",
    description:
      "500+ MNCs within 20 km. Big 4. Global banks. Your apprenticeship is around the corner.",
  },
];

export const whySection: WhySectionData = {
  headingRed: "You won't find another",
  headingDark: "BSc that does all of this.",
  features: whyFeatures,
  brochureHref: "#",
  brochureLabel: "Download Brochure",
  applyHref: "#apply-section",
  applyLabel: "Apply for 2025-26 Batch",
};

export const apprenticeshipSection: ApprenticeshipSectionData = {
  headingLine1: "Most graduates start as freshers.",
  headingLine2Start: "Ours ",
  headingLine2Highlight: "start with 12 months",
  headingLine2End: " on their CV.",
  descriptionLines: [
    "Every student is placed into a paid, track-matched industry apprenticeship through KRMU's signed MoUs.",
    "This is not something you figure out. This is what KRMU has figured out for you.",
  ],
  stints: [
    {
      badge: "STINT 1 · SEMESTER 6",
      duration: "6 months",
      description:
        "Your first step into professional finance. Real organisation, real projects, real stipend.",
      stipend: "Stipend: ₹10,000 – ₹50,000/month",
    },
    {
      badge: "STINT 2 · SEMESTER 8",
      duration: "6 months",
      description:
        "Senior-level. Different company. Deeper role. Top performers receive pre-placement offers.",
      stipend: "Stipend: ₹10,000 – ₹50,000/month",
    },
  ],
  footnote:
    "Governed by AEDP (Government of India). Actual stipend depends on the organisation and role.",
  brochureHref: "#",
  brochureLabel: "Download Brochure",
  applyHref: "#apply-section",
  applyLabel: "Apply for 2025-26 Batch",
};

export const tracksSection: TracksSectionData = {
  badge: "CHOOSE YOUR DIRECTION",
  headingDark: "One programme.",
  headingRed: "Three paths to the top.",
  tracks: [
    {
      icon: "briefcase",
      title: "Core Finance",
      alignedWith: "CFA & FRM Program",
      bestFor: "Investment, banking & capital markets",
      careerRoles: [
        "Risk Management",
        "Equity Research Analyst",
        "Corporate Finance / CFO",
        "Portfolio Management",
        "Investment Banking",
        "Credit & Rating Analyst",
      ],
    },
    {
      icon: "chart",
      title: "Quantitative Finance",
      alignedWith: "Quantitative & Computational Methods",
      bestFor: "Data-driven finance & algorithmic trading",
      careerRoles: [
        "Quantitative Analyst",
        "Algorithmic Trader",
        "Risk Quant",
        "Derivatives Structurer",
        "Fintech / Data Scientist",
        "Hedge Fund Researcher",
      ],
    },
    {
      icon: "actuarial",
      title: "Actuarial Science",
      alignedWith: "IFoA (UK) · IAI (India) · SOA (USA)",
      bestFor: "Insurance, risk & actuarial profession",
      careerRoles: [
        "Actuarial Analyst",
        "Pension Fund Actuary",
        "Risk Modeller",
        "Reinsurance Actuary",
        "Regulatory Actuary",
        "Consulting Actuary",
      ],
    },
  ],
  brochureHref: "#",
  brochureLabel: "Download Brochure",
  applyHref: "#apply-section",
  applyLabel: "Apply for 2025-26 Batch",
};

export const alignedWithSection: AlignedWithSectionData = {
  headingRed: "Your coursework",
  headingDark: " is their syllabus.",
  logos: [
    { src: "/landingpage/bsc-finance-2026/logo-cfa.png", alt: "CFA Institute" },
    { src: "/landingpage/bsc-finance-2026/logo-frm.png", alt: "FRM (GARP)" },
    { src: "/landingpage/bsc-finance-2026/logo-ifoa.png", alt: "Institute and Faculty of Actuaries" },
    { src: "/landingpage/bsc-finance-2026/logo-iai.png", alt: "Institute of Actuaries of India" },
    { src: "/landingpage/bsc-finance-2026/logo-soa.png", alt: "Society of Actuaries" },
  ],
  alignmentLines: [
    "CFA Institute · Aligned to all 3 Levels",
    "FRM (GARP) · Level 1 & 2 overlap across all tracks",
    "IFoA (UK) / IAI (India) / SOA (USA)  ·· 6 to 8 exams alignment from the actuarial curriculum",
  ],
};

export const organisationsSection: OrganisationsSectionData = {
  headingLine1: "Organisations that",
  headingHighlight: "hire",
  headingLine2: " finance, quant &",
  headingLine3: "actuarial talent.",
  statLabel: "Expected Median",
  statValue: "10 LPA",
  tabs: [
    { label: "Core Finance" },
    { label: "Quantitative Finance" },
    { label: "Actuarial Science" },
  ],
};

export const curriculumSection: CurriculumSectionData = {
  headingRed: "Graduate ready.",
  headingDark: " Not graduate hoping.",
  cards: [
    {
      iconSrc: "/landingpage/bsc-finance-2026/icon-python.png",
      title: "Python",
      description: "Financial analysis, automation & data science",
    },
    {
      iconSrc: "/landingpage/bsc-finance-2026/icon-r-programming.png",
      title: "R Programming",
      description: "Statistical modelling & econometrics",
    },
    {
      iconSrc: "/landingpage/bsc-finance-2026/icon-excel-vba.png",
      title: "Excel & VBA",
      description: "Financial modelling, macros & dashboards",
    },
    {
      iconSrc: "/landingpage/bsc-finance-2026/icon-sql.png",
      title: "SQL",
      description: "Data querying, management & analytics",
    },
    {
      iconSrc: "/landingpage/bsc-finance-2026/icon-equity-research.png",
      title: "Equity Research & Analysis",
      description: "Fundamental, technical & credit analysis",
    },
    {
      iconSrc: "/landingpage/bsc-finance-2026/icon-bloomberg.png",
      title: "Bloomberg Terminal",
      description: "Market data, analytics & BMC certification",
    },
    {
      iconSrc: "/landingpage/bsc-finance-2026/icon-risk-management.png",
      title: "Risk Management",
      description: "Market, credit & operational risk frameworks",
    },
    {
      iconSrc: "/landingpage/bsc-finance-2026/icon-financial-modelling.png",
      title: "Financial Modelling & Valuation",
      description: "DCF, comparable analysis & deal structuring",
    },
    {
      iconSrc: "/landingpage/bsc-finance-2026/icon-ifrs.png",
      title: "IFRS & Financial Reporting",
      description: "Global accounting standards & compliance",
    },
    {
      iconSrc: "/landingpage/bsc-finance-2026/icon-derivatives.png",
      title: "Derivatives & Portfolio Management",
      description: "Options pricing, hedging & asset allocation",
    },
  ],
  footerText: "+ 12 Months of Real Industry Experience Across Two Organisations",
};

export const pathwaySection: PathwaySectionData = {
  headingRed: "From classroom",
  headingDark: "to corner office.",
  pathwayLabel: "DEGREE PATHWAY",
  pathwayItems: [
    {
      label: "3-Year Exit:",
      value: "BSc Finance (1 apprenticeship, 6 months)",
    },
    {
      label: "4-Year Honours:",
      value: "BSc (Hons) Finance (2 apprenticeships, 12 months)",
    },
    {
      label: "Further:",
      value: "MBA · CFA · IFoA · SOA · MSc Finance · PhD",
    },
  ],
  timeline: [
    {
      year: "Year 1",
      title: "Build.",
      description:
        "Finance, accounting, statistics, Python, R, Excel. Common for all students.",
    },
    {
      year: "Year 2",
      title: "Specialise.",
      description:
        "Choose Core Finance, Quant, or Actuarial. Deep skill-building begins.",
    },
    {
      year: "Year 3",
      title: "Work.",
      description:
        "Advanced courses + 6 months paid apprenticeship. Exit option: BSc Finance.",
    },
    {
      year: "Year 4",
      title: "Lead.",
      description:
        "Bloomberg BMC, algo trading, risk modelling + 6 months senior apprenticeship. Graduate: BSc (Hons) Finance.",
    },
  ],
  brochureHref: "#",
  brochureLabel: "Download Brochure",
  applyHref: "#apply-section",
  applyLabel: "Apply now",
};

export const semesterSection: SemesterSectionData = {
  headingLine1: "220 credits.",
  headingLine2: "8 semesters.",
  headingLine3: "Every one counts.",
  semesters: [
    {
      credits: "22 credits",
      title: "Foundations",
      courses:
        "Corporate Finance · Financial Maths 1 · Financial Accounting · Microeconomics · Communication 1 · R & Python · Excel Basics · Ethics & Professionalism 1 · Indian Knowledge Systems",
    },
    {
      credits: "22 credits",
      title: "Analytical Toolkit",
      courses:
        "Financial Maths 2 · Statistics & Probability · Econometrics · Financial Modelling · Communication 2 · Python for Finance · Macro & International Finance · Ethics & Professionalism 2",
    },
    {
      credits: "22 credits",
      title: "Track Begins",
      courses:
        "Track Core 1 · Track Core 2 · Corporate Finance 2 · Portfolio Theory · Fixed Income · Derivatives 1 · Excel Advanced · Research Methods",
    },
    {
      credits: "22 credits",
      title: "Deepening",
      courses:
        "Track Core 3 · Track Core 4 · Risk Management · Financial Statement Analysis · Alternative Investments · Bloomberg Fundamentals · Elective 1",
    },
    {
      credits: "22 credits",
      title: "Advanced",
      courses:
        "Track Core 5 · Track Core 6 · Derivatives 2 · Behavioural Finance · Fintech & Regulation · Elective 2 · Industry Project",
    },
    {
      credits: "22 credits",
      title: "Apprenticeship Stint 1 [PAID]",
      courses:
        "6-month paid industry apprenticeship at a KRMU MoU partner organisation. Evaluated on professional competency and project delivery.",
    },
    {
      credits: "22 credits",
      title: "The Honours Edge",
      courses:
        "Bloomberg BMC · Algorithmic Trading · Risk Modelling · Global Markets · Honours Research · Elective 3 · Leadership & Governance",
    },
    {
      credits: "22 credits",
      title: "Apprenticeship Stint 2 [PAID]",
      courses:
        "6-month senior paid industry apprenticeship. Students take on greater responsibility. Final project submitted for honours evaluation.",
    },
  ],
  brochureHref: "#",
  brochureLabel: "Download Brochure",
  applyHref: "#apply-section",
  applyLabel: "Apply now",
};

export const faqSection: FaqSectionData = {
  badge: "COMMON QUESTIONS",
  headingDark: "Everything You Need",
  headingRed: "to Know.",
  description:
    "The curriculum is structured to give you maximum exemption-readiness and exam alignment with the world's leading finance and actuarial credentials.",
  faqs: [
    {
      question: "Is the Actuarial or Quantitative Finance track compulsory?",
      answer:
        "No. Core Finance is the default track. Quantitative Finance and Actuarial Science are optional, you choose in Year 2 based on your interest, with faculty guidance. No one is pushed into a track they don't want.",
    },
    {
      question: "Is the paid apprenticeship guaranteed?",
      answer:
        "Yes. Every student is placed into a paid, track-matched industry apprenticeship through KRMU's signed MoUs with partner organisations.",
    },
    {
      question: "How much stipend will I receive?",
      answer:
        "Stipends range from ₹10,000 to ₹50,000 per month depending on the organisation, role, and track. Governed under AEDP (Government of India).",
    },
    {
      question: "Can I exit after 3 years?",
      answer:
        "Yes. You can exit with a BSc Finance degree after 3 years (with 1 apprenticeship). Staying for Year 4 earns you BSc (Hons) Finance with 2 apprenticeships.",
    },
    {
      question: "Is this too mathematical for Commerce students?",
      answer:
        "No. The programme is accessible to all streams. Quantitative modules are scaffolded from the ground up. Commerce students do very well here.",
    },
    {
      question: "Does this help with CFA, FRM, or actuarial exams?",
      answer:
        "Yes. The curriculum is aligned to CFA Level 1 & 2, FRM Part 1, IFoA, IAI, and SOA syllabi. You'll finish coursework that overlaps significantly with these certifications.",
    },
    {
      question: "What are the placement expectations?",
      answer:
        "Graduates are placed in finance, quant, and actuarial roles. Expected median package is 10 LPA. Our apprenticeship partners often convert students to full-time hires.",
    },
    {
      question: "How is this different from BBA or B.Com?",
      answer:
        "BBA and B.Com are broad management degrees. This is a specialist finance programme — deeper, more technical, with guaranteed paid industry experience built in.",
    },
    {
      question: "Can Humanities students apply?",
      answer:
        "Yes, all streams are welcome provided Mathematics was studied in the qualifying examination. Minimum 50% aggregate marks required.",
    },
    {
      question: "When do I choose my track?",
      answer:
        "Track selection happens at the beginning of Year 2 (Semester 3), after you have completed foundational coursework and received faculty counselling.",
    },
  ],
};

export const sixStepsSection: SixStepsSectionData = {
  headingRed: "Six steps",
  headingDark: "to your seat.",
  steps: [
    {
      title: "Start your application",
      subtitle: "admissions.krmangalam.edu.in",
      subtitleHref: "https://admissions.krmangalam.edu.in",
    },
    {
      title: "Complete payment",
      subtitle: "Pay the application fee",
    },
    {
      title: "Appear for KREE entrance exam",
      subtitle: "On-campus or online assessment",
    },
    {
      title: "Personal interaction with faculty",
      subtitle: "Interview with programme faculty",
    },
    {
      title: "Receive admission offer",
      subtitle: "Conditional or confirmed offer letter",
    },
    {
      title: "Get enrolled",
      subtitle: "60 seats only. Secure your place.",
    },
  ],
  brochureHref: "#",
  brochureLabel: "Download Brochure",
  applyHref: "#apply-section",
  applyLabel: "Apply now",
};

export const heroMarqueeData: HeroMarqueeSection = {
  messages: [
    "NAAC A+ Accredited University",
    "CFA \u00B7 FRM \u00B7 IFoA \u00B7 IAI \u00B7 SOA Aligned",
    "Stipend up to \u20B950,000",
    "12 Months Guaranteed Paid Apprenticeship",
    "100 Seats Only",
  ],
  bgColor: "#e31e24",
  speedClass: "animate-marquee",
};
