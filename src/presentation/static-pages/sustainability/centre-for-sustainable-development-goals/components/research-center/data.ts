export interface Member {
  name: string;
  school: string;
  role: string;
  image: string | null;
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
    name: "Vice Chancellor (Ex-officio)",
    school: "",
    role: "Director",
    image: "/images/sustainability/profile/anil-kumar-saini.png",
  },
  {
    name: "Dr. Yogita Raghav",
    school: "School of Engineering & Technology (SOET)",
    role: "Member",
    image: "/images/sustainability/profile/yagita-raghav.png",
  },
  {
    name: "Dr. Aarti Lamba",
    school: "School of Legal Studies (SOLS)",
    role: "Member",
    image: "/images/sustainability/profile/aarti-lamba.png",
  },
  {
    name: "Dr. Shobhna Jeet",
    school: "School of Legal Studies (SOLS)",
    role: "Chairperson",
    image: "/images/sustainability/profile/shobhna-jeet.png",
  },
  {
    name: "Dr. Neeraj Kumari",
    school: "School of Basic & Applied Sciences (SBAS)",
    role: "Member",
    image: "/images/sustainability/profile/neeraj-kumari.png",
  },
  {
    name: "Dr. Megha Garg",
    school: "School of Legal Studies (SOLS)",
    role: "Member Secretary",
    image: "/images/sustainability/profile/megha-garg.png",
  },
  {
    name: "Prof. Pawan Kumar",
    school: "School of Basic & Applied Sciences (SBAS)",
    role: "Member",
    image: "/images/sustainability/profile/pawan-kumar.png",
  },
  {
    name: "Dr. Monica Yadav",
    school: "School of Management & Commerce (SOMC)",
    role: "Member",
    image: "/images/sustainability/profile/manica-yadav.png",
  },
  {
    name: "Dr. Richa Bansal",
    school: "Project Head",
    role: "UNESCO MGIEP",
    image: null,
  },
  {
    name: "Dr. Mansha Samreen",
    school: "School of Architecture & Design (SOAD)",
    role: "Member",
    image: "/images/sustainability/profile/mansha-samreen.png",
  },
  {
    name: "Dr. Deepak Kumar",
    school: "School of Liberal Arts (SOLA)",
    role: "Member",
    image: "/images/sustainability/profile/deepak-kumar.png",
  },
];

export const studentMembers: Member[] = [
  {
    name: "Ms. Prerna",
    school: "(2305170030) BA.LLB.(H)",
    role: "Student Member",
    image: null,
  },
  {
    name: "Mr. Krishna Sindwani",
    school: "(2305140045) BA.LLB.(H)",
    role: "Student Member",
    image: null,
  },
  {
    name: "Mr. Anuj",
    school: "(2501940039) MCA (AI & ML)",
    role: "Student Member",
    image: null,
  },
  {
    name: "Ms. Poornima Palarwal",
    school: "(2405994007) Ph.D. Law",
    role: "Research Scholar",
    image: null,
  },
];

export const getInitials = (fullName: string): string => {
  const cleanName = fullName
    .replace(/^(Dr\.|Prof\.|Mr\.|Ms\.)\s+/i, "")
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
