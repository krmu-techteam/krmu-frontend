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
      ADMISSIONS <br />
      OPEN FOR <br />
      <span class="text-[#fcd404] text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold">
      Hotel-Management (UG) 
      </span>
      <br />
PROGRAMME 2026-2027
    `,
  desc: `Craft a Successful Career in Hospitality & Service Excellence`,
  heroBg: "/wp-content/landingpage/hotel-2026/hotel.webp",
  middleImg: "",
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
    title: "7.25 LPA",
    subtitle: "Average Package",
  },
  {
    title: "800+",
    subtitle: "Recruiters",
  },
  {
    title: "Up To ₹21 Cr",
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
    imgUrl:
      "https://www.krmangalam.edu.in/admission/law-2025/assets/trilegal.svg",
    alt: "Recruiter Logo",
  },
  {
    imgUrl:
      "https://www.krmangalam.edu.in/admission/btech-2025-b/assets/images/accenture.svg",
    alt: "Recruiter Logo",
  },
  {
    imgUrl:
      "https://krmangalam.edu.in/admission/mba-2025/assets/images/deliotte.svg",
    alt: "Recruiter Logo",
  },
  {
    imgUrl:
      "https://krmangalam.edu.in/admission/mba-2025/assets/images/deliotte.svg",
    alt: "Recruiter Logo",
  },
  {
    imgUrl:
      "https://krmangalam.edu.in/admission/mba-2025/assets/images/deliotte.svg",
    alt: "Recruiter Logo",
  },
  {
    imgUrl:
      "https://krmangalam.edu.in/admission/mba-2025/assets/images/deliotte.svg",
    alt: "Recruiter Logo",
  },
];

export const whyKRM: WhyKRMSection = {
  heading: "Why Choose the Hotel-Management (UG) Programme at KRMU?",
  subheading: "Begin Your Journey in the Dynamic Hospitality Industry",
  content: `The Bachelor of Hotel Management & Catering Technology (BHMCT) curriculum at K.R. Mangalam University equips students for exciting employment in upscale hotels, fine dining establishments, cruise lines, and event management companies. The programme ensures graduates are prepared for the workforce by combining management knowledge with practical skills.`,
  imgUrl: `/landingpage/common/whykrmtest.png`,
  whyKrmCards: [
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `NEP-Compliant Four-Year Curriculum: Including Global Standards and Research-Based Learning`,
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `Modern facilities include fully furnished training kitchens, mock hotel setups, fine dining restaurants, bars, and bakeries.`,
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `Specialities Offered: Accommodation Management, Beverage Service, and Food Production`,
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `Real-World Experience: Internships at Michelin-starred restaurants, luxury resorts, cruise lines, and five-star hotels`,
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `Global Exposure: Two-Week Study Tour to a Prestigious European University for Selected Students`,
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `Professional Hospitality Kit: ₹20,000 worth of free uniform and culinary set`,
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `Top hospitality brands like Oberoi, Hyatt, Radisson Blu, and Leela Palaces provide 100% placement assistance.`,
    },
  ],
};

export const industryExperts: IndustryExpertsSection = {
  eyebrow: "Why K.R. Mangalam allied sciences courses?",
  heading: `Learn From <br /> Industry Expert`,
  description: `KRMU offers industry-driven training through knowledge partners.`,
  cta: {
    label: "Apply for Hotel-Management (UG) 2026-2027",
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
  subheading: `Begin your journey into the world of hospitality by choosing Hotel Management (UG) programme `,
  heading: `Our Hotel-Management (UG) Programme`,
  SpecialisationCard: [
    {
      imgUrl: "/landingpage/common/dummy.png",
      title: `Hotel-Management (UG) Programme`,
      desc: `Through a combination of fundamental management principles, practical instruction, and industry exposure, K.R. Mangalam University's Bachelor of Hotel Management & Catering Technology (B.HMCT.) program equips students for leadership positions in the hospitality sector. For a well-rounded job preparedness, the curriculum gives students hands-on experience in hotel operations, food and beverage services, front office management, and customer relationship management.`,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `4 Years`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Eligibility",
          desc: `10 + 2 with at least 50% in any field from any university or board that has received accreditation.`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Annual Fee",
          desc: `Rs 1,95,000`,
        },
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
  heading: "Learn From Knowledge Partners",
  highlight: "and Industry Experts",
  cta: {
    label: "Apply forHotel-Management (UG) 2026-2027",
    href: "#",
  },
};

export const testimonialsData: TestimonialsSection = {
  subheading: "Our Testimonials ",
  heading: `Why do Aspirants Prefer KRMU? `,
  testimonials: [
    {
      image: "/landingpage/common/dummy.png",
      videoUrl: "#",
      quote: `I had the most fun at KRMU, right from the beginning when I won the title of Miss Fresher 
to joining Andaz Hotel as an intern to becoming an international sales associate, the ride 
has been amazing, and I am very thankful to the university for everything that they have 
done for me.`,
      name: "Ms. Palak Bhalla",
      programme: "Sales Associate at Movenpick, Dubai ",
    },
    {
      image: "/landingpage/common/dummy.png",
      videoUrl: "#",
      quote: `My name is Mahek Saxena, I am in the final semester of my BHMCT program and currently I am working as an On Job Trainee in Rooms Division department at The Oberoi Gurugram, my dream of working with the top notch hotel in the country is fulfilled and I would love to thank my dean and faculties for the same.`,
      name: "Ms Mahek Saxena",
      programme: "On job trainee at The Oberoi Gurugram",
    },
    {
      image: "/landingpage/common/dummy.png",
      videoUrl: "#",
      quote: `When I joined the university, I had no idea that If I will be able to achieve so much in such 
In a short amount of time, I owe it all to my faculty and the university.`,
      name: "Mr. Harshit Sharma",
      programme: "Night Manager, Mercure Hotel, United Kingdom",
    },
    {
      image: "/landingpage/common/dummy.png",
      videoUrl: "#",
      quote: `I learned the ways of working in a hotel by interning in Maldives, then at Andaz hotel and 
finally getting an amazing placement at the Roseate, my knowledge, my skills and my 
confidence has increased by leaps and bounds, for all this I thank my university.`,
      name: "Mr. Shashank Shekhar",
      programme: "Chef at The Roseate Hotels, New Delhi",
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
  heading: `World-Class Facilities for Hotel Management (UG) at KRMU`,
  description: `KRMU offers state-of-the-art facilities to support hands-on learning in hotel and hospitality management. The campus features fully equipped training kitchens, bakery and food production labs, mock front office and housekeeping labs, and modern training restaurants that simulate real hotel environments. Students also benefit from smart classrooms, hospitality management software, and well-stocked digital libraries. These world-class facilities create a professional learning ecosystem that enhances practical skills, service excellence, and industry readiness.`,
  footerText: ``,
  cta: {
    label: "Apply for Hotel Management (UG)  2026-2027.",
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
  heading: "Life as a Hotel-Management (UG) Student at KRMU. ",
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
      question: "Are internships required?",
      answer: `Indeed, internships at five-star hotels, cruise lines, upscale resorts, and Michelin-starred restaurants are a required component of the B.H.MCT.`,
    },
    {
      id: "item-2",
      question:
        "Do students learn about the standards of international cuisine and hospitality?",
      answer: `Indeed! Through a two-week sponsored study trip to a prominent European institution, students gain exposure to the world while learning about international hospitality and culinary trends.`,
    },
    {
      id: "item-3",
      question: "Which specialism is offered in the B.HMCT programme?",
      answer: `B.HMCT. provides expertise in:
<ul><li>Food Production</li>
<li>Food & Beverage Service</li>
<li>Accommodation Management</li></ul>
`,
    },
    {
      id: "item-4",
      question:
        "Does KRMU assist students studying hospitality and culinary arts with placement?",
      answer: `Indeed! For internships and full-time employment possibilities, KRMU has solid industry partnerships and offers 100% placement help.`,
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
  heading: `Begin Your Journey at K.R. Mangalam<br /> University now`,
  description: "",
  cta: {
    label: "Apply for Education Programme ",
    href: "#",
  },
  highlights: [
    { id: 1, text: "UGC Approved University" },
    { id: 2, text: "NAAC ‘A’ Accredited " },
    { id: 3, text: "18K+ Alumni Base" },
  ],
};
