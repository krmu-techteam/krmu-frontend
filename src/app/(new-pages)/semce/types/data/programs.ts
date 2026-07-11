// data/programs.ts
export type Program = {
  id: string;
  level: `ug` | `pg` | `doctoral`;
  title: string;
  description: string;
  duration: string;
  format: string;
  eligibility: string;
  image: string;
  link: string;
};

export const programs: Program[] = [
  {
    id: `bajmc`,
    level: `ug`,
    title: `Bachelor of Arts in Journalism & Mass Communication (BAJMC)`,
    description: `A future-ready undergraduate programme focused on journalism, digital media, content creation, and storytelling.`,
    duration: `3 Years / 4 Years (Honours)`,
    format: `Full-time, On Campus`,
    eligibility: `Passed 10+2 or equivalent from a recognised board in any stream with minimum 50% aggregate marks`,
    image: `/wp-content/semce/semce-main/bajmc-1.webp`,
    link: `/programs/bajmc`,
  },
  {
    id: `ma-jmc`,
    level: `pg`,
    title: `Masters of Arts in Journalism
& Mass Communication (MAJMC)`,
    description: `An advanced programme for students and professionals looking to build
expertise in journalism, content strategy, digital media, and communication
leadership.
`,
    duration: `2 Years`,
    format: `Full-time, On Campus`,
    eligibility: `Bachelor’s degree or equivalent from a recognised university with minimum 50% aggregate marks`,
    image: `/wp-content/semce/semce-main/majmc.jpg`,
    link: `/programs/majmc`,
  },
  {
    id: `phd-media`,
    level: `doctoral`,
    title: `PhD in Journalism & Mass Communication `,
    description: `A research-focused doctoral programme exploring journalism, digital communication, media studies, and emerging media practices.`,
    duration: `Minimum 3 Years`,
    format: `Full-time / Part-time`,
    eligibility: `Postgraduate degree or equivalent from a recognised university
                         with minimum 55% marks or CGPA 5.5 on a 10-point scale`,
    image: `/wp-content/semce/semce-main/phdjmc.jpg`,
    link: `/programs/phd-media`,
  },
];
