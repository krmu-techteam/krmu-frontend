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
import { describe } from "node:test";

// Usage types
export const Hero: HeroContent = {
  title: `
  <span class="sm:hidden"><span class="text-[#fcd404] text-2xl sm:text-3xl md:text-5xl lg:text-8xl font-bold">
        Pharmacy
      </span> Admissions Open 2026–27</span>
      <span class="hidden sm:block">
      ADMISSIONS <br />
      OPEN FOR <br />
      <span class="text-[#fcd404] text-2xl sm:text-3xl md:text-5xl lg:text-8xl font-bold">
      Pharmacy 
      </span>
      <br />
      PROGRAMMES<br />2026-27</span>
    `,
  desc: `Gain industry-focused education and <br /> build strong foundations in  pharmaceutical <br /> sciences  that prepare you for career-ready <br /> roles in the  pharmacy sector `,
  heroBg: "/wp-content/landingpage/pharmacy-2026/pharmacy.webp",
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
    title: "₹27Cr",
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
    imgUrl: "/landingpage/pharmacy-2026/recruiters/astra.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/pharmacy-2026/recruiters/lupin.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/pharmacy-2026/recruiters/sun.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/pharmacy-2026/recruiters/glenmark.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/pharmacy-2026/recruiters/drreddy.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/pharmacy-2026/recruiters/max.png",
    alt: "Recruiter Logo",
  },
];

export const whyKRM: WhyKRMSection = {
  heading: "Why Choose Pharmacy Programmes at KRMU? ",
  subheading: "Build a Career That Impacts Lives ",
  content: `K.R. Mangalam University offers industry-aligned Pharmacy programmes, including D. Pharm., B.Pharm., and Master's programmes in pharmacy, developed to meet global healthcare standards. Designed with pharmaceutical and healthcare experts, these programmes build strong scientific foundations, practical lab skills, industry exposure, internships, and placement support for career-ready professionals. `,
  imgUrl: `/landingpage/common/whykrmtest.png`,
  whyKrmCards: [
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `    Programmes shaped through consultation with experienced professionals from healthcare industry `,
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `    Hands-on scientific training focused on real-world practices and professional excellence `,
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `    Gain advanced knowledge, insights, and mentorship directly from industry experts .`,
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `    Interactive sessions with leading pharmacists and physiotherapy professionals `,
    },
  ],
};

export const industryExperts: IndustryExpertsSection = {
  eyebrow: "",
  heading: `Learn from <br /> Leaders @ KRMU!
`,
  description: `K.R. Mangalam University takes pride in collaborating with industry leaders and skill professionals who offer unparalleled hands-on learning experiences to students.`,
  cta: {
    label: "Apply for Pharmacy Programmes 2026-2027",
    href: "#",
  },
  cards: [
    {
      imgUrl: "/landingpage/pharmacy-2026/learn-from/ibm.png",
      alt: "IBM Logo",
      title: "",
    },
    {
      imgUrl: "/wp-content/landingpage/common/imaginxp.svg",
      alt: "ImaginXP Logo",
      title: "",
    },
    {
      imgUrl: "/landingpage/pharmacy-2026/learn-from/eccoun.jpg",
      alt: "EC-Councils Logo",
      title: "",
    },
    {
      imgUrl: "/landingpage/pharmacy-2026/learn-from/xebia.png",
      alt: "Xebia Logo",
      title: "",
    },
  ],
  bannerImg: "/wp-content/landingpage/common/indus-exp.webp",
};

export const specialisationData: SpecialisationSection = {
  subheading: `Choose your specialisations based on your interests and career goals. 

Our Pharma Programmes & Specialisations `,
  heading: `Our Pharma Programmes & Specialisations   `,
  SpecialisationCard: [
    {
      imgUrl: "/landingpage/pharmacy-2026/specilisation/d-pharm.jpg",
      title: `D.Pharm. `,
      // desc: `The programme blends theory and practical learning to build strong pharmacy skills. Through classes, lab work, and hands-on training, students gain essential knowledge of chemistry, pharmacology, biochemistry, and toxicology for successful pharmacy careers.`,
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
          desc: `    Candidates must have passed 10+2 or an equivalent science qualification with physics, chemistry, and biology or mathematics, as approved by the Pharmacy Council of India. `,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `Rs. 1,20,000`,
        // },
      ],
    },
    {
      imgUrl: "/landingpage/pharmacy-2026/specilisation/b-pharm.jpg",
      title: `B.Pharm. `,
      // desc: `The programme offers in-depth pharmaceutical education with strong scientific foundations. It blends advanced theory, laboratory training, industry exposure, and practical learning to prepare students for professional roles in drug development, research, production, and healthcare sectors.`,
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
          desc: `    Candidates must have passed 10+2 with physics, chemistry, and biology or maths, securing at least 50% marks from a recognised board. Applicants must be 17 years or older by 31 December of the admission year.`,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `Rs. 1,95,000`,
        // },
      ],
    },
    {
      imgUrl: "/landingpage/pharmacy-2026/specilisation/m-pharm.jpg",
      title: `Master of Pharmacy (M.Pharm.) – Pharmaceutics `,
      // desc: `    The M.Pharm. Pharmaceutics programme focuses on advanced drug development and production. It covers pharmaceutics, drug delivery systems, manufacturing processes, industry advancements, and research-based learning, preparing students with strong scientific and practical expertise across four semesters. `,
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
          desc: `Candidates must hold a B.Pharmacy degree from a PCI-approved Indian institution with at least 55% aggregate marks and be registered with the State Pharmacy Council or obtain registration within one month of admission.`,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `Rs. 1,54,000`,
        // },
      ],
    },
    {
      imgUrl: "/landingpage/pharmacy-2026/specilisation/m-pharmaco.jpg",
      title: `Master of Pharmacy (M.Pharm.) – Pharmacology `,
      // desc: `       The M.Pharm. in Pharmacology programme focuses on drug science, mechanisms, and therapeutic applications. It combines advanced theoretical learning with hands-on laboratory training, research, and projects, preparing graduates for careers in pharmaceutical, healthcare, and biomedical fields. `,
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
          desc: `    Candidates must hold a B.Pharmacy degree from a PCI-approved Indian institution with at least 55% aggregate marks and be registered with the State Pharmacy Council or obtain registration within one month of admission. `,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `Rs. 1,54,000`,
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
    label: "Apply for Pharmacy Programmes 2026-27",
    href: "#",
  },
};

export const testimonialsData: TestimonialsSection = {
  subheading: "Our Testimonials ",
  heading: `Why do our schoolers love and trust K.R. Mangalam University? `,
  testimonials: [
    {
      image: "/landingpage/pharmacy-2026/testimonials/1.jpg",
      videoUrl: "#",
      quote: ` The institution played a key role in shaping my journey. Supportive faculty encouraged critical thinking and helped me grow both personally and professionally.
`,
      name: "Gaurav Kaushik",
      programme: "PMBI",
    },
    {
      image: "/landingpage/pharmacy-2026/testimonials/2.jpg",
      videoUrl: "#",
      quote: `My academic experience stood out for its strong mix of theory and practical exposure, guided by dedicated teachers who truly invested in student success.
`,
      name: "Hardik Madaan",
      programme: "Abbott",
    },
    {
      image: "/landingpage/pharmacy-2026/testimonials/3.jpg",
      videoUrl: "#",
      quote: `I experienced a strong sense of belonging and collaboration, where peers and mentors consistently motivated one another to learn and improve. `,
      name: "Nikita",
      programme: "Assistant Professor ",
    },
    {
      image: "/landingpage/pharmacy-2026/testimonials/4.jpg",
      videoUrl: "#",
      quote: `My journey transformed me into a confident professional, equipped with relevant skills, lasting values, and a mindset of continuous growth. `,
      name: "Ashwani Yadav",
      programme: "Micro Labs",
    },
  ],
};

export const scholarResearchImpactData: ScholarResearchImpactSection = {
  heading: "World-Class Facilities at KRMU for Pharma Programmes ",
  description:
    "K.R. Mangalam University offers a modern campus designed to support advanced pharmaceutical education and practical learning. Smart classrooms, high-speed Wi-Fi, and well-equipped pharma laboratories enable effective learning and hands-on training. The central library offers extensive academic and research resources, while seminar halls, innovation spaces, hostels, and recreational facilities ensure a balanced campus experience.",
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
  heading: `World-Class Facilities at KRMU for Pharma Programmes`,
  description: `K.R. Mangalam University offers a modern campus designed to support advanced pharmaceutical education and practical learning. Smart classrooms, high-speed Wi-Fi, and well-equipped pharma laboratories enable effective learning and hands-on training. The central library offers extensive academic and research resources, while seminar halls, innovation spaces, hostels, and recreational facilities ensure a balanced campus experience.`,
  footerText: ``,
  cta: {
    label: "Apply for Pharmacy Programmes 2026–27",
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
  heading: "Life as a Pharmacy Student at KRMU",
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
  heading: "Got Questions? We've Got Answers",
  description: "",
  faqs: [
    {
      id: "item-1",
      question: "What are the eligibility criteria for Pharmacy programmes? ",
      answer: `For D.Pharm., candidates must complete 10+2 with Physics, Chemistry, and Mathematics or Biology. For B.Pharm., candidates must complete 10+2 with Physics, Chemistry, Mathematics or Biology and meet the university’s admission criteria. For M.Pharm., candidates must hold a B.Pharm. degree from a recognised institution with at least 55% aggregate marks. `,
    },
    {
      id: "item-2",
      question: "Are scholarships available? ",
      answer: `Yes, K.R. Mangalam University offers merit-based and need-based scholarships. Students can visit the official scholarships page for detailed information. `,
    },
    {
      id: "item-3",
      question: "What placement support does the university provide?",
      answer: `The university offers dedicated placement support, including industry collaborations, mock interviews, career guidance, and placement drives with leading pharmaceutical and healthcare organisations. `,
    },
    {
      id: "item-4",
      question: "What practical exposure will students receive? ",
      answer: `Students gain hands-on experience through laboratory work, hospital pharmacy training, industrial visits, and internships with reputed pharmaceutical companies. `,
    },
    {
      id: "item-5",
      question: "Is hostel accommodation available on campus? ",
      answer: `Yes, the university provides secure and comfortable on-campus hostel facilities with modern amenities and 24/7 support. `,
    },
    {
      id: "item-6",
      question: "Can students pursue research projects during the course?",
      answer: `Yes, the programmes encourage research through advanced laboratory facilities and faculty mentorship to support academic and industry-focused projects. `,
    },
    // {
    //   id: "item-7",
    //   question: "Which are the best M.Pharm. colleges in Delhi NCR? ",
    //   answer: `For students exploring M.Pharm. colleges in Gurugram and Delhi NCR, K.R. Mangalam University offers a well-structured M.Pharm. programme. Admissions for M.Pharm. 2025 are currently open. `,
    // },
    {
      id: "item-8",
      question: "Is there an entrance exam for B.Pharm. admission?",
      answer: `B.Pharm. admission may or may not require an entrance examination. K.R. Mangalam University conducts its own KREE entrance exam for B.Pharm. admissions. Some pharmacy colleges also accept national-level exams such as CUET or NEET, as per eligibility norms. `,
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
    label: "Apply for Pharmacy Programmes 2026-27",
    href: "#",
  },
  highlights: [
    { id: 1, text: "UGC Approved University" },
    { id: 2, text: "NAAC ‘A’ Accredited " },
    { id: 3, text: "18K+ Alumni Base" },
  ],
};



export const programmeContent = {
  badge: "4 Specialisations",
  title: "KRMU’s Pharma Programmes",
  subtitle:
    "All Our Programmes Comprise of Industry-relevant Curriculum",

  programmes: [
    {
      id: "1",
      tag: "",
      title: "D.Pharm.",
      subtitle: "",
      desc: "Combines theory, laboratory work, and practical training in chemistry, pharmacology, biochemistry, and toxicology for pharmacy careers.",
      duration: "2 Years",
      fees: "",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
      eligibility: "Passed 12th with 50% aggregate marks.*",
    },
    {
      id: "2",
      tag: "Industry Ready",
      title: "B.Pharm.",
      subtitle: "",
      desc: "Gain pharmaceutical knowledge with theory, lab training, and industry exposure for careers in drug development, research, and healthcare.",
      duration: "4 Years",
      fees: "",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
      eligibility: "Passed 12th with 50% aggregate marks.**",

    },
    {
      id: "3",
      tag: "Research Focus",
      title: "M.Pharm. – Pharmaceutics",
      subtitle: "",
      desc: "Covers drug development, pharmaceutics, delivery systems, manufacturing, and research to build scientific and practical expertise.",
      duration: "2 Years",
      fees: "",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
      eligibility: "Passed 12th with 50% aggregate marks.***",

    },
    {
      id: "4",
      tag: "Advanced Studies",
      title: "M.Pharm. – Pharmacology",
      subtitle: "",
      desc: "Combines drug science, therapeutics, laboratory training, research, and projects to prepare graduates for pharmaceutical and healthcare careers.",
      duration: "2 Years",
      fees: "",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
      eligibility: "Passed Bachelor's with 55% aggregate marks.***",

    },
  ],
};


export const eligibilityTerms = [
  {
    description: "*Eligibility: Candidate must have passed in any of the following examinations with Physics, Chemistry and Biology/Mathematics:Intermediate examination in Science; the first year of the three-year degree course in Science;  10+2 examination (academic stream) in Science from a recognised Board; Pre-degree examination; Any other qualification approved by the Pharmacy Council of India as equivalent to any of the above examinations."
  },
  {
    description: "**Eligibility: Candidate must have passed 10+2 examinations from any recognised board/ university with Physics, Chemistry, Biology/ Maths as mandatory courses and with minimum 50% aggregate marks. Candidates must have attained the age of 17 years or more on 31st December of the applying year. The age shall be determined as per the entry in the Matriculation/Secondary school or its equivalent examination certificate."
  },
  {
    description: "***Eligibility: Candidate should pass in the following examinations: B. Pharmacy degree examination of an Indian university established by law in India from an institution approved by the Pharmacy Council of India (PCI) and has scored not less than 55% of the maximum marks (aggregate of 4 years of B.Pharmacy). Every student selected for admission to post graduate pharmacy program in any PCI-approved institution should have obtained registration with the State Pharmacy Council or should obtain the same within one month from the date of his/her admission, failing which the admission of the candidate shall be cancelled."
  },
];

