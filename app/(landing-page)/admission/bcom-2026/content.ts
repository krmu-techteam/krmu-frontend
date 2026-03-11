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
       B.Com.
      </span> Admissions Open 2026–27</span>
      <span class="hidden sm:block">
      ADMISSIONS <br />
      OPEN FOR <br />
      <span class="text-[#fcd404] text-2xl sm:text-3xl md:text-5xl lg:text-8xl font-bold">
       B.Com.
      </span>
      <br />
      PROGRAMMES <br /> 2026-27
     </span>
    `,
  desc: `Choose from specialised, <br /> industry-backed B.Com. <br />  programmes and  step confidently  <br />into the world of business <br /> and finance`,
  heroBg: "/wp-content/landingpage/bcom-2026/bcom.webp",
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
    subtitle: "Visiting recruiters",
  },
  {
    title: "₹27Cr ",
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
    imgUrl: "/landingpage/bcom-2026/recruiters/byjus.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/bcom-2026/recruiters/hcl.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/bcom-2026/recruiters/kpmg.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/bcom-2026/recruiters/hul.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/wp-content/landingpage/common/decathalon.svg",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/wp-content/landingpage/common/icici.svg",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/wp-content/landingpage/common/abg.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/bcom-2026/recruiters/wipro.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/bcom-2026/recruiters/dabur.png",
    alt: "Recruiter Logo",
  },
];

export const whyKRM: WhyKRMSection = {
  heading: "What Makes KRMU the Best Choice for B.Com. Programmes? ",
  subheading: "Build a Career with Strong Business Foundations ",
  content: `K.R. Mangalam University offers future-ready B.Com. programmes designed to build strong foundations in commerce, accounting, finance, and management. The curriculum combines academic depth with practical exposure, helping students understand how businesses function in the real world. With experienced faculty, industry-oriented learning, skill-based training, internships, and career guidance, the programmes prepare students for diverse careers in corporate roles, finance, entrepreneurship, and higher studies. `,
  imgUrl: `/landingpage/bcom-2026/why-choose/Building.webp`,
  whyKrmCards: [
    {
      imgUrl: "/landingpage/bcom-2026/why-choose/1.webp",
      content: `Emphasis on Hands-on-learning, Practical experience with sophisticated software for advanced modelling and construction preparation.`,
    },
    {
      imgUrl: "/landingpage/bcom-2026/why-choose/2.webp",
      content: `Portfolio Development Guidance for Internship and Job Prospects in Architectural Firms, Government Organisations, etc.`,
    },
    {
      imgUrl: "/landingpage/bcom-2026/why-choose/3.webp",
      content: `Participation in live projects and real-world assignments.`,
    },
    {
      imgUrl: "/landingpage/bcom-2026/why-choose/4.webp",
      content: `100% Placement and Internship Assistance.`,
    },
    {
      imgUrl: "/landingpage/bcom-2026/why-choose/5.webp",
      content: `Global Exposure in the form of a paid visit to 2 weeks of summer school at a Prestigious European university.`,
    },
  ],
};

export const industryExperts: IndustryExpertsSection = {
  eyebrow: "",
  heading: `Learn from Industry Expert
`,
  description: `K.R. Mangalam University takes pride in collaborating with industry leaders and skill professionals who offer unparalleled hands-on learning experiences to students.`,
  cta: {
    label: "Apply for B.Com. 2026-27",
    href: "#",
  },
  cards: [
    {
      imgUrl: "/landingpage/bcom-2026/learn-from/iide.png",
      alt: "IIDE Logo",
      title: "",
    },
    {
      imgUrl: "/landingpage/bcom-2026/learn-from/eydark.webp",
      alt: "Ey Logo",
      title: "",
    },
    {
      imgUrl: "/landingpage/bcom-2026/learn-from/samatrix.jpg",
      alt: "Samatrix Logo",
      title: "",
    },
    {
      imgUrl: "/landingpage/bcom-2026/learn-from/grant-thornton.png",
      alt: "Grant Thornton Logo",
      title: "",
    },
    {
      imgUrl: "/landingpage/bcom-2026/learn-from/gcec.png",
      alt: "GCEC Logo",
      title: "",
    },
  ],
  bannerImg: "/wp-content/landingpage/common/indus-exp.webp",
};

export const specialisationData: SpecialisationSection = {
  subheading: `Choose your specialisation based on your interests and career goals.`,
  heading: `Our B.Com. Programmes & Specialisations`,
  SpecialisationCard: [
    {
      imgUrl: "/landingpage/bcom-2026/specialisations/B.Com.-(Hons.).webp",
      title: `B.Com. (Hons.) `,
      // desc: `Build strong expertise in finance, accounting, business law, and taxation with B.Com. (Hons.). This specialised degree prepares you for careers in commerce, banking, financial analysis, and entrepreneurship by turning knowledge into practical, career-ready skills. `,
      desc: ``,
      extraInfos: [
        {
          iconUrl: "/wp-content/landingpage/common/duration.svg",
          title: "Duration:",
          desc: `3 Years`,
        },
        {
          iconUrl: "/wp-content/landingpage/common/eligibility.svg",
          title: "Eligibility",
          desc: `Passed 10+2 or equivalent examination from any recognised board/university with a minimum of 50% aggregate marks.`,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `Rs. 1,40,000`,
        // },
      ],
    },
    {
      imgUrl:
        "/landingpage/bcom-2026/specialisations/B.Com.-(Hons.--Hons.-With-Research).webp",
      title: `B.Com. (Hons. / Hons. with Research)`,
      // desc: `The programme builds strong foundations in business and commerce, combining theory, practical learning, research exposure, and entrepreneurial skills to prepare students for diverse careers and future business challenges. `,
      desc: ``,
      extraInfos: [
        {
          iconUrl: "/wp-content/landingpage/common/duration.svg",
          title: "Duration:",
          desc: `4 Years`,
        },
        {
          iconUrl: "/wp-content/landingpage/common/eligibility.svg",
          title: "Eligibility",
          desc: `Passed 10+2 or equivalent examination from any recognised board/university with a minimum of 50% aggregate marks.`,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `Rs. 1,40,000`,
        // },
      ],
    },
    {
      imgUrl:
        "/landingpage/bcom-2026/specialisations/B.Com.-(Hons.)-(International-Accounting-and-Finance)-(ACCA---UK)-With-academic-support-of-Grant-Thornton.webp",
      title: `B.Com. (Hons.) (International Accounting and Finance) (ACCA - UK) with academic support of Grant Thornton `,
      // desc: `The programme, with academic support from Grant Thornton, prepares students for global finance careers by combining strong academic foundations with professional ACCA-aligned learning and international exposure. `,
      desc: ``,
      extraInfos: [
        {
          iconUrl: "/wp-content/landingpage/common/duration.svg",
          title: "Duration:",
          desc: `3 Years`,
        },
        {
          iconUrl: "/wp-content/landingpage/common/eligibility.svg",
          title: "Eligibility",
          desc: `Passed 10+2 or equivalent examination from any recognised board/university with a minimum of 50% aggregate marks.`,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `Rs. 1,65,000`,
        // },
      ],
    },
    {
      imgUrl:
        "/landingpage/bcom-2026/specialisations/B.Com.-(Hons.-Hons.-with-Research)-(International-Accounting-and-Finance)-(ACCA---UK)-With-academic-support-of-Grant-Thornton.webp",
      title: `B.Com. (Hons. / Hons. with Research) (International Accounting and Finance) (ACCA - UK) with academic support of Grant Thornton `,
      // desc: `The programme supported by Grant Thornton Bharat, builds strong global accounting expertise and practical skills, preparing students for successful international careers in finance and accounting. `,
      desc: ``,
      extraInfos: [
        {
          iconUrl: "/wp-content/landingpage/common/duration.svg",
          title: "Duration:",
          desc: `4 Years`,
        },
        {
          iconUrl: "/wp-content/landingpage/common/eligibility.svg",
          title: "Eligibility",
          desc: `Passed 10+2 or equivalent examination from any recognised board/university with a minimum of 50% aggregate marks. `,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `Rs. 1,65,000`,
        // },
      ],
    },
    {
      imgUrl: "/landingpage/bcom-2026/specialisations/B.Com.-Programme.webp",
      title: `B.Com. Programme`,
      // desc: `The programme builds strong analytical, financial, and managerial skills. It prepares students for careers in marketing, finance, banking, and insurance through a balanced blend of practical learning and theoretical knowledge. `,
      desc: ``,
      extraInfos: [
        {
          iconUrl: "/wp-content/landingpage/common/duration.svg",
          title: "Duration:",
          desc: `3 Years`,
        },
        {
          iconUrl: "/wp-content/landingpage/common/eligibility.svg",
          title: "Eligibility",
          desc: `Passed 10+2 or equivalent examination from any recognised board/university with a minimum of 50% aggregate marks. `,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `Rs. 1,25,000`,
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
    label: "Apply for B.Com. 2026-27",
    href: "#",
  },
};

export const testimonialsData: TestimonialsSection = {
  subheading: "Our Testimonials ",
  heading: `Why do our schoolers love and trust K.R. Mangalam University?`,
  testimonials: [
    {
      image: "/landingpage/bcom-2026/testimonials/1.jpg",
      videoUrl: "#",
      quote: ` The B.Com. (Hons.) journey has been truly enriching. The comprehensive curriculum and industry-oriented projects have strengthened my analytical skills and prepared me for a successful career in commerce and beyond.
`,
      name: "Ananya Agarwal",
      programme: "B.Com. (Hons.)",
    },
    {
      image: "/landingpage/bcom-2026/testimonials/2.jpg",
      videoUrl: "#",
      quote: `Choosing B.Com. (Hons.) broadened my horizons. The holistic approach to education and strong focus on practical learning enhanced my understanding of commerce and built a solid foundation for my future. 
`,
      name: "Sriram Narayana",
      programme: "B.Com. (Hons.)",
    },
    {
      image: "/landingpage/bcom-2026/testimonials/3.jpg",
      videoUrl: "#",
      quote: `It was a great experience to be part of such an esteemed university. Completing my B.Com. (Hons.) degree here helped me acquire the essential skills required of a commerce professional. The state-of-the-art infrastructure makes it one of the best universities in Gurugram.`,
      name: "Tisha Arora",
      programme: "B.Com. (Hons.) ",
    },
    {
      image: "/landingpage/bcom-2026/testimonials/4.jpg",
      videoUrl: "#",
      quote: ` Campus life at K.R. Mangalam University was exciting and enriching. I gained valuable insights and skills that will benefit me in my future career. I am grateful to the faculty and the placement cell for their constant support and efforts toward student success. `,
      name: "Nikita Sharma,",
      programme: "B.Com. (Hons.) ",
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
      image: "/landingpage/bcom-2026/",
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
  heading: `World-Class Facilities at KRMU for B.Com. `,
  description: `K.R. Mangalam University offers a modern campus environment that supports academic excellence and practical learning for B.Com. students. The university features smart classrooms with advanced teaching tools and high-speed Wi-Fi, creating an interactive learning experience. Students benefit from well-equipped commerce and computer labs designed for accounting software, data analysis, and business simulations. The central library provides extensive books, journals, and digital resources to support academic research and coursework. Dedicated seminar halls, discussion rooms, and collaboration spaces encourage teamwork and industry-focused learning. Beyond academics, KRMU offers secure hostels, sports facilities, recreational spaces, and 24×7 connectivity, ensuring a balanced and enriching campus life. `,
  footerText: ``,
  cta: {
    label: "Apply for B.Com. 2026–27",
    href: "#",
  },
  slides: [
    {
      image: "/landingpage/bcom-2026/infrastructure/1.webp",
      alt: "World Class Lab",
    },
    {
      image: "/landingpage/bcom-2026/infrastructure/2.webp",
      alt: "Research Facility",
    },
    {
      image: "/landingpage/bcom-2026/infrastructure/3.webp",
      alt: "Innovation Center",
    },
    {
      image: "/landingpage/bcom-2026/infrastructure/4.webp",
      alt: "Library & Resources",
    },
    {
      image: "/landingpage/bcom-2026/infrastructure/5.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/bcom-2026/infrastructure/6.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/bcom-2026/infrastructure/7.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/bcom-2026/infrastructure/8.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/bcom-2026/infrastructure/9.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/bcom-2026/infrastructure/10.webp",
      alt: "Campus Infrastructure",
    },
  ],
};

export const lifeAsPhDScholarData: LifeAsPhDScholarSection = {
  heading: "Life as a B.Com. Student at KRMU",
  description: "",
  image: {
    src: "/landingpage/bcom-2026/student-at-krmu/Collage.webp",
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
      question:
        "What is the advantage of academic support from Grant Thornton? ",
      answer: `Students benefit from industry-driven insights, practical certifications, and hands-on exposure to real-world finance and accounting practices. `,
    },
    {
      id: "item-2",
      question:
        "Can I switch from the 3-year track to the 4-year Honours track later? ",
      answer: `Yes, eligible students may have the option to transition from the 3-year programme to the 4-year Honours track as per university guidelines. `,
    },
    {
      id: "item-3",
      question: "Are internships compulsory in the B.Com. programme?",
      answer: ` Yes, internships are an integral part of the programme to ensure practical exposure and industry readiness. `,
    },
    {
      id: "item-4",
      question: "Do the B.Com. programmes offer ACCA exemptions? ",
      answer: `Yes, the programme is aligned to provide ACCA exemptions, subject to meeting the required academic criteria. `,
    },
    {
      id: "item-5",
      question: "Is hostel accommodation available for B.Com. students? ",
      answer: `Yes, K.R. Mangalam University offers secure on-campus hostel facilities for both male and female students. `,
    },
    // {
    //   id: "item-6",
    //   question: "How can I find the best B.Com. colleges in Delhi? ",
    //   answer: `You can compare colleges based on curriculum, industry tie-ups, faculty expertise, placement records, and campus facilities. `,
    // },
    {
      id: "item-7",
      question: "Where can I pursue a B.Com. in Gurugram?",
      answer: `You can pursue a B.Com. programme at K.R. Mangalam University, Gurugram, which offers industry-aligned curriculum and strong academic support. `,
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
    label: "Apply for B.Com. 2026-27  ",
    href: "#",
  },
  highlights: [
    { id: 1, text: "UGC Approved University" },
    { id: 2, text: "NAAC ‘A’ Accredited " },
    { id: 3, text: "18K+ Alumni Base" },
  ],
};


export const programmeContent = {
  badge: "6 Specialisations",
  title: "KRMU’s B.Com. Programmes",
  subtitle:
    "All Our Programmes Comprise of Industry-relevant Curriculum",

  programmes: [
    {
      id: "1",
      tag: "",
      title: "B.Com. (Hons.)",
      subtitle: "",
      desc: "Build expertise in finance, accounting, law, and taxation for commerce and banking careers.",
      duration: "3 Years",
      fee: "₹2,30,000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
    },
    {
      id: "2",
      tag: "Research Path",
      title: "B.Com. (Hons. / Hons. With Research)",
      subtitle: "",
      desc: "Build strong business foundations through theory, practical learning, research, and entrepreneurship for diverse careers.",
      duration: "4 Years",
      fee: "₹2,30,000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
    },
    {
      id: "3",
      tag: "Grant Thornton",
      title: "B.Com. (Hons.) International Accounting and Finance (ACCA - UK)",
      subtitle: "",
      desc: "Grant Thornton-supported programme combining ACCA-aligned learning and international exposure for global finance careers.",
      duration: "3 Years",
      fee: "₹2,30,000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
    },
    {
      id: "4",
      tag: "Grant Thornton",
      title: "B.Com. (Hons. / Hons. with Research) International Accounting and Finance (ACCA - UK)",
      subtitle: "",
      desc: "Supported by Grant Thornton, the course builds global accounting expertise and practical skills for international finance careers.",
      duration: "4 Years",
      fee: "₹2,30,000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
    },
    {
      id: "5",
      tag: "",
      title: "B.Com. Programme",
      subtitle: "",
      desc: "Develop analytical, financial, and managerial skills for careers in marketing, finance, banking, and insurance.",
      duration: "3 Years",
      fee: "₹2,30,000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
    },
    {
      id: "6",
      tag: "",
      title: "B.Sc. (Honours / Honours with Research) Finance**",
      subtitle: "",
      desc: "This course develops expertise in investment, risk management, financial analysis, markets, and strategic decision-making among students.",
      duration: "4 Years",
      fee: "₹2,40,000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
      eligibility: "To be updated",
    },
  ],
};
