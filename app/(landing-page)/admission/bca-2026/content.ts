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
        BCA
      </span> Admissions Open 2026–27</span>
      <span class="hidden sm:block">
      ADMISSIONS <br />
      OPEN FOR <br />
      <span class="text-[#fcd404] text-2xl sm:text-3xl md:text-5xl lg:text-8xl font-bold">
      BCA
      </span>
      <br />
      PROGRAMMES <br /> 2026-27
      </span>
    `,
  desc: `Start Your Journey into the World of <br />  IT and Applications`,
  heroBg: "/wp-content/landingpage/bca-2026/bca.webp",
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
    imgUrl: "/landingpage/bca-2026/recruiters/mahindra.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/bca-2026/recruiters/accen.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/bca-2026/recruiters/wipro.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/bca-2026/recruiters/airtel.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/wp-content/landingpage/common/samsung.svg",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/bca-2026/recruiters/tcslogo.png",
    alt: "Recruiter Logo",
  },
];

export const whyKRM: WhyKRMSection = {
  heading: "Why Select KRMU's BCA Programmes?",
  subheading: "Future-Ready Learning in Computer Applications",
  content: `The BCA programmes of K.R. Mangalam University (KRMU), created in partnership with international IT giants, provide a dynamic fusion of theory and hands-on learning. Our programmes train you for a successful career in technology by emphasising innovation, exposure to the industry, and practical skills.`,
  imgUrl: `/landingpage/bca-2026/why-choose/Building.webp`,
  whyKrmCards: [
    {
      imgUrl: "/landingpage/bca-2026/why-choose/1.webp",
      content: `Flexible Duration and NEP-Aligned Structure (3 or 4 years)`,
    },
    {
      imgUrl: "/landingpage/bca-2026/why-choose/2.webp",
      content: `Academic Assistance from Leaders in the Industry, such as IBM, Microsoft Certifications, and EC-Council`,
    },
    {
      imgUrl: "/landingpage/bca-2026/why-choose/3.webp",
      content: `Advanced Laboratories and Practical Instruction in Up-and-Coming Technologies`,
    },
    {
      imgUrl: "/landingpage/bca-2026/why-choose/4.webp",
      content: `Mentoring by Skilled Teachers and Technology Experts`,
    },
    {
      imgUrl: "/landingpage/bca-2026/why-choose/5.webp",
      content: `Robust Placement Assistance and International Certifications`,
    },
  ],
};

export const industryExperts: IndustryExpertsSection = {
  eyebrow: "",
  heading: `Learn From <br /> Industry Experts`,
  description: `KRMU partners with major organisations to provide <br /> industry-specific training.`,
  cta: {
    label: "Apply for BCA Programme 2026-27",
    href: "#",
  },
  cards: [
    {
      imgUrl: "/landingpage/bca-2026/learn-from/ibm.png",
      alt: "Logo",
      title: "",
    },
    // {
    //   imgUrl: "/wp-content/landingpage/brand-2026/learn-from/imaginxp.svg",
    //   alt: " Logo",
    //   title: "",
    // },
    {
      imgUrl: "/landingpage/bca-2026/learn-from/eccoun.jpg",
      alt: " Logo",
      title: "",
    },
    // {
    //   imgUrl: "/landingpage/bca-2026/learn-from/xebia.png",
    //   alt: " Logo",
    //   title: "",
    // },
  ],
  bannerImg: "/wp-content/landingpage/common/indus-exp.webp",
};

export const specialisationData: SpecialisationSection = {
  subheading: `Begin your journey into the IT industry by choosing KRMU’s BCA programmes.`,
  heading: `Our BCA Programmes`,
  SpecialisationCard: [
    {
      imgUrl:
        "/landingpage/bca-2026/specialisations/BCA-(AI-&-Data-Science)-with-Academic-Support-of-IBM-&-Powered-by-Microsoft-Certifications.webp",
      title: `BCA (AI & Data Science) with academic support of IBM & Powered by Microsoft Certifications`,
      // desc: `Gain hands-on expertise in Artificial Intelligence, Data Science, and Machine Learning through industry-aligned learning. Build practical skills with real-world datasets, intelligent systems, and advanced analytics tools. Prepare for high-growth careers by mastering technologies that drive digital transformation across industries.`,
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
          desc: `10 + 2 with a minimum of 50% in any stream from any accredited board or university.`,
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
        "/landingpage/bca-2026/specialisations/BCA-(Hons.Hons.-with-Research)-AI-&-Data-Science-with-Academic-Support-of-IBM-&-Powered-by-Microsoft-Certifications.webp",
      title: `BCA (Hons. / Hons. with Research) AI & Data Science with academic support of IBM & Powered by Microsoft Certifications`,
      // desc: `Through industry-aligned learning, develop practical competence in machine learning, data science, and artificial intelligence. Develop useful skills using intelligent systems, real-world information, and sophisticated analytics tools. Learn the technologies that propel digital change across sectors to get ready for high-growth employment.`,
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
          desc: `10 + 2 with a minimum of 50% in any stream from any accredited board or university.`,
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
        "/landingpage/bca-2026/specialisations/BCA-(Cyber-Security)-with-Academic-Support-of-EC-Council.webp",
      title: `BCA (Cyber Security) with academic support of EC-Council`,
      // desc: `Learn ethical hacking, network security, and cyber defence with the BCA (Cyber Security) programme at K.R. Mangalam University. The course offers hands-on experience with real-world cyber threats, penetration testing, and vulnerability assessment, equipping students with practical skills to protect digital systems and data. Students also gain expertise in industry-standard tools and techniques, preparing them for careers in cyber security, digital forensics, and IT risk management.`,
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
          desc: `10 + 2 with a minimum of 50% in any stream from any accredited board or university.`,
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
        "/landingpage/bca-2026/specialisations/BCA-(Hons.-Hons.-with-Research)-Cyber-Security-with-Academic-Support-of-EC-Council.webp",
      title: `BCA (Hons. / Hons. with Research) Cyber Security with academic support of EC-Council`,
      // desc: `This programme teaches ethical hacking, network security, and cyber defence. The course gives students practical skills to safeguard digital systems and data by providing them with hands-on experience with real-world cyber threats, penetration testing, and vulnerability assessment. Additionally, students acquire proficiency with industry-standard tools and methods, qualifying them for professions in IT risk management, digital forensics, and cyber security. `,
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
          desc: `10 + 2 with a minimum of 50% in any stream from any accredited board or university.`,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `Rs. 1,65,000`,
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
    label: "Apply for BCA Programme 2026-27",
    href: "#",
  },
};

export const testimonialsData: TestimonialsSection = {
  subheading: "Students’ Testimonials",
  heading: `Why do Aspirants Prefer KRMU?`,
  testimonials: [
    {
      image: "/landingpage/bca-2026/testimonials/1.webp",
      videoUrl: "#",
      quote: `K.R. Mangalam University has truly transformed my career. The BCA (AI & Data Science) 
program not only provided me with technical expertise but also honed my problem-solving and 
analytical skills. The university encouraged us to participate in hackathons, industry projects, 
and internships, which gave me hands-on experience in real-world AI applications. Today, I am 
working as a Sales manager at Rally M`,
      name: "Rishav Bakshi",
      programme: "Sales manager at Rally Motors",
    },
    {
      image: "/landingpage/bca-2026/testimonials/2.webp",
      videoUrl: "#",
      quote: `Looking back at my journey at K.R. Mangalam University, I feel grateful for the incredible 
opportunities I received as a BCA (AI & Data Science) student. The curriculum was designed 
in collaboration with industry experts, ensuring we were up to date with the latest AI trends. 
The mentorship from experienced faculty, research-driven approach, and exposure to AI tools 
like TensorFlow, PyTorch, and Big Data analytics helped me secure my dream job in the tech 
industry. I highly recommend this programme to anyone passionate about AI and data science!
`,
      name: "Parminder Singh",
      programme: "",
    },
    {
      image: "/landingpage/bca-2026/testimonials/3.webp",
      videoUrl: "#",
      quote: `Enrolling in the BCA (AI & Data Science) programme at K.R. Mangalam University was one of the best decisions of my academic journey. The well-structured curriculum, combined with practical exposure through hands-on projects, helped me build a strong foundation in machine learning, data analytics, and cloud computing. The faculty’s guidance and the state-of-the-art labs played a crucial role in enhancing my technical skills. Thanks to the university’s placement cell, I secured a job at a leading AI firm, and I feel confident about tackling industry challenges`,
      name: "Annanya Agarwal ",
      programme: "",
    },
    {
      image: "/landingpage/bca-2026/testimonials/4.webp",
      videoUrl: "#",
      quote: `K.R. Mangalam University didn’t just provide me with a degree—it shaped my career. The BCA (AI & Data Science) programme gave me the technical expertise, industry exposure, and confidence  to work on AI-driven solutions. The university’s tie-ups with industry leaders, guest lectures from AI professionals, and project-based learning approach made a significant difference in my  professional journey. Today, as a Data Analyst, I use the knowledge and skills I gained at KRMU daily. If you're looking for a programme that bridges the gap between academics and industry, this is the place to be!`,
      name: "Shivangi Sharma",
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
      image: "/landingpage/bca-2026/",
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
  description: `K.R. Mangalam University offers state-of-the-art infrastructure to support hands-on and technology-driven learning for BCA students. The campus features advanced computer laboratories equipped with the latest hardware and software, high-speed internet connectivity, and modern classrooms designed for interactive learning. Students benefit from dedicated innovation labs, cyber security and analytics-enabled environments, and access to industry-relevant tools and platforms. Well-stocked digital libraries, collaborative learning spaces, and expert academic support together create an ecosystem that nurtures technical expertise, innovation, and career readiness.`,
  footerText: ``,
  cta: {
    label: "Apply for BCA 2026-27 ",
    href: "#",
  },
  slides: [
    {
      image: "/landingpage/bca-2026/infrastructure/1.webp",
      alt: "World Class Lab",
    },
    {
      image: "/landingpage/bca-2026/infrastructure/2.webp",
      alt: "Research Facility",
    },
    {
      image: "/landingpage/bca-2026/infrastructure/3.webp",
      alt: "Innovation Center",
    },
    {
      image: "/landingpage/bca-2026/infrastructure/4.webp",
      alt: "Library & Resources",
    },
    {
      image: "/landingpage/bca-2026/infrastructure/5.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/bca-2026/infrastructure/6.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/bca-2026/infrastructure/7.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/bca-2026/infrastructure/8.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/bca-2026/infrastructure/9.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/bca-2026/infrastructure/10.webp",
      alt: "Campus Infrastructure",
    },
  ],
};

export const lifeAsPhDScholarData: LifeAsPhDScholarSection = {
  heading: "Life as a BCA Student at KRMU",
  description: "",
  image: {
    src: "/landingpage/bca-2026/student-at-krmu/Collage.webp",
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
      question: "Does the BCA programme involve internships?",
      answer: `Yes, via collaborations with leading IT businesses, students get access to internships and real-world projects.`,
    },
    {
      id: "item-2",
      question: "What programming languages will I learn?",
      answer: `Students will learn Python, Java, C, SQL, and specialisation-specific tools like R for AI/ML and Shell Scripting for Cyber Security.`,
    },
    {
      id: "item-3",
      question:
        "After finishing the programme, what are the employment prospects?",
      answer: `Graduates can work as ethical hackers, machine learning engineers, cyber security analysts, AI developers, and more.`,
    },
    {
      id: "item-4",
      question: "Are there any hostels available?",
      answer: `Yes, KRMU offers modern, secure on-campus housing with all amenities.`,
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
    label: "Apply for BCA Programme 2026-27",
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
  title: "KRMU’s BCA Programmes",
  subtitle:
    "All Our Programmes Comprise of Industry-relevant Curriculum",

  programmes: [
    {
      id: "1",
      tag: "IBM & Microsoft Certifications",
      title: "BCA AI & Data Science",
      subtitle: "",
      desc: "Gain hands-on AI, Data Science, and Machine Learning expertise through industry-aligned learning and advanced analytics tools.",
      duration: "3 Years",
      fees: "",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
    },
    {
      id: "2",
      tag: "IBM & Microsoft Certifications",
      title: "BCA (Hons. / Hons. with Research) AI & Data Science",
      subtitle: "",
      desc: "Develop practical AI, Data Science, and Machine Learning skills through industry-aligned learning and real-world data.",
      duration: "4 Years",
      fees: "",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
    },
    {
      id: "3",
      tag: "EC-Council",
      title: "BCA Cyber Security",
      subtitle: "",
      desc: "Offers hands-on training in ethical hacking, network defence, and preparation for cybersecurity careers.",
      duration: "3 Years",
      fees: "",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
    },
    {
      id: "4",
      tag: "EC-Council",
      title: "BCA (Hons. / Hons. with Research) Cyber Security",
      subtitle: "",
      desc: "Teaches ethical hacking, cyber defence, and penetration testing to prepare students for cybersecurity and IT careers.",
      duration: "4 Years",
      fees: "",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
    },
  ],
};
