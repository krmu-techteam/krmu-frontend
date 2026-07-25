export interface CareerRow {
  role: string;
  package: string;
  sectors: string;
}

export interface BreakDownContent {
  buttonTitle: string;
  heading: string;

  tableHeaders: {
    role: string;
    package: string;
    sectors: string;
  };

  rows: CareerRow[];

  note: string[];
}

export const breakDownData: Record<string, BreakDownContent> = {
  "b-tech-cse": {
    buttonTitle: "Career Scope & Salary Insights",

    heading:
      "Below is a full breakdown of career roles, average salary ranges in India, and the sectors actively hiring B.Tech. CSE graduates.",

    tableHeaders: {
      role: "Job Role\nAfter B.Tech. CSE",
      package: "Average Package for Freshers in India\n(In INR)*",
      sectors: "Hiring Sectors",
    },

    rows: [
      {
        role: "Software Developer / SDE",
        package: "4 LPA - 6 LPA",
        sectors: "IT Services, IT Products, Startups",
      },
      {
        role: "AI / ML Engineer",
        package: "5 LPA - 8 LPA",
        sectors: "AI Labs, SaaS, Deep-Tech",
      },
      {
        role: "Data Scientist",
        package: "6 LPA - 8 LPA",
        sectors: "BFSI, E-commerce, Analytics",
      },
      {
        role: "Cybersecurity Analyst",
        package: "4 LPA - 5 LPA",
        sectors: "Cyber Security, Defence, BFSI",
      },
      {
        role: "Full Stack Developer",
        package: "4 LPA - 5 LPA",
        sectors: "Startups, Product Companies",
      },
      {
        role: "Cloud Engineer",
        package: "6 LPA - 8 LPA",
        sectors: "AWS, Azure, GCP Ecosystem",
      },
      {
        role: "Data Engineer",
        package: "6 LPA - 8 LPA",
        sectors: "FinTech, Retail, Healthcare Tech",
      },
      {
        role: "DevOps Engineer",
        package: "4 LPA - 6 LPA",
        sectors: "SaaS, Enterprise IT",
      },
      {
        role: "UX / UI Designer",
        package: "4 LPA - 6 LPA",
        sectors: "Product, Agencies, EdTech",
      },
      {
        role: "IT Consultant",
        package: "4 LPA - 5 LPA",
        sectors: "Big 4, System Integrators",
      },
      {
        role: "Robotics / Automation Engineer",
        package: "6 LPA - 8 LPA",
        sectors: "Manufacturing, Defence, R&D",
      },
      {
        role: "Product Management Trainee",
        package: "4 LPA - 5 LPA",
        sectors: "Product Companies, FinTech",
      },
    ],

    note: [
      "*Note: The packages mentioned above are sourced from various public sources on the internet and may vary.",
    ],
  },

  "bsc-hons-agriculture": {
    buttonTitle: "Career Scope & Salary Insights",

    heading:
      "Below is a full breakdown of career roles, average salary ranges in India, and the sectors actively hiring B.Sc. (Hons.) Agriculture graduates.",

    tableHeaders: {
      role: "Job Role After B.Sc. (Hons.) Agriculture",
      package: "Average Package for Freshers in India\n(In INR)*",
      sectors: "Hiring Sectors",
    },

    rows: [
      {
        role: "Agriculture Officer",
        package: "3 LPA–5 LPA",
        sectors: "Government Departments, Agri Boards, Banks",
      },
      {
        role: "Agronomist",
        package: "3 LPA–5.5 LPA",
        sectors: "Agri-input Companies, Research Organisations, Plantations",
      },
      {
        role: "Agricultural Extension Officer",
        package: "3 LPA–4.5 LPA",
        sectors: "Government Schemes, NGOs, Rural Development Organisations",
      },
      {
        role: "Seed Production Officer",
        package: "3.5 LPA–5 LPA",
        sectors: "Seed Companies, Agri-input Firms",
      },
      {
        role: "Quality Assurance Executive",
        package: "3 LPA–5 LPA",
        sectors: "Food Processing, Agri-export, FMCG",
      },
      {
        role: "Soil & Crop Specialist",
        package: "3.5 LPA–5.5 LPA",
        sectors: "Fertiliser Companies, Agri-tech, Research Institutes",
      },
      {
        role: "Horticulture Officer",
        package: "3 LPA–5 LPA",
        sectors: "Horticulture Departments, Nurseries, Agri Enterprises",
      },
      {
        role: "Farm Manager",
        package: "3 LPA–6 LPA",
        sectors: "Commercial Farms, Plantations, Agri Businesses",
      },
      {
        role: "Agricultural Sales & Marketing Executive",
        package: "3 LPA–6 LPA",
        sectors: "Agrochemical, Fertiliser, Seed & Farm Equipment Companies",
      },
      {
        role: "Research Associate / Field Research Assistant",
        package: "3.5 LPA–5.5 LPA",
        sectors: "ICAR Institutes, Universities, R&D Organisations",
      },
      {
        role: "Food Safety & Quality Executive",
        package: "3.5 LPA–6 LPA",
        sectors: "Food Processing, Dairy, FMCG Companies",
      },
      {
        role: "Agri-Tech Associate",
        package: "4 LPA–7 LPA",
        sectors: "Agri-Tech Startups, Precision Agriculture, Digital Farming",
      },
    ],

    note: [
      "* Note: The salary ranges mentioned above are indicative averages for fresh graduates in India and are compiled from various publicly available sources. Actual compensation may vary depending on the employer, job location, candidate skills, and market conditions.",
    ],
  },

  "bachelor-of-education-b-ed": {
    buttonTitle: "Career Scope & Salary Insights",

    heading:
      "Below is a full breakdown of career roles, average salary ranges in India, and the sectors actively hiring Bachelor of Education graduates.",

    tableHeaders: {
      role: "Job Role After Bachelor of Education (B.Ed.)",
      package: "Average Package for Freshers in India\n(In INR)*",
      sectors: "Hiring Sectors",
    },

    rows: [
      {
        role: "Primary School Teacher (PRT)",
        package: "2.5 LPA–4.5 LPA",
        sectors: "Public & Private Schools, International Schools",
      },
      {
        role: "Trained Graduate Teacher (TGT)**",
        package: "3 LPA–6 LPA",
        sectors: "CBSE, ICSE, State Board & Private Schools",
      },
      {
        role: "Post Graduate Teacher (PGT)**",
        package: "4 LPA–7 LPA",
        sectors: "Senior Secondary Schools, International Schools",
      },
      {
        role: "Pre-Primary / Kindergarten Teacher",
        package: "2.5 LPA–4 LPA",
        sectors: "Preschools, Kindergartens, Early Childhood Education Centres",
      },
      {
        role: "Special Education Teacher***",
        package: "3 LPA–5.5 LPA",
        sectors:
          "Special Schools, Inclusive Schools, NGOs, Rehabilitation Centres",
      },
      {
        role: "Academic Coordinator",
        package: "4 LPA–7 LPA",
        sectors: "Schools, Educational Institutions, School Chain",
      },
      {
        role: "Curriculum Developer",
        package: "4 LPA–8 LPA",
        sectors:
          "EdTech Companies, Publishing Houses, Educational Organisations",
      },
      {
        role: "Education Counsellor",
        package: "3 LPA–6 LPA",
        sectors: "Schools, Colleges, Career Counselling Organisations",
      },
      {
        role: "Instructional Designer",
        package: "4 LPA–8 LPA",
        sectors:
          "EdTech Companies, Corporate Learning & Training Organisations",
      },
      {
        role: "Educational Content Developer",
        package: "3.5 LPA–7 LPA",
        sectors:
          "EdTech Platforms, Publishing Companies, Digital Learning Organisations",
      },
      {
        role: "Teacher Trainer",
        package: "4 LPA–8 LPA",
        sectors: "Teacher Training Institutes, NGOs, Educational Organisations",
      },
      {
        role: "Education Consultant",
        package: "4 LPA–8 LPA",
        sectors:
          "Schools, Education Consulting Firms, Government & Private Education Projects",
      },
    ],

    note: [
      "* Salaries are indicative and may vary based on the employer, location, qualifications, teaching subject, and relevant experience.",
      "** Eligibility for TGT and PGT positions depends on the candidate's undergraduate/postgraduate subject specialisation and meeting the recruitment criteria prescribed by the respective school boards or authorities.",
      "*** Special Education roles may require additional qualifications or certifications as prescribed by the relevant regulatory authorities.",
    ],
  },

  "bhmct-hotel-management": {
    buttonTitle: "Career Scope & Salary Insights",

    heading:
      "Below is a full breakdown of career roles, average salary ranges in India, and the sectors actively hiring Bachelor of Hotel Management and Catering Technology (B.HMCT.) graduates.",

    tableHeaders: {
      role: "Career Roles",
      package: "Average Salary (India)",
      sectors: "Top Hiring Sectors",
    },

    rows: [
      {
        role: "Hotel Manager",
        package: "₹4–8 LPA",
        sectors: "Hotels, Resorts, Hospitality Chains",
      },
      {
        role: "Front Office Manager",
        package: "₹3.5–7 LPA",
        sectors: "Hotels, Resorts, Business Hotels",
      },
      {
        role: "Food & Beverage Manager",
        package: "₹5–10 LPA",
        sectors: "Hotels, Restaurants, Luxury Resorts",
      },
      {
        role: "Executive Chef",
        package: "₹6–12 LPA",
        sectors: "Hotels, Restaurants, Cruise Lines",
      },
      {
        role: "Restaurant Manager",
        package: "₹4–8 LPA",
        sectors: "Restaurants, Café Chains, Fine Dining",
      },
      {
        role: "Catering Manager",
        package: "₹4–9 LPA",
        sectors: "Catering Companies, Airlines, Corporate Catering",
      },
      {
        role: "Housekeeping Manager",
        package: "₹4–8 LPA",
        sectors: "Hotels, Resorts, Hospitals",
      },
      {
        role: "Event Manager",
        package: "₹5–10 LPA",
        sectors: "Event Management Companies, Hotels, Convention Centres",
      },
      {
        role: "Hospitality Executive",
        package: "₹3–6 LPA",
        sectors: "Hotels, Resorts, Travel & Tourism Companies",
      },
      {
        role: "Cruise Hospitality Professional",
        package: "₹6–15 LPA",
        sectors: "International Cruise Lines",
      },
      {
        role: "Airline Catering & Hospitality Executive",
        package: "₹4–8 LPA",
        sectors: "Airlines, Airport Hospitality, Aviation Catering",
      },
      {
        role: "Hospitality Entrepreneur",
        package: "Earnings vary",
        sectors: "Self-Employment, Hospitality Start-up",
      },
    ],

    note: [
      "Note: The salary ranges mentioned above are approximate estimates compiled from industry reports and career portals. Actual compensation depends on factors such as employer, location, experience, skills, and job responsibilities.",
    ],
  },

  "bjmc-hons-research": {
    buttonTitle: "Career Scope After BJMC (Hons. / Hons. with Research)",

    heading:
      "Below is a full breakdown of career roles, average salary ranges in India, and the sectors actively hiring BJMC graduates.",

    tableHeaders: {
      role: "Job Role After BJMC (Hons. / Hons. with Research)",
      package: "Average Package for Freshers in India (INR)*",
      sectors: "Hiring Sectors",
    },

    rows: [
      {
        role: "Journalist / Reporter",
        package: "3 LPA–5 LPA",
        sectors: "News Channels, Newspapers, Digital News Platforms",
      },
      {
        role: "Sub-Editor / Copy Editor",
        package: "3 LPA–5 LPA",
        sectors: "Print Media, Digital Publications, News Agencies",
      },
      {
        role: "Digital Media Strategist",
        package: "3.5 LPA–6 LPA",
        sectors: "Digital Marketing Agencies, Brands, Media Houses",
      },
      {
        role: "Content Creator / Writer",
        package: "3 LPA–5.5 LPA",
        sectors: "OTT Platforms, Content Studios, Social Media Agencies",
      },
      {
        role: "Public Relations Specialist",
        package: "3 LPA–5.5 LPA",
        sectors: "PR Agencies, Corporate Communications, Consultancies",
      },
      {
        role: "Radio Jockey (RJ)",
        package: "3 LPA–5 LPA",
        sectors: "Radio Networks, Podcast Studios, Broadcast Media",
      },
      {
        role: "Video Editor / Producer",
        package: "3 LPA–5.5 LPA",
        sectors: "TV Networks, Production Houses, OTT Platforms",
      },
      {
        role: "Social Media Manager",
        package: "3 LPA–5.5 LPA",
        sectors: "Brands, Advertising Agencies, Media Companies",
      },
      {
        role: "Advertising Executive",
        package: "3 LPA–6 LPA",
        sectors: "Advertising Agencies, Brand Marketing Teams",
      },
      {
        role: "News Anchor",
        package: "3.5 LPA–6 LPA",
        sectors: "Television News Channels, Digital News Platforms",
      },
      {
        role: "Event Manager",
        package: "3 LPA–6 LPA",
        sectors: "Event Management Companies, Corporate Communications",
      },
      {
        role: "Media Researcher",
        package: "3 LPA–5 LPA",
        sectors: "Research Organisations, Media Houses, Think Tanks",
      },
    ],

    note: [
      "* Note: The salary ranges mentioned above are indicative averages for fresh graduates in India and are compiled from various publicly available sources. Actual compensation may vary depending on the employer, job location, candidate skills, and market conditions.",
    ],
  },

  bjmc: {
    buttonTitle: "Career Prospects",

    heading:
      "Below is a breakdown of career roles, indicative salary ranges for freshers in India, and the sectors actively hiring B.A. (JMC) graduates.",

    tableHeaders: {
      role: "Job Role After B.A. (JMC)",
      package: "Average Package for Freshers in India (INR)*",
      sectors: "Hiring Sectors",
    },

    rows: [
      {
        role: "Journalist / Reporter",
        package: "3 LPA–5 LPA",
        sectors: "Newspapers, News Websites, Media Houses",
      },
      {
        role: "News Anchor / TV Correspondent",
        package: "4 LPA–6 LPA",
        sectors: "TV News Channels, Broadcast Media",
      },
      {
        role: "Radio Jockey (RJ) / Video Jockey (VJ)",
        package: "2.5 LPA–5 LPA",
        sectors: "Radio Stations, OTT Platforms, YouTube Channels",
      },
      {
        role: "Digital Content Creator",
        package: "2.5 LPA–4.5 LPA",
        sectors: "Digital Media Platforms, OTT, Social Media Agencies",
      },
      {
        role: "Public Relations Executive",
        package: "3.5 LPA–6 LPA",
        sectors: "PR Agencies, Corporate Communication Departments",
      },
      {
        role: "Advertising Executive / Copywriter",
        package: "3 LPA–5 LPA",
        sectors: "Advertising Agencies, Brand & Creative Studios",
      },
      {
        role: "Social Media Manager",
        package: "3 LPA–7 LPA",
        sectors: "Digital Marketing Firms, Corporate Brands",
      },
      {
        role: "Editor / Sub-Editor",
        package: "3 LPA–4.5 LPA",
        sectors: "Newspapers, Magazines, Digital News Portals",
      },
      {
        role: "Event Manager",
        package: "3 LPA–5 LPA",
        sectors: "Event Management Companies, Media Houses",
      },
      {
        role: "Corporate Communication Executive",
        package: "3.5 LPA–6 LPA",
        sectors: "Corporate Houses, MNCs, Government Communication Cells",
      },
    ],

    note: [
      "* Note: The salary ranges mentioned above are indicative averages for fresh graduates in India and are compiled from various publicly available sources. Actual compensation may vary depending on the employer, job location, candidate skills, and market conditions.",
    ],
  },

  "bachelor-of-design-b-des-fashion-design": {
    buttonTitle: "Career Prospects",

    heading:
      "Below is a breakdown of career roles, indicative salary ranges for freshers in India, and the sectors actively hiring B.Des. (Hons. / Hons. with Research) Fashion Design graduates.",

    tableHeaders: {
      role: "Job Role After B.Des. (Hons. / Hons. with Research) Fashion Design",
      package: "Average Package for Freshers in India (INR)*",
      sectors: "Hiring Sectors",
    },

    rows: [
      {
        role: "Fashion Designer",
        package: "₹4 LPA–8 LPA",
        sectors:
          "Fashion Brands, Apparel Manufacturers, Design Houses, Luxury Labels",
      },
      {
        role: "Fashion Stylist",
        package: "₹4 LPA–8 LPA",
        sectors:
          "Fashion Magazines, Celebrity Styling, Media Houses, E-commerce Brands",
      },
      {
        role: "Costume Designer",
        package: "₹5 LPA–10 LPA",
        sectors:
          "Film & Television Industry, OTT Platforms, Theatre Productions, Entertainment Companies",
      },
      {
        role: "Fashion Illustrator",
        package: "₹3.5 LPA–6.5 LPA",
        sectors:
          "Fashion Houses, Design Studios, Publishing Companies, Freelance Practice",
      },
      {
        role: "Fashion Merchandiser",
        package: "₹5 LPA–9 LPA",
        sectors: "Apparel Brands, Retail Chains, Buying Houses, Export Houses",
      },
      {
        role: "Textile Designer",
        package: "₹4 LPA–8 LPA",
        sectors:
          "Textile Manufacturers, Home Furnishing Brands, Fashion Companies, Export Units",
      },
      {
        role: "Fashion Buyer",
        package: "₹5 LPA–9 LPA",
        sectors:
          "Retail Brands, Luxury Fashion Houses, E-commerce Companies, Buying Offices",
      },
      {
        role: "Apparel Production Manager (Entry-Level)",
        package: "₹4.5 LPA–8 LPA",
        sectors:
          "Garment Manufacturing Units, Export Houses, Apparel Production Companies",
      },
      {
        role: "Visual Merchandiser",
        package: "₹4 LPA–7.5 LPA",
        sectors:
          "Fashion Retail Chains, Luxury Stores, Lifestyle Brands, Department Stores",
      },
      {
        role: "Fashion Consultant",
        package: "₹4 LPA–8 LPA",
        sectors:
          "Fashion Brands, Image Consulting Firms, Personal Styling Agencies, Retail Companies",
      },
      {
        role: "Entrepreneur / Fashion Label Founder",
        package: "₹4 LPA–15+ LPA",
        sectors:
          "Own Fashion Label, Boutique, Sustainable Fashion Brand, E-commerce Business",
      },
      {
        role: "Fashion Entrepreneur / Freelance Designer",
        package: "₹4 LPA–12+ LPA",
        sectors:
          "Independent Design Practice, Custom Couture, Online Fashion Platforms, Design Consultancy",
      },
    ],

    note: [
      "Note: Salary figures are approximate and may vary depending on the candidate's skills, experience, employer, job location, and prevailing industry conditions. Entrepreneurial earnings depend on business performance and market demand.",
    ],
  },

  "barch-architecture": {
    buttonTitle: "Career Prospects",

    heading:
      "Below is a breakdown of career roles, indicative salary ranges for freshers in India, and the sectors actively hiring Bachelor of Architecture (B.Arch.) graduates.",

    tableHeaders: {
      role: "Job Role After Bachelor of Architecture (B.Arch.)",
      package: "Average Package for Freshers in India (INR)*",
      sectors: "Hiring Sectors",
    },

    rows: [
      {
        role: "Architect*",
        package: "₹3.5 LPA–7 LPA",
        sectors:
          "Architectural Firms, Design Consultancies, Real Estate Developers",
      },
      {
        role: "Junior Architect",
        package: "₹3 LPA–6 LPA",
        sectors: "Architecture & Planning Firms, Construction Companies",
      },
      {
        role: "Urban Designer",
        package: "₹4 LPA–8 LPA",
        sectors:
          "Urban Planning Firms, Smart City Projects, Government Agencies",
      },
      {
        role: "Interior Designer",
        package: "₹3 LPA–6 LPA",
        sectors:
          "Interior Design Studios, Architecture Firms, Real Estate Companies",
      },
      {
        role: "Landscape Architect",
        package: "₹4 LPA–7 LPA",
        sectors:
          "Landscape Design Firms, Urban Development Organisations, Government Projects",
      },
      {
        role: "Architectural Designer",
        package: "₹3.5 LPA–6.5 LPA",
        sectors:
          "Architecture Studios, Design Consultancies, Infrastructure Companies",
      },
      {
        role: "BIM Specialist",
        package: "₹5 LPA–9 LPA",
        sectors:
          "Architecture, Engineering & Construction (AEC) Firms, Infrastructure Companies",
      },
      {
        role: "Project Coordinator",
        package: "₹4 LPA–7 LPA",
        sectors:
          "Construction Companies, Real Estate Developers, Project Management Consultancies",
      },
      {
        role: "Architectural Visualiser",
        package: "₹3.5 LPA–7 LPA",
        sectors:
          "Architectural Firms, 3D Visualisation Studios, Design Agencies",
      },
      {
        role: "Conservation Architect",
        package: "₹4 LPA–7 LPA",
        sectors:
          "Heritage Conservation Organisations, Government Bodies, Architectural Consultancies",
      },
      {
        role: "Building Consultant",
        package: "₹4 LPA–8 LPA",
        sectors:
          "Construction Firms, Engineering Consultancies, Building Services Companies",
      },
      {
        role: "Design Research Associate",
        package: "₹4 LPA–7 LPA",
        sectors:
          "Research Organisations, Academic Institutions, Architecture & Urban Planning Think Tanks",
      },
    ],

    note: [
      "* To practise independently as an architect in India, graduates must register with the Council of Architecture (CoA) as per applicable regulations.",
      "#Some of the specialised roles mentioned above may require relevant experience or postgraduate qualifications, depending on the employer.",
    ],
  },
};
