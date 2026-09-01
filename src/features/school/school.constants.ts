export const OVERVIEW_SECTION_IMAGES: Record<string, string> = {
    "school-of-engineering-and-technology":
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/soet_info_d088e58b5e.webp",
    "school-of-engineering-technology":
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/soet_info_d088e58b5e.webp",
    "school-of-management-and-commerce":
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/school_of_management_and_commerce_c064a2d99d.png",
    "school-of-management-commerce":
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/school_of_management_and_commerce_c064a2d99d.png",
    "school-of-legal-studies":
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/sols_info_356ffbbb2f.webp",
    "school-of-medical-and-allied-sciences":
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/smas_info_a437a7a78f.webp",
    "school-of-medical-allied-sciences":
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/smas_info_a437a7a78f.webp",
    "school-of-physiotherapy-and-rehabilitation-sciences":
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/sprs_scope_24ba1deb85.webp",
    "school-of-liberal-arts":
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/sola_info_0bea1c1947.webp",
    "school-of-architecture-design":
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/soad_scope_ee5ccb0f5f.webp",
    "school-of-basic-and-applied-sciences":
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/sbas_info_a4df052f90.webp",
    "school-of-emerging-media-and-creator-economy":
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Untitled_121_8b1ed1d1df.png",
    "school-of-journalism-and-mass-communication":
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Untitled_121_8b1ed1d1df.png",
    "school-of-hotel-management-and-catering-technology":
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/shmct_info_902ba1a177.webp",
    "school-of-hotel-management-catering-technology":
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/shmct_info_902ba1a177.webp",
    "school-of-agriculutural-sciences":
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/soas_info_fc180558e4.webp",
    "school-of-agricultural-sciences":
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/soas_info_fc180558e4.webp",
    "school-of-education":
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/soed_info_bc9daec6fd.webp",
};

export const ADVANTAGES_SECTION_IMAGES: Record<string, string> = {
    "school-of-engineering-and-technology":
        "/images/school/advantages/advantages.jpg",
    "school-of-engineering-technology":
        "/images/school/advantages/advantages.jpg",
    "school-of-management-and-commerce":
        "/images/school/advantages/girls/somc.png",
    "school-of-management-commerce": "/images/school/advantages/girls/somc.png",
    "school-of-legal-studies": "/images/school/advantages/girls/sols.png",
    "school-of-medical-and-allied-sciences":
        "/images/school/advantages/girls/smas.png",
    "school-of-medical-allied-sciences":
        "/images/school/advantages/girls/smas.png",
    "school-of-physiotherapy-and-rehabilitation-sciences":
        "/images/school/advantages/girls/sprs.png",
    "school-of-liberal-arts": "/images/school/advantages/girls/sola.png",
    "school-of-architecture-design": "/images/school/advantages/girls/soad.png",
    "school-of-basic-and-applied-sciences":
        "/images/school/advantages/girls/sbas.png",
    "school-of-emerging-media-and-creator-economy":
        "/images/school/advantages/girls/semce.png",
    "school-of-journalism-and-mass-communication":
        "/images/school/advantages/girls/semce.png",
    "school-of-hotel-management-and-catering-technology":
        "/images/school/advantages/girls/sohmct.png",
    "school-of-hotel-management-catering-technology":
        "/images/school/advantages/girls/sohmct.png",
    "school-of-agriculutural-sciences":
        "/images/school/advantages/girls/soas.png",
    "school-of-agricultural-sciences":
        "/images/school/advantages/girls/soas.png",
    "school-of-education": "/images/school/advantages/girls/soed.png",
};

export const WHATYOU_GET_OPEN_SOURCE_MENTORSHIP = [
    "Guided project & organisation selection",
    "Proposal writing with expert reviews",
    "Hands-on contributions\n(Git, PRs, real repositories)",
    "6-month structured preparation with continuous support from the Technical Training Team",
    "Corporate-like work environment with daily progress tracking, real development workflows, and mentorship by past selected contributors.",
];

export type CoeItem = {
    subtitle?: string;
    title: string;
    imgUrl: string;
    link: string;
};

export const SCHOOL_COE_MAP: Record<string, CoeItem[]> = {
    "school-of-engineering-and-technology": [
        {
            subtitle: "Centre of Excellence in",
            title: "B.Tech CSE",
            imgUrl: "/images/school/knowledge-partner/soet-1.jpg",
            link: "/programs/b-tech-cse",
        },
        {
            subtitle: "Centre of Excellence in",
            title: "BCA",
            imgUrl: "/images/school/knowledge-partner/soet-2.jpg",
            link: "/programs/bca-ai-data-science",
        },
    ],
    "school-of-engineering-technology": [
        {
            subtitle: "Centre of Excellence in",
            title: "B.Tech CSE",
            imgUrl: "/images/school/knowledge-partner/soet-1.jpg",
            link: "/programs/b-tech-cse",
        },
        {
            subtitle: "Centre of Excellence in",
            title: "BCA",
            imgUrl: "/images/school/knowledge-partner/soet-2.jpg",
            link: "/programs/bca-ai-data-science",
        },
    ],
    "school-of-management-and-commerce": [
        {
            title: "BBA",
            imgUrl: "/images/school/knowledge-partner/somc-1.jpg",
            link: "/programs/bba",
        },
        {
            title: "BBA-MBA Integrated",
            imgUrl: "/images/school/knowledge-partner/somc-2.jpg",
            link: "/programs/integrated-bba-mba",
        },
    ],
    "school-of-management-commerce": [
        {
            title: "BBA",
            imgUrl: "/images/school/knowledge-partner/somc-1.jpg",
            link: "/programs/bba",
        },
        {
            title: "BBA-MBA Integrated",
            imgUrl: "/images/school/knowledge-partner/somc-2.jpg",
            link: "/programs/integrated-bba-mba",
        },
    ],
    "school-of-legal-studies": [
        {
            title: "BBA LLB (Hons.)",
            imgUrl: "/images/school/knowledge-partner/sols-1.jpg",
            link: "/programs/bba-llb-hons",
        },
        {
            title: "LLB",
            imgUrl: "/images/school/knowledge-partner/sols-2.jpg",
            link: "/programs/llb-hons",
        },
    ],
    "school-of-medical-and-allied-sciences": [
        {
            title: "B.Pharm",
            imgUrl: "/images/school/knowledge-partner/smas-1.jpg",
            link: "/programs/bpharma",
        },
        {
            title: "M.Pharm. (Master of Pharmacy) - Pharmaceutics",
            imgUrl: "/images/school/knowledge-partner/smas-2.jpg",
            link: "/programs/m-pharm-pharmaceutics",
        },
    ],
    "school-of-medical-allied-sciences": [
        {
            title: "B.Pharm",
            imgUrl: "/images/school/knowledge-partner/smas-1.jpg",
            link: "/programs/bpharma",
        },
        {
            title: "M.Pharm. (Master of Pharmacy) - Pharmaceutics",
            imgUrl: "/images/school/knowledge-partner/smas-2.jpg",
            link: "/programs/m-pharm-pharmaceutics",
        },
    ],
    "school-of-physiotherapy-and-rehabilitation-sciences": [
        {
            title: "BPT",
            imgUrl: "/images/school/knowledge-partner/sprs-1.jpg",
            link: "/programs/bpt",
        },
    ],
    "school-of-liberal-arts": [
        {
            title: "BA Economics (Hons.)",
            imgUrl: "/images/school/knowledge-partner/sola-1.jpg",
            link: "/programs/ba-hons-economics-research",
        },
        {
            title: "B.A. (Hons.) Psychology",
            imgUrl: "/images/school/knowledge-partner/sola-2.jpg",
            link: "/programs/b-a-hons-hons-with-research-psychology",
        },
    ],
    "school-of-architecture-design": [
        {
            title: "B.Arch",
            imgUrl: "/images/school/knowledge-partner/soad-1.jpg",
            link: "/programs/barch-architecture",
        },
        {
            title: "B.Des (Interior/Fashion Design)",
            imgUrl: "/images/school/knowledge-partner/soad-2.jpg",
            link: "/programs/bdes-interior-design",
        },
    ],
    "school-of-basic-and-applied-sciences": [
        {
            title: "B.Sc. Forensic Science",
            imgUrl: "/images/school/knowledge-partner/sbas-1.jpg",
            link: "/programs/bsc-forensic-science",
        },
        {
            title: "Integrated / Dual Degree B.Sc. - M.Sc. (Forensic Science)",
            imgUrl: "/images/school/knowledge-partner/sbas-2.jpg",
            link: "/programs/integrated-bsc-msc-forensic",
        },
    ],
    "school-of-education": [
        {
            title: "B.Ed.",
            imgUrl: "/images/school/knowledge-partner/soed-1.jpg",
            link: "/programs/bachelor-of-education-b-ed",
        },
        {
            title: "B.El.Ed.",
            imgUrl: "/images/school/knowledge-partner/soed-2.jpg",
            link: "/programs/bachelor-elementary-education-b-el-ed",
        },
    ],
};
