export interface SchoolAltConfig {
    schoolName: string;
    slugs: string[];
    hero: {
        mainHero?: string;
        secondaryBanner?: string;
        middleImg?: string;
        mobileBgImg?: string;
        videoThumbnail?: string;
        playIcon?: string;
    };
    programmeIntro?: {
        infoGraphic?: string;
    };
    alumni?: Record<string, string>; // match by brand name or image URL/slug
    advantage?: {
        mainImage?: string;
        cards?: Record<string, string>; // match by card title or icon URL
    };
    openSourceMentorship?: {
        studentPhoto?: string;
        gsocLogo?: string;
    };
    knowledgePartners?: Record<string, string>; // match by partner title or image URL
    testimonials?: Record<string, string>; // match by student name or image URL
    deanVision?: {
        deanPhoto?: string;
    };
    faculty?: Record<string, string>; // match by faculty name or image URL
    facilities?: Record<string, string>; // match by facility title or image URL
    journeySteps?: Record<string | number, string>; // match by step number (1-6) or title
    urlMap?: Record<string, string>; // direct image URL -> suggested alt mapping for this school
}
