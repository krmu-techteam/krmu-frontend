export interface Member {
    name: string;
    school: string;
    role: string;
    image?: string | null;
}

export const missionPoints: string[] = [
    "Promote interdisciplinary research aligned with the United Nations Sustainable Development Goals.",
    "Develop innovative and context-specific solutions to regional, national, and global sustainability challenges.",
    "Strengthen integration of sustainability principles into teaching, research, campus management, and institutional governance.",
    "Support policy formulation, sustainability assessment, and evidence-based institutional transformation.",
    "Foster national and international partnerships to enhance sustainability research impact and knowledge exchange.",
    "Contribute to the transition towards low-carbon, resource-efficient, and climate-resilient campus systems.",
];

export const objectivePoints: string[] = [
    "Generate research outputs and technological innovations that support sustainable development pathways.",
    "Build sustainability capacity among students, faculty, and community stakeholders through training, outreach, and experiential learning.",
    "Develop sustainability performance indicators and contribute to institutional sustainability reporting, benchmarking, and impact monitoring.",
    "Facilitate interdisciplinary collaboration and knowledge networks for addressing complex sustainability challenges.",
    "Promote responsible resource utilisation, environmental conservation, and climate action initiatives across the campus ecosystem.",
];

export const committeeMembers: Member[] = [
    {
        name: "Dr. Megha Garg, Associate Professor",
        school: "School of Legal Studies (SOLS)",
        role: "Chairperson",
        image: null,
    },
    {
        name: "Prof. Pawan Kumar, Professor",
        school: "School of Basic & Applied Sciences (SBAS)",
        role: "Member",
        image: null,
    },
    {
        name: "Dr. Neeraj Kumari, Assistant Professor",
        school: "School of Basic & Applied Sciences (SBAS)",
        role: "Member",
        image: null,
    },
    {
        name: "Dr. Monika Yadav, Assistant Professor",
        school: "School of Management & Commerce (SOMC)",
        role: "Member",
        image: null,
    },
    {
        name: "Dr. Yogita Raghav, Assistant Professor",
        school: "School of Engineering & Technology (SOET)",
        role: "Member",
        image: null,
    },
    {
        name: "Dr. Aarti Lamba, Assistant Professor",
        school: "School of Legal Studies (SOLS)",
        role: "Member",
        image: null,
    },
    {
        name: "Dr. Agnibha Sinha, Assistant Professor",
        school: "School of Agricultural Sciences (SOAS)",
        role: "Member",
        image: null,
    },
    {
        name: "Mr. Deepak Kumar, Assistant Professor",
        school: "School of Liberal Arts (SOLA)",
        role: "Member",
        image: null,
    },
    {
        name: "Dr. Sombir Singh, Assistant Professor",
        school: "School of Legal Studies (SOLS)",
        role: "Member",
        image: null,
    },
    {
        name: "Dr. Kriti Sharma, Assistant Professor",
        school: "School of Engineering & Technology (SOET)",
        role: "Member",
        image: null,
    },
    {
        name: "Mr. Deepak Mishra, Deputy Registrar",
        school: "",
        role: "Member",
        image: null,
    },
];

export const studentMembers: Member[] = [
    {
        name: "Ms. Prerna",
        school: "(2305170030), B.A. LL.B. (H)",
        role: "Student Member",
        image: null,
    },
    {
        name: "Mr. Krishna Sindwani",
        school: "(2305140045), B.A. LL.B. (H)",
        role: "Student Member",
        image: null,
    },
    {
        name: "Mr. Anuj",
        school: "(2501940039), MCA (AI & ML)",
        role: "Student Member",
        image: null,
    },
    {
        name: "Ms. Poornima Palarwal",
        school: "(2405994007), Ph.D. Law",
        role: "Research Scholar",
        image: null,
    },
    {
        name: "Dr. Richa Bansal",
        school: "Project Head, UNESCO MGIEP",
        role: "External Expert",
        image: null,
    },
    {
        name: "Ar. Mansha Samreen, Associate Professor",
        school: "School of Architecture & Design (SOAD)",
        role: "Member Secretary",
        image: null,
    },
];

export const getInitials = (fullName: string): string => {
    const nameOnly = fullName.split(",")[0] || fullName;
    const cleanName = nameOnly
        .replace(/^(Dr\.|Prof\.|Mr\.|Ms\.|Ar\.)\s+/i, "")
        .replace(/\s*\(.*?\)/g, "")
        .trim();
    const parts = cleanName.split(/\s+/).filter(Boolean);
    if (parts.length >= 2) {
        return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    if (parts.length === 1 && parts[0].length > 0) {
        return parts[0][0].toUpperCase();
    }
    return "KM";
};
