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
        BBA
      </span> Admissions Open 2026–27</span>
       <span class="hidden sm:block">
      ADMISSIONS <br />
      OPEN FOR <br />
      <span class="text-[#fcd404] text-2xl sm:text-3xl md:text-5xl lg:text-8xl font-bold">
       BBA 
      </span>
      <br />
      PROGRAMMES <br /> 2026-27
      </span>
    `,
  desc: `Start Building Your Future in <br /> Business and Management`,
  heroBg: "/wp-content/landingpage/bba-2026/bba.webp",

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
    imgUrl: "/landingpage/bba-2026/prominent/accenture.png",
    alt: "accenture Logo",
  },
  {
    imgUrl: "/landingpage/bba-2026/prominent/amazon.png",
    alt: "amazon Logo",
  },
  {
    imgUrl: "/landingpage/bba-2026/prominent/deloitte.png",
    alt: "deloitte Logo",
  },
  {
    imgUrl: "/wp-content/landingpage/bba-2026/recruiters/KPMG_blue_logo.png",
    alt: "kpmg Logo",
  },
  {
    imgUrl: "/landingpage/bba-2026/prominent/pepsico.png",
    alt: "pepsico Logo",
  },
];

export const whyKRM: WhyKRMSection = {
  heading: "Why Opt for BBA Programmes at KRMU?",
  subheading: "Shape Your Future with a Career-Focused Business Education",
  content: `The BBA programmes at K.R. Mangalam University provide the groundwork for future business executives to succeed in a variety of corporate positions or entrepreneurial endeavours. Our programmes, which is in line with NEP criteria, guarantee flexibility in length (3 or 4 years), combining academic knowledge with practical experience and real-world insights.`,
  imgUrl: `/landingpage/common/building.webp`,
  whyKrmCards: [
    {
      imgUrl: "/landingpage/bba-2026/why-opt/1-Card.jpg",
      content: `Multiple Specialisation Options in a NEP-Aligned Structure`,
    },
    {
      imgUrl: "/landingpage/bba-2026/why-opt/2-Card.jpg",
      content: `Industry Partnerships Providing Real-World Education and Placements`,
    },
    {
      imgUrl: "/landingpage/bba-2026/why-opt/3-Card.jpg",
      content: `Mentoring from Skilled Academics and Business Experts`,
    },
    {
      imgUrl: "/landingpage/bba-2026/why-opt/4-Card.jpg",
      content: `Contemporary Campus Facilities Designed for Experiential and Interactive Education`,
    },
  ],
};

export const industryExperts: IndustryExpertsSection = {
  eyebrow: "",
  heading: `Learn From <br /> Industry Experts`,
  description: `KRMU partners with major organisations to provide <br /> industry-specific training.`,
  cta: {
    label: "Apply for BBA 2026-27",
    href: "#",
  },
  cards: [
    {
      imgUrl: "/landingpage/bba-2026/experts/iide.webp",
      alt: "",
      title: "",
    },
    {
      imgUrl: "/landingpage/bba-2026/experts/ey-logo.webp",
      alt: "",
      title: "",
    },
    {
      imgUrl: "/wp-content/landingpage/bba-2026/logos/safexpress.jpg",
      alt: "",
      title: "",
    },
    {
      imgUrl: "/landingpage/bba-2026/experts/grant.webp",
      alt: "",
      title: "",
    },
    {
      imgUrl: "/landingpage/bba-2026/experts/gcec.webp",
      alt: "",
      title: "",
    },
  ],
  bannerImg: "/wp-content/landingpage/common/indus-exp.webp",
};

export const specialisationData: SpecialisationSection = {
  subheading: `Choose from KRMU’s BBA  programmes and start building your future in business and management.`,
  heading: `Our BBA  Programmes`,
  SpecialisationCard: [
    {
      imgUrl: "/landingpage/bba-2026/programs/bba-hr.jpg",
      title: `BBA (Human Resource)`,
      desc: `With an emphasis on human capital, strategic HR techniques, and people-oriented leadership, you may become an expert in talent management and organisational success.`,
      extraInfos: [
        {
          iconUrl: "/wp-content/landingpage/common/duration.svg",
          title: "Duration",
          desc: `3 Years`,
        },
        {
          iconUrl: "/wp-content/landingpage/common/eligibility.svg",
          title: "Eligibility",
          desc: `10+2 with a minimum of 50% marks`,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `Rs 1,85,000`,
        // },
      ],
    },
    {
      imgUrl: "/landingpage/bba-2026/programs/bba-hons-hr.jpg",
      title: `BBA (Hons. / Hons. with Research) Human Resource`,
      desc: `You may become an authority in talent management and organisational performance by focusing on human capital, strategic HR approaches, and people-oriented leadership.`,
      extraInfos: [
        {
          iconUrl: "/wp-content/landingpage/common/duration.svg",
          title: "Duration",
          desc: `4 Years`,
        },
        {
          iconUrl: "/wp-content/landingpage/common/eligibility.svg",
          title: "Eligibility",
          desc: `10+2 with a minimum of 50% marks`,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `Rs 1,85,000`,
        // },
      ],
    },
    {
      imgUrl: "/landingpage/bba-2026/programs/bba-marketing.jpg",
      title: `BBA Marketing`,
      desc: `With a BBA in Marketing, explore the realms of branding, consumer behaviour, and marketing tactics to develop successful marketing campaigns and spur company expansion.`,
      extraInfos: [
        {
          iconUrl: "/wp-content/landingpage/common/duration.svg",
          title: "Duration",
          desc: `3 Years`,
        },
        {
          iconUrl: "/wp-content/landingpage/common/eligibility.svg",
          title: "Eligibility",
          desc: `10+2 with a minimum of 50% marks`,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `Rs 1,85,000`,
        // },
      ],
    },
    {
      imgUrl: "/landingpage/bba-2026/programs/bba-hons-marketing.jpg",
      title: `BBA (Hons. / Hons. with Research) Marketing`,
      desc: `Understand branding, consumer behaviour, and marketing strategies with a BBA in marketing to create effective marketing campaigns and promote business growth.`,
      extraInfos: [
        {
          iconUrl: "/wp-content/landingpage/common/duration.svg",
          title: "Duration",
          desc: `4 Years`,
        },
        {
          iconUrl: "/wp-content/landingpage/common/eligibility.svg",
          title: "Eligibility",
          desc: `10+2 with a minimum of 50% marks`,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `Rs 1,85,000`,
        // },
      ],
    },
    {
      imgUrl: "/landingpage/bba-2026/programs/bba-finance.jpg",
      title: `BBA Finance`,
      desc: `Gain expertise in risk management, investment techniques, and corporate finance to position yourself for leadership in the financial industry.`,
      extraInfos: [
        {
          iconUrl: "/wp-content/landingpage/common/duration.svg",
          title: "Duration",
          desc: `3 Years`,
        },
        {
          iconUrl: "/wp-content/landingpage/common/eligibility.svg",
          title: "Eligibility",
          desc: `10+2 with a minimum of 50% marks`,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `Rs 1,85,000`,
        // },
      ],
    },
    {
      imgUrl: "/landingpage/bba-2026/programs/bba-hons-finance.jpg",
      title: `BBA (Hons. / Hons. with Research) Finance`,
      desc: `Develop your corporate finance, investment, and risk management abilities to position yourself for leadership in the financial industry.`,
      extraInfos: [
        {
          iconUrl: "/wp-content/landingpage/common/duration.svg",
          title: "Duration",
          desc: `4 Years`,
        },
        {
          iconUrl: "/wp-content/landingpage/common/eligibility.svg",
          title: "Eligibility",
          desc: `10+2 with a minimum of 50% marks`,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `Rs 1,70,000`,
        // },
      ],
    },
    {
      imgUrl:
        "/landingpage/bba-2026/programs/bba-digital-marketing-with-academic-support-of-iide.jpg",
      title: `BBA (Digital Marketing) with academic support of IIDE`,
      desc: `Proficiency in online branding, performance marketing, and social media analytics can help you succeed in the digital economy. `,
      extraInfos: [
        {
          iconUrl: "/wp-content/landingpage/common/duration.svg",
          title: "Duration",
          desc: `3 Years`,
        },
        {
          iconUrl: "/wp-content/landingpage/common/eligibility.svg",
          title: "Eligibility",
          desc: `10+2 with a minimum of 50% marks`,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `Rs 2,05,000`,
        // },
      ],
    },
    {
      imgUrl:
        "/landingpage/bba-2026/programs/bba-hons-digital-marketing-with-academic-support-of-iide.jpg",
      title: `BBA (Hons. / Hons. with Research) in Digital Marketing with academic support of IIDE`,
      desc: `You can succeed in the digital economy if you are proficient in social media analytics, performance marketing, and online branding.`,
      extraInfos: [
        {
          iconUrl: "/wp-content/landingpage/common/duration.svg",
          title: "Duration",
          desc: `4 Years`,
        },
        {
          iconUrl: "/wp-content/landingpage/common/eligibility.svg",
          title: "Eligibility",
          desc: `10+2 with a minimum of 50% marks`,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `Rs 2,05,000`,
        // },
      ],
    },
    {
      imgUrl: "/landingpage/bba-2026/programs/bba-International-business.jpg",
      title: `BBA International Business`,
      desc: `Gain knowledge of international trade, cross-cultural management, and international marketing techniques to get ready for global career opportunities.`,
      extraInfos: [
        {
          iconUrl: "/wp-content/landingpage/common/duration.svg",
          title: "Duration",
          desc: `3 Years`,
        },
        {
          iconUrl: "/wp-content/landingpage/common/eligibility.svg",
          title: "Eligibility",
          desc: `10+2 with a minimum of 50% marks`,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `Rs 1,85,000`,
        // },
      ],
    },
    {
      imgUrl:
        "/landingpage/bba-2026/programs/bba-hons-international-business.jpg",
      title: `BBA (Hons. / Hons. with Research) International Business`,
      desc: `Learn about international trade, cross-cultural management, and international marketing tactics to get ready for a worldwide career prospects.`,
      extraInfos: [
        {
          iconUrl: "/wp-content/landingpage/common/duration.svg",
          title: "Duration",
          desc: `4 Years`,
        },
        {
          iconUrl: "/wp-content/landingpage/common/eligibility.svg",
          title: "Eligibility",
          desc: `10+2 with a minimum of 50% marks`,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `Rs 1,85,000`,
        // },
      ],
    },
    {
      imgUrl: "/landingpage/bba-2026/programs/bba-travel-tourism.jpg",
      title: `BBA (Travel & Tourism)`,
      desc: `Give yourself the abilities and information required to succeed in the fast-paced global tourism sector.`,
      extraInfos: [
        {
          iconUrl: "/wp-content/landingpage/common/duration.svg",
          title: "Duration",
          desc: `3 Years`,
        },
        {
          iconUrl: "/wp-content/landingpage/common/eligibility.svg",
          title: "Eligibility",
          desc: `10+2 with a minimum of 50% marks`,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `Rs 1,85,000`,
        // },
      ],
    },
    {
      imgUrl: "/landingpage/bba-2026/programs/bba-hons-travel-tourism.jpg",
      title: `BBA (Hons. / Hons. with Research) Travel & Tourism`,
      desc: `Give yourself the skills and knowledge needed to thrive in the rapidly evolving global tourism industry. `,
      extraInfos: [
        {
          iconUrl: "/wp-content/landingpage/common/duration.svg",
          title: "Duration",
          desc: `4 Years`,
        },
        {
          iconUrl: "/wp-content/landingpage/common/eligibility.svg",
          title: "Eligibility",
          desc: `10+2 with a minimum of 50% marks`,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `Rs 1,85,000`,
        // },
      ],
    },
    {
      imgUrl: "/landingpage/bba-2026/programs/bba-ey.jpg",
      title: `BBA  (Business Analytics) with academic support of Ernst & Young (EY)`,
      desc: `Discover how to use decision-making tools, predictive analytics, and data visualisation to solve business problems.`,
      extraInfos: [
        {
          iconUrl: "/wp-content/landingpage/common/duration.svg",
          title: "Duration",
          desc: `3 Years`,
        },
        {
          iconUrl: "/wp-content/landingpage/common/eligibility.svg",
          title: "Eligibility",
          desc: `10+2 with a minimum of 50% marks`,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `Rs 2,10,000`,
        // },
      ],
    },
    {
      imgUrl: "/landingpage/bba-2026/programs/bba-hons-ey.jpg",
      title: `BBA (Hons. / Hons. with Research) (Business Analytics) with academic support of Ernst & Young (EY)`,
      desc: `It is a 4-year programme focused on integrating data analytics with strategic decision-making, providing strong technical skills for data-driven roles & preparing students for leadership in the data economy.`,
      extraInfos: [
        {
          iconUrl: "/wp-content/landingpage/common/duration.svg",
          title: "Duration",
          desc: `4 Years`,
        },
        {
          iconUrl: "/wp-content/landingpage/common/eligibility.svg",
          title: "Eligibility",
          desc: `10+2 with a minimum of 50% marks`,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `Rs 2,10,000`,
        // },
      ],
    },
     {
      imgUrl:
        "/landingpage/bba-2026/programs/bba-hons-logistics-safexpress.jpg",
      title: `BBA (Entrepreneurship) with academic support of GCEC Global Foundation`,
      desc: `With a BBA in Entrepreneurship, you can turn creative concepts into profitable businesses through startup ideation, venture capital, and learn management techniques.`,
      extraInfos: [
        {
          iconUrl: "/wp-content/landingpage/common/duration.svg",
          title: "Duration",
          desc: `3 Years`,
        },
        {
          iconUrl: "/wp-content/landingpage/common/eligibility.svg",
          title: "Eligibility",
          desc: `10+2 with a minimum of 50% marks`,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `Rs 2,05,000`,
        // },
      ],
    },
    {
      imgUrl: "/landingpage/bba-2026/programs/bba-hons-gcec.jpg",
      title: `BBA (Hons. / Hons. with Research) Entrepreneurship with academic support of GCEC Global Foundation`,
      desc: `You may use startup ideation, venture financing, and lean management strategies to transform innovative ideas into successful enterprises with a BBA in Entrepreneurship. `,
      extraInfos: [
        {
          iconUrl: "/wp-content/landingpage/common/duration.svg",
          title: "Duration",
          desc: `4 Years`,
        },
        {
          iconUrl: "/wp-content/landingpage/common/eligibility.svg",
          title: "Eligibility",
          desc: `10+2 with a minimum of 50% marks`,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `Rs 2,05,000`,
        // },
      ],
    },
    {
      imgUrl: "/landingpage/bba-2026/programs/bba-icf-grant-thornton.jpg",
      title: `BBA (International Accounting and Finance) (ACCA – UK) with academic support of Grant Thornton`,
      desc: `To focus on financial reporting and worldwide finance standards, pursue an internationally acknowledged ACCA-aligned programme.`,
      extraInfos: [
        {
          iconUrl: "/wp-content/landingpage/common/duration.svg",
          title: "Duration",
          desc: `3 Years`,
        },
        {
          iconUrl: "/wp-content/landingpage/common/eligibility.svg",
          title: "Eligibility",
          desc: `10+2 with a minimum of 50% marks`,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `Rs 2,05,000`,
        // },
      ],
    },
    {
      imgUrl: "/landingpage/bba-2026/programs/bba-hons-icf-grant-thornton.jpg",
      title: `BBA (Hons. / Hons. with Research) (International Accounting and Finance) (ACCA – UK) with academic support of Grant Thornton`,
      desc: `Pursue a globally recognised ACCA-aligned curriculum course with an emphasis on financial reporting and global finance standards.`,
      extraInfos: [
        {
          iconUrl: "/wp-content/landingpage/common/duration.svg",
          title: "Duration",
          desc: `4 Years`,
        },
        {
          iconUrl: "/wp-content/landingpage/common/eligibility.svg",
          title: "Eligibility",
          desc: `10+2 with a minimum of 50% marks`,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `Rs 2,05,000`,
        // },
      ],
    },
    {
      imgUrl: "/landingpage/bba-2026/programs/bba-logistics-safexpress.jpg",
      title: `BBA (Logistics and Supply Chain Management) with academic support of Safexpress`,
      desc: `This course has been meticulously designed to provide students with knowledge of procurement, warehousing, and logistics technology, focusing on supply chain and logistics strategy.`,
      extraInfos: [
        {
          iconUrl: "/wp-content/landingpage/common/duration.svg",
          title: "Duration",
          desc: `3 Years`,
        },
        {
          iconUrl: "/wp-content/landingpage/common/eligibility.svg",
          title: "Eligibility",
          desc: `10+2 with a minimum of 50% marks`,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `Rs 2,05,000`,
        // },
      ],
    },
    {
      imgUrl: "/landingpage/bba-2026/programs/bba-logistics-safexpress.jpg",
      title: `BBA (Hons. / Hons. with Research) (Logistics and Supply Chain Management) with academic support of Safexpress`,
      desc: `The course curriculum strives to provide students with a thorough grasp of how global supply chains function and how crucial they are to the success of contemporary firms.`,
      extraInfos: [
        {
          iconUrl: "/wp-content/landingpage/common/duration.svg",
          title: "Duration",
          desc: `4 Years`,
        },
        {
          iconUrl: "/wp-content/landingpage/common/eligibility.svg",
          title: "Eligibility",
          desc: `10+2 with a minimum of 50% marks`,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `Rs 2,05,000`,
        // },
      ],
    },
   
  ],
};

export const opportunityData: OpportunitySection = {
  image: {
    src: "/landingpage/bba-2026/opp/opp.png",
    alt: "Industry Expert",
    width: 300,
    height: 400,
  },
  heading: "Learn From Industry Experts",
  highlight: "Opportunity That Transforms",
  cta: {
    label: "Apply for BBA  2026-27",
    href: "#",
  },
};

export const testimonialsData: TestimonialsSection = {
  subheading: "Students’ Testimonials",
  heading: `Why Do Our Students Trust Us?`,
  testimonials: [
    {
      image: "/landingpage/bba-2026/testimonials/1.jpg",
      videoUrl: "#",
      quote: `Navigating through the BBA programme has been enlightening. The faculty's 
guidance and the practical approach to learning have been invaluable. It has 
equipped me with the skills and knowledge necessary for success in the business 
realm.`,
      name: "Ayush Rajput",
      programme: "",
    },
    {
      image: "/landingpage/bba-2026/testimonials/2.jpg",
      videoUrl: "#",
      quote: `Choosing BBA has been pivotal for my career aspirations. The curriculum's balance 
of theory and practical exposure has sharpened my business acumen. Grateful for 
the supportive learning environment and dedicated faculty.`,
      name: "Ankita",
      programme: "",
    },
    {
      image: "/landingpage/bba-2026/testimonials/3.jpg",
      videoUrl: "#",
      quote: `Embracing the BBA program has been transformative. The dynamic learning 
environment and emphasis on real-world applications have empowered me with the 
skills needed to excel in business management and leadership roles.`,
      name: "Arjun Sude",
      programme: "",
    },
    {
      image: "/landingpage/bba-2026/testimonials/4.jpg",
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
  heading: `World-Class Infrastructure`,
  description: `K.R. Mangalam University provides a world-class academic environment that supports effective teaching, learning, and research in legal education.
   The university is equipped with modern infrastructure and advanced learning resources designed to meet the academic and professional 
   requirements of undergraduate law programmes.`,
  footerText: ``,
  cta: {
    label: "Apply for BBA  2026-27 ",
    href: "#",
  },
  slides: [
    {
      image: "/landingpage/common/infra/1.webp",
      alt: "World Class Lab",
    },
    {
      image: "/landingpage/common/infra/2.webp",
      alt: "World Class Lab",
    },
    {
      image: "/landingpage/common/infra/3.webp",
      alt: "World Class Lab",
    },
    {
      image: "/landingpage/common/infra/4.webp",
      alt: "World Class Lab",
    },
    {
      image: "/landingpage/common/infra/5.webp",
      alt: "World Class Lab",
    },
    {
      image: "/landingpage/common/infra/6.webp",
      alt: "World Class Lab",
    },
    {
      image: "/landingpage/common/infra/7.webp",
      alt: "World Class Lab",
    },
    {
      image: "/landingpage/common/infra/8.webp",
      alt: "World Class Lab",
    },
    {
      image: "/landingpage/common/infra/9.webp",
      alt: "World Class Lab",
    },
    {
      image: "/landingpage/common/infra/10.webp",
      alt: "World Class Lab",
    },
  ],
};

export const lifeAsPhDScholarData: LifeAsPhDScholarSection = {
  heading: "Life as a BBA  Student at KRMU",
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

export const faqSectionData: FAQSectionData = {
  eyebrow: "(FAQs)",
  heading: "Frequently Asked Questions",
  description: "",
  faqs: [
    {
      id: "item-1",
      question: "What teaching methods are used in the BBA programmes?",
      answer: `The BBA curriculum emphasises: <br /> <br /><ul> <li>Case studies</li><li>Live projects</li><li> Internships</li><li>Industry interaction </li> <li>Presentations, simulations, and experiential learning</li></ul>`,
    },
    {
      id: "item-2",
      question: "Are internships mandatory in the BBA programme?",
      answer: `Yes! Internships and live projects are an integral part of the BBA curriculum to provide real-world business exposure and practical learning.`,
    },
    {
      id: "item-3",
      question:
        "What career opportunities are available after completing BBA from KRMU?",
      answer: `Graduates can pursue careers in: <br /><br /> 
       <ul>
        <li>Marketing, HR, Finance, Operations</li>
        <li>Business Analytics & Digital Marketing</li>
        <li>Banking, Consulting, Logistics & Supply Chain</li>
        <li>Entrepreneurship & Family Business</li>
       </ul>
       <br />
       They may also opt for MBA, PGDM, professional certifications (ACCA, CFA, etc.), or start their own ventures.

      `,
    },
    {
      id: "item-4",
      question: "Does the university provide placement support?",
      answer: `Yes, KRMU provides 100% placement support. We have a dedicated Career Development & Placement Cell that supports students through:
 <br /><br /> 
       <ul>
        <li>Career counselling</li>
        <li>Skill development workshops</li>
        <li>Internships</li>
        <li>Campus placements with reputed organisations</li>
       </ul>`,
    },
    {
      id: "item-5",
      question: "Are scholarships available for BBA students?",
      answer: `Yes! KRMU offers merit-based and need-based scholarships as per university norms and applicable guidelines.`,
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
    label: "Apply for BBA  2026-27",
    href: "#",
  },
  highlights: [
    { id: 1, text: "UGC Approved University" },
    { id: 2, text: "NAAC ‘A’ Accredited " },
    { id: 3, text: "18K+ Alumni Base" },
  ],
};



export const programmeContent = {
  badge: "22 Specialisations",
  title: "KRMU’s BBA Programmes",
  subtitle:
    "All Our Programmes Comprise of Industry-relevant Curriculum",

  programmes: [
    {
      id: "1",
      tag: "",
      title: "BBA (Human Resource)",
      subtitle: "",
      desc: "Develop expertise in human capital, strategic HR, leadership, organisational development, and talent management.",
      duration: "3 Years",
      fees: "200000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
    },
    {
      id: "2",
      tag: "",
      title: "BBA (Hons. / Hons. with Research) Human Resource",
      subtitle: "",
      desc: "Builds expertise in talent management, organisational performance, strategic HR, and leadership.",
      duration: "4 Years",
      fees: "200000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
    },
    {
      id: "3",
      tag: "Popular Choice",
      title: "BBA Marketing",
      subtitle: "",
      desc: "Explores branding, consumer behaviour, and tactics to drive successful campaigns and business growth.",
      duration: "3 Years",
      fees: "200000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
    },
    {
      id: "4",
      tag: "High Demand",
      title: "BBA (Hons. / Hons. with Research) Marketing",
      subtitle: "",
      desc: "Builds expertise in branding, consumer behaviour, and strategies to drive effective marketing campaigns.",
      duration: "4 Years",
      fees: "200000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
    },
    {
      id: "5",
      tag: "",
      title: "BBA Finance",
      subtitle: "",
      desc: "Builds expertise in risk management, investments, and corporate finance for financial leadership.",
      duration: "3 Years",
      fees: "200000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
    },
    {
      id: "6",
      tag: "",
      title: "BBA (Hons. / Hons. with Research) Finance",
      subtitle: "",
      desc: "Enhances skills in corporate finance, investments, risk management, and analytics to prepare for financial leadership.",
      duration: "4 Years",
      fees: "200000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
    },
    {
      id: "7",
      tag: "IIDE",
      title: "BBA Digital Marketing",
      subtitle: "",
      desc: "Gain expertise in online branding, performance marketing, and social media analytics to excel in the digital economy.",
      duration: "3 Years",
      fees: "225000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
    },
    {
      id: "8",
      tag: "IIDE",
      title: "BBA (Hons. / Hons. with Research) Digital Marketing",
      subtitle: "",
      desc: "Equips students to innovate, strategise, and lead in online branding.",
      duration: "4 Years",
      fees: "225000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
    },
    {
      id: "9",
      tag: "Global Edge",
      title: "BBA International Business",
      subtitle: "",
      desc: "Develops skills in trade, cross-cultural management, and global marketing for international career opportunities.",
      duration: "3 Years",
      fees: "200000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
    },
    {
      id: "10",
      tag: "Global Leadership",
      title: "BBA (Hons. / Hons. with Research) International Business",
      subtitle: "",
      desc: "Empowers students to master trade, cross-cultural leadership, and succeed in global markets.",
      duration: "4 Years",
      fees: "200000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
    },
    {
      id: "11",
      tag: "",
      title: "BBA Travel & Tourism",
      subtitle: "",
      desc: "Transforms your passion into a global career through hospitality, innovation, and experiences.",
      duration: "3 Years",
      fees: "200000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
    },
    {
      id: "12",
      tag: "",
      title: "BBA (Hons. / Hons. with Research) Travel & Tourism",
      subtitle: "",
      desc: "Equips students with skills and knowledge to excel in the evolving global tourism industry.",
      duration: "4 Years",
      fees: "200000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
    },
    {
      id: "13",
      tag: "EY",
      title: "BBA Business Intelligence & Analytics",
      subtitle: "",
      desc: "Empowers students to analyse data, generate insights, and lead businesses with smarter strategies.",
      duration: "3 Years",
      fees: "230000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
    },
    {
      id: "14",
      tag: "EY",
      title: "BBA (Hons. / Hons. with  Research) Business Intelligence & Analytics",
      subtitle: "",
      desc: "Blends data analytics with strategic decision-making, building technical skills and preparing students for data leadership.",
      duration: "4 Years",
      fees: "230000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
    },
    {
      id: "15",
      tag: "GCEC Global Foundation",
      title: "BBA Entrepreneurship",
      subtitle: "",
      desc: "Equips students to transform ideas into profitable businesses using startup, venture capital, and management skills.",
      duration: "3 Years",
      fees: "225000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
    },
    {
      id: "16",
      tag: "GCEC Global Foundation",
      title: "BBA (Hons. / Hons. with Research) Entrepreneurship",
      subtitle: "",
      desc: "Teaches startup ideation, venture financing, and lean management to turn innovative ideas into successful enterprises.",
      duration: "4 Years",
      fees: "225000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
    },
    {
      id: "17",
      tag: "Grant Thornton",
      title: "BBA International Accounting and Finance (ACCA – UK)",
      subtitle: "",
      desc: "Empowers students to analyse, strategise, and succeed in global financial markets.",
      duration: "3 Years",
      fees: "225000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
    },
    {
      id: "18",
      tag: "Grant Thornton",
      title: "BBA (Hons. / Hons. with Research) International Accounting and Finance (ACCA – UK)",
      subtitle: "",
      desc: "ACCA-aligned curriculum focusing on financial reporting and global finance standards.",
      duration: "4 Years",
      fees: "225000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
    },
    {
      id: "19",
      tag: "Safexpress",
      title: "BBA Logistics and Supply Chain Management",
      subtitle: "",
      desc: "Equips students with procurement, warehousing, and logistics knowledge, emphasising supply chain strategy.",
      duration: "3 Years",
      fees: "225000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
    },
    {
      id: "20",
      tag: "Safexpress",
      title: "BBA (Hons. / Hons. with Research) Logistics and Supply Chain Management",
      subtitle: "",
      desc: "Teaches how global supply chains operate and their critical role in modern business success.",
      duration: "4 Years",
      fees: "225000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
    },
    {
      id: "21",
      tag: "IBM",
      title: "Integrated BBA+MBA",
      subtitle: "",
      desc: "Offers seamless management education with industry exposure, leadership development, and accelerated career growth opportunities.",
      duration: "4 + 1 Years",
      fees: "",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
    },
    {
      id: "22",
      tag: "",
      title: "B.Sc. (Honours / Honours with Research) Finance**",
      subtitle: "",
      desc: "This course develops expertise in investment, risk management, financial analysis, markets, and strategic decision-making among students.",
      duration: "4 Years",
      fees: "240000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
      eligibility: "To be updated",
    },
  ],
};


export const eligibilityTerms = [
  {
    description: "** Subject to Approval"
  },
];