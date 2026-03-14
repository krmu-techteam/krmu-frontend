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
  title: `
          <span class="sm:hidden"><span class="text-[#fcd404] text-3xl md:text-5xl lg:text-8xl font-bold">
        MCA
      </span> Admissions Open 2026–27</span>
      <span class="hidden sm:block">
             ADMISSIONS <br>
OPEN FOR<br><span class="text-[#fcd404] text-2xl sm:text-3xl md:text-5xl lg:text-8xl font-bold">MCA </span> <br>

 Programmes <br />2026-27</span>
          `,
  description:
    "The MCA courses are meticulously prepared <br />to enable students to comprehend complex<br /> coding processes that, in turn, lead to a<br /> successful career path. ",
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
  bgImage: "/wp-content/landingpage/mca-2026/mca.webp",
  ugHeroClsName: "MainSection"
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
    width: 300,
    height: 480,
  },
};

export const prominentRecruiterContent: ProminentRecruiterContent = {
  title: "Our Prominent Recruiters",

  logos: [
    {
      src: "/wp-content/landingpage/mca-2026/recruiters/infosys.png",
      alt: "Accenture",
      width: 160,
      height: 40,
    },
    {
      src: "/wp-content/landingpage/mca-2026/recruiters/genpact.png",
      alt: "Accenture",
      width: 160,
      height: 40,
    },
    {
      src: "/wp-content/landingpage/mca-2026/recruiters/accenture.png",
      alt: "Accenture",
      width: 160,
      height: 40,
    },
    {
      src: "/wp-content/landingpage/mca-2026/recruiters/tcs.png",
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
  high-quality instruction, and continuous development.</p> <br /><p>The MCA courses at K.R. Mangalam University offer a vast scope for students aiming to build successful careers in the rapidly evolving realm of technology. The Master of Computer Application programmes strive to equip the students with advanced skills in programming and software development. Moreover, the programme not only opens up diverse career opportunities in the IT and tech sector but also prepares students for entrepreneurship, research, and innovation-driven roles.</p>`,
  image: {
    src: "/wp-content/landingpage/mca-2026/about-us.webp",
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
      src: "/wp-content/landingpage/brand-2026/learn-from/imaginxp.svg",
      alt: "IBM",
      width: 300,
      height: 200,
    },
    {
      src: "/wp-content/landingpage/mca-2026/learn-from/mca_ec.png",
      alt: "IBM",
      width: 300,
      height: 200,
    },
    // {
    //   src: "/wp-content/landingpage/mca-2026/learn-from/eydark.webp",
    //   alt: "IBM",
    //   width: 300,
    //   height: 200,
    // },
  ],
};

export const businessLeaderContent: BusinessLeaderContent = {
  sectionTitle: "Why Choose a MCA Programme at KRMU?",

  sectionDescription:
    "Master of Computer Applications is a postgraduate programme designed to build strong foundations in computer science, software development, and emerging technologies. The MCA programme offered by K.R. Mangalam University combines academic rigour with industry-oriented learning as modern laboratories, experienced faculty, and industry collaborations enhance practical exposure.",

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
        "Curriculum focuses equally on conceptual clarity and practical precision.",
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
        "600+ Journal articles in Scopus and WoS, 100+ Published Patents highlighting the University’s research excellence.",
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
        "100% placement assistance with over 700+ recruiters visiting the campus for placement drives every year.",
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
    image: "/wp-content/landingpage/mca-2026/progs/mca.webp",
    title: "Master of Computer Applications (MCA)",
    description:
      "K.R. Mangalam University offers cutting-edge equipment, state-of-the-art labs, and industry-focused education to improve hands-on learning. Through projects, internships, and seminars, the curriculum places a strong emphasis on professional abilities, creativity, and problem-solving. Graduates are equipped for a variety of professions in the quickly changing IT sector across international technology-driven organisations, such as software developers, system analysts, data specialists, or entrepreneurs.",
    format: "",
    duration: "2 Years",
    eligibility:
      "Any graduation degree with Mathematics at 10+2 level or at Graduation level with minimum 50% aggregate marks.",
    focus: "",
    annualFee: "Rs 1,20,000",
  },
  {
    image: "/wp-content/landingpage/mca-2026/progs/mca-ai-ml.webp",
    title:
      "MCA (AI & ML) with academic support of IBM and powered by Microsoft Certifications",
    description:
      "MCA in Artificial Intelligence and Machine Learning is a specialised postgraduate program offered by the K.R. Mangalam University. The program is designed with academic support of IBM and powered by Microsoft Certifications, ensuring strong industry alignment. Students learn core computer science along with AI, ML, data science, cloud computing, and analytics.",
    format: "",
    duration: "2 Years",
    eligibility:
      "Any graduation degree with Mathematics at 10+2 level or at Graduation level with minimum 50% aggregate marks.",
    focus: "",
    annualFee: "Rs 1,50,000",
  },
];

export const prospectusDownloadContent: ProspectusDownloadContent = {
  title: "Download the M.C.A Programme Prospectus",
  description:
    "Download the M.C.A. programme prospectus to explore programme details, specialisations, curriculum, and career prospects.",
  button: {
    label: "Download Now",
    href: "#", // can be file link or NPF popup later
  },
  image: {
    src: "/wp-content/landingpage/mca-2026/download.webp",
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
      text: "K.R. Mangalam University has truly transformed my career. The programme not only provided me with technical expertise but also honed my problem-solving and analytical skills. The university encouraged us to participate in hackathons, industry projects, and internships, which gave me hands-on experience in real-world AI applications. Today, I am working as a Sales manager at Rally Motors, and I owe my success to the incredible faculty and supportive environment at KRMU.",
      author: "Rishav Bakshi",
      color: "bg-[#EAF6FF]",
      featured: false,
    },
    {
      brand: "",
      text: "Looking back at my journey at K.R. Mangalam University, I feel grateful for the incredible opportunities I received here. The curriculum was designed in collaboration with industry experts, ensuring we were up to date with the latest AI trends. The mentorship from experienced faculty, research-driven approach, and exposure to AI tools like TensorFlow, PyTorch, and Big Data analytics helped me secure my dream job in the tech industry. I highly recommend this programme to anyone passionate about AI and data science!",
      author: "Parminder Singh",
      color: "bg-white",
      featured: false,
    },
    {
      brand: "",
      text: "Studying at K.R. Mangalam University was one of the best decisions of my academic journey. The well-structured curriculum, combined with practical exposure through hands-on projects, helped me build a strong foundation in machine learning, data analytics, and cloud computing. The faculty’s guidance and the state-of-the-art labs played a crucial role in enhancing my technical skills. Thanks to the university’s placement cell, I secured a job at a leading AI firm, and I feel confident about tackling industry challenges.",
      author: "Annanya Agarwal",
      color: "bg-white",
      featured: false,
    },
    {
      brand: "",
      text: "K.R. Mangalam University didn’t just provide me with a degree—it shaped my career. The MCA programme gave me the technical expertise, industry exposure, and confidence to work on AI-driven solutions. The university’s tie-ups with industry leaders, guest lectures from  AI professionals, and project-based learning approach made a significant difference in my  professional journey. Today, as a Data Analyst, I use the knowledge and skills I gained at KRMU daily. If you're looking for a programme that bridges the gap between academics and industry, this is the place to be!",
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
  highlight: "M.C.A. at a Traditional University",
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
      question: "What is the average salary of an MCA graduate?",
      answer: `In India, an MCA graduate can bag a starting package of 5-8 LPA after graduating.`,
    },
    {
      id: "item-2",
      question: "What skills will a student learn from KRMU’s MCA programme?",
      answer: `The MCA programmes at K.R. Mangalam University focus on helping students develop technical skills like web development, analytical thinking, data structures, and much more.`,
    },
    {
      id: "item-3",
      question: "Does KRMU provide hostel accommodation?",
      answer: `Yes, KRMU provides separate hostels for boys and girls with modern amenities and 24/7 security.`,
    },
    {
      id: "item-4",
      question: "Does the programme include industry exposure?",
      answer: `Yes, the K.R. Mangalam University offers internships, field visits, and guest lectures by expert professionals.`,
    },
    {
      id: "item-5",
      question: "Does KRMU provide placement support?",
      answer: `Yes, the K.R. Mangalam University offers 100% placement assistance with over 800+ recruiters visiting the campus for placement drives.`,
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
    label: "Apply for MCA 2026-2027",
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
  badge: "2 Specialisations",
  title: "KRMU’s MCA Programmes",
  subtitle:
    "All Our Programmes Comprise of Industry-relevant Curriculum",

  programmes: [
    {
      id: "1",
      tag: "Core MCA",
      title: "MCA",
      subtitle: "",
      desc: "Gain practical learning through advanced labs, projects & internships, focusing on professional skills and creativity.",
      duration: "2 Years",
      fees: "",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
      eligibility: "Passed Bachelor's with 50% aggregate marks.*",
    },
    {
      id: "2",
      tag: "IBM & Microsoft Certifications",
      title: "MCA (AI & ML)",
      subtitle: "",
      desc: "Combines core computer science with AI, ML, data science, and analytics for advanced technical expertise.",
      duration: "2 Years",
      fees: "",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
      eligibility: "Passed Bachelor's with 50% aggregate marks.*",
    },
    {
      id: "3",
      tag: "",
      title: "M.Tech. Computer Science and Engineering",
      subtitle: "",
      desc: "Advance your future with M.Tech. CSE by mastering cutting-edge computing, innovating with AI, and leading tomorrow’s technology revolution.",
      duration: "2 Years",
      fees: "",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
      eligibility: "Passed a Bachelor's with 50% aggregate marks.**",
    },
  ],
};


export const eligibilityTerms = [
  {
    description: "*Eligibility: Passed any graduation degree (e.g., B.E. / B.Tech./ B.Sc / B.Com. / B.A./ B. Voc./ BCA, etc.) with Mathematics at 10+2 level or at Graduation level with minimum 50% aggregate marks."
  },
  {
    description: "**Eligibility: Candidates must have a B.E. / B. Tech degree in Computer Science & Engineering or MCA or M.Sc. (CS, IT, Electronics, Statistics, Physics / or equivalent) with a minimum of 50% marks in aggregate."
  },
];
