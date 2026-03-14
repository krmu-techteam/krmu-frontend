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
        B.Tech.
      </span> Admissions Open 2026–27</span>
       <span class="hidden sm:block">ADMISSIONS <br />
      OPEN FOR <br />
      <span class="text-[#fcd404] text-2xl sm:text-3xl md:text-5xl lg:text-8xl font-bold">
       B.Tech.
      </span>
      <br />
      PROGRAMMES<br />2026-27</span>
    `,
  desc: `Ideate, Innovate and Influence the Turf of Technology with our B.Tech. Programmes <br /> comprising an industry-driven curriculum to shape tomorrow’s tech leaders`,
  heroBg: "/wp-content/landingpage/btech-2026/btech.webp",
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


// import { ProgrammeCardItem } from "@/types/programme";

export const programmeContent = {
  badge: "7 Specializations",
  title: "Choose Your Focus",
  subtitle:
    "All programs are 4-year B.Tech degrees with industry-integrated curriculum.",

  programmes: [
    {
      id: "1",
      tag: "Core",
      title: "B.Tech CSE",
      subtitle: "Foundational Computer Science",
      desc: "Strong foundation in programming, algorithms, data structures, and system design via an industry-relevant curriculum",
      duration: "4 Years",
      fee: "₹2,30,000",
      ctaText: "Apply for CSE",
      ctaLink: "#apply-form",
    },
    {
      id: "2",
      tag: "Core",
      title: "B.Tech CSE AI ML",
      subtitle: "Foundational Computer Science",
      desc: "Strong foundation in algorithms...",
      duration: "4 Years",
      fee: "₹2,30,000",
      ctaText: "Apply for CSE",
      ctaLink: "#apply-form",
    },
    {
      id: "3",
      tag: "Special",
      title: "B.Tech CSE UI UX",
      subtitle: "Foundational Computer Science",
      desc: "Strong foundation in algorithms...",
      duration: "4 Years",
      fee: "₹2,30,000",
      ctaText: "Apply for CSE",
      ctaLink: "#apply-form",
    },
    {
      id: "4",
      tag: "Core",
      title: "B.Tech CSE Hons",
      subtitle: "Foundational Computer Science",
      desc: "Strong foundation in algorithms...",
      duration: "4 Years",
      fee: "₹2,30,000",
      ctaText: "Apply for CSE",
      ctaLink: "#apply-form",
    },
  ],
};



// Recruiters list
export const prominentRecruiters: ProminentRecruit[] = [
  {
    imgUrl: "/wp-content/landingpage/btech-2026/recruiters/amazon.webp",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/wp-content/landingpage/btech-2026/recruiters/infosys.svg",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/wp-content/landingpage/btech-2026/recruiters/apple.svg",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/wp-content/landingpage/btech-2026/recruiters/deliotte.svg",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/wp-content/landingpage/btech-2026/recruiters/icici.svg",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/wp-content/landingpage/btech-2026/recruiters/accenture.svg",
    alt: "Recruiter Logo",
  },
];

export const whyKRM: WhyKRMSection = {
  heading: "What Makes KRMU a Preferred Destination for B.Tech. Courses?",
  subheading:
    "Securing The Future of Technology with Intelligence and Integrity",
  content: `With an emphasis on cutting-edge technologies like Artificial Intelligence (AI), Machine Learning (ML), Data Science, the Internet of Things (IoT), Cyber Security, Robotics, and UI/UX Design, etc., K.R. Mangalam University's B.Tech. programmes aim to give students a solid foundation in technology. Students become industry-ready by getting real-world experience through a one-year industry internship. Additionally, owing to a well-crafted industry-academia linkage, students get a plethora of opportunities for advancing their professional careers and creating their own networks.`,
  imgUrl: `/landingpage/btech-2026/why-choose/Building.webp`,
  whyKrmCards: [
    {
      imgUrl: "/landingpage/btech-2026/why-choose/1.webp",
      content: `Future-Proof Curriculum made in collaboration with Top Engineering Experts`,
    },
    {
      imgUrl: "/landingpage/btech-2026/why-choose/2.webp",
      content: `Personal 1:1 Monthly Mentorship with Industry Professionals`,
    },
    {
      imgUrl: "/landingpage/btech-2026/why-choose/3.webp",
      content: `1-Year Industry Internship for practical experience`,
    },
    {
      imgUrl: "/landingpage/btech-2026/why-choose/4.webp",
      content: `Classes by dedicated expert Instructors who have built FB Messenger, Uber, and more`,
    },
    {
      imgUrl: "/landingpage/btech-2026/why-choose/5.webp",
      content: `Build 50+ Real-World products that mimic engineering challenges`,
    },
  ],
};

export const industryExperts: IndustryExpertsSection = {
  eyebrow: "",
  heading: `Learn From <br /> Industry Experts`,
  description: `KRMU partners with major organisations to provide <br /> industry-specific training.`,
  cta: {
    label: `Apply for B.Tech. 2026-27`,
    href: "#",
  },
  cards: [
    {
      imgUrl: "/landingpage/btech-2026/learn-from/ibm.png",
      alt: "Apple Logo",
      title: "AI and Machine Learning Courses",
    },
    {
      imgUrl: "/wp-content/landingpage/common/imaginxp.svg",
      alt: "Apple Logo",
      title: "AI and Machine Learning Courses",
    },
    {
      imgUrl: "/landingpage/btech-2026/learn-from/eccoun.jpg",
      alt: "Apple Logo",
      title: "AI and Machine Learning Courses",
    },
    {
      imgUrl: "/wp-content/landingpage/common/samatrix.webp",
      alt: "Apple Logo",
      title: "AI and Machine Learning Courses",
    },
    {
      imgUrl: "/landingpage/btech-2026/learn-from/xebia.png",
      alt: "Apple Logo",
      title: "AI and Machine Learning Courses",
    },
  ],
  bannerImg: "/wp-content/landingpage/common/indus-exp.webp",
};

export const specialisationData: SpecialisationSection = {
  subheading: `Choose from KRMU’s BBA (UG) programmes and start building your future in business and management.`,
  heading: `KRMU’s B.Tech. Programmes`,
  SpecialisationCard: [
    {
      imgUrl:
        "/landingpage/btech-2026/specialisations/B.Tech.-Computer-Science-and-Engineering-(CSE).webp",
      title: `B.Tech. Computer Science and Engineering (CSE)`,
      // desc: `The B.Tech. Computer Science and Engineering programme at K.R. Mangalam University enables students to develop a strong basic foundation in concepts like programming, algorithms, data structures, and system design. With a future-ready and industry-relevant curriculum, learners gain hands-on experience in artificial intelligence, data science, cybersecurity, cloud computing, and software engineering. Expert faculty, modern laboratories, and industry-aligned projects ensure practical exposure and innovation. Finally, Students benefit from internships, research opportunities, hackathons, and global certifications that enhance employability. `,
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
          desc: `Passed 10+2 examination with Physics and Mathematics as mandatory courses. For the remaining single course, select any course from Chemistry/ Computer Science/ Electronics/ Information Technology/ Biology/ Informatics Practices/ Biotechnology/ Technical Vocational subject/ Agriculture/ Engineering Graphics/ Business Studies/ Entrepreneurship from any recognised Board/ University with minimum 50% aggregate marks.`,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `Rs 2,30,000`,
        // },
      ],
    },
    {
      imgUrl:
        "/landingpage/btech-2026/specialisations/B.Tech.-Computer-Science-and-Engineering-(Robotics-&-AI)-with-Academic-Support-of-IBM-&-powered-by-Microsoft-Certifications.webp",
      title: `B.Tech. Computer Science and Engineering (Robotics & AI) with academic support of IBM & powered by Microsoft Certifications`,
      // desc: `The K.R. Mangalam University’s B.Tech. Computer Science and Engineering (Robotics & AI), designed with academic support from IBM and powered by Microsoft Certifications, is an industry-aligned program that blends strong engineering foundations with hands-on learning in AI, robotics, cloud, data, and automation. IBM-led curricula and Microsoft credentials enhance employability, validating real-world skills employers seek.`,
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
          desc: `Passed 10+2 examination with Physics and Mathematics as mandatory courses. For the remaining single course, select any course from Chemistry/ Computer Science/ Electronics/ Information Technology/ Biology/ Informatics Practices/ Biotechnology/ Technical Vocational subject/ Agriculture/ Engineering Graphics/ Business Studies/ Entrepreneurship from any recognised Board/ University with minimum 50% aggregate marks.`,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `2,50,000`,
        // },
      ],
    },
    {
      imgUrl:
        "/landingpage/btech-2026/specialisations/B.Tech.-Computer-Science-and-Engineering-(AI-&-ML)-with-academic-support-of-IBM-&-powered-by-Microsoft-Certifications.webp",
      title: `B.Tech. Computer Science and Engineering (AI & ML) with academic support of IBM & powered by Microsoft Certifications`,
      // desc: `The B.Tech. Computer Science and Engineering (AI & ML) program of K.R. Mangalam University is meticulously designed to shape industry-ready innovators. This programme blends strong computer science fundamentals with cutting-edge Artificial Intelligence and Machine Learning, enhanced by academic support from IBM and powered by Microsoft Certifications. Graduates are prepared for high-demand roles such as AI engineer, data scientist, and ML developer, equipped with skills that meet evolving industry needs and drive innovation across diverse sectors.`,
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
          desc: `Passed 10+2 examination with Physics and Mathematics as mandatory courses. For the remaining single course, select any course from Chemistry/ Computer Science/ Electronics/ Information Technology/ Biology/ Informatics Practices/ Biotechnology/ Technical Vocational subject/ Agriculture/ Engineering Graphics/ Business Studies/ Entrepreneurship from any recognised Board/ University with minimum 50% aggregate marks.`,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `Rs 2,65,000`,
        // },
      ],
    },
    {
      imgUrl:
        "/landingpage/btech-2026/specialisations/B.Tech.-CSE-(Cybersecurity)-with-academic-support-of-EC-Council-&-IBM.webp",
      title: `B.Tech. CSE (Cybersecurity) with academic support of EC-Council & IBM`,
      // desc: `The K.R. Mangalam University strives to build a secure future for its students with the B.Tech. CSE (Cybersecurity) programme that’s crafted to meet the growing global demand for cyber professionals. This industry-focused course is offered with academic support from EC-Council and IBM, combining strong computer science foundations with advanced cybersecurity expertise. `,
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
          desc: `Passed 10+2 examination with Physics and Mathematics as mandatory courses. For the remaining single course, select any course from Chemistry/ Computer Science/ Electronics/ Information Technology/ Biology/ Informatics Practices/ Biotechnology/ Technical Vocational subject/ Agriculture/ Engineering Graphics/ Business Studies/ Entrepreneurship from any recognised Board/ University with minimum 50% aggregate marks. `,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `Rs 2,50,000`,
        // },
      ],
    },
    {
      imgUrl:
        "/landingpage/btech-2026/specialisations/B.Tech.-CSE-(Data-Science)-with-the-academic-support-of-IBM.webp",
      title: `B.Tech. CSE (Data Science) with the academic support of IBM`,
      // desc: `The B.Tech. CSE (Data Science) programme of K.R. Mangalam University is intricately designed to create the next generation of data-driven professionals. With academic support from IBM, this industry-aligned course blends strong computer science fundamentals with advanced data science, analytics, and AI skills. `,
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
          desc: `Passed 10+2 examination with Physics and Mathematics as mandatory courses. For the remaining single course, select any course from Chemistry/ Computer Science/ Electronics/ Information Technology/ Biology/ Informatics Practices/ Biotechnology/ Technical Vocational subject/ Agriculture/ Engineering Graphics/ Business Studies/ Entrepreneurship from any recognised Board/ University with minimum 50% aggregate marks. `,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `Rs 2,50,000`,
        // },
      ],
    },
    {
      imgUrl:
        "/landingpage/btech-2026/specialisations/B.Tech.-CSE-(Full-Stack-Development)-with-academic-support-of-ImaginXP.webp",
      title: `B.Tech. CSE (Full Stack Development) with academic support of ImaginXP`,
      // desc: `The students of K.R. Mangalam University enrolled in the B.Tech. CSE (Full Stack Development) programme, master the art of developing robust, scalable, and user-centric applications as well as learn to seamlessly integrate front-end design with powerful back-end infrastructure while working with modern frameworks and cloud technologies.`,
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
          desc: `Passed 10+2 examination with Physics and Mathematics as mandatory courses. For the remaining single course, select any course from Chemistry/ Computer Science/ Electronics/ Information Technology/ Biology/ Informatics Practices/ Biotechnology/ Technical Vocational subject/ Agriculture/ Engineering Graphics/ Business Studies/ Entrepreneurship from any recognised Board/ University with minimum 50% aggregate marks.`,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `Rs 2,50,000`,
        // },
      ],
    },
    {
      imgUrl:
        "/landingpage/btech-2026/specialisations/B.Tech.-CSE-(UX-UI)-with-academic-support-of-ImaginXP.webp",
      title: `B.Tech. CSE (UX/UI) with academic support of ImaginXP`,
      // desc: `The B.Tech. CSE (UX/UI) is a four-year undergraduate programme of K.R. Mangalam University meticulously designed to provide educational excellence in technological design. In this comprehensive programme, students learn computing approaches and technologies to become User Interface (UI) and User Experience (UX) designers. With the academic association with ImaginXP, students learn practical knowledge from industry experts and have access to advanced tools. `,
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
          desc: `Passed 10+2 examination with Physics and Mathematics as mandatory courses. For the remaining single course, select any course from Chemistry/ Computer Science/ Electronics/ Information Technology/ Biology/ Informatics Practices/ Biotechnology/ Technical Vocational subject/ Agriculture/ Engineering Graphics/ Business Studies/ Entrepreneurship from any recognised Board/ University with minimum 50% aggregate marks. `,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `Rs 2,50,000`,
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
    label: "Apply for B.Tech. 2026-27",
    href: "#",
  },
};

export const testimonialsData: TestimonialsSection = {
  subheading: "See What Our Students Say About Us!",
  heading: `Students’ Testimonials`,
  testimonials: [
    {
      image: "/wp-content/landingpage/btech-2026/testimonials/1.jpg",
      videoUrl: "#",
      quote: `My 4 years at K.R. Mangalam University were full of learning something useful every 
day that I can carry forward through my life. I highly appreciate the efforts of my 
faculty members for being so kind and helping me with my doubts and giving me 
proper career guidance. The facilities provided really helped me fully enjoy my days.
`,
      name: "Daksh Mehta",
      programme: "B.Tech. CSE",
    },
    {
      image: "/wp-content/landingpage/btech-2026/testimonials/2.jpg",
      videoUrl: "#",
      quote: `I would like to extend my gratitude to the Training and Placement Cell of K.R. 
Mangalam University for their continued efforts in providing ample amount of 
chances to students. I am grateful to each mentor who guided me to develop my 
academic and interpersonal skills. Choosing K.R. Mangalam University was a great 
decision that helped me to pursue my dream.
`,
      name: "Abhinav Anand",
      programme: "B.Tech. CSE",
    },
    {
      image: "/wp-content/landingpage/btech-2026/testimonials/3.webp",
      videoUrl: "#",
      quote: `Choosing K.R. Mangalam University for my B.Tech. in CSE was one of the best decisions 
I've ever made. The university's rigorous curriculum and industry-relevant training 
have equipped me with the tools necessary to excel in the tech world. I am proud 
to share that I am working with Debcor Engineering Pvt Ltd, earning a competitive 
salary of 17.4 LPA. The foundation I built at K.R. Mangalam has been key to my career 
advancement.
`,
      name: "Darshit Raghav",
      programme: "B.Tech. CSE",
    },
    {
      image: "/wp-content/landingpage/btech-2026/testimonials/4.webp",
      videoUrl: "#",
      quote: `K.R. Mangalam University was a transformative journey for me. The exceptional 
education and hands-on experience I received in Computer Science Engineering have 
been instrumental in shaping my career. I am currently thriving as a professional at 
Nirmata Technologies India Private Ltd, with an impressive package of 20 LPA. The 
skills and knowledge I gained at K.R. Mangalam have been pivotal in achieving this 
success.
`,
      name: "Abhinav Sinha",
      programme: "B.Tech. CSE",
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
  heading: `Modern Labs & State-of-the-Art Facilities`,
  description: `Students at K.R. Mangalam University have access to modern computer labs equipped with the latest software and hardware, high-performance computing resources, and dedicated project spaces. This enables hands-on learning and experimentation with real-world technologies.`,
  footerText: ``,
  cta: {
    label: "Apply for B.Tech. 2026-27 ",
    href: "#",
  },
  slides: [
    {
      image: "/landingpage/btech-2026/infrastructure/1.webp",
      alt: "World Class Lab",
    },
    {
      image: "/landingpage/btech-2026/infrastructure/2.webp",
      alt: "Research Facility",
    },
    {
      image: "/landingpage/btech-2026/infrastructure/3.webp",
      alt: "Innovation Center",
    },
    {
      image: "/landingpage/btech-2026/infrastructure/4.webp",
      alt: "Library & Resources",
    },
    {
      image: "/landingpage/btech-2026/infrastructure/5.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/btech-2026/infrastructure/6.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/btech-2026/infrastructure/7.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/btech-2026/infrastructure/8.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/btech-2026/infrastructure/9.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/btech-2026/infrastructure/10.webp",
      alt: "Campus Infrastructure",
    },
  ],
};

export const lifeAsPhDScholarData: LifeAsPhDScholarSection = {
  heading: "Life as a B.Tech. Student at KRMU",
  description: "",
  image: {
    src: "/landingpage/btech-2026/student-at-krmu/Collage.webp",
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
      question: "What is the placement record of the university?",
      answer: `KRMU has 92% placement record with students placed in reputed organisations across various industries. Our dedicated placement cell provides career guidance and support to students. The highest package offered was 56.6 LPA.`,
    },
    {
      id: "item-2",
      question: "What campus facilities are available to students?",
      answer: `The KRMU campus is equipped with state-of-the-art facilities, including modern classrooms, laboratories, a library, sports complexes, hostels, and cafeterias, ensuring a comprehensive learning and living experience.
`,
    },
    {
      id: "item-3",
      question: "Does KRMU provide hostel accommodation?",
      answer: `Yes, KRMU provides separate hostels for boys and girls with modern amenities and 24/7 security.

      `,
    },
    {
      id: "item-4",
      question: "Does the university offer scholarships or financial aid?",
      answer: `Yes, we offer various scholarships and financial aid programmes based on academic merit, sports achievements, and economic needs. Detailed information about these programmes can be found in the scholarships section of our website.
`,
    },
    {
      id: "item-5",
      question: "Are there opportunities for international exposure?",
      answer: `KRMU often facilitates workshops and collaborative events with global industrial experts. Consult the university’s international office for more information.
`,
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
    label: "Apply for B.Tech. 2026-27",
    href: "#",
  },
  highlights: [
    { id: 1, text: "UGC Approved University" },
    { id: 2, text: "NAAC ‘A’ Accredited " },
    { id: 3, text: "18K+ Alumni Base" },
  ],
};


export const eligibilityTerms = [
  {
    description: "Passed 12th with minimum 50% aggregate marks."
  },
  {
    description: "Admission based on merit and personal interview."
  },
];
