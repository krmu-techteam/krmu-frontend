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

  note?: string;
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

  "bhmct-hotel-management": {
    heading: (
      <>
        Bachelor of Hotel Management and Catering Technology (B.HMCT.) <br />{" "}
        Programme Scope
      </>
    ),
    image:
      "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Scope_image_3e8b9ecf8c.jpg",
    alt: "scope image",
    description: [
      {
        id: 1,
        content:
          "A Bachelor of Hotel Management and Catering Technology degree opens up a wide range of career opportunities in hotels, resorts, restaurants, airlines, cruise ships, event management companies, and catering services. Graduates can work in specialised roles such as culinary arts, food production, front office operations, housekeeping, event planning, and tourism management. With the hospitality industry growing rapidly both in India and globally, skilled professionals are in high demand, offering well-paid and prestigious career prospects. The degree also equips students with essential soft skills like leadership, communication, problem-solving, and customer service, making them industry-ready. ",
      },
    ],
    skillsTitle: "Skills Developed",

    skillsSubtitle: <>During the B.HMCT. Programme</>,

    skillsDescription: (
      <span>
        A Bachelor of Hotel Management and Catering Technology (B.HMCT.) helps
        students develop many valuable skills, including:
      </span>
    ),

    skillsList: [
      {
        id: 1,
        content: (
          <span>
            <strong>Communication Skills</strong> – Developing effective verbal
            and written communication for interacting with guests, colleagues,
            and stakeholders.
          </span>
        ),
      },
      {
        id: 2,
        content: (
          <span>
            <strong>Leadership and Team Management</strong> – Learning to lead
            teams, delegate responsibilities, and manage hospitality operations
            efficiently.
          </span>
        ),
      },
      {
        id: 3,
        content: (
          <span>
            <strong>Problem-Solving and Decision-Making</strong> – Handling
            guest concerns, operational challenges, and service-related issues
            effectively.
          </span>
        ),
      },
      {
        id: 4,
        content: (
          <span>
            <strong>Business and Financial Management</strong> – Understanding
            budgeting, cost control, revenue management, and hospitality
            business operations.
          </span>
        ),
      },
      {
        id: 5,
        content: (
          <span>
            <strong>Interpersonal and Networking Skills</strong> – Building
            professional relationships with guests, vendors, and industry
            professionals.
          </span>
        ),
      },
      {
        id: 6,
        content: (
          <span>
            <strong>Cultural Awareness and Professional Etiquette</strong> –
            Developing the ability to work with people from diverse cultural
            backgrounds while maintaining professional conduct.
          </span>
        ),
      },
    ],
    note: "These skills prepare graduates for diverse roles across hotels, restaurants, airlines, cruise lines, event management companies, tourism organisations, and other hospitality-related sectors.",
  },

  "bjmc-hons-research": {
    heading: (
      <>
        B.A. (Hons. / Hons. with Research) Journalism & Mass Communication{" "}
        <br /> Programme Scope
      </>
    ),
    image:
      "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Scope_image_b94d8a6f92.jpg",
    alt: "scope image",
    description: [
      {
        id: 1,
        content:
          "This 4-year Honours programme builds on the foundation of the 3-year BJMC, combining core media skills—content creation, video production, journalism, and social media strategy—with an additional year dedicated to advanced specialisation and research. During Years 1–3, you will develop strong practical expertise through studio work, industry projects, portfolio development, and courses aligned with the creator economy. In Year 4, the focus shifts to deeper exploration—you will pursue an advanced specialisation, conduct original research, and complete an extended industry placement. The Honours with Research pathway is designed for students who want to engage with the creator economy at a strategic level—understanding not only how content is created, but also why it resonates, how platforms shape behaviour, and what influences audience engagement. It prepares you for roles in research, consulting, strategy, and leadership within the evolving media landscape.",
      },
    ],
    skillsTitle: "Skills Developed",

    skillsSubtitle: (
      <>
        During the B.A. (Hons. / Hons. with Research) Journalism & Mass
        Communication Programme
      </>
    ),

    skillsDescription: (
      <span>
        Over the course of 4 years, students develop journalistic, creative, and
        technical skills required in the media and communication industry, such
        as:
      </span>
    ),

    skillsList: [
      {
        id: 1,
        content: (
          <span>
            Strong reporting, editing, and writing skills across print,
            broadcast, and digital journalism formats.
          </span>
        ),
      },
      {
        id: 2,
        content: (
          <span>
            Practical knowledge of media production tools, including digital
            photography, video editing, radio programme production, and
            television journalism.
          </span>
        ),
      },
      {
        id: 3,
        content: (
          <span>
            Understanding of media ethics, media laws, and media literacy that
            helps students report and communicate responsibly.
          </span>
        ),
      },
      {
        id: 4,
        content: (
          <span>
            Skills in digital media marketing, advertising, and integrated
            marketing communication for building brand and audience engagement.
          </span>
        ),
      },
      {
        id: 5,
        content: (
          <span>
            Capabilities in public relations, corporate communication, and event
            management that support careers in strategic communication.
          </span>
        ),
      },
    ],
  },

  bjmc: {
    heading: (
      <>
        B.A. (Journalism & Mass Communication)
        <br /> Programme Scope
      </>
    ),
    image:
      "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Scope_image_aa1c192981.jpg",
    alt: "scope image",
    description: [
      {
        id: 1,
        content:
          "The scope of the BJMC course (Bachelor of Journalism and Mass Communication) is vast and filled with exciting opportunities across media and communication industries. Graduates can build careers in journalism, digital media, advertising, public relations, filmmaking, television, and event management, while also exploring emerging fields like content creation, digital marketing, and corporate communications. With the growing influence of social media, OTT platforms, and global news networks, the demand for skilled media professionals is higher than ever. ",
      },
    ],
    skillsTitle: "Skills Developed",

    skillsSubtitle: (
      <>During the B.A. (Journalism & Mass Communication) Programme</>
    ),

    skillsDescription: (
      <span>
        The three-year B.A. (Journalism & Mass Communication) degree program
        provides students with both an educational foundation in journalistic
        writing/reporting/editing for print, broadcast and digital platforms, as
        well as hands-on development of the technical/on-camera skills required
        throughout the Media Communications Industry.
      </span>
    ),

    skillsList: [
      {
        id: 1,
        content: (
          <span>
            Learning the basics of fact-finding and ethics when it comes to
            newsgathering.
          </span>
        ),
      },
      {
        id: 2,
        content: (
          <span>
            Working in practical settings for classroom instruction on
            video/audio editing/graphic design/multimedia storytelling utilising
            industry-standard software/equipment.
          </span>
        ),
      },
      {
        id: 3,
        content: (
          <span>
            Training in a live-broadcast setting while working as a DJ or
            podcaster/anchoring news with professional production control
            rooms/radio rooms/video-audio labs.
          </span>
        ),
      },
      {
        id: 4,
        content: (
          <span>
            Learning about how to create content digitally/socially/for the
            web/and for OTT; preparing students for the inevitable transition
            away from traditional media towards digital-first media.
          </span>
        ),
      },
      {
        id: 5,
        content: (
          <span>
            Developing communication/public relations/corporate messaging skills
            through coursework in advertising/pr/modern communication theory,
            along with creating a professional portfolio of their
            published/produced work.
          </span>
        ),
      },
    ],
  },

  "bachelor-of-design-b-des-fashion-design": {
    heading: (
      <>
        B.Des. (Hons./ Hons. with Research) Fashion Design
        <br /> Programme Scope
      </>
    ),
    image:
      "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Scope_image_1414f624c8.jpg",
    alt: "scope image",
    description: [
      {
        id: 1,
        content:
          "The B.Des. (Hons./ Hons. with Research) Fashion Design programme opens diverse career opportunities in the dynamic global fashion and lifestyle industry. Graduates can pursue roles as fashion designers, textile designers, costume designers, fashion illustrators, trend forecasters, fashion merchandisers, stylists, entrepreneurs, and design consultants. With the growing focus on sustainability and innovation, they can also explore careers in eco-fashion, digital fashion, and luxury brand management. The programme equips students with design thinking, technical expertise, and industry exposure, preparing them for employment with top fashion houses, retail brands, e-commerce platforms, and media, or to launch their own fashion labels and startups. ",
      },
    ],
    skillsTitle: "Skills Developed",

    skillsSubtitle: (
      <>
        During the B.Des. (Hons. / Hons. with Research) Fashion Design Programme
      </>
    ),

    skillsDescription: (
      <span>
        Within the span of 4 years, students develop the creative, technical,
        design, and professional skills required to build successful careers in
        the fashion industry and related creative fields, such as:
      </span>
    ),

    skillsList: [
      {
        id: 1,
        content: (
          <span>
            Develop expertise in fashion illustration, textiles, garment
            construction, pattern making, draping, colour theory, and design
            principles.
          </span>
        ),
      },
      {
        id: 2,
        content: (
          <span>
            Gain proficiency in apparel development, surface techniques, CAD
            tools, digital design, and contemporary fashion technologies.
          </span>
        ),
      },
      {
        id: 3,
        content: (
          <span>
            Build hands-on experience through design studios, internships,
            workshops, fashion shows, live projects, and portfolio development.
          </span>
        ),
      },
      {
        id: 4,
        content: (
          <span>
            Enhance skills in design research, trend analysis, innovation,
            visual communication, and collection development.
          </span>
        ),
      },
      {
        id: 5,
        content: (
          <span>
            Understand sustainability, fashion business, branding,
            merchandising, and global fashion practices to pursue diverse career
            opportunities.
          </span>
        ),
      },
    ],
  },

  "barch-architecture": {
    heading: (
      <>
        Bachelor of Architecture (B. Arch)
        <br /> Programme Scope
      </>
    ),
    image:
      "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Scope_image_18bee0fcaa.jpg",
    alt: "scope image",
    description: [
      {
        id: 1,
        content:
          "The scope of a Bachelor of Architecture (B. Arch) is broad, offering a wide range of career opportunities across the public and private sectors. Graduates can build careers with architectural firms, construction companies, urban development authorities, real estate developers, or establish their own architectural and design practices. The programme equips students with the knowledge and skills required for roles such as architect, interior designer, urban planner, landscape architect, and sustainable design consultant. As the demand for environmentally responsible and technology-driven infrastructure continues to grow, emerging specialisations such as green architecture, digital architecture, and Building Information Modelling (BIM) are creating exciting new career prospects for architecture graduates.",
      },
    ],
    skillsTitle: "Skills Developed",

    skillsSubtitle: <>During the B. Arch Programme</>,

    skillsDescription: (
      <span>
        Within the span of 5 years, students develop the technical, creative,
        analytical, and professional skills required for successful careers in
        architecture and the built environment, such as:
      </span>
    ),

    skillsList: [
      {
        id: 1,
        content: (
          <span>
            Strong understanding of architectural design principles, building
            construction, structural systems, environmental planning, and
            spatial design, enabling the development of functional, sustainable,
            and aesthetically compelling architectural solutions.
          </span>
        ),
      },
      {
        id: 2,
        content: (
          <span>
            Knowledge of architectural drafting, computer-aided design (CAD),
            Building Information Modelling (BIM), 3D visualisation, building
            services, construction technologies, and sustainable design
            practices to create innovative and efficient built environments that
            respond to contemporary social and environmental challenges.
          </span>
        ),
      },
      {
        id: 3,
        content: (
          <span>
            Extensive practical exposure through architectural design studios,
            site visits, construction workshops, documentation studies, measured
            drawings, live projects, and professional internships provides
            hands-on experience in conceptual design, technical detailing,
            project execution, and collaboration with multidisciplinary teams.
          </span>
        ),
      },
      {
        id: 4,
        content: (
          <span>
            Critical thinking, creative problem-solving, design innovation,
            communication, research, and presentation skills are developed
            through studio projects, design critiques, architectural research,
            model making, and digital visualisation, enabling students to
            address complex design challenges with confidence and creativity.
          </span>
        ),
      },
      {
        id: 5,
        content: (
          <span>
            Understanding of professional ethics, building regulations, project
            management, urban planning, heritage conservation, and sustainable
            development equips students with the skills required to manage
            architectural projects responsibly, collaborate effectively with
            clients and industry professionals, and contribute meaningfully to
            the creation of resilient, inclusive, and future-ready built
            environments.
          </span>
        ),
      },
    ],
  },

  "bfa-fine-arts": {
    heading: (
      <>
        Bachelor of Fine Arts (BFA)
        <br /> Programme Scope
      </>
    ),
    image:
      "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Scope_image_e452610db9.jpg",
    alt: "scope image",
    description: [
      {
        id: 1,
        content:
          "The scope of a BFA programme is vast and ever-evolving, offering graduates a wide array of opportunities in both traditional and modern creative industries. Bachelor of Fine Arts degree holders can build careers in graphic design, advertising, animation, digital media, photography, fine arts, art direction, and visual communication. With the rise of digital platforms and content creation, skilled artists are in high demand in fields like UX/UI design, game design, film production, and illustration. Graduates can also pursue higher education such as MFA or design specialisations, become independent artists, or even establish their own creative studios or galleries. ",
      },
    ],
    skillsTitle: "Skills Developed",

    skillsSubtitle: <> During the BFA Programme</>,

    skillsDescription: (
      <span>
        Within the span of 4 years, students develop the creative, technical,
        conceptual, and professional skills required for successful careers in
        fine arts and related creative fields, such as:
      </span>
    ),

    skillsList: [
      {
        id: 1,
        content: (
          <span>
            Strong foundation in artistic principles, including drawing,
            painting, sculpture, composition, colour theory, design
            fundamentals, visual aesthetics, and art history, enabling the
            creation of expressive, meaningful, and visually compelling
            artworks.
          </span>
        ),
      },
      {
        id: 2,
        content: (
          <span>
            Proficiency in various artistic techniques and media such as
            printmaking, illustration, photography, digital art, mixed media,
            installation art, and visual storytelling, along with familiarity
            with contemporary tools and emerging creative technologies.
          </span>
        ),
      },
      {
        id: 3,
        content: (
          <span>
            Extensive practical exposure through studio practice, art workshops,
            exhibitions, live projects, museum and gallery visits, field
            studies, and internships provides hands-on experience in conceptual
            development, experimentation, portfolio building, and professional
            presentation of artwork.
          </span>
        ),
      },
      {
        id: 4,
        content: (
          <span>
            Critical thinking, creativity, visual communication, conceptual
            development, research, and presentation skills are enhanced through
            studio critiques, independent projects, collaborative assignments,
            and art-based research, enabling students to express ideas with
            originality and depth.
          </span>
        ),
      },
      {
        id: 5,
        content: (
          <span>
            Understanding of art practices in cultural, historical, and
            contemporary contexts, along with knowledge of professional ethics,
            exhibition practices, curation, and the functioning of galleries and
            creative industries, equips students to build sustainable careers as
            artists and creative professionals while contributing meaningfully
            to the evolving art world.
          </span>
        ),
      },
    ],
  },

  "ba-hons-political-science": {
    heading: (
      <>
        B.A. (Hons.) Political Science
        <br /> Programme Scope
      </>
    ),
    image:
      "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Scope_image_e6814987bd.jpg",
    alt: "scope image",
    description: [
      {
        id: 1,
        content:
          "The B.A. (Hons.) Political Science programme provides students with a strong foundation in political theory, governance, international relations, and public policy, while fostering critical thinking, analytical skills, and effective communication. Graduates are well-prepared for diverse career paths, including government and civil services, diplomacy, research and academia, media and journalism, policy advocacy, and corporate roles such as political risk analysis and consultancy. The programme also lays the groundwork for advanced studies in Political Science, Public Policy, International Relations, Law, and other interdisciplinary fields, enabling students to make a meaningful impact in both national and global arenas. ",
      },
    ],
    skillsTitle: "Skills Developed",

    skillsSubtitle: <> During the B.A. (Hons.) Political Science</>,

    skillsDescription: (
      <span>
        A B.A. (Hons.) Political Science programme equips students with the
        analytical, research, leadership, and communication skills required to
        understand political systems, governance, public policy, and global
        affairs. These competencies prepare graduates for careers in government,
        public administration, international organisations, media, research,
        law, public policy, and corporate sectors.
      </span>
    ),

    skillsList: [
      {
        id: 1,
        content: (
          <span>
            <strong>Political & Policy Analysis:</strong> Develop the ability to
            analyse political systems, public policies, governance models, and
            contemporary political issues from national and global perspectives.
          </span>
        ),
      },
      {
        id: 2,
        content: (
          <span>
            <strong>Research Skills:</strong> Learn qualitative and quantitative
            research methods, data interpretation, report writing, and policy
            research through projects and case studies.
          </span>
        ),
      },
      {
        id: 3,
        content: (
          <span>
            <strong>Critical Thinking & Problem-Solving:</strong> Evaluate
            political developments, identify societal challenges, and propose
            evidence-based solutions using analytical reasoning.
          </span>
        ),
      },
      {
        id: 4,
        content: (
          <span>
            <strong>Communication & Public Speaking:</strong> Strengthen written
            and verbal communication skills through debates, presentations,
            discussions, and policy briefs.
          </span>
        ),
      },
      {
        id: 5,
        content: (
          <span>
            <strong>Leadership & Decision-Making:</strong> Build leadership
            qualities, strategic thinking, negotiation, and decision-making
            abilities essential for public administration and organisational
            roles.
          </span>
        ),
      },
    ],
  },

  "b-a-hons-hons-with-research-psychology": {
    heading: (
      <>
        B.A. (Hons./ Hons. with Research) Psychology
        <br /> Programme Scope
      </>
    ),
    image:
      "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Scope_image_3598ba31d0.jpg",
    alt: "scope image",
    description: [
      {
        id: 1,
        content:
          "The B.A. (Hons./ Hons. with Research) Psychology offers vast and diverse career opportunities in today’s evolving world. Graduates can pursue careers in counselling, clinical psychology, organisational behaviour, human resource management, education, rehabilitation, mental health services, and social work. With growing awareness of mental health, opportunities in hospitals, NGOs, schools, corporate wellness programmes, and government organisations are steadily expanding. Additionally, the degree opens global pathways for students aspiring to work in counselling, behavioural therapy, forensic psychology, sports psychology, and industrial psychology. With mental health professionals being in high demand worldwide, psychology graduates have opportunities to make a lasting social and professional impact both in India and abroad.",
      },
    ],
    skillsTitle: "Skills Developed",

    skillsSubtitle: (
      <> During the B.A. (Hons./ Hons. with Research) Psychology</>
    ),

    skillsDescription: (
      <span>
        A B.A. (Hons./Hons. with Research) Psychology programme equips students
        with a strong foundation in psychological science while developing
        advanced research, analytical, and interpersonal skills. Through
        classroom learning, practical training, internships, and research
        projects, students gain the competencies required for careers in mental
        health, education, human resources, research, corporate organisations,
        and allied fields.
      </span>
    ),

    skillsList: [
      {
        id: 1,
        content: (
          <span>
            Psychological Assessment Skills: Learn the fundamentals of
            psychological testing, behavioural observation, psychometric
            assessment, and interpretation of human behaviour.
          </span>
        ),
      },
      {
        id: 2,
        content: (
          <span>
            Research & Scientific Inquiry: Develop expertise in research
            methodology, experimental design, data collection, statistical
            analysis, and academic writing through independent research
            projects.
          </span>
        ),
      },
      {
        id: 3,
        content: (
          <span>
            Critical Thinking & Problem-Solving: Build the ability to evaluate
            psychological theories, analyse behavioural patterns, and develop
            evidence-based solutions to real-world challenges.
          </span>
        ),
      },
      {
        id: 4,
        content: (
          <span>
            Counselling & Interpersonal Skills: Strengthen active listening,
            empathy, rapport building, and communication skills essential for
            working with individuals and groups.
          </span>
        ),
      },
      {
        id: 5,
        content: (
          <span>
            Behavioural Analysis: Gain the ability to understand cognitive,
            emotional, developmental, and social aspects of human behaviour
            across different settings.
          </span>
        ),
      },
    ],
  },

  "ba-hons-hons-economics-research": {
    heading: (
      <>
        B.A. (Hons. / Hons. with Research) Economics
        <br /> Programme Scope
      </>
    ),
    image:
      "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Scope_image_dc59ab7319.jpg",
    alt: "scope image",
    description: [
      {
        id: 1,
        content:
          "The B.A. (Hons. / Hons. with Research) Economics programme offers a wide and versatile scope, preparing students for diverse career paths and advanced academic pursuits in an increasingly data-driven and policy-oriented global economy. The programme builds strong foundations in economic theory, quantitative techniques, research methodology, and real-world economic applications. Graduates develop the ability to analyze markets, public policies, financial systems, and socio-economic issues at national and global levels. The Honours with Research track further enhances analytical depth, critical thinking, and independent research skills, making students well-prepared for higher studies and research-intensive roles.",
      },
    ],
    skillsTitle: "Skills Developed",

    skillsSubtitle: (
      <>During the B.A. (Hons. / Hons. with Research) Economics</>
    ),

    skillsDescription: (
      <span>
        During a B.A. (Hons. / Hons. with Research) Economics, students develop
        a wide range of academic, analytical, and professional skills that
        prepare them for careers across various industries. Some of the key
        skills include:
      </span>
    ),

    skillsList: [
      {
        id: 1,
        content: (
          <span>
            <strong>Analytical Thinking:</strong> Evaluating complex problems
            and making informed, evidence-based decisions.
          </span>
        ),
      },
      {
        id: 2,
        content: (
          <span>
            <strong>Quantitative Skills:</strong> Using mathematics, statistics,
            and econometrics to analyse economic and financial data.
          </span>
        ),
      },
      {
        id: 3,
        content: (
          <span>
            <strong>Research Skills:</strong> Conducting independent research,
            collecting data, and preparing research reports and projects.
          </span>
        ),
      },
      {
        id: 4,
        content: (
          <span>
            <strong>Data Interpretation:</strong> Analysing datasets,
            identifying trends, and drawing meaningful insights for
            decision-making.
          </span>
        ),
      },
      {
        id: 5,
        content: (
          <span>
            <strong>Critical Thinking:</strong> Assessing economic policies,
            market behaviour, and global economic developments from multiple
            perspectives.
          </span>
        ),
      },
      {
        id: 6,
        content: (
          <span>
            <strong>Problem-Solving:</strong> Developing practical solutions to
            business, financial, and economic challenges.
          </span>
        ),
      },
      {
        id: 7,
        content: (
          <span>
            <strong>Communication Skills:</strong> Presenting ideas clearly
            through reports, presentations, debates, and discussions.
          </span>
        ),
      },
    ],
  },

  "ba-hons-psychology": {
    heading: (
      <>
        B.A. (Hons.) Psychology
        <br /> Programme Scope
      </>
    ),
    image:
      "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Scope_image_4207798623.jpg",
    alt: "scope image",
    description: [
      {
        id: 1,
        content:
          "The BA Hons psychology programme offers diverse career and academic opportunities in fields like mental health, education, human resources, and social work. Graduates can pursue higher studies such as MA Psychology, MSW, or specialised diplomas to become counsellors, psychologists, or researchers. With growing awareness around mental well-being, the demand for psychology professionals is increasing across sectors like healthcare, corporate wellness, NGOs, and government services making it a promising and impactful career path.",
      },
    ],
    skillsTitle: "Skills Developed",

    skillsSubtitle: <> During the B.A. (Hons.) Psychology</>,

    skillsDescription: (
      <span>
        A <strong> B.A. (Hons.) Psychology</strong> programme helps students
        develop a strong combination of scientific, analytical, interpersonal,
        and professional skills. These competencies prepare graduates for
        careers in mental health, education, human resources, research,
        corporate organisations, and social services.
      </span>
    ),

    skillsList: [
      {
        id: 1,
        content: (
          <span>
            <strong>Psychological Assessment Skills:</strong> Learn the
            fundamentals of psychological testing, observation, behavioural
            assessment, and interpreting human behaviour.
          </span>
        ),
      },
      {
        id: 2,
        content: (
          <span>
            <strong>Critical Thinking & Problem-Solving:</strong> Develop the
            ability to analyse psychological issues, evaluate evidence, and
            propose effective solutions to real-world challenges.
          </span>
        ),
      },
      {
        id: 3,
        content: (
          <span>
            <strong>Research & Data Analysis:</strong> Gain expertise in
            research methodologies, survey design, data collection, statistical
            analysis, and report writing.
          </span>
        ),
      },
      {
        id: 4,
        content: (
          <span>
            <strong>Communication & Active Listening:</strong> Strengthen verbal
            and written communication skills while learning to listen
            empathetically and interact effectively with individuals and groups.
          </span>
        ),
      },
      {
        id: 5,
        content: (
          <span>
            <strong>Counselling & Interpersonal Skills:</strong> Build the
            interpersonal skills required to understand emotions, provide
            guidance, and establish meaningful professional relationships.
          </span>
        ),
      },
    ],
  },

  "ba-hons-english-research": {
    heading: (
      <>
        B.A. (Hons. / Hons. with Research) English
        <br /> Programme Scope
      </>
    ),
    image:
      "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Scope_image_e017ebcac3.jpg",
    alt: "scope image",
    description: [
      {
        id: 1,
        content:
          "A B.A. (Hons./ Hons. with Research) in English offers diverse career opportunities across creative, academic, and professional fields. Graduates can pursue roles in content writing, editing, publishing, journalism, advertising, public relations, digital media, and corporate communications. With strong analytical and communication skills, they are also valued in fields like civil services, teaching, and training. Higher studies options include M.A. in English, Comparative Literature, Linguistics, Journalism, Mass Communication, or MBA, opening doors to specialised careers. Those opting for research can build careers in academia, cultural studies, literary criticism, or linguistics research.",
      },
    ],
    skillsTitle: "Skills Developed",

    skillsSubtitle: <>During the B.A. (Hons. / Hons. with Research) English</>,

    skillsDescription: (
      <span>
        AA B.A. (Hons. / Hons. with Research) English programme equips students
        with a blend of literary, analytical, creative, and professional skills
        that are valuable across industries. Throughout the programme, students
        develop:
      </span>
    ),

    skillsList: [
      {
        id: 1,
        content: (
          <span>
            Advanced Communication Skills: Express ideas clearly and effectively
            through written, verbal, and interpersonal communication.
          </span>
        ),
      },
      {
        id: 2,
        content: (
          <span>
            Critical Thinking and Analytical Skills: Interpret literary texts,
            evaluate arguments, and analyse social, cultural, and historical
            contexts.
          </span>
        ),
      },
      {
        id: 3,
        content: (
          <span>
            Creative Writing Skills: Develop expertise in storytelling,
            scriptwriting, poetry, fiction, blogging, and other forms of
            creative expression.
          </span>
        ),
      },
      {
        id: 4,
        content: (
          <span>
            Research and Academic Writing: Learn research methodologies,
            academic writing, citation techniques, and independent research
            skills.
          </span>
        ),
      },
      {
        id: 5,
        content: (
          <span>
            Editing and Proofreading: Strengthen grammar, language accuracy,
            editing techniques, and attention to detail.
          </span>
        ),
      },
    ],
  },

  "bachelor-of-physiotherapy-bpt": {
    heading: (
      <>
        Bachelor of Physiotherapy (BPT)
        <br /> Programme Scope
      </>
    ),
    image:
      "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Scope_image_7e1ae2469b.jpg",
    alt: "scope image",
    description: [
      {
        id: 1,
        content:
          "A Bachelor of Physiotherapy (BPT) provides students with opportunities to pursue higher education and specialise in various areas of physiotherapy. Graduates are also eligible to pursue postgraduate programmes in fields such as Hospital Administration, Business Management, Public Health Management, and other allied disciplines. As physiotherapists, they play a vital role in improving people's quality of life by restoring mobility, managing pain, preventing injuries, and promoting overall health and well-being. The programme also offers extensive clinical training, internships, and community outreach activities, enabling students to gain valuable hands-on experience and develop the practical skills required for a successful professional career.  ",
      },
    ],
    skillsTitle: "Skills Developed",

    skillsSubtitle: <>During the BPT Programme</>,

    skillsDescription: (
      <span>
        Within the span of 5 years, students develop scientific, clinical, and
        patient-care skills required in the healthcare and rehabilitation
        sectors, such as:
      </span>
    ),

    skillsList: [
      {
        id: 1,
        content: (
          <span>
            Strong understanding of human anatomy, physiology, biomechanics, and
            kinesiology, enabling effective assessment and management of
            movement-related disorders.
          </span>
        ),
      },
      {
        id: 2,
        content: (
          <span>
            Knowledge of modern physiotherapy techniques, including manual
            therapy, therapeutic exercise, electrotherapy, rehabilitation
            protocols, and evidence-based clinical practices for improving
            patient outcomes.
          </span>
        ),
      },
      {
        id: 3,
        content: (
          <span>
            Extensive clinical training through hospital postings,
            rehabilitation centres, and supervised practical sessions provides
            hands-on experience in assessing, diagnosing, and treating patients
            across various medical conditions.
          </span>
        ),
      },
      {
        id: 4,
        content: (
          <span>
            Critical thinking, clinical reasoning, and problem-solving skills
            are developed through patient case studies, treatment planning,
            functional assessments, and rehabilitation programme design tailored
            to individual patient needs.
          </span>
        ),
      },
      {
        id: 5,
        content: (
          <span>
            Understanding of healthcare ethics, patient communication,
            interdisciplinary teamwork, and rehabilitation management equips
            students with professional, leadership, and patient-centred care
            skills essential for successful careers in physiotherapy and allied
            healthcare settings.
          </span>
        ),
      },
    ],
  },
};
