import Eligibility from "@/app/(main-website)/(school-programmes)/school-programmes-component/Eligibility";
import {
  ApplySectionData,
  BusinessHubSection,
  ComeToLifeSection,
  CounterItem,
  FAQSectionData,
  HeroContent,
  HeroMarqueeSection,
  IndustryExpertsSection,
  LifeAsPhDScholarSection,
  OpportunitySection,
  ProminentRecruit,
  ScholarResearchImpactSection,
  SpecialisationSection,
  TestimonialsSection,
  WhyKRMSection,
} from "./contentype";

// Usage types
export const Hero: HeroContent = {
  title: `
   <span class="sm:hidden"><span class="text-[#fcd404] text-2xl sm:text-3xl md:text-5xl lg:text-8xl font-bold">
        Bachelor of Arts
      </span> Admissions Open 2026–27</span>
       <span class="hidden sm:block">
      ADMISSIONS <br />
      OPEN FOR <br />
      <span class="text-[#fcd404] text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold">
       Bachelor of Arts
      </span>
      <br />
      PROGRAMMES<br />2026-27</span>
    `,
  desc: `The Bachelor of Arts programmes are designed <br /> to build critical thinking, communication, <br /> and analytical skills  among students to prepare <br /> them for confident, career-ready roles <br /> across multiple sectors`,
  heroBg: "/wp-content/landingpage/ba-2026/ba.webp",
  // middleImg: "/landingpage/law-2026/law.webp",
  middleImg: "",
  mobileImg: "",
  lpclName: "MainSection",
};

export const heroMarqueeData: HeroMarqueeSection = {
  messages: [
         "₹56.6 LPA Highest Package",
    "₹27 Cr Scholarships",
    "800+ Recruiters",
    "18K+ Alumni",
    "92% Placement Record",
    "100% Sponsored International Study Tour",
    "700+ Educators",
    "100+ UG & PG Programmes",
    "12K+ Students",
    "28+ Acres Campus",
  ],
  bgColor: "#e31e24",
  speedClass: "animate-marquee",
};

export const Counters: CounterItem[] = [
  {
    title: "92%",
    subtitle: "Placement Record",
  },
  {
    title: "800+",
    subtitle: "visiting recruiters",
  },
  {
    title: "₹27Cr",
    subtitle: "Worth of Scholarships",
  },
  {
    title: "56.6 LPA",
    subtitle: "Highest Package",
  },
];

// Recruiters list
export const prominentRecruiters: ProminentRecruit[] = [
  {
    imgUrl: "/landingpage/bachelor-of-arts-2026/recruiters/lifestyle.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/bachelor-of-arts-2026/recruiters/raymond.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/bachelor-of-arts-2026/recruiters/hdfc.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/bachelor-of-arts-2026/recruiters/accen.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/bachelor-of-arts-2026/recruiters/wow.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/bachelor-of-arts-2026/recruiters/label.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/bachelor-of-arts-2026/recruiters/lifestyle.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/bachelor-of-arts-2026/recruiters/kamalini.png",
    alt: "Recruiter Logo",
  },
];

export const whyKRM: WhyKRMSection = {
  heading: "Why Choose B.A. Programmes at KRMU?",
  subheading: "Build a Career with Purpose and Perspective ",
  content: `K.R. Mangalam University offers well-structured B.A. programmes designed to develop strong academic foundations, critical thinking, and real-world understanding. With an interdisciplinary approach, experienced faculty, experiential learning, and career guidance, the programmes prepare students for diverse professional pathways and higher studies. `,
  imgUrl: `/landingpage/bachelor-of-arts-2026/why-choose/Building.webp`,
  whyKrmCards: [
    {
      imgUrl: "/landingpage/bachelor-of-arts-2026/why-choose/1.webp",
      content: `Programmes curated by industry experts that balance practical learning with strong theoretical foundations `,
    },
    {
      imgUrl: "/landingpage/bachelor-of-arts-2026/why-choose/2.webp",
      content: `Mentorship from professionals with years of real-world industry experience `,
    },
    {
      imgUrl: "/landingpage/bachelor-of-arts-2026/why-choose/3.webp",
      content: `Participation in live projects and real-world assignments.`,
    },
    {
      imgUrl: "/landingpage/bachelor-of-arts-2026/why-choose/4.webp",
      content: `Future-ready programmes designed to prepare students for evolving industry demands `,
    },
    {
      imgUrl: "/landingpage/bachelor-of-arts-2026/why-choose/5.webp",
      content: `International collaborations with leading institutions and global partners to provide meaningful global exposure`,
    },
  ],
};

export const industryExperts: IndustryExpertsSection = {
  eyebrow: "",
  heading: `Learn from <br /> Industry Expert 
`,
  description: `The B.A. programmes at KRMU are enriched by academic and professional inputs from experienced knowledge partners`,
  cta: {
    label: "Apply for B.A. Programmes 2026–27",
    href: "#",
  },
  cards: [
    {
      imgUrl: "/landingpage/bachelor-of-arts-2026/learn-from/pmf.png",
      alt: "Logo",
      title: "AI and Machine Learning Courses",
    },
    {
      imgUrl: "/landingpage/bachelor-of-arts-2026/learn-from/nbgsm.png",
      alt: "Logo",
      title: "AI and Machine Learning Courses",
    },
    {
      imgUrl: "/landingpage/bachelor-of-arts-2026/learn-from/grade.png",
      alt: "Logo",
      title: "AI and Machine Learning Courses",
    },
    {
      imgUrl: "/landingpage/bachelor-of-arts-2026/learn-from/human.png",
      alt: "Logo",
      title: "AI and Machine Learning Courses",
    },
  ],
  bannerImg: "/wp-content/landingpage/common/indus-exp.webp",
};

export const specialisationData: SpecialisationSection = {
  subheading: `Choose your specialisations based on your interests and career goals. `,
  heading: `Our B.A. Programmes & Specialisations`,
  SpecialisationCard: [
    {
      imgUrl:
        "/landingpage/bachelor-of-arts-2026/specialisations/B.A.-(Hons.)-English.webp",
      title: `B.A. (Hons.) English `,
      desc: `The programme offers a strong foundation in literature, language, and critical theory, building analytical, communication, and cultural understanding skills that prepare students for diverse career opportunities across industries. `,
      extraInfos: [
        {
          iconUrl: "/wp-content/landingpage/common/duration.svg",
          title: "Duration:",
          desc: `3 Years`,
        },
        {
          iconUrl: "/wp-content/landingpage/common/eligibility.svg",
          title: "Eligibility",
          desc: `Passed 10+2 or equivalent examination from any recognized board/university in any stream with minimum 50% aggregate Marks.`,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `Rs. 1,20,000`,
        // },
      ],
    },
    {
      imgUrl:
        "/landingpage/bachelor-of-arts-2026/specialisations/B.A.-(-Hons.-Hons.-with-Research)-English.webp",
      title: `B.A. (Hons. / Hons. with Research) English `,
      desc: `    The programme focuses on English literature, language, and culture, developing critical thinking, writing, and research skills through the study of classic and contemporary texts, preparing students for careers in academia, media, publishing, and related fields. `,
      extraInfos: [
        {
          iconUrl: "/wp-content/landingpage/common/duration.svg",
          title: "Duration:",
          desc: `4 Years`,
        },
        {
          iconUrl: "/wp-content/landingpage/common/eligibility.svg",
          title: "Eligibility",
          desc: `Passed 10+2 or equivalent examination from any recognized board/university in any stream with minimum 50% aggregate Marks. `,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `Rs. 1,20,000`,
        // },
      ],
    },
    {
      imgUrl:
        "/landingpage/bachelor-of-arts-2026/specialisations/B.A.-(Hons.)-Economics.webp",
      title: `B.A. (Hons.) Economics`,
      desc: `        This programme builds a strong foundation in economics, covering micro and macroeconomics, global trade, and financial systems. It develops critical thinking and analytical skills, preparing graduates for careers in finance, policy, consulting, academia, or advanced studies. `,
      extraInfos: [
        {
          iconUrl: "/wp-content/landingpage/common/duration.svg",
          title: "Duration:",
          desc: `3 Years`,
        },
        {
          iconUrl: "/wp-content/landingpage/common/eligibility.svg",
          title: "Eligibility",
          desc: `Passed 10+2 or equivalent examination from any recognized board/university in any stream with minimum 50% aggregate Marks.`,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `Rs. 1,20,000`,
        // },
      ],
    },
    {
      imgUrl:
        "/landingpage/bachelor-of-arts-2026/specialisations/B.A.-(Hons.-Hons.-with-Research)-Economics.webp",
      title: `B.A. (Hons. / Hons. with Research) Economics `,
      desc: `Designed for aspiring economists, this programme blends strong academics, practical learning, and research. It builds analytical, mathematical, and policy skills, preparing graduates for careers in government, finance, consulting, academia, or advanced studies in economics and public policy.`,
      extraInfos: [
        {
          iconUrl: "/wp-content/landingpage/common/duration.svg",
          title: "Duration:",
          desc: `4 Years`,
        },
        {
          iconUrl: "/wp-content/landingpage/common/eligibility.svg",
          title: "Eligibility",
          desc: `Passed 10+2 or equivalent examination from any recognized board/university in any stream with minimum 50% aggregate Marks. `,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `Rs. 1,20,000`,
        // },
      ],
    },
    {
      imgUrl:
        "/landingpage/bachelor-of-arts-2026/specialisations/B.A.-(Hons.)-Psychology.webp",
      title: `B.A. (Hons.) Psychology  `,
      desc: `The programme opens career and academic paths in mental health, education, HR, and social work. Graduates can pursue higher studies or roles in healthcare, corporate wellness, NGOs, and government sectors, where there is a growing need for psychologists. `,
      extraInfos: [
        {
          iconUrl: "/wp-content/landingpage/common/duration.svg",
          title: "Duration:",
          desc: `3 Years`,
        },
        {
          iconUrl: "/wp-content/landingpage/common/eligibility.svg",
          title: "Eligibility",
          desc: `Passed 10+2 or equivalent examination from any recognized board/university in any stream with minimum 50% aggregate Marks. `,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `Rs. 1,20,000`,
        // },
      ],
    },
    {
      imgUrl:
        "/landingpage/bachelor-of-arts-2026/specialisations/B.A.-(Hons.-Hons.-with-Research)-Psychology.webp",
      title: `B.A. (Hons. / Hons. with Research) Psychology `,
      desc: `      The programme explores human psychology and behaviour through advanced subjects such as cognitive, clinical, social, and abnormal psychology. It builds strong foundations while developing critical thinking, research, communication, and data-handling skills for diverse career paths. `,
      extraInfos: [
        {
          iconUrl: "/wp-content/landingpage/common/duration.svg",
          title: "Duration:",
          desc: `4 Years`,
        },
        {
          iconUrl: "/wp-content/landingpage/common/eligibility.svg",
          title: "Eligibility",
          desc: `Passed 10+2 or equivalent examination from any recognized board/university in any stream with minimum 50% aggregate Marks.`,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `Rs. 1,20,000`,
        // },
      ],
    },
    {
      imgUrl:
        "/landingpage/bachelor-of-arts-2026/specialisations/B.A.-(Hons.)-Political-Science.webp",
      title: `B.A. (Hons.) Political Science`,
      desc: `    The programme builds strong research skills through hands-on projects, faculty collaboration, and conference exposure. It offers in-depth understanding of political systems, theories, international relations, and public administration, preparing students for careers in policy, diplomacy, analysis, and academia. `,
      extraInfos: [
        {
          iconUrl: "/wp-content/landingpage/common/duration.svg",
          title: "Duration:",
          desc: `3 Years`,
        },
        {
          iconUrl: "/wp-content/landingpage/common/eligibility.svg",
          title: "Eligibility",
          desc: `Passed 10+2 or equivalent examination from any recognized board/university in any stream with minimum 50% aggregate Marks.`,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `Rs. 1,20,000`,
        // },
      ],
    },
    {
      imgUrl:
        "/landingpage/bachelor-of-arts-2026/specialisations/B.A.-(Hons.Hons.-with-Research)-Political-Science.webp",
      title: `B.A. (Hons. / Hons. with Research) Political Science `,
      desc: `    The programme builds a strong understanding of political theory, governance, and global politics while developing research, critical thinking, and communication skills. It prepares students for careers in academia, international organisations, journalism, law, and public service. `,
      extraInfos: [
        {
          iconUrl: "/wp-content/landingpage/common/duration.svg",
          title: "Duration:",
          desc: `4 Years`,
        },
        {
          iconUrl: "/wp-content/landingpage/common/eligibility.svg",
          title: "Eligibility",
          desc: `Passed 10+2 or equivalent examination from any recognized board/university in any stream with minimum 50% aggregate Marks.`,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `Rs. 1,20,000`,
        // },
      ],
    },
  ],
};

export const opportunityData: OpportunitySection = {
  image: {
    src: "/landingpage/common/test2.png",
    alt: "Industry Expert",
    width: 300,
    height: 400,
  },
  heading: "Learn From Knowledge Partners ",
  highlight: "Opportunity That Transforms",
  cta: {
    label: "Apply for B.A. Programmes 2026–27",
    href: "#",
  },
};

export const testimonialsData: TestimonialsSection = {
  subheading: "Our Testimonials",
  heading: `Why do our schoolers love and trust K.R. Mangalam University? `,
  testimonials: [
    {
      image: "/landingpage/bachelor-of-arts-2026/testimonials/1.webp",
      videoUrl: "#",
      quote: `My time at K.R. Mangalam University was transformative, offering quality education, supportive faculty, and enriching theatre and cultural experiences that boosted my confidence, creativity, and career opportunities.
`,
      name: "Mr. Ayush Gupta",
      programme: "B.A. (Hons.) English",
    },
    {
      image: "/landingpage/bachelor-of-arts-2026/testimonials/2.webp",
      videoUrl: "#",
      quote: `KRMU provided a strong academic foundation and excellent faculty mentorship, helping me develop critical thinking and research skills and prepare for my M.Sc. in Psychology at the University of Exeter, UK. 
`,
      name: "Khushi Jain",
      programme: "B.A. (Hons.) Psychology ",
    },
    {
      image: "/landingpage/bachelor-of-arts-2026/testimonials/3.webp",
      videoUrl: "#",
      quote: `My journey at KRMU blended academic learning with holistic development. Supportive professors, recognition of achievements, and the Chancellor’s Excellence Award made my experience truly memorable.`,
      name: "Arshleen Sodhi",
      programme: "B.A. (Hons.) Economics",
    },
    {
      image: "/landingpage/bachelor-of-arts-2026/testimonials/4.webp",
      videoUrl: "#",
      quote: `KRMU’s supportive environment and engaging curriculum helped me grow academically and personally. The guidance from faculty and peers has made my learning journey rewarding and inspiring. `,
      name: "Simran",
      programme: "B.A. (Hons.) Psychology",
    },
  ],
};

export const scholarResearchImpactData: ScholarResearchImpactSection = {
  heading: "Our Scholars’ Research Impact",
  description:
    "PhD candidates trust peer experiences more than institutional marketing. Real stories address fear of isolation, funding concerns, and career uncertainty.",
  slides: [
    {
      image: "/landingpage/common/image.png",
      alt: "Research Impact 1",
    },
    {
      image: "/landingpage/common/image.png",
      alt: "Research Impact 2",
    },
    {
      image: "/landingpage/common/image.png",
      alt: "Research Impact 3",
    },
    {
      image: "/landingpage/common/image.png",
      alt: "Research Impact 4",
    },
    {
      image: "/landingpage/common/image.png",
      alt: "Research Impact 5",
    },
  ],
  testimonials: [
    {
      id: 1,
      name: "Rahul Khanna",
      role: "PhD Journalism & Mass Communication",
      image: "/landingpage/common/dummy.png",
      quote:
        "My research at K.R. Mangalam University on social media's influence in modern society has been incredibly fulfilling. The mentorship and focus on real-world change truly set this programme apart.",
    },
    {
      id: 2,
      name: "Prerna Singh",
      role: "PhD Scholar",
      image: "/testimonials/prerna.jpg",
      quote:
        "The encouragement and diverse opportunities I received throughout my PhD at KRMU were beyond my expectations.",
    },
    {
      id: 3,
      name: "Rajeev Kumar",
      role: "PhD Graduate",
      image: "/testimonials/rajeev.jpg",
      quote:
        "KRMU's expert faculty guidance pushed me to achieve much more than I believed possible.",
    },
  ],
};

export const comeToLifeData: ComeToLifeSection = {
  heading: `World-Class Facilities at KRMU for B.A. Programmes`,
  description: `K.R. Mangalam University offers a vibrant campus that supports quality learning and overall student growth. Smart classrooms, high-speed Wi-Fi, and well-equipped learning spaces create an engaging academic environment. The central library, seminar halls, innovation areas, hostels, and recreational facilities ensure a well-rounded campus experience.`,
  footerText: ``,
  cta: {
    label: "Apply for B.A. Programmes <br /> 2026–2027 ",
    href: "#",
  },
  slides: [
    {
      image: "/landingpage/bachelor-of-arts-2026/infrastructure/1.webp",
      alt: "World Class Lab",
    },
    {
      image: "/landingpage/bachelor-of-arts-2026/infrastructure/2.webp",
      alt: "Research Facility",
    },
    {
      image: "/landingpage/bachelor-of-arts-2026/infrastructure/3.webp",
      alt: "Innovation Center",
    },
    {
      image: "/landingpage/bachelor-of-arts-2026/infrastructure/4.webp",
      alt: "Library & Resources",
    },
    {
      image: "/landingpage/bachelor-of-arts-2026/infrastructure/5.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/bachelor-of-arts-2026/infrastructure/6.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/bachelor-of-arts-2026/infrastructure/7.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/bachelor-of-arts-2026/infrastructure/8.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/bachelor-of-arts-2026/infrastructure/9.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/bachelor-of-arts-2026/infrastructure/10.webp",
      alt: "Campus Infrastructure",
    },
  ],
};

export const lifeAsPhDScholarData: LifeAsPhDScholarSection = {
  heading: "Life as a B.A. Student at KRMU",
  description: "",
  image: {
    src: "/landingpage/bachelor-of-arts-2026/student-at-krmu/Collage.webp",
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

export const faqSectionData: FAQSectionData = {
  eyebrow: "(FAQs)",
  heading: "Frequently Asked Questions",
  description: "Got Questions? We've Got Answers ",
  faqs: [
    {
      id: "item-1",
      question:
        "What is the duration of B.A. courses at K.R. Mangalam University? ",
      answer: `B.A. programmes at K.R. Mangalam University are typically of three years, divided into six semesters.`,
    },
    {
      id: "item-2",
      question:
        "Can students get scholarships for B.A. courses at K.R. Mangalam University?",
      answer: `Yes, the university offers merit-based and need-based scholarships as per eligibility criteria. `,
    },
    {
      id: "item-3",
      question:
        "What career opportunities can a student pursue after a B.A. course? ",
      answer: `Graduates can explore careers in education, media, civil services, corporate roles, social sectors, or pursue higher studies.`,
    },
    {
      id: "item-4",
      question:
        "What are the eligibility criteria for admission to a B.A. course at K.R. Mangalam University?",
      answer: `Candidates must have completed 10+2 from a recognised board with the required minimum marks.`,
    },
    {
      id: "item-5",
      question: "Which B.A. courses does K.R. Mangalam University offer? ",
      answer: `The university offers B.A. programmes across disciplines such as Humanities, Social Sciences, and Liberal Arts. `,
    },
    {
      id: "item-6",
      question:
        "Does K.R. Mangalam University offer industry exposure in B.A. programmes?",
      answer: `Yes, B.A. students benefit from internships, workshops, expert sessions, and practical learning opportunities.`,
    },
  ],
};

export const businessHubData: BusinessHubSection = {
  heading: `Learn at One of India’s Biggest <br /> Business Hubs, Gurugram`,
  description:
    "Launch your career with future-ready specialisations, industry-aligned curriculum, and hands-on project learning at our modern Gurugram campus.",
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

export const applySectionData: ApplySectionData = {
  heading: `Begin Your Journey at K.R. Mangalam<br /> University Now`,
  description: "",
  cta: {
    label: "Apply for B.A. Programmes 2026–27",
    href: "#",
  },
  highlights: [
    { id: 1, text: "UGC Approved University" },
    { id: 2, text: "NAAC ‘A’ Accredited " },
    { id: 3, text: "18K+ Alumni Base" },
  ],
};


export const programmeContent = {
  badge: "11 Specialisations",
  title: "KRMU’s B.A. Programmes",
  subtitle:
    "All Our Programmes Comprise of Industry-relevant Curriculum",

  programmes: [
    {
      id: "1",
      tag: "English Literature",
      title: "B.A. (Hons.) English",
      subtitle: "",
      desc: "Builds skills in literature, language, and critical theory, preparing students for diverse careers.",
      duration: "3 Years",
      fees: "130000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
    },
    {
      id: "2",
      tag: "Research Path",
      title: "B.A. (Hons. / Hons. with Research) English",
      subtitle: "",
      desc: "Explore English literature, language, and culture, developing critical, writing, and research skills for careers.",
      duration: "4 Years",
      fees: "130000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
    },
    {
      id: "3",
      tag: "Economics Core",
      title: "B.A. (Hons.) Economics",
      subtitle: "",
      desc: "Builds foundations in economics, trade, and finance, developing analytical skills for diverse careers.",
      duration: "3 Years",
      fees: "130000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
    },
    {
      id: "4",
      tag: "Global Economics",
      title: "B.A. (Hons. / Hons. with Research) Economics",
      subtitle: "",
      desc: "Blends academics, practical learning, and research, building analytical skills for global careers in economics and policy.",
      duration: "4 Years",
      fees: "130000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
    },
    {
      id: "5",
      tag: "",
      title: "B.A. (Hons.) Psychology",
      subtitle: "",
      desc: "Prepares graduates for careers and higher studies in psychology across healthcare, education, corporate, NGOs, and government.",
      duration: "3 Years",
      fees: "142000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
    },
    {
      id: "6",
      tag: "",
      title: "B.A. (Hons. / Hons. with Research) Psychology",
      subtitle: "",
      desc: "Studies human psychology, developing critical thinking, research, communication, and data skills for diverse careers.",
      duration: "4 Years",
      fees: "142000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
    },
    {
      id: "7",
      tag: "",
      title: "B.A. (Hons.) Political Science",
      subtitle: "",
      desc: "Develops research skills through projects and collaboration, offering insights into politics, international relations, and administration.",
      duration: "3 Years",
      fees: "142000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
    },
    {
      id: "8",
      tag: "",
      title: "B.A. (Hons. / Hons. with Research) Political Science",
      subtitle: "",
      desc: "Gain knowledge of politics, governance, and global affairs, developing research, critical thinking, and communication skills for careers.",
      duration: "4 Years",
      fees: "142000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
    },
    {
      id: "9",
      tag: "",
      title: "B.Sc. Clinical Psychology (Hons.)**",
      subtitle: "",
      desc: "The course seeks to train students in mental health assessment, therapy, counselling, behavioural research, & psychological interventions.",
      duration: "4 Years",
      fees: "340000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
      eligibility: "To be updated",
    },
    {
      id: "10",
      tag: "",
      title: "B.A. Programme",
      subtitle: "",
      desc: "The B.A. Programme offers interdisciplinary humanities education, fostering critical thinking, communication, and analytical skills.",
      duration: "3 Years",
      fees: "130000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
      eligibility: "Passed 12th with 50% aggregate marks.",
    },
    {
      id: "11",
      tag: "",
      title: "B.A. (Hons. / Hons. with  Research) Liberal Arts",
      subtitle: "",
      desc: "An interdisciplinary undergraduate degree focused on broad-based learning across the humanities, social sciences, and creative disciplines.",
      duration: "4 Years",
      fees: "150000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
      eligibility: "Passed 12th with 50% aggregate marks.",
    },
  ],
};
