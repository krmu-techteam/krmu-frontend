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
      ADMISSIONS <br />
      OPEN FOR <br />
      <span class="text-[#fcd404] text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold">
       B.Sc. (Hons.) Agriculture
      </span>
      <br />
      PROGRAMME <br /> 2026-27 
    `,
  desc: `Discover the foundation of agricultural excellence <br /> with K.R. Mangalam University’s 
   four-year agriculture programme, <br /> designed  to build strong agrarian knowledge, <br />practical expertise, and an understanding <br /> of modern farming practices`,
  heroBg: "/wp-content/landingpage/bsc-agriculture-2026/bscbg.webp",
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
    title: "56.6 LPA",
    subtitle: "Highest Package",
  },
  {
    title: "800+",
    subtitle: "Top Recruiters",
  },
  {
    title: "₹27 Cr",
    subtitle: "Worth of Scholarships",
  },
  {
    title: "92%",
    subtitle: "Placement Record",
  },
];

// Recruiters list
export const prominentRecruiters: ProminentRecruit[] = [
  {
    imgUrl: "/landingpage/bsc-agriculture-2026/recruiters/cargill.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/bsc-agriculture-2026/recruiters/cnh.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/bsc-agriculture-2026/recruiters/john.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/bsc-agriculture-2026/recruiters/zyndex.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/bsc-agriculture-2026/recruiters/syngeta.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/bsc-agriculture-2026/recruiters/mahyco.png",
    alt: "Recruiter Logo",
  },
];

export const whyKRM: WhyKRMSection = {
  heading: "Why Choose B.Sc. (Hons.) Agriculture Course at KRMU?",
  subheading: "Shape Your Future with a Career-Focused Business Education",
  content: `K.R. Mangalam University’s Agriculture programme blends strong theoretical knowledge with hands-on training to prepare students for real-world agricultural challenges. Through field visits, workshops, expert lectures, and practical exposure, students gain insight into modern farming practices. Supported by experienced faculty, advanced laboratories, and research facilities, the programme encourages learning in areas such as agronomy, soil science, and sustainable agriculture, shaping skilled and industry-ready professionals.`,
  imgUrl: `/landingpage/bsc-agriculture-2026/why-choose/Building.webp`,
  whyKrmCards: [
    {
      imgUrl: "/landingpage/bsc-agriculture-2026/why-choose/1.webp",
      content: `Industry-aligned curriculum designed by agricultural experts, integrating scientific theory with hands-on farming and field practices`,
    },
    {
      imgUrl: "/landingpage/bsc-agriculture-2026/why-choose/2.webp",
      content: `Mentorship by experienced agri-professionals and researchers with strong industry and academic backgrounds`,
    },
    {
      imgUrl: "/landingpage/bsc-agriculture-2026/why-choose/3.webp",
      content: `Future-ready programme that equips students with skills aligned to evolving agricultural technologies and sustainable practices`,
    },
    {
      imgUrl: "/landingpage/bsc-agriculture-2026/why-choose/4.webp",
      content: `Student-centric infrastructure, including modern laboratories, research farms, and smart classrooms to enhance learning and campus life`,
    },
  ],
};

export const industryExperts: IndustryExpertsSection = {
  eyebrow: "",
  heading: `Learn From <br /> Industry Experts`,
  description: `KRMU partners with major organisations to provide <br /> industry-specific training.`,
  cta: {
    label: "Apply for B.Sc. Agriculture 2026",
    href: "#",
  },
  cards: [
    {
      imgUrl: "",
      alt: "",
      title: "",
    },
  ],
  bannerImg: "",
};

export const specialisationData: SpecialisationSection = {
  subheading: `Your Future, Our Priority`,
  heading: `KRMU’s B.Sc. (Hons.) Agriculture Programme`,
  SpecialisationCard: [
    {
      imgUrl: "/landingpage/bsc-agriculture-2026/prog/bsc-agri.jpg",
      title: `B.Sc. (Hons.) Agriculture`,
      desc: `This four-year undergraduate programme equips students with strong agrarian knowledge and practical skills. Structured in line with ICAR guidelines, the curriculum addresses key agricultural challenges and aligns with current industry standards. `,
      extraInfos: [
        {
          iconUrl: "/wp-content/landingpage/common/duration.svg",
          title: "Duration:",
          desc: `4 Years`,
        },
        {
          iconUrl: "/wp-content/landingpage/common/eligibility.svg",
          title: "Eligibility",
          desc: `Must have passed 10+2 or equivalent examination from any recognised board/university in Physics, Chemistry, Maths/Biology/Agriculture with a minimumof  50% aggregate marks. `,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `Rs 1,40,000`,
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
    label: "Apply for BBA (UG) 2026-27",
    href: "#",
  },
};

export const testimonialsData: TestimonialsSection = {
  subheading: "Students’ Testimonials",
  heading: `Why Do Our Students Trust Us?`,
  testimonials: [
    {
      image: "/landingpage/bsc-agriculture-2026/testimonials/1.webp",
      videoUrl: "#",
      quote: `Thrilled with my education at K.R. Mangalam University, Sohna. I learned leadership, 
time management, and embraced nature. Now, a project assistant in a DST government 
project at the university.`,
      name: "Tufail- Project Assistant DST",
      programme: "Govt. of India",
    },
    {
      image: "/landingpage/bsc-agriculture-2026/testimonials/2.webp",
      videoUrl: "#",
      quote: `K.R. Mangalam University excels with its great environment and ragging-free campus, 
particularly in hostel life. Now a farm supervisor, I pursue my passion for natural farming.`,
      name: "Saqlain",
      programme: "Farm Supervisor, Gir Amritphal Gaushala Trust",
    },
    {
      image: "/landingpage/bsc-agriculture-2026/testimonials/3.webp",
      videoUrl: "#",
      quote: `At SOAS, as a B.Sc. (Hons.) Agriculture student, I thrive on professor-led activities and 
competitions. Field trips offered me real-world insights into agriculture.`,
      name: "Aayushi",
      programme: "",
    },
    {
      image: "/landingpage/bsc-agriculture-2026/testimonials/4.webp",
      videoUrl: "#",
      quote: `K.R. Mangalam University provides us with the facilities to build live projects from the lab to the field and field to lab 
      to increase students' knowledge and skills with the latest technologies and models.`,
      name: "Sagar ",
      programme: "",
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
  heading: `World-Class Facilities`,
  description: `K.R. Mangalam University offers world-class facilities that support both academic learning and practical training across disciplines. Students benefit from modern classrooms, well-equipped laboratories, a comprehensive resource library, and advanced teaching aids that encourage innovative learning approaches. In addition, discipline-specific facilities such as specialised labs, field-based learning spaces, and research support for agriculture-related studies further enhance hands-on exposure. Together, these facilities ensure students are well-prepared to excel in diverse professional and academic environments.`,
  footerText: ``,
  cta: {
    label: "Apply for B.Sc. 2026–27",
    href: "#",
  },
  slides: [
    {
      image: "/landingpage/bsc-agriculture-2026/infrastructure/1.webp",
      alt: "World Class Lab",
    },
    {
      image: "/landingpage/bsc-agriculture-2026/infrastructure/2.webp",
      alt: "Research Facility",
    },
    {
      image: "/landingpage/bsc-agriculture-2026/infrastructure/3.webp",
      alt: "Innovation Center",
    },
    {
      image: "/landingpage/bsc-agriculture-2026/infrastructure/4.webp",
      alt: "Library & Resources",
    },
    {
      image: "/landingpage/bsc-agriculture-2026/infrastructure/5.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/bsc-agriculture-2026/infrastructure/6.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/bsc-agriculture-2026/infrastructure/7.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/bsc-agriculture-2026/infrastructure/8.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/bsc-agriculture-2026/infrastructure/9.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/bsc-agriculture-2026/infrastructure/10.webp",
      alt: "Campus Infrastructure",
    },
  ],
};

export const lifeAsPhDScholarData: LifeAsPhDScholarSection = {
  heading: "Life as an Agriculture Student at KRMU ",
  description: "",
  image: {
    src: "/landingpage/bsc-agriculture-2026/student-at-krmu/Collage.webp",
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
      question: "What are the benefits of B.Sc. (Hons.) Agriculture?",
      answer: `The programme offers a robust foundation in agricultural sciences combined with practical training, state-of-the-art lab work, and real-world field experience, ensuring you are well-prepared for diverse career opportunities.`,
    },
    {
      id: "item-2",
      question: "Is B.Sc. Agriculture good for the future?",
      answer: `Absolutely Yes! As agriculture is the backbone of India's rural economy, this degree equips you with the skills and knowledge necessary to drive innovation and sustainable practices in the sector.`,
    },
    {
      id: "item-3",
      question:
        "What are the prerequisite skills for pursuing a B.Sc. (Hons.) Agriculture?",
      answer: `Candidates should have passed 10+2 or an equivalent examination in Physics, Chemistry, Maths/Biology/Agriculture with a minimum of 50% marks and possess a strong passion for agricultural sciences.`,
    },
    {
      id: "item-4",
      question:
        "What is the teaching methodology used in the B.Sc. (Hons.) Agriculture programme?",
      answer: `The programme employs a blend of classroom lectures, hands-on laboratory experiments, extensive fieldwork, and internships—aligned with the ICAR curriculum—to ensure a balanced theoretical and practical learning experience.`,
    },
    {
      id: "item-5",
      question:
        "How does the programme prepare students for the evolving agricultural sector?",
      answer: `By integrating modern agricultural techniques, sustainable farming practices, and advanced research projects, the curriculum equips you with the expertise needed to tackle current and future challenges in agriculture.`,
    },
    {
      id: "item-6",
      question:
        "Are there opportunities for students to participate in national or international agricultural conferences and seminars?",
      answer: `Yes, students are encouraged to attend both national and international conferences and seminars to broaden their perspectives, network with industry leaders, and stay updated on global agricultural trends.`,
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
  heading: `Begin Your Journey at K.R. Mangalam<br /> University now`,
  description: "",
  cta: {
    label: "Apply for B.Sc. 2026–27",
    href: "#",
  },
  highlights: [
    { id: 1, text: "UGC Approved University" },
    { id: 2, text: "NAAC ‘A’ Accredited " },
    { id: 3, text: "18K+ Alumni Base" },
  ],
};



export const programmeContent = {
  badge: "Learn Smart. Farm Smarter",
  title: "KRMU’s B.Sc. (Hons.) Agriculture Programme",
  subtitle:
    "Our Programme Comprise of Industry-relevant Curriculum",

  programmes: [
    {
      id: "1",
      tag: "Popular Choice",
      title: "B.Sc. (Hons.) Agriculture",
      subtitle: "",
      desc: "Four-year undergraduate programme delivering agrarian knowledge and practical skills per ICAR, preparing students for modern agricultural challenges.",
      duration: "4 Years",
      eligibility: "Passed 12th with 50% aggregate marks.*",
      fees: "",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
    },
  ],
};


export const eligibilityTerms = [
  {
    description: "*Eligibility: Must have passed 10+2 or equivalent examination from any recognised board/university in Physics, Chemistry, Maths/Biology/Agriculture with a minimum of  50% aggregate marks. "
  },
];
