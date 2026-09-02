export interface SchoolProgrammeItem {
    name: string;
    url: string;
}

export interface SchoolSchemaInfo {
    schoolName: string;
    shortName?: string;
    metaTitle?: string;
    description: string;
    urlSlug: string;
    programmes: SchoolProgrammeItem[];
}

export const SCHOOL_SCHEMA_CONFIGS: Record<string, SchoolSchemaInfo> = {
    "school-of-engineering-and-technology": {
        schoolName: "School of Engineering and Technology",
        shortName: "SOET",
        metaTitle:
            "School of Engineering and Technology | K.R. Mangalam University",
        description:
            "Explore top engineering & technology programmes including B.Tech CSE, BCA, M.Tech, and Ph.D. at K.R. Mangalam University.",
        urlSlug: "school-of-engineering-and-technology",
        programmes: [
            {
                name: "B.Tech. Computer Science & Engineering (CSE)",
                url: "https://www.krmangalam.edu.in/programs/b-tech-cse",
            },
            {
                name: "B.Tech. CSE (AI & ML) with Samatrix.io",
                url: "https://www.krmangalam.edu.in/programs/btech-cse-in-ai-ml",
            },
            {
                name: "BCA (AI & Data Science)",
                url: "https://www.krmangalam.edu.in/programs/bca-ai-data-science",
            },
            {
                name: "M.Tech. Computer Science & Engineering",
                url: "https://www.krmangalam.edu.in/programs/m-tech-cse",
            },
        ],
    },

    "school-of-management-and-commerce": {
        schoolName: "School of Management and Commerce",
        shortName: "SOMC",
        metaTitle:
            "School of Management and Commerce | K.R. Mangalam University",
        description:
            "Discover industry-aligned management & commerce programmes including BBA, MBA, B.Com (Hons.), and Ph.D. at K.R. Mangalam University.",
        urlSlug: "school-of-management-and-commerce",
        programmes: [
            {
                name: "BBA (Bachelor of Business Administration)",
                url: "https://www.krmangalam.edu.in/programs/bba",
            },
            {
                name: "BBA (Digital Marketing)",
                url: "https://www.krmangalam.edu.in/programs/bba-digital-marketing",
            },
            {
                name: "Integrated BBA-MBA",
                url: "https://www.krmangalam.edu.in/programs/integrated-bba-mba",
            },
            {
                name: "MBA (Master of Business Administration)",
                url: "https://www.krmangalam.edu.in/programs/mba",
            },
        ],
    },

    "school-of-legal-studies": {
        schoolName: "School of Legal Studies",
        shortName: "SOLS",
        metaTitle: "School of Legal Studies | K.R. Mangalam University",
        description:
            "Pursue excellence in law with BBA LL.B. (Hons.), BA LL.B. (Hons.), LL.B., and LL.M. programmes at K.R. Mangalam University.",
        urlSlug: "school-of-legal-studies",
        programmes: [
            {
                name: "BBA LL.B. (Hons.)",
                url: "https://www.krmangalam.edu.in/programs/bba-llb-hons",
            },
            {
                name: "B.A. LL.B. (Hons.)",
                url: "https://www.krmangalam.edu.in/programs/ba-llb-hons",
            },
            {
                name: "LL.B. (Hons.)",
                url: "https://www.krmangalam.edu.in/programs/llb-hons",
            },
            {
                name: "LL.M. (Master of Laws)",
                url: "https://www.krmangalam.edu.in/programs/llm",
            },
        ],
    },

    "school-of-medical-and-allied-sciences": {
        schoolName: "School of Medical and Allied Sciences",
        shortName: "SMAS",
        metaTitle:
            "School of Medical and Allied Sciences | K.R. Mangalam University",
        description:
            "Advance your healthcare career with B.Pharm, D.Pharm, M.Pharm, and allied healthcare programmes at K.R. Mangalam University.",
        urlSlug: "school-of-medical-and-allied-sciences",
        programmes: [
            {
                name: "B.Pharm (Bachelor of Pharmacy)",
                url: "https://www.krmangalam.edu.in/programs/bpharma",
            },
            {
                name: "D.Pharm (Diploma in Pharmacy)",
                url: "https://www.krmangalam.edu.in/programs/d-pharm",
            },
            {
                name: "M.Pharm (Pharmaceutics)",
                url: "https://www.krmangalam.edu.in/programs/m-pharm-pharmaceutics",
            },
            {
                name: "M.Pharm (Pharmacology)",
                url: "https://www.krmangalam.edu.in/programs/m-pharm-pharmacology",
            },
        ],
    },

    "school-of-physiotherapy-and-rehabilitation-sciences": {
        schoolName: "School of Physiotherapy and Rehabilitation Sciences",
        shortName: "SPRS",
        metaTitle:
            "School of Physiotherapy and Rehabilitation Sciences | K.R. Mangalam University",
        description:
            "Lead in healthcare with Bachelor of Physiotherapy (BPT) and Master of Physiotherapy (MPT) programmes at K.R. Mangalam University.",
        urlSlug: "school-of-physiotherapy-and-rehabilitation-sciences",
        programmes: [
            {
                name: "Bachelor of Physiotherapy (BPT)",
                url: "https://www.krmangalam.edu.in/programs/bachelor-of-physiotherapy-bpt",
            },
            {
                name: "Master of Physiotherapy (MPT)",
                url: "https://www.krmangalam.edu.in/programs/master-of-physiotherapy-mpt",
            },
        ],
    },

    "school-of-agricultural-sciences": {
        schoolName: "School of Agricultural Sciences",
        shortName: "SOAS",
        metaTitle: "School of Agricultural Sciences | K.R. Mangalam University",
        description:
            "List of undergraduate, postgraduate and doctoral programmes offered by School of Agricultural Sciences at K.R. Mangalam University.",
        urlSlug: "school-of-agricultural-sciences",
        programmes: [
            {
                name: "B.Sc. (Hons.) Agriculture",
                url: "https://www.krmangalam.edu.in/programs/bsc-hons-agriculture",
            },
        ],
    },

    "school-of-basic-and-applied-sciences": {
        schoolName: "School of Basic and Applied Sciences",
        shortName: "SBAS",
        metaTitle:
            "School of Basic and Applied Sciences | K.R. Mangalam University",
        description:
            "Explore undergraduate and postgraduate programmes in Forensic Science, Physics, Chemistry, and Mathematics at K.R. Mangalam University.",
        urlSlug: "school-of-basic-and-applied-sciences",
        programmes: [
            {
                name: "B.Sc. (Hons.) Forensic Science",
                url: "https://www.krmangalam.edu.in/programs/bsc-forensic-science",
            },
            {
                name: "Integrated B.Sc. - M.Sc. (Forensic Science)",
                url: "https://www.krmangalam.edu.in/programs/integrated-bsc-msc-forensic",
            },
        ],
    },

    "school-of-architecture-design": {
        schoolName: "School of Architecture and Design",
        shortName: "SOAD",
        metaTitle:
            "School of Architecture and Design | K.R. Mangalam University",
        description:
            "Unleash creativity with B.Arch, B.Des (Interior Design/Fashion Design), and Fine Arts programmes at K.R. Mangalam University.",
        urlSlug: "school-of-architecture-design",
        programmes: [
            {
                name: "B.Arch (Bachelor of Architecture)",
                url: "https://www.krmangalam.edu.in/programs/barch-architecture",
            },
            {
                name: "B.Des (Interior Design)",
                url: "https://www.krmangalam.edu.in/programs/bdes-interior-design",
            },
            {
                name: "B.Des (Fashion Design)",
                url: "https://www.krmangalam.edu.in/programs/bachelor-of-design-b-des-fashion-design",
            },
        ],
    },

    "school-of-liberal-arts": {
        schoolName: "School of Liberal Arts",
        shortName: "SOLA",
        metaTitle: "School of Liberal Arts | K.R. Mangalam University",
        description:
            "Empowering critical thinking through B.A. (Hons.) Psychology, Economics, and English programmes at K.R. Mangalam University.",
        urlSlug: "school-of-liberal-arts",
        programmes: [
            {
                name: "B.A. (Hons.) Psychology",
                url: "https://www.krmangalam.edu.in/programs/b-a-hons-hons-with-research-psychology",
            },
            {
                name: "B.A. (Hons.) Economics",
                url: "https://www.krmangalam.edu.in/programs/ba-hons-economics-research",
            },
            {
                name: "B.A. (Hons.) English",
                url: "https://www.krmangalam.edu.in/programs/ba-hons-english-research",
            },
        ],
    },

    "school-of-education": {
        schoolName: "School of Education",
        shortName: "SOED",
        metaTitle: "School of Education | K.R. Mangalam University",
        description:
            "Shape the future of teaching with B.Ed. and B.El.Ed. programmes at K.R. Mangalam University.",
        urlSlug: "school-of-education",
        programmes: [
            {
                name: "B.Ed. (Bachelor of Education)",
                url: "https://www.krmangalam.edu.in/programs/bachelor-of-education-b-ed",
            },
            {
                name: "B.El.Ed. (Bachelor of Elementary Education)",
                url: "https://www.krmangalam.edu.in/programs/bachelor-elementary-education-b-el-ed",
            },
        ],
    },

    "school-of-hotel-management-and-catering-technology": {
        schoolName: "School of Hotel Management and Catering Technology",
        shortName: "SOHMCT",
        metaTitle:
            "School of Hotel Management and Catering Technology | K.R. Mangalam University",
        description:
            "Build a global career in hospitality and hotel management with BHMCT at K.R. Mangalam University.",
        urlSlug: "school-of-hotel-management-and-catering-technology",
        programmes: [
            {
                name: "BHMCT (Bachelor of Hotel Management & Catering Technology)",
                url: "https://www.krmangalam.edu.in/programs/bhmct-hotel-management",
            },
        ],
    },

    "school-of-emerging-media-and-creator-economy": {
        schoolName: "School of Emerging Media and Creator Economy",
        shortName: "SEMCE",
        metaTitle:
            "School of Emerging Media and Creator Economy | K.R. Mangalam University",
        description:
            "Master modern journalism, media production, and digital creation with BJMC & MJMC programmes at K.R. Mangalam University.",
        urlSlug: "school-of-emerging-media-and-creator-economy",
        programmes: [
            {
                name: "BJMC (Bachelor of Journalism and Mass Communication)",
                url: "https://www.krmangalam.edu.in/programs/bjmc",
            },
            {
                name: "MJMC (Master of Journalism and Mass Communication)",
                url: "https://www.krmangalam.edu.in/programs/mjmc-masters-journalism-mass-communication",
            },
        ],
    },
};

export const SCHOOL_SCHEMA_ALIASES: Record<string, string> = {
    "school-of-agriculutural-sciences": "school-of-agricultural-sciences",
    "school-of-engineering-technology": "school-of-engineering-and-technology",
    "school-of-management-commerce": "school-of-management-and-commerce",
    "school-of-medical-allied-sciences":
        "school-of-medical-and-allied-sciences",
    "school-of-hotel-management-catering-technology":
        "school-of-hotel-management-and-catering-technology",
    "school-of-journalism-and-mass-communication":
        "school-of-emerging-media-and-creator-economy",
};
