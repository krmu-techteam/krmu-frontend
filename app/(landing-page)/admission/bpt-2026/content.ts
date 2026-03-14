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
         B.Ed. & B.El.Ed.
      </span> Admissions Open 2026–27</span>
      <span class="hidden sm:block">
      ADMISSIONS <br />
      OPEN FOR <br />
      <span class="text-[#fcd404] text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold">
       Bachelor of Physiotherapy
      </span>
      <br />
      PROGRAMME <br /> 2026-27
      </span>
    `,
  desc: `Learn to Lead in the realm of healthcare under the expert <br /> guidance of our distinguished faculty while utilising <br /> state-of-the-art facilities for <br /> hands-on physiotherapy learning`,
  heroBg: "/wp-content/landingpage/bpt-2026/bpt.webp",
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
    imgUrl: "/landingpage/bpt-2026/recruiters/asian.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/bpt-2026/recruiters/sarvodya.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/bpt-2026/recruiters/medanta.jpg",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/bpt-2026/recruiters/max.png",
    alt: "Recruiter Logo",
  },
];

export const whyKRM: WhyKRMSection = {
  heading: "What Makes KRMU the Best Option for a BPT Course?",
  subheading: "Turning Passionate Helpers into Professional Healers",
  content: `The Bachelor of Physiotherapy programme at K.R. Mangalam University is structured in a way that it combines in-depth theoretical knowledge with hands-on clinical experience. The students are trained to utilise their conceptual learning in real-time healthcare settings under the expert supervision of our proficient physiotherapists and healthcare experts, who bring years of clinical and teaching experience, thereby ensuring personalised mentorship throughout the academic journey. Additionally, the state-of-the-art physiotherapy labs equipped with advanced modalities provide students with the much-needed exposure to therapeutic techniques used in the realm of rehabilitation. By actively taking part in rural health camps and awareness campaigns, students learn about public health issues while providing physiotherapy help to marginalised areas.`,
  imgUrl: `/landingpage/bpt-2026/why-choose/Building.webp`,
  whyKrmCards: [
    {
      imgUrl: "/landingpage/bpt-2026/why-choose/1.webp",
      content: `State-of-the-art Physiotherapy Labs with Advanced Equipments`,
    },
    {
      imgUrl: "/landingpage/bpt-2026/why-choose/2.webp",
      content: `Focus on Practical Training, Patient Handling, and Evidence-Based Practice`,
    },
    {
      imgUrl: "/landingpage/bpt-2026/why-choose/3.webp",
      content: `Tie-Ups with Reputed Hospitals and Rehabilitation Centres for Clinical Postings`,
    },
    {
      imgUrl: "/landingpage/bpt-2026/why-choose/4.webp",
      content: `Comprehensive 4-year Academic Programme + 6-month Compulsory Internship`,
    },
    {
      imgUrl: "/landingpage/bpt-2026/why-choose/5.webp",
      content: `Dedicated Faculty Comprising Experienced Physiotherapists and Medical Professionals`,
    },
  ],
};

export const industryExperts: IndustryExpertsSection = {
  eyebrow: "",
  heading: `Learn From <br /> Industry Experts`,
  description: `KRMU partners with major organisations to provide <br /> industry-specific training.`,
  cta: {
    label: "Apply for BPT Programme 2026-27",
    href: "#",
  },
  cards: [
    {
      imgUrl: "/landingpage/bpt-2026/learn-from/sarvodya.png",
      alt: "CK Birla Logo",
      title: "",
    },
    {
      imgUrl: "/landingpage/bpt-2026/learn-from/ck-birla.png",
      alt: "Apple Logo",
      title: "AI and Machine Learning Courses",
    },
    {
      imgUrl: "/landingpage/bpt-2026/learn-from/ekta.jpg",
      alt: "Apple Logo",
      title: "AI and Machine Learning Courses",
    },
  ],
  bannerImg: "/wp-content/landingpage/common/indus-exp.webp",
};

export const specialisationData: SpecialisationSection = {
  subheading: ``,
  heading: `KRMU’s BPT Programme`,
  SpecialisationCard: [
    {
      imgUrl: "/landingpage/bpt-2026/specialisations/1.webp",
      title: `Bachelor of Physiotherapy`,
      // desc: `The KRMU's Bachelor of Physiotherapy (BPT) programme leads to a wide array of rewarding and exciting job possibilities in the health and wellness industry. Graduates of this course are widely sought after in a variety of professional fields because they possess practical skills, ethical insights, and a thorough understanding of physiotherapy principles.`,
      desc: ``,
      extraInfos: [
        {
          iconUrl: "/wp-content/landingpage/common/duration.svg",
          title: "Duration:",
          desc: `4.5 Years`,
        },
        {
          iconUrl: "/wp-content/landingpage/common/eligibility.svg",
          title: "Eligibility",
          desc: `Passed 10+2 or equivalent from any recognised board/university in any stream with Physics, Chemistry, Biology with minimum of 50% aggregate marks.`,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `Rs 1,58,000`,
        // },
      ],
    },
  ],
};

export const opportunityData: OpportunitySection = {
  image: {
    src: "/landingpage/bpt-2026/student-at-krmu/Collage.webp",
    alt: "Industry Expert",
    width: 300,
    height: 400,
  },
  heading: "Learn From Industry Experts",
  highlight: "Opportunity That Transforms",
  cta: {
    label: "Apply for BPT Programme 2026-27",
    href: "#",
  },
};

export const testimonialsData: TestimonialsSection = {
  subheading: "Students’ Testimonials",
  heading: `Still in Doubt? <br />See What Our Students Say About Us!`,
  testimonials: [
    {
      image: "/landingpage/bpt-2026/testimonials/1.webp",
      videoUrl: "#",
      quote: `Studying BPT at K.R. Mangalam University was transformative. The blend of theoretical 
learning, clinical practice, and research, supported by experienced faculty, enhanced my 
skills and personal development, preparing me for a successful physiotherapy career. 
Internships with diverse patients further deepened my understanding and passion for 
making a difference. `,
      name: "HARSHIT",
      programme: "",
    },
    {
      image: "/landingpage/bpt-2026/testimonials/2.webp",
      videoUrl: "#",
      quote: `My BPT journey at K.R. Mangalam University was fruitful by providing invaluable clinical 
exposure and shaping me into a skilled physiotherapist. Grateful for the foundation, 
I now apply my knowledge at a reputed rehabilitation centre, guided by empathy and 
commitment instilled during my studies. Forever connected to this incredible institution.
`,
      name: "DHARNA",
      programme: "",
    },
    {
      image: "/landingpage/bpt-2026/testimonials/3.webp",
      videoUrl: "#",
      quote: `I , Manisha, from B.P.T Third Year, attended a CME workshop on advancements and robotic 
surgery in osteoarthritis. It highlighted cutting-edge techniques, surgical precision, and 
improved patient outcomes, emphasising their importance for future physiotherapists in 
delivering advanced care and early rehabilitation. This experience was highly informative 
and inspiring. 
`,
      name: "MANISHA",
      programme: "",
    },
    {
      image: "/landingpage/bpt-2026/testimonials/4.webp",
      videoUrl: "#",
      quote: `The physiotherapy department's visit to ISIC Institute on 21st March 2024 was transformative, 
exposing students to advanced rehabilitation technologies, live sessions, and professional 
insights, enriching academic knowledge and patient care passion.
`,
      name: "MUSKAN RANA",
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
  heading: `Modern Labs & Physiotherapy Clinics`,
  description: `Guided by highly qualified healthcare experts, students utilise the advanced physiotherapy labs equipped with state-of-the-art facilities in order to gain practical exposure to therapeutic techniques and global best practices in healthcare.`,
  footerText: ``,
  cta: {
    label: "Apply for BPT Programme 2026-27",
    href: "#",
  },
  slides: [
    {
      image: "/landingpage/bpt-2026/infrastructure/1.webp",
      alt: "World Class Lab",
    },
    {
      image: "/landingpage/bpt-2026/infrastructure/2.webp",
      alt: "Research Facility",
    },
    {
      image: "/landingpage/bpt-2026/infrastructure/3.webp",
      alt: "Innovation Center",
    },
    {
      image: "/landingpage/bpt-2026/infrastructure/4.webp",
      alt: "Library & Resources",
    },
    {
      image: "/landingpage/bpt-2026/infrastructure/5.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/bpt-2026/infrastructure/6.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/bpt-2026/infrastructure/7.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/bpt-2026/infrastructure/8.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/bpt-2026/infrastructure/9.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/bpt-2026/infrastructure/10.webp",
      alt: "Campus Infrastructure",
    },
  ],
};

export const lifeAsPhDScholarData: LifeAsPhDScholarSection = {
  heading: "Life as a BPT Student at KRMU",
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
  description: "",
  faqs: [
    {
      id: "item-1",
      question: "What is the duration of the BPT programme?",
      answer: `The programme spans 4 years of academic study followed by a 6-month compulsory internship.`,
    },
    {
      id: "item-2",
      question: "Are there clinical postings during the course?",
      answer: `Yes, students undergo clinical postings from the 2nd/3rd year onwards to gain real patient-handling experience.`,
    },
    {
      id: "item-3",
      question: "Does KRMU provide hostel accommodation?",
      answer: `Yes, KRMU provides separate hostels for boys and girls with modern amenities and 24/7 security.`,
    },
    {
      id: "item-4",
      question: "What career options do I have after BPT?",
      answer: `Graduates can work in hospitals, sports clinics, rehab centres, or set up private practices. Further specialisation or postgraduate study is also an option.`,
    },
    {
      id: "item-5",
      question: "Are there opportunities for international exposure?",
      answer: `KRMU often facilitates workshops and collaborative events with global healthcare experts. Consult the university’s international office for more information.`,
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
    label: "Apply for BPT Programme 2026-27",
    href: "#",
  },
  highlights: [
    { id: 1, text: "UGC Approved University" },
    { id: 2, text: "NAAC ‘A’ Accredited " },
    { id: 3, text: "18K+ Alumni Base" },
  ],
};



export const programmeContent = {
  badge: "Healing in Every Move",
  title: "KRMU’s BPT Programme",
  subtitle:
    "Our Programme Comprise of Industry-relevant Curriculum",

  programmes: [
    {
      id: "1",
      tag: "Popular Choice",
      title: "Bachelor of Physiotherapy",
      subtitle: "",
      desc: "The course equips graduates with practical skills, ethical insights, and comprehensive physiotherapy knowledge for diverse careers.",
      duration: "4.5 Years",
      eligibility: "Passed 12th with 50% aggregate marks.*",
      fees: "",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
    },
  ],
};


export const eligibilityTerms = [
  {
    description: "*Eligibility: Candidates must have passed 10+2 or equivalent from an recognised board/university in any stream with Physics, Chemistry, Biology with a minimum of 50% aggregate marks."
  },
];
