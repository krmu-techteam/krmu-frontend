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
         B.Sc.
      </span> Admissions Open 2026–27</span>
      <span class="hidden sm:block">
      ADMISSIONS <br />
      OPEN FOR <br />
      <span class="text-[#fcd404] text-2xl sm:text-3xl md:text-5xl lg:text-8xl font-bold">
       B.Sc.
      </span>
      <br />
      PROGRAMMES<br />2026-27</span>
    `,
  desc: `Begin a focused and future-oriented academic <br /> journey with B.Sc. programmes  designed to <br /> inculcate scientific thinking, <br /> problem-solving, and practical skills among <br /> students for diverse roles across emerging <br /> and established industries`,
  heroBg: "/wp-content/landingpage/bsc-2026/bsc.webp",
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
    subtitle: "visiting recruiters",
  },
  {
    title: "₹27Cr",
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
    imgUrl: "/landingpage/bsc-2026/recruiters/aimil.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/bsc-2026/recruiters/itc.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/bsc-2026/recruiters/ecs.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/bsc-2026/recruiters/fortis.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/bsc-2026/recruiters/medanta.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/wp-content/landingpage/common/isro.svg",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/bsc-2026/recruiters/drdo.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/bsc-2026/recruiters/ibm.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/bsc-2026/recruiters/tcs.png",
    alt: "Recruiter Logo",
  },
];
export const whyKRM: WhyKRMSection = {
  heading: "Why Choose B.Sc. Programmes at KRMU?",
  subheading: "Build a Career Grounded in Knowledge and Skills ",
  content: `K.R. Mangalam University offers thoughtfully designed B.Sc. programmes that focus on strong scientific fundamentals, analytical thinking, and practical application. With expert faculty, hands-on learning, interdisciplinary exposure, and structured career support, students are prepared for industry roles, research opportunities, and higher education. `,
  imgUrl: `/landingpage/bsc-2026/why-choose/Building.webp`,
  whyKrmCards: [
    {
      imgUrl: "/landingpage/bsc-2026/why-choose/1.webp",
      content: `Interdisciplinary, Research-Driven, updated according to NEP guidelines `,
    },
    {
      imgUrl: "/landingpage/bsc-2026/why-choose/2.webp",
      content: `Prolific Researchers, Visionary, adaptable `,
    },
    {
      imgUrl: "/landingpage/bsc-2026/why-choose/3.webp",
      content: `Problem-Based Learning, Flipped Classroom, Peer Teaching `,
    },
    {
      imgUrl: "/landingpage/bsc-2026/why-choose/4.webp",
      content: `Well-equipped and organized labs, Cutting-edge research facilities`,
    },
  ],
};

export const industryExperts: IndustryExpertsSection = {
  eyebrow: "",
  heading: `Learn from <br /> Industry Expert
`,
  description: `The B.Sc. programmes at KRMU are enriched by academic and professional inputs from experienced knowledge partners`,
  cta: {
    label: `B.Sc. Programmes 2026-2027`,
    href: "#",
  },
  cards: [
    {
      imgUrl: "/landingpage/bsc-2026/learn-from/houston.png",
      alt: "Apple Logo",
      title: "AI and Machine Learning Courses",
    },
    {
      imgUrl: "/landingpage/bsc-2026/learn-from/hansraj.png",
      alt: "Apple Logo",
      title: "AI and Machine Learning Courses",
    },
    {
      imgUrl: "/landingpage/bsc-2026/learn-from/flower.png",
      alt: "Apple Logo",
      title: "AI and Machine Learning Courses",
    },
    {
      imgUrl: "/landingpage/bsc-2026/learn-from/enva.png",
      alt: "Apple Logo",
      title: "AI and Machine Learning Courses",
    },
  ],
  bannerImg: "/wp-content/landingpage/common/indus-exp.webp",
};

export const specialisationData: SpecialisationSection = {
  subheading: `Choose your specialisations based on your interests and career goals.`,
  heading: `Our B.Sc. Programmes & Specialisations `,
  SpecialisationCard: [
    {
      imgUrl:
        "/landingpage/bsc-2026/specialisations/B.Sc.-(Hons.--Hons.-with-Research-)-Physics.webp",
      title: `B.Sc. (Hons. / Hons. with Research ) Physics `,
      desc: `A programme that builds strong foundations in physics while introducing advanced theories and research-based learning. With modern laboratories and cutting-edge technology, students gain hands-on experience and develop analytical skills for deeper exploration in physics.`,
      extraInfos: [
        {
          iconUrl: "/wp-content/landingpage/common/duration.svg",
          title: "Duration:",
          desc: `4 Years`,
        },
        {
          iconUrl: "/wp-content/landingpage/common/eligibility.svg",
          title: "Eligibility",
          desc: `Passed 10+2 or an equivalent examination from a recognised board or university with PCB or PCM and a minimum of 50% aggregate marks.`,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `Rs. 90,000`,
        // },
      ],
    },
    {
      imgUrl:
        "/landingpage/bsc-2026/specialisations/B.Sc.-(Hons.--Hons.-with-Research)-Chemistry.webp",
      title: `B.Sc. (Hons. / Hons. with Research) Chemistry `,
      desc: `    The programme blends strong theoretical foundations with practical and research-based learning in Chemistry. It builds advanced subject knowledge, research skills, and applied expertise, while offering hands-on training and internship exposure to support higher studies and research-driven careers. `,
      extraInfos: [
        {
          iconUrl: "/wp-content/landingpage/common/duration.svg",
          title: "Duration:",
          desc: `3 Years`,
        },
        {
          iconUrl: "/wp-content/landingpage/common/eligibility.svg",
          title: "Eligibility",
          desc: `Passed 10+2 or an equivalent examination from a recognised board or university with PCB or PCM, securing at least 50% aggregate marks. `,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `Rs. 90,000`,
        // },
      ],
    },
    {
      imgUrl:
        "/landingpage/bsc-2026/specialisations/B.Sc.-(Hons.)-Forensic-Science.webp",
      title: `B.Sc. (Hons.) Forensic Science `,
      desc: `    The programme prepares students for investigative careers through hands-on training, scientific analysis, and practical exposure. It builds strong foundations in forensic techniques, crime scene investigation, and laboratory skills aligned with modern criminal justice needs. `,
      extraInfos: [
        {
          iconUrl: "/wp-content/landingpage/common/duration.svg",
          title: "Duration:",
          desc: `3 Years`,
        },
        {
          iconUrl: "/wp-content/landingpage/common/eligibility.svg",
          title: "Eligibility",
          desc: `Passed 10+2 or an equivalent examination in Science (Physics, Chemistry, Biology, or Mathematics) from a recognised board or university with at least 50% aggregate marks. `,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `Rs. 1,30,000`,
        // },
      ],
    },
    {
      imgUrl:
        "/landingpage/bsc-2026/specialisations/B.Sc.-(Hons.--Hons.-with-Research)-Forensic-Science.webp",
      title: `B.Sc. (Hons. / Hons. with Research) Forensic Science`,
      desc: `    The programme blends theory with hands-on training, equipping students with practical skills in crime scene investigation, evidence handling, and forensic analysis through advanced laboratory exposure. `,
      extraInfos: [
        {
          iconUrl: "/wp-content/landingpage/common/duration.svg",
          title: "Duration:",
          desc: `4 Years`,
        },
        {
          iconUrl: "/wp-content/landingpage/common/eligibility.svg",
          title: "Eligibility",
          desc: `    Passed 10+2 or an equivalent examination from a recognized board or university with Physics, Chemistry, Biology, or Mathematics as subjects, securing a minimum of 50% aggregate marks. `,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `Rs. 1,30,000`,
        // },
      ],
    },
    {
      imgUrl:
        "/landingpage/bsc-2026/specialisations/Integrated-Dual-Degree-B.Sc.-M.Sc.-(Forensic-Science).webp",
      title: `Integrated/Dual Degree B.Sc.-M.Sc. (Forensic Science) `,
      desc: `    The programme offers strong theoretical and practical training in forensic science, preparing students for crime scene analysis and careers in investigation agencies, legal firms, and forensic laboratories through industry-relevant coursework and field-based learning. `,
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
        //   desc: `Rs. 1,30,000`,
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
    label: "Apply for B.Sc. Programmes 2026",
    href: "#",
  },
};

export const testimonialsData: TestimonialsSection = {
  subheading: "Our Testimonials",
  heading: `Why do our schoolers love and trust K.R. Mangalam University?`,
  testimonials: [
    {
      image: "/landingpage/bsc-2026/testimonials/1.webp",
      videoUrl: "#",
      quote: `It has been a transformative experience at K.R. Mangalam University. The university's emphasizes on experiential learning, practical skills and prepares us for success in   the professional world. I am grateful for the invaluable education and unforgettable memories I have gained here. 
`,
      name: "Ms. Chhavi",
      programme: "B.Sc. (Hons.) Chemistry",
    },
    {
      image: "/landingpage/bsc-2026/testimonials/2.webp",
      videoUrl: "#",
      quote: `My academic journey at KRMU as a B.Sc. (Hons.) Physics student was truly enriching.  

The structured curriculum, well-equipped laboratories, and supportive faculty  

strengthened my conceptual understanding and analytical skills. Beyond academics,  

the vibrant campus culture helped shape me into a confident individual. I feel proud  

to be an alumnus of K.R. Mangalam University and remain grateful for the guidance,  

values, and opportunities that contributed to my overall growth. 
`,
      name: "Kashish",
      programme: "B.Sc. (Hons.) Physics",
    },
    {
      image: "/landingpage/bsc-2026/testimonials/3.webp",
      videoUrl: "#",
      quote: `K.R. Mangalam University boasts a highly supportive and knowledgeable faculty.  

With top-tier infrastructure, fully equipped laboratories, and a continually updated  

curriculum, my academic journey was enriched with practical exposure. My time there  

was immensely valuable, thanks to the expert faculty members who consistently  

supported my intellectual growth. `,
      name: "Jeetika",
      programme: "B. Sc. (Hons.) Mathematics ",
    },
    {
      image: "/landingpage/bsc-2026/testimonials/4.webp",
      videoUrl: "#",
      quote: `KRMU offers one with a myriad range of opportunities. It is a great experience to  

write research papers related to mathematics, organize events and visit other places.  

Here I have published a research work and presented research work in international  

conference during my first year itself.`,
      name: "Agniwesh Tiwari",
      programme: "B. Sc. (Hons.) Mathematics",
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
  heading: `World-Class Facilities at KRMU for B.Sc. Programmes `,
  description: `K.R. Mangalam University provides a dynamic campus designed to support academic excellence and holistic development. Advanced classrooms, high-speed Wi-Fi, modern laboratories, a central library, hostels, and recreational spaces together create a balanced and enriching learning environment. `,
  footerText: ``,
  cta: {
    label: "Apply for B.Sc. Programmes 2026–27",
    href: "#",
  },
  slides: [
    {
      image: "/landingpage/bsc-2026/infrastructure/1.webp",
      alt: "World Class Lab",
    },
    {
      image: "/landingpage/bsc-2026/infrastructure/2.webp",
      alt: "Research Facility",
    },
    {
      image: "/landingpage/bsc-2026/infrastructure/3.webp",
      alt: "Innovation Center",
    },
    {
      image: "/landingpage/bsc-2026/infrastructure/4.webp",
      alt: "Library & Resources",
    },
    {
      image: "/landingpage/bsc-2026/infrastructure/5.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/bsc-2026/infrastructure/6.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/bsc-2026/infrastructure/7.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/bsc-2026/infrastructure/8.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/bsc-2026/infrastructure/9.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/bsc-2026/infrastructure/10.webp",
      alt: "Campus Infrastructure",
    },
  ],
};

export const lifeAsPhDScholarData: LifeAsPhDScholarSection = {
  heading: "Life as a B.Sc. Student at KRMU",
  description: "",
  image: {
    src: "/landingpage/bsc-2026/student-at-krmu/Collage.webp",
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
  heading: "Got Questions? We've Got Answers ",
  description: "",
  faqs: [
    {
      id: "item-1",
      question: "What is B.Sc. (Hons. / Hons. with Research)?",
      answer: `It is an undergraduate science programme offering in-depth subject knowledge, with the research track including advanced coursework and a research project. `,
    },
    {
      id: "item-2",
      question: "What is the duration of the programme?",
      answer: ` The programme is typically completed in four years. `,
    },
    {
      id: "item-3",
      question: "What are the career prospects after this course?",
      answer: `Graduates can work in research labs, industry roles, analytics, education, and applied science sectors.`,
    },
    {
      id: "item-4",
      question: "Can I pursue higher education after this programme? ",
      answer: `Yes, students can opt for M.Sc., PhD, or other specialised postgraduate programmes.`,
    },
    {
      id: "item-5",
      question: "What kind of internships are offered? ",
      answer: `Students gain internships with research organisations, industry partners, and laboratories.`,
    },
    {
      id: "item-6",
      question: "Are there opportunities for government jobs? ",
      answer: `Yes, graduates are eligible for various government and public sector roles. `,
    },
    {
      id: "item-7",
      question: "Does the university provide placement assistance?  ",
      answer: `Yes, dedicated placement support helps students prepare for employment opportunities.`,
    },
    {
      id: "item-8",
      question: "What is the eligibility for admission?  ",
      answer: `Candidates must have passed 10+2 in the Science stream from a recognised board. `,
    },
    {
      id: "item-9",
      question: "Does the programme offer international exposure?",
      answer: `Yes, students may access global collaborations, exchange programmes, and study exposure. `,
    },
    {
      id: "item-10",
      question: "Are scholarships available for B.Sc. students? ",
      answer: `Yes, the university offers merit-based and need-based scholarships.`,
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
    label: "Apply for B.Sc. Programme 2026-2027",
    href: "#",
  },
  highlights: [
    { id: 1, text: "UGC Approved University" },
    { id: 2, text: "NAAC ‘A’ Accredited " },
    { id: 3, text: "18K+ Alumni Base" },
  ],
};



export const programmeContent = {
  badge: "5 Specialisations",
  title: "KRMU’s B.Sc. Programmes",
  subtitle:
    "All Our Programmes Comprise of Industry-relevant Curriculum",

  programmes: [
    {
      id: "1",
      tag: "Physics Advanced",
      title: "B.Sc. (Hons. / Hons. with Research) Physics",
      subtitle: "",
      desc: "Builds physics foundations with advanced theory, labs, and technology for analytical, research-focused learning.",
      duration: "4 Years",
      fees: "98000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
      eligibility: "Passed 12th with 50% aggregate marks.*",

    },
    {
      id: "2",
      tag: "",
      title: "B.Sc. (Hons. / Hons. with Research) Chemistry",
      subtitle: "",
      desc: "Combines theory, practical training, and research in Chemistry, preparing students for advanced studies and careers.",
      duration: "4 Years",
      fees: "98000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
      eligibility: "Passed 12th with 50% aggregate marks.*",
    },
    {
      id: "3",
      tag: "",
      title: "B.Sc. (Hons. / Hons. with Research ) Maths",
      subtitle: "",
      desc: "The course focuses on advanced mathematics, problem-solving, analytical thinking and prepares students for research or careers.",
      duration: "4 Years",
      fees: "98000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
      eligibility: "Passed 12th with 50% aggregate marks.*",
    },
    // {
    //   id: "3",
    //   tag: "",
    //   title: "B.Sc. (Hons.) Forensic Science",
    //   subtitle: "",
    //   desc: "Trains students in forensic techniques, crime scene investigation, and lab skills for investigative careers.",
    //   duration: "3 Years",
    //   fee: "₹2,30,000",
    //   ctaText: "Apply Now !",
    //   ctaLink: "#apply-form",
    //   eligibility: "Passed 12th with 50% aggregate marks.*",
    // },
    // {
    //   id: "4",
    //   tag: "Forensic Research",
    //   title: "B.Sc. (Hons. / Hons. with Research) Forensic Science",
    //   subtitle: "",
    //   desc: "Combines theory and hands-on training in crime scene investigation, evidence handling, and forensic analysis.",
    //   duration: "4 Years",
    //   fee: "₹2,30,000",
    //   ctaText: "Apply Now !",
    //   ctaLink: "#apply-form",
    //   eligibility: "Passed 12th with 50% aggregate marks.*",
    // },
    // {
    //   id: "5",
    //   tag: "Integrated Forensics",
    //   title: "Integrated/Dual Degree B.Sc.-M.Sc. (Forensic Science)",
    //   subtitle: "",
    //   desc: "Offers forensic science training, preparing students for crime scene analysis and investigative careers.",
    //   duration: "5 Years",
    //   fee: "₹2,30,000",
    //   ctaText: "Apply Now !",
    //   ctaLink: "#apply-form",
    //   eligibility: "Passed 12th with 50% aggregate marks.*",
    // },
  ],
};


export const eligibilityTerms = [
  {
    description: "*Eligibility: Passed the 10+2 or equivalent examination from any recognised board/ University in Science (Physics/Chemistry/Biology/Mathematics) with minimum 50% aggregate marks."
  },
];
