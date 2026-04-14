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
  PlacementSectionData,
  ProminentRecruit,
  SemesterSectionData,
  SixStepsSectionData,
  StatCard,
  TracksSectionData,
  WhySectionData,
} from "./contentype";

/** Add the PDF at: public/landingpage/bsc-finance-2026/BSc(Hons) Finance 2026-27.pdf */
// export const bscFinanceBrochureFileName = "BSc(Hons) Finance 2026-27.pdf";
export const bscFinanceBrochureFileName = "bsc-hons-finance-2026-27.pdf";
export const bscFinanceBrochureHref = `/landingpage/bsc-finance-2026/${encodeURIComponent(bscFinanceBrochureFileName)}`;

export const bscFinanceApplyHref = "https://admissions.krmangalam.edu.in/";

export const Hero: BscFinanceHeroContent = {
  schoolLabel: "SCHOOL OF MANAGEMENT & COMMERCE - GURUGRAM",
  heading: "BSc (Hons) Finance",
  subheading: "Four Years. Three Tracks. One Defining Career.",
  description:
    "Graduate with a degree, 12 months of paid industry experience, and a curriculum aligned to CFA, FRM & actuarial examinations",
  countdownTargetDate: "2026-04-30T23:59:59",
  lastDateLabel: "Last Date to apply - 30th April 2026",
  applyBtnLabel: "Apply for 2026-27 Batch",
  applyBtnHref: bscFinanceApplyHref,
  brochureBtnLabel: "Download Brochure",
  brochureBtnHref: bscFinanceBrochureHref,
  lpclName: "",
};

export const heroNavLinks: NavLink[] = [
  { label: "Apprenticeship", href: "#apprenticeship" },
  { label: "Tracks", href: "#tracks" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Admissions", href: "#admissions" },
];

export const heroStatCards: StatCard[] = [
  { value: "12mo", label: "Guaranteed Paid Apprenticeship" },
  { value: "\u20B950K", label: "Stipend per month (up to)" },
  { value: "\u20B910L", label: "Expected Median Placement" },
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
  brochureHref: bscFinanceBrochureHref,
  brochureLabel: "Download Brochure",
  applyHref: bscFinanceApplyHref,
  applyLabel: "Apply for 2026-27 Batch",
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
  brochureHref: bscFinanceBrochureHref,
  brochureLabel: "Download Brochure",
  applyHref: bscFinanceApplyHref,
  applyLabel: "Apply for 2026-27 Batch",
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
        "Equity Research Analyst",
        "Investment Banking",
        "Portfolio Management",
        "Corporate Finance / CFO",
        "Credit & Rating Analyst",
        "Risk Management",
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
        "Fintech / Data Scientist",
        "Derivatives Structurer",
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
  brochureHref: bscFinanceBrochureHref,
  brochureLabel: "Download Brochure",
  applyHref: bscFinanceApplyHref,
  applyLabel: "Apply for 2026-27 Batch",
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
      iconSrc: "/landingpage/bsc-finance-2026/icon-financial-modelling.png",
      title: "Financial Modelling & Valuation",
      description: "DCF, comparable analysis & deal structuring",
    },
    {
      iconSrc: "/landingpage/bsc-finance-2026/icon-technical-analysis.png",
      title: "Technical & Fundamental Analysis",
      description: "Chart patterns, price action & company valuation",
    },
    {
      iconSrc: "/landingpage/bsc-finance-2026/icon-equity-research.png",
      title: "Equity Research & Analysis",
      description: "Fundamental, technical & credit analysis",
    },
    {
      iconSrc: "/landingpage/bsc-finance-2026/icon-risk-management.png",
      title: "Risk Management",
      description: "Market, credit & operational risk frameworks",
    },
    {
      iconSrc: "/landingpage/bsc-finance-2026/icon-derivatives.png",
      title: "Derivatives & Portfolio Management",
      description: "Options pricing, hedging & asset allocation",
    },
    {
      iconSrc: "/landingpage/bsc-finance-2026/icon-ifrs.png",
      title: "IFRS & Financial Reporting",
      description: "Global accounting standards & compliance",
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
  brochureHref: bscFinanceBrochureHref,
  brochureLabel: "Download Brochure",
  applyHref: bscFinanceApplyHref,
  applyLabel: "Apply Now",
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
        "Financial Statement Analysis · Financial Maths 2 (Excel) · Business Statistics · Macroeconomics · Communication 2 · Python for Finance · Advanced Excel & VBA · Ethics 2 · Co-Curricular Activities",
    },
    {
      credits: "22 credits",
      title: "Track Begins",
      courses:
        "Common: Quant Methods (R) · Corporate Law · Behavioural Finance · Financial Markets · Modern Indian Language · Python, SQL & C++ · Technical Analysis. Track: Fixed Income & Equity Analysis 1 (Core/Quant) OR Life Contingencies 1 (Actuarial)",
    },
    {
      credits: "22 credits",
      title: "Deepening",
      courses:
        "Common: Alt Investments · Taxation · Derivatives · Financial Modelling · Soft Skills · Community Engagement. Track: Equity Analysis 2 / Life Contingencies 2 · Corporate Mgmt / Stochastic Processes",
    },
    {
      credits: "22 credits",
      title: "Advanced",
      courses:
        "Common: Portfolio Management · IFRS-1. Track: PE & VC / Derivatives Pricing · M&A / Econometrics · FinTech / Survival Models · ESG / Predictive Analytics",
    },
    {
      credits: "22 credits",
      title: "Apprenticeship Stint 1 [PAID]",
      courses:
        "Industry Apprenticeship – 6 months, paid, track-matched (18 cr). Research Project (4 cr). Exit option: BSc Finance.",
    },
    {
      credits: "22 credits",
      title: "The Honours Edge",
      courses:
        "Common: Risk Management · IFRS-2 · Bloomberg BMC. Track: Strategic Finance / Algo Trading / Loss Reserving · Intl Finance / Adv Strategies / Risk Modelling · Adv Portfolio Mgmt / Actuarial Practice",
    },
    {
      credits: "22 credits",
      title: "Apprenticeship Stint 2 [PAID]",
      courses:
        "Advanced Apprenticeship – 6 months, paid, senior level (18 cr). Research Project 2 (4 cr). Graduate: BSc (Hons) Finance.",
    },
  ],
  brochureHref: bscFinanceBrochureHref,
  brochureLabel: "Download Brochure",
  applyHref: bscFinanceApplyHref,
  applyLabel: "Apply Now",
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
        "Yes. KRMU has signed MoUs with companies across all three tracks. Every student gets a paid, track-matched apprenticeship in Semester 6 and Semester 8. The university arranges it, you don't have to find it yourself. This is governed under the Government of India's AEDP framework.",
    },
    {
      question: "How much stipend will I receive?",
      answer:
        "\u20B910,000 to \u20B950,000 per month, as per AEDP guidelines. The exact amount depends on the company and your role. Stipends are paid directly by the employer for each 6-month stint.",
    },
    {
      question: "Can I exit after 3 years?",
      answer:
        "Yes. After Semester 6, you can graduate with a BSc Finance. But we recommend completing Year 4, the Honours degree includes a second apprenticeship, Bloomberg certification, and advanced courses that employers value significantly more.",
    },
    {
      question: "Is this too mathematical for Commerce students?",
      answer:
        "No. Year 1 builds your maths and computing skills from scratch. The Core Finance track needs only standard aptitude. Quant and Actuarial tracks are more mathematical, but they are optional. You choose what fits you.",
    },
    {
      question: "Does this help with CFA, FRM, or actuarial exams?",
      answer:
        "Yes. The curriculum is built to cover large portions of the CFA (all 3 levels), FRM, IFoA, IAI, and SOA syllabi. You won't be starting from zero when you sit for these exams.",
    },
    {
      question: "What are the placement expectations?",
      answer:
        "\u20B910 LPA is the expected median starting salary. Employers include top investment banks, quant firms, insurance companies, and Big 4 firms. Most students are expected to receive offers through their apprenticeship organisations. Full placement support is provided for all graduates.",
    },
    {
      question: "How is this different from BBA or B.Com?",
      answer:
        "BBA and B.Com are general degrees. This is a specialist finance programme with three career tracks, global certification alignment, Python/R/Excel/Bloomberg from Day 1, and a 12-month guaranteed paid apprenticeship. The depth and industry integration are not comparable.",
    },
    {
      question: "Can Humanities students apply?",
      answer:
        "Yes. You need Mathematics in your Class 12th, that's the only subject requirement. The programme is open to Science, Commerce, and Humanities students. Year 1 builds all foundations from scratch.",
    },
    {
      question: "When do I choose my track?",
      answer:
        "In Year 2. All of Year 1 is common, giving you two full semesters to understand finance before you decide. Faculty mentors help you through the process.",
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
      subtitle: "100 seats only. Secure your place.",
    },
  ],
  brochureHref: bscFinanceBrochureHref,
  brochureLabel: "Download Brochure",
  applyHref: bscFinanceApplyHref,
  applyLabel: "Apply Now",
};

export const heroMarqueeData: HeroMarqueeSection = {
  messages: [
    "Only 100 Seats for 2026 Batch",
    "12 Months Guaranteed Paid Apprenticeship",
    "NAAC A Accredited University",
    "CFA \u00B7 FRM \u00B7 IFoA \u00B7 IAI \u00B7 SOA Aligned",
    "Stipend up to \u20B950,000/month",
    "Study in Gurugram \u2013 India's Financial Capital",
    "NEP 2020 Compliant",
    "AEDP Compliant",
  ],
  bgColor: "#e31e24",
  speedClass: "animate-marquee",
};

export const prominentRecruiters: ProminentRecruit[] = [
  { imgUrl: "/landingpage/bsc-finance-2026/core-finance/01-avendus.png", alt: "Avendus" },
  { imgUrl: "/landingpage/bsc-finance-2026/core-finance/02-deloitte.png", alt: "Deloitte" },
  { imgUrl: "/landingpage/bsc-finance-2026/core-finance/03-ey.png", alt: "EY" },
  { imgUrl: "/landingpage/bsc-finance-2026/core-finance/04-hdfc.png", alt: "HDFC" },
  { imgUrl: "/landingpage/bsc-finance-2026/core-finance/06-kpmg.png", alt: "KPMG" },
  { imgUrl: "/landingpage/bsc-finance-2026/core-finance/08-icici.png", alt: "ICICI" },
  { imgUrl: "/landingpage/bsc-finance-2026/core-finance/10-jp-morgan.png", alt: "JP Morgan" },
];

export const placementData: PlacementSectionData = {
  eyebrow: "Our Stars",
  heading: "The World's Leading Companies <br/> <span>Hire Our Talent</span>",
  description: "BSc (Hons) Finance students secure opportunities with top global firms through track-matched apprenticeships and placement-driven learning designed for real hiring success.",
  featuredStory: {
    id: 1,
    name: "Rishav Bakshi",
    company: "Placed at Ferrari Quebec",
    package: "₹56.6 LPA",
    image: "/landingpage/bsc-finance-2026/placements/p1.png",
    note: "A standout placement story that reflects global exposure, practical learning, and strong career outcomes."
  },
  stats: [
    { value: "100%", label: "Placement Assistance" },
    { value: "800+", label: "Companies Visited" },
    { value: "₹56.6L", label: "Highest Package" },
    { value: "18K+", label: "Alumni Base" }
  ],
  moreStories: [
    {
      id: 2,
      name: "Rishav Bakshi",
      company: "Ferrari Quebec",
      package: "₹56.6 LPA",
      packageLabel: "Highest Package",
      image: "/landingpage/bsc-finance-2026/placements/p1.png"
    },
    {
      id: 3,
      name: "Daksh Mehta",
      company: "UNIAS",
      package: "₹36 LPA",
      packageLabel: "Package",
      image: "/landingpage/bsc-finance-2026/placements/p2.png"
    },
    {
      id: 4,
      name: "Shourya Tyagi",
      company: "Autodesk",
      package: "₹34 LPA",
      packageLabel: "Package",
      image: "/landingpage/bsc-finance-2026/placements/p3.png"
    },
    {
      id: 5,
      name: "Vineet Verma",
      company: "Autodesk",
      package: "₹34 LPA",
      packageLabel: "Package",
      image: "/landingpage/bsc-finance-2026/placements/p4.png"
    },
    {
      id: 6,
      name: "Abhinav Anand",
      company: "Cargoflash",
      package: "₹24 LPA",
      packageLabel: "Package",
      image: "/landingpage/bsc-finance-2026/placements/p5.png"
    }
  ]
};
