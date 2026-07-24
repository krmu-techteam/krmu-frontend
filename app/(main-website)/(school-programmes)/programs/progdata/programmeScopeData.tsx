import { ReactNode } from "react";

export interface ProgrammeScopeData {
  heading: ReactNode;
  image: string;
  alt: string;

  description: {
    id: number;
    content: string;
  }[];

  skillsTitle: string;
  skillsSubtitle: ReactNode;
  skillsDescription: ReactNode;

  skillsList: {
    id: number;
    content: ReactNode;
  }[];
}

export const programmeScopeData: Record<string, ProgrammeScopeData> = {
  "b-tech-cse": {
    heading: (
      <>
        B.Tech. CSE <br /> Programme Scope
      </>
    ),

    image:
      "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/image_635_0916216e9a.jpg",
    alt: "B.Tech. CSE Programme Scope",

    description: [
      {
        id: 1,
        content:
          "The B.Tech. CSE programme prepares students to pursue careers that require innovative problem-solving through computational techniques. Students can build successful careers in some of the fastest-growing fields in technology, including software engineering, artificial intelligence, data science, cyber security, robotics, and more.",
      },
      {
        id: 2,
        content:
          "In addition, students can opt for advanced or specialised studies at the postgraduate and doctoral levels for teaching and research-based careers in India and abroad, and even start their own ventures.",
      },
    ],

    skillsTitle: "Skills Developed",

    skillsSubtitle: (
      <>
        During the B.Tech. <br /> CSE Programme
      </>
    ),

    skillsDescription: (
      <span>
        Within the span of 4 years, students{" "}
        <strong className="text-white font-bold">
          develop technical and professional skills
        </strong>{" "}
        required by employers in the tech and engineering sectors, such as:
      </span>
    ),

    skillsList: [
      {
        id: 1,
        content: (
          <span>
            <strong className="text-white font-bold">
              Artificial Intelligence
            </strong>{" "}
            and{" "}
            <strong className="text-white font-bold">Machine Learning</strong>{" "}
            engineering for modern-day applications and system development.
          </span>
        ),
      },
      {
        id: 2,
        content: (
          <span>
            DevOps workflows, cyber security awareness, and secure coding
            practices are embedded throughout the curriculum.
          </span>
        ),
      },
      {
        id: 3,
        content: (
          <span>
            Students also engage in lab work and project deliverables, which
            formulate team-based development skills with{" "}
            <strong className="text-white font-bold">
              agile methodologies
            </strong>{" "}
            to stay competitive in the career.
          </span>
        ),
      },
      {
        id: 4,
        content: (
          <span>
            Analytical and problem-solving skills are{" "}
            <strong className="text-white font-bold">sharpened</strong> through{" "}
            <strong className="text-white font-bold">
              competitive programming
            </strong>{" "}
            exposure and project-based learning, which accounts for 15% of total
            programme credits at KRMU.
          </span>
        ),
      },
      {
        id: 5,
        content: (
          <span>
            Proficiency in multiple programming languages like C++, Java, and
            Python with an emphasis on writing{" "}
            <strong className="text-white font-bold">production-grade</strong>{" "}
            code using modern development frameworks.
          </span>
        ),
      },
    ],
  },

  "bsc-hons-agriculture": {
    heading: (
      <>
        B.Sc. (Hons.) Agriculture <br /> Programme Scope
      </>
    ),
    image:
      "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Scope_image_0041cff032.jpg",
    alt: "scope image",
    description: [
      {
        id: 1,
        content:
          "A B.Sc. (Hons.) Agriculture degree offers vast career opportunities in government, private, research, and entrepreneurial sectors. Graduates can work as Agricultural Officers, Field Officers, or in banking and finance roles with organisations like NABARD, as well as in ICAR and state agricultural departments. The private sector offers roles in agri-based industries, food processing, supply chain management, and agri-tech startups focusing on innovations like precision farming and drones. Many pursue higher studies or research in specialisations such as agronomy, horticulture, and soil science, while others venture into entrepreneurship through organic farming, hydroponics, or agribusiness startups. ",
      },
    ],
    skillsTitle: "Skills Developed",

    skillsSubtitle: (
      <>
        During the B.Sc. (Hons.) <br /> Agriculture Programme
      </>
    ),

    skillsDescription: (
      <span>
        Within the span of 4 years, students develop scientific, technical, and
        field-based skills required in the agriculture and allied sectors, such
        as:
      </span>
    ),

    skillsList: [
      {
        id: 1,
        content: (
          <span>
            Strong understanding of crop production systems, soil health
            management, irrigation techniques, and sustainable farming practices
            for improving agricultural productivity.
          </span>
        ),
      },
      {
        id: 2,
        content: (
          <span>
            Knowledge of modern agricultural technologies, including precision
            farming, agri-biotechnology, organic farming, and climate-smart
            agriculture practices.
          </span>
        ),
      },
      {
        id: 3,
        content: (
          <span>
            Exposure to field-based training, farm experiments, and practical
            lab work enables students to gain hands-on experience in real
            agricultural environments and rural settings.
          </span>
        ),
      },
      {
        id: 4,
        content: (
          <span>
            Analytical and problem-solving skills developed through crop
            planning, pest and disease management studies, and project-based
            learning focused on real-world agricultural challenges.
          </span>
        ),
      },
      {
        id: 5,
        content: (
          <span>
            Understanding of agribusiness operations, agricultural economics,
            and supply chain systems helps students develop managerial and
            entrepreneurial capabilities in the agriculture sector.
          </span>
        ),
      },
    ],
  },

  "bachelor-of-education-b-ed": {
    heading: (
      <>
        Bachelor of Education (B.Ed.) <br /> Programme Scope
      </>
    ),
    image:
      "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Scope_image_75363efa7b.jpg",
    alt: "scope image",
    description: [
      {
        id: 1,
        content:
          "The future scope of B. Ed. in India is bright, promising, yet challenging. Since the education sector is one of continuous evolution, graduates with a B. Ed. will hold an important place in shaping the future of education. If they keep updating their knowledge about current trends, welcome technology, and continually work at developing their skills further, they will have much to contribute to any educational setup.It helps enable them to make a more positive contribution in a variety of educational settings. It helps enable them to make a more positive contribution in a variety of educational settings.",
      },
    ],
    skillsTitle: "Skills Developed",

    skillsSubtitle: (
      <>
        During the B.Ed.
        <br /> Programme
      </>
    ),

    skillsDescription: (
      <span>
        Within the span of the programme, students develop the pedagogical,
        professional, and classroom management skills required for successful
        careers in the education sector, such as:
      </span>
    ),

    skillsList: [
      {
        id: 1,
        content: (
          <span>
            Strong understanding of educational psychology, learning theories,
            child development, and curriculum design, enabling effective
            planning and delivery of learner-centred instruction.
          </span>
        ),
      },
      {
        id: 2,
        content: (
          <span>
            Knowledge of modern teaching methodologies, assessment techniques,
            educational technology, inclusive education practices, and classroom
            management strategies to create engaging and effective learning
            environments.
          </span>
        ),
      },
      {
        id: 3,
        content: (
          <span>
            Extensive teaching practice through school internships, classroom
            observations, lesson planning, and supervised teaching sessions
            provides hands-on experience in managing classrooms, delivering
            lessons, and evaluating student learning.
          </span>
        ),
      },
      {
        id: 4,
        content: (
          <span>
            Critical thinking, reflective practice, communication, and
            problem-solving skills are developed through lesson planning,
            educational research, classroom-based projects, and the design of
            innovative teaching-learning strategies tailored to diverse learner
            needs.
          </span>
        ),
      },
      {
        id: 5,
        content: (
          <span>
            Understanding of educational ethics, professional responsibilities,
            leadership, collaboration, and school administration equips students
            with the skills required to foster inclusive learning environments,
            work effectively with stakeholders, and contribute meaningfully to
            the teaching profession.
          </span>
        ),
      },
    ],
  },
};
