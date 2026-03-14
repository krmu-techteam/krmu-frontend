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
      <span class="text-[#fcd404] text-2xl sm:text-3xl md:text-5xl lg:text-8xl font-bold">
       B.Ed. & <br /> B.El.Ed.
      </span>
      <br />
      PROGRAMMES <br /> 2026-27
      </span>
    `,
  desc: `Your path to pursuing a teaching career begins <br /> with K.R. Mangalam University’s Education Programmes, <br /> preparing you to inspire the next generation`,
  heroBg: "/wp-content/landingpage/beld-2026/beld.webp",
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
    imgUrl: "/landingpage/beld-2026/recruiters/simpilearn.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/beld-2026/recruiters/merit.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/beld-2026/recruiters/chegg.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/beld-2026/recruiters/dps.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/beld-2026/recruiters/whj.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/beld-2026/recruiters/toppr.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/beld-2026/recruiters/vedantu.png",
    alt: "Recruiter Logo",
  },
];

export const whyKRM: WhyKRMSection = {
  heading: "Why Choose B.Ed./B.El.Ed. Course at KRMU?",
  subheading: "",
  content: `K.R. Mangalam University’s Education Programmes offer a strong blend of theoretical foundations and practical learning, preparing students for real-world teaching careers. The School of Education regularly hosts seminars, workshops, collaborative projects, case studies, and expert lectures by prominent national speakers, ensuring continuous industry and academic exposure. With guidance from experienced educators and access to state-of-the-art facilities, students are encouraged to engage in research areas such as curriculum design, educational psychology, and learning disabilities, fostering a globally aligned learning environment that shapes confident and capable educators.
`,
  imgUrl: `/landingpage/common/whykrmtest.png`,
  whyKrmCards: [
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `Programmes curated by industry experts to merge practical learning with education theory`,
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `Mentorship from experts with years of industry experience`,
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `Future-proof programmes to ensure our students are industry ready`,
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `International collaborations with institutions and global leaders to offer global exposure`,
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `Student-centric infrastructure to promote better learning and campus life`,
    },
  ],
};

export const industryExperts: IndustryExpertsSection = {
  eyebrow: "",
  heading: `Learn From <br /> Industry Experts`,
  description: `KRMU partners with major organisations to provide <br /> industry-specific training.`,
  cta: {
    label: "Apply for Education Programme 2026-2027",
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
  subheading: `Choose the Education Programme based on your interest and career goals!`,
  heading: `KRMU’s Education Programmes `,
  SpecialisationCard: [
    {
      imgUrl: "/landingpage/beld-2026/specialisations/bed.webp",
      title: `Bachelor of Education (B.Ed.)`,
      desc: `This two-year NCTE-approved programme prepares aspiring educators for successful teaching careers. The B.Ed. programme builds a strong foundation in educational processes, curriculum design, innovative teaching methods, and lesson planning, empowering future teachers to meet the evolving demands of modern education.`,
      extraInfos: [
        {
          iconUrl: "/wp-content/landingpage/common/duration.svg",
          title: "Duration:",
          desc: `2 Years`,
        },
        {
          iconUrl: "/wp-content/landingpage/common/eligibility.svg",
          title: "Eligibility",
          desc: `Must possess a UG/PG degree from a recognised university with a minimum of 50% aggregate marks.`,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `Rs 1,25,000`,
        // },
      ],
    },
    {
      imgUrl: "/landingpage/beld-2026/specialisations/beld.webp",
      title: `Bachelor of Elementary Education (B.El.Ed.)`,
      desc: `This is a four-year undergraduate programme designed to prepare future educators for teaching at the elementary level (Classes I–VIII). Approved by the NCTE and UGC, the programme builds a strong foundation in child development and educational psychology, while integrating theoretical knowledge with practical teaching skills—equipping graduates to confidently address the evolving challenges of elementary education.
`,
      extraInfos: [
        {
          iconUrl: "/wp-content/landingpage/common/duration.svg",
          title: "Duration:",
          desc: `5 Years`,
        },
        {
          iconUrl: "/wp-content/landingpage/common/eligibility.svg",
          title: "Eligibility",
          desc: `Must have passed 10+2 or equivalent examination from any recognised board/university in any stream with a minimum of 50% aggregate marks.`,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `Rs 1,25,000 `,
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
    label: "Apply for Education Programme 2026-2027",
    href: "#",
  },
};

export const testimonialsData: TestimonialsSection = {
  subheading: "Students’ Testimonials",
  heading: `Why Do Our Students Trust Us? `,
  testimonials: [
    {
      image: "/landingpage/beld-2026/testimonials/1.jpg",
      videoUrl: "#",
      quote: `Enrolling in the B.El.Ed. programme at K. R. Mangalam University has been one of the most 
rewarding decisions of my academic career. From day one, I was immersed in an environment 
that not only emphasised theoretical knowledge but also provided extensive practical exposure. 
The micro-teaching sessions, simulated classroom experiences, and interactive workshops 
helped me build confidence in lesson planning and classroom management. The faculty 
members are highly experienced and supportive, always encouraging us to think critically and 
creatively. 
`,
      name: "Nimisha Khaneja",
      programme: "(B.El.Ed.) Trainee Counsellor, St. Joseph’s Academy",
    },
    {
      image: "/landingpage/beld-2026/testimonials/2.jpg",
      videoUrl: "#",
      quote: `One of the best aspects of the B.Ed. programme at K. R. Mangalam University is the supportive 
learning environment created by the faculty and peers. The small class sizes and interactive 
teaching methods allow for meaningful discussions and a deeper understanding of the subject 
matter. Beyond theoretical knowledge, the program offers various opportunities to engage in 
practical learning through workshops, storytelling sessions, and peer teaching. I particularly 
enjoyed the focus on early childhood education and special education, which helped me gain a 
broader perspective on diverse learning needs. 
`,
      name: "Prity Singh",
      programme: "(B.Ed.) Teacher, Hello kids - GJ International School",
    },
    {
      image: "/landingpage/beld-2026/testimonials/3.jpg",
      videoUrl: "#",
      quote: `The B.El.Ed. programme at K. R. Mangalam University seamlessly blends theory with practice, 
ensuring that aspiring teachers are well-prepared for real-world challenges. The structured lessonplanning exercises, hands-on training in ICT tools, and workshops on classroom management have been instrumental in shaping my teaching skills. The university’s commitment to excellence is evident in its experienced faculty, who constantly push us to innovate and think critically about our roles as educators. The internship experience allowed me to understand the nuances of student behavior, curriculum design, and effective teaching strategies.
`,
      name: "Guruksha Bansal",
      programme: "(B.El.Ed.) Pursuing M.Ed.",
    },
    //     {
    //       image: "/landingpage/beld-2026/testimonials/4.jpg",
    //       videoUrl: "#",
    //       quote: `I am proud to be an alumnus of K.R. Mangalam University, where I pursued my Ph.D. under the
    // expert guidance of Prof. P.C. Jena. The university provided an enriching academic environment,
    // excellent research facilities, and constant support that helped me grow both personally and
    // professionally. The university provided a vibrant learning environment with exceptional faculty who guided and supported me throughout my research. My experience at K.R. Mangalam University not only broadened my knowledge but also equipped me with the critical thinking and research skills that have been vital to my professional success. I cherish the memories and am proud to be associated with such a prestigious institution.
    // `,
    //       name: "Dr. Anupam Bansal",
    //       programme: "Ph.D., Associate Professor, KIIT Group of Colleges, Gurugram",
    //     },
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
  description: `K.R. Mangalam University offers world-class facilities that enhance both learning and practical training. Students have access to modern classrooms, well-equipped labs, a rich resource library, and advanced teaching aids, providing an environment that supports innovative teaching methods and hands-on experience. These facilities ensure that future educators are well-prepared to excel in diverse educational settings.
`,
  footerText: ``,
  cta: {
    label: "Apply for Education Programme 2026-2027 ",
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
  heading: "Life as an Education Student at KRMU",
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
        "What is the duration of education courses at K.R. Mangalam University?",
      answer: `The B.Ed. course at K.R. Mangalam University is a 2-year course while B.El.Ed. is a 4-year programme that focuses on elementary education.`,
    },
    {
      id: "item-2",
      question: "How can I get a scholarship at K.R. Mangalam University?",
      answer: `We offer up to 100% scholarships to talented and deserving students. You can learn more about scholarships on our admission page.`,
    },
    {
      id: "item-3",
      question: "What job roles can I pursue after a B.Ed. or B.El.Ed.?",
      answer: `After a B.Ed. or B.El.Ed. course, you can work as a School Teacher, Curriculum Developer, Education Policy Advocate, Assistant Professor, P.E. Instructor, Education Counsellor, Academic Coordinator, Educational Content Developer, School Administrator or Online Educator / EdTech Trainer.`,
    },
    {
      id: "item-4",
      question:
        "Which undergraduate courses does K.R. Mangalam University offer under its school of education?",
      answer: `K.R. Mangalam University offers the following undergraduate education courses: <br />
      <ul>
        <li>B.Ed.</li>
        <li>B.El.Ed.</li>
       </ul>
      `,
    },
    {
      id: "item-5",
      question:
        "Does KRMU provide global exposure in B.Ed. and B.El.Ed. programmes?",
      answer: `Yes, through a multidisciplinary curriculum with global perspectives, innovative learning, and opportunities for international exposure, the K.R. Mangalam University (KRMU) seeks to provide global exposure in its B.Ed. and B.El.Ed. programmes.`,
    },
    {
      id: "item-6",
      question:
        "Is there placement and career support for students studying at KRMU?",
      answer: `Yes. KRMU offers 100% placement assistance with strong industry connections, helping students secure internships and job opportunities upon graduation.`,
    },
    {
      id: "item-7",
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
    label: "Apply for Education Programme 2026-2027",
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
  title: "KRMU’s Education Programmes",
  subtitle:
    "All Our Programmes Comprise of Industry-relevant Curriculum",

  programmes: [
    {
      id: "1",
      tag: "Teaching Excellence",
      title: "B.Ed.",
      subtitle: "",
      desc: "NCTE-approved programme preparing educators with curriculum design, teaching methods, lesson planning, and modern educational skills.",
      duration: "2 Years",
      fees: "",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
      eligibility: "Passed Bachelor's with 50% aggregate marks.",
    },
    {
      id: "2",
      tag: "Future Educators",
      title: "B.El.Ed.",
      subtitle: "",
      desc: "NCTE- and UGC-approved course preparing elementary educators with child development, psychology, theory, and practical teaching skills.",
      duration: "4 Years",
      fees: "",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
    },
  ],
};
