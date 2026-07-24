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
};
