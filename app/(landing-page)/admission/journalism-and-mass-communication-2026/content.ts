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
   <span class="sm:hidden"><span class="text-[#fcd404] text-2xl sm:text-3xl md:text-5xl lg:text-8xl font-bold test">
       Emerging Media & Creator Economy
      </span> Admissions Open 2026–27</span>
      <span class="hidden sm:block">
      ADMISSIONS <br />
      OPEN FOR <br />
      <span class="text-[#fcd404] text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold">
       Emerging Media &   <br />Creator Economy
      </span>
      <br />
      PROGRAMMES <br /> 2026-27
      </span>
    `,
  desc: `The Emerging Media & Creator Economy courses <br />focus on developing critical <br /> thinking, communication skills, creativity, <br /> and social awareness, preparing students <br /> for the fast-changing world of media, <br /> communication and storytelling`,
  heroBg: "/wp-content/landingpage/sjmc-2026/sjmc.webp",
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
    imgUrl: "/landingpage/sjmc-2026/recruiters/dainik-bhasker.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/sjmc-2026/recruiters/zeenews.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/sjmc-2026/recruiters/dd-1.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/sjmc-2026/recruiters/outlook.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/sjmc-2026/recruiters/indian-express.png",
    alt: "Recruiter Logo",
  },
];

export const whyKRM: WhyKRMSection = {
  heading: "Why Choose KRMU for the JMC Courses?",
  subheading: "Sophisticated Story-telling for Smart Citizenry",
  content: `The K.R. Mangalam University’s Journalism & Mass Communication programmes are designed for students passionate about news, storytelling, and media innovation. These NEP-compliant programmes equip students with skills in journalism, broadcasting, digital media, and public relations, ensuring they are industry-ready from day one. Additionally, students gain valuable practical experience by participating in intensive live projects, expert guest lectures, networking sessions, and internship programmes.`,
  imgUrl: `/landingpage/common/whykrmtest.png`,
  whyKrmCards: [
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `NEP-Compliant Curriculum - Undergraduate programme with industry-relevant curriculum.`,
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `State-of-the-Art Media Studios - For gaining hands-on experience in Broadcasting, Video Production, and Editing.`,
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `Industry Connect - Internships & Live Projects with Leading News Agencies, PR Firms, and Media Houses.`,
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `Workshops & Guest Lectures - Expert guidance from Top Journalists and Media Professionals.`,
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `Placement - 100% Placement Assistance in Journalism, Advertising, PR, and Digital Media, etc.`,
    },
  ],
};

export const industryExperts: IndustryExpertsSection = {
  eyebrow: "",
  heading: `Learn from <br /> Leaders @ KRMU!
`,
  description: `K.R. Mangalam University takes pride in collaborating with industry leaders and skill professionals who offer unparalleled hands-on learning experiences to students`,
  cta: {
    label: "Apply for EMCE 2026-2027",
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
  heading: `KRMU’s Journalism & Mass Communication Courses`,
  SpecialisationCard: [
    {
      imgUrl: "/landingpage/sjmc-2026/prog/ba-jmc.jpg",
      title: `B.A. (Journalism and Mass Communication)`,
      desc: `This undergraduate programme offered by K.R. Mangalam University perfectly blends conceptual knowledge with practical training in various fields of journalism, media, and communication. This degree aims to promote holistic education by striving to cultivate both analytical and creative thinking, preparing students to enter modern-world media with courage and confidence.`,
      extraInfos: [
        {
          iconUrl: "/wp-content/landingpage/common/duration.svg",
          title: "Duration:",
          desc: `3 Years`,
        },
        {
          iconUrl: "/wp-content/landingpage/common/eligibility.svg",
          title: "Eligibility",
          desc: `Passed 10+2 or equivalent examination from any recognised board/university in any stream with minimum 50% aggregate Marks.`,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `Rs 1,60,000`,
        // },
      ],
    },
    {
      imgUrl: "/landingpage/sjmc-2026/prog/ba-hons-jmc.jpg",
      title: `B.A. (Hons. / Hons. with Research) Journalism And Mass Communication`,
      desc: `The KRMU’s B.A. (Hons. / Hons. with Research) Journalism and Mass Communication is an innovative programme formulated to cultivate the next generation of media professionals and industry leaders. Students study a curriculum that covers the wide spectrum of mass media, ranging from traditional journalism to emerging digital platforms. Offering industry exposure from internships and workshops, the programme empowers students to gain career-relevant skills to take on diverse media-related roles.`,
      extraInfos: [
        {
          iconUrl: "/wp-content/landingpage/common/duration.svg",
          title: "Duration:",
          desc: `4 Years`,
        },
        {
          iconUrl: "/wp-content/landingpage/common/eligibility.svg",
          title: "Eligibility",
          desc: `Passed 10+2 or equivalent examination from any recognised board/university in any stream with minimum 50% aggregate Marks.`,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `Rs 1,60,000`,
        // },
      ],
    },
    {
      imgUrl: "/landingpage/sjmc-2026/prog/ma-jmc.jpg",
      title: `M.A. (Journalism And Mass Communication)`,
      desc: `The aim of KRMU's M.A. JMC course is to prepare students for the fast-paced world of media, communication, and narrative. In order to assist students in comprehending how news, information, and messages are produced and disseminated across many platforms, the curriculum aims to integrate theoretical knowledge with hands-on training. Through guest lectures, workshops, and internships with media organisations, the students' understanding of fundamental subjects like journalistic ethics, media regulations, reporting, and editing is further developed.`,
      extraInfos: [
        {
          iconUrl: "/wp-content/landingpage/common/duration.svg",
          title: "Duration:",
          desc: `2 Years`,
        },
        {
          iconUrl: "/wp-content/landingpage/common/eligibility.svg",
          title: "Eligibility",
          desc: `Candidate must have a bachelor's degree or equivalent degree from a recognised university with a minimum 50% aggregate marks`,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `Rs 1,10,000`,
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
    label: "Apply for EMCE Programme 2026-2027",
    href: "#",
  },
};

export const testimonialsData: TestimonialsSection = {
  subheading: "Students’ Testimonials",
  heading: `Still in Doubt? <br /> See What Our Students Say About Us!`,
  testimonials: [
    {
      image: "/landingpage/sjmc-2026/testimonials/1.jpg",
      videoUrl: "#",
      quote: `SJMC equipped me with the skills to excel as a Social Media Coordinator at the Ministry of Jal Shakti. The hands-on experience and expert guidance were invaluable.
`,
      name: "Ms Niharika Yadav",
      programme: "Social Media Coordinator, Ministry of Jal Shakti",
    },
    {
      image: "/landingpage/sjmc-2026/testimonials/2.jpg",
      videoUrl: "#",
      quote: `JMC provided the platform to realise my dream of becoming a Producer/Anchor. I'm grateful for the opportunities and mentorship that prepared me for India Ahead Hindi.`,
      name: "Ms Samika Rathore",
      programme: "Producer/Anchor, India Ahead Hindi",
    },
    {
      image: "/landingpage/sjmc-2026/testimonials/3.jpg",
      videoUrl: "#",
      quote: `SJMC equipped me with invaluable industry knowledge and practical skills. The hands-on experience and expert faculty guidance prepared me perfectly for my role at HT Media as a Content Writer.`,
      name: "Ms Mahima Bhardwaj",
      programme: "Content Writer, HT Media",
    },
    {
      image: "/landingpage/sjmc-2026/testimonials/4.jpg",
      videoUrl: "#",
      quote: `The knowledge and expertise gained at SJMC have been instrumental in my role as a Content Writer at Flifo Technologies. It's been a journey of growth and learning`,
      name: "Ms Anjali Sinha",
      programme: "Content Writer, Flifo Technologies",
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
  description: `K.R. Mangalam University (KRMU) offers Journalism & Mass Comm students cutting-edge media labs (broadcasting/multimedia studios) equipped with the latest equipment and software. Also, modern smart classrooms, high-speed Wi-Fi, extensive library access, industry expert interactions, practical live projects, internships, and dedicated career support, alongside top-notch general campus amenities like AC hostels, sports facilities, and medical support, ensure a holistic learning experience.
`,
  footerText: ``,
  cta: {
    label: "Apply for EMCE Programme <br />2026-2027",
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
  heading: "Life as a Journalism and Mass Communication Student at KRMU",
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
      question:
        "What are the career opportunities after graduation with a Emerging Media & Creator Economy degree?",
      answer: `Graduates can work as Journalists, PR Specialists, TV Anchors, Social Media Managers, and Content Creators.`,
    },
    {
      id: "item-2",
      question: "What skills will one develop in a Emerging Media & Creator Economy programme?",
      answer: `One will cultivate skills related to news reporting, content creation, video production, digital marketing, and public relations.`,
    },
    {
      id: "item-3",
      question: "Does KRMU provide hostel accommodation?",
      answer: `Yes, KRMU provides separate hostels for boys and girls with modern amenities and 24/7 security.`,
    },
    {
      id: "item-4",
      question:
        "Does the K.R. Mangalam University focus on digital media trends?",
      answer: `Yes. The Emerging Media & Creator Economy courses at KRMU cover digital media elements like SEO, social media marketing, influencer branding, and multimedia journalism.`,
    },
    {
      id: "item-5",
      question: "Does KRMU provide placement support?",
      answer: `Yes, the K.R. Mangalam University offers 100% placement assistance with top media & communication firms.`,
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
    label: "Apply for EMCE Programme 2026-2027",
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
  title: "KRMU’s Emerging Media & Creator Economy Programmes",
  subtitle: "All Our Programmes Comprise of Industry-relevant Curriculum",

  programmes: [
    {
      id: "1",
      tag: "Media Foundation",
      title: "B.A. J.M.C",
      subtitle: "",
      desc: "Blends theory and practical training in journalism and media for analytical and creative skills.",
      duration: "3 Years",
      fees: "176000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
    },
    {
      id: "2",
      tag: "Future Media Leaders",
      title: "B.A. (Hons. / Hons. with Research) J.M.C",
      subtitle: "",
      desc: "Prepares future media leaders through traditional and digital media studies, internships, and workshops.",
      duration: "4 Years",
      fees: "176000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
    },
    {
      id: "3",
      tag: "Advanced Media",
      title: "M.A. J.M.C",
      subtitle: "",
      desc: "Blends theory and practice, covering media ethics, reporting, editing, and real-world exposure through workshops.",
      duration: "2 Years",
      fees: "120000",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
      eligibility: "Passed Bachelor's with 50% aggregate marks.",
    },
  ],
};
