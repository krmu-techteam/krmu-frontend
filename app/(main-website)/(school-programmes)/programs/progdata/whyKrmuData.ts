// whyKrmuData.ts

export interface ComparisonRow {
  parameter: string;
  krmu: string;
  typical: string;
}

export interface WhyKrmuData {
  title: string;
  description: string;
  comparisonTitle: string;
  parameterHeader: string;
  krmuHeader: string;
  typicalHeader: string;
  comparisonData: ComparisonRow[];
  bottomDescription1: string;
  bottomDescription2?: string;
}

export const whyKrmuData: Record<string, WhyKrmuData> = {
  "b-tech-cse": {
    title: "Why Choose K.R. Mangalam University for B.Tech. CSE?",

    description:
      "Pursuing a B.Tech. CSE programme is not just about earning a degree; it is about building technical and professional skills with industry exposure and practical experience, which are essential for the highly competitive job market.",

    comparisonTitle:
      "A comparison of key academic, industry, and career-focused parameters that students consider while selecting a B.Tech. CSE programme.",

    parameterHeader: "Parameter",

    krmuHeader: "K.R. Mangalam University",

    typicalHeader: "Typical Private University in NCR",

    comparisonData: [
      {
        parameter: "Highest placement package",
        krmu: "56.6 LPA",
        typical: "8-20 LPA",
      },
      {
        parameter: "Campus recruiters",
        krmu: "800+ companies",
        typical: "100-300 companies",
      },
      {
        parameter: "Curriculum",
        krmu: "Industry-aligned and regularly updated",
        typical: "Generic AICTE syllabus",
      },
      {
        parameter: "Research output",
        krmu: "600+ Scopus/WoS papers, 100+ patents",
        typical: "Minimal or unreported",
      },
      {
        parameter: "Project-based credits",
        krmu: "15% of total credits",
        typical: "None or Typically 5-8%",
      },
      {
        parameter: "International exposure",
        krmu: "*Fully sponsored 2-week European summer school",
        typical: "Rarely offered",
      },
      {
        parameter: "Competitive programming lab",
        krmu: "Dedicated facility for product-company preparation",
        typical: "Not a standard offering",
      },
      {
        parameter: "Mentorship",
        krmu: "CTOs & startup founders as regular mentors",
        typical: "Faculty-only mentorship",
      },
      {
        parameter: "Industry certifications included",
        krmu: "Microsoft Azure AI, GCP Ecosystem, EC-Council CEH-AI pathways",
        typical: "Rarely included in the curriculum",
      },
      {
        parameter: "Location",
        krmu: "Sohna Road, Gurugram (near India's second largest IT hub)",
        typical: "Varies, often suburban or Tier-2",
      },
      {
        parameter: "Scholarship available",
        krmu: "Up to 100% for toppers and sports achievers",
        typical: "Limited, highly competitive",
      },
    ],

    bottomDescription1:
      "Located in Gurgaon, KRMU offers close proximity to corporate IT and business hubs in Gurugram such as DLF Cyber City, DLF Cyber Park, International Tech Park (Sec 59), Candor Tech Space and Vatika Business Park. This accessibility provides students with greater internship and networking opportunities and offers smooth hiring pipelines with Google, Microsoft, IBM, and hundreds of multinational tech companies.",

    bottomDescription2:
      "Whether your goal is securing a placement with leading technology companies, pursuing higher studies, contributing to research, or building a startup, the B.Tech. programmes are designed to help you develop the skills and experience required to achieve it.",
  },

  "bsc-hons-agriculture": {
    title:
      "Why K.R. Mangalam University for B.Sc. (Hons.) Agriculture in 2026–27?",

    description:
      "Pursuing a B.Sc. (Hons.) Agriculture programme is not just about earning a degree; it is about building scientific understanding, practical farming expertise, and industry-ready skills required to address the evolving challenges of modern agriculture and food systems.",

    comparisonTitle:
      "A comparison of key academic, field-based learning, industry exposure, and career-focused parameters that students consider while selecting a B.Sc. (Hons.) Agriculture programme.",

    parameterHeader: "Parameter",

    krmuHeader: "K.R. Mangalam University",

    typicalHeader: "Typical Private University in NCR",

    comparisonData: [
      {
        parameter: "Highest placement package",
        krmu: "56.6 LPA",
        typical: "8-20 LPA",
      },
      {
        parameter: "Campus recruiters",
        krmu: "800+ companies",
        typical: "100-300 companies",
      },
      {
        parameter: "Curriculum",
        krmu: "Industry-aligned and regularly updated",
        typical: "Generic AICTE syllabus",
      },
      {
        parameter: "Research output",
        krmu: "600+ Scopus/WoS papers, 100+ patents",
        typical: "Minimal or unreported",
      },
      {
        parameter: "Field training & farm exposure",
        krmu: "Dedicated instructional farms, lab-based learning, and rural field visits for hands-on training",
        typical: "Limited access to structured farm-based training",
      },
      {
        parameter: "Mentorship",
        krmu: "Guidance from agriculture experts, researchers, agribusiness professionals & industry practitioners",
        typical: "Primarily faculty-based mentorship",
      },
      {
        parameter: "Location advantage",
        krmu: "Gurugram – Access to Agri-Tech Firms & Agri-Business Hubs",
        typical: "Often Located in Rural / Less Industrial Areas",
      },
      {
        parameter: "Placement Record",
        krmu: "92% Placement Rate",
        typical: "55-65% Placement Rate",
      },
      {
        parameter: "Scholarship available",
        krmu: "Up to 100% for meritorious students, sports achievers & students across multiple categories",
        typical: "Limited and highly competitive",
      },
    ],

    bottomDescription1:
      "Located in Gurugram, KRMU offers close proximity to leading agribusiness companies, research institutions, and corporate hubs across the Delhi-NCR region, including corporate offices, agri-input firms, food processing units, and innovation centres. This accessibility provides students with valuable internships, field training, and networking opportunities, along with strong industry linkages with organisations such as seed companies, fertiliser and agrochemical firms, agri-tech startups, and government agricultural departments.",

    bottomDescription2:
      "Whether your goal is to pursue careers in agribusiness management, agricultural research, sustainable farming, food production systems, higher studies, or entrepreneurship in the agriculture sector, the B.Sc. (Hons.) Agriculture programme is designed to equip you with the scientific knowledge, practical exposure, and field-based skills required to achieve it.",
  },

  "bachelor-of-education-b-ed": {
    title: "Why K.R. Mangalam University for B.Ed. in 2026–27?",

    description:
      "Pursuing a Bachelor of Education is not just about earning a degree; it is about developing a strong foundation in educational theories, mastering modern teaching methodologies, and acquiring the pedagogical, communication, and classroom management skills needed to inspire learners and contribute effectively to the education sector.",

    comparisonTitle:
      "A comparison of key academic, teacher training, school internship, practical teaching experience, educational technology, research opportunities, and career-focused parameters that students consider while selecting a Bachelor of Education (B.Ed.) programme.",

    parameterHeader: "Parameter",

    krmuHeader: "K.R. Mangalam University",

    typicalHeader: "Typical Private University in NCR",

    comparisonData: [
      {
        parameter: "Highest placement package",
        krmu: "56.6 LPA",
        typical: "8-20 LPA",
      },
      {
        parameter: "Campus recruiters",
        krmu: "800+ companies",
        typical: "100-300 companies",
      },
      {
        parameter: "Research output",
        krmu: "600+ Scopus/WoS papers, 100+ patents",
        typical: "Minimal or unreported",
      },
      {
        parameter: "International exposure",
        krmu: "*Fully sponsored 2-week European summer school",
        typical: "Not a standard offering",
      },
      {
        parameter: "Teaching practice & hands-on exposure",
        krmu: "Extensive school internships, classroom teaching practice, lesson planning, microteaching, educational technology training, and community engagement programmes",
        typical:
          "Limited access to structured school internships and practical teaching experiences",
      },
      {
        parameter: "Mentorship",
        krmu: "Guidance from experienced educators, teacher trainers, academic researchers, school leaders, and education industry experts",
        typical: "Primarily faculty-based mentorship",
      },
      {
        parameter: "Location advantage",
        krmu: "Gurugram – Access to leading schools, educational institutions, EdTech companies, NGOs, and teacher training opportunities",
        typical:
          "Often located in areas with comparatively limited exposure to diverse educational institutions and professional networks",
      },
      {
        parameter: "Placement record",
        krmu: "92% Placement Rate",
        typical: "55–65% Placement Rate",
      },
      {
        parameter: "Scholarship available",
        krmu: "Up to 100% for meritorious students, sports achievers, and students across multiple categories",
        typical: "Limited and highly competitive",
      },
    ],

    bottomDescription1:
      "Located in Gurugram, KRMU offers close proximity to leading schools, educational institutions, EdTech companies, teacher training centres, NGOs, and academic organisations across the Delhi-NCR region. This strategic location provides students with valuable school internships, classroom teaching experience, and professional networking opportunities, along with strong industry linkages with public and private schools, educational consultancies, EdTech organisations, training institutes, and community education initiatives.",

    bottomDescription2:
      "Whether your goal is to build a career as a school teacher, educator, academic coordinator, curriculum developer, education consultant, or trainer, pursue higher studies and educational research, or contribute to the development of innovative teaching practices, the B.Ed. programme is designed to equip you with the pedagogical knowledge, classroom management skills, and practical teaching experience required to excel in the education sector.",
  },

  "bhmct-hotel-management": {
    title:
      "Why K.R. Mangalam University for a Bachelor of Hotel Management and Catering Technology in 2026–27?",

    description:
      "Choosing the right university for a Bachelor of Hotel Management and Catering Technology (B.HMCT.) is about much more than comparing tuition fees or campus facilities. Students should evaluate factors such as curriculum, practical learning opportunities, industry exposure, internships, placement support, and the overall learning environment. These elements play a significant role in preparing graduates for successful careers in the hospitality industry.",

    comparisonTitle:
      "To help students make an informed decision, the table below compares K.R. Mangalam University (KRMU) with a typical private university in Delhi NCR across key parameters. The comparison highlights the aspects that prospective students should consider before selecting a hospitality management programme.",

    parameterHeader: "Parameter",

    krmuHeader: "K.R. Mangalam University",

    typicalHeader: "Typical Private University in NCR",

    comparisonData: [
      {
        parameter: "Highest placement package",
        krmu: "56.6 LPA",
        typical: "8-20 LPA",
      },
      {
        parameter: "Campus recruiters",
        krmu: "800+ companies",
        typical: "100-300 companies",
      },
      {
        parameter: "Curriculum",
        krmu: "Industry-orientated curriculum that combines hospitality management with practical learning.",
        typical:
          "Often focuses more on theoretical concepts, depending on the institution.",
      },
      {
        parameter: "Practical Exposure",
        krmu: "Emphasis on practical training, workshops, industry projects, and internships.",
        typical:
          "Practical exposure may vary and can be limited in some colleges",
      },
      {
        parameter: "Industry Interaction",
        krmu: "Regular guest lectures, workshops, seminars, and interactions with hospitality professionals.",
        typical:
          "Industry interaction depends on the college's partnerships and network.",
      },
      {
        parameter: "Infrastructure",
        krmu: "Modern classrooms, hospitality labs, kitchens, and training facilities designed for experiential learning.",
        typical: "Infrastructure quality varies across institutions.",
      },
      {
        parameter: "Skill Development",
        krmu: "Focus on communication, leadership, customer service, entrepreneurship, and managerial skills alongside technical training.",
        typical:
          "Greater emphasis may be placed on technical skills, with varying focus on soft skills.",
      },
      {
        parameter: "Internship Opportunities",
        krmu: "Supports students with internship opportunities to gain real-world industry experience.",
        typical: "Internship opportunities depend on institutional tie-ups.",
      },
      {
        parameter: "Placement Support",
        krmu: "The dedicated Career Development Centre (CDC) offers career counselling, resume building, mock interviews, placement training, and recruitment support.",
        typical:
          "Placement support varies; some colleges may have limited structured career services.",
      },
      {
        parameter: "Industry Readiness",
        krmu: "Encourages experiential learning through live projects, industry exposure, and professional development activities.",
        typical: "Preparation often depends on individual college initiatives.",
      },
      {
        parameter: "Overall Learning Experience",
        krmu: "Holistic approach that combines academics, practical learning, personality development, and career preparation.",
        typical:
          "May primarily focus on academic learning, depending on the institution.",
      },
    ],

    bottomDescription1:
      "The comparison demonstrates that although B.HMCT programmes are offered by numerous private universities, the entire educational experience can vary greatly. A student's professional development may be permanently impacted by elements including industry-orientated curricula, hands-on training, internship opportunities, knowledgeable faculty, placement support, and industry partnerships.",

    bottomDescription2:
      "As a result, students should pick a university that offers them real-world experience, professional confidence, and practical skills in addition to academic knowledge. Aspiring hospitality professionals can develop prosperous careers in hotels, restaurants, airlines, cruise lines, tourism, and other service sectors with the support of a well-rounded learning environment.",
  },

  "bjmc-hons-research": {
    title:
      "Why K.R. Mangalam University for BJMC (Hons. / Hons. with Research) in 2026–27?",

    description:
      "Pursuing a B.A. (Hons. / Hons. with Research) Journalism & Mass Communication programme is not just about earning a degree; it is about building storytelling ability, media production skills, and industry-ready communication expertise required to navigate today's fast-evolving media landscape.",

    comparisonTitle:
      "A comparison of key academic, practical training, industry exposure, and career-focused parameters that students consider while selecting a BJMC programme.",

    parameterHeader: "Parameter",

    krmuHeader: "K.R. Mangalam University",

    typicalHeader: "Typical Private University in NCR",

    comparisonData: [
      {
        parameter: "Highest placement package",
        krmu: "56.6 LPA",
        typical: "6-15 LPA",
      },
      {
        parameter: "Campus recruiters",
        krmu: "800+ companies",
        typical: "100-300 companies",
      },
      {
        parameter: "Research output",
        krmu: "600+ Scopus/WoS papers, 100+ patents",
        typical: "Minimal or unreported",
      },
      {
        parameter: "International exposure",
        krmu: "*Fully sponsored 2-week European summer school",
        typical: "Not a standard offering",
      },
      {
        parameter: "Media production infrastructure",
        krmu: "Dedicated TV, radio, and digital media studios with industry-grade equipment",
        typical: "Limited or shared production facilities",
      },
      {
        parameter: "Mentorship",
        krmu: "Guidance from media professionals, journalists, and industry practitioners",
        typical: "Primarily faculty-based mentorship",
      },
      {
        parameter: "Location advantage",
        krmu: "Gurugram – Access to Media Houses & Communication Hubs",
        typical: "Often Located in Less Media-Active Areas",
      },
      {
        parameter: "Placement Record",
        krmu: "92% Placement Rate",
        typical: "55-65% Placement Rate",
      },
      {
        parameter: "Scholarship available",
        krmu: "Up to 100% for meritorious students, sports achievers & students across multiple categories",
        typical: "Limited and highly competitive",
      },
    ],

    bottomDescription1:
      "Located in Gurugram, KRMU offers close proximity to major media houses, news networks, advertising agencies, and corporate communication hubs across the Delhi-NCR region. This accessibility provides students with valuable internships, live projects, and networking opportunities, along with strong industry linkages with news channels, digital media companies, PR firms, and advertising agencies.",

    bottomDescription2:
      "Whether your goal is to pursue a career in journalism, digital media, advertising, public relations, event management, or higher studies in communication, the BJMC (Hons. / Hons. with Research) programme at KRMU is designed to equip you with the storytelling ability, practical exposure, and media skills required to achieve it.",
  },

  bjmc: {
    title: "Why K.R. Mangalam University for B.A. (JMC) in 2026–27?",

    description:
      "Pursuing a B.A. (Journalism & Mass Communication) programme is not just about earning a degree but about gaining skills to build editorial judgment and production skills. It helps students ‌create an industry-ready portfolio needed to work across today's fast-changing media landscape.",

    comparisonTitle:
      "A comparison of key academic, studio-based learning, industry exposure, and career-focused parameters that students consider while selecting a BJMC programme.",

    parameterHeader: "Parameter",

    krmuHeader: "K.R. Mangalam University",

    typicalHeader: "Typical Private University in NCR",

    comparisonData: [
      {
        parameter: "Highest placement package",
        krmu: "56.6 LPA",
        typical: "8-20 LPA",
      },
      {
        parameter: "Campus recruiters",
        krmu: "800+ companies",
        typical: "100-300 companies",
      },
      {
        parameter: "Placement assistance",
        krmu: "100% Placement Assistance",
        typical: "Limited or partial support",
      },
      {
        parameter: "Studio & production facilities",
        krmu: "Dedicated production control room, audio-visual studio, radio rooms, and multi-purpose studio",
        typical: "Limited or shared studio access",
      },
      {
        parameter: "Practical training",
        krmu: "100+ hours of live practice in media labs across video, podcasting, and digital content",
        typical: "Largely classroom/theory-based",
      },
      {
        parameter: "Mentorship",
        krmu: "Guidance from working journalists, media producers, and industry practitioners",
        typical: "Primarily faculty-based mentorship",
      },
      {
        parameter: "Location advantage",
        krmu: "Gurugram – Access to Media Houses, Ad Agencies & PR Firms in Delhi-NCR",
        typical: "Often located away from major media hubs",
      },
      {
        parameter: "Placement Record",
        krmu: "92% Placement Rate",
        typical: "55-65% Placement Rate",
      },
      {
        parameter: "Scholarship available",
        krmu: "Up to 100% for meritorious students, sports achievers & students across multiple categories",
        typical: "Limited and highly competitive",
      },
    ],

    bottomDescription1:
      "A student will be able to receive 100% placement assistance from major media companies, including newspapers, magazines, television stations, advertising agencies and PR firms within the Delhi/NCR area as part of this program at KRMU. In addition, it provides the opportunity for internships with major media outlets and studio experiences, while also providing networking opportunities in order to develop industry connections with news organisations, digital media outlets, advertising agencies and PR firms",
  },

  "bachelor-of-design-b-des-fashion-design": {
    title:
      "Why K.R. Mangalam University for B.Des. (Hons. / Hons. with Research) Fashion Design in 2026–27?",

    description:
      "A B.Des. (Hons. / Hons. with Research) Fashion Design is designed for aspiring designers who seek to transform creative ideas into innovative fashion solutions. The programme combines artistic expression with design research, technical expertise, and industry relevance to help students understand every stage of the fashion ecosystem. From conceptualising collections and experimenting with textiles to mastering garment construction, fashion communication, digital design technologies, sustainability, and user-centred design, students gain a multidisciplinary perspective that prepares them for the dynamic world of fashion. By engaging in studio practice, collaborative projects, and research-led learning, graduates emerge as confident professionals capable of shaping trends, promoting responsible fashion, and building successful careers across the global fashion and lifestyle industry.",

    comparisonTitle:
      "Students comparing B.Des. (Hons. / Hons. with Research) Fashion Design programmes often evaluate factors such as curriculum innovation, design studios, textile and apparel laboratories, faculty with industry experience, research opportunities, sustainability initiatives, collaborations with fashion brands, internships, live design briefs, fashion showcases, portfolio development, access to emerging technologies, entrepreneurship support, international exposure, placement outcomes, and the overall learning environment that fosters creativity, innovation, and professional growth.",

    parameterHeader: "Parameter",

    krmuHeader: "K.R. Mangalam University",

    typicalHeader: "Typical Private University in NCR",

    comparisonData: [
      {
        parameter: "Highest placement package",
        krmu: "56.6 LPA",
        typical: "8-20 LPA",
      },
      {
        parameter: "Campus recruiters",
        krmu: "800+ companies",
        typical: "100-300 companies",
      },
      {
        parameter: "Research & innovation",
        krmu: "600+ Scopus/WoS publications, 100+ patents, innovation and design-led research ecosystem",
        typical:
          "Limited research ecosystem with fewer publications and innovation outputs",
      },
      {
        parameter: "Studio & production facilities",
        krmu: "Dedicated production control room, audio-visual studio, radio rooms, and multi-purpose studio",
        typical: "Limited or shared studio access",
      },
      {
        parameter: "International exposure",
        krmu: "*Fully Sponsored 2-Week European Summer School",
        typical:
          "International exposure generally not included as a standard programme component",
      },
      {
        parameter: "Fashion studios & experiential learning",
        krmu: "Dedicated fashion studios, garment construction labs, CAD tools, live projects, fashion shows, portfolio development, industry visits, and internships.",
        typical:
          "Limited access to specialised fashion studios, industry projects, fashion showcases, and experiential learning opportunities",
      },
      {
        parameter: "Location advantage",
        krmu: "Gurugram – Access to Media Houses, Ad Agencies & PR Firms in Delhi-NCR",
        typical: "Often located away from major media hubs",
      },
      {
        parameter: "Industry mentorship",
        krmu: "Learning under experienced fashion designers, textile experts, merchandisers, entrepreneurs, academicians, and industry professionals through workshops, masterclasses, and live mentoring",
        typical:
          "Primarily classroom-based learning with limited interaction with fashion industry experts",
      },
      {
        parameter: "Location advantage",
        krmu: "Gurugram – Close to fashion houses, apparel manufacturers, buying offices, retail headquarters, luxury brands, export houses, design studios, fashion events, and a rapidly growing fashion and lifestyle ecosystem",
        typical:
          "Often located in regions with comparatively fewer opportunities for regular interaction with the fashion and apparel industry",
      },
      {
        parameter: "Placement record",
        krmu: "92% Placement Rate",
        typical: "55–65% Placement Rate",
      },
      {
        parameter: "Scholarships",
        krmu: "Up to 100% scholarships for meritorious students, sports achievers, and multiple other categories",
        typical:
          "Limited scholarships with fewer eligibility categories and higher competition",
      },
    ],

    bottomDescription1:
      "Situated in Gurugram, a thriving hub for fashion, retail, and lifestyle industries, K.R. Mangalam University provides B.Des. (Hons. / Hons. with Research) Fashion Design students with valuable exposure to leading brands, design studios, apparel companies, and creative professionals. Through industry interactions, live projects, internships, workshops, and exhibitions, students gain practical insights and build the skills required to succeed in the evolving fashion landscape.",

    bottomDescription2:
      "The programme nurtures creative thinkers and future fashion professionals by combining design innovation with technical expertise. With hands-on learning in fashion design, textiles, garment construction, digital tools, sustainability, and research, students develop the confidence, creativity, and professional portfolio needed to pursue careers across the global fashion industry.",
  },

  "barch-architecture": {
    title: "Why K.R. Mangalam University for B.Arch. in 2026–27?",

    description:
      "Pursuing a Bachelor of Architecture is not just about earning a degree; it is about developing a strong foundation in architectural design, construction technologies, sustainable building practices, and urban planning while acquiring the creative, technical, and problem-solving skills needed to shape functional, innovative, and environmentally responsible built environments.",

    comparisonTitle:
      "A comparison of key academic, design studio, industry exposure, practical training, architectural technology, professional practice, research opportunities, and career-focused parameters that students consider while selecting a Bachelor of Architecture (B. Arch) programme.",

    parameterHeader: "Parameter",

    krmuHeader: "K.R. Mangalam University",

    typicalHeader: "Typical Private University in NCR",

    comparisonData: [
      {
        parameter: "Highest placement package",
        krmu: "56.6 LPA",
        typical: "8-20 LPA",
      },
      {
        parameter: "Campus recruiters",
        krmu: "800+ companies",
        typical: "100-300 companies",
      },
      {
        parameter: "Research output",
        krmu: "600+ Scopus/WoS papers, 100+ patents",
        typical: "Minimal or unreported",
      },
      {
        parameter: "International exposure",
        krmu: "*Fully Sponsored 2-Week European Summer School",
        typical: "Not a standard offering",
      },
      {
        parameter: "Design studio & practical learning",
        krmu: "Extensive architectural design studios, live projects, site visits, construction workshops, model making, digital design, and professional internships with exposure to real-world architectural practice",
        typical:
          "Limited exposure to live projects, structured site visits, and industry-integrated studio learning",
      },
      {
        parameter: "Mentorship",
        krmu: "Guidance from experienced architects, academicians, urban planners, researchers, and industry professionals",
        typical: "Primarily faculty-based mentorship",
      },
      {
        parameter: "Location advantage",
        krmu: "Gurugram – Access to leading architectural firms, real estate developers, construction companies, urban planning agencies, design consultancies, and infrastructure projects",
        typical:
          "Often located in areas with comparatively limited exposure to leading architecture and construction firms",
      },
      {
        parameter: "Placement record",
        krmu: "92% Placement Rate",
        typical: "55–65% Placement Rate",
      },
      {
        parameter: "Scholarship available",
        krmu: "Up to 100% for meritorious students, sports achievers, and students across multiple categories",
        typical: "Limited and highly competitive",
      },
    ],

    bottomDescription1:
      "Located in Gurugram, KRMU offers close proximity to leading architectural firms, real estate developers, construction companies, urban planning agencies, infrastructure organisations, design consultancies, and government bodies across the Delhi-NCR region. This strategic location provides students with valuable industry exposure through professional internships, site visits, live projects, and collaborative design experiences, along with strong industry linkages with architecture firms, engineering consultancies, construction companies, urban development authorities, and multidisciplinary design organisations.",

    bottomDescription2:
      "Whether your goal is to build a career as an architect, urban designer, landscape architect, interior designer, project manager, architectural consultant, BIM specialist, or conservation professional, pursue higher studies and architectural research, or contribute to the creation of innovative and sustainable built environments, the B. Arch programme is designed to equip you with the creative, technical, and professional competencies required to excel in the architecture, design, and construction industry.",
  },

  "bfa-fine-arts": {
    title: "Why K.R. Mangalam University for BFA in 2026–27?",

    description:
      "Pursuing a Bachelor of Fine Arts (BFA) is more than mastering artistic techniques. It is a transformative journey of imagination, self-expression, and creative exploration. It empowers students to develop a strong artistic identity while gaining expertise in traditional and contemporary art forms, visual storytelling, digital media, aesthetic theory, and professional studio practice. Through immersive learning experiences, students cultivate the creativity, technical excellence, critical thinking, and cultural awareness required to create art that inspires, communicates, and shapes the world around them.",

    comparisonTitle:
      "A comprehensive comparison of the academic excellence, studio-based pedagogy, mentorship by practising artists, interdisciplinary learning, exhibitions, live projects, workshops, internships, digital art integration, portfolio development, research opportunities, entrepreneurial support, and career-oriented opportunities that students evaluate while choosing a Bachelor of Fine Arts (BFA) programme.",

    parameterHeader: "Parameter",

    krmuHeader: "K.R. Mangalam University",

    typicalHeader: "Typical Private University in NCR",

    comparisonData: [
      {
        parameter: "Highest placement package",
        krmu: "56.6 LPA",
        typical: "8-20 LPA",
      },
      {
        parameter: "Campus recruiters",
        krmu: "800+ companies",
        typical: "100-300 companies",
      },
      {
        parameter: "Research & creative output",
        krmu: "600+ Scopus/WoS papers, 100+ patents",
        typical: "Minimal or unreported",
      },
      {
        parameter: "International exposure",
        krmu: "*Fully Sponsored 2-Week European Summer School",
        typical: "Not a standard offering",
      },
      {
        parameter: "Studio & practical learning",
        krmu: "Extensive studio-based learning, live art projects, exhibitions, workshops, portfolio development, digital art, photography, mural and installation projects, and professional internships with exposure to the creative industry",
        typical:
          "Limited exposure to live projects, exhibitions, industry workshops, and structured experiential learning",
      },
      {
        parameter: "Mentorship",
        krmu: "Guidance from experienced artists, designers, academicians, curators, and industry professionals",
        typical: "Primarily faculty-based mentorship",
      },
      {
        parameter: "Location advantage",
        krmu: "Gurugram – Access to leading art galleries, design studios, advertising agencies, media houses, creative startups, museums, cultural centres, and the thriving creative industry",
        typical:
          "Often located in areas with comparatively limited exposure to leading art and creative organisations",
      },
      {
        parameter: "Placement record",
        krmu: "92% Placement Rate",
        typical: "55–65% Placement Rate",
      },
      {
        parameter: "Scholarship available",
        krmu: "Up to 100% for meritorious students, sports achievers, and students across multiple categories",
        typical: "Limited and highly competitive",
      },
    ],

    bottomDescription1:
      "Situated in the vibrant city of Gurugram, K.R. Mangalam University places BFA students at the heart of one of India's fastest-growing creative ecosystems. Surrounded by renowned design studios, advertising agencies, media and entertainment companies, art galleries, museums, cultural institutions, and emerging creative enterprises, students gain opportunities to engage with the professional art world through internships, exhibitions, workshops, collaborative projects, industry interactions, and portfolio-building experiences. The University's strong connections with the creative sector enable students to bridge classroom learning with contemporary artistic practice.",

    bottomDescription2:
      "The Bachelor of Fine Arts (BFA) programme is designed for aspiring artists and creative professionals who wish to transform their imagination into impactful visual expression. Whether you envision a career as a visual artist, illustrator, graphic designer, digital artist, animator, photographer, art curator, creative entrepreneur, or art educator, the programme provides a strong foundation in artistic techniques, creative thinking, digital tools, and professional practice. With an emphasis on experimentation, innovation, and industry relevance, students graduate with the knowledge, confidence, and portfolio needed to thrive in the evolving global creative landscape or pursue advanced studies in the visual arts.",
  },
};
