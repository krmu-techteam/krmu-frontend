// whyKrmuData.ts

export interface ComparisonRow {
  parameter: string;
  krmu: string;
  typical: string;
}

export interface WhyKrmuData {
  title: string;
  description: string;
  comparisonTitle: string;
  parameterHeader: string;
  krmuHeader: string;
  typicalHeader: string;
  comparisonData: ComparisonRow[];
  bottomDescription1: string;
  bottomDescription2: string;
}

export const whyKrmuData: Record<string, WhyKrmuData> = {
  "b-tech-cse": {
    title: "Why Choose K.R. Mangalam University for B.Tech. CSE?",

    description:
      "Pursuing a B.Tech. CSE programme is not just about earning a degree; it is about building technical and professional skills with industry exposure and practical experience, which are essential for the highly competitive job market.",

    comparisonTitle:
      "A comparison of key academic, industry, and career-focused parameters that students consider while selecting a B.Tech. CSE programme.",

    parameterHeader: "Parameter",

    krmuHeader: "K.R. Mangalam University",

    typicalHeader: "Typical Private University in NCR",

    comparisonData: [
      {
        parameter: "Highest placement package",
        krmu: "56.6 LPA",
        typical: "8-20 LPA",
      },
      {
        parameter: "Campus recruiters",
        krmu: "800+ companies",
        typical: "100-300 companies",
      },
      {
        parameter: "Curriculum",
        krmu: "Industry-aligned and regularly updated",
        typical: "Generic AICTE syllabus",
      },
      {
        parameter: "Research output",
        krmu: "600+ Scopus/WoS papers, 100+ patents",
        typical: "Minimal or unreported",
      },
      {
        parameter: "Project-based credits",
        krmu: "15% of total credits",
        typical: "None or Typically 5-8%",
      },
      {
        parameter: "International exposure",
        krmu: "*Fully sponsored 2-week European summer school",
        typical: "Rarely offered",
      },
      {
        parameter: "Competitive programming lab",
        krmu: "Dedicated facility for product-company preparation",
        typical: "Not a standard offering",
      },
      {
        parameter: "Mentorship",
        krmu: "CTOs & startup founders as regular mentors",
        typical: "Faculty-only mentorship",
      },
      {
        parameter: "Industry certifications included",
        krmu: "Microsoft Azure AI, GCP Ecosystem, EC-Council CEH-AI pathways",
        typical: "Rarely included in the curriculum",
      },
      {
        parameter: "Location",
        krmu: "Sohna Road, Gurugram (near India's second largest IT hub)",
        typical: "Varies, often suburban or Tier-2",
      },
      {
        parameter: "Scholarship available",
        krmu: "Up to 100% for toppers and sports achievers",
        typical: "Limited, highly competitive",
      },
    ],

    bottomDescription1:
      "Located in Gurgaon, KRMU offers close proximity to corporate IT and business hubs in Gurugram such as DLF Cyber City, DLF Cyber Park, International Tech Park (Sec 59), Candor Tech Space and Vatika Business Park. This accessibility provides students with greater internship and networking opportunities and offers smooth hiring pipelines with Google, Microsoft, IBM, and hundreds of multinational tech companies.",

    bottomDescription2:
      "Whether your goal is securing a placement with leading technology companies, pursuing higher studies, contributing to research, or building a startup, the B.Tech. programmes are designed to help you develop the skills and experience required to achieve it.",
  },

  "bsc-hons-agriculture": {
    title:
      "Why K.R. Mangalam University for B.Sc. (Hons.) Agriculture in 2026–27?",

    description:
      "Pursuing a B.Sc. (Hons.) Agriculture programme is not just about earning a degree; it is about building scientific understanding, practical farming expertise, and industry-ready skills required to address the evolving challenges of modern agriculture and food systems.",

    comparisonTitle:
      "A comparison of key academic, field-based learning, industry exposure, and career-focused parameters that students consider while selecting a B.Sc. (Hons.) Agriculture programme.",

    parameterHeader: "Parameter",

    krmuHeader: "K.R. Mangalam University",

    typicalHeader: "Typical Private University in NCR",

    comparisonData: [
      {
        parameter: "Highest placement package",
        krmu: "56.6 LPA",
        typical: "8-20 LPA",
      },
      {
        parameter: "Campus recruiters",
        krmu: "800+ companies",
        typical: "100-300 companies",
      },
      {
        parameter: "Curriculum",
        krmu: "Industry-aligned and regularly updated",
        typical: "Generic AICTE syllabus",
      },
      {
        parameter: "Research output",
        krmu: "600+ Scopus/WoS papers, 100+ patents",
        typical: "Minimal or unreported",
      },
      {
        parameter: "Field training & farm exposure",
        krmu: "Dedicated instructional farms, lab-based learning, and rural field visits for hands-on training",
        typical: "Limited access to structured farm-based training",
      },
      {
        parameter: "Mentorship",
        krmu: "Guidance from agriculture experts, researchers, agribusiness professionals & industry practitioners",
        typical: "Primarily faculty-based mentorship",
      },
      {
        parameter: "Location advantage",
        krmu: "Gurugram – Access to Agri-Tech Firms & Agri-Business Hubs",
        typical: "Often Located in Rural / Less Industrial Areas",
      },
      {
        parameter: "Placement Record",
        krmu: "92% Placement Rate",
        typical: "55-65% Placement Rate",
      },
      {
        parameter: "Scholarship available",
        krmu: "Up to 100% for meritorious students, sports achievers & students across multiple categories",
        typical: "Limited and highly competitive",
      },
    ],

    bottomDescription1:
      "Located in Gurugram, KRMU offers close proximity to leading agribusiness companies, research institutions, and corporate hubs across the Delhi-NCR region, including corporate offices, agri-input firms, food processing units, and innovation centres. This accessibility provides students with valuable internships, field training, and networking opportunities, along with strong industry linkages with organisations such as seed companies, fertiliser and agrochemical firms, agri-tech startups, and government agricultural departments.",

    bottomDescription2:
      "Whether your goal is to pursue careers in agribusiness management, agricultural research, sustainable farming, food production systems, higher studies, or entrepreneurship in the agriculture sector, the B.Sc. (Hons.) Agriculture programme is designed to equip you with the scientific knowledge, practical exposure, and field-based skills required to achieve it.",
  },

  "bachelor-of-education-b-ed": {
    title: "Why K.R. Mangalam University for B.Ed. in 2026–27?",

    description:
      "Pursuing a Bachelor of Education is not just about earning a degree; it is about developing a strong foundation in educational theories, mastering modern teaching methodologies, and acquiring the pedagogical, communication, and classroom management skills needed to inspire learners and contribute effectively to the education sector.",

    comparisonTitle:
      "A comparison of key academic, teacher training, school internship, practical teaching experience, educational technology, research opportunities, and career-focused parameters that students consider while selecting a Bachelor of Education (B.Ed.) programme.",

    parameterHeader: "Parameter",

    krmuHeader: "K.R. Mangalam University",

    typicalHeader: "Typical Private University in NCR",

    comparisonData: [
      {
        parameter: "Highest placement package",
        krmu: "56.6 LPA",
        typical: "8-20 LPA",
      },
      {
        parameter: "Campus recruiters",
        krmu: "800+ companies",
        typical: "100-300 companies",
      },
      {
        parameter: "Research output",
        krmu: "600+ Scopus/WoS papers, 100+ patents",
        typical: "Minimal or unreported",
      },
      {
        parameter: "International exposure",
        krmu: "*Fully sponsored 2-week European summer school",
        typical: "Not a standard offering",
      },
      {
        parameter: "Teaching practice & hands-on exposure",
        krmu: "Extensive school internships, classroom teaching practice, lesson planning, microteaching, educational technology training, and community engagement programmes",
        typical:
          "Limited access to structured school internships and practical teaching experiences",
      },
      {
        parameter: "Mentorship",
        krmu: "Guidance from experienced educators, teacher trainers, academic researchers, school leaders, and education industry experts",
        typical: "Primarily faculty-based mentorship",
      },
      {
        parameter: "Location advantage",
        krmu: "Gurugram – Access to leading schools, educational institutions, EdTech companies, NGOs, and teacher training opportunities",
        typical:
          "Often located in areas with comparatively limited exposure to diverse educational institutions and professional networks",
      },
      {
        parameter: "Placement record",
        krmu: "92% Placement Rate",
        typical: "55–65% Placement Rate",
      },
      {
        parameter: "Scholarship available",
        krmu: "Up to 100% for meritorious students, sports achievers, and students across multiple categories",
        typical: "Limited and highly competitive",
      },
    ],

    bottomDescription1:
      "Located in Gurugram, KRMU offers close proximity to leading schools, educational institutions, EdTech companies, teacher training centres, NGOs, and academic organisations across the Delhi-NCR region. This strategic location provides students with valuable school internships, classroom teaching experience, and professional networking opportunities, along with strong industry linkages with public and private schools, educational consultancies, EdTech organisations, training institutes, and community education initiatives.",

    bottomDescription2:
      "Whether your goal is to build a career as a school teacher, educator, academic coordinator, curriculum developer, education consultant, or trainer, pursue higher studies and educational research, or contribute to the development of innovative teaching practices, the B.Ed. programme is designed to equip you with the pedagogical knowledge, classroom management skills, and practical teaching experience required to excel in the education sector.",
  },
};
