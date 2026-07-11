import {
  JourneyVideoType,
  PlacementCardConfigType,
  PlacementStatType,
  RecruiterLogoType,
  SuccessStoryType,
} from "./home.types";

export const HOME_COMPONENT_KEYS = {
  HERO: "homepage-components.hero-section",
  ABOUT: "homepage-components.a-decade-section",
  NEWS_EVENTS: "homepage-components.home-events-and-news",
  TESTIMONIALS: "homepage-components.home-testimonials",
} as const;

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
