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
        Medical & Allied
      </span> Admissions Open 2026–27</span>
      <span class="hidden sm:block">ADMISSIONS <br />
      OPEN FOR <br />
      <span class="text-[#fcd404] text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold">
       Medical & Allied <br />Sciences
      </span>
      <br />
      PROGRAMMES <br />2026-27 </span>
    `,
  desc: `Start your healthcare journey with <br /> knowledgeable  instructors,  cutting-edge labs, <br /> industry-exposure, and career-focused <br />  curriculum`,
  heroBg:
    "/wp-content/landingpage/allied-health-science-2026/allied-health-science.webp",
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
    subtitle: "Top Recruiters",
  },
  {
    title: "₹27 Cr",
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
    imgUrl: "/landingpage/allied-health-science-2026/recruiters/astra.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/allied-health-science-2026/recruiters/lupin.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/allied-health-science-2026/recruiters/sun.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/allied-health-science-2026/recruiters/glenmark.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/allied-health-science-2026/recruiters/drreddy.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/allied-health-science-2026/recruiters/zydus.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/allied-health-science-2026/recruiters/genzyme.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/allied-health-science-2026/recruiters/max.png",
    alt: "Recruiter Logo",
  },
];

export const whyKRM: WhyKRMSection = {
  heading: "Why Choose Medical and Allied Sciences Programmes at KRMU?",
  subheading: "Build a Career That Makes a Real Difference",
  content: `K.R. Mangalam University, in association with Emversity, offers industry-aligned Allied Health Sciences programmes built to global healthcare standards. Designed with doctors and practitioners, these work-integrated courses combine practical training, VR-enabled infrastructure, immersive internships, strong hospital partnerships, placement support, and international exposure to prepare students for impactful healthcare careers.`,
  imgUrl: `/landingpage/allied-health-science-2026/why-choose/Building.webp`,
  whyKrmCards: [
    {
      imgUrl: "/landingpage/allied-health-science-2026/why-choose/1.webp",
      content: `•	Work-integrated courses with placement support and immersive industry internships`,
    },
    {
      imgUrl: "/landingpage/allied-health-science-2026/why-choose/2.webp",
      content: `•	Industry-relevant curriculum co-designed with doctors and practitioners`,
    },
    {
      imgUrl: "/landingpage/allied-health-science-2026/why-choose/3.webp",
      content: `•	State-of-the-art infrastructure with advanced VR labs`,
    },
    {
      imgUrl: "/landingpage/allied-health-science-2026/why-choose/4.webp",
      content: `•	Strong hospital partnerships offering placements and international exposure`,
    },
  ],
};

export const industryExperts: IndustryExpertsSection = {
  eyebrow: "",
  heading: `Learn From <br /> Industry Expert`,
  description: `K.R. Mangalam University takes pride in collaborating with the industry leaders who offer top-notch hands-on learning experiences to students.`,
  cta: {
    label: "Apply for Medical Allied Sciences 2026-27",
    href: "#",
  },
  cards: [
    {
      imgUrl: "/landingpage/allied-health-science-2026/learn-from/ibm.png",
      alt: "IBM Logo",
      title: "",
    },
    {
      imgUrl: "/wp-content/landingpage/common/imaginxp.svg",
      alt: "ImaginXP Logo",
      title: "",
    },
    {
      imgUrl: "/landingpage/allied-health-science-2026/learn-from/eccoun.jpg",
      alt: "EC-Councils Logo",
      title: "",
    },
    {
      imgUrl: "/landingpage/allied-health-science-2026/learn-from/xebia.png",
      alt: "Xebia Logo",
      title: "",
    },
  ],
  bannerImg: "/wp-content/landingpage/common/indus-exp.webp",
};

export const specialisationData: SpecialisationSection = {
  subheading: `Choose your specialisation based on your interests and career goals.`,
  heading: `Our Medical & Allied Sciences Programmes & Specialisations`,
  SpecialisationCard: [
    {
      imgUrl: "/landingpage/allied-health-science-2026/specialisations/s1.webp",
      title: `B.Sc. (Hons.) Emergency Medical Technology with Academic & Industry support of Emversity`,
      desc: `Acquire vital skills in emergency medical care, life-saving techniques, and trauma management to excel in the fast-paced world of emergency healthcare.`,
      extraInfos: [
        {
          iconUrl: "/wp-content/landingpage/common/duration.svg",
          title: "Duration:",
          desc: `3 + 1 Years (Including 1 Year Internship)`,
        },
        {
          iconUrl: "/wp-content/landingpage/common/eligibility.svg",
          title: "Eligibility",
          desc: `Candidates must have passed 10+2 or an equivalent recognised examination with at least 50% aggregate in PCM, PCB, or PCMB.`,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fees: "", //   title: "Annual Fee",
        //   desc: `Rs 2,40,000`,
        // },
      ],
    },
    {
      imgUrl: "/landingpage/allied-health-science-2026/specialisations/s2.webp",
      title: `B.Sc. (Hons.) Respiratory Technology with Academic & Industry Support of Emversity`,
      desc: `Learn essential skills in respiratory care, diagnostic procedures, and patient management to build a strong foundation in today’s advanced healthcare industry.`,
      extraInfos: [
        {
          iconUrl: "/wp-content/landingpage/common/duration.svg",
          title: "Duration:",
          desc: `3 + 1 Years (Including 1 Year Internship)`,
        },
        {
          iconUrl: "/wp-content/landingpage/common/eligibility.svg",
          title: "Eligibility",
          desc: `Candidates must have passed 10+2 or an equivalent recognised examination with at least 50% aggregate in PCM, PCB, or PCMB.`,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fees: "", //   title: "Annual Fee",
        //   desc: `Rs 2,40,000`,
        // },
      ],
    },
    {
      imgUrl: "/landingpage/allied-health-science-2026/specialisations/s3.webp",
      title: `B. Sc. (Hons.) Cardiovascular Technology with Academic & Industry Support of Emversity`,
      desc: `Gain expertise in cardiovascular diagnostics, interventional procedures, and patient care techniques to excel in today’s advanced healthcare environment`,
      extraInfos: [
        {
          iconUrl: "/wp-content/landingpage/common/duration.svg",
          title: "Duration:",
          desc: `3 + 1 Years (Including 1 Year Internship)`,
        },
        {
          iconUrl: "/wp-content/landingpage/common/eligibility.svg",
          title: "Eligibility",
          desc: `Candidates must have passed 10+2 or an equivalent recognised examination with at least 50% aggregate in PCM, PCB, or PCMB.`,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fees: "", //   title: "Annual Fee",
        //   desc: `Rs 2,40,000`,
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
    label: "Apply for Medical Allied Sciences 2026-27",
    href: "#",
  },
};

export const testimonialsData: TestimonialsSection = {
  subheading: "Our Testimonials",
  heading: `Why do our schoolers love and trust K.R. Mangalam University?`,
  testimonials: [
    {
      image: "/landingpage/allied-health-science-2026/testimonials/1.webp",
      videoUrl: "#",
      quote: `My journey as a B.Sc. (Hons.) EMT student at K.R. Mangalam University has been truly  
enriching. The university offers a supportive learning environment, experienced faculty, and strong practical exposure that have helped me build a solid foundation in medical   Knowledge.`,
      name: "Kashish Pal pursuing B.Sc. (Hons.) EMT",
      programme: "",
    },
    {
      image: "/landingpage/allied-health-science-2026/testimonials/2.webp",
      videoUrl: "#",
      quote: `I am proud to be a student of K.R. Mangalam University, pursuing B.Sc. (Hons.) in Cardiovascular Technology. 
      The university offers an excellent academic environment with advanced infrastructure, well-equipped laboratories,
       and a strong focus on practical and Clinical Learning.`,
      name: "Divyanshu University,",
      programme: "pursuing B.Sc. (Hons) ",
    },
    {
      image: "/landingpage/allied-health-science-2026/testimonials/3.webp",
      videoUrl: "#",
      quote: `K.R. Mangalam University offers state-of-the-art laboratories, modern classrooms, a well-stocked library, sports facilities, hostels, and innovation hubs that greatly enhance the student learning experience. The Emergency Medical Technology programme prepared me to become skilled healthcare professionals capable of delivering pre-hospital emergency care and basic life support.  
`,
      name: "Anshu",
      programme: "B.Sc. (Hons.) EMT ",
    },
    {
      image: "/landingpage/allied-health-science-2026/testimonials/4.webp",
      videoUrl: "#",
      quote: `My experience at K.R. Mangalam University has been extremely positive and enriching. The university provides a nurturing academic environment where students are encouraged to learn, grow, and excel. `,
      name: "Vanshika",
      programme: "B.Sc (Hons.) ",
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
      image: "/landingpage/why-choose/1.webp",
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
  description: `K.R. Mangalam University offers a modern campus designed to support academic excellence and hands-on learning for B.Sc. students. Smart classrooms with advanced teaching tools and high-speed Wi-Fi create an interactive learning environment. Well-equipped laboratories enable practical training, experimentation, and skill development across disciplines. The central library provides extensive print and digital resources to support learning and research. Dedicated seminar halls, collaborative spaces, and innovation areas encourage teamwork and creative thinking. Beyond academics, the campus features secure hostels, sports and recreational facilities, and round-the-clock connectivity, ensuring a balanced and enriching student life.`,
  footerText: ``,
  cta: {
    label: "Apply for Medical Allied Sciences 2026-27",
    href: "#",
  },
  slides: [
    {
      image: "/landingpage/allied-health-science-2026/infrastructure/1.webp",
      alt: "World Class Lab",
    },
    {
      image: "/landingpage/allied-health-science-2026/infrastructure/2.webp",
      alt: "Research Facility",
    },
    {
      image: "/landingpage/allied-health-science-2026/infrastructure/3.webp",
      alt: "Innovation Center",
    },
    {
      image: "/landingpage/allied-health-science-2026/infrastructure/4.webp",
      alt: "Library & Resources",
    },
    {
      image: "/landingpage/allied-health-science-2026/infrastructure/5.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/allied-health-science-2026/infrastructure/6.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/allied-health-science-2026/infrastructure/7.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/allied-health-science-2026/infrastructure/8.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/allied-health-science-2026/infrastructure/9.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/allied-health-science-2026/infrastructure/10.webp",
      alt: "Campus Infrastructure",
    },
  ],
};

export const lifeAsPhDScholarData: LifeAsPhDScholarSection = {
  heading: "Life as an B.Sc. Student at KRMU ",
  description: "",
  image: {
    src: "/landingpage/allied-health-science-2026/student-at-krmu/Collage.webp",
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
        "What is the eligibility criteria for Medical & Allied Sciences courses?",
      answer: `Candidates must have passed Class 12 in the Science stream with Physics, Chemistry, and Biology, securing a minimum of 50% marks.`,
    },
    {
      id: "item-2",
      question: "Are scholarships available?",
      answer: `Yes, the University offers both merit-based and need-based scholarships. For detailed information, please visit the scholarships page.`,
    },
    {
      id: "item-3",
      question: "What placement support does the University provide?",
      answer: `The University offers dedicated placement support, including structured training and placement drives with leading recruiters.`,
    },
    {
      id: "item-4",
      question:
        "What B.Sc. courses are available under the Allied Health Sciences domain?",
      answer: `The University offers the following B.Sc. programmes:
      <ul>
      <li>Cardiovascular Technology</li>
      <li>Respiratory Technology</li>
      <li>Emergency Medical Technology</li>
      </ul>`,
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
    label: "Apply for Medical Allied Sciences 2026-27",
    href: "#",
  },
  highlights: [
    { id: 1, text: "UGC Approved University" },
    { id: 2, text: "NAAC ‘A’ Accredited " },
    { id: 3, text: "18K+ Alumni Base" },
  ],
};



export const programmeContent = {
  badge: "3 Specialisations",
  title: "KRMU’s Medical & Allied Sciences Programmes",
  subtitle:
    "All Our Programmes Comprise of Industry-relevant Curriculum",

  programmes: [
    {
      id: "1",
      tag: "Emversity",
      title: "(B.EMT) Emergency Medical Technologist (Paramedic)**",
      subtitle: "",
      desc: "Gain vital emergency care, lifesaving, and trauma management skills for fast-paced healthcare careers.",
      duration: "3 + 1 Years (Including 1 Year Internship)",
      fees: "260000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
      eligibility: "Passed 12th with 50% aggregate marks.*",
    },
    {
      id: "2",
      tag: "Emversity",
      title: "(B.RT) Bachelor of Respiratory Technology**",
      subtitle: "",
      desc: "Develop essential respiratory care, diagnostics, and patient management skills for today’s advanced healthcare industry.",
      duration: "3 + 1 Years (Including 1 Year Internship)",
      fees: "260000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
      eligibility: "Passed 12th with 50% aggregate marks.*",
    },
    {
      id: "3",
      tag: "Emversity",
      title: "B.Sc. (Hons.) Cardiovascular Technology**",
      subtitle: "",
      desc: "Gain expertise in cardiovascular diagnostics, interventional procedures, and patient care for advanced healthcare careers.",
      duration: "3 + 1 Years (Including 1 Year Internship)",
      fees: "260000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
      eligibility: "Passed 12th with 50% aggregate marks.*",
    },
  ],
};


export const eligibilityTerms = [
  {
    description: "*Eligibility: Candidates must have passed the Higher Secondary (10+2), or equivalent examination recognised by any Indian University or a duly constituted Board with minimum 50% aggregate marks in PCM (Physics, Chemistry and Mathematics) / PCB (Physics, Chemistry and Biology) / PCMB (Physics, Chemistry, Mathematics and Biology."
  },
  {
    description: "** Subject to Approval"
  },
];
