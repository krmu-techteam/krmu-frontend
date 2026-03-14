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
        LAW
      </span> Admissions Open 2026–27</span>
      <span class="hidden sm:block">ADMISSIONS <br />
      OPEN FOR <br />
      <span class="text-[#fcd404] text-2xl sm:text-3xl md:text-5xl lg:text-8xl font-bold">
        LAW
      </span>
      <br />
      PROGRAMMES<br />2026-27</span>
    `,
  desc: `Shape Your Legal Journey with Practical <br /> and Career-Focused Learning`,
  heroBg: "/wp-content/landingpage/law-2026/law.webp",
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
    subtitle: "Recruiters",
  },
  {
    title: "Up To ₹27 Cr",
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
    imgUrl: "/landingpage/law-2026/prominent-recruiter/1.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/law-2026/prominent-recruiter/2.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/law-2026/prominent-recruiter/3.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/wp-content/images/kpmg-logo.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/law-2026/prominent-recruiter/5.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/landingpage/law-2026/prominent-recruiter/6.png",
    alt: "Recruiter Logo",
  },
  {
    imgUrl: "/wp-content/landingpage/law-2026/logos/1.jpg",
    alt: "Apple Logo",
  },
  {
    imgUrl: "/wp-content/landingpage/law-2026/logos/2.png",
    alt: "Apple Logo",
  },
  {
    imgUrl: "/wp-content/landingpage/law-2026/logos/3.webp",
    alt: "Apple Logo",
  },
  {
    imgUrl: "/wp-content/landingpage/law-2026/logos/4.jpg",
    alt: "Apple Logo",
  },
  {
    imgUrl: "/wp-content/landingpage/law-2026/logos/5.png",
    alt: "Apple Logo",
  },
];

export const whyKRM: WhyKRMSection = {
  heading: "Why Choose Undergraduate Law Programmes at KRMU?",
  subheading: "",
  content: `The undergraduate law programmes at K.R. Mangalam University offer internationally relevant, industry-aligned education designed to develop capable and socially conscious legal professionals. With a curriculum crafted by legal experts, the programmes emphasise practical exposure and interdisciplinary learning, preparing graduates for careers in corporate law, litigation, public policy, and allied fields.`,
  imgUrl: `/landingpage/common/build.webp`,
  whyKrmCards: [
    {
      imgUrl: "/landingpage/law-2026/why-choose-card/1-Card.jpg",
      content: `Curriculum that incorporates moot courts and real-world case studies`,
    },
    {
      imgUrl: "/landingpage/law-2026/why-choose-card/2-Card.jpg",
      content: `Strong mentoring by retired judges, legal scholars, and active advocates`,
    },
    {
      imgUrl: "/landingpage/law-2026/why-choose-card/3-Card.jpg",
      content: `Solid placement connections with top corporations, law firms, and legal organisations`,
    },
    {
      imgUrl: "/landingpage/law-2026/why-choose-card/4-Card.jpg",
      content: `Study travels and international partnerships`,
    },
    {
      imgUrl: "/landingpage/law-2026/why-choose-card/5-Card.jpg",
      content: `Focused skill development in research, advocacy, and legal writing combined with student-centered instruction`,
    },
  ],
};

export const industryExperts: IndustryExpertsSection = {
  eyebrow: "",
  heading: `Learn From <br /> Industry Experts`,
  description:
    "The law programmes at KRMU are enriched by academic and professional inputs from experienced knowledge partners.",
  cta: {
    label: "Apply for Law 2026-27",
    href: "#",
  },
  cards: [
    {
      imgUrl: "/landingpage/law-2026/indus-exp/1.jpg",
      alt: "Apple Logo",
      title: "",
    },
    {
      imgUrl: "/landingpage/law-2026/indus-exp/2.png",
      alt: "Apple Logo",
      title: "",
    },
    {
      imgUrl: "/landingpage/law-2026/indus-exp/3.webp",
      alt: "Apple Logo",
      title: "",
    },
    {
      imgUrl: "/landingpage/law-2026/indus-exp/4.jpg",
      alt: "Apple Logo",
      title: "",
    },
    {
      imgUrl: "/landingpage/law-2026/indus-exp/5.png",
      alt: "Apple Logo",
      title: "",
    },
  ],
  bannerImg: "/wp-content/landingpage/common/indus-exp.webp",
};

export const specialisationData: SpecialisationSection = {
  subheading:
    "Choose from KRMU’s undergraduate law programmes and begin your journey into the legal profession.",
  heading: `Our Undergraduate Law Programmes`,
  SpecialisationCard: [
    {
      imgUrl: "/landingpage/law-2026/prog/BA-LL.B-Hons.jpg",
      title: `B.A. LL.B. (Hons.)`,
      desc: `With this five-year integrated B.A. LL.B. programme that combines arts and law, learn about the socio-legal aspects of law.`,
      extraInfos: [
        {
          iconUrl: "/wp-content/landingpage/common/duration.svg",
          title: "Duration",
          desc: `5 Years`,
        },
        {
          iconUrl: "/wp-content/landingpage/common/eligibility.svg",
          title: "Eligibility",
          desc: `10+2 with a minimum of 50% marks`,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `Rs 1,85,000`,
        // },
      ],
    },
    {
      imgUrl: "/landingpage/law-2026/prog/BBA-LLB-Hons.jpg",
      title: `BBA. LL.B. (Hons.)`,
      desc: `With this five-year integrated curriculum that combines business administration and law, you will become career-ready for corporate legal difficulties. A thorough grasp of legal frameworks and managerial concepts is provided by the course.`,
      extraInfos: [
        {
          iconUrl: "/wp-content/landingpage/common/duration.svg",
          title: "Duration",
          desc: `5 Years`,
        },
        {
          iconUrl: "/wp-content/landingpage/common/eligibility.svg",
          title: "Eligibility",
          desc: `10+2 with a minimum of 50% marks`,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `Rs 1,85,000`,
        // },
      ],
    },
    {
      imgUrl: "/landingpage/law-2026/prog/LLB-Hons.jpg",
      title: `LL.B. (Hons.)`,
      desc: `With this three-year undergraduate programme, graduates from any subject can enter the legal field. The course provides a thorough examination of procedural legislation and legal concepts. `,
      extraInfos: [
        {
          iconUrl: "/wp-content/landingpage/common/duration.svg",
          title: "Duration",
          desc: `3 Years`,
        },
        {
          iconUrl: "/wp-content/landingpage/common/eligibility.svg",
          title: "Eligibility",
          desc: `Bachelor's Degree with a minimum of 50% marks`,
        },
        // {
        //   iconUrl: "/wp-content/landingpage/common/annual-fee.svg",
        //   title: "Annual Fee",
        //   desc: `Rs 1,60,000`,
        // },
      ],
    },
  ],
};

export const opportunityData: OpportunitySection = {
  image: {
    src: "/landingpage/law-2026/opp.png",
    alt: "Industry Expert",
    width: 300,
    height: 400,
  },
  heading: "KRMU Highlights",
  highlight: `<ul>
            <li>56.6 LPA Highest Package</li>
            <li>800+ Recruiters</li>
            <li>Scholarships Worth Up To ₹27 Cr</li>
            <li>700+ Experienced Educators</li>
            <li>100% Placement Assistance</li>
            <li>100% Sponsored International Study Tour</li>
          </ul>`,
  cta: {
    label: "Apply for Law 2026-27",
    href: "#",
  },
};

export const testimonialsData: TestimonialsSection = {
  subheading: "Students’ Testimonials",
  heading: `Why Do Our Students Trust Us?`,
  testimonials: [
    {
      image: "/landingpage/law-2026/testimonials/1.webp",
      videoUrl: "#",
      quote: `Completing BBA LL.B. (Hons.) from K.R. Mangalam University in 2023 enhanced my 
legal reasoning and business acumen. Pursuing a Master's in Corporate Law at the 
University of Edinburgh deepened my understanding of global corporate governance, 
equipping me with analytical skills for a successful legal career.`,
      name: "TANMAYA JHA",
      programme: "BBA LL.B. (Hons.) ",
    },
    {
      image: "/landingpage/law-2026/testimonials/2.webp",
      videoUrl: "#",
      quote: `Proud K.R. Mangalam University alumni, my journey from student to professional 
was enriched by diverse cultural and academic engagements, shaping my future 
personally and professionally. Immersed in a vibrant academic environment, guided 
by distinguished professors, I gained confidence and insight into the legal career. 
After graduating, I applied my experiences to a fulfilling career journey.`,
      name: "SAGAR KUMAR",
      programme: "B.A. LL.B. (Hons.)",
    },
    {
      image: "/landingpage/law-2026/testimonials/3.webp",
      videoUrl: "#",
      quote: `Hello, I'm Komal Sharma, a 2013 BBA LL. B. (Hons.) graduate from K.R. Mangalam 
University. Blessed to join KRMU, its top-notch infrastructure and supportive atmosphere 
enriched my learning journey. Grateful to professors for their expertise. Now, as a director 
at "Ataraxia IP," I aim to apply KRMU's teachings to achieve my goals.`,
      name: "KOMAL SHARMA",
      programme: "BBA LL. B. (Hons.)",
    },
    {
      image: "/landingpage/law-2026/testimonials/4.webp",
      videoUrl: "#",
      quote: `My journey at K.R. Mangalam University transformed me, fostering my confidence and 
competence in law. As an alumnus, I'm grateful for experiences like coordinating the 
Legal Aid Committee and serving as a Social Media Ambassador, amplifying social 
responsibility. Over 15 internships honed my skills, paving the way for roles as a Legal 
Consultant and founder of a law firm. K.R. Mangalam's interdisciplinary approach and 
faculty support laid the foundation for my success, instilling values of integrity and 
compassion. Thank you for shaping me into the legal professional I am today.`,
      name: "JAI SIKAND",
      programme: "B.A. LL.B. (Hons.)",
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
  heading: `World-Class Infrastructure`,
  description: `K.R. Mangalam University provides a world-class academic environment that supports effective teaching, learning, and research in legal education.
   The university is equipped with modern infrastructure and advanced learning resources designed to meet the academic and professional 
   requirements of undergraduate law programmes.
`,
  footerText: ``,
  cta: {
    label: "Apply for Law 2026-27",
    href: "#",
  },
  slides: [
    {
      image: "/landingpage/common/infra/1.webp",
      alt: "World Class Lab",
    },
    {
      image: "/landingpage/common/infra/2.webp",
      alt: "Research Facility",
    },
    {
      image: "/landingpage/common/infra/3.webp",
      alt: "Innovation Center",
    },
    {
      image: "/landingpage/common/infra/4.webp",
      alt: "Library & Resources",
    },
    {
      image: "/landingpage/common/infra/5.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/common/infra/6.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/common/infra/7.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/common/infra/8.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/common/infra/9.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/common/infra/10.webp",
      alt: "Campus Infrastructure",
    },
  ],
};

export const lifeAsPhDScholarData: LifeAsPhDScholarSection = {
  heading: "Life as a Law Student at KRMU ",
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
      question: "What are the eligibility criteria for law admission at KRMU?",
      answer: `10+2 with a minimum of 50% aggregate marks is required for Integrated LL.B. Programmes (BBA LL.B. / B.A. LL.B.). <br />
        A bachelor's degree in any field with at least 50% marks is required for LL.B. (Hons.).`,
    },
    {
      id: "item-2",
      question: "Are there any scholarships available?",
      answer: `Indeed, both need-based and merit-based scholarships are available at K.R. Mangalam University. For further information, see our scholarship page.`,
    },
    {
      id: "item-3",
      question: "What kind of placement assistance does the institution offer?",
      answer: `We offer 100% placement assistance, backed by industry partnerships, simulated interviews, and placement drives with leading corporate and legal recruiters.`,
    },
    {
      id: "item-4",
      question: "What distinguishes BBA LL.B. from B.A. LL.B.?",
      answer: `BBA LL.B. focuses on combining law with business subjects such as Finance, Marketing, and HR, while B.A. LL.B. integrates legal studies with liberal arts subjects like Humanities and Political Science.`,
    },
    {
      id: "item-5",
      question: "How long does an LL.B. law programme in India last?",
      answer: `In India, an LL.B. programme typically lasts three years. However, integrated programmes such as B.A. LL.B. or BBA LL.B. have a duration of five years.`,
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
    label: "Apply for Law 2026-27",
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
  title: "KRMU’s Law Programmes",
  subtitle:
    "All Our Programmes Comprise of Industry-relevant Curriculum",

  programmes: [
    {
      id: "1",
      tag: "Popular Choice",
      title: "B.A. LL.B. (Hons.)",
      subtitle: "",
      desc: "Provides comprehensive legal education, strong understanding of legal systems, and foundation for successful legal practice.",
      duration: "5 Years",

      fees: "",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
    },
    {
      id: "2",
      tag: "Top Pick",
      title: "BBA. LL.B. (Hons.)",
      subtitle: "",
      desc: "Five-year integrated business and law programme preparing students for corporate legal challenges through practical experience.",
      duration: "5 Years",
      fees: "",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
    },
    {
      id: "3",
      tag: "High-In-Demand",
      title: "LL.B. (Hons.)",
      subtitle: "",
      desc: "Develop strong procedural law knowledge, specialised expertise, practical skills, and an interdisciplinary foundation for diverse legal careers.",
      duration: "3 Years",
      fees: "",
      ctaText: "Apply Now !",
      ctaLink: "#apply-form",
      eligibility: "Passed Bachelor's with 50% aggregate marks."
    },
  ],
};