// content.ts

import {
  Award,
  BookOpen,
  Briefcase,
  GraduationCap,
  Lightbulb,
} from "lucide-react";

import {
  PGTestimonialsBlock,
  ProgramCardType,
  AboutUsContent,
  AdmissionProcessContent,
  BusinessHubSection,
  BusinessLeaderContent,
  ComeToLifeSection,
  FAQSectionData,
  HeroContent,
  IndustryExpertsContent,
  LifeAsPhDScholarSection,
  MbaComparisonContent,
  PlacementStatsContent,
  ProminentRecruiterContent,
  ProspectusDownloadContent,
} from "../PGType";

export const heroContent: HeroContent = {
  title: `
           <span class="sm:hidden"><span class="text-[#fcd404] text-3xl md:text-5xl lg:text-8xl font-bold">
        M.A.
      </span> Admissions Open 2026–27</span>
      <span class="hidden sm:block">
             ADMISSIONS <br>
OPEN FOR<br><span class="text-[#fcd404] text-2xl sm:text-3xl md:text-5xl lg:text-8xl font-bold">M.A. </span> <br>

 Programmes <br />2026-27</span>
          `,
  description:
    "The M.A. programmes at KRMU focus on  <br />subject expertise,  practical application,  and <br /> skill development, enabling graduates to excel <br /> across multiple career options or  <br />pursue further research",
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
  bgImage: "/wp-content/landingpage/master-of-arts-2026/ma.webp",
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
    src: "/wp-content/landingpage/master-of-arts-2026/uni-stats.webp",
    alt: "Graduate Placement",
    width: 300,
    height: 480,
  },
};

export const prominentRecruiterContent: ProminentRecruiterContent = {
  title: "Our Prominent Recruiters",

  logos: [
    {
      src: "/wp-content/landingpage/master-of-arts-2026/recruiters/hdfc-logo.png",
      alt: "Accenture",
      width: 160,
      height: 40,
    },
    {
      src: "/wp-content/landingpage/master-of-arts-2026/recruiters/vidushi.png",
      alt: "Accenture",
      width: 160,
      height: 40,
    },
    {
      src: "/wp-content/landingpage/master-of-arts-2026/recruiters/cryptomize.png",
      alt: "Accenture",
      width: 160,
      height: 40,
    },
    {
      src: "/wp-content/landingpage/master-of-arts-2026/recruiters/medanta.jpg",
      alt: "Accenture",
      width: 160,
      height: 40,
    },
    {
      src: "/wp-content/landingpage/master-of-arts-2026/recruiters/zynga.webp",
      alt: "Accenture",
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
  high-quality instruction, and continuous development.</p> <br /><p>The University’s M.A. programmes in English, Economics, Political Science, and Applied Psychology are designed to offer strong theoretical foundations, research-oriented learning, and practical exposure. These programmes equip students with critical thinking abilities, analytical skills, and subject expertise, preparing them for diverse professional roles, civil services, research, and advanced academic pursuits.</p>`,
  image: {
    src: "/landingpage/mca-2026/univ.png",
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
      src: "/wp-content/landingpage/master-of-arts-2026/learn-from/iide.png",
      alt: "IBM",
      width: 300,
      height: 200,
    },
    {
      src: "/wp-content/landingpage/master-of-arts-2026/learn-from/grant-thornton.png",
      alt: "IBM",
      width: 300,
      height: 200,
    },
    {
      src: "/wp-content/landingpage/master-of-arts-2026/learn-from/eydark.webp",
      alt: "IBM",
      width: 300,
      height: 200,
    },
  ],
};

export const businessLeaderContent: BusinessLeaderContent = {
  sectionTitle: "Why Choose a Master of Arts Programme at KRMU?",

  sectionDescription:
    "K.R. Mangalam University’s Master of Arts Programmes offer the perfect blend of theory and practical understanding. The programmes are designed in alignment with global trends to create a learning environment that carves the best out of our students.",

  semesters: [
    {
      id: 1,
      title: "",
      duration: "",
      subtitle:
        "Programmes Curated by Industry Experts to Merge Practical Learning with Higher Education Theory",
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
      subtitle: "Mentorship from Experts with Years of Industry Experience",
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
        "Future-Proof Programmes to Ensure our Students are Industry Ready",
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
        "International Collaborations with Institutions and Global Leaders to Offer Global Exposure",
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
        "Student-Centric Infrastructure to Promote Better Learning and Research Opportunities",
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
    image: "/wp-content/landingpage/master-of-arts-2026/progs/ma-english.webp",
    title: "M.A. English",
    description:
      "The M.A. English programme offers strong theoretical foundations in literature, language, and critical theory, combined with analytical and research-oriented learning. It equips students with advanced communication, critical thinking, and interpretative skills to pursue careers in academics, media, publishing, content creation, and related fields, while preparing them for higher studies and research.",
    format: "",
    duration: "2 Years",
    eligibility:
      "Must have passed a Bachelor degree (any discipline) or equivalent degree from a recognised university with a minimum of 50% marks in aggregate.",
    focus: "",
    annualFee: "Rs 1,10,000",
  },
  {
    image:
      "/wp-content/landingpage/master-of-arts-2026/progs/ma-economics.webp",
    title: "M.A. Economics",
    description:
      "The M.A. Economics programme provides strong theoretical foundations in economic theory, quantitative analysis, and policy studies, combined with applied and research-oriented learning. It equips students with analytical, problem-solving, and data interpretation skills to pursue careers in policy research, banking, analytics, public services, and higher academic studies.",
    format: "",
    duration: "2 Years",
    eligibility:
      "Must have passed a Bachelor degree (any discipline) or equivalent degree from a recognised university with a minimum of 50% marks in aggregate.",
    focus: "",
    annualFee: "Rs 1,10,000",
  },
  {
    image:
      "/wp-content/landingpage/master-of-arts-2026/progs/ma-political-science.webp",
    title: "M.A. Political Science",
    description:
      "The M.A. Political Science programme offers in-depth understanding of political theory, governance, international relations, and public policy through critical and analytical learning. It develops research, analytical, and policy-evaluation skills, preparing students for careers in civil services, public administration, research organisations, think tanks, and advanced academic pursuits.",
    format: "",
    duration: "2 Years",
    eligibility:
      "Must have passed a Bachelor degree (any discipline) or equivalent degree from a recognised university with a minimum of 50% marks in aggregate.",
    focus: "",
    annualFee: "Rs 1,15,000",
  },
  {
    image:
      "/wp-content/landingpage/master-of-arts-2026/progs/ma-applied-psychology.webp",
    title: "M.A. Applied Psychology",
    description:
      "The M.A. Applied Psychology programme blends strong theoretical foundations with practical training in psychological assessment, methodologies, and mental processes. It equips students with essential analytical, interpersonal, and professional skills to interpret human behaviour, address real-world challenges, and build careers in psychology while promoting mental health awareness.",
    format: "",
    duration: "2 Years",
    eligibility:
      "Must have passed a Bachelor degree (any discipline) or equivalent degree from a recognised university with a minimum of 50% marks in aggregate.",
    focus: "",
    annualFee: "Rs 1,15,000",
  },
];

export const prospectusDownloadContent: ProspectusDownloadContent = {
  title: "Download the M.A. Programme Prospectus",
  description:
    "Download the M.A. programme prospectus to explore programme details, specialisations, curriculum, and career prospects.",
  button: {
    label: "Download Now",
    href: "#", // can be file link or NPF popup later
  },
  image: {
    src: "/wp-content/landingpage/master-of-arts-2026/aboutus.webp",
    alt: "MBA Prospectus",
  },
};
export const PGTestimonialsData: PGTestimonialsBlock = {
  header: {
    eyebrow: "Our Testimonials",
    title: "Why do Aspirants Prefer KRMU?",
    highlight: "",
  },

  items: [
    {
      brand: "",
      text: "My journey at K.R. Mangalam University has been truly transformative, shaping both my academic foundation and passion for extracurricular activities. Studying at KRMU, I received a quality education that opened new career opportunities for me. The well-structured curriculum and guidance from dedicated faculty helped me master the language, its cultural nuances, and practical applications. Beyond academics, KRMU provided enriching opportunities in theatre, Nukkad Natak and cultural events, which enhanced my confidence and creativity. These experiences refined my performance skills and deepened my passion for storytelling.",
      author: "Ayush Gupta",
      color: "bg-[#EAF6FF]",
      featured: false,
    },
    {
      brand: "",
      text: "My journey at K.R. Mangalam University was truly enriching and transformative. The university provided a strong academic foundation, fostering critical thinking and research skills that have been invaluable in my further studies. I am especially grateful to my dedicated faculty mentors, whose guidance and encouragement played a crucial role in shaping my academic and professional aspirations. Their support not only helped me excel in my undergraduate studies but also prepared me for the rigorous academic environment of the University of Exeter, UK, where I am currently pursuing my higher studies.",
      author: "Khushi Jain",
      color: "bg-white",
      featured: false,
    },
    {
      brand: "",
      text: "My journey at KRMU has been nothing short of a fun rollercoaster. It was an amalgamation of learning, joyful experiences and holistic personality development. I was lucky enough to get the support of my really helpful professors, who were a guiding light at all points. My achievements were always given recognition. I was appreciated by everyone around me, which gave me a further boost to excel in all fields. The Chancellor’s Excellence Award and a 100% sponsored trip to the United Kingdom will always be close to my heart, and I will always cherish my “good-old” days with K.R.Mangalam!",
      author: "Annanya Agarwal",
      color: "bg-white",
      featured: false,
    },
    {
      brand: "",
      text: "I am incredibly grateful to K.R. Mangalam University for the opportunity to join their esteemed institution. From day one, I’ve felt supported by both my professors and peers, which has made a real difference in my academic journey. The courses are challenging yet rewarding, and I’ve already grown so much—both personally and in my understanding of psychology. I’m excited to see where this path takes me.",
      author: "Shivangi Sharma",
      color: "bg-white",
      featured: false,
    },
  ],
};

export const admissionProcessContent: AdmissionProcessContent = {
  eyebrow: "Admission Process",

  title: "Take The First Step Towards Your Future",

  description:
    "K.R. Mangalam University has collaborated with leading organisations to offer hands-on training, expert-led guest lectures.",

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
  highlight: "M.A. at a Traditional University",
  description:
    "The programme at KRMU emphasizes real-world learning through internships, business simulations, and industry-driven projects.",

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
      question:
        "What is the duration of M.A. courses at K.R. Mangalam University?",
      answer: `Our M.A. programmes have a duration of 2 years covering in-depth concepts, making you a specialist in your domain.`,
    },
    {
      id: "item-2",
      question:
        "Can students get scholarships for M.A. courses at K.R. Mangalam University?",
      answer: `Yes, we offer up to 100% scholarships to talented and deserving students. You can learn more about scholarships on our admission page.`,
    },
    {
      id: "item-3",
      question:
        "What is the eligibility criteria to get admission to the M.A. Applied Psychology at K.R. Mangalam University?",
      answer: `The candidate should have passed a Bachelor degree (any discipline) or equivalent degree from a recognised university with a minimum of 50% marks in aggregate.`,
    },
    {
      id: "item-4",
      question: "Which M.A. courses does K.R. Mangalam University offer?",
      answer: `K.R. Mangalam University offers the following M.A. courses: <br /> 
       <ul>
        <li>M.A. English</li>
        <li>M.A. Economics</li>
        <li>M.A. Political Science</li>
        <li>M.A. Applied Psychology</li>
       </ul>
      `,
    },
    {
      id: "item-5",
      question: "Is there placement and career support for design students?",
      answer: `Yes. KRMU offers 100% placement assistance with strong industry connections, helping students secure internships and job opportunities upon graduation.`,
    },
    {
      id: "item-6",
      question: "Is hostel accommodation available for students?",
      answer: `Yes, KRMU offers modern, secure on-campus housing with all amenities.`,
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
  description: `Within a lush, green campus designed for interactive learning, research, and holistic development, K.R. Mangalam University offers state-of-the-art infrastructure, including smart, air-conditioned classrooms, high-speed Wi-Fi, sophisticated computer labs, a well-stocked library with digital access, sports facilities, incubation centres, and career development facilities.`,
  footerText: ``,
  cta: {
    label: "Apply for M.A. 2026-2027",
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
  badge: "5 Specialisations",
  title: "KRMU’s M.A. Programmes",
  subtitle:
    "All Our Programmes Comprise of Industry-relevant Curriculum",

  programmes: [
    {
      id: "1",
      tag: "English Studies",
      title: "M.A. English",
      subtitle: "",
      desc: "Develops skills in literature and theory, preparing students for academia, media, and publishing careers.",
      duration: "2 Years",
      fees: "120000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
      eligibility: "Passed Bachelor's with 50% aggregate marks.",
    },
    {
      id: "2",
      tag: "Economic Analysis",
      title: "M.A. Economics",
      subtitle: "",
      desc: "Builds foundations in theory, analysis, and policy, developing skills for careers in research, banking, and analytics.",
      duration: "2 Years",
      fees: "120000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
      eligibility: "Passed Bachelor's with 50% aggregate marks.",
    },
    {
      id: "3",
      tag: "Political Insights",
      title: "M.A. Political Science**",
      subtitle: "",
      desc: "Gain expertise in political theory, governance, and public policy, developing skills for administration and academia careers.",
      duration: "2 Years",
      fees: "125000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
      eligibility: "Passed Bachelor's with 50% aggregate marks.",
    },
    {
      id: "4",
      tag: "Applied Psychology",
      title: "M.A. Applied Psychology",
      subtitle: "",
      desc: "Combines theory and practical training, developing skills for behaviour analysis and mental health promotion.",
      duration: "2 Years",
      fees: "125000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
      eligibility: "Passed Bachelor's with 50% aggregate marks.",
    },
    {
      id: "5",
      tag: "",
      title: "M.A. Clinical Psychology**",
      subtitle: "",
      desc: "Gain advanced skills in mental health diagnosis, psychotherapy, research, counselling, and evidence-based psychological interventions with this course.",
      duration: "2 Years",
      fees: "400000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
      eligibility: "To be updated",
    },
  ],
};
