export interface ResearchStat {
  title: string;
  description: string;
}

export interface ResearchAndInnovationData {
  title: string;
  description: string;
  backgroundImage: string;
  stats: ResearchStat[];
}

export const researchAndInnovationData: Record<
  string,
  ResearchAndInnovationData
> = {
  "b-tech-cse": {
    title: "Research and Innovation Ecosystem",

    description:
      "Students interested in research, innovation, and higher studies benefit from K.R. Mangalam University's active research ecosystem. Through specialised laboratories, faculty-led projects, and innovation initiatives, students gain opportunities to participate in advanced technology research and interdisciplinary problem-solving.",

    backgroundImage:
      "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/image_634_93830de676.jpg",

    stats: [
      {
        title: "4,000+",
        description: "research publications.",
      },
      {
        title: "250+ patents",
        description: "granted and published.",
      },
      {
        title: "Dedicated Centre",
        description: "of Excellence in AI & ML with specialised labs.",
      },
      {
        title: "600+ journal articles",
        description: "indexed in Scopus and Web of Science.",
      },
      {
        title: "₹16 Cr+ in research",
        description: "and consultancy grants.",
      },
    ],
  },

  "btech-cse-ai-ml": {
    title: "...",
    description: "...",
    backgroundImage: "...",
    stats: [],
  },

  "btech-cse-data-science": {
    title: "...",
    description: "...",
    backgroundImage: "...",
    stats: [],
  },
};
