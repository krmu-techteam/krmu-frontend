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
         UG & PG
      </span> Admissions Open 2026–27</span>
      <span class="hidden sm:block">
      ADMISSIONS <br />
      OPEN FOR <br />
      <span class="text-[#fcd404] text-2xl sm:text-3xl md:text-5xl lg:text-8xl font-bold">
       UG & PG
      </span>
      <br />
      PROGRAMMES<br />2026-27</span>
    `,
  desc: `<span class="text-xs font-semibold p-2.5 bg-[#fcd404] text-black mt-2.5 block w-fit">Powered by Partnerships. Proven by Placements.</span>`,
  heroBg: "/wp-content/landingpage/bpt-2026/bpt.webp",
  middleImg: "",
  mobileImg: "",
  lpclName: "MainSection",
};

export const heroMarqueeData: HeroMarqueeSection = {
  messages: [
    "50+ Industry Collaborations",
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
    title: "₹21 Cr",
    subtitle: "Worth of Scholarships",
  },
  {
    title: "100%",
    subtitle: "Placement Assistance",
  },
];

// Recruiters list
export const prominentRecruiters: ProminentRecruit[] = [
  {
    imgUrl: "/wp-content/landingpage/common/ibm.png",
    alt: "Recruiter Logo",
  },

  {
    imgUrl: "/wp-content/landingpage/brand-2026/recruiters/accenture.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/wp-content/landingpage/brand-2026/recruiters/apple.svg",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/wp-content/landingpage/brand-2026/recruiters/amazon.webp",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/wp-content/landingpage/brand-2026/recruiters/deliotte.svg",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/wp-content/landingpage/brand-2026/recruiters/icici.svg",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/wp-content/landingpage/brand-2026/recruiters/infosys.png",
    alt: "Recruiter Logo",
  },
];

export const whyKRM: WhyKRMSection = {
  heading: "What Makes KRMU the Right Choice for UG & PG Programmes?",
  subheading: "Preaching, Preparing & Perfectioning Tomorrow’s Pioneers",
  content: `K.R. Mangalam University stands out as a preferred destination for both undergraduate and postgraduate education, offering an innovative, interdisciplinary curriculum supported by strong industry–academia partnerships. With world-class infrastructure, including smart classrooms and advanced laboratories, accomplished faculty, and a strong focus on holistic development, the University equips students with industry-ready skills, critical thinking, research orientation, and global exposure—enabling success across diverse academic and professional pathways.`,
  imgUrl: `/landingpage/common/whykrmtest.png`,
  whyKrmCards: [
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `Holistic Curriculum: A unique blend of conceptual theoretical knowledge and modern industry-relevant coursework to keep pace with evolving academic fields.`,
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `Placements: Impressive placement record via industry connections & support for resume building, communication skills, etc.`,
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `Modern Infrastructure: Access to an array of facilities like libraries, labs, housing, sports facilities, and cultural resources.`,
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `Global Exposure: Promotes holistic growth with opportunities like student exchange programs and collaborations with international scholars.`,
    },
  ],
};

export const industryExperts: IndustryExpertsSection = {
  eyebrow: "",
  heading: `Learn from<br />Leaders @ KRMU!`,
  description: `K.R. Mangalam University takes pride in collaborating with industry leaders and skill professionals who offer unparalleled hands-on learning experiences to students.`,
  cta: {
    label: "Apply for UG/PG 2026-27",
    href: "#",
  },
  cards: [
    {
      imgUrl: "/wp-content/landingpage/brand-2026/learn-from/ibm.png",
      alt: "Logo",
      title: "",
    },
    {
      imgUrl: "/wp-content/landingpage/brand-2026/learn-from/imaginxp.svg",
      alt: "Logo",
      title: "",
    },
    {
      imgUrl: "/wp-content/landingpage/brand-2026/learn-from/eccoun.jpg",
      alt: "Logo",
      title: "",
    },
    {
      imgUrl: "/wp-content/landingpage/brand-2026/learn-from/xebia.png",
      alt: "Logo",
      title: "",
    },
  ],
  bannerImg: "/wp-content/landingpage/common/indus-exp.webp",
};

export const specialisationData: SpecialisationSection = {
  subheading: `Choose from KRMU’s BBA (UG) programmes and start building your future in business and management.`,
  heading: `Our BBA (UG) Programmes`,
  SpecialisationCard: [
    {
      imgUrl: "/landingpage/common/dummy.png",
      title: `BBA (Human Resource)`,
      desc: `With an emphasis on human capital, strategic HR techniques, and people-oriented leadership, you may become an expert in talent management and organisational success.`,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `3 Years`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Eligibility",
          desc: `10+2 with a minimum of 50% marks`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Annual Fee",
          desc: `Rs 1,85,000`,
        },
      ],
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      title: `BBA (Hons. / Hons. with Research) Human Resource`,
      desc: `You may become an authority in talent management and organisational performance by focussing on human capital, strategic HR approaches, and people-oriented leadership.`,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `4 Years`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Eligibility",
          desc: `10+2 with a minimum of 50% marks`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Annual Fee",
          desc: `Rs 1,85,000`,
        },
      ],
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      title: `BBA Marketing`,
      desc: `With a BBA in Marketing, explore the realms of branding, consumer behaviour, and marketing tactics to develop successful marketing campaigns and spur company expansion.`,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `3 Years`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Eligibility",
          desc: `10+2 with a minimum of 50% marks`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Annual Fee",
          desc: `Rs 1,85,000`,
        },
      ],
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      title: `BBA (Hons. / Hons. with Research) Marketing`,
      desc: `Investigate branding, consumer behaviour, and marketing strategies with a BBA in marketing to create effective marketing campaigns and promote business growth.`,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `4 Years`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Eligibility",
          desc: `10+2 with a minimum of 50% marks`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Annual Fee",
          desc: `Rs 1,85,000`,
        },
      ],
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      title: `BBA Finance`,
      desc: `Gain expertise in risk management, investment techniques, and corporate finance to position yourself for leadership in the financial industry.`,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `3 Years`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Eligibility",
          desc: `10+2 with a minimum of 50% marks`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Annual Fee",
          desc: `Rs 1,85,000`,
        },
      ],
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      title: `BBA (Hons. /Hons. with Research) Finance`,
      desc: `Develop your corporate finance, investment, and risk management abilities to position yourself for leadership in the financial industry.`,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `4 Years`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Eligibility",
          desc: `10+2 with a minimum of 50% marks`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Annual Fee",
          desc: `Rs 1,70,000`,
        },
      ],
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      title: `BBA (Digital Marketing) with Academic Support of IIDE`,
      desc: `Proficiency in online branding, performance marketing, and social media analytics can help you succeed in the digital economy. `,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `3 Years`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Eligibility",
          desc: `10+2 with a minimum of 50% marks`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Annual Fee",
          desc: `Rs 2,05,000`,
        },
      ],
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      title: `BBA (Hons./ Hons. with Research) in Digital Marketing with Academic Support of IIDE`,
      desc: `You can succeed in the digital economy if you are proficient in social media analytics, performance marketing, and online branding.`,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `4 Years`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Eligibility",
          desc: `10+2 with a minimum of 50% marks`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Annual Fee",
          desc: `Rs 2,05,000`,
        },
      ],
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      title: `BBA International Business`,
      desc: `Gain knowledge of international trade, cross-cultural management, and international marketing techniques to get ready for a worldwide career.`,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `3 Years`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Eligibility",
          desc: `10+2 with a minimum of 50% marks`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Annual Fee",
          desc: `Rs 1,85,000`,
        },
      ],
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      title: `BBA (Hons./ Hons. with Research) International Business`,
      desc: `Learn about international trade, cross-cultural management, and international marketing tactics to get ready for a worldwide job.`,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `4 Years`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Eligibility",
          desc: `10+2 with a minimum of 50% marks`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Annual Fee",
          desc: `Rs 1,85,000`,
        },
      ],
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      title: `BBA (Travel & Tourism)`,
      desc: `Give yourself the abilities and information required to succeed in the fast-paced global tourist sector.`,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `3 Years`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Eligibility",
          desc: `10+2 with a minimum of 50% marks`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Annual Fee",
          desc: `Rs 1,85,000`,
        },
      ],
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      title: `BBA (Hons. / Hons. with Research) Travel & Tourism`,
      desc: `Give yourself the skills and knowledge needed to thrive in the rapidly evolving global tourism industry. `,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `4 Years`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Eligibility",
          desc: `10+2 with a minimum of 50% marks`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Annual Fee",
          desc: `Rs 1,85,000`,
        },
      ],
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      title: `BBA  (Business Analytics) with Academic Support of Ernst & Young (EY)`,
      desc: `Discover how to use decision-making tools, predictive analytics, and data visualisation to solve business problems.`,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `3 Years`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Eligibility",
          desc: `10+2 with a minimum of 50% marks`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Annual Fee",
          desc: `Rs 2,10,000`,
        },
      ],
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      title: `BBA Hons. / Hons. with Research) (Business Analytics) with academic support of Ernst & Young (EY)`,
      desc: `Discover how to use decision-making tools, predictive analytics, and data visualisation to solve business problems.`,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `4 Years`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Eligibility",
          desc: `10+2 with a minimum of 50% marks`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Annual Fee",
          desc: `Rs 2,10,000`,
        },
      ],
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      title: `BBA (Hons. / Hons. with Research) Entrepreneurship with Academic Support of GCEC Global Foundation`,
      desc: `You may use startup ideation, venture financing, and lean management strategies to transform innovative ideas into successful enterprises with a BBA in Entrepreneurship. `,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `4 Years`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Eligibility",
          desc: `10+2 with a minimum of 50% marks`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Annual Fee",
          desc: `Rs 2,05,000`,
        },
      ],
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      title: `BBA (International Accounting and Finance) (ACCA – UK) with Academic Support of Grant Thornton`,
      desc: `To focus on financial reporting and worldwide finance standards, pursue an internationally acknowledged ACCA-aligned programme.`,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `3 Years`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Eligibility",
          desc: `10+2 with a minimum of 50% marks`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Annual Fee",
          desc: `Rs 2,05,000`,
        },
      ],
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      title: `BBA (Hons. / Hons. with Research) International Accounting and Finance (ACCA – UK) with academic support of Grant Thornton`,
      desc: `Pursue a globally recognised ACCA-aligned curriculum with an emphasis on financial reporting and global finance standards.`,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `4 Years`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Eligibility",
          desc: `10+2 with a minimum of 50% marks`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Annual Fee",
          desc: `Rs 2,05,000`,
        },
      ],
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      title: `BBA (Logistics and Supply Chain Management) with academic support of Safexpress)`,
      desc: `With knowledge of procurement, warehousing, and logistics technology, focus on supply chain and logistics strategy.`,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `3 Years`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Eligibility",
          desc: `10+2 with a minimum of 50% marks`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Annual Fee",
          desc: `Rs 2,05,000`,
        },
      ],
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      title: `BBA (Hons. / Hons. with Research) Logistics and Supply Chain Management with Academic Support of Safexpress`,
      desc: `Focus on supply chain and logistics strategy and have knowledge of procurement, warehousing, and logistics technology.`,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `4 Years`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Eligibility",
          desc: `10+2 with a minimum of 50% marks`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Annual Fee",
          desc: `Rs 2,05,000`,
        },
      ],
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      title: `BBA (Hons. / Hons. with Research) Logistics and Supply Chain Management with Academic Support of Safexpress`,
      desc: `Focus on supply chain and logistics strategy and have knowledge of procurement, warehousing, and logistics technology.`,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `4 Years`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Eligibility",
          desc: `10+2 with a minimum of 50% marks`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Annual Fee",
          desc: `Rs 2,05,000`,
        },
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
    label: "Apply for UG/PG 2026-27",
    href: "#",
  },
};

export const testimonialsData: TestimonialsSection = {
  subheading: "Students’ Testimonials",
  heading: `Still in Doubt? </br> See What Our Students Say About Us!`,
  testimonials: [
    {
      image: "/landingpage/common/dummy.png",
      videoUrl: "#",
      quote: `Navigating through the BBA programme has been enlightening. The faculty's 
guidance and the practical approach to learning have been invaluable. It has 
equipped me with the skills and knowledge necessary for success in the business 
realm.`,
      name: "Ayush Rajput",
      programme: "",
    },
    {
      image: "/landingpage/common/dummy.png",
      videoUrl: "#",
      quote: `Choosing BBA has been pivotal for my career aspirations. The curriculum's balance 
of theory and practical exposure has sharpened my business acumen. Grateful for 
the supportive learning environment and dedicated faculty.`,
      name: "Ankita",
      programme: "",
    },
    {
      image: "/landingpage/common/dummy.png",
      videoUrl: "#",
      quote: `Embracing the BBA program has been transformative. The dynamic learning 
environment and emphasis on real-world applications have empowered me with the 
skills needed to excel in business management and leadership roles.`,
      name: "Arjun Sude",
      programme: "",
    },
    {
      image: "/landingpage/common/dummy.png",
      videoUrl: "#",
      quote: `Embarking on the BBA journey has been rewarding. The interactive sessions, industry 
exposure, and supportive faculty. `,
      name: "Kalpana",
      programme: "BBA",
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
  heading: `Modern Facilities & State-of-the Art Infrastructure`,
  description: `At K.R. Mangalam University, the conceptual knowledge is imparted to students in modern smart classrooms that are equipped with interactive whiteboards and seamless tech integration. The availability of the industry-aligned labs, collaborative spaces, and round-the-clock student support facilities fosters innovation as well as leads to the holistic development of students, thereby making them ready to take on their future goals.`,
  footerText: ``,
  cta: {
    label: "Apply for UG/PG 2026-27",
    href: "#",
  },
  slides: [
    {
      image: "/landingpage/common/image.png",
      alt: "World Class Lab",
    },
    {
      image: "/landingpage/common/image.png",
      alt: "Research Facility",
    },
    {
      image: "/landingpage/common/image.png",
      alt: "Innovation Center",
    },
    {
      image: "/landingpage/common/image.png",
      alt: "Library & Resources",
    },
    {
      image: "/landingpage/common/image.png",
      alt: "Campus Infrastructure",
    },
  ],
};

export const lifeAsPhDScholarData: LifeAsPhDScholarSection = {
  heading: "Life as an Undergraduate Student at KRMU",
  description: "",
  image: {
    src: "/landingpage/common/test44.jpeg",
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
  description:
    "",
  faqs: [
    {
      id: "item-1",
      question: "What programmes does K.R. Mangalam University offer?",
      answer: `The K.R. Mangalam University offers various undergraduate and postgraduate programmes in diverse fields, including engineering, management, law, applied sciences, architecture, health sciences, humanities and more.`,
    },
    {
      id: "item-2",
      question: "What is the K.R. Mangalam University admission process?",
      answer: `An individual can begin with his/her admission process at K.R. Mangalam University via the University’s online application portal available on the website. The KRMU also offers assistance through its admission office for any queries or guidance required during the application process.`,
    },
    {
      id: "item-3",
      question: "Does KRMU provide hostel accommodation?",
      answer: `Yes, KRMU provides separate hostels for boys and girls with modern amenities and 24/7 security.`,
    },
    {
      id: "item-4",
      question:
        "Does the university offer scholarships or financial aid to students?",
      answer: `Yes, the KRMU offers various scholarships and financial aid programmes based on academic merit, sports achievements, and economic requirements. Detailed information about it can be found in the scholarships section of the website.`,
    },
    {
      id: "item-5",
      question:
        "Why is K.R. Mangalam University said to be one of the best colleges in Gurugram?",
      answer: `The unparalleled quality of learning, expert and experienced faculty, international collaborations, and an excellent placement record have placed KRMU among the top colleges in Gurugram.`,
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
  heading: `Begin Your Journey at K.R. Mangalam University Now`,
  description: "",
  cta: {
    label: "Apply for UG/PG 2026-27",
    href: "#",
  },
  highlights: [
    { id: 1, text: "UGC Approved University" },
    { id: 2, text: "NAAC ‘A’ Accredited " },
    { id: 3, text: "18K+ Alumni Base" },
  ],
};
