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
      Forensic Science
      </span> Admissions Open 2026–27</span>
       <span class="hidden sm:block">
      ADMISSIONS <br />
      OPEN FOR <br />
      <span class="text-[#fcd404] text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold">
      Forensic Science
      </span>
      <br />
      PROGRAMMES <br />2026-27 
      </span>
    `,
  desc: `The Forensic Science <br /> courses strive to  prepare <br /> the next generation of <br /> professional  analysts <br /> who pursue  truth with the <br /> precision of science and integrity`,
  heroBg: "/wp-content/landingpage/bsc-forensic-science-2026/bsc-forensic.webp",
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
    imgUrl: "/landingpage/bsc-forensic-science-2026/recruiters/aimil.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/bsc-forensic-science-2026/recruiters/itc.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/bsc-forensic-science-2026/recruiters/ecs.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/bsc-forensic-science-2026/recruiters/wf.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/bsc-forensic-science-2026/recruiters/medanta.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/bsc-forensic-science-2026/recruiters/fortis.png",
    alt: "Recruiter Logo",
  },
];

export const whyKRM: WhyKRMSection = {
  heading: "Why Choose KRMU for Forensic Science Courses?",
  subheading: "Accurate Analysis of Evidences For Concrete Conclusions",
  content: `The Forensic Science programmes intend to offer KRMU students an opportunity to apply science in the pursuit of justice. This multidisciplinary course strives to equip the learners with in-depth knowledge of forensic biology, toxicology, chemistry, ballistics, cyber forensics, and crime scene investigation. The curriculum is designed to meet the increasing reliance on scientific evidence in legal and criminal proceedings, thereby meeting the growing demand for trained forensic experts across government agencies, law enforcement departments, private labs, and legal consultancy firms.
`,
  imgUrl: `/landingpage/bsc-forensic-science-2026/why-choose/Building.webp`,
  whyKrmCards: [
    {
      imgUrl: "/landingpage/bsc-forensic-science-2026/why-choose/1.webp",
      content: `NEP-Aligned Curriculum with Flexible Options for Research Integration.`,
    },
    {
      imgUrl: "/landingpage/bsc-forensic-science-2026/why-choose/2.webp",
      content: `Advanced Forensic Labs with the Latest Tools for Real-World Case Analysis.`,
    },
    {
      imgUrl: "/landingpage/bsc-forensic-science-2026/why-choose/3.webp",
      content: `Industry Exposure Through Field Visits, Forensic Agency Collaborations, and Expert-Led Workshops.`,
    },
    {
      imgUrl: "/landingpage/bsc-forensic-science-2026/why-choose/4.webp",
      content: `Hands-On Learning with Crime Scene Simulation, Forensic Photography, and Digital Forensics.`,
    },
    {
      imgUrl: "/landingpage/bsc-forensic-science-2026/why-choose/5.webp",
      content: `100% Placement Assistance in Top Forensic Labs, Law Enforcement, and Private Consultancies.`,
    },
  ],
};

export const industryExperts: IndustryExpertsSection = {
  eyebrow: "Why KR Mangalam PhD?",
  heading: `Learn from <br /> Leaders @ KRMU!
`,
  description: `K.R. Mangalam University takes pride in collaborating with industry leaders and skill professionals who offer unparalleled hands-on learning experiences to students.`,
  cta: {
    label: "Apply for Forensic Science Programmes 2026-27",
    href: "#",
  },
  cards: [
    {
      imgUrl:
        "https://krmangalam.edu.in/admission/mba-2025/assets/images/apple.svg",
      alt: "Apple Logo",
      title: "AI and Machine Learning Courses",
    },
    {
      imgUrl:
        "https://krmangalam.edu.in/admission/mba-2025/assets/images/apple.svg",
      alt: "Apple Logo",
      title: "AI and Machine Learning Courses",
    },
    {
      imgUrl:
        "https://krmangalam.edu.in/admission/mba-2025/assets/images/apple.svg",
      alt: "Apple Logo",
      title: "AI and Machine Learning Courses",
    },
    {
      imgUrl:
        "https://krmangalam.edu.in/admission/mba-2025/assets/images/apple.svg",
      alt: "Apple Logo",
      title: "AI and Machine Learning Courses",
    },
  ],
  bannerImg: "/landingpage/common/dummy2.png",
};

export const specialisationData: SpecialisationSection = {
  subheading: ``,
  heading: `KRMU’s Forensic Science Courses`,
  SpecialisationCard: [
    {
      imgUrl:
        "/landingpage/bsc-forensic-science-2026/specialisations/B.Sc.-(Hons.)-Forensic-Science.webp",
      title: `B.Sc. (Hons.) Forensic Science`,
      // desc: `The Bachelor of Science (B.Sc.) Hons. in Forensic Science offered by KRMU is a multidisciplinary undergraduate programme designed to prepare students for careers in crime investigation and forensic analysis. The meticulously crafted course combines principles of science, law, and technology to help students understand how scientific methods are applied to solve crimes. Students study core subjects such as forensic biology, forensic chemistry, toxicology, fingerprint analysis, questioned documents, and criminology.`,
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
          desc: `Passed the 10+2 or equivalent examination from any recognised board/ University in Science (Physics/ Chemistry/ Biology/ Mathematics) with minimum 50% aggregate marks.`,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `Rs 1,30,000`,
        // },
      ],
    },
    {
      imgUrl:
        "/landingpage/bsc-forensic-science-2026/specialisations/B.Sc.-(Hons.-Hons.-with-Research)-Forensic-Science.webp",
      title: `B.Sc. (Hons. / Hons. with Research) Forensic Science`,
      // desc: `The programme at K.R. Mangalam University aims to develop critical thinking, observation, analytical skills, and attention to detail, which are essential for forensic professionals. Graduates of this course can pursue careers as forensic analysts, crime scene investigators, laboratory technicians, or research assistants. They may also opt for higher studies such as M.Sc. in Forensic Science, Criminology, or related fields.`,
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
          desc: `Passed the 10+2 or equivalent examination from any recognised board/ University in Science (Physics/ Chemistry/ Biology/ Mathematics) with minimum 50% aggregate marks.`,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `Rs 1,30,000`,
        // },
      ],
    },
    {
      imgUrl:
        "/wp-content/images/fs-prog-1.webp",
      title: `Integrated / Dual Degree B.Sc.– M.Sc. (Forensic Science)`,
      // desc: `The programme at K.R. Mangalam University aims to develop critical thinking, observation, analytical skills, and attention to detail, which are essential for forensic professionals. Graduates of this course can pursue careers as forensic analysts, crime scene investigators, laboratory technicians, or research assistants. They may also opt for higher studies such as M.Sc. in Forensic Science, Criminology, or related fields.`,
      desc: ``,
      extraInfos: [
        {
          iconUrl: "/wp-content/landingpage/common/duration.svg",
          title: "Duration:",
          desc: `5 Years`,
        },
        {
          iconUrl: "/wp-content/landingpage/common/eligibility.svg",
          title: "Eligibility",
          desc: `Passed the 10+2 or equivalent examination from any recognised board/ University in Science (Physics/ Chemistry/ Biology/ Mathematics) with minimum 50% aggregate marks.`,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `Rs 1,30,000`,
        // },
      ],
    },
        {
      imgUrl:
        "/wp-content/images/master_in_forensic_science.webp",
      title: `M.Sc. Forensic Science`,
      // desc: `The programme at K.R. Mangalam University aims to develop critical thinking, observation, analytical skills, and attention to detail, which are essential for forensic professionals. Graduates of this course can pursue careers as forensic analysts, crime scene investigators, laboratory technicians, or research assistants. They may also opt for higher studies such as M.Sc. in Forensic Science, Criminology, or related fields.`,
      desc: ``,
      extraInfos: [
        {
          iconUrl: "/wp-content/landingpage/common/duration.svg",
          title: "Duration:",
          desc: `2 Years`,
        },
        {
          iconUrl: "/wp-content/landingpage/common/eligibility.svg",
          title: "Eligibility",
          desc: `Candidates who have completed B.Sc. (Any Science Stream) from a recognised university with minimum aggregate 50% marks.`,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `Rs 1,30,000`,
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
    label: "Apply for Forensic Science Programmes 2026-27",
    href: "#",
  },
};

export const testimonialsData: TestimonialsSection = {
  subheading: "Students’ Testimonials",
  heading: `Still in Doubt? <br /> See What Our Students Say About Us!`,
  testimonials: [
    {
      image: "/landingpage/bsc-forensic-science-2026/testimonials/1.webp",
      videoUrl: "#",
      quote: `My three years in the Forensic Science Department at K.R. Mangalam University have been a transformative journey filled with learning, growth, and invaluable life lessons. These years have shaped me into a more self-reliant and confident individual, preparing me to carve my own path in life. The memories and experiences I’ve gained here will always be cherished. I am deeply grateful to my amazing faculty, whose guidance has been instrumental in my academic and personal growth. KRMU will always be a part of me!`,
      name: "Prakati Joshi",
      programme: "B.Sc. (Hons) Forensic Science",
    },
    {
      image: "/landingpage/bsc-forensic-science-2026/testimonials/2.webp",
      videoUrl: "#",
      quote: `My name is Prayankar Rudra Paul, and I am a final-year student of B.Sc. (Hons.) Forensic Science at K.R. Mangalam University. My journey as an undergraduate student at this esteemed institution has been truly remarkable. As a student of the Department of Forensic Science, I  have had the privilege of gaining extensive hands-on experience through various internships. One of the most significant opportunities was working with the State Crime Records Bureau, Agartala, Tripura, where I analysed over 600+ registered FIR cases under the guidance of the Superintendent of Police.`,
      name: "Prayankar Rudra Paul",
      programme: "B.Sc. (Hons) Forensic Science",
    },
    {
      image: "/landingpage/bsc-forensic-science-2026/testimonials/3.webp",
      videoUrl: "#",
      quote: `My three years at K.R. Mangalam University have been transformative and enriching, blending theoretical knowledge with extensive practical exposure. The police station training provided first-hand experience in investigative procedures, law enforcement protocols, and crime scene management, bridging the gap between classroom learning and real-world applications. Additionally, the CBI & CFSL training deepened my understanding of forensic methodologies, modern investigative techniques, and advanced technology in forensic science, boosting my confidence in practical scenarios. The supportive faculty and state-of-the-art facilities fostered critical thinking and hands-on learning, essential for a successful career.`,
      name: "Khushboo",
      programme: "B.Sc. (Hons) Forensic Science",
    },
    {
      image: "/landingpage/bsc-forensic-science-2026/testimonials/4.webp",
      videoUrl: "#",
      quote: `My journey at K.R. Mangalam University has been truly transformative. The supportive faculty, advanced facilities, and hands-on curriculum in the Forensic Science Department have equipped me with practical skills in crime scene investigation and laboratory analysis. Opportunities for research, internships, and collaboration with law enforcement have enriched my learning, preparing me for a successful career in forensic science. Grateful for this experience, I take pride in being a KRMU graduate and highly recommend this program to those passionate about solving crimes through science.`,
      name: "Divya Panwar",
      programme: "B.Sc. (Hons) Forensic Science",
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
  description: `The K.R. Mangalam University offers strong support for the B.Sc. Forensic Science students in the form of an Advanced Forensic Lab with the latest tools for practical learning in physics, chemistry, and instrumentation. Expert faculty in the form of experienced professors with real-world and academic forensic experience, regular sessions with forensic experts and webinars are all designed for practical skill-building and career readiness.`,
  footerText: ``,
  cta: {
    label: `Apply for Forensic Science Programmes <br /> 2026-27 `,
    href: "#",
  },
  slides: [
    {
      image: "/landingpage/bsc-forensic-science-2026/infrastructure/1.webp",
      alt: "World Class Lab",
    },
    {
      image: "/landingpage/bsc-forensic-science-2026/infrastructure/2.webp",
      alt: "Research Facility",
    },
    {
      image: "/landingpage/bsc-forensic-science-2026/infrastructure/3.webp",
      alt: "Innovation Center",
    },
    {
      image: "/landingpage/bsc-forensic-science-2026/infrastructure/4.webp",
      alt: "Library & Resources",
    },
    {
      image: "/landingpage/bsc-forensic-science-2026/infrastructure/5.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/bsc-forensic-science-2026/infrastructure/6.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/bsc-forensic-science-2026/infrastructure/7.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/bsc-forensic-science-2026/infrastructure/8.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/bsc-forensic-science-2026/infrastructure/9.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/bsc-forensic-science-2026/infrastructure/10.webp",
      alt: "Campus Infrastructure",
    },
  ],
};

export const lifeAsPhDScholarData: LifeAsPhDScholarSection = {
  heading: "Life as a B.Sc. Forensic Science Student at KRMU",
  description: "",
  image: {
    src: "/landingpage/bsc-forensic-science-2026/student-at-krmu/Collage.webp",
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
        "What makes K.R. Mangalam University’s Forensic Science programme unique? ",
      answer: `The curriculum at KRMU is research-oriented with real-world forensic case studies, hands-on crime scene analysis, and internships with forensic experts.`,
    },
    {
      id: "item-2",
      question:
        "What career options does a student have after completing a B.Sc. Forensic Science?",
      answer: `Graduates can work as Forensic Scientists, Crime Scene Investigators, Digital Forensic Analysts, Toxicologists, and Consultants in law enforcement, forensic labs, and private agencies.
`,
    },
    {
      id: "item-3",
      question: "Does KRMU provide hostel accommodation?",
      answer: `Yes, KRMU provides separate hostels for boys and girls with modern amenities and 24/7 security.`,
    },
    {
      id: "item-4",
      question: "Does the programme include industry exposure?",
      answer: `Yes, the K.R. Mangalam University offers internships, field visits, guest lectures by forensic professionals, and collaborations with forensic labs & law enforcement agencies.`,
    },
    {
      id: "item-5",
      question: "Does KRMU provide placement support?",
      answer: `Yes, KRMU provides 100% placement support. We have a dedicated Career Development & Placement Cell that supports students through:
 <br /><br /> 
       <ul>
        <li>Career counselling</li>
        <li>Skill development workshops</li>
        <li>Internships</li>
        <li>Campus placements with reputed organisations</li>
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
    label: "Apply for Forensic Science Programmes 2026-27",
    href: "#",
  },
  highlights: [
    { id: 1, text: "UGC Approved University" },
    { id: 2, text: "NAAC ‘A’ Accredited " },
    { id: 3, text: "18K+ Alumni Base" },
  ],
};



export const programmeContent = {
  badge: "2 Specialisations",
  title: "KRMU’s Forensic Science Programmes",
  subtitle:
    "All Our Programmes Comprise of Industry-relevant Curriculum",

  programmes: [
    {
      id: "1",
      tag: "Crime Science",
      title: "B.Sc. (Hons.) Forensic Science",
      subtitle: "",
      desc: "Trains students in crime investigation and forensics, integrating science, law, and technology.",
      duration: "3 Years",
      fees: "142000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
      eligibility: "Passed 12th with 50% aggregate marks.*",
    },
    {
      id: "2",
      tag: "Research Focus",
      title: "B.Sc. (Hons. / Hons. with Research) Forensic Science",
      subtitle: "",
      desc: "Develops analytical, critical, and observational skills for careers in forensics, crime investigation, and research.",
      duration: "4 Years",
      fees: "142000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
      eligibility: "Passed 12th with 50% aggregate marks.*",
    },
        {
      id: "3",
      tag: "Integrated Forensics",
      title: "Integrated/Dual Degree B.Sc.-M.Sc. (Forensic Science)",
      subtitle: "",
      desc: "Offers forensic science training, preparing students for crime scene analysis and investigative careers.",
      duration: "5 Years",
      fees: "142000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
      eligibility: "Passed 12th with 50% aggregate marks.*",
    },
  ],
};


export const eligibilityTerms = [
  {
    description: "*Eligibility: Passed the 10+2 or equivalent examination from any recognised board/ University in Science (Physics/Chemistry/Biology/Mathematics) with minimum 50% aggregate marks."
  },
];

