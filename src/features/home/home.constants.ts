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
    "#0C263A",
    "#0C2C3A",
    "#0C2F3A",
    "#0F2C42",
];

export const JOURNEY_VIDEOS: JourneyVideoType[] = [
    {
        id: 1,
        title: "Aarambh 2025 K.R. Mangalam University",
        thumbnail: "/modules/home/journey/j4.webp",
        duration: "1:48",
        link: "https://www.youtube.com/watch?v=f3hA3WhmYN8",
    },
    {
        id: 2,
        title: "International Students Share Their KRMU Experience | Vasudha Global Connect 2026",
        thumbnail: "/modules/home/journey/youtube1.webp",
        duration: "7:30",
        link: "https://www.youtube.com/watch?v=F3PmP0EAuaQ",
    },
    {
        id: 3,
        title: "Inside KRMU's Robotics Lab 🤖 | Student Innovations, Projects & Future Tech",
        thumbnail: "/modules/home/journey/youtube2.webp",
        duration: "2:35",
        link: "https://www.youtube.com/watch?v=iLzhza28QnM&t=12s",
    },
];

// --Placements---------------------------------------

export const RECRUITER_LOGOS: RecruiterLogoType[] = [
    {
        name: "Tata Power",
        logo: "/images/home/placements/recruiters/tata-power.webp",
    },
    { name: "Meta", logo: "/images/home/placements/recruiters/meta.webp" },
    {
        name: "Microsoft",
        logo: "/images/home/placements/recruiters/microsoft.webp",
    },
    {
        name: "JPMorgan",
        logo: "/images/home/placements/recruiters/jp-morgan.webp",
    },
    {
        name: "LinkedIn",
        logo: "/images/home/placements/recruiters/linkedin.webp",
    },
    { name: "Google", logo: "/images/home/placements/recruiters/google.webp" },
    {
        name: "Infosys",
        logo: "/images/home/placements/recruiters/infosys.webp",
    },
    { name: "IBM", logo: "/images/home/placements/recruiters/ibm.webp" },
    {
        name: "ITC",
        logo: "/images/home/placements/recruiters/itc-limited.webp",
    },
    { name: "Cisco", logo: "/images/home/placements/recruiters/cisco.webp" },
    { name: "Amazon", logo: "/images/home/placements/recruiters/amazon.webp" },
    { name: "Apple", logo: "/images/home/placements/recruiters/apple.webp" },
    {
        name: "Accenture",
        logo: "/images/home/placements/recruiters/accenture.webp",
    },
    { name: "EY", logo: "/images/home/placements/recruiters/ey.webp" },
    {
        name: "Flipkart",
        logo: "/images/home/placements/recruiters/flipkart.webp",
    },
    {
        name: "Axis Bank",
        logo: "/images/home/placements/recruiters/axis-bank.webp",
    },
    {
        name: "Publicis Media",
        logo: "/images/home/placements/recruiters/publicis-media.webp",
    },
    {
        name: "Publicis Sapient",
        logo: "/images/home/placements/recruiters/publicis-sapient.webp",
    },
    {
        name: "HCL",
        logo: "/images/home/placements/recruiters/hcl.webp",
    },
    {
        name: "Capgemini",
        logo: "/images/home/placements/recruiters/capgemini.webp",
    },
];

export const SUCCESS_STORIES: SuccessStoryType[] = [
    { image: "/images/home/placements/01-rishav-bakshi.webp" },
    { image: "/images/home/placements/02-daksh-mehta.webp" },
    { image: "/images/home/placements/03-vineet-verma.webp" },
    { image: "/images/home/placements/04-shaurya-tyagi.webp" },
    { image: "/images/home/placements/05-naman-pune.webp" },
    { image: "/images/home/placements/06-nitesh.webp" },
    { image: "/images/home/placements/07-naman-pune.webp" },
    { image: "/images/home/placements/08-ayush-sai.webp" },
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
    {
        id: 1,
        src: "/images/home/whykrmu/events/1.webp",
        alt: "Students enjoying recreation and sports at K.R. Mangalam University indoor gaming lounge",
        category: "Sports & Recreation",
        title: "Campus Recreation Hub",
        description:
            "A vibrant recreational lounge with a pool, indoor games, and social relaxation zones.",
    },
    {
        id: 2,
        src: "/images/home/whykrmu/events/2.webp",
        alt: "Students working with quadruped robotics in KRMU advanced robotics lab",
        category: "Tech & Robotics",
        title: "Robotics & AI Labs",
        description:
            "Hands-on engineering with quadruped robotics, automation systems, and innovative student projects.",
    },
    {
        id: 3,
        src: "/images/home/whykrmu/events/3.webp",
        alt: "Diverse students engaging in campus life and peer learning at KRMU",
        category: "Campus Life",
        title: "Vibrant Student Community",
        description:
            "Collaborative learning, outdoor brainstorming, and lifelong camaraderie on campus.",
    },
    {
        id: 4,
        src: "/images/home/whykrmu/events/4.webp",
        alt: "Journalism student reporting from the KRMU School of Journalism and Mass Communication studio",
        category: "Media & Broadcasting",
        title: "SJMC Media Studio",
        description:
            "Professional broadcasting equipment, news reporting suites, and multi-camera television studios.",
    },
    {
        id: 5,
        src: "/images/home/whykrmu/events/5.webp",
        alt: "Student researching in the modern KRMU central library",
        category: "Academic Excellence",
        title: "Central Knowledge Hub",
        description:
            "Extensive digital and print collections fostering in-depth academic inquiry and focused study.",
    },
    {
        id: 6,
        src: "/images/home/whykrmu/events/6.webp",
        alt: "Ankur Warikoo being felicitated during Aarambh orientation program at K.R. Mangalam University",
        category: "Leadership Sessions",
        title: "Ankur Warikoo at Aarambh",
        description:
            "Mentorship and motivational sessions with eminent entrepreneurs, founders, and industry trailblazers.",
    },

    {
        id: 9,
        src: "/images/home/whykrmu/events/9.webp",
        alt: "Fashion models presenting designer collection at KRMU fashion show",
        category: "Fashion & Design",
        title: "Bello Globe Life Runway",
        description:
            "High-fashion runway presentations showcasing the creative couture of student designers.",
    },
];

export const LIFE_AT_KRMU_CELEBRITY_GALLERY: LifeAtKRMUGalleryType[] = [
    {
        id: 101,
        src: "/images/home/whykrmu/celebrity2/Padma Shri Kangana Ranaut at KRMU.webp",
        alt: "Kangana Ranaut – Emergency Movie Promotion at K.R. Mangalam University",
        title: "Kangana Ranaut – Emergency Movie Promotion",
        description:
            "The Department of Student Welfare (DSW) hosted actress and filmmaker Kangana Ranaut for a promotional event for her movie Emergency, featuring an engaging interaction with university authorities and students.",
    },
    {
        id: 102,
        src: "/images/home/whykrmu/celebrity2/naved.webp",
        alt: "RJ Naved – Student Interaction & Workshop at K.R. Mangalam University",
        title: "RJ Naved – Student Interaction & Workshop",
        description:
            "K.R. Mangalam University hosted popular radio personality RJ Naved for an engaging multi-day programme filled with interactive sessions, student interviews, and hands-on workshops on communication, confidence, and creative expression.",
    },
    {
        id: 103,
        src: "/images/home/whykrmu/celebrity2/EDM night 2025.webp",
        alt: "EDM Night 2025 featuring Ola Ras from Ukraine, Ellena Chadhary, and Nick at K.R. Mangalam University",
        title: "EDM Night 2025",
        description:
            "An electrifying lineup of renowned national and international artists, including Ola Ras from Ukraine, Ellena Chaudhary, and Nick, delivered an unforgettable global music experience to the K.R. Mangalam University community.",
    },
    {
        id: 104,
        src: "/images/home/whykrmu/celebrity2/Aarambh 2025.webp",
        alt: "Aarambh ’25 – Freshers’ Orientation with Aman Gupta at K.R. Mangalam University",
        title: "Aarambh ’25 – Freshers’ Orientation",
        description:
            "The Department of Student Welfare (DSW) and the Office of Academic Affairs jointly hosted Aarambh ’25, the university’s freshers’ orientation programme. Renowned entrepreneur Aman Gupta, Co-Founder of boAt, attended as the Chief Guest and inspired incoming students with an engaging keynote address.",
    },
    {
        id: 105,
        src: "/images/home/whykrmu/celebrity2/SOLESTA'26.webp",
        alt: "Solesta'26 – Live Performance by Jasmine Sandlas at K.R. Mangalam University",
        title: "Solesta'26",
        description:
            "Renowned Punjabi singer Jasmine Sandlas delivered a spectacular live performance at K.R. Mangalam University, drawing an energetic crowd of over 6,000 students and making it one of the university’s most memorable events.",
    },
    {
        id: 106,
        src: "/images/home/whykrmu/celebrity2/Freshers 2025.webp",
        alt: "Freshers’ Party 2025 with Nora Fatehi at K.R. Mangalam University",
        title: "Freshers’ Party 2025 – A Star-Studded Welcome",
        description:
            "The Department of Student Welfare (DSW) hosted renowned dancer and actor Nora Fatehi for Freshers’ Party 2025, where her high-energy performance captivated the incoming batch and delivered an unforgettable campus experience.",
    },
    {
        id: 107,
        src: "/images/home/whykrmu/celebrity2/Aarambh 2026.webp",
        alt: "Aarambh ’26 – Live Performance by AKASA at K.R. Mangalam University",
        title: "Aarambh ’26 – Live Performance by AKASA",
        description:
            "Renowned singer AKASA energised the Aarambh ’26 celebrations with a captivating live performance, welcoming the new students with a memorable musical experience.",
    },
    {
        id: 108,
        src: "/images/home/whykrmu/celebrity2/Edude Fiesta 2023.webp",
        alt: "EduFiesta 2023 Freshers’ Party with Parmish Verma at K.R. Mangalam University",
        title: "EduFiesta 2023 – Freshers’ Party",
        description:
            "The 2023 Freshers’ Party featured a high-energy DJ Night and a special live performance by renowned Punjabi artist Parmish Verma, giving the new batch an unforgettable welcome.",
    },
    {
        id: 109,
        src: "/images/home/whykrmu/celebrity2/Aarambh 2026 1.webp",
        alt: "Aarambh ’26 – New Batch Welcome & Orientation with Ankur Warikoo at K.R. Mangalam University",
        title: "Aarambh ’26 – New Batch Welcome & Orientation",
        description:
            "The Department of Student Welfare (DSW) and the Office of Academic Affairs jointly organised Aarambh ’26, welcoming the incoming batch with an inspiring address by Chief Guest and motivational speaker Ankur Warikoo, who encouraged students to embrace their university journey with confidence, purpose, and ambition.",
    },
    {
        id: 110,
        src: "/images/home/whykrmu/celebrity2/shukhi.webp",
        alt: "Singer Sukh-E performing live at K.R. Mangalam University campus event",
        title: "Sukh-E Live Performance",
        description:
            "Renowned music producer and singer Sukh-E thrilled students with an electrifying live campus performance at K.R. Mangalam University.",
    },
];

export const LIFE_AT_KRMU_CAROUSEL_CONFIGS: LifeAtKRMUFeatureCardType[] = [
    {
        title: "Energy.\nExcitement.\nExcellence.",
        label: "Events",
        bg: "/modules/home/life/event1.webp",
        accent: "Excitement.",
        url: "/happenings/news-and-events",
    },
    {
        title: "Explore.\nExperience.\nExcel.",
        label: "Facilities",
        bg: "/modules/home/life/event2.webp",
        accent: "Experience.",
        url: "/krmu-campus-facilities",
    },
    {
        title: "Connect.\nCreate.\nCelebrate.",
        label: "Clubs & Societies",
        bg: "/modules/home/life/event3.webp",
        accent: "Create.",
        url: "/clubs-and-societies",
    },
];

export const RESEARCH_STATS: ResearchStatsType[] = [
    { value: "100+", label: "High-End Teaching\nand Research Labs" },
    { value: "4,000+", label: "No. of Research\nPublications" },
    {
        value: "16Cr+",
        label: "Research and consultancy\ngrants to the university",
    },
    { value: "250+", label: "No. of Patents granted\n& published" },
];

export const PARTNER_UNIVERSITIES: PartnerUniversityType[] = [
    {
        name: "Cardiff Metropolitan University",
        logo: "/modules/home/partners/cardiff-metropolitan-university.webp",
    },
    {
        name: "Cardiff University",
        logo: "/modules/home/partners/cardiff-university.webp",
    },
    {
        name: "Dublin City University",
        logo: "/modules/home/partners/dublin-city-university.webp",
    },
    {
        name: "George Mason University",
        logo: "/modules/home/partners/george-mason-university.webp",
    },
    {
        name: "Maynooth University",
        logo: "/modules/home/partners/maynooth-university.webp",
    },
    {
        name: "Nanyang Technological University",
        logo: "/modules/home/partners/nanyang-technological-university.webp",
    },
    {
        name: "Robert Gordon University",
        logo: "/modules/home/partners/robert-gordon-university.webp",
    },
    {
        name: "Trinity College Dublin",
        logo: "/modules/home/partners/trinity-college-dublin.webp",
    },
    {
        name: "University College Dublin",
        logo: "/modules/home/partners/university-college-dublin.webp",
    },
    {
        name: "University of Florida",
        logo: "/modules/home/partners/university-of-Florida.webp",
    },
    {
        name: "University of Essex",
        logo: "/modules/home/partners/university-of-essex.webp",
    },
    {
        name: "University of Houston",
        logo: "/modules/home/partners/university-of-houston.webp",
    },
    {
        name: "University of Kent",
        logo: "/modules/home/partners/university-of-kent.webp",
    },
    {
        name: "University of Leeds",
        logo: "/modules/home/partners/university-of-leeds.webp",
    },
    {
        name: "University of Manchester",
        logo: "/modules/home/partners/university-of-manchester.webp",
    },
    {
        name: "University of Plymouth",
        logo: "/modules/home/partners/university-of-plymouth.webp",
    },
    {
        name: "University of Strathclyde",
        logo: "/modules/home/partners/university-of-strathclyde.webp",
    },
    {
        name: "University of Sussex",
        logo: "/modules/home/partners/university-of-sussex.webp",
    },
];

export const TESTIMONIALS: TestimonialType[] = [
    {
        id: 1,
        name: "Veeresh Tarnal",
        role: "MBA",
        quote: "KRMU has been a turning point in my academic journey. The curriculum is practical, industry-focused, and taught by faculty who genuinely care about our growth.",
        image: "/modules/home/testimonial/t1.webp",
    },
    {
        id: 2,
        name: "Ananya Sharma",
        role: "B.Tech CSE",
        quote: "The technical infrastructure and the research-driven environment at KRMU are exceptional. I was able to work on cutting-edge AI projects that prepared me for the tech industry.",
        image: "/modules/home/testimonial/t1.webp",
    },
    {
        id: 3,
        name: "Rahul Mehta",
        role: "Law",
        quote: "The moot court sessions and the guidance from experienced legal professionals gave me a real-world perspective on law that goes beyond textbooks.",
        image: "/modules/home/testimonial/t1.webp",
    },
    {
        id: 4,
        name: "Shreya Singh",
        role: "B.Des Fashion",
        quote: "The creative freedom and industry exposure I got at KRMU helped me launch my own label. The workshops and fashion shows were invaluable learning experiences.",
        image: "/modules/home/testimonial/t1.webp",
    },
];
