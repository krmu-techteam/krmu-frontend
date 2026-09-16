/**
 * SOET (School of Engineering & Technology) Program-Level Alt Text Configuration
 *
 * Structure:
 * SOET -> [courseSlug] -> [sectionName] -> { [key]: "Alt Text" }
 *
 * Clean hierarchical structure: each course has dedicated section objects without redundant duplicate dumps.
 */

export interface SoetCourseSections {
    scope?: Record<string, string>;
    highlights?: Record<string, string>;
    specialisations?: Record<string, string>;
    admissionProcess?: Record<string, string>;
    curriculum?: Record<string, string>;
    labs?: Record<string, string>;
    beyondClassroom?: Record<string, string>;
    careerProspects?: Record<string, string>;
    recruiters?: Record<string, string>;
    financialAssistance?: Record<string, string>;
    location?: Record<string, string>;
    exploreOther?: Record<string, string>;
    footer?: Record<string, string>;
    [section: string]: Record<string, string> | undefined;
}

export type SoetSchoolConfig = Record<string, SoetCourseSections>;

export const soetAltConfig: SoetSchoolConfig = {
    // =========================================================================
    // Course: Btech CSE (slug: b-tech-cse)
    // =========================================================================
    "b-tech-cse": {
        // --- scope ---
        scope: {
            overview: "B.Tech CSE programme scope",
            "Programe Scope": "B.Tech CSE programme scope",
        },

        // --- highlights ---
        highlights: {
            "Industry-Integrated Curriculum":
                "B.Tech CSE Industry-integrated curriculum",
            "Research Excellence": "B.Tech CSE Research excellence",
            "Expert Faculty": "B.Tech CSE Expert faculty",
            "International Exposure":
                "B.Tech CSE International exposure programme",
            "Project-Based Learning": "B.Tech CSE Project-based learning",
            "Coding & Competitions": "B.Tech CSE Coding and competitions lab",
        },

        // --- specialisations ---
        specialisations: {
            "AI & ML": "B.Tech CSE in AI and ML",
            "Full Stack Dev": "B.Tech CSE in Full Stack Development",
            "UX/UI": "B.Tech CSE in UX/UI Design",
            "Cyber Security": "B.Tech CSE in Cyber Security",
            "Data Science": "B.Tech CSE in Data Science",
            "Robotics & AI": "B.Tech CSE in Robotics and AI",
        },

        // --- admissionProcess ---
        admissionProcess: {
            steps: "KRMU admission process",
        },

        // --- curriculum ---
        curriculum: {
            overview: "B.Tech CSE Curriculum & Syllabus overview",
        },

        // --- labs ---
        labs: {
            "IoT Lab": "Btech CSE IoT Lab at KRMU",
            "Robotics Lab": "Btech CSE Robotics and Automation Lab",
            "Advanced iOS Lab": "Btech CSE Advanced iOS development lab",
        },

        // --- beyondClassroom ---
        beyondClassroom: {
            "Naved at KRMU guest event":
                "RJ Naved interacting with BBA Marketing students at a K.R. Mangalam University guest session",
            "Sukhi at KRMU guest event":
                "Singer Sukh-E at a K.R. Mangalam University guest session with BBA Marketing students",
            "Parmish Verma at KRMU guest session":
                "Parmish Verma at KRMU guest session",
            "Nora Fatehi at KRMU guest appearance":
                "Nora Fatehi at KRMU guest appearance",
            "Kangana Ranaut at KRMU special session":
                "Kangana Ranaut at KRMU special session",
            "Guest speaker Jasmine leading an expert session for students at K.R. Mangalam University":
                "Guest speaker Jasmine leading an expert session for students at K.R. Mangalam University",
        },

        // --- careerProspects ---
        careerProspects: {
            prospects: "Career prospects for B.Tech CSE graduates",
            background:
                "K.R. Mangalam University campus backdrop for career opportunities",
        },

        // --- recruiters ---
        recruiters: {
            "General Motors": "General Motors (GM) recruiter partner logo",
            Mahindra: "Mahindra recruiter partner logo",
            Toshiba: "Toshiba recruiter partner logo",
            Samsung: "Samsung recruiter partner logo",
            Wipro: "Wipro recruiter partner logo",
            Systique: "Systique recruiter partner logo",
        },

        // --- financialAssistance ---
        financialAssistance: {
            IDFC: "IDFC – education loan partner",
            Propeeld: "Propeeld – education loan partner",
            Grayquest: "Grayquest – education loan partner",
            ICICI: "ICICI Bank – education loan partner",
            Axis: "Axis Bank – education loan partner",
            Kuhoo: "Kuhoo – education loan partner",
        },

        // --- location ---
        location: {
            photo: "Cyber City Gurgaon – KRMU campus location",
            map: "Map showing KRMU campus on Sohna Road Gurugram",
            "Location map": "Map showing KRMU campus on Sohna Road Gurugram",
        },

        // --- footer ---
        footer: {
            "Footer university": "K.R. Mangalam University Logo",
            "Footer Facebook": "KRMU Facebook",
            "Footer Instagram": "KRMU Instagram",
            "Footer YouTube": "KRMU YouTube",
            "Footer LinkedIn": "KRMU LinkedIn",
        },
    },

    // =========================================================================
    // Course: Btech CSE (Robotics & Artificial Intelligence) (slug: b-tech-cse-robotics-ai)
    // =========================================================================
    "b-tech-cse-robotics-ai": {
        // --- scope ---
        scope: {
            overview: "B.Tech CSE Robotics & AI programme scope overview",
            "Programe Scope":
                "B.Tech CSE Robotics & AI programme scope overview",
        },

        // --- highlights ---
        highlights: {
            "Hands-On Learning": "Hands-on learning KRMU",
            "Industry-Integrated Curriculum": "AI industry curriculum KRMU",
            "Certifications from Microsoft":
                "Microsoft AI certification BTech CSE",
            "Web Development Training": "CSE coding training at KRMU",
            "Learn with IBM": "IBM AI learning at KRMU",
            "Cutting Edge Labs & Equipment": "Robotics AI labs Btech CSE",
        },

        // --- admissionProcess ---
        admissionProcess: {
            steps: "KRMU admission process",
        },

        // --- curriculum ---
        curriculum: {
            overview: "B.Tech CSE Robotics & AI student",
        },

        // --- labs ---
        labs: {
            "Computer Labs": "B.Tech CSE technology programme at KRMU",
            "Robotics & Automation Lab": "Robotics & Automation Lab at KRMU",
            "Centre of Excellence":
                "Centre of Excellence in Robotics & AI at KRMU",
            "Programming Lab": "Programming lab at KRMU",
            "Drone Technology Lab": "Drone Technology Lab at KRMU",
        },

        // --- beyondClassroom ---
        beyondClassroom: {
            "Beyond 4061": "Parmish Verma at KRMU guest session",
            "Beyond 4062": "Naved at KRMU guest event",
            "Beyond 4063": "Sukhi at KRMU guest event",
            "Beyond 4064": "Nora Fatehi at KRMU guest appearance",
            "Beyond 4065": "Kangana Ranaut at KRMU special session",
        },

        // --- careerProspects ---
        careerProspects: {
            prospects: "Career prospects for B.Tech CSE Robotics & AI",
        },

        // --- financialAssistance ---
        financialAssistance: {
            "Kuhoo Finance": "Kuhoo Finance – education loan partner at KRMU",
            "ICICI Bank": "ICICI Bank – education loan partner at KRMU",
            "Axis Bank": "Axis Bank – education loan partner at KRMU",
            Propelld: "Propelld – education loan partner at KRMU",
            "IDFC First Bank":
                "IDFC First Bank – education loan partner at KRMU",
            GrayQuest: "GrayQuest – education fee financing partner at KRMU",
        },

        // --- location ---
        location: {
            photo: "Cyber City Gurugram skyline view near KRMU",
            map: "Location map to K.R. Mangalam University campus",
            "Location map": "Location map to K.R. Mangalam University campus",
        },

        // --- footer ---
        footer: {
            "Footer university": "K.R. Mangalam University Logo",
            "Footer Facebook": "KRMU Facebook Page",
            "Footer Instagram": "KRMU Instagram Page",
            "Footer YouTube": "KRMU YouTube Page",
            "Footer LinkedIn": "KRMU LinkedIn Page",
        },
    },

    // =========================================================================
    // Course: B.Tech. Computer Science and Engineering (AI & ML) (slug: btech-cse-ai-ml)
    // =========================================================================
    "btech-cse-ai-ml": {
        // --- scope ---
        scope: {
            overview: "BTech CSE (AI & ML) Students Image at KRMU",
            "B.Tech. Computer Science and Engineering (AI & ML)":
                "BTech CSE (AI & ML) Students Image at KRMU",
        },

        // --- highlights ---
        highlights: {
            "Programme highlights": "BTech CSE AI & ML Hands-on-learning",
            "[https://krmu-staging.netlify.app/_next/image?url=https%3A%2F%2Ftruthful-cabbage-82fd27e8f6.media.strapiapp.com%2FHands_On_Learning_with_Real_World_Exposure_eeddf45577.jpg&w=1920&q=75](https://krmu-staging.netlify.app/_next/image?url=https%3A%2F%2Ftruthful-cabbage-82fd27e8f6.media.strapiapp.com%2FHands_On_Learning_with_Real_World_Exposure_eeddf45577.jpg&w=1920&q=75)":
                "BTech CSE Students KRMU",
            "[https://krmu-staging.netlify.app/_next/image?url=https%3A%2F%2Ftruthful-cabbage-82fd27e8f6.media.strapiapp.com%2FLearn_with_IBM_c0f2eeb74b.jpg&w=1920&q=75](https://krmu-staging.netlify.app/_next/image?url=https%3A%2F%2Ftruthful-cabbage-82fd27e8f6.media.strapiapp.com%2FLearn_with_IBM_c0f2eeb74b.jpg&w=1920&q=75)":
                "BTech CSE AI & ML Students KRMU",
            "[https://krmu-staging.netlify.app/_next/image?url=https%3A%2F%2Ftruthful-cabbage-82fd27e8f6.media.strapiapp.com%2FIndustry_Integrated_Curriculum_f703d13ffe.jpg&w=1920&q=75](https://krmu-staging.netlify.app/_next/image?url=https%3A%2F%2Ftruthful-cabbage-82fd27e8f6.media.strapiapp.com%2FIndustry_Integrated_Curriculum_f703d13ffe.jpg&w=1920&q=75)":
                "BTech CSE Microsoft Certification",
            "[https://krmu-staging.netlify.app/_next/image?url=https%3A%2F%2Ftruthful-cabbage-82fd27e8f6.media.strapiapp.com%2FCertifications_from_Microsoft_9549ced086.jpg&w=1920&q=75](https://krmu-staging.netlify.app/_next/image?url=https%3A%2F%2Ftruthful-cabbage-82fd27e8f6.media.strapiapp.com%2FCertifications_from_Microsoft_9549ced086.jpg&w=1920&q=75)":
                "BTech CSE AI & ML LAB at KRMU",
        },

        // --- admissionProcess ---
        admissionProcess: {
            steps: "KRMU admission process",
        },

        // --- curriculum ---
        curriculum: {
            overview: "BTech CSE (AI & ML) KMRU Student",
        },

        // --- careerProspects ---
        careerProspects: {
            prospects: "BTech CSE Career Prospects",
        },

        // --- financialAssistance ---
        financialAssistance: {
            IDFC: "Kuhoo Finance – education loan partner at KRMU",
            Propeeld: "ICICI Bank – education loan partner at KRMU",
            Grayquest: "Axis Bank – education loan partner at KRMU",
            ICICI: "Propelld – education loan partner at KRMU",
            Axis: "IDFC First Bank – education loan partner at KRMU",
            Kuhoo: "GrayQuest – education fee financing partner at KRMU",
        },
    },

    // =========================================================================
    // Course: Master of Computer Applications (MCA) (slug: master-computer-application-mca)
    // =========================================================================
    "master-computer-application-mca": {
        // --- scope ---
        scope: {
            overview: "MCA programme scope at K.R. Mangalam University",
        },

        // --- highlights ---
        highlights: {
            "Industry-Integrated Curriculum":
                "Industry-integrated MCA curriculum at K.R. Mangalam University",
            "Expert Faculty": "Expert faculty teaching MCA programme at KRMU",
            "International Exposure":
                "International exposure through European summer school for MCA students at KRMU",
            "Project-Based Learning":
                "Project-based learning for MCA students at KRMU",
            "Coding & Competitions":
                "Competitive programming lab for MCA students at KRMU",
            "Placement Readiness Labs":
                "Placement readiness training labs for MCA students at KRMU",
            "Top Tech Mentorship":
                "Top tech mentorship from CTOs and startup founders for MCA students at KRMU",
        },

        // --- admissionProcess ---
        admissionProcess: {
            steps: "Phone icon, call KRMU admissions",
            WhatsApp: "WhatsApp icon, chat with KRMU admissions",
            Phone: "Phone icon, call KRMU admissions",
        },

        // --- labs ---
        labs: {
            "IoT Lab":
                "IoT lab with sensors and microcontrollers for MCA students at KRMU",
            "AI & ML Lab":
                "AI and Machine Learning lab for MCA students at KRMU",
            "Advanced iOS Lab":
                "Advanced iOS lab with Mac systems for MCA students at KRMU",
        },

        // --- beyondClassroom ---
        beyondClassroom: {
            "(missing / blank alt text)":
                "KRMU campus event gallery image featuring celebrity guest Kangana",
            "Guest Speaker Session":
                "Guest speaker Jasmine leading an expert session for MCA students at KRMU",
        },

        // --- careerProspects ---
        careerProspects: {
            prospects:
                "MCA graduates career prospects at K.R. Mangalam University",
        },

        // --- financialAssistance ---
        financialAssistance: {
            "Kuhoo Finance": "Kuhoo Finance education loan partner at KRMU",
            "ICICI Bank": "ICICI Bank education loan partner at KRMU",
            "Axis Bank": "Axis Bank education loan partner at KRMU",
            Propelld: "Propelld education loan partner at KRMU",
            "IDFC First Bank": "IDFC First Bank education loan partner at KRMU",
            GrayQuest: "GrayQuest education fee financing partner at KRMU",
        },

        // --- location ---
        location: {
            photo: "Phone icon for KRMU contact address",
            Envelope: "Email icon for KRMU contact address",
            Phone: "Phone icon for KRMU contact address",
        },

        // --- footer ---
        footer: {
            Facebook: "Facebook icon, follow KRMU on Facebook",
            Instagram: "Instagram icon, follow KRMU on Instagram",
            YouTube: "YouTube icon, subscribe to KRMU on YouTube",
            LinkedIn: "LinkedIn icon, follow KRMU on LinkedIn",
            "Footer Accreditation Logos":
                "NAAC and accreditation logos for K.R. Mangalam University",
        },
    },

    // =========================================================================
    // Course: B.Tech CSE (Full Stack Development) (slug: btech-full-stack-development)
    // =========================================================================
    "btech-full-stack-development": {
        // --- scope ---
        scope: {
            overview:
                "B.Tech CSE Full Stack Development programme scope at KRMU",
        },

        // --- highlights ---
        highlights: {
            "Industry-Integrated Curriculum":
                "Industry-integrated curriculum for B.Tech Full Stack Development at KRMU",
            "Research Excellence":
                "Research excellence in Full Stack Development programme at KRMU",
            "Expert Faculty":
                "Expert faculty teaching B.Tech Full Stack Development at KRMU",
            "International Exposure":
                "International exposure through European summer school for Full Stack Development students at KRMU",
            "Project-Based Learning":
                "Project-based learning for B.Tech Full Stack Development students at KRMU",
            "Learn with ImaginXP":
                "Learn Full Stack Development with ImaginXP industry mentors at KRMU",
            "Placement Readiness":
                "Placement readiness training for Full Stack Development students at KRMU",
            "Top Tech Mentorship":
                "Top tech mentorship from CTOs and startup founders for Full Stack Development students at KRMU",
        },

        // --- specialisations ---
        specialisations: {
            "Full Stack Development Lab":
                "Full Stack Development lab for hands-on web application projects at KRMU",
        },

        // --- curriculum ---
        curriculum: {
            overview:
                "Decorative background graphic for Curriculum and Syllabus section at KRMU",
            "Curriculum Background":
                "Decorative background graphic for Curriculum and Syllabus section at KRMU",
        },

        // --- labs ---
        labs: {
            "Computer Labs":
                "Computer labs for B.Tech Full Stack Development students at KRMU",
            "Programming Lab":
                "Programming lab for B.Tech Full Stack Development students at KRMU",
            "Web Development Lab":
                "Web Development lab for B.Tech Full Stack Development students at KRMU",
            "Database Management Systems Lab":
                "Database Management Systems lab for B.Tech Full Stack Development students at KRMU",
        },

        // --- careerProspects ---
        careerProspects: {
            prospects:
                "B.Tech Full Stack Development graduates career prospects at KRMU",
            "University Background":
                "Decorative background graphic for Career Prospects section at KRMU",
        },

        // --- financialAssistance ---
        financialAssistance: {
            "Kuhoo Finance": "Kuhoo Finance education loan partner at KRMU",
            "ICICI Bank": "ICICI Bank education loan partner at KRMU",
            "Axis Bank": "Axis Bank education loan partner at KRMU",
            Propelld: "Propelld education loan partner at KRMU",
            "IDFC First Bank": "IDFC First Bank education loan partner at KRMU",
            GrayQuest: "GrayQuest education fee financing partner at KRMU",
        },

        // --- exploreOther ---
        exploreOther: {
            "SOET Engineering Student":
                "SOET engineering student at K.R. Mangalam University",
        },
    },

    // =========================================================================
    // Course: B.Tech. CSE (UX/UI) with ImaginXP (slug: btech-cse-ui-ux)
    // =========================================================================
    "btech-cse-ui-ux": {
        // --- scope ---
        scope: {
            overview: "B.Tech CSE UI/UX programme scope at KRMU",
        },

        // --- highlights ---
        highlights: {
            "Hands-On Learning with Real-World Exposure":
                "Hands-on learning with real-world exposure for B.Tech UI/UX students at KRMU",
            "Web Development Training from Day One":
                "MERN stack web development training from day one for UI/UX students at KRMU",
            "Learn with ImaginXP":
                "Learn UI/UX design with ImaginXP industry mentors at KRMU",
            "Cutting Edge Labs & Equipment":
                "Cutting-edge labs including IoT, Robotics and iOS labs for UI/UX students at KRMU",
            "MakerSpace: Build from Day One":
                "MakerSpace with 3D printers and Arduino kits for UI/UX students at KRMU",
            "Unmatched Industry Experience":
                "Unmatched industry experience through 800+ recruiter tie-ups at KRMU",
        },

        // --- curriculum ---
        curriculum: {
            overview:
                "Decorative background graphic for Curriculum and Syllabus section at KRMU",
            "Curriculum Background":
                "Decorative background graphic for Curriculum and Syllabus section at KRMU",
        },

        // --- labs ---
        labs: {
            "Computer Labs":
                "Computer labs for B.Tech UI/UX design students at KRMU",
            "AR/VR Lab":
                "AR/VR lab for immersive interactive design experiences at KRMU",
            "Mobile Development Lab":
                "Mobile development lab for UI/UX design students at KRMU",
            "UI/UX Design Lab":
                "UI/UX design lab for wireframing and prototyping at KRMU",
        },

        // --- careerProspects ---
        careerProspects: {
            prospects: "B.Tech UI/UX graduates career prospects at KRMU",
            "University Background":
                "Decorative background graphic for Career Prospects section at KRMU",
        },

        // --- financialAssistance ---
        financialAssistance: {
            "Kuhoo Finance": "Kuhoo Finance education loan partner at KRMU",
            "ICICI Bank": "ICICI Bank education loan partner at KRMU",
            "Axis Bank": "Axis Bank education loan partner at KRMU",
            Propelld: "Propelld education loan partner at KRMU",
            "IDFC First Bank": "IDFC First Bank education loan partner at KRMU",
            GrayQuest: "GrayQuest education fee financing partner at KRMU",
        },

        // --- exploreOther ---
        exploreOther: {
            "SOET Engineering Student":
                "SOET engineering student at K.R. Mangalam University",
        },
    },

    // =========================================================================
    // Course: B.Tech. CSE (Cyber Security) with EC-Council & IBM (slug: btech-cse-cyber-security)
    // =========================================================================
    "btech-cse-cyber-security": {
        // --- scope ---
        scope: {
            overview: "B.Tech CSE Cyber Security programme scope at KRMU",
        },

        // --- highlights ---
        highlights: {
            "Hands-On Learning with Real-World Exposure":
                "Hands-on learning with real-world exposure for B.Tech Cyber Security students at KRMU",
            "Industry-Integrated Curriculum":
                "Industry-integrated curriculum for B.Tech Cyber Security at KRMU",
            "Learn with IBM and EC-Council":
                "Learn Cyber Security with IBM and EC-Council certification partners at KRMU",
            "Cutting Edge Labs & Equipment":
                "Cutting-edge labs including IoT, Robotics and iOS labs for Cyber Security students at KRMU",
            "MakerSpace: Build from Day One":
                "MakerSpace with 3D printers and Arduino kits for Cyber Security students at KRMU",
            "Unmatched Industry Experience":
                "Unmatched industry experience through 800+ recruiter tie-ups at KRMU",
        },

        // --- curriculum ---
        curriculum: {
            overview:
                "Decorative background graphic for Curriculum and Syllabus section at KRMU",
            "Curriculum Background":
                "Decorative background graphic for Curriculum and Syllabus section at KRMU",
        },

        // --- labs ---
        labs: {
            "Computer Labs":
                "Computer labs for B.Tech Cyber Security students at KRMU",
            "Cyber Security Lab":
                "Cyber Security lab for ethical hacking and threat analysis at KRMU",
            "Programming Lab":
                "Programming lab for B.Tech Cyber Security students at KRMU",
            "Network Security Lab":
                "Network Security lab for firewall configuration and vulnerability detection at KRMU",
        },

        // --- careerProspects ---
        careerProspects: {
            prospects:
                "B.Tech Cyber Security graduates career prospects at KRMU",
            "University Background":
                "Decorative background graphic for Career Prospects section at KRMU",
        },

        // --- financialAssistance ---
        financialAssistance: {
            "Kuhoo Finance": "Kuhoo Finance education loan partner at KRMU",
            "ICICI Bank": "ICICI Bank education loan partner at KRMU",
            "Axis Bank": "Axis Bank education loan partner at KRMU",
            Propelld: "Propelld education loan partner at KRMU",
            "IDFC First Bank": "IDFC First Bank education loan partner at KRMU",
            GrayQuest: "GrayQuest education fee financing partner at KRMU",
        },

        // --- exploreOther ---
        exploreOther: {
            "SOET Engineering Student":
                "SOET engineering student at K.R. Mangalam University",
        },

        // --- footer ---
        footer: {
            "About Us Menu":
                "K.R. Mangalam University campus overview thumbnail",
        },
    },

    // =========================================================================
    // Course: B.Tech. CSE (Data Science) with Academic Support of IBM (slug: btech-cse-in-data-science)
    // =========================================================================
    "btech-cse-in-data-science": {
        // --- scope ---
        scope: {
            overview: "B.Tech. CSE Data Science Students",
        },

        // --- highlights ---
        highlights: {
            "Hands-On Learning with Real-World Exposure":
                "Hands-on learning with real-world exposure for B.Tech Data Science students at KRMU",
            "Industry-Integrated Curriculum":
                "Industry-integrated curriculum for B.Tech Data Science at KRMU",
            "Certifications from Microsoft":
                "Microsoft Azure AI Engineer certification for Data Science students at KRMU",
            "Web Development Training from Day One":
                "MERN stack web development training from day one for Data Science students at KRMU",
            "Learn with IBM":
                "Learn Data Science and machine learning with IBM at KRMU",
            "Cutting Edge Labs & Equipment":
                "Cutting-edge labs including IoT, Robotics and iOS labs for Data Science students at KRMU",
            "MakerSpace: Build from Day One":
                "MakerSpace with 3D printers and Arduino kits for Data Science students at KRMU",
            "Unmatched Industry Experience":
                "Unmatched industry experience through 700+ recruiter tie-ups at KRMU",
        },

        // --- curriculum ---
        curriculum: {
            overview: "B.Tech. CSE Data Science Students",
            "Curriculum Background": "B.Tech. CSE Data Science Students",
        },

        // --- labs ---
        labs: {
            "Computer Labs":
                "Computer labs for B.Tech Data Science students at KRMU",
            "Data Structures & Algorithms Lab":
                "Data Structures and Algorithms lab for B.Tech Data Science students at KRMU",
            "Database Management Systems Lab":
                "Database Management Systems lab for B.Tech Data Science students at KRMU",
            "Big Data Analysis Lab":
                "Big Data Analysis lab for real-time data insights at KRMU",
            "Data Science Lab":
                "Data Science lab for machine learning and visualization projects at KRMU",
        },

        // --- careerProspects ---
        careerProspects: {
            prospects: "B.Tech Data Science graduates career prospects at KRMU",
        },

        // --- financialAssistance ---
        financialAssistance: {
            "Kuhoo Finance": "Kuhoo Finance education loan partner at KRMU",
            "ICICI Bank": "ICICI Bank education loan partner at KRMU",
            "Axis Bank": "Axis Bank education loan partner at KRMU",
            Propelld: "Propelld education loan partner at KRMU",
            "IDFC First Bank": "IDFC First Bank education loan partner at KRMU",
            GrayQuest: "GrayQuest education fee financing partner at KRMU",
        },

        // --- exploreOther ---
        exploreOther: {
            "University Background":
                "K.R. Mangalam University Background Image",
            "SOET Engineering Student":
                "SOET engineering student at K.R. Mangalam University",
        },

        // --- footer ---
        footer: {
            "About Us Menu":
                "K.R. Mangalam University campus overview thumbnail",
        },
    },

    // =========================================================================
    // Course: B.Sc. (Hons.) Computer Science with Academic Support of IBM (slug: bsc-hons-computer-science)
    // =========================================================================
    "bsc-hons-computer-science": {
        // --- scope ---
        scope: {
            overview:
                "B.Sc. (Hons.) Computer Science students exploring AI, data science and cloud computing with IBM support at KRMU",
            "Hero Banner":
                "B.Sc. (Hons.) Computer Science with IBM academic support – students at KRMU Gurugram",
        },

        // --- highlights ---
        highlights: {
            "Hands-On Learning with Real-World Exposure":
                "B.Sc. CS students gaining hands-on learning and real-world project exposure at KRMU Gurugram",
            "Industry-Integrated Curriculum":
                "Industry-integrated curriculum for B.Sc. Computer Science at K.R. Mangalam University",
            "Web Development Training from Day One":
                "B.Sc. CS students learning MERN Stack web development from Year 1 at KRMU",
            "Learn with IBM":
                "B.Sc. Computer Science students training at IBM Labs with AI and machine learning at KRMU",
            "Cutting Edge Labs & Equipment":
                "IoT Lab, Robotics Lab and Advanced iOS Lab for B.Sc. CS students at K.R. Mangalam University",
            "Unmatched Industry Experience":
                "KRMU B.Sc. CS students with 800+ campus recruiters and industry placement partners",
        },

        // --- curriculum ---
        curriculum: {
            overview:
                "B.Sc. (Hons.) Computer Science curriculum and syllabus structure at KRMU Gurugram",
            "Curriculum Background":
                "B.Sc. (Hons.) Computer Science curriculum and syllabus structure at KRMU Gurugram",
        },

        // --- labs ---
        labs: {
            "IoT Lab":
                "IoT Lab icon – sensors, microcontrollers and networking tools for B.Sc. CS at KRMU",
            "Computing Lab":
                "Computing Lab icon – modern hardware and software resources for B.Sc. Computer Science at KRMU",
            "Advanced iOS Lab":
                "Advanced iOS Lab icon – Mac systems for app development for B.Sc. CS students at KRMU",
        },

        // --- careerProspects ---
        careerProspects: {
            prospects:
                "B.Sc. Computer Science graduates in software development, data science and AI careers at KRMU",
            "Career Prospects Students":
                "B.Sc. Computer Science graduates in software development, data science and AI careers at KRMU",
        },

        // --- financialAssistance ---
        financialAssistance: {
            "Kuhoo Finance":
                "Kuhoo Finance – education loan partner for K.R. Mangalam University students",
            "ICICI Bank":
                "ICICI Bank – education loan partner for K.R. Mangalam University students",
            "Axis Bank": "Axis Bank – education loan partner for KRMU students",
            Propelld:
                "Propelld – education fee financing partner for K.R. Mangalam University students",
            "IDFC First Bank":
                "IDFC First Bank – education loan partner at K.R. Mangalam University",
            GrayQuest:
                "GrayQuest – education fee financing partner at K.R. Mangalam University",
        },

        // --- exploreOther ---
        exploreOther: {
            "SOET Engineering Student":
                "B.Sc. Computer Science student at School of Engineering and Technology KRMU Gurugram",
        },

        // --- footer ---
        footer: {
            WhatsApp: "WhatsApp contact icon – K.R. Mangalam University",
            Facebook: "K.R. Mangalam University Facebook page link",
            LinkedIn: "K.R. Mangalam University LinkedIn page link",
            Instagram: "K.R. Mangalam University Instagram page link",
            YouTube: "K.R. Mangalam University YouTube channel link",
        },
    },

    // =========================================================================
    // Course: B.Sc. (Hons.) Cyber Security (slug: bsc-hons-cyber-security)
    // =========================================================================
    "bsc-hons-cyber-security": {
        // --- scope ---
        scope: {
            overview:
                "B.Sc. (Hons.) Cyber Security students exploring ethical hacking, digital forensics and network defence at KRMU",
        },

        // --- highlights ---
        highlights: {
            "Hands-On Learning with Real-World Exposure":
                "B.Sc. Cyber Security students gaining hands-on learning and real-world project exposure at KRMU Gurugram",
            "Industry-Integrated Curriculum":
                "Industry-integrated curriculum for B.Sc. Cyber Security at K.R. Mangalam University",
            "Cutting Edge Labs & Equipment":
                "IoT Lab, Robotics & Automation Lab and Advanced iOS Lab for B.Sc. Cyber Security students at K.R. Mangalam University",
            "MakerSpace: Build from Day One":
                "B.Sc. Cyber Security students in the MakerSpace with 3D printers, laser cutters and Arduino kits at KRMU",
            "Unmatched Industry Experience":
                "KRMU B.Sc. Cyber Security students with 800+ campus recruiters and industry placement partners",
        },

        // --- curriculum ---
        curriculum: {
            overview: "Curriculum Background",
            "Curriculum Background (decorative)": "Curriculum Background",
        },

        // --- labs ---
        labs: {
            "IoT Lab":
                "IoT Lab icon – sensors, microcontrollers and networking tools for smart connected systems",
            "Cyber Forensic Lab":
                "Cyber Forensic Lab icon – digital evidence analysis and network forensics tools",
            "Advanced iOS Lab":
                "Advanced iOS Lab icon – Mac systems for app design, coding and testing",
            "Computer Lab":
                "Computer Lab icon – KRMU computational and analytical skills lab",
            "Career Prospects Students":
                "B.Sc. Cyber Security graduates exploring career paths as analysts, ethical hackers and forensics investigators",
        },

        // --- beyondClassroom ---
        beyondClassroom: {
            "Guest Speaker – Jasmine":
                "Guest speaker Jasmine leading an expert session for students at K.R. Mangalam University",
            "Guest Speaker – Parmish Verma":
                "Guest speaker Parmish Verma at a K.R. Mangalam University student event",
            "Guest Speaker – RJ Naved":
                "Guest speaker RJ Naved at a K.R. Mangalam University student event",
            "Guest Speaker – Nora Fatehi":
                "Guest speaker Nora Fatehi at a K.R. Mangalam University student event",
            "Guest Speaker – Kangana Ranaut":
                "Guest speaker Kangana Ranaut at a K.R. Mangalam University student event",
            "Guest Speaker – Sukhi":
                "Guest speaker Sukhi at a K.R. Mangalam University student event",
        },

        // --- financialAssistance ---
        financialAssistance: {
            "Kuhoo Finance":
                "Kuhoo Finance education loan partner logo at KRMU",
            "ICICI Bank": "ICICI Bank education loan partner logo at KRMU",
            "Axis Bank": "Axis Bank education loan partner logo at KRMU",
            Propelld: "Propelld education loan partner logo at KRMU",
            "IDFC First Bank":
                "IDFC First Bank education loan partner logo at KRMU",
            GrayQuest: "GrayQuest fee financing partner logo at KRMU",
        },

        // --- location ---
        location: {
            map: "Aerial view of Cyber City, Gurugram – corporate hub near K.R. Mangalam University campus",
            "Location Map":
                "Map showing K.R. Mangalam University on Sohna–Gurgaon Road, Gurugram, Haryana",
            "Cyber City Aerial View":
                "Aerial view of Cyber City, Gurugram – corporate hub near K.R. Mangalam University campus",
            photo: "Phone icon – KRMU contact numbers",
            "Location Pin":
                "Location pin icon – KRMU campus address, Sohna Road, Gurugram",
            Envelope: "Envelope icon – KRMU email contact",
            Phone: "Phone icon – KRMU contact numbers",
        },

        // --- exploreOther ---
        exploreOther: {
            "Cross-Sell":
                "School of Engineering & Technology student – explore other KRMU programmes",
        },

        // --- footer ---
        footer: {
            WhatsApp: "WhatsApp contact icon – K.R. Mangalam University",
            Facebook: "K.R. Mangalam University Facebook page link",
            LinkedIn: "K.R. Mangalam University LinkedIn page link",
            Instagram: "K.R. Mangalam University Instagram page link",
            YouTube: "K.R. Mangalam University YouTube channel link",
            "About Us":
                "K.R. Mangalam University campus – About Us footer image",
            "Footer Facebook": "K.R. Mangalam University Facebook page link",
            "Footer Instagram": "K.R. Mangalam University Instagram page link",
            "Footer YouTube": "K.R. Mangalam University YouTube channel link",
            "Footer LinkedIn": "K.R. Mangalam University LinkedIn page link",
            "Footer Logos Strip":
                "K.R. Mangalam University accreditation and partner logos strip",
        },
    },

    // =========================================================================
    // Course: B.Sc. (Hons.) Data Science (slug: bsc-data-science)
    // =========================================================================
    "bsc-data-science": {
        // --- scope ---
        scope: {
            overview:
                "B.Sc. (Hons.) Data Science students analysing data and building AI/ML models at KRMU",
        },

        // --- highlights ---
        highlights: {
            "Industry-Integrated Curriculum":
                "Industry-integrated curriculum for B.Sc. Data Science at K.R. Mangalam University",
            "Research Excellence":
                "KRMU research excellence – Scopus/WoS journal articles and patents in Data Science",
            "Expert Faculty":
                "Expert faculty and industry mentors guiding B.Sc. Data Science students at KRMU",
            "International Exposure":
                "B.Sc. Data Science students on a sponsored summer school exchange at a European university",
            "Project-Based Learning":
                "B.Sc. Data Science students building and deploying real-world software projects at KRMU",
            "Top Tech Mentorship":
                "Industry mentors and startup founders mentoring B.Sc. Data Science students at KRMU",
        },

        // --- curriculum ---
        curriculum: {
            overview:
                "B.Sc. (Hons.) Data Science curriculum and syllabus handbook cover",
            "Curriculum Handbook Graphic":
                "B.Sc. (Hons.) Data Science curriculum and syllabus handbook cover",
        },

        // --- labs ---
        labs: {
            "Computer Lab":
                "Computer Lab icon – KRMU computational and analytical skills lab",
            "Robotics and Automation Lab":
                "Robotics and Automation Lab icon – robotic arms, microcontrollers and sensors for automated systems",
            "Data Science Lab":
                "Data Science Lab icon – Python, R, Anaconda and Jupyter Notebook tools for data analysis",
            "Advanced iOS Lab":
                "Advanced iOS Lab icon – Mac systems for app design, coding and testing",
        },

        // --- beyondClassroom ---
        beyondClassroom: {
            "Guest Speaker – Jasmine":
                "Guest speaker Jasmine leading an expert session for students at K.R. Mangalam University",
            "Guest Speaker – Parmish Verma":
                "Guest speaker Parmish Verma at a K.R. Mangalam University student event",
            "Guest Speaker – Sukhi":
                "Guest speaker Sukhi at a K.R. Mangalam University student event",
            "Guest Speaker – RJ Naved":
                "Guest speaker RJ Naved at a K.R. Mangalam University student event",
            "Guest Speaker – Kangana Ranaut":
                "Guest speaker Kangana Ranaut at a K.R. Mangalam University student event",
            "Guest Speaker – Nora Fatehi":
                "Guest speaker Nora Fatehi at a K.R. Mangalam University student event",
        },

        // --- careerProspects ---
        careerProspects: {
            prospects:
                "B.Sc. Data Science graduates exploring careers as data scientists, ML engineers and BI analysts",
            "Career Prospectus":
                "B.Sc. Data Science graduates exploring careers as data scientists, ML engineers and BI analysts",
        },

        // --- recruiters ---
        recruiters: {
            "Career Logo":
                "Wipro Recruiter partner logo – KRMU B.Sc. Data Science placements",
        },

        // --- financialAssistance ---
        financialAssistance: {
            "Kuhoo Finance":
                "Kuhoo Finance education loan partner logo at KRMU",
            "ICICI Bank": "ICICI Bank education loan partner logo at KRMU",
            "Axis Bank": "Axis Bank education loan partner logo at KRMU",
            Propelld: "Propelld education loan partner logo at KRMU",
            "IDFC First Bank":
                "IDFC First Bank education loan partner logo at KRMU",
            GrayQuest: "GrayQuest fee financing partner logo at KRMU",
        },

        // --- location ---
        location: {
            photo: "Phone icon – KRMU contact numbers",
            "Location Section":
                "Aerial view of Cyber City, Gurugram – corporate hub near K.R. Mangalam University campus",
            map: "Map showing K.R. Mangalam University on Sohna–Gurgaon Road, Gurugram, Haryana",
            "Location Map":
                "Map showing K.R. Mangalam University on Sohna–Gurgaon Road, Gurugram, Haryana",
            "Location Pin":
                "Location pin icon – KRMU campus address, Sohna Road, Gurugram",
            Envelope: "Envelope icon – KRMU email contact",
            Phone: "Phone icon – KRMU contact numbers",
        },

        // --- footer ---
        footer: {
            "About Us":
                "K.R. Mangalam University campus – About Us footer image",
            "Footer Facebook": "K.R. Mangalam University Facebook page link",
            "Footer Instagram": "K.R. Mangalam University Instagram page link",
            "Footer YouTube": "K.R. Mangalam University YouTube channel link",
            "Footer LinkedIn": "K.R. Mangalam University LinkedIn page link",
            "Footer Logos Strip":
                "K.R. Mangalam University accreditation and partner logos strip",
        },
    },

    // =========================================================================
    // Course: BCA (AI & Data Science) (slug: bca-ai-data-science)
    // =========================================================================
    "bca-ai-data-science": {
        // --- scope ---
        scope: {
            overview:
                "Scope of BCA (AI & Data Science) programme at KRMU covering AI, ML, Data Science and IoT",
            "Programme Scope background/illustration":
                "Scope of BCA (AI & Data Science) programme at KRMU covering AI, ML, Data Science and IoT",
        },

        // --- highlights ---
        highlights: {
            "Industry-Integrated Curriculum":
                "Industry-integrated curriculum icon for BCA AI & Data Science at KRMU",
            "Expert Faculty":
                "Expert faculty icon representing AI and data science academicians at KRMU",
            "Learn with IBM":
                "Learn with IBM icon for BCA AI & Data Science academic collaboration at KRMU",
            "MakerSpace: Build from Day One":
                "MakerSpace icon showing hands-on 3D printing and Arduino workshop access at KRMU",
            "Unmatched Industry Experience":
                "Unmatched industry experience icon representing 800+ recruiter tie-ups at KRMU",
            "Certifications from Microsoft":
                "Microsoft certification icon for Azure AI Engineer and Data Scientist Associate credentials",
            "Computer Labs":
                "Modern computer lab with systems for coding and project-based learning at KRMU",
        },

        // --- admissionProcess ---
        admissionProcess: {
            steps: "Decorative background graphic for KRMU admission process steps",
            "Curriculum/Admission process background":
                "Decorative background graphic for KRMU admission process steps",
        },

        // --- labs ---
        labs: {
            "Hero banner photograph (student with laptop, 'Connecting Talent to Dream Careers')":
                "BCA (AI & Data Science) programme at K.R. Mangalam University",
            "Data Structures & Algorithms Lab":
                "Students working in the Data Structures & Algorithms Lab at KRMU",
            "Database Management Systems Lab":
                "Students managing structured databases in the DBMS Lab at KRMU",
            "AI & ML Lab":
                "Students exploring machine learning models in the AI & ML Lab at KRMU",
        },

        // --- careerProspects ---
        careerProspects: {
            prospects:
                "BCA (AI & Data Science) graduates pursuing careers at top tech companies",
            "Career Prospects Students":
                "BCA (AI & Data Science) graduates pursuing careers at top tech companies",
        },

        // --- financialAssistance ---
        financialAssistance: {
            "Kuhoo Finance":
                "Kuhoo Finance education loan partner logo at KRMU",
            "ICICI Bank": "ICICI Bank education loan partner logo at KRMU",
            "Axis Bank": "Axis Bank education loan partner logo at KRMU",
            Propelld: "Propelld education loan partner logo at KRMU",
            "IDFC First Bank":
                "IDFC First Bank education loan partner logo at KRMU",
            GrayQuest: "GrayQuest education fee financing partner logo at KRMU",
        },

        // --- exploreOther ---
        exploreOther: {
            "SOET Engineering Student":
                "SOET engineering student at K.R. Mangalam University illustrating FAQ section",
        },
    },

    // =========================================================================
    // Course: BCA (Hons./Hons. with Research) AI & Data Science (slug: bca-ai-research)
    // =========================================================================
    "bca-ai-research": {
        // --- scope ---
        scope: {
            overview:
                "BCA (Hons./Hons. with Research) AI & Data Science programme scope at K.R. Mangalam University",
        },

        // --- highlights ---
        highlights: {
            "Industry-Integrated Curriculum":
                "BCA AI & Data Science Industry-Integrated Curriculum",
            "Expert Faculty": "BCA AI & Data Science Expert Faculty",
            "Learn with IBM": "BCA AI & Data Science Learn with IBM",
            "MakerSpace: Build from Day One":
                "BCA AI & Data Science MakerSpace – Build from Day One",
            "Unmatched Industry Experience":
                "BCA AI & Data Science Unmatched Industry Experience",
            "Certifications from Microsoft":
                "BCA AI & Data Science Certifications from Microsoft",
        },

        // --- curriculum ---
        curriculum: {
            overview: "BCA AI & Data Science course students",
            "Curriculum Background": "BCA AI & Data Science course students",
        },

        // --- labs ---
        labs: {
            "Computer Labs": "BCA AI & Data Science Computer Labs",
            "Data Structures & Algorithms Lab":
                "BCA AI & Data Science Data Structures and Algorithms Lab",
            "Database Management Systems Lab":
                "BCA AI & Data Science Database Management Systems Lab",
            "AI & ML Lab": "BCA AI & Data Science AI and ML Lab",
        },

        // --- beyondClassroom ---
        beyondClassroom: {
            "Guest Speaker — Jasmine":
                "Guest speaker Jasmine leading an expert session for students at K.R. Mangalam University",
            "Guest Speaker — Parmish Verma":
                "Parmish Verma at K.R. Mangalam University guest session",
            "Guest Speaker — Naved":
                "Naved at K.R. Mangalam University guest event",
            "Guest Speaker — Sukhi":
                "Sukhi at K.R. Mangalam University guest event",
            "Guest Speaker — Nora Fatehi":
                "Nora Fatehi at K.R. Mangalam University guest appearance",
            "Guest Speaker — Kangana Ranaut":
                "Kangana Ranaut at K.R. Mangalam University special session",
        },

        // --- careerProspects ---
        careerProspects: {
            prospects:
                "BCA AI & Data Science Career Prospects students at K.R. Mangalam University",
            "Career Prospects Students":
                "BCA AI & Data Science Career Prospects students at K.R. Mangalam University",
        },

        // --- financialAssistance ---
        financialAssistance: {
            "Kuhoo Finance":
                "Kuhoo Finance – loan partner at K.R. Mangalam University",
            "ICICI Bank":
                "ICICI Bank – loan partner at K.R. Mangalam University",
            "Axis Bank": "Axis Bank – loan partner at K.R. Mangalam University",
            Propelld: "Propelld – loan partner at K.R. Mangalam University",
            "IDFC First Bank":
                "IDFC First Bank – loan partner at K.R. Mangalam University",
            GrayQuest:
                "GrayQuest – fee financing partner at K.R. Mangalam University",
        },

        // --- location ---
        location: {
            map: "Aerial view of Cyber City, Gurugram – corporate hub near K.R. Mangalam University campus",
            "Location Map":
                "Map showing K.R. Mangalam University on Sohna–Gurgaon Road, Gurugram, Haryana",
            "Aerial View — Cyber City":
                "Aerial view of Cyber City, Gurugram – corporate hub near K.R. Mangalam University campus",
        },

        // --- exploreOther ---
        exploreOther: {
            "University Background": "K.R. Mangalam University Image",
            "Explore Other Programmes Banner":
                "BCA AI & Data Science Explore Other Programmes at K.R. Mangalam University",
        },
    },

    // =========================================================================
    // Course: BCA (Cyber Security) (slug: bca-cyber-security)
    // =========================================================================
    "bca-cyber-security": {
        // --- scope ---
        scope: {
            overview:
                "BCA (Cyber Security) programme scope – ethical hacking, threat intelligence, digital forensics, cryptography and network defence training at K.R. Mangalam University",
            "Scope illustration":
                "BCA (Cyber Security) programme scope – ethical hacking, threat intelligence, digital forensics, cryptography and network defence training at K.R. Mangalam University",
        },

        // --- highlights ---
        highlights: {
            "Hands-On Learning with Real-World Exposure":
                "BCA Cyber Security key feature – students earn 15% credits via internships and projects, graduating with six months of real-world work experience",
            "MakerSpace: Build from Day One":
                "BCA Cyber Security key feature – MakerSpace facilities with 3D printers, laser cutters and Arduino kits for hands-on innovation",
            "Industry-Integrated Curriculum":
                "BCA Cyber Security key feature – curriculum blending academic foundations with engineering, management and emerging tech tools",
            "Web Development Training from Day One":
                "BCA Cyber Security key feature – MERN Stack training from year one to build real-world web applications",
            "Cutting Edge Labs & Equipment":
                "BCA Cyber Security key feature – hands-on innovation in the IoT Lab, Robotics Lab and iOS Lab for AI and ML projects",
            "Unmatched Industry Experience":
                "BCA Cyber Security key feature – 800+ industry tie-ups offering internship and placement opportunities",
            "Computer Labs":
                "Computer Labs icon – modern, well-equipped labs for hands-on coding and security-based simulations",
        },

        // --- curriculum ---
        curriculum: {
            overview: "BCA Cyber Security Students",
            "Curriculum Background": "BCA Cyber Security Students",
        },

        // --- labs ---
        labs: {
            "Cyber Security Lab":
                "Cyber Security Lab icon – ethical hacking, network security and threat analysis through real-world simulations",
            "Programming Lab":
                "Programming Lab icon – coding practice for building secure applications and understanding system vulnerabilities",
            "Network Security Lab":
                "Network Security Lab icon – configuring firewalls, detecting vulnerabilities and preventing cyber threats",
        },

        // --- beyondClassroom ---
        beyondClassroom: {
            "Guest event": "Kangana Ranaut at KRMU special session",
            "Guest event photo (Sukhi)": "Sukhi at KRMU guest event",
            "Guest event photo (Naved)": "Naved at KRMU guest event",
            "Guest speaker":
                "Guest speaker Jasmine leading an expert session for students at K.R. Mangalam University",
        },

        // --- careerProspects ---
        careerProspects: {
            prospects: "Students exploring cyber security career prospects",
            "Career Prospects Students":
                "Students exploring cyber security career prospects",
        },

        // --- financialAssistance ---
        financialAssistance: {
            "Loan partner logo 1":
                "Kuhoo Finance education loan partner at KRMU",
            "Loan partner logo 2": "ICICI Bank education loan partner at KRMU",
            "Loan partner logo 3": "Axis Bank education loan partner at KRMU",
            "Loan partner logo 4": "Propelld education loan partner at KRMU",
            "Loan partner logo 5": "IDFC First Bank education at KRMU",
            "Loan partner logo 6":
                "GrayQuest education fee financing partner at KRMU",
        },

        // --- location ---
        location: {
            map: "Aerial view of Cyber City, Gurugram – corporate hub near K.R. Mangalam University campus",
            "Location map":
                "Map showing K.R. Mangalam University on Sohna–Gurgaon Road, Gurugram, Haryana",
            "Cyber City aerial":
                "Aerial view of Cyber City, Gurugram – corporate hub near K.R. Mangalam University campus",
        },

        // --- exploreOther ---
        exploreOther: {
            "University Background":
                "K.R. Mangalam University Background image",
            "Explore Other Programmes side": "BCA Cyber Security course",
        },
    },

    // =========================================================================
    // Course: BCA (Hons. / Hons. with Research) Cyber Security (slug: bca-hons-hons-with-research-cyber-security)
    // =========================================================================
    "bca-hons-hons-with-research-cyber-security": {
        // --- scope ---
        scope: {
            overview:
                "BCA (Hons. / Hons. with Research) Cyber Security programme scope – careers as cyber security analyst, ethical hacker, security consultant or digital forensics expert",
            "Scope illustration":
                "BCA (Hons. / Hons. with Research) Cyber Security programme scope – careers as cyber security analyst, ethical hacker, security consultant or digital forensics expert",
        },

        // --- highlights ---
        highlights: {
            "Hands-On Learning with Real-World Exposure":
                "BCA (Hons.) Cyber Security key feature – students earn 15% credits via internships and projects, graduating with six months of real-world work experience",
            "Industry-Integrated Curriculum":
                "BCA (Hons.) Cyber Security key feature – curriculum blending foundational knowledge with cutting-edge technologies for a job-ready learning experience",
            "Learn with EC-Council":
                "BCA (Hons.) Cyber Security key feature – industry-aligned learning and globally recognised certifications through KRMU's partnership with EC-Council",
            "Cutting Edge Labs & Equipment":
                "BCA (Hons.) Cyber Security key feature – IoT Lab, Robotics & Automation Lab and Advanced iOS Lab for building real-world cyber security solutions",
            "MakerSpace: Build from Day One":
                "BCA (Hons.) Cyber Security key feature – hands-on MakerSpace course with 3D printers, laser cutters and Arduino kits",
            "Unmatched Industry Experience":
                "BCA (Hons.) Cyber Security key feature – 800+ industry tie-ups offering internship and placement opportunities",
            "Computer Labs":
                "Computer Labs icon – modern, well-equipped labs for hands-on coding and security-based simulations",
        },

        // --- curriculum ---
        curriculum: {
            overview: "K.R. Mangalam Students Image",
            "Curriculum Background": "K.R. Mangalam Students Image",
        },

        // --- labs ---
        labs: {
            "Cyber Security Lab":
                "Cyber Security Lab icon – ethical hacking, network security and threat analysis through real-world simulations",
            "Programming Lab":
                "Programming Lab icon – coding practice for building secure applications and understanding system vulnerabilities",
            "Network Security Lab":
                "Network Security Lab icon – configuring firewalls, detecting vulnerabilities and preventing cyber threats",
        },
    },
};

export const soetProgramsAltConfig = soetAltConfig;

/**
 * Master Recruiter Logos Map across SOET & KRMU programmes.
 */
export const recruiterLogoMap: Record<string, string> = {
    "gm_ff0e556a1c.png": "General Motors (GM) recruiter partner logo",
    "mahindra_c9360a7e79.png": "Mahindra recruiter partner logo",
    "toshiba_abeafd17db.png": "Toshiba recruiter partner logo",
    "samsung_dcd0be53d5.png": "Samsung recruiter partner logo",
    "wipro_37a7dbc030.png": "Wipro recruiter partner logo",
    "systique_501b8b4c65.png": "Systique recruiter partner logo",
    "tcs_a70eb2dbf0.png":
        "Tata Consultancy Services (TCS) recruiter partner logo",
    "ibm_4eb80689b9.png": "IBM recruiter partner logo",
    "accenture_f6bbfe3e54.png": "Accenture recruiter partner logo",
    "amazon_232c2ea5b8.png": "Amazon recruiter partner logo",
    "microsoft_7a0ffcff42.png": "Microsoft recruiter partner logo",
    "google_ef46fcf881.png": "Google recruiter partner logo",
    "flipkart_4ea78e4d3e.png": "Flipkart recruiter partner logo",
    "swiggy_6b7ad25dfc.png": "Swiggy recruiter partner logo",
    "myntra_fb6e6804cb.png": "Myntra recruiter partner logo",
    "reliance_c61ea4df87.png": "Reliance recruiter partner logo",
    "cognizant_2ec1222471.png": "Cognizant recruiter partner logo",
    "concentrix_cf7eecabac.png": "Concentrix recruiter partner logo",
    "amul_b15b3c3c73.png": "Amul recruiter partner logo",
    "quickheal_cb9ea094ad.png": "Quick Heal recruiter partner logo",
    "symantec_d98dae7ad9.png": "Symantec recruiter partner logo",
    "rsa_0209da305a.png": "RSA Security recruiter partner logo",
    "olx_a12ea35da9.png": "OLX recruiter partner logo",
};

/**
 * Resolver for recruiter logos in Dream Career / Placement strip.
 */
export function resolveProgramRecruiterAlt(
    name?: string | null,
    filenameOrUrl?: string | null,
    fallback: string = ""
): string {
    const raw = (filenameOrUrl || "").trim().split("?")[0];
    const filename = raw.split("/").pop() || raw;
    const lower = (name || filename).toLowerCase();

    if (filename && recruiterLogoMap[filename]) {
        return recruiterLogoMap[filename];
    }

    for (const [k, v] of Object.entries(recruiterLogoMap)) {
        if (raw.includes(k) || filename.includes(k)) {
            return v;
        }
    }

    if (lower.includes("gm") || lower.includes("general motor"))
        return "General Motors (GM) recruiter partner logo";
    if (lower.includes("mahindra")) return "Mahindra recruiter partner logo";
    if (lower.includes("toshiba")) return "Toshiba recruiter partner logo";
    if (lower.includes("samsung")) return "Samsung recruiter partner logo";
    if (lower.includes("wipro")) return "Wipro recruiter partner logo";
    if (lower.includes("systique")) return "Systique recruiter partner logo";
    if (lower.includes("tcs"))
        return "Tata Consultancy Services (TCS) recruiter partner logo";
    if (lower.includes("ibm")) return "IBM recruiter partner logo";
    if (lower.includes("accenture")) return "Accenture recruiter partner logo";
    if (lower.includes("amazon")) return "Amazon recruiter partner logo";
    if (lower.includes("microsoft")) return "Microsoft recruiter partner logo";
    if (lower.includes("google")) return "Google recruiter partner logo";
    if (lower.includes("flipkart")) return "Flipkart recruiter partner logo";
    if (lower.includes("swiggy")) return "Swiggy recruiter partner logo";
    if (lower.includes("myntra")) return "Myntra recruiter partner logo";
    if (lower.includes("reliance")) return "Reliance recruiter partner logo";
    if (lower.includes("cognizant")) return "Cognizant recruiter partner logo";
    if (lower.includes("concentrix"))
        return "Concentrix recruiter partner logo";
    if (lower.includes("amul")) return "Amul recruiter partner logo";
    if (lower.includes("quickheal")) return "Quick Heal recruiter partner logo";
    if (lower.includes("symantec")) return "Symantec recruiter partner logo";
    if (lower.includes("rsa")) return "RSA Security recruiter partner logo";
    if (lower.includes("olx")) return "OLX recruiter partner logo";

    if (fallback && fallback !== "Career Logo") return fallback;
    return `${name || filename.replace(/[-_]/g, " ").replace(/\.[^/.]+$/, "")} recruiter partner logo`;
}

/**
 * Master URL / Filename lookup map across all SOET programmes.
 */
export const soetProgramsUrlMap: Record<string, string> = {
    "gm_ff0e556a1c.png": "General Motors (GM) recruiter partner logo",
    "mahindra_c9360a7e79.png": "Mahindra recruiter partner logo",
    "toshiba_abeafd17db.png": "Toshiba recruiter partner logo",
    "samsung_dcd0be53d5.png": "Samsung recruiter partner logo",
    "wipro_37a7dbc030.png": "Wipro recruiter partner logo",
    "systique_501b8b4c65.png": "Systique recruiter partner logo",
    "program_scope_img_71b0352a8c.png": "B.Tech CSE programme scope",
    "Industry_Integrated_Curriculum_6b71b0516e.jpg":
        "B.Tech CSE Industry-integrated curriculum",
    "Research_Excellence_1c144fb221.jpg": "B.Tech CSE Research excellence",
    "Expert_Faculty_be828db587.jpg": "B.Tech CSE Expert faculty",
    "International_Exposure_4181909b3f.jpg":
        "B.Tech CSE International exposure programme",
    "Project_Based_Learning_e0f6bd4eae.jpg":
        "B.Tech CSE Project-based learning",
    "Coding_and_Competitions_e94d8ac913.jpg":
        "B.Tech CSE Coding and competitions lab",
    "b_tech_computer_science_and_engineering_ai_and_ml_b0fc013bcb.png":
        "B.Tech CSE in AI and ML",
    "b_tech_computer_science_and_engineering_full_stack_development_aade4f5abe.png":
        "B.Tech CSE in Full Stack Development",
    "btech_computer_science_and_engineering_ux_ui_00fecef876.jpeg":
        "B.Tech CSE in UX/UI Design",
    "btech_computer_science_and_engineering_cyber_security_c32ad8f7f8.jpeg":
        "B.Tech CSE in Cyber Security",
    "b_tech_computer_science_and_engineering_data_science_ff14ce5505.jpeg":
        "B.Tech CSE in Data Science",
    "b_tech_computer_science_and_engineering_robotics_and_ai_b9b24da4a4.jpeg":
        "B.Tech CSE in Robotics and AI",
    "admis_proc_9cef37bb90.webp": "KRMU admission process",
    image: "GrayQuest education fee financing partner logo at KRMU",
    "technology_8b0b4c04a3.png":
        "Advanced iOS Lab icon – Mac systems for app design, coding and testing",
    "artificial_intelligence_0117b8b3e9.png":
        "Robotics and Automation Lab icon – robotic arms, microcontrollers and sensors for automated systems",
    "social_2e5de5b706.png":
        "Data Science Lab icon – Python, R, Anaconda and Jupyter Notebook tools for data analysis",
    "3_Naved_66be62f962.webp":
        "RJ Naved interacting with BBA Marketing students at a K.R. Mangalam University guest session",
    "2_Sukhi_9f469a64f3.webp":
        "Singer Sukh-E at a K.R. Mangalam University guest session with BBA Marketing students",
    "5_Parmish_060ab919ef.webp": "Parmish Verma at KRMU guest session",
    "1_Nora_c15855e909.webp": "Nora Fatehi at KRMU guest appearance",
    "4_Kangana_73c274079a.webp": "Kangana Ranaut at KRMU special session",
    "1234567_jpg_2_b305571e23.jpeg":
        "Guest speaker Jasmine leading an expert session for students at K.R. Mangalam University",
    "Career_Prospect_3_1_4e7748fb98.png":
        "Career prospects for B.Tech CSE graduates",
    "idfc_aad5aa0212.webp": "IDFC First Bank education at KRMU",
    "propeeld_2a2ac4f75c.webp": "Propelld education loan partner at KRMU",
    "grayquest_b005d3b305.webp":
        "GrayQuest education fee financing partner at KRMU",
    "icici_d3ee1094ac.webp": "ICICI Bank education loan partner at KRMU",
    "axis_cc305fb17d.webp": "Axis Bank education loan partner at KRMU",
    "kuhoo_7ab024e74b.webp": "Kuhoo Finance education loan partner at KRMU",
    "cyber_city_45e6fbebbf.webp":
        "Map showing K.R. Mangalam University on Sohna–Gurgaon Road, Gurugram, Haryana",
    "map_269b3c1ad5.webp":
        "Aerial view of Cyber City, Gurugram – corporate hub near K.R. Mangalam University campus",
    "image_3_4ba0450044.webp":
        "K.R. Mangalam University campus – About Us footer image",
    "facebook_f_brands_solid_full_167d27779b.svg":
        "K.R. Mangalam University Facebook page link",
    "instagram_brands_solid_full_75d554175f.svg":
        "K.R. Mangalam University Instagram page link",
    "youtube_brands_solid_full_99bd404d9a.svg":
        "K.R. Mangalam University YouTube channel link",
    "linkedin_in_brands_solid_full_77e33bec39.svg":
        "K.R. Mangalam University LinkedIn page link",
    "master-computer-application-mca":
        "MCA programme at K.R. Mangalam University Gurugram",
    "Industry_Integrated_Curriculum_d7d0d9f7dc.jpg":
        "Industry-integrated MCA curriculum at K.R. Mangalam University",
    "Expert_Faculty_c1288c860e.jpg":
        "Expert faculty teaching MCA programme at KRMU",
    "Industry_Integrated_Curriculum_58f166f5cf.jpg":
        "International exposure through European summer school for MCA students at KRMU",
    "Project_Based_Learning_84c4035a76.jpg":
        "Project-based learning for MCA students at KRMU",
    "Coding_and_Competitions_90aa6485b1.jpg":
        "Competitive programming lab for MCA students at KRMU",
    "Placement_Readiness_Labs_559930af1c.jpg":
        "Placement readiness training labs for MCA students at KRMU",
    "Top_Tech_Mentorship_b430f48477.jpg":
        "Top tech mentorship from CTOs and startup founders for MCA students at KRMU",
    "3_Naved_79c6c1baef.webp":
        "KRMU campus event gallery image featuring celebrity guest Naved",
    "5_Parmish_0fb46a1b80.webp":
        "KRMU campus event gallery image featuring celebrity guest Parmish",
    "1_Nora_994e27ae46.webp":
        "KRMU campus event gallery image featuring celebrity guest Nora",
    "2_Sukhi_404a5582df.webp":
        "KRMU campus event gallery image featuring celebrity guest Sukhi",
    "4_Kangana_8621394a4a.webp":
        "KRMU campus event gallery image featuring celebrity guest Kangana",
    "BBA_d4936f5bd4.png": "BCA Cyber Security course",
    "location_dot_solid_full_1_083b3c287b.svg":
        "Location pin icon – KRMU campus address, Sohna Road, Gurugram",
    "envelope_solid_full_1_c1a6ee8597.svg":
        "Envelope icon – KRMU email contact",
    "phone_solid_full_2_8db7b1fe1d.svg": "Phone icon – KRMU contact numbers",
    "footer_logos_d944bc560c.svg":
        "K.R. Mangalam University accreditation and partner logos strip",
    "whatsappicon_e01d55ec82.svg":
        "WhatsApp contact icon – K.R. Mangalam University",
    "phone_icon_518c3350a6.svg":
        "Phone contact icon – K.R. Mangalam University",
    "facebook_5c410dc2b2.svg": "K.R. Mangalam University Facebook page link",
    "linkedin_fa1577203d.svg": "K.R. Mangalam University LinkedIn page link",
    "insta_7b3d46391b.svg": "K.R. Mangalam University Instagram page link",
    "youtube_icon_c7502bbd63.svg":
        "K.R. Mangalam University YouTube channel link",
    "btech-full-stack-development":
        "B.Tech CSE Full Stack Development programme at K.R. Mangalam University",
    "Scope_image_5db2178e85.jpg":
        "B.Tech CSE Full Stack Development programme scope at KRMU",
    "Industry_Integrated_Curriculum_a60f43c269.jpg":
        "Industry-integrated curriculum for B.Tech Full Stack Development at KRMU",
    "Research_Excellence_4aad72f21b.jpg":
        "Research excellence in Full Stack Development programme at KRMU",
    "Expert_Faculty_3ac811a7f3.jpg":
        "Expert faculty teaching B.Tech Full Stack Development at KRMU",
    "International_Exposure_af8a27a6a1.jpg":
        "International exposure through European summer school for Full Stack Development students at KRMU",
    "Project_Based_Learning_9f60c9c262.jpg":
        "Project-based learning for B.Tech Full Stack Development students at KRMU",
    "Learn_with_Imagin_XP_3d5185d736.jpg":
        "Learn Full Stack Development with ImaginXP industry mentors at KRMU",
    "Placement_Readiness_Labs_07cd96a2e4.jpg":
        "Placement readiness training for Full Stack Development students at KRMU",
    "Top_Tech_Mentorship_bec06c502f.jpg":
        "Top tech mentorship from CTOs and startup founders for Full Stack Development students at KRMU",
    "Compress_Image_444f7b9b71.png": "K.R. Mangalam Students Image",
    "computer_science_2f97d5d2d7.png": "BCA AI & Data Science Computer Labs",
    "full_stack_development_lab_edf6d02766.png":
        "Full Stack Development lab for hands-on web application projects at KRMU",
    "tube_17b5005c1d.png":
        "Programming lab for B.Tech Cyber Security students at KRMU",
    "web_development_36bf31c088.png":
        "Web Development lab for B.Tech Full Stack Development students at KRMU",
    "database_e813d6c38b.png":
        "BCA AI & Data Science Database Management Systems Lab",
    "university_bg_374a0a0fef.png": "K.R. Mangalam University Background image",
    "btech-cse-ui-ux": "B.Tech CSE UI/UX programme at K.R. Mangalam University",
    "Scope_image_56eb081c95.jpg": "B.Tech CSE UI/UX programme scope at KRMU",
    "Hands_On_Learning_with_Real_World_Exposure_33eae1a128.jpg":
        "Hands-on learning with real-world exposure for B.Tech UI/UX students at KRMU",
    "Web_Development_Training_from_Day_One_9fe2bad9ff.jpg":
        "MERN stack web development training from day one for UI/UX students at KRMU",
    "Learn_with_Imagin_XP_047e1d4f16.jpg":
        "Learn UI/UX design with ImaginXP industry mentors at KRMU",
    "Cutting_Edge_Labs_and_Equipment_ec57517830.jpg":
        "Cutting-edge labs including IoT, Robotics and iOS labs for UI/UX students at KRMU",
    "Maker_Space_Build_from_Day_One_e5c7424828.jpg":
        "MakerSpace with 3D printers and Arduino kits for UI/UX students at KRMU",
    "Unmatched_Industry_Experience_8c4c3fd4a1.jpg":
        "Unmatched industry experience through 800+ recruiter tie-ups at KRMU",
    "ar_vr_lab_56c1398fe3.png":
        "AR/VR lab for immersive interactive design experiences at KRMU",
    "mobile_development_lab_47ff14fd61.png":
        "Mobile development lab for UI/UX design students at KRMU",
    "ui_ux_design_lab_5b6506110b.png":
        "UI/UX design lab for wireframing and prototyping at KRMU",
    "btech-cse-cyber-security":
        "B.Tech CSE Cyber Security programme at K.R. Mangalam University",
    "Scope_image_a973412092.jpg":
        "B.Tech CSE Cyber Security programme scope at KRMU",
    "Hands_On_Learning_with_Real_World_Exposure_b71f40cb11.jpg":
        "Hands-on learning with real-world exposure for B.Tech Cyber Security students at KRMU",
    "Industry_Integrated_Curriculum_022bd702f9.jpg":
        "Industry-integrated curriculum for B.Tech Cyber Security at KRMU",
    "Learn_with_IBM_and_EC_Council_85555992ba.jpg":
        "Learn Cyber Security with IBM and EC-Council certification partners at KRMU",
    "Cutting_Edge_Labs_and_Equipment_a3681c97c4.jpg":
        "Cutting-edge labs including IoT, Robotics and iOS labs for Cyber Security students at KRMU",
    "Maker_Space_Build_from_Day_One_212208a7cf.jpg":
        "MakerSpace with 3D printers and Arduino kits for Cyber Security students at KRMU",
    "Unmatched_Industry_Experience_096776f06e.jpg":
        "Unmatched industry experience through 800+ recruiter tie-ups at KRMU",
    "cyber_security_lab_438e605b1e.png":
        "Cyber Security lab for ethical hacking and threat analysis at KRMU",
    "network_security_lab_c45ec11ebd.png":
        "Network Security lab for firewall configuration and vulnerability detection at KRMU",
    "btech-cse-in-data-science":
        "B.Tech CSE Data Science programme at K.R. Mangalam University",
    "btech-cse-in-data-science#programme-scope":
        "B.Tech. CSE Data Science Students",
    "Hands_On_Learning_with_Real_World_Exposure_d191a04566.jpg":
        "Hands-on learning with real-world exposure for B.Tech Data Science students at KRMU",
    "Industry_Integrated_Curriculum_bdf855305e.jpg":
        "Industry-integrated curriculum for B.Tech Data Science at KRMU",
    "Certifications_from_Microsoft_529be97961.jpg":
        "Microsoft Azure AI Engineer certification for Data Science students at KRMU",
    "Web_Development_Training_from_Day_One_a9e03d5d9a.jpg":
        "MERN stack web development training from day one for Data Science students at KRMU",
    "Learn_with_IBM_8a447435d4.jpg":
        "Learn Data Science and machine learning with IBM at KRMU",
    "Cutting_Edge_Labs_and_Equipment_aa84518d9a.jpg":
        "Cutting-edge labs including IoT, Robotics and iOS labs for Data Science students at KRMU",
    "Maker_Space_Build_from_Day_One_197d7e8dc7.jpg":
        "MakerSpace with 3D printers and Arduino kits for Data Science students at KRMU",
    "Unmatched_Industry_Experience_4c3e79523f.jpg":
        "Unmatched industry experience through 700+ recruiter tie-ups at KRMU",
    "btech-cse-in-data-science#curriculum": "B.Tech. CSE Data Science Students",
    "data_structure_273a4bff10.png":
        "BCA AI & Data Science Data Structures and Algorithms Lab",
    "big_data_analysis_lab_0ad71ce5b2.png":
        "Big Data Analysis lab for real-time data insights at KRMU",
    "data_science_lab_e506e5a234.png":
        "Data Science lab for machine learning and visualization projects at KRMU",
    "btech-cse-in-data-science#career-prospects":
        "K.R. Mangalam University Background Image",
    "Scope_image_a0dec357b4.jpg":
        "B.Sc. (Hons.) Computer Science students exploring AI, data science and cloud computing with IBM support at KRMU",
    "Hands_On_Learning_with_Real_World_Exposure_8abef3e787.jpg":
        "B.Sc. CS students gaining hands-on learning and real-world project exposure at KRMU Gurugram",
    "Industry_Integrated_Curriculum_81ac1553c9.jpg":
        "Industry-integrated curriculum for B.Sc. Computer Science at K.R. Mangalam University",
    "Web_Development_Training_from_Day_One_35696758a9.jpg":
        "B.Sc. CS students learning MERN Stack web development from Year 1 at KRMU",
    "Learn_with_IBM_df5032fee5.jpg":
        "B.Sc. Computer Science students training at IBM Labs with AI and machine learning at KRMU",
    "Cutting_Edge_Labs_and_Equipment_57a0a3d381.jpg":
        "IoT Lab, Robotics Lab and Advanced iOS Lab for B.Sc. CS students at K.R. Mangalam University",
    "Unmatched_Industry_Experience_a31bf373ed.jpg":
        "KRMU B.Sc. CS students with 800+ campus recruiters and industry placement partners",
    "Group_2_9f69a3d8af.svg":
        "IoT Lab icon – sensors, microcontrollers and networking tools for smart connected systems",
    "Group_2_972d2754fb.svg":
        "Cyber Forensic Lab icon – digital evidence analysis and network forensics tools",
    "Group_3_82c085f185.svg":
        "Advanced iOS Lab icon – Mac systems for app design, coding and testing",
    "group_img_32f982771f.png":
        "Students exploring cyber security career prospects",
    "ff_85e28b590c.png":
        "B.Sc. (Hons.) Cyber Security students exploring ethical hacking, digital forensics and network defence at KRMU",
    "Hands_On_Learning_with_Real_World_Exposure_a64a30c7b3.jpg":
        "B.Sc. Cyber Security students gaining hands-on learning and real-world project exposure at KRMU Gurugram",
    "Industry_Integrated_Curriculum_771a5ab595.jpg":
        "Industry-integrated curriculum for B.Sc. Cyber Security at K.R. Mangalam University",
    "Cutting_Edge_Labs_and_Equipment_b147388092.jpg":
        "IoT Lab, Robotics & Automation Lab and Advanced iOS Lab for B.Sc. Cyber Security students at K.R. Mangalam University",
    "Learn_with_IBM_7fe1ae6fc7.jpg":
        "B.Sc. Cyber Security students in the MakerSpace with 3D printers, laser cutters and Arduino kits at KRMU",
    "Unmatched_Industry_Experience_465a382b20.jpg":
        "KRMU B.Sc. Cyber Security students with 800+ campus recruiters and industry placement partners",
    "XMLID_1_165615c7af.svg":
        "Computer Labs icon – modern, well-equipped labs for hands-on coding and security-based simulations",
    "5_Parmish_2d066f3bbc.webp":
        "Guest speaker Parmish Verma at a K.R. Mangalam University student event",
    "3_Naved_f01fa0a4d9.webp":
        "Guest speaker RJ Naved at a K.R. Mangalam University student event",
    "1_Nora_41b3e8c8f1.webp":
        "Guest speaker Nora Fatehi at a K.R. Mangalam University student event",
    "4_Kangana_641bff8149.webp":
        "Guest speaker Kangana Ranaut at a K.R. Mangalam University student event",
    "2_Sukhi_f64922f515.webp":
        "Guest speaker Sukhi at a K.R. Mangalam University student event",
    "B_Sc_Hons_Data_Science_c3aa7f5c41.jpg":
        "B.Sc. (Hons.) Data Science students at KRMU Gurugram working with data visualisation dashboards",
    "r6_dbe8a145c7.png":
        "Reliance Recruiter partner logo – KRMU B.Sc. Data Science placements",
    "r2_854cbf5bb2.png":
        "Accenture Recruiter partner logo – KRMU B.Sc. Data Science placements",
    "r3_c03c597851.png":
        "Microsoft Recruiter partner logo – KRMU B.Sc. Data Science placements",
    "r1_b8ba90038c.png":
        "Flipkart Recruiter partner logo – KRMU B.Sc. Data Science placements",
    "r4_6ac83e08d2.png":
        "Amazon Recruiter partner logo – KRMU B.Sc. Data Science placements",
    "r5_d618741b7b.png":
        "Wipro Recruiter partner logo – KRMU B.Sc. Data Science placements",
    "Scope_image_e5ee9acccf.jpg":
        "B.Sc. (Hons.) Data Science students analysing data and building AI/ML models at KRMU",
    "Unmatched_Industry_Experience_caffc923ba.jpg":
        "Industry-integrated curriculum for B.Sc. Data Science at K.R. Mangalam University",
    "Research_Excellence_8b9aa1b753.jpg":
        "KRMU research excellence – Scopus/WoS journal articles and patents in Data Science",
    "Expert_Faculty_837a53f25b.jpg":
        "Expert faculty and industry mentors guiding B.Sc. Data Science students at KRMU",
    "International_Exposure_eeb706f947.jpg":
        "B.Sc. Data Science students on a sponsored summer school exchange at a European university",
    "Project_Based_Learning_810097dac6.jpg":
        "B.Sc. Data Science students building and deploying real-world software projects at KRMU",
    "Top_Tech_Mentorship_b0f9eff25b.jpg":
        "Industry mentors and startup founders mentoring B.Sc. Data Science students at KRMU",
    "curriculum-s.jpeg":
        "B.Sc. (Hons.) Data Science curriculum and syllabus handbook cover",
    "5_Parmish_966a8e1fd4.webp":
        "Guest speaker Parmish Verma at a K.R. Mangalam University student event",
    "2_Sukhi_519cad723f.webp":
        "Guest speaker Sukhi at a K.R. Mangalam University student event",
    "3_Naved_ef1cfe7ffa.webp":
        "Guest speaker RJ Naved at a K.R. Mangalam University student event",
    "4_Kangana_b7e2144f24.webp":
        "Guest speaker Kangana Ranaut at a K.R. Mangalam University student event",
    "1_Nora_8b40b1db33.webp":
        "Guest speaker Nora Fatehi at a K.R. Mangalam University student event",
    "Career_Prospects_b2998a4bc8.png":
        "B.Sc. Data Science graduates exploring careers as data scientists, ML engineers and BI analysts",
    "Scope_image_ce75a2eda1.jpg":
        "BCA (Hons./Hons. with Research) AI & Data Science programme scope at K.R. Mangalam University",
    "Industry_Integrated_Curriculum_f58b4e0c1f.jpg":
        "BCA AI & Data Science Industry-Integrated Curriculum",
    "Expert_Faculty_d82d2ab606.jpg": "BCA AI & Data Science Expert Faculty",
    "Learn_with_IBM_175774ab47.jpg": "BCA AI & Data Science Learn with IBM",
    "Maker_Space_Build_from_Day_One_01a1df9ed4.jpg":
        "BCA AI & Data Science MakerSpace – Build from Day One",
    "Unmatched_Industry_Experience_e8996685ef.jpg":
        "BCA AI & Data Science Unmatched Industry Experience",
    "Certifications_from_Microsoft_f8caf67af7.jpg":
        "BCA AI & Data Science Certifications from Microsoft",
    "ai_ml_lab_88e87d93c2.png": "BCA AI & Data Science AI and ML Lab",
    "5_Parmish_e4b94a158b.webp":
        "Parmish Verma at K.R. Mangalam University guest session",
    "3_Naved_fe51696191.webp": "Naved at K.R. Mangalam University guest event",
    "2_Sukhi_0dd5da2fba.webp": "Sukhi at K.R. Mangalam University guest event",
    "1_Nora_72c032c66f.webp":
        "Nora Fatehi at K.R. Mangalam University guest appearance",
    "4_Kangana_52a8cdf5a9.webp":
        "Kangana Ranaut at K.R. Mangalam University special session",
    "Scope_image_f73e899823.jpg":
        "BCA (Cyber Security) programme scope – ethical hacking, threat intelligence, digital forensics, cryptography and network defence training at K.R. Mangalam University",
    "Hands_On_Learning_with_Real_World_Exposure_7e40d4152e.jpg":
        "BCA Cyber Security key feature – students earn 15% credits via internships and projects, graduating with six months of real-world work experience",
    "Maker_Space_Build_from_Day_One_c87a8814ff.jpg":
        "BCA Cyber Security key feature – MakerSpace facilities with 3D printers, laser cutters and Arduino kits for hands-on innovation",
    "Industry_Integrated_Curriculum_65987293a7.jpg":
        "BCA Cyber Security key feature – curriculum blending academic foundations with engineering, management and emerging tech tools",
    "Web_Development_Training_from_Day_One_0f7f20bb66.jpg":
        "BCA Cyber Security key feature – MERN Stack training from year one to build real-world web applications",
    "Cutting_Edge_Labs_and_Equipment_536a06664a.jpg":
        "BCA Cyber Security key feature – hands-on innovation in the IoT Lab, Robotics Lab and iOS Lab for AI and ML projects",
    "Unmatched_Industry_Experience_11e0f6d3c8.jpg":
        "BCA Cyber Security key feature – 800+ industry tie-ups offering internship and placement opportunities",
    "Group_6_c0e311eb24.svg":
        "Cyber Security Lab icon – ethical hacking, network security and threat analysis through real-world simulations",
    "Vector_dba2f1bd54.svg":
        "Programming Lab icon – coding practice for building secure applications and understanding system vulnerabilities",
    "x30_21_Cyber_Security_1_d4d57313e5.svg":
        "Network Security Lab icon – configuring firewalls, detecting vulnerabilities and preventing cyber threats",
    "5_Parmish_02d2b43580.webp":
        "Parmish Verma at K.R. Mangalam University guest session",
    "1_Nora_1eaf0c3b97.webp": "Nora Fatehi at KRMU guest appearance",
    "2_Sukhi_7020276e87.webp": "Sukhi at KRMU guest event",
    "3_Naved_d141225ca1.webp": "Naved at KRMU guest event",
    "4_Kangana_3a12dce9c9.webp": "Kangana Ranaut at KRMU special session",
    "Scope_image_6637ff118f.jpg":
        "BCA (Hons. / Hons. with Research) Cyber Security programme scope – careers as cyber security analyst, ethical hacker, security consultant or digital forensics expert",
    "Hands_On_Learning_with_Real_World_Exposure_9caf8ecafc.jpg":
        "BCA (Hons.) Cyber Security key feature – students earn 15% credits via internships and projects, graduating with six months of real-world work experience",
    "Industry_Integrated_Curriculum_4a4b1787b2.jpg":
        "BCA (Hons.) Cyber Security key feature – curriculum blending foundational knowledge with cutting-edge technologies for a job-ready learning experience",
    "Learn_with_EC_Council_64daee0819.jpg":
        "BCA (Hons.) Cyber Security key feature – industry-aligned learning and globally recognised certifications through KRMU's partnership with EC-Council",
    "Cutting_Edge_Labs_and_Equipment_b5e15d86d8.jpg":
        "BCA (Hons.) Cyber Security key feature – IoT Lab, Robotics & Automation Lab and Advanced iOS Lab for building real-world cyber security solutions",
    "Maker_Space_Build_from_Day_One_b4f4687bdd.jpg":
        "BCA (Hons.) Cyber Security key feature – hands-on MakerSpace course with 3D printers, laser cutters and Arduino kits",
    "Unmatched_Industry_Experience_13bb5b507b.jpg":
        "BCA (Hons.) Cyber Security key feature – 800+ industry tie-ups offering internship and placement opportunities",
    x30_21_C:
        "Network Security Lab icon – configuring firewalls, detecting vulnerabilities and preventing cyber threats",
};

/**
 * Helper to resolve alt text for SOET programs.
 * Matches by course slug, section category, element title, and filename.
 */
export function resolveSoetProgramAlt(
    slug: string | undefined,
    keyOrUrl: string | undefined,
    fallback: string = ""
): string {
    if (!keyOrUrl) return fallback;

    const trimmed = keyOrUrl.trim();
    const cleanUrl = trimmed.split("?")[0];
    const filename = cleanUrl.split("/").pop() || cleanUrl;

    // 1. Course-specific section lookup
    if (slug && soetAltConfig[slug]) {
        const course = soetAltConfig[slug];

        // Direct key or filename match in any section
        for (const secKey of Object.keys(course)) {
            const sec = course[secKey];
            if (!sec) continue;
            if (sec[trimmed]) return sec[trimmed];
            if (sec[filename]) return sec[filename];
        }

        // Contextual section resolution for shared components
        if (course.careerProspects) {
            if (
                filename.includes("group_img") ||
                trimmed.toLowerCase().includes("career prospect")
            ) {
                if (course.careerProspects.prospects)
                    return course.careerProspects.prospects;
            }
            if (
                filename.includes("university_bg") ||
                trimmed.toLowerCase().includes("background")
            ) {
                if (course.careerProspects.background)
                    return course.careerProspects.background;
            }
        }

        if (
            course.scope &&
            (filename.includes("scope") ||
                trimmed.toLowerCase().includes("scope"))
        ) {
            if (course.scope.overview) return course.scope.overview;
        }

        if (
            course.admissionProcess &&
            (filename.includes("admis") ||
                trimmed.toLowerCase().includes("admis"))
        ) {
            if (course.admissionProcess.steps)
                return course.admissionProcess.steps;
        }

        if (
            course.curriculum &&
            !filename.toLowerCase().includes("industry") &&
            !filename.toLowerCase().includes("integrated") &&
            (filename.includes("curriculum-s") ||
                filename.includes("Compress_Image") ||
                trimmed.toLowerCase() === "curriculum" ||
                trimmed.toLowerCase() === "curriculum image" ||
                trimmed.toLowerCase() === "institutional curriculum")
        ) {
            if (course.curriculum.overview) return course.curriculum.overview;
        }

        if (course.location) {
            if (
                filename.includes("map") ||
                trimmed.toLowerCase().includes("map")
            ) {
                if (course.location.map) return course.location.map;
            }
            if (
                filename.includes("cyber_city") ||
                trimmed.toLowerCase().includes("location")
            ) {
                if (course.location.photo) return course.location.photo;
            }
        }

        // Substring / partial key matching within course sections
        for (const secKey of Object.keys(course)) {
            const sec = course[secKey];
            if (!sec) continue;
            for (const [k, v] of Object.entries(sec)) {
                if (k.toLowerCase() === trimmed.toLowerCase()) return v;
                if (
                    trimmed.toLowerCase().includes(k.toLowerCase()) &&
                    k.length > 3
                )
                    return v;
                if (
                    k.toLowerCase().includes(trimmed.toLowerCase()) &&
                    trimmed.length > 3
                )
                    return v;
            }
        }
    }

    // 2. Master URL / Filename map
    if (filename && soetProgramsUrlMap[filename])
        return soetProgramsUrlMap[filename];
    if (cleanUrl && soetProgramsUrlMap[cleanUrl])
        return soetProgramsUrlMap[cleanUrl];
    if (trimmed && soetProgramsUrlMap[trimmed])
        return soetProgramsUrlMap[trimmed];

    for (const [k, v] of Object.entries(soetProgramsUrlMap)) {
        if (cleanUrl.includes(k) || (filename && filename.includes(k))) {
            return v;
        }
    }

    return fallback;
}
