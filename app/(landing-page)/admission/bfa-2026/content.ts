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
       BFA
      </span> Admissions Open 2026–27</span>
      <span class="hidden sm:block">
      ADMISSIONS <br />
      OPEN FOR <br />
      <span class="text-[#fcd404] text-2xl sm:text-3xl md:text-5xl lg:text-8xl font-bold">
       BFA
      </span>
      <br />
      PROGRAMMES <br /> 2026-27
      </span>
    `,
  desc: `A Structured Pathway to Professional <br /> Fine Arts Practice`,
  heroBg: "/wp-content/landingpage/bfa-2026/bfa.webp",
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
    subtitle: "Recruiters",
  },
  {
    title: "Up To ₹27 Cr",
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
    imgUrl: "/landingpage/bfa-2026/recruiters/persistent.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/bfa-2026/recruiters/zynga.webp",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/bfa-2026/recruiters/splash.webp",
    alt: "Recruiter Logo",
  },
];

export const whyKRM: WhyKRMSection = {
  heading: "Why Select KRMU's BFA Programmes?",
  subheading: "Where Creativity Finds Its Direction",
  content: `K.R. Mangalam University's Bachelor of Fine Arts (BFA) curriculum offers a unparalleled fusion of conventional methods and contemporary artistic approaches. This curriculum fosters creativity, ingenuity, and craftsmanship, regardless of your career goals—painting, sculpture, or graphic design. Students acquire the technical know-how, creative vision, and professional insights necessary to succeed in the creative business through cutting-edge studios, industry partnerships, and international exposure.`,
  imgUrl: `/landingpage/bfa-2026/why-choose/Building.webp`,
  whyKrmCards: [
    {
      imgUrl: "/landingpage/bfa-2026/why-choose/1.webp",
      content: `Innovative Studios & Workshops: Fully furnished areas for mixed media, digital design, painting, and sculpting.`,
    },
    {
      imgUrl: "/landingpage/bfa-2026/why-choose/2.webp",
      content: `Exhibition Opportunities: Students increase their professional awareness by showcasing their work at public events and galleries.`,
    },
    {
      imgUrl: "/landingpage/bfa-2026/why-choose/3.webp",
      content: `Comprehensive Curriculum: A comprehensive curriculum that strikes a balance between theory, practical application, and contemporary creative tendencies.`,
    },
  ],
};

export const industryExperts: IndustryExpertsSection = {
  eyebrow: "",
  heading: `Learn From <br /> Industry Experts`,
  description: `KRMU partners with major organisations to provide <br /> industry-specific training`,
  cta: {
    label: "Apply for BFA 2026-2027",
    href: "#",
  },
  cards: [
    {
      imgUrl: "/landingpage/bfa-2026/learn-from/item-1.png",
      alt: "Logo",
      title: "",
    },
    {
      imgUrl: "/landingpage/bfa-2026/learn-from/son.png",
      alt: "Logo",
      title: "",
    },
    {
      imgUrl: "/landingpage/bfa-2026/learn-from/rv.png",
      alt: "Logo",
      title: "",
    },
    {
      imgUrl: "/landingpage/bfa-2026/learn-from/pmca.png",
      alt: "Logo",
      title: "",
    },
  ],
  bannerImg: "/wp-content/landingpage/common/indus-exp.webp",
};

export const specialisationData: SpecialisationSection = {
  subheading: `Choose the specialisations based on your interest and career goals!`,
  heading: `Our BFA  Programme`,
  SpecialisationCard: [
    {
      imgUrl: "/landingpage/bfa-2026/specialisations/1.webp",
      title: `Bachelor of Fine Arts (BFA) (Painting & Applied Arts)`,
      desc: `The Bachelor of Fine Arts (BFA) in Painting & Applied Arts is designed to nurture creative talent while developing strong technical and conceptual skills in visual arts. The programme combines traditional painting techniques with applied art practices, enabling students to explore creative expression alongside practical design applications. Through studio-based learning and expert mentorship, students build artistic proficiency and a professional creative identity.`,
      extraInfos: [
        {
          iconUrl: "/wp-content/landingpage/common/duration.svg",
          title: "Duration:",
          desc: `4 Years`,
        },
        {
          iconUrl: "/wp-content/landingpage/common/eligibility.svg",
          title: "Eligibility",
          desc: ` Passed the 10+2 or comparable exam in any stream with at least 50% marks.`,
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
  heading: "Learn From Industry Experts",
  highlight: "Opportunity That Transforms",
  cta: {
    label: "Apply for BFA (UG) 2026-2027",
    href: "#",
  },
};

export const testimonialsData: TestimonialsSection = {
  subheading: "Students’ Testimonials",
  heading: `Why do Aspirants Prefer KRMU?`,
  testimonials: [
    {
      image: "/landingpage/bfa-2026/testimonials/1.webp",
      videoUrl: "#",
      quote: `As a BFA student at K.R. Mangalam University, I have grown tremendously as an artist 
and individual. Coming from M.D Sr. Sec. School, where I first discovered my passion 
for art, I was looking for a college that would nurture my creativity while providing 
professional opportunities. K.R. Mangalam University has exceeded my expectations 
with its inspiring and dynamic atmosphere, access to professional-grade studios, 
galleries, and cutting-edge technology.
`,
      name: "Khushboo Dhariwal",
      programme: "",
    },
    {
      image: "/landingpage/bfa-2026/testimonials/2.webp",
      videoUrl: "#",
      quote: `I am Yashika Dang, a creative individual with a unique journey from commerce to 
the arts. After earning my B.Com degree from M.D.U. and completing my schooling 
at DAV, I realised my passion for creativity during COVID. This newfound interest led 
me to pursue a BFA at K.R. Mangalam, where I am now exploring and refining my 
artistic skills. My background gives me a diverse perspective, and I am eager to bring 
innovation and creativity into my work.
`,
      name: "Yashika Dang",
      programme: "",
    },
    {
      image: "/landingpage/bfa-2026/testimonials/3.webp",
      videoUrl: "#",
      quote: `I am currently a second-year BFA Applied Arts student, and my journey so far has 
been both inspiring and transformative. Over the past two years, I have had the 
opportunity to develop my creative skills, explore various art forms, and gain a deeper 
understanding of visual communication. The faculty has been incredibly supportive, 
guiding us through practical applications, industry trends, and conceptual thinking.
`,
      name: "Kanan Yadav",
      programme: "",
    },
    {
      image: "/landingpage/bfa-2026/testimonials/5.webp",
      videoUrl: "#",
      quote: `I am a dedicated and passionate Bachelor of Fine Arts (BFA) student at K.R. Mangalam 
University with a strong foundation in the arts. Immersed in various artistic disciplines, 
including Applied Arts, Visual Art, and Sculpture, I bring enthusiasm and creativity to 
every project. My keen eye for detail and deep commitment to artistic expression are 
especially evident in my favourite field—Applied Arts. With a relentless drive to explore 
and innovate, I aspire to make a meaningful impact in the world of visual arts.
`,
      name: "Megha",
      programme: "",
    },
  ],
};

export const scholarResearchImpactData: ScholarResearchImpactSection = {
  heading: "Our Scholars’ Research Impact",
  description:
    "K.R. Mangalam University offers top-notch, industry-standard facilities and specialized design labs, creating a sophisticated ecosystem of high-end studios and cutting-edge technology that empowers B.Des. students to bring their creative visions to life.",
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
      image: "/landingpage/bfa-2026/why-choose/Building.webp",
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
  heading: `World-Class Facilities for BFA at KRMU`,
  description: `K.R. Mangalam University provides a vibrant and creative environment with state-of-the-art Art studios, well-equipped workshops, and dedicated exhibition spaces that support artistic exploration and expression. Students benefit from professional-grade tools and materials, digital design labs, and collaboration areas that promote experimentation and innovation. The university’s central library with rich visual arts resources, along with regular workshops, art events, and live projects, ensures exposure to diverse artistic practices and industry trends, helping students grow as confident creative professionals.`,
  footerText: ``,
  cta: {
    label: "Apply for BFA 2026-2027 ",
    href: "#",
  },
  slides: [
    {
      image: "/landingpage/bfa-2026/infrastructure/1.webp",
      alt: "World Class Lab",
    },
    {
      image: "/landingpage/bfa-2026/infrastructure/2.webp",
      alt: "Research Facility",
    },
    {
      image: "/landingpage/bfa-2026/infrastructure/3.webp",
      alt: "Innovation Center",
    },
    {
      image: "/landingpage/bfa-2026/infrastructure/4.webp",
      alt: "Library & Resources",
    },
    {
      image: "/landingpage/bfa-2026/infrastructure/5.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/bfa-2026/infrastructure/6.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/bfa-2026/infrastructure/7.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/bfa-2026/infrastructure/8.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/bfa-2026/infrastructure/9.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/bfa-2026/infrastructure/10.webp",
      alt: "Campus Infrastructure",
    },
  ],
};

export const lifeAsPhDScholarData: LifeAsPhDScholarSection = {
  heading: "Life as a BFA Student at KRMU",
  description: "",
  image: {
    src: "/landingpage/bfa-2026/student-at-krmu/Collage.webp",
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
  description: "",
  faqs: [
    {
      id: "item-1",
      question: "Do BFA students have access to internships at KRMU?",
      answer: `Indeed, as part of the curriculum, students gain internships at advertising companies, museums, galleries, art studios, and creative agencies.`,
    },
    {
      id: "item-2",
      question: "What kind of facilities are available for BFA students?",
      answer: `KRMU offers painting studios, sculpture labs, digital art labs, photography studios, and exhibition galleries to support creative learning.`,
    },
    {
      id: "item-3",
      question:
        "Is there exposure to the industry and practical project experience?",
      answer: `Indeed, students take part in actual projects, exhibits, workshops, design contests, and partnerships with businesses and experienced artists.`,
    },
    {
      id: "item-4",
      question: "Are BFA students eligible for scholarships?",
      answer: `Yes, KRMU offers scholarships for creative quality, distinction, and need to qualified students.`,
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
    label: "Apply for BFA 2026-2027",
    href: "#",
  },
  highlights: [
    { id: 1, text: "UGC Approved University" },
    { id: 2, text: "NAAC ‘A’ Accredited " },
    { id: 3, text: "18K+ Alumni Base" },
  ],
};


export const programmeContent = {
  badge: "From vision to canvas",
  title: "KRMU’s BFA Programme",
  subtitle:
    "Our Programme Comprise of Industry-relevant Curriculum",

  programmes: [
    {
      id: "1",
      tag: "Popular Choice",
      title: "Bachelor of Fine Arts (BFA) (Painting & Applied Arts)",
      subtitle: "",
      desc: "The course combines studio learning, mentorship, painting techniques, & applied art for creative, practical design skills.",
      duration: "4 Years",
      eligibility: "Passed 12th with 50% aggregate marks.",
      fees: "",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
    },
  ],
};