interface PlacementStat {
  value: string;
  label: string;
}

export const placementStats: PlacementStat[] = [
  {
    value: "10k+",
    label: "Students Trained",
  },
  {
    value: "9k+",
    label: "Built Resumes",
  },
  {
    value: "1:1",
    label: "Mentoring",
  },
  {
    value: "10+",
    label: "Expert Trainers",
  },
  {
    value: "4K",
    label: "Mock Interviews",
  },
  {
    value: "1240+",
    label: "Sessions Run",
  },
];

export interface TrainingYear {
  year: string;
  title: string;
  description: string;
}

export const trainingYears: TrainingYear[] = [
  {
    year: "Y1",
    title: "Foundation",
    description:
      "Aptitude, logic framing, and foundational communication skills necessary for professional discourse.",
  },
  {
    year: "Y2",
    title: "Domain & Tech",
    description:
      "Deep technical preparation aligned with industry standards and emerging technology stacks.",
  },
  {
    year: "Y3",
    title: "Company Prep",
    description:
      "Targeted preparation for specific organizational cultures, interview formats, and role expectations.",
  },
  {
    year: "Y4",
    title: "Placement",
    description:
      "Final polish, mock executive interviews, offer negotiation, and day-one readiness validation.",
  },
];

export interface TrainingModule {
  id: number;
  number: string;
  title: string;
  description: string;
  tags: string[];
}

export const trainingModules: TrainingModule[] = [
  {
    id: 1,
    number: "01",
    title: "Foundation",
    description:
      "Aptitude, logic framing, and foundational communication skills necessary for professional discourse.",
    tags: ["ATS", "Keywords", "Impact"],
  },
  {
    id: 2,
    number: "02",
    title: "GD Preparation",
    description:
      "Group discussion practice — assertive entry, active listening, turn-taking, and effective summarising with trainer feedback.",
    tags: ["Assertiveness", "Summary", "Dynamics"],
  },
  {
    id: 3,
    number: "03",
    title: "LinkedIn Optimization",
    description:
      "Keyword-rich headline, compelling About section, endorsements and networking strategy that generates recruiter interest.",
    tags: ["Profile", "Headline", "Networking"],
  },
  {
    id: 4,
    number: "04",
    title: "Interview Preparation",
    description:
      "End-to-end coaching: STAR-method answers, HR & technical rounds, mock sessions, and closing the interview strongly.",
    tags: ["Situational", "Leadership", "Ethics"],
  },
  {
    id: 5,
    number: "05",
    title: "Scenario-Based Q&A",
    description:
      "Real workplace situations — conflict, ethical dilemmas, leadership under pressure — turned into structured answers.",
    tags: ["STAR Method", "HR Round", "Mock"],
  },
  {
    id: 6,
    number: "06",
    title: "Communication Skills",
    description:
      "Verbal clarity, active listening, professional email writing, and presentation fluency for every workplace setting.",
    tags: ["Verbal", "Written", "Presentation"],
  },
];

export interface TrainingSemester {
  semester: string;
  modules: string[];
}

export interface TrainingProgram {
  name: string;
  semesters: TrainingSemester[];
}

export interface TrainingSchool {
  code: string;
  name: string;
  programs: TrainingProgram[];
}

export const trainingMatrix: TrainingSchool[] = [
  {
    code: "SOET",
    name: "School of Engineering & Technology",
    programs: [
      {
        name: "BTECH / BCA / BSC",
        semesters: [
          {
            semester: "SEM 3",
            modules: [
              "Verbal Ability (45 Hrs)",
              "Comprehensive Placement Prep. Program (30 Hrs)",
            ],
          },
          {
            semester: "SEM 4",
            modules: [
              "Communication & PD (45 Hrs)",
              "Open Elective – Competitive Aptitude (45 Hrs)",
            ],
          },
          {
            semester: "SEM 5",
            modules: ["Arithmetic & Reasoning Skills (45 Hrs)"],
          },
          {
            semester: "SEM 6",
            modules: [
              "Communication & PD (45 Hrs)",
              "Open Elective – Competitive Aptitude (45 Hrs)",
            ],
          },
        ],
      },
      {
        name: "MCA",
        semesters: [
          {
            semester: "SEM 1",
            modules: ["Verbal Ability (45 Hrs)"],
          },
          {
            semester: "SEM 2",
            modules: ["Communication & PD (45 Hrs)"],
          },
          {
            semester: "SEM 3",
            modules: ["Arithmetic & Reasoning Skills (45 Hrs)"],
          },
        ],
      },
    ],
  },

  {
    code: "SOMC",
    name: "School of Management & Commerce",
    programs: [
      {
        name: "BBA / BCOM",
        semesters: [
          {
            semester: "SEM 3",
            modules: ["Verbal Ability (45 Hrs)"],
          },
          {
            semester: "SEM 4",
            modules: ["Communication & PD (45 Hrs)"],
          },
          {
            semester: "SEM 5",
            modules: ["Arithmetic & Reasoning Skills (45 Hrs)"],
          },
        ],
      },
    ],
  },

  {
    code: "SMAS",
    name: "School of Media & Arts",
    programs: [
      {
        name: "UG PROGRAMS",
        semesters: [
          {
            semester: "SEM 3",
            modules: ["Communication Skills (45 Hrs)"],
          },
          {
            semester: "SEM 4",
            modules: ["Placement Preparation (45 Hrs)"],
          },
        ],
      },
    ],
  },

  {
    code: "SBAS",
    name: "School of Basic & Applied Sciences",
    programs: [
      {
        name: "UG PROGRAMS",
        semesters: [
          {
            semester: "SEM 3",
            modules: ["Verbal Ability (45 Hrs)"],
          },
          {
            semester: "SEM 4",
            modules: ["Quantitative Aptitude (45 Hrs)"],
          },
        ],
      },
    ],
  },

  {
    code: "SEMCE",
    name: "School of Mechanical & Civil Engineering",
    programs: [
      {
        name: "BTECH",
        semesters: [
          {
            semester: "SEM 3",
            modules: ["Technical Communication (45 Hrs)"],
          },
          {
            semester: "SEM 4",
            modules: ["Aptitude & Reasoning (45 Hrs)"],
          },
        ],
      },
    ],
  },

  {
    code: "SOAD",
    name: "School of Architecture & Design",
    programs: [
      {
        name: "UG PROGRAMS",
        semesters: [
          {
            semester: "SEM 3",
            modules: ["Communication Skills (45 Hrs)"],
          },
        ],
      },
    ],
  },

  {
    code: "SOLA",
    name: "School of Liberal Arts",
    programs: [
      {
        name: "UG PROGRAMS",
        semesters: [
          {
            semester: "SEM 3",
            modules: ["Professional Communication (45 Hrs)"],
          },
        ],
      },
    ],
  },

  {
    code: "SOLS",
    name: "School of Law",
    programs: [
      {
        name: "LAW PROGRAMS",
        semesters: [
          {
            semester: "SEM 3",
            modules: ["Interview Preparation (45 Hrs)"],
          },
        ],
      },
    ],
  },

  {
    code: "SOAS",
    name: "School of Allied Sciences",
    programs: [
      {
        name: "UG PROGRAMS",
        semesters: [
          {
            semester: "SEM 3",
            modules: ["Verbal Ability (45 Hrs)"],
          },
        ],
      },
    ],
  },

  {
    code: "SOHMCT",
    name: "School of Hospitality Management",
    programs: [
      {
        name: "UG PROGRAMS",
        semesters: [
          {
            semester: "SEM 3",
            modules: ["Communication & PD (45 Hrs)"],
          },
        ],
      },
    ],
  },

  {
    code: "SOED",
    name: "School of Education",
    programs: [
      {
        name: "EDUCATION PROGRAMS",
        semesters: [
          {
            semester: "SEM 3",
            modules: ["Professional Skills (45 Hrs)"],
          },
        ],
      },
    ],
  },

  {
    code: "SPRS",
    name: "School of Pharmacy & Research Sciences",
    programs: [
      {
        name: "UG PROGRAMS",
        semesters: [
          {
            semester: "SEM 3",
            modules: ["Career Readiness (45 Hrs)"],
          },
        ],
      },
    ],
  },
];




interface BootcampStat {
  value: string;
  label: string;
}

export const bootcampStats: BootcampStat[] = [
  {
    value: "2",
    label: "Bootcamp Run",
  },
  {
    value: "350 - 400",
    label: "Students Trained",
  },
  {
    value: "250 hours",
    label: "Sessions Conducted",
  },
  {
    value: "1200",
    label: "Mock Interviews · 1200+ Resumes Built",
  },
];



export interface Trainer {
  id: number;
  name: string;
  designation: string;
  image: string;
  profileUrl: string;
}

export const trainers: Trainer[] = [
  {
    id: 1,
    name: "Jyoti",
    designation: "Lead Employability & Coaching",
    image: "/placements/trainers/jyoti.webp",
    profileUrl: "#",
  },
  {
    id: 2,
    name: "Vijay Purohit",
    designation: "Lead Sr. Soft Skills Trainer",
    image: "/placements/trainers/vijay-purohit.webp",
    profileUrl: "#",
  },
  {
    id: 3,
    name: "Rohit Agarwal",
    designation: "Lead Sr. Aptitude Trainer",
    image: "/placements/trainers/rohit-agarwal.webp",
    profileUrl: "#",
  },
  {
    id: 4,
    name: "Pradeep",
    designation: "Soft Skills Trainer",
    image: "/placements/trainers/pradeep.webp",
    profileUrl: "#",
  },
  {
    id: 5,
    name: "Vikas Singh",
    designation: "Sr. Aptitude Trainer",
    image: "/placements/trainers/vikas-singh.webp",
    profileUrl: "#",
  },
  {
    id: 6,
    name: "Ankit Verma",
    designation: "Soft Skills Trainer",
    image: "/placements/trainers/ankit-verma.webp",
    profileUrl: "#",
  },
  {
    id: 7,
    name: "Trainer Name",
    designation: "Soft Skills Trainer",
    image: "/placements/trainers/trainer-7.webp",
    profileUrl: "#",
  },
  {
    id: 8,
    name: "Trainer Name",
    designation: "Aptitude Trainer",
    image: "/placements/trainers/trainer-8.webp",
    profileUrl: "#",
  },
];



export interface SkilledPartner {
  id: number;
  logo: string;
  companyType: string;
  hiring: string;
  job: string;
  duration: string;
}

export const skilledPartners: SkilledPartner[] = [
  {
    id: 1,
    logo: "/placements/partners/ibm.webp",
    companyType: "IT Services",
    hiring: "Hiring: 14",
    job: "Jobs: Associate Software Engineer",
    duration: "2019-20 – Till now",
  },
  {
    id: 2,
    logo: "/placements/partners/ibm.webp",
    companyType: "IT Services",
    hiring: "Hiring: 14",
    job: "Jobs: Associate Software Engineer",
    duration: "2019-20 – Till now",
  },
  {
    id: 3,
    logo: "/placements/partners/ibm.webp",
    companyType: "IT Services",
    hiring: "Hiring: 14",
    job: "Jobs: Associate Software Engineer",
    duration: "2019-20 – Till now",
  },
  {
    id: 4,
    logo: "/placements/partners/ibm.webp",
    companyType: "IT Services",
    hiring: "Hiring: 14",
    job: "Jobs: Associate Software Engineer",
    duration: "2019-20 – Till now",
  },
  {
    id: 5,
    logo: "/placements/partners/ibm.webp",
    companyType: "IT Services",
    hiring: "Hiring: 12",
    job: "Jobs: Software Engineer",
    duration: "2020-21 – Till now",
  },
  {
    id: 6,
    logo: "/placements/partners/ibm.webp",
    companyType: "IT Services",
    hiring: "Hiring: 10",
    job: "Jobs: Developer",
    duration: "2021-22 – Till now",
  },
];