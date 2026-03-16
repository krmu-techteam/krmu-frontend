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
        B.Des.
      </span> Admissions Open 2026–27</span>
       <span class="hidden sm:block">ADMISSIONS <br />
      OPEN FOR <br />
      <span class="text-[#fcd404] text-2xl sm:text-3xl md:text-5xl lg:text-8xl font-bold">
       B.Des.
      </span>
      <br />
      PROGRAMMES <br /> 2026-27
      </span>
    `,
  desc: `Immerse yourself in an inspiring environment that <br />
   nurtures creativity, ignites innovation, and <br /> 
   transforms ideas into impactful design solutions`,
  heroBg: "/wp-content/landingpage/bdes-2026/bdes.webp",
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
    imgUrl: "/landingpage/bdes-2026/recruiters/zynga.webp",
    alt: "Zynga Logo",
  },
  {
    imgUrl: "/landingpage/bdes-2026/recruiters/hplabs.png",
    alt: "HPLabs Logo",
  },
  {
    imgUrl: "/landingpage/bdes-2026/recruiters/greenply.png",
    alt: "Greenply Logo",
  },
  {
    imgUrl: "/landingpage/bdes-2026/recruiters/splash.webp",
    alt: "Splash Logo",
  },
  {
    imgUrl: "/landingpage/bdes-2026/recruiters/myntra-logo.png",
    alt: "Myntra Logo",
  },
  {
    imgUrl: "/landingpage/bdes-2026/recruiters/cognizant.png",
    alt: "Cognizant Logo",
  },
  {
    imgUrl: "/landingpage/bdes-2026/recruiters/zara.webp",
    alt: "ZARA Logo",
  },
  {
    imgUrl: "/landingpage/bdes-2026/recruiters/lifestyle.png",
    alt: "Lifestyle Logo",
  },
  {
    imgUrl: "/landingpage/bdes-2026/recruiters/ubisoft.png",
    alt: "Ubisoft Logo",
  },
];

export const whyKRM: WhyKRMSection = {
  heading: "Why Choose B.Des. Courses at KRMU?",
  subheading: "Preparing Creative Minds for Professional Design Careers",
  content: `The B.Des. programmes at K.R. Mangalam University are designed to nurture creative thinkers who are ready for the evolving design industry. With specialised pathways in Fashion Design, Game Design & Animation, Interior Design, and UX/UI & Interaction Design, the curriculum blends strong design fundamentals with hands-on learning, industry exposure, and advanced tools. Guided by experienced faculty and supported by a vibrant creative ecosystem, students develop practical skills, innovative thinking, and professional confidence to succeed across diverse design careers.`,
  imgUrl: `/landingpage/common/building.webp`,
  whyKrmCards: [
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `NEP-Compliant 4-Year Curriculum with an Honours Track`,
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `Industry Collaborations with Top Brands, and Retailers`,
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `Chance to Go On a 2-Week Summer School Programme at a European University`,
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `Blend of Theoretical & Practical Learning Covering Each and Every Aspect of Design`,
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `Internship & Placement Support`,
    },
  ],
};

export const industryExperts: IndustryExpertsSection = {
  eyebrow: "Why KR Mangalam PhD?",
  heading: `Learn From <br /> Industry Experts`,
  description: `KRMU partners with major organisations to provide <br /> industry-specific training.`,
  cta: {
    label: "Apply for B.Des Programme",
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
  subheading: `Choose the specialisations based on your interest and career goals!`,
  heading: `KRMU’s B.Des. Programmes`,
  SpecialisationCard: [
    {
      imgUrl:
        "/landingpage/bdes-2026/program/bachelor-of-design-bdes-hons-hons-with-research-fashion-design.jpg",
      title: `Bachelor of Design (B.Des.) (Hons. / Hons. with Research) Fashion Design`,
      desc: `This is a four-year undergraduate programme designed for aspiring fashion professionals. The curriculum blends contemporary trends with strong design fundamentals, offering hands-on training in garment construction, textiles, design techniques, and fashion business to prepare students for successful careers in the evolving fashion industry.`,
      extraInfos: [
        {
          iconUrl: "/wp-content/landingpage/common/duration.svg",
          title: "Duration:",
          desc: `4 Years`,
        },
        {
          iconUrl: "/wp-content/landingpage/common/eligibility.svg",
          title: "Eligibility",
          desc: `Must have passed 10+2 or equivalent examination from any recognised board/university in any stream with a minimum of 50% aggregate marks.`,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fees: "", //   title: "Annual fees: "",  desc: `Rs 2,10,000`,
        // },
      ],
    },
    {
      imgUrl:
        "/landingpage/bdes-2026/program/bachelor-of-design-bdes-hons-hons-with-research-interior-design.jpg",
      title: `Bachelor of Design (B.Des.) (Hons. / Hons. with Research) Interior Design`,
      desc: `This 4-year programme prepares students for the evolving interior design industry through a blend of creativity, technical skills, and industry-focused learning. Covering spatial planning, materials, lighting, and aesthetics, the programme equips graduates with industry-ready expertise for successful design careers.`,
      extraInfos: [
        {
          iconUrl: "/wp-content/landingpage/common/duration.svg",
          title: "Duration:",
          desc: `4 Years`,
        },
        {
          iconUrl: "/wp-content/landingpage/common/eligibility.svg",
          title: "Eligibility",
          desc: `Must have passed 10+2 or equivalent examination from any recognised board/university in any stream with a minimum of 50% aggregate marks.`,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fees: "", //   title: "Annual fees: "",  desc: `Rs 2,10,000`,
        // },
      ],
    },
    {
      imgUrl:
        "/landingpage/bdes-2026/program/bachelor-of-design-bdes-hons-hons-with-research-ux-ui-&-interaction-design-with-academic-support-of-imaginxp.jpg",
      title: `Bachelor of Design (B.Des.) (Hons. / Hons. with Research) UX/UI & Interaction Design with academic support of ImaginXP`,
      desc: `Powered by ImaginXP, this 4-year programme equips students with industry-ready skills in user research, interface design, prototyping, and usability testing. Focusing on human-centred design and creative innovation, it enables students to transform ideas into impactful digital experiences, blending visual creativity with technology to craft seamless user interactions.`,
      extraInfos: [
        {
          iconUrl: "/wp-content/landingpage/common/duration.svg",
          title: "Duration:",
          desc: `4 Years`,
        },
        {
          iconUrl: "/wp-content/landingpage/common/eligibility.svg",
          title: "Eligibility",
          desc: `Must have passed 10+2 or equivalent examination from any recognised board/university in any stream with a minimum of 50% aggregate marks.`,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fees: "", //   title: "Annual fees: "",  desc: `Rs 2,40,000`,
        // },
      ],
    },
    {
      imgUrl:
        "/landingpage/bdes-2026/program/bachelor-of-design-bdes-hons-hons-with-research-game-design-&-animation-with-academic-support-of-imaginxp.jpg",
      title: `Bachelor of Design (B.Des.) (Hons. / Hons. with Research) Game Design & Animation with academic support of ImaginXP`,
      desc: `Powered by ImaginXP, this 4-year programme combines expert storytelling and character design with hands-on projects, preparing students to lead in the global gaming and animation market.`,
      extraInfos: [
        {
          iconUrl: "/wp-content/landingpage/common/duration.svg",
          title: "Duration:",
          desc: `4 Years`,
        },
        {
          iconUrl: "/wp-content/landingpage/common/eligibility.svg",
          title: "Eligibility",
          desc: `Must have passed 10+2 or equivalent examination from any recognised board/university in any stream with a minimum of 50% aggregate marks.`,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fees: "", //   title: "Annual fees: "",  desc: `Rs 2,40,000`,
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
    label: "Apply for B.Des Programme",
    href: "#",
  },
};

export const testimonialsData: TestimonialsSection = {
  subheading: "Students’ Testimonials",
  heading: `Why Do Our Students Trust Us?`,
  testimonials: [
    {
      image: "/landingpage/bdes-2026/testimonials/1.jpg",
      videoUrl: "#",
      quote: `My journey at K.R. Mangalam University has been truly transformative. The faculty’s continuous  guidance played a key role in my academic and personal growth. Their mentorship extended  beyond the classroom, encouraging confidence and creativity. The opportunity for early placement gave me valuable industry exposure. The Training and Placement Cell provided 
consistent and personalised support. Today, I fees: "",repared, and ready to take the 
next step in my professional journey.`,
      name: "Jigyasa Batra",
      programme: "B.Des. (Hons.) Interior Design",
    },
    {
      image: "/landingpage/bdes-2026/testimonials/2.jpg",
      videoUrl: "#",
      quote: `Hey, I'm Sumit Kushwaha from SOAD at K.R. Mangalam University, currently pursuing a B.Des. 
in Game Design and Animation. I aspire to become a VFX Artist/Compositor, and my journey 
here has been incredibly enriching. The faculty, with their hands-on industry experience, have 
been instrumental in shaping my skills. Their guidance and mentorship help make our dreams 
come to reality.`,
      name: "Sumit Kushwaha",
      programme: "B.Des. (Hons.) Game Design & Animation",
    },
    {
      image: "/landingpage/bdes-2026/testimonials/3.jpg",
      videoUrl: "#",
      quote: `My journey as a fashion design student at K.R. Mangalam University has been truly transformative.  
      The Fashion Design programme strengthened my creative foundation while building the  
      confidence, discipline, and professional ethics that guide me today as Head Designer at Esha Koul,
       New Delhi. I am deeply grateful to the faculty for their constant support, insightful teaching, and 
       encouragement, which helped me grow from a learner into a confident design professional.`,
      name: "Mansi Bansal",
      programme: "B.Des. (Hons.) Fashion Design",
    },
    {
      image: "/landingpage/bdes-2026/testimonials/4.jpg",
      videoUrl: "#",
      quote: `I am Harsh Kumar, a second semester B.Des. UI/UX Design student. With a strong vision to
       build a career in UX design, this course has fuelled my skills and passion. K.R. Mangalam 
       University has provided me with a solid foundation, enriching my knowledge and strengthening
        my background in design. My mentors and faculty have been my backbone, guiding and supporting
         me throughout my journey.`,
      name: "Harsh Kumar",
      programme: "B.Des. (Hons.) Game Design & Animation",
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
  heading: `World-Class Facilities`,
  description: `K.R. Mangalam University offers top-notch, industry-standard facilities and specialized design labs, creating a sophisticated ecosystem of high-end studios and cutting-edge technology that empowers B.Des. students to bring their creative visions to life.`,
  footerText: ``,
  cta: {
    label: "Apply for B.Des. 2026-27 ",
    href: "#",
  },
  slides: [
    {
      image: "/landingpage/bsc-cse-2026/infrastructure/1.webp",
      alt: "World Class Lab",
    },
    {
      image: "/landingpage/bsc-cse-2026/infrastructure/2.webp",
      alt: "Research Facility",
    },
    {
      image: "/landingpage/bsc-cse-2026/infrastructure/3.webp",
      alt: "Innovation Center",
    },
    {
      image: "/landingpage/bsc-cse-2026/infrastructure/4.webp",
      alt: "Library & Resources",
    },
    {
      image: "/landingpage/bsc-cse-2026/infrastructure/5.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/bsc-cse-2026/infrastructure/6.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/bsc-cse-2026/infrastructure/7.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/bsc-cse-2026/infrastructure/8.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/bsc-cse-2026/infrastructure/9.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/bsc-cse-2026/infrastructure/10.webp",
      alt: "Campus Infrastructure",
    },
  ],
};

export const lifeAsPhDScholarData: LifeAsPhDScholarSection = {
  heading: "Life as a B.Des. Student at KRMU",
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
      question:
        "What design programmes are offered at the School of Architecture & Design?",
      answer: `KRMU offers several undergraduate design programmes including B.Des. in Fashion Design, Interior Design, Game Design & Animation, and UX/UI & Interaction Design. `,
    },
    {
      id: "item-2",
      question: "What is the duration of the B.Des. programmes?",
      answer: `All Bachelor of Design (B.Des.) programmes are four-year undergraduate courses designed to provide comprehensive theoretical and practical training.`,
    },
    {
      id: "item-3",
      question: "What subjects or skills will I learn in these design courses?",
      answer: `Students learn design fundamentals, creative process, software tools, project development, industry workshops, and domain-specific skills like fashion techniques, spatial planning, UI/UX design, or game animation.`,
    },
    {
      id: "item-4",
      question:
        "Does the Fashion Design course include practical and studio-based learning?",
      answer: `Yes, the programme emphasises hands-on studio work, workshops, and live projects, allowing students to translate creative concepts into finished designs and collections.
`,
    },
    {
      id: "item-5",
      question:
        "What career opportunities are available after completing Fashion Design at KRMU?",
      answer: `Graduates can pursue careers as fashion designers, apparel designers, fashion stylists, visual merchandisers, fashion illustrators, or start their own labels and design ventures.`,
    },
    {
      id: "item-6",
      question: "Does KRMU provide global exposure in design programmes?",
      answer: `Yes, students may get opportunities for international summer programmes, exchange experiences, and exposure to global design practices.`,
    },
    {
      id: "item-7",
      question: "What facilities support design education at KRMU?",
      answer: `The School has specialised studios, workshops, labs, and software for design practice in areas like fashion, interior spaces, animation, and UX/UI.`,
    },
    {
      id: "item-8",
      question: "Is there placement and career support for design students?",
      answer: `Yes! KRMU offers 100% placement assistance with strong industry connections, helping students secure internships and job opportunities upon graduation.`,
    },
    {
      id: "item-9",
      question: "Is hostel accommodation available for students?",
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
    label: "Apply for B.Des. 2026-27",
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
  title: "KRMU’s Design Programmes",
  subtitle:
    "All Our Programmes Comprise of Industry-relevant Curriculum",

  programmes: [
    {
      id: "1",
      tag: "",
      title: "B.Des. (Hons. / Hons. with Research) Fashion Design",
      subtitle: "",
      desc: "Four-year undergraduate programme combining fashion fundamentals, trends, design training, and business skills for dynamic industry careers.",
      duration: "4 Years",
      fees: "230000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
    },
    {
      id: "2",
      tag: "",
      title: "B.Des. (Hons. / Hons. with Research) Interior Design",
      subtitle: "",
      desc: "Four-year programme combining creativity, technical skills, and industry-focused learning to prepare students for interior design careers.",
      duration: "4 Years",
      fees: "230000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
    },
    {
      id: "3",
      tag: "ImaginXP",
      title: "B.Des. (Hons. / Hons. with Research) UX/UI & Interaction Design",
      subtitle: "",
      desc: "ImaginXP-supported programme teaching user research, interface design, prototyping, and usability for impactful digital experiences.",
      duration: "4 Years",
      fees: "260000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
    },
    {
      id: "4",
      tag: "ImaginXP",
      title: "B.Des. (Hons. / Hons. with Research) Game Design & Animation",
      subtitle: "",
      desc: "ImaginXP-supported course blending storytelling, character design, and projects, preparing students for global gaming and animation careers.",
      duration: "4 Years",
      fees: "260000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
    },
    {
      id: "5",
      tag: "",
      title: "M. Design (Interior Design)**",
      subtitle: "",
      desc: "Hone skills in spatial planning, aesthetics, sustainable design, 3D visualisation, and innovative interior solutions.",
      duration: "2 Years",
      fees: "200000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
      eligibility: "A qualifying degree in Design/ Fine Arts or in any stream with 50% aggregate marks.",
    },
  ],
};

export const eligibilityTerms = [
  {
    description: "** Subject to Approval"
  },
];




