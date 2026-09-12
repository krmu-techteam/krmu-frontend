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
  description: string;
}

export const trainers: Trainer[] = [
  {
    id: 1,
    name: "Jyoti",
    designation: "Lead Employability & Coaching​",
    image: "https://www.krmangalam.edu.in/images/trainers/jyoti.jpg",
    profileUrl: "#",
    description: `Jyoti Bhatia is an accomplished HR Leader, Talent
Acquisition and HRBP Specialist with 10 years of
experience across financial services, consulting,
healthcare, EdTech, legal, BPO, and insurance.
Currently associated with K.R. Mangalam University,
she leads career-readiness and talent-development
programs, mentoring a team of 13 and supporting
students through interviews, career coaching, resume 
building, and placement preparation. She holds a Post
Graduation in Human Resources Management from
IMT Ghaziabad and a B.A. in Business Administration.
Her certifications include International Certified
Career Coach L-1, Generative AI in HR, Generative AI
Mastermind, Compensation & Benefits, and AI Tools
Workshop.​`,
  },
  {
    id: 2,
    name: "Rohit Agarwal​",
    designation: "Lead Sr. Aptitude Trainer​​",
    image: "https://www.krmangalam.edu.in/images/trainers/rohit-agarwal.jpeg",
    profileUrl: "#",
    description: `Rohit Agarwal is a Senior Aptitude Trainer and Team
Lead – Aptitude at KR Mangalam University,
Gurugram, with 12+ years of experience in training
students and professionals for placements and
competitive examinations. He has trained 10,000+
students in placement readiness. His expertise
covers company placement papers, Banking, SSC,
CAT, and GATE examinations. Academically, he is
pursuing a PhD in Management and holds an MBA
in HR & Finance, M. \Tech. in Engineering Systems,
and B.Tech. in Electronics & Communication
Engineering.​​`,
  },
  {
    id: 3,
    name: "Vijay Purohit​",
    designation: "Lead Sr. Soft Skills Trainer​",
    image: "https://www.krmangalam.edu.in/images/trainers/vijay-purohit.jpg",
    profileUrl: "#",
    description: `Vijay Purohit is a Senior Soft Skills Trainer,
Learning & Development Specialist, and
Communication Coach with 10+ years of
academic and corporate training experience.
Currently leading Soft Skills and Verbal
Communication team at K.R. Mangalam
University, he specializes in communication,
public speaking, leadership, employability,
curriculum design, and coaching. He holds an
M.Com and a Master’s in Psychology, along with
certifications in IELTS, TOEFL, TEFL, Business
English, and Soft Skills Training. He has also
contributed to training projects for Google, Airtel,
Reliance, and other leading organizations.​​`,
  },
  {
    id: 4,
    name: "Ankit Verma",
    designation: "Soft Skills Trainer​​",
    image: "https://www.krmangalam.edu.in/images/trainers/ankit.jpg",
    profileUrl: "#",
    description: `Ankit Verma is a Language and Communication Skills
Trainer with 10+ years of experience in English
language training, soft skills, employability, and
career readiness. Currently associated with K.R.
Mangalam University, he has trained 10,000+
students and maintained a 92%+ placement rate
through industry-aligned training. He has also served
as a Branch Manager, mentoring facilitators and
managing operations. He holds an M.A. in English
Literature & Linguistics and an M.Com, along with
certifications in Soft Skills & Facilitation and Best
Facilitator. His additional training includes Advanced
English Grammar, Public Speaking, Email Writing, and
Conflict Management.​​​`,
  },
  {
    id: 5,
    name: "Vikas Singh",
    designation: "Sr. Aptitude Trainer​​",
    image: "https://www.krmangalam.edu.in/images/trainers/vikas-singh.jpg",
    profileUrl: "#",
    description: `Vikas Singh is a highly accomplished
Aptitude Trainer with 10+ years of experience,
specializing in Quantitative Aptitude, Logical
Reasoning, and Data Interpretation for
placements and competitive examinations.
Currently a Senior Aptitude Trainer at K R
Mangalam University, he contributes to
employability enhancement, capacity
building, and competitive exam mentoring.
He has trained 10,000+ students through
online and offline platforms and has worked
with reputed institutions including
Chandigarh University, Unacademy, IBS
Delhi, Career Leader, and Bharat IAS.​`,
  },
  {
    id: 6,
    name: "Sonam Yadav​",
    designation: "Soft Skills Trainer​​",
    image: "https://www.krmangalam.edu.in/images/trainers/sonam-yadav.jpg",
    profileUrl: "#",
    description: `Sonam Yadav is a Certified Soft Skills and
Corporate Trainer with 10+ years of experience in
communication, leadership, interpersonal skills,
and professional development. She has worked
with Chandigarh University, Moradabad Institute of
Technology, and Anamika’s English Academy and
currently working with K.R. Mangalam University.
Her expertise includes public speaking, interview
preparation, presentation skills, MTI neutralization,
voice modulation, accent training, and English
communication. She holds an MBA in HR &
International Business and a B.Tech in Civil
Engineering.​​`,
  },
  {
    id: 7,
    name: "Charu Dudeja​",
    designation: "Soft Skills Trainer​​",
    image: "https://www.krmangalam.edu.in/images/trainers/charu-dudeja.jpg",
    profileUrl: "#",
    description: `Charu Dudeja is a dynamic Soft Skills Trainer at
KR Mangalam University with 10+ years of
experience in training and student development.
She has worked with various NGOs, professional
institutions, and universities, trained 10,000+
students in workplace English and workplace
readiness. Her expertise includes
communication, interpersonal skills, public
speaking, motivation, confidence building, and
professional development. Through tailored
training programs and workshops, she helps
learners develop the skills and confidence
required for professional success.​​​`,
  },
  {
    id: 8,
    name: "Pradeep​",
    designation: "Soft Skills Trainer​​",
    image: "https://www.krmangalam.edu.in/images/trainers/pradeep.jpg",
    profileUrl: "#",
    description: `Pradeep Rai is a Soft Skills, English Language
Trainer and Communication Specialist with 6+
years of experience. He has trained 5,000+
learners in employability, communication,
leadership, teamwork, interview preparation,
and career readiness. He has worked with FEA
as branch manager and currently working with
K.R. Mangalam University as a soft skills
trainer. His expertise includes public
speaking, presentation skills, resume
building, emotional intelligence, conflict
resolution, and career counselling. He holds
an M.A. in English and an M.A. in Political
Science from IGNOU, along with a B.A. from
Delhi University. His certifications include
Communication at Work, Servant Leadership,
and Best Facilitation.​​​​`,
  },
  {
    id: 9,
    name: "Seerat Yaseen Bhat​",
    designation: "Aptitude Trainer​​",
    image: "https://www.krmangalam.edu.in/images/trainers/seerat-yaseen-bhat.jpg",
    profileUrl: "#",
    description: `Seerat Yaseen Bhat is a Results-driven Aptitude
Trainer and Campus Recruitment Training
Specialist with 2+ years of experience, having
trained 3,000+ students across four institutions.
He specializes in Quantitative Aptitude, Logical
Reasoning, Data Interpretation, placement
preparation, curriculum design, assessment, and
student mentoring. Currently working at K.R.
Mangalam University, he has also trained
students at MIT ADT University, byteXL, and
Chandigarh University. He holds an M.Sc. in
Physics and B.Tech. in Aerospace Engineering,
with strong proficiency in Excel, PowerPoint, and
data-driven training.​​​​​`,
  },
  {
    id: 10,
    name: "Pradyumn Singh​​",
    designation: "Aptitude Trainer​​",
    image: "https://www.krmangalam.edu.in/images/trainers/pradyumn-singh.jpg",
    profileUrl: "#",
    description: `A results-driven Aptitude, Logical Reasoning, and
Placement Readiness Trainer with 4+ years of
experience and a proven record of training 3,000+
students across Banking, SSC, UPSC-CSAT,
Defense, and Campus Placements. He
specializes in aptitude training, logical reasoning,
assessment design, mentoring, and placement
preparation. With a strong focus on learner-
centred strategies and measurable outcomes, he
has consistently helped students improve their
performance, strengthen problem-solving
abilities, and develop the confidence required to
succeed in competitive examinations and
campus recruitment processes.​​`,
  },
  {
    id: 11,
    name: "Deepak",
    designation: "Soft Skills Trainer​​​",
    image: "https://www.krmangalam.edu.in/images/trainers/deepak.jpg",
    profileUrl: "#",
    description: `Deepak is an experienced Soft Skills and
English Language Trainer with 10+ years of
experience in communication, personality
development, spoken English, public
speaking, and employability training. He has
worked with IIMT University as a PDP Trainer
and currently working with K.R. Mangalam
University. He has also worked with Freedom
Employability Academy as an English
Language and Soft Skills Trainer cum Branch
Manager, mentored 10000+ students. He holds
a B.A. in English Honours from Delhi University
and is pursuing an M.A. in English from IGNOU.
His certifications include TEFL, Soft Skills,
Master Trainer, Best Facilitator, and Practicum
Completion.​​​`,
  },
  {
    id: 12,
    name: "Arvind Singh​",
    designation: "Soft Skills Trainer​​​",
    image: "https://www.krmangalam.edu.in/images/trainers/arvind.jpg",
    profileUrl: "#",
    description: `Arvind Singh is an English Language and Soft
Skills Trainer with 7+ years of experience in
communication skills, English language training,
leadership, interview preparation, verbal ability,
workplace readiness, and placement preparation.
Currently working at K.R. Mangalam University, he
has previously worked with Freedom
Employability Academy, where he trained 6,000+
learners. He holds a B.A. in Political Science from
Delhi University and is pursuing an M.A. in English
from IGNOU. His certifications include, Advanced
Grammar, Communication Foundations,
Microsoft Office Specialist: PowerPoint
Associate.​​​​`,
  },
  {
    id: 13,
    name: "Deepak Kumar​",
    designation: "Aptitude Trainer​​",
    image: "https://www.krmangalam.edu.in/images/trainers/deepak-kumar.jpg",
    profileUrl: "#",
    description: `Deepak Kumar is a dynamic Aptitude Training
Professional and Master Trainer with 9+ years of
experience in aptitude training, mentoring,
content development, and student
assessment. Currently an Aptitude Trainer at
K.R. Mangalam University, he previously served
as Master Trainer – Aptitude at Chandigarh
University, where he trained and mentored
4,000+ students. His expertise includes
Quantitative Aptitude, Logical Reasoning, Data
Interpretation, CAT-level preparation,
placement training, trainer development, and
assessment management.​​​​​`,
  },
];

// cdc-team.data.ts
export const cdcTeamMembers = [
  {
    id: 1,
    name: "Dr. Amit Sharma",
    designation: "Director, Career Development Centre", 
    description: "Helping students build successful careers.",
    image: "/images/cdc/amit-sharma.jpg",
  },
  {
    id: 2,
    name: "Priya Singh",
    designation: "Career Counselor",
    description: "Guiding students from enrollment to employment.",
    image: "/images/cdc/priya-singh.jpg",
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
