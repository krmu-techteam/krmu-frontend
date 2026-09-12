export interface RecordLogo {
  url: string;
  width: number;
  height: number;
  alt: string;
}

export interface SchoolWiseSummaryItem {
  code: string;
  schoolName: string;
  eligible: number;
  placed: number;
  placementRate: string;
  maxCtc: string;
  avgCtc: string;
  medianCtc: string;
  recordlogos: RecordLogo[];
}

export const Recordslogos: RecordLogo[] = [
  {
    url: "/placements/records/hcl.png",
    width: 104,
    height: 24,
    alt: "HCL",
  },
  {
    url: "/placements/records/cvent.png",
    width: 104,
    height: 24,
    alt: "Cvent",
  },
  {
    url: "/placements/records/hul.png",
    width: 104,
    height: 24,
    alt: "HUL",
  },
  {
    url: "/placements/records/tcs.png",
    width: 104,
    height: 24,
    alt: "TCS",
  },
  {
    url: "/placements/records/wipro.png",
    width: 104,
    height: 24,
    alt: "Wipro",
  },
];

export const SchoolWiseSummary: SchoolWiseSummaryItem[] = [
  {
    code: "SPRS",
    schoolName: "School of Physiotherapy and Rehabilitation Sciences",
    eligible: 3,
    placed: 3,
    placementRate: "100%",
    maxCtc: "34 LPA",
    avgCtc: "10.50 LPA",
    medianCtc: "9.20 LPA",
    recordlogos: Recordslogos,
  },
  {
    code: "SMAS",
    schoolName: "School of Medical and Allied Sciences",
    eligible: 127,
    placed: 89,
    placementRate: "70%",
    maxCtc: "34 LPA",
    avgCtc: "10.50 LPA",
    medianCtc: "9.20 LPA",
    recordlogos: Recordslogos,
  },
  {
    code: "SOMC",
    schoolName: "School of Management and Commerce",
    eligible: 321,
    placed: 266,
    placementRate: "83%",
    maxCtc: "34 LPA",
    avgCtc: "10.50 LPA",
    medianCtc: "9.20 LPA",
    recordlogos: Recordslogos,
  },
  {
    code: "SOLS",
    schoolName: "School of Legal Studies",
    eligible: 93,
    placed: 65,
    placementRate: "70%",
    maxCtc: "34 LPA",
    avgCtc: "10.50 LPA",
    medianCtc: "9.20 LPA",
    recordlogos: Recordslogos,
  },
  {
    code: "SJMC",
    schoolName: "School of Jurnalism and Mass Communication",
    eligible: 18,
    placed: 17,
    placementRate: "94%",
    maxCtc: "34 LPA",
    avgCtc: "10.50 LPA",
    medianCtc: "9.20 LPA",
    recordlogos: Recordslogos,
  },
  {
    code: "SOHS",
    schoolName: "School of Humanities",
    eligible: 135,
    placed: 120,
    placementRate: "89%",
    maxCtc: "34 LPA",
    avgCtc: "10.50 LPA",
    medianCtc: "9.20 LPA",
    recordlogos: Recordslogos,
  },
  {
    code: "SOET",
    schoolName: "School of Engineering and Technology",
    eligible: 225,
    placed: 192,
    placementRate: "85%",
    maxCtc: "34 LPA",
    avgCtc: "10.50 LPA",
    medianCtc: "9.20 LPA",
    recordlogos: Recordslogos,
  },
  {
    code: "SOET",
    schoolName: "School of Education (SOED)",
    eligible: 29,
    placed: 22,
    placementRate: "76%",
    maxCtc: "34 LPA",
    avgCtc: "10.50 LPA",
    medianCtc: "9.20 LPA",
    recordlogos: Recordslogos,
  },
  {
    code: "SBAS",
    schoolName: "School of Basic and Applied Sciences",
    eligible: 29,
    placed: 21,
    placementRate: "72%",
    maxCtc: "34 LPA",
    avgCtc: "10.50 LPA",
    medianCtc: "9.20 LPA",
    recordlogos: Recordslogos,
  },
  {
    code: "SOAD",
    schoolName: "School of Architecture and Design",
    eligible: 21,
    placed: 14,
    placementRate: "67%",
    maxCtc: "34 LPA",
    avgCtc: "10.50 LPA",
    medianCtc: "9.20 LPA",
    recordlogos: Recordslogos,
  },
  {
    code: "SOAS",
    schoolName: "School of Agricultural Sciences",
    eligible: 14,
    placed: 7,
    placementRate: "50%",
    maxCtc: "34 LPA",
    avgCtc: "10.50 LPA",
    medianCtc: "9.20 LPA",
    recordlogos: Recordslogos,
  },
];

export interface HiringSector {
  name: string;
  percentage: number;
}

export const hiringSectors: HiringSector[] = [
  {
    name: "IT / ITES",
    percentage: 31,
  },
  {
    name: "BFSI",
    percentage: 10,
  },
  {
    name: "E-commerce",
    percentage: 11,
  },
  {
    name: "Manufacturing",
    percentage: 9,
  },
  {
    name: "Management",
    percentage: 19,
  },
  {
    name: "Others",
    percentage: 20,
  },
];

export interface OfficialReport {
  year: number;
  title: string;
  pdfUrl: string;
}

export const OfficialReports: OfficialReport[] = [
  {
    year: 2026,
    title: "2026 Final Report",
    pdfUrl: "/placements/reports/2026-final-report.pdf",
  },
  {
    year: 2025,
    title: "2025 Final Report",
    pdfUrl: "/placements/reports/2025-final-report.pdf",
  },
  {
    year: 2024,
    title: "2024 Final Report",
    pdfUrl: "/placements/reports/2024-final-report.pdf",
  },
];

export interface Definition {
  title: string;
  description: string;
}

export const DefinitionsData: Definition[] = [
  {
    title: "Academic year ",
    description:
      "Labelled by year of graduation. 2025-26 means students graduating in 2026. ",
  },
  {
    title: "Eligible student",
    description:
      "A final-year student who has registered with CDC, opted into placement, and meets the published academic criteria.",
  },
  {
    title: "Placed student",
    description:
      "A student holding at least one written offer for a role commencing after graduation. Counted once, however many offers they hold.",
  },
  {
    title: "Placement percentage ",
    description:
      "Placed ÷ eligible × 100. Never calculated against total enrolment. ",
  },
  {
    title: "Median CTC",
    description:
      "The middle value of all accepted offers for the cohort in question.",
  },
  {
    title: "Highest CTC",
    description:
      "The single highest accepted offer, published with the programme and school, and flagged where international.",
  },
  {
    title: "Recruiter",
    description:
      "A company that made at least one offer in the year in question. A company that visited, presented or registered but made no offer is not a recruiter for this purpose. ",
  },
  {
    title: "Pre-placement offer ",
    description:
      "An offer arising from an internship, counted separately and also included in placed totals. ",
  },
  {
    title: "Internship ",
    description:
      "Counted and reported separately. Never combined into placement figures.  ",
  },
  {
    title: "Student trained",
    description:
      "A unique student who has completed a training module. Attendances are counted separately and are not interchangeable. ",
  },
  {
    title: "Placement assistance",
    description:
      "The support the University provides. Distinct from placement, and the only claim that may be made at 100%. ",
  },
];

export interface PlacementRecord {
  id: number;
  name: string;
  course: string;
  category: "PLACEMENT" | "PPO";
  role: string;
  ctc: string;
  company: string;
}

export const PlacementRecords: PlacementRecord[] = [
  {
    id: 1,
    name: "Bharti Kataria",
    course: "BBA (H) (Research), School of Management & Commerce",
    category: "PLACEMENT",
    role: "Finance Executive",
    ctc: "3.45 LPA",
    company: "Evergreen Bikes",
  },
  {
    id: 2,
    name: "Tushar Kataria",
    course:
      "BBA (H) LSCM Safepress (Research), School of Management & Commerce",
    category: "PLACEMENT",
    role: "Assistant Manager Sales",
    ctc: "4.5 LPA",
    company: "Saigrace Logistics Pvt Ltd",
  },
  {
    id: 3,
    name: "Devansh Rana",
    course:
      "BCA (H) (Spl AI & DS) (Research), School of Engineering & Technology",
    category: "PPO",
    role: "Digital Marketer",
    ctc: "3.12 LPA",
    company: "HP27 Nutrition",
  },
  {
    id: 4,
    name: "Kunal Yadav",
    course: "Sales Executive, School of Management & Commerce",
    category: "PLACEMENT",
    role: "Sales Executive",
    ctc: "3.2 LPA",
    company: "Tech Mahindra",
  },
  {
    id: 5,
    name: "Mukul Saini",
    course: "BBA (H) (Research), School of Management & Commerce",
    category: "PLACEMENT",
    role: "Associate Consultant",
    ctc: "3.5 LPA",
    company: "Tech Mahindra",
  },
  {
    id: 6,
    name: "Rohit",
    course: "BBA (H) (Research), School of Management & Commerce",
    category: "PLACEMENT",
    role: "Sales Executive",
    ctc: "3.2 LPA",
    company: "Tech Mahindra",
  },
  {
    id: 7,
    name: "Yagya Ahuja",
    course: "BBA (H) (Research), School of Management & Commerce",
    category: "PPO",
    role: "Finance & Account Executive",
    ctc: "6–8 LPA",
    company: "Universal Law Linkers",
  },
  {
    id: 8,
    name: "Yuvraj",
    course: "BBA (H) (Research), School of Management & Commerce",
    category: "PLACEMENT",
    role: "Sales Executive",
    ctc: "3.2 LPA",
    company: "Tech Mahindra",
  },
  {
    id: 9,
    name: "Sahil",
    course: "MCA, School of Engineering & Technology",
    category: "PLACEMENT",
    role: "Customer Operations",
    ctc: "3 LPA",
    company: "Pokus AI",
  },
  {
    id: 10,
    name: "Latika Sharma",
    course:
      "BBA (H) LSCM Safepress (Research), School of Management & Commerce",
    category: "PLACEMENT",
    role: "Marketing Executive",
    ctc: "3.75 LPA",
    company: "Renewtronic Technologies Pvt Ltd",
  },
];
