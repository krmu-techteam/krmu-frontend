import {
  JourneyVideoType,
  LifeAtKRMUFeatureCardType,
  LifeAtKRMUGalleryType,
  PlacementCardConfigType,
  PlacementStatType,
  RecruiterLogoType,
  SuccessStoryType,
  ResearchStatsType,
  PartnerUniversityType,
  TestimonialType,
} from "./home.types";

export const HOME_COMPONENT_KEYS = {
  HERO: "homepage-components.hero-section",
  ABOUT: "homepage-components.a-decade-section",
  JOURNEY: "homepage-components.yourjourney",
  AFS: "homepage-components.afs-section",
  RECRUITERS: "homepage-components.our-top-recruiters",
  FEE_SCHOLAR: "homepage-components.fee-scholar",
  WHY_KRMU: "homepage-components.whykrmu",
  ELEVATE: "homepage-components.elevate-campus",
  TESTIMONIALS: "homepage-components.home-testimonials",
  SHAPING: "homepage-components.shaping-future",
  PARTNERS: "homepage-components.global-partener",
  NEWS_EVENTS: "homepage-components.home-events-and-news",
} as const;

export type HomeComponentKey =
  (typeof HOME_COMPONENT_KEYS)[keyof typeof HOME_COMPONENT_KEYS];

export const ABOUT_STAT_BG_COLORS = [
  "#081D2D",
  "#0D2131",
  "#182C3C",
  "#233747",
];

export const JOURNEY_VIDEOS: JourneyVideoType[] = [
  {
    id: 1,
    title: "Aarambh 2025 K.R. Mangalam University",
    thumbnail: "/modules/home/journey/j4.png",
    duration: "1:48",
    link: "https://www.youtube.com/watch?v=f3hA3WhmYN8",
  },
  {
    id: 2,
    title:
      "How Global Exposure is Empowering Indian Students Ft. British Council India",
    thumbnail: "/modules/home/journey/j2.png",
    duration: "7:30",
    link: "https://www.youtube.com/watch?v=Q0OyZv7Rybw",
  },
  {
    id: 3,
    title: "Big Move! EY India Partners with K. R. Mangalam University",
    thumbnail: "/modules/home/journey/j3.png",
    duration: "2:35",
    link: "https://www.youtube.com/watch?v=PtA6I56Zuyc",
  },
];

// --Placements---------------------------------------

export const RECRUITER_LOGOS: RecruiterLogoType[] = [
  {
    name: "Tata Power",
    logo: "/modules/home/placements/recruiters/tata-power.png",
  },
  { name: "Meta", logo: "/modules/home/placements/recruiters/meta.png" },
  {
    name: "Microsoft",
    logo: "/modules/home/placements/recruiters/microsoft.png",
  },
  {
    name: "JPMorgan",
    logo: "/modules/home/placements/recruiters/jp-morgan.png",
  },
  {
    name: "LinkedIn",
    logo: "/modules/home/placements/recruiters/linkedin.png",
  },
  { name: "Google", logo: "/modules/home/placements/recruiters/google.png" },
  { name: "Infosys", logo: "/modules/home/placements/recruiters/infosys.png" },
  { name: "IBM", logo: "/modules/home/placements/recruiters/ibm.png" },
  { name: "ITC", logo: "/modules/home/placements/recruiters/itc-limited.png" },
  { name: "Cisco", logo: "/modules/home/placements/recruiters/cisco.png" },
  { name: "Amazon", logo: "/modules/home/placements/recruiters/amazon.png" },
  { name: "Apple", logo: "/modules/home/placements/recruiters/apple.png" },
  {
    name: "Accenture",
    logo: "/modules/home/placements/recruiters/accenture.png",
  },
  { name: "EY", logo: "/modules/home/placements/recruiters/ey.png" },
  {
    name: "Flipkart",
    logo: "/modules/home/placements/recruiters/flipkart.png",
  },
  {
    name: "Axis Bank",
    logo: "/modules/home/placements/recruiters/axis-bank.png",
  },
  {
    name: "Publicis Media",
    logo: "/modules/home/placements/recruiters/publicis-media.png",
  },
  {
    name: "Publicis Sapient",
    logo: "/modules/home/placements/recruiters/publicis-sapient.png",
  },
];

export const SUCCESS_STORIES: SuccessStoryType[] = [
  {
    name: "RISHAV BAKSHI",
    school: "School of Engineering and Technology",
    course: "BCA",
    package: "₹56.6LPA",
    image: "/modules/home/placements/rishav-bakshi.png",
  },
  {
    name: "OM MISHRA",
    school: "School of Engineering and Technology",
    course: "B.Tech CSE",
    package: "₹42.0LPA",
    image: "/modules/home/placements/om-mishra.webp",
  },
  {
    name: "VINEET VERMA",
    school: "School of Engineering and Technology",
    course: "B.Tech CSE",
    package: "₹35.0LPA",
    image: "/modules/home/placements/vineet-verma.webp",
  },
  {
    name: "SHOURYA TYAGI",
    school: "School of Management",
    course: "MBA",
    package: "₹28.5LPA",
    image: "/modules/home/placements/shourya-tyagi.webp",
  },
];

export const PLACEMENT_STATS: PlacementStatType[] = [
  { label: "Highest Package", value: "56.6 LPA" },
  { label: "Alumni Base", value: "18K+" },
  { label: "Placement Assistance", value: "100%" },
  { label: "Campus Recruiters", value: "800+" },
];

export const PLACEMENT_CARD_CONFIGS: PlacementCardConfigType[] = [
  {
    style: {
      background:
        "linear-gradient(90deg, rgba(17, 17, 17, 0.44) 0%, rgba(34, 34, 34, 0.44) 43.27%)",
    },
  },
  {
    style: {
      background:
        "linear-gradient(90deg, rgba(16, 16, 16, 0.40) 0%, rgba(33, 33, 33, 0.40) 100%)",
    },
  },
  {
    style: {
      background:
        "linear-gradient(90deg, rgba(16, 16, 16, 0.40) 0%, rgba(33, 33, 33, 0.40) 100%)",
    },
  },
  {
    style: {
      background:
        "linear-gradient(90deg, rgba(16, 16, 16, 0.40) 0%, rgba(33, 33, 33, 0.40) 100%)",
    },
  },
];

export const LIFE_AT_KRMU_GALLERY: LifeAtKRMUGalleryType[] = [
  { id: 1, src: "/modules/home/life/l1.png", alt: "Billiards and Recreation" },
  {
    id: 2,
    src: "/modules/home/life/l2.jpg",
    alt: "Collaborative Engineering Project",
  },
  { id: 3, src: "/modules/home/life/l3.jpg", alt: "Advanced Studio and Lab" },
  {
    id: 4,
    src: "/modules/home/life/l4.jpg",
    alt: "Central Library and Study Space",
  },
  {
    id: 5,
    src: "/modules/home/life/l5.jpg",
    alt: "Central Library and Study Space",
  },
  {
    id: 6,
    src: "/modules/home/life/l6.jpg",
    alt: "Central Library and Study Space",
  },
  {
    id: 7,
    src: "/modules/home/life/l7.jpg",
    alt: "Central Library and Study Space",
  },
  {
    id: 8,
    src: "/modules/home/life/l8.jpg",
    alt: "Central Library and Study Space",
  },
];

export const LIFE_AT_KRMU_CAROUSEL_CONFIGS: LifeAtKRMUFeatureCardType[] = [
  {
    title: "Energy.\nExcitement.\nExcellence.",
    label: "Events",
    bg: "/modules/home/life/event1.png",
    accent: "Excitement.",
    url: "/happenings/news-and-events",
  },
  {
    title: "Explore.\nExperience.\nExcel.",
    label: "Facilities",
    bg: "/modules/home/life/event2.jpg",
    accent: "Experience.",
    url: "/campus-life/campus-facilities",
  },
  {
    title: "Connect.\nCreate.\nCelebrate.",
    label: "Clubs & Societies",
    bg: "/modules/home/life/event3.jpg",
    accent: "Create.",
    url: "/clubs-and-societies",
  },
];

export const RESEARCH_STATS: ResearchStatsType[] = [
  { value: "100+", label: "High-End Teaching\nand Research Labs" },
  { value: "4000+", label: "No. of Research\nPublications" },
  {
    value: "16Cr+",
    label: "Research and consultancy\ngrants to the university",
  },
  { value: "250+", label: "No. of Patents granted\n& published" },
];

export const PARTNER_UNIVERSITIES: PartnerUniversityType[] = [
  {
    name: "Cardiff Metropolitan University",
    logo: "/modules/home/partners/cardiff-metropolitan-university.png",
  },
  {
    name: "Cardiff University",
    logo: "/modules/home/partners/cardiff-university.png",
  },
  {
    name: "Dublin City University",
    logo: "/modules/home/partners/dublin-city-university.png",
  },
  {
    name: "George Mason University",
    logo: "/modules/home/partners/george-mason-university.png",
  },
  {
    name: "Maynooth University",
    logo: "/modules/home/partners/maynooth-university.png",
  },
  {
    name: "Nanyang Technological University",
    logo: "/modules/home/partners/nanyang-technological-university.png",
  },
  {
    name: "Robert Gordon University",
    logo: "/modules/home/partners/robert-gordon-university.png",
  },
  {
    name: "Trinity College Dublin",
    logo: "/modules/home/partners/trinity-college-dublin.png",
  },
  {
    name: "University College Dublin",
    logo: "/modules/home/partners/university-college-dublin.png",
  },
  {
    name: "University of Florida",
    logo: "/modules/home/partners/university-of-Florida.png",
  },
  {
    name: "University of Essex",
    logo: "/modules/home/partners/university-of-essex.png",
  },
  {
    name: "University of Houston",
    logo: "/modules/home/partners/university-of-houston.png",
  },
  {
    name: "University of Kent",
    logo: "/modules/home/partners/university-of-kent.png",
  },
  {
    name: "University of Leeds",
    logo: "/modules/home/partners/university-of-leeds.png",
  },
  {
    name: "University of Manchester",
    logo: "/modules/home/partners/university-of-manchester.png",
  },
  {
    name: "University of Plymouth",
    logo: "/modules/home/partners/university-of-plymouth.png",
  },
  {
    name: "University of Strathclyde",
    logo: "/modules/home/partners/university-of-strathclyde.png",
  },
  {
    name: "University of Sussex",
    logo: "/modules/home/partners/university-of-sussex.png",
  },
];

export const TESTIMONIALS: TestimonialType[] = [
  {
    id: 1,
    name: "Veeresh Tarnal",
    role: "MBA",
    quote:
      "KRMU has been a turning point in my academic journey. The curriculum is practical, industry-focused, and taught by faculty who genuinely care about our growth.",
    image: "/modules/home/testimonial/t1.png",
  },
  {
    id: 2,
    name: "Ananya Sharma",
    role: "B.Tech CSE",
    quote:
      "The technical infrastructure and the research-driven environment at KRMU are exceptional. I was able to work on cutting-edge AI projects that prepared me for the tech industry.",
    image: "/modules/home/testimonial/t1.png",
  },
  {
    id: 3,
    name: "Rahul Mehta",
    role: "Law",
    quote:
      "The moot court sessions and the guidance from experienced legal professionals gave me a real-world perspective on law that goes beyond textbooks.",
    image: "/modules/home/testimonial/t1.png",
  },
  {
    id: 4,
    name: "Shreya Singh",
    role: "B.Des Fashion",
    quote:
      "The creative freedom and industry exposure I got at KRMU helped me launch my own label. The workshops and fashion shows were invaluable learning experiences.",
    image: "/modules/home/testimonial/t1.png",
  },
];
