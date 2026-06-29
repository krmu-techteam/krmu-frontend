export const Companies = [
  {
    name: "Google",
    logo: "/international-admission/logos/google.png",
    left: "0%",
    top: "87%",
  },
  {
    name: "EY",
    logo: "/international-admission/logos/ey.png",
    left: "5%",
    top: "56%",
  },
  {
    name: "Microsoft",
    logo: "/international-admission/logos/microsoft.png",
    left: "14%",
    top: "25%",
  },
  {
    name: "Genpact",
    logo: "/international-admission/logos/genpact.png",
    left: "50%",
    top: "0%",
  },
  {
    name: "HCL",
    logo: "/international-admission/logos/hcl.png",
    left: "28%",
    top: "8%",
  },
  {
    name: "KPMG",
    logo: "/international-admission/logos/kpmg.png",
    left: "70%",
    top: "4%",
  },
  {
    name: "SafeXpress",
    logo: "/international-admission/logos/safeexpress.png",
    left: "85%",
    top: "22%",
  },
  {
    name: "Amazon",
    logo: "/international-admission/logos/amazon.png",
    left: "95%",
    top: "52%",
  },
  {
    name: "Dell",
    logo: "/international-admission/logos/dell.png",
    left: "100%",
    top: "87%",
  },
];

export const NetworkContent = [
  {
    number: "18,000+",
    title: "Alumni Network",
    desc: "A growing global community of successful graduates making an impact across industries.",
  },
  {
    number: "100+ Future-Focused",
    title: "Programmes",
    desc: "Choose from undergraduate, postgraduate, doctoral, and professional programmes across diverse disciplines.",
  },
];

export const internationalAdmissionHighlights = [
  {
    icon: "/international-admission/icons/degrees.png",
    title: `<strong>UGC-Recognised</strong><br /> Degrees`,
  },
  {
    icon: "/international-admission/icons/countries.png",
    title: `Students from <br /> <strong>Multiple Countries</strong>`,
  },
  {
    icon: "/international-admission/icons/industry.png",
    title: `<strong>Industry-Aligned</strong><br /> Programmes`,
  },
  {
    icon: "/international-admission/icons/scholarships.png",
    title: `<strong>Scholarships</strong><br /> Available`,
  },
  {
    icon: "/international-admission/icons/facilities.png",
    title: `Modern Hostels & <br class="hidden sm:block" />Campus <strong>Facilities</strong>`,
  },
  {
    icon: "/international-admission/icons/international-exposure.png",
    title: `<strong>Global Collaborations</strong> <br  /> & International <br /> Exposure`,
  },
];

export const globalLearningData = {
  title: "Global Learning Experience",
  subtitle: "International Collaborations",
  logos: [
    {
      name: "University of East Anglia",
      src: "/international-admission/logos/uea.png",
      width: 81,
      height: 82,
    },
    {
      name: "University of Plymouth",
      src: "/international-admission/logos/uop.png",
      width: 93,
      height: 59,
    },
    {
      name: "Hubei University",
      src: "/international-admission/logos/hu.png",
      width: 81,
      height: 82,
    },
    {
      name: "Middlesex University London",
      src: "/international-admission/logos/mul.png",
      width: 95,
      height: 50,
    },
    {
      name: "University of Houston",
      src: "/international-admission/logos/uoh.png",
      width: 135,
      height: 34,
    },
    {
      name: "Confucius Institute",
      src: "/international-admission/logos/confucius.png",
      width: 74,
      height: 74,
    },
    {
      name: "Universidad Católica de Temuco",
      src: "/international-admission/logos/uct.png",
      width: 147,
      height: 49,
    },
    {
      name: "University of Portsmouth",
      src: "/international-admission/logos/uop-2.png",
      width: 141,
      height: 54,
    },
    {
      name: "University of Ferrara",
      src: "/international-admission/logos/fu.png",
      width: 97,
      height: 79,
    },
  ],
};
// data/programmes.ts

export const internationalAdmissionSchools = [
  {
    id: 1,
    name: "School of Engineering and Technology",
    programmes: [
      {
        title: "B.Tech. Computer Science and Engineering",
        duration: "4 Years",
      },
      {
        title: "B.Tech. Computer Science and Engineering",
        duration: "3 Years",
        lateral: true,
      },
      {
        title:
          "B.Tech. Computer Science and Engineering (AI and ML) with academic support of IBM & powered by Microsoft Certifications",
        duration: "4 Years",
      },
      {
        title:
          "B.Tech. Computer Science and Engineering (AI & ML) with academic support of IBM & powered by Microsoft Certifications",
        duration: "3 Years",
        lateral: true,
      },
    ],
  },

  {
    id: 2,
    name: "School of Management and Commerce",
    programmes: [
      {
        title: "BBA",
        duration: "3 Years",
      },
      {
        title: "MBA",
        duration: "2 Years",
      },
    ],
  },

  {
    id: 3,
    name: "School of Basic & Applied Sciences",
    programmes: [],
  },

  {
    id: 4,
    name: "School of Medical & Allied Sciences",
    programmes: [],
  },

  {
    id: 5,
    name: "School of Physiotherapy and Rehabilitation Sciences",
    programmes: [],
  },

  {
    id: 6,
    name: "School of Emerging Media & Creator Economy",
    programmes: [],
  },

  {
    id: 7,
    name: "School of Architecture & Design",
    programmes: [],
  },

  {
    id: 8,
    name: "School of Liberal Arts",
    programmes: [],
  },

  {
    id: 9,
    name: "School of Agricultural Sciences",
    programmes: [],
  },

  {
    id: 10,
    name: "Ph.D",
    programmes: [],
  },

  {
    id: 11,
    name: "School of Legal Studies",
    programmes: [],
  },

  {
    id: 12,
    name: "School of Education",
    programmes: [],
  },
];

export type LifeInternationalAdmissionSection = {
  heading: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
};

export const lifeInternationalAdmissionData: LifeInternationalAdmissionSection =
  {
    heading: "Life as a BBA  Student at KRMU",
    description: "",
    image: {
      src: "/landingpage/common/collage.webp",
      alt: "Life as a PhD Scholar at KR Mangalam",
    },
  };

export const faqs = [
  {
    question: "Who can apply for international admission at KRMU?",
    answer:
      "Any student who has completed their qualifying examination (10+2 or equivalent) from outside India is eligible to apply for undergraduate programmes at KRMU. For postgraduate programmes, a relevant bachelor's degree is required. Students from all nationalities are welcome to apply for international admission in India.",
  },
  {
    question: "Is K.R. Mangalam University recognised in India?",
    answer:
      "Yes. K.R. Mangalam University is recognised by the University Grants Commission (UGC) and other relevant statutory bodies.",
  },
  {
    question: "What is the language of instruction? Do I need to know Hindi?",
    answer:
      "English is the primary language of instruction. Knowledge of Hindi is not mandatory.",
  },
  {
    question:
      "Is on-campus hostel accommodation available for international students?",
    answer:
      "Yes, separate hostel facilities are available for boys and girls with modern amenities.",
  },
  {
    question: "Can international students apply for scholarships?",
    answer:
      "Yes. Eligible international students can avail merit-based scholarships based on academic performance.",
  },
  {
    question: "What type of visa do I need to study in India?",
    answer:
      "International students must obtain a valid Student Visa before joining the programme.",
  },
];

// Bullet point item
export type BeginHubHighlight = {
  text: string;
};

// Image config
export type BeginHubImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

// Main Begin Hub section
export type BeginHubSection = {
  heading: string; // supports <br />
  description: string;
  highlights: BeginHubHighlight[];
  mapImage: BeginHubImage;
  formNote: string; // supports <br />
  formImage: BeginHubImage;
};
export const beginHubData: BeginHubSection = {
  heading: `Begin Your Global Academic <br /> Journey in India`,
  description:
    "Study at a university that combines academic excellence, innovation, industry exposure, and global opportunities.",
  highlights: [
    { text: "UGC Approved University" },
    { text: "NAAC A+ Accredited" },
    { text: "175+ PhDs Awarded" },
    { text: "₹60,000 Annual Fellowship" },
  ],
  mapImage: {
    src: "/landingpage/common/map.webp",
    alt: "Campus Location Map",
    width: 520,
    height: 300,
  },
  formNote: `No charges for enquiry. <br /> We will contact you within 24–48 hours.`,
  formImage: {
    src: "/landing/hero-form.png",
    alt: "Admission Form",
    width: 480,
    height: 640,
  },
};
