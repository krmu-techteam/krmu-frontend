// content.ts

import {
  Award,
  BookOpen,
  Briefcase,
  GraduationCap,
  Lightbulb,
} from "lucide-react";

import {
  HeroContent,
  PGTestimonialsBlock,
  ProgramCardType,
  AboutUsContent,
  AdmissionProcessContent,
  BusinessHubSection,
  BusinessLeaderContent,
  ComeToLifeSection,
  FAQSectionData,
  IndustryExpertsContent,
  LifeAsPhDScholarSection,
  MbaComparisonContent,
  PlacementStatsContent,
  ProminentRecruiterContent,
  ProspectusDownloadContent,
} from "../PGType";

export const heroContent: HeroContent = {
  title: `<span class="sm:hidden"><span class="text-[#fcd404] text-3xl md:text-5xl lg:text-8xl font-bold">
        MBA
      </span> Admissions Open 2026–27</span>
      <span class="hidden sm:block">
             ADMISSIONS <br>
OPEN FOR<br><span class="text-[#fcd404] text-2xl sm:text-3xl md:text-5xl lg:text-8xl font-bold">MBA </span> <br>

 Programmes <br />2026-27</span>
          `,
  description: `Learn from the top 1% of industry <br /> experts from EY, IIDE, and IBM`,
  primaryCta: {
    label: "Apply Now",
    href: "#",
  },
  secondaryCta: {
    label: "Download Prospectus",
    href: "#",
  },
  image: {
    src: "",
    alt: "MBA Program",
    width: 600,
    height: 400,
  },
  bgImage: "/wp-content/landingpage/mba-2026/mba.webp",
  ugHeroClsName: "MainSection",
};

export const placementStatsContent: PlacementStatsContent = {
  stats: [
    {
      value: "56.6 LPA",
      label: "Highest Package",
    },
    {
      value: "800+",
      label: "Top Recruiters",
    },
    {
      value: "₹27 Cr",
      label: "Worth of Scholarships",
    },

    {
      value: "92%",
      label: "Placement Record",
    },
  ],
  image: {
    src: "/wp-content/landingpage/mba-2026/statsimg.webp",
    alt: "Graduate Placement",
    width: 400,
    height: 700,
  },
};

export const prominentRecruiterContent: ProminentRecruiterContent = {
  title: "Our Prominent Recruiters",

  logos: [
    {
      src: "/wp-content/landingpage/mba-2026/recruiters/amazon.svg",
      alt: "amazon",
      width: 160,
      height: 40,
    },
    {
      src: "/wp-content/landingpage/mba-2026/recruiters/deliotte.svg",
      alt: "deliotte",
      width: 160,
      height: 40,
    },
    {
      src: "/wp-content/landingpage/mba-2026/recruiters/apple.svg",
      alt: "Apple",
      width: 160,
      height: 40,
    },
    {
      src: "/wp-content/images/tcslogo.png",
      alt: "tcs",
      width: 160,
      height: 40,
    },
    {
      src: "/wp-content/images/accen.png",
      alt: "accenture",
      width: 160,
      height: 40,
    },
    {
      src: "/wp-content/images/infosys.svg",
      alt: "infosys",
      width: 160,
      height: 40,
    },
  ],

  people: [
    {
      name: "Rishav Bakshi",
      package: "56.6 LPA",
      profileImage: {
        src: "/wp-content/landingpage/mca-2026/highlights/56.6.jpeg",
        alt: "Rishav Bakshi",
        width: 160,
        height: 40,
      },
      companyName: "Ferrari Québec",
      companyLogo: {
        src: "/landingpage/bba-2026/prominent/accenture.png",
        alt: "Ferrari Québec",
        width: 120,
        height: 50,
      },
    },
    {
      name: "Daksh Mehta",
      package: "36 LPA",
      profileImage: {
        src: "/wp-content/landingpage/mca-2026/highlights/1.png",
        alt: "Daksh Mehta",
        width: 160,
        height: 160,
      },
      companyName: "UNIAS",
      companyLogo: {
        src: "/landingpage/bba-2026/prominent/accenture.png",
        alt: "Accenture",
        width: 120,
        height: 50,
      },
    },
    {
      name: "Abhinav Anand",
      package: "24 LPA",
      profileImage: {
        src: "/wp-content/landingpage/mca-2026/highlights/2.png",
        alt: "Abhinav Anand",
        width: 160,
        height: 160,
      },
      companyName: "CargoFlash",
      companyLogo: {
        src: "/landingpage/bba-2026/prominent/accenture.png",
        alt: "Accenture",
        width: 120,
        height: 50,
      },
    },
    {
      name: "Abhinav Sinha",
      package: "20 LPA",
      profileImage: {
        src: "/wp-content/landingpage/mca-2026/highlights/4.png",
        alt: "Abhinav Sinha",
        width: 160,
        height: 160,
      },
      companyName: "Nirmata Technologies Pvt. Ltd.",
      companyLogo: {
        src: "/landingpage/bba-2026/prominent/accenture.png",
        alt: "Nirmata Technologies Pvt. Ltd.",
        width: 120,
        height: 50,
      },
    },
    {
      name: "Ujjwal Singh",
      package: "18 LPA",
      profileImage: {
        src: "/wp-content/landingpage/mca-2026/highlights/7.png",
        alt: "Ujjwal Singh",
        width: 160,
        height: 160,
      },
      companyName: "Anglo-Eastern Ltd.",
      companyLogo: {
        src: "/landingpage/bba-2026/prominent/accenture.png",
        alt: "Nirmata Technologies Pvt. Ltd.",
        width: 120,
        height: 50,
      },
    },
    {
      name: "Shashank Gupta",
      package: "18 LPA",
      profileImage: {
        src: "/wp-content/landingpage/mca-2026/highlights/5.png",
        alt: "Shashank Gupta",
        width: 160,
        height: 160,
      },
      companyName: "Anglo-Eastern Ltd.",
      companyLogo: {
        src: "/landingpage/bba-2026/prominent/accenture.png",
        alt: "Nirmata Technologies Pvt. Ltd.",
        width: 120,
        height: 50,
      },
    },
    {
      name: "Darshit Raghav",
      package: "17.4 LPA",
      profileImage: {
        src: "/wp-content/landingpage/mca-2026/highlights/3.png",
        alt: "Darshit Raghav",
        width: 160,
        height: 160,
      },
      companyName: "Debcor Engineering",
      companyLogo: {
        src: "/landingpage/bba-2026/prominent/accenture.png",
        alt: "Nirmata Technologies Pvt. Ltd.",
        width: 120,
        height: 50,
      },
    },
    {
      name: "Samarpan Upadhyaya",
      package: "13 LPA",
      profileImage: {
        src: "/wp-content/landingpage/mca-2026/highlights/6.png",
        alt: "Samarpan Upadhyaya",
        width: 160,
        height: 160,
      },
      companyName: "Upgrad ",
      companyLogo: {
        src: "/landingpage/bba-2026/prominent/accenture.png",
        alt: "Nirmata Technologies Pvt. Ltd.",
        width: 120,
        height: 50,
      },
    },
  ],
};

export const aboutUsContent: AboutUsContent = {
  title: "About Us",
  description: `<p>K.R. Mangalam University is a prominent university in Gurugram that was founded in 2013 under the Haryana Private University Act. 
  The university's NAAC Grade "A" accreditation demonstrates a strong dedication to academic excellence, 
  high-quality instruction, and continuous development.</p> <br /><p>The MBA programmes provided by K.R. Mangalam University, via their curriculum, offer strong professional growth and excellent earning potential by combining fundamental business concepts with dedicated hands-on learning experience. The university's MBA programmes are very popular among individuals who desire jobs with a global perspective.</p>`,
  image: {
    src: "/wp-content/landingpage/mba-2026/aboutus.webp",
    alt: "K.R. Mangalam University Campus",
    width: 600,
    height: 300,
  },
};

export const industryExpertsContent: IndustryExpertsContent = {
  title: "Learn from Industry Leaders",
  description:
    "K.R. Mangalam University takes pride in collaborating with the industry leaders who offer top-notch hands-on learning experiences to students.",

  experts: [
    {
      src: "/wp-content/landingpage/common/ibm.png",
      alt: "IBM",
      width: 300,
      height: 200,
    },
    {
      src: "/wp-content/landingpage/mba-2026/learn-from/iide.png",
      alt: "IBM",
      width: 300,
      height: 200,
    },
    // {
    //   src: "/wp-content/landingpage/mba-2026/learn-from/grant-thornton.png",
    //   alt: "IBM",
    //   width: 300,
    //   height: 200,
    // },
    {
      src: "/wp-content/landingpage/mba-2026/learn-from/eydark.webp",
      alt: "IBM",
      width: 300,
      height: 200,
    },
  ],
};

export const businessLeaderContent: BusinessLeaderContent = {
  sectionTitle: "Why Choose KRMU for MBA Courses?",

  sectionDescription:
    "K.R. Mangalam University (KRMU) offers MBA programmes built on an industry-aligned curriculum with strong practical exposure through live projects, case studies, and internships with leading organisations such as EY and IBM. With diverse specialisation options, a strong focus on modern technologies including AI, Tableau, and R, and distinctive opportunities like fully sponsored European summer schools for selected students, KRMU prepares graduates to excel in dynamic and competitive corporate roles.",

  semesters: [
    {
      id: 1,
      title: "",
      duration: "",
      subtitle:
        "Programmes are designed in collaboration with Industry Leaders and Professional Experts.",
      heading: "",
      description: "",
      courses: [
        // {
        //   id: "01",
        //   title: "Management Theory & Practice",
        //   desc: "Understanding core management principles and applying them to real organizational situations.",
        //   color: "bg-blue-100",
        // },
      ],
    },
    {
      id: 2,
      title: "",
      duration: "",
      subtitle:
        "The curriculum integrates real-world industry practices for a holistic learning experience.",
      heading: "",
      description: "",
      courses: [
        // {
        //   id: "01",
        //   title: "Management Theory & Practice",
        //   desc: "Understanding core management principles and applying them to real organizational situations.",
        //   color: "bg-blue-100",
        // },
      ],
    },
    {
      id: 3,
      title: "",
      duration: "",
      subtitle:
        "Entrepreneurship and Incubation Centre and Design Thinking Lab, designed to nurture innovative startup ideas",
      heading: "",
      description: "",
      courses: [
        // {
        //   id: "01",
        //   title: "Management Theory & Practice",
        //   desc: "Understanding core management principles and applying them to real organizational situations.",
        //   color: "bg-blue-100",
        // },
      ],
    },
    {
      id: 4,
      title: "",
      duration: "",
      subtitle:
        "Students get an opportunity to attend a fully sponsored 2-week summer school at a Prestigious European University.",
      heading: "",
      description: "",
      courses: [
        // {
        //   id: "01",
        //   title: "Management Theory & Practice",
        //   desc: "Understanding core management principles and applying them to real organizational situations.",
        //   color: "bg-blue-100",
        // },
      ],
    },
    {
      id: 5,
      title: "",
      duration: "",
      subtitle:
        "100% placement assistance with Internship and Placement opportunities in leading companies.",
      heading: "",
      description: "",
      courses: [
        // {
        //   id: "01",
        //   title: "Management Theory & Practice",
        //   desc: "Understanding core management principles and applying them to real organizational situations.",
        //   color: "bg-blue-100",
        // },
      ],
    },
  ],
};

export const PGProgrammeCard: ProgramCardType = [
  {
    image: "/wp-content/landingpage/mba-2026/progs/mba-ibm.webp",
    title: "MBA with academic support from IBM",
    // description:
    //   "The MBA with Academic Support from IBM is a specialised business degree course integrating IBM's state-of-the-art tools, an industry-aligned curriculum, expert sessions, and certifications to provide students with practical skills and enhanced career readiness for tech-driven roles.",
    description: "",
    format: "",
    duration: "2 Years",
    eligibility:
      "Candidate must have a bachelor's degree or equivalent degree from a recognised university with a minimum of 50% aggregate marks.",
    focus: "",
    annualFee: "Rs 3,00,000",
  },
  {
    image: "/wp-content/landingpage/mba-2026/progs/mba-fintech.webp",
    title: "MBA (Fintech) with academic support of Ernst & Young (EY)",
    // description:
    //   "This course prepares students for a career in the rapidly expanding and changing industry of technology-enabled finance. For this, the programme seeks to equip students with the fundamental skills necessary to comprehend and develop AI-driven financial products and services.",
    description: "",
    format: "",
    duration: "2 Years",
    eligibility:
      "Candidate must have a bachelor's degree or equivalent degree from a recognised university with a minimum of 50% aggregate marks.",
    focus: "",
    annualFee: "Rs 3,50,000",
  },
  {
    image: "/wp-content/landingpage/mba-2026/progs/mba-dg.webp",
    title: "MBA (Digital Marketing) with academic support of IIDE",
    // description:
    // "Developed in partnership with IIDE, the course’s curriculum seeks to address the changing needs of the digital marketing industry. It enables students to make strategies that help in navigating entrepreneurial marketing difficulties in today’s digital world.",
    description: "",
    format: "",
    duration: "2 Years",
    eligibility:
      "Candidate must have a bachelor's degree or equivalent degree from a recognised university with a minimum of 50% aggregate marks.",
    focus: "",
    annualFee: "Rs 3,50,000",
  },
];

export const prospectusDownloadContent: ProspectusDownloadContent = {
  title: "Download the MBA Programme Prospectus",
  description:
    "Download the MBA programme prospectus to explore programme details, specialisations, curriculum, and career prospects.",
  button: {
    label: "Download Now",
    href: "#", // can be file link or NPF popup later
  },
  image: {
    src: "/wp-content/landingpage/mba-2026/download.webp",
    alt: "MBA Prospectus",
  },
};
export const PGTestimonialsData: PGTestimonialsBlock = {
  header: {
    eyebrow: "Students’ Testimonials ",
    title: "Why do Aspirants Prefer KRMU?",
    highlight: "",
  },

  items: [
    {
      brand: "",
      text: "KRMU has been a turning point in my academic journey. The curriculum is practical, industry-focused, and taught by faculty who genuinely care about our growth. The exposure I received through live projects, workshops, and industry interactions has boosted my confidence and shaped my career path.",
      author: "Veeresh Tarnal, MBA",
      color: "bg-[#EAF6FF]",
      featured: false,
    },
    {
      brand: "",
      text: "It was a great experience studying at K.R. Mangalam University. I completed my MBA degree last year. And I was very fortunate to have all my mentors who helped me during my post-graduation. Also, I would like to thank the training and placement cell for supporting each and every student.",
      author: "Prateek kumar, MBA",
      color: "bg-white",
      featured: false,
    },
    {
      brand: "",
      text: "No doubt, I made the best choice of my career; K.R. Mangalam University is one among those unique institutions which help students not only in building their career but also enhance distinctive competencies and skill sets that help students grow in their professional lives.",
      author: "Prachi, MBA",
      color: "bg-white",
      featured: false,
    },
    {
      brand: "",
      text: "The skill development opportunities at KRMU made a huge difference in my confidence. Through workshops, projects, and hands-on training, I gained practical abilities that I now use it every day in my career.",
      author: "Rajan Kumar, MBA",
      color: "bg-white",
      featured: false,
    },
  ],
};

export const admissionProcessContent: AdmissionProcessContent = {
  eyebrow: "Admission Process",

  title: "Take The First Step Towards Your Future",

  description:
    "K.R. Mangalam University has collaborated with leading organisations to offer hands-on training and expert-led guest lectures.",

  cta: {
    label: "Apply Now",
    href: "#",
  },

  steps: [
    {
      step: "1",
      title: "Register Online Through the KRMU Portal",
      points: [
        // "Complete the online application form through the official admissions portal.",
      ],
    },
    {
      step: "2",
      title: "Submit Academic Documents & Application Fee",
      points: [],
    },
    {
      step: "3",
      title: "Take the KREE (Entrance Exam)",
      points: [],
    },
    {
      step: "4",
      title: "Attend the Faculty Led Interview",
      points: [],
    },
    {
      step: "5",
      title: "Receive Admission Confirmation",
      points: [],
    },
  ],
};

export const mbaComparisonContent: MbaComparisonContent = {
  title: "vs KRMU",
  highlight: "MBA at a Traditional University",
  description:
    "The programmes at KRMU emphasise real-world learning through internships, business simulations, and industry-driven projects.",

  traditionalHeader: "Traditional University",
  krmuHeader: "K.R. Mangalam University",

  rows: [
    {
      icon: BookOpen,
      label: "Curriculum",
      traditional:
        "Conventional syllabus with limited industry or contemporary relevance",
      krmu: {
        title:
          "Industry-aligned and interdisciplinary curriculum updated to current academic and professional needs",
        desc: "",
      },
    },
    {
      icon: Lightbulb,
      label: "Pedagogy",
      traditional: "Primarily lecture-based and theory-driven learning",
      krmu: {
        title:
          "Experiential learning through case studies, projects, presentations, and research-based activities",
        desc: "",
      },
    },
    {
      icon: GraduationCap,
      label: "Faculty",
      traditional: "Largely academic, with minimal practical or field exposure",
      krmu: {
        title:
          "Experienced academicians and practitioners with strong research and domain expertise",
        desc: "",
      },
    },
    {
      icon: Briefcase,
      label: "Career Exposure",
      traditional: "Limited career guidance and traditional career pathways",
      krmu: {
        title:
          "Career-oriented training, research exposure, internships, and guidance for civil services, academia, and professional roles",
        desc: "",
      },
    },
    {
      icon: Award,
      label: "Assessment System",
      traditional: "End-term, theory-focused examinations",
      krmu: {
        title:
          "Continuous assessment through assignments, projects, presentations, and practical evaluations",
        desc: "",
      },
    },
  ],
};

export const businessHubData: BusinessHubSection = {
  heading: `Learn at One of India’s Biggest <br /> Business Hubs, Gurugram`,
  description:
    "Launch your career with future-ready specialisations, industry-aligned curriculum, and hands-on project learning at our modern Gurugram campus.",
  highlights: [
    { text: "UGC Approved University" },
    { text: "NAAC ‘A’ Accredited" },
    { text: "100+ Programmes" },
    { text: "18K+ Alumni Base" },
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

export const faqSectionData: FAQSectionData = {
  eyebrow: "(FAQs)",
  heading: "Frequently Asked Questions",
  description: "",
  faqs: [
    {
      id: "item-1",
      question: "What are the eligibility criteria for the MBA programme?",
      answer: `Candidate must have a bachelor's degree or equivalent degree from a recognised university with a minimum of 50% aggregate marks.`,
    },
    {
      id: "item-2",
      question: "Are scholarships available at KRMU?",
      answer: `Yes, K.R. Mangalam University offers merit-based and need-based scholarships. Visit our scholarships page for more details.`,
    },
    {
      id: "item-3",
      question: "Does KRMU provide hostel accommodation?",
      answer: `Yes, KRMU provides separate hostels for boys and girls with modern amenities and 24/7 security.`,
    },
    {
      id: "item-4",
      question: "What placement support does the university provide?",
      answer: `KRMU provides 100% placement assistance, including industry collaborations, mock interviews, and placement drives with top recruiters.`,
    },
    {
      id: "item-5",
      question: "What are the available specialisations in the MBA programme?",
      answer: `The KRMU offers specialisations in Finance, Marketing, HR, Business Analytics, Operations, Digital Marketing, Technology Management, Product Management, IT, Entrepreneurship, and Fintech.`,
    },
  ],
};

export const lifeAsPhDScholarData: LifeAsPhDScholarSection = {
  heading: "Life @ KRMU",
  description: "",
  image: {
    src: "/landingpage/common/collage.webp",
    alt: "Life as a PhD Scholar at KR Mangalam",
  },
  facilities: [
    // { id: 1, title: "24/7 security and medical facilities" },
    // { id: 2, title: "Sports and recreation centers" },
    // { id: 3, title: "Cafeteria and food courts" },
    // { id: 4, title: "Peer mentorship programs" },
    // { id: 5, title: "PhD scholar association activities" },
  ],
  additionalFacilities: [
    // { id: 6, title: "Cafeteria and food courts" },
    // { id: 7, title: "Peer mentorship programs" },
    // { id: 8, title: "PhD scholar association activities" },
    // { id: 9, title: "Transportation connectivity" },
  ],
};

export const comeToLifeData: ComeToLifeSection = {
  heading: `World-Class Facilities & Infrastructure`,
  description: `Spread across a lush green campus, K.R. Mangalam University offers world-class infrastructure, including smart air-conditioned classrooms, high-speed Wi-Fi, advanced labs, a digitally equipped library, sports facilities, incubation centres, and dedicated career development support—creating an ecosystem for holistic growth.`,
  footerText: ``,
  cta: {
    label: "Apply for MBA 2026-27",
    href: "#",
  },
  slides: [
    {
      image: "/landingpage/common/infra/1.webp",
      alt: "World Class Lab",
    },
    {
      image: "/landingpage/common/infra/2.webp",
      alt: "Research Facility",
    },
    {
      image: "/landingpage/common/infra/3.webp",
      alt: "Innovation Center",
    },
    {
      image: "/landingpage/common/infra/4.webp",
      alt: "Library & Resources",
    },
    {
      image: "/landingpage/common/infra/5.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/common/infra/6.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/common/infra/7.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/common/infra/8.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/common/infra/9.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/common/infra/10.webp",
      alt: "Campus Infrastructure",
    },
  ],
};

export const programmeContent = {
  badge: "11 Specialisations",
  title: "KRMU’s MBA Programmes",
  subtitle: "All Our Programmes Comprise of Industry-relevant Curriculum",

  programmes: [
    {
      id: "1",
      tag: "IBM",
      title: "MBA Human Resource Management",
      subtitle: "",
      desc: "Focuses on managing an organisation’s workforce, combining core business skills with specialised HR knowledge and strategic workforce planning.",
      duration: "2 Years",
      fee: "₹3,30,000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
      eligibility: "Passed a Bachelor's with 50% aggregate marks.",
    },
    {
      id: "2",
      tag: "EY",
      title: "MBA Fintech",
      subtitle: "",
      desc: "Prepares students for careers in technology-enabled finance, focusing on AI-driven financial products and services.",
      duration: "2 Years",
      fee: "₹2,30,000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
      eligibility: "Passed Bachelor's with 50% aggregate marks.",
    },
    {
      id: "3",
      tag: "IIDE",
      title: "MBA Digital Marketing",
      subtitle: "",
      desc: "Teaches digital marketing strategies to navigate entrepreneurial challenges in today’s world, developed with IIDE.",
      duration: "2 Years",
      fee: "₹2,30,000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
      eligibility: "Passed Bachelor's with 50% aggregate marks.",
    },
    {
      id: "4",
      tag: "IBM",
      title: "MBA Marketing ",
      subtitle: "",
      desc: "Covers topics on consumer behaviour, branding, digital strategy, and research, preparing graduates for marketing leadership across diverse industries.",
      duration: "2 Years",
      fee: "₹3,30,000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
      eligibility: "Passed a Bachelor's with 50% aggregate marks.",
    },
    {
      id: "5",
      tag: "IBM",
      title: "MBA Finance",
      subtitle: "",
      desc: "Gain specialisation in finance, investments, and risk, with advanced analysis and modelling for banking and corporate leadership careers.",
      duration: "2 Years",
      fee: "₹3,30,000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
      eligibility: "Passed a Bachelor's with 50% aggregate marks.",
    },
    {
      id: "6",
      tag: "IBM",
      title: "MBA International Business",
      subtitle: "",
      desc: "The course covers global markets, trade, finance, strategy, forex, and supply chains, preparing graduates for multinational careers.",
      duration: "2 Years",
      fee: "₹3,30,000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
      eligibility: "Passed a Bachelor's with 50% aggregate marks.",
    },
    {
      id: "7",
      tag: "IBM",
      title: "MBA Product Marketing ",
      subtitle: "",
      desc: "Integrates core business skills with marketing strategies, product lifecycle management, plus leadership and data analysis training.",
      duration: "2 Years",
      fee: "₹3,30,000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
      eligibility: "Passed a Bachelor's with 50% aggregate marks.",
    },
    {
      id: "8",
      tag: "IBM",
      title: "MBA Information Technology",
      subtitle: "",
      desc: "Programme combining core business management with specialised tech skills for business growth, innovation, and efficiency.",
      duration: "2 Years",
      fee: "₹3,30,000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
      eligibility: "Passed a Bachelor's with 50% aggregate marks.",
    },
    {
      id: "9",
      tag: "IBM",
      title: "MBA Entrepreneurship",
      subtitle: "",
      desc: "Combines MBA fundamentals with innovation, fundraising, and startup growth training, & access to networks for aspiring founders.",
      duration: "2 Years",
      fee: "₹3,30,000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
      eligibility: "Passed a Bachelor's with 50% aggregate marks.",
    },
    {
      id: "10",
      tag: "IBM",
      title: "MBA Operations Management",
      subtitle: "",
      desc: "A course that covers supply chain management, process optimisation, and operational excellence for efficiency, quality, and profitability.",
      duration: "2 Years",
      fee: "₹3,30,000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
      eligibility: "Passed a Bachelor's with 50% aggregate marks.",
    },
    {
      id: "11",
      tag: "IBM",
      title: "MBA Business Analytics",
      subtitle: "",
      desc: "A future-ready postgraduate programme designed to develop confident & competent business leaders through an industry-aligned curriculum.",
      duration: "2 Years",
      fee: "₹3,30,000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
      eligibility: "Passed a Bachelor's with 50% aggregate marks.",
    },
  ],
};
