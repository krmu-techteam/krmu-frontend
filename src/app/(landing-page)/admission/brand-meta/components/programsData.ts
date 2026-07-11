// data/programsData.ts

export type Program = {
  id: number;
  title: string;
  duration: string;
  fees: string;
  category: string;
  level: "undergraduate" | "postgraduate" | "diploma" | "doctorate";
  link: string;
};

export const schools = [
  { label: "School of Engineering and Technology", value: "engineering-tech" },
  { label: "School of Management and Commerce", value: "management-commerce" },
  { label: "School of Legal Studies", value: "legal-studies" },
  { label: "School of Medical and Allied Sciences", value: "medical-allied" },
  { label: "School of Physiotherapy and Rehabilitation Sciences", value: "physiotherapy-rehabilitation" },
  { label: "School of Liberal Arts", value: "liberal-arts" },
  { label: "School of Basic and Applied Sciences", value: "basic-applied-sciences" },
  { label: "School of Architecture and Design", value: "architecture-design" },
  { label: "School of Emerging Media and Creator Economy", value: "journalism-masscomm" },
  // { label: "School of Hotel Management and Catering Technology", value: "hotel-management" },
  { label: "School of Education", value: "education" },
  { label: "School of Agricultural Sciences", value: "agricultural-sciences" },
];

export const levels = [
  { label: "Undergraduate", value: "undergraduate" },
  { label: "Postgraduate", value: "postgraduate" },
  { label: "Diploma", value: "diploma" },
  { label: "Doctorate", value: "doctorate" },
];

export const programs: Program[] = [
  { id: 1, title: "B.Tech. Computer Science and Engineering", duration: "4 Years", fees: "₹ 2,30,000 /-", category: "engineering-tech", level: "undergraduate", link: "https://www.krmangalam.edu.in/programs/b-tech-cse/" },
  { id: 2, title: "B.Tech. Computer Science and Engineering (AI & ML) with Academic Support of IBM & powered by Microsoft Certifications", duration: "4 Years", fees: "₹ 2,65,000 /-", category: "engineering-tech", level: "undergraduate", link: "https://www.krmangalam.edu.in/programs/btech-cse-ai-ml/" },
  { id: 3, title: "B.Tech. Computer Science and Engineering (Full Stack Development) with Academic Support of ImaginXP", duration: "4 Years", fees: "₹ 2,50,000 /-", category: "engineering-tech", level: "undergraduate", link: "https://www.krmangalam.edu.in/programs/btech-full-stack-development/" },
  { id: 4, title: "B.Tech. Computer Science & Engineering (UX/UI) with academic support of ImaginXP", duration: "4 Years", fees: "₹ 2,50,000 /-", category: "engineering-tech", level: "undergraduate", link: "https://www.krmangalam.edu.in/programs/btech-cse-ui-ux/" },
  { id: 5, title: "B.Tech. Computer Science and Engineering (Cyber Security) with academic support of EC-Council and IBM", duration: "4 Years", fees: "₹ 2,50,000 /-", category: "engineering-tech", level: "undergraduate", link: "https://www.krmangalam.edu.in/programs/btech-cse-cyber-security/" },
  { id: 6, title: "B.Tech. Computer Science and Engineering (Data Science) with academic support of IBM", duration: "4 Years", fees: "₹ 2,50,000 /-", category: "engineering-tech", level: "undergraduate", link: "https://www.krmangalam.edu.in/programs/btech-cse-in-data-science/" },
  { id: 7, title: "B.Tech. Computer Science and Engineering (Robotics & AI) with academic support of IBM & powered by Microsoft Certifications", duration: "4 Years", fees: "₹ 2,50,000 /-", category: "engineering-tech", level: "undergraduate", link: "https://www.krmangalam.edu.in/programs/b-tech-cse-robotics-ai/" },
  { id: 8, title: "BCA (AI & Data Science) with academic support of IBM & powered by Microsoft Certifications", duration: "3 Years", fees: "₹ 1,65,000 /-", category: "engineering-tech", level: "undergraduate", link: "https://www.krmangalam.edu.in/programs/bca-ai-data-science/" },
  { id: 9, title: "BCA (Hons./ Hons. with Research) (AI & Data Science) with academic support of IBM & powered by Microsoft Certifications", duration: "4 Years", fees: "₹ 1,65,000 /-", category: "engineering-tech", level: "undergraduate", link: "https://www.krmangalam.edu.in/programs/bca-ai-research/" },
  { id: 10, title: "BCA (Cyber Security) with academic support of EC-Council", duration: "3 Years", fees: "₹ 1,65,000 /-", category: "engineering-tech", level: "undergraduate", link: "https://www.krmangalam.edu.in/programs/bca-cyber-security/" },
  { id: 11, title: "BCA (Hons./ Hons. with Research) (Cyber Security) with academic support of EC-Council", duration: "4 Years", fees: "₹ 1,65,000 /-", category: "engineering-tech", level: "undergraduate", link: "https://www.krmangalam.edu.in/programs/bca-hons-hons-with-research-cyber-security/" },
  { id: 12, title: "B.Sc. (Hons.) Computer Science with academic support of IBM", duration: "3 Years", fees: "₹ 1,35,000 /-", category: "engineering-tech", level: "undergraduate", link: "https://www.krmangalam.edu.in/programs/bsc-hons-computer-science/" },
  { id: 13, title: "B.Sc. (Hons.) Cyber Security", duration: "3 Years", fees: "₹ 1,35,000 /-", category: "engineering-tech", level: "undergraduate", link: "https://www.krmangalam.edu.in/programs/bsc-hons-cyber-security/" },
  { id: 14, title: "B.Sc. (Hons.) Data Science", duration: "3 Years", fees: "₹ 1,35,000 /-", category: "engineering-tech", level: "undergraduate", link: "https://www.krmangalam.edu.in/programs/bsc-hons-data-science/" },

  { id: 15, title: "M.Tech. Automobile Engineering", duration: "2 Years", fees: "₹ 1,10,000 /-", category: "engineering-tech", level: "postgraduate", link: "https://www.krmangalam.edu.in/programs/mtech-automobile-engineering/" },
  { id: 16, title: "MCA (AI & ML) with academic support of IBM and powered by Microsoft Certifications", duration: "2 Years", fees: "₹ 1,50,000 /-", category: "engineering-tech", level: "postgraduate", link: "https://www.krmangalam.edu.in/programs/mca-ai-ml/" },
  { id: 17, title: "MCA", duration: "2 Years", fees: "₹ 1,20,000 /-", category: "engineering-tech", level: "postgraduate", link: "https://www.krmangalam.edu.in/programs/master-computer-application-mca/" },

  // { id: 18, title: "BBA Human Resource", duration: "3 Years", fees: "₹ 1,85,000 /-", category: "management-commerce", level: "undergraduate", link: "https://www.krmangalam.edu.in/programs/bba-hr/" },
  // { id: 19, title: "BBA Marketing", duration: "3 Years", fees: "₹ 1,85,000 /-", category: "management-commerce", level: "undergraduate", link: "https://www.krmangalam.edu.in/programs/bba-marketing/" },
  // { id: 20, title: "BBA Finance", duration: "3 Years", fees: "₹ 1,85,000 /-", category: "management-commerce", level: "undergraduate", link: "https://www.krmangalam.edu.in/programs/bba-finance/" },
  // { id: 21, title: "BBA International Business", duration: "3 Years", fees: "₹ 1,85,000 /-", category: "management-commerce", level: "undergraduate", link: "https://www.krmangalam.edu.in/programs/bba-international-business/" },
  // { id: 22, title: "BBA Travel & Tourism", duration: "3 Years", fees: "₹ 1,85,000 /-", category: "management-commerce", level: "undergraduate", link: "https://www.krmangalam.edu.in/programs/bba-travel-tourism-management/" },

  { id: 23, title: "MBA with academic support of IBM", duration: "2 Years", fees: "₹ 3,00,000 /-", category: "management-commerce", level: "postgraduate", link: "https://www.krmangalam.edu.in/programs/mba/" },
  { id: 24, title: "MBA (Digital Marketing) with academic support of IIDE", duration: "2 Years", fees: "₹ 3,50,000 /-", category: "management-commerce", level: "postgraduate", link: "https://www.krmangalam.edu.in/programs/mba-digital-marketing/" },
  { id: 25, title: "MBA (Fintech) with academic support of Ernst & Young (EY)", duration: "2 Years", fees: "₹ 3,50,000 /-", category: "management-commerce", level: "postgraduate", link: "https://www.krmangalam.edu.in/programs/mba-fintech/" },

  { id: 26, title: "BBA LL.B. (Hons.)", duration: "5 Years", fees: "₹ 1,85,000 /-", category: "legal-studies", level: "undergraduate", link: "https://www.krmangalam.edu.in/program/bba-llb-hons/" },
  { id: 27, title: "B.A. LL.B. (Hons.)", duration: "5 Years", fees: "₹ 1,85,000 /-", category: "legal-studies", level: "undergraduate", link: "https://www.krmangalam.edu.in/programs/ba-llb-hons/" },
  { id: 28, title: "LL.B. (Hons.)", duration: "3 Years", fees: "₹ 1,60,000 /-", category: "legal-studies", level: "undergraduate", link: "https://www.krmangalam.edu.in/programs/llb-hons/" },
  { id: 29, title: "LL.M.", duration: "1 Year", fees: "₹ 1,50,000 /-", category: "legal-studies", level: "postgraduate", link: "https://www.krmangalam.edu.in/programs/llm-masters-law/" },

  { id: 30, title: "Bachelor of Physiotherapy (BPT)", duration: "4.5 Years", fees: "₹ 1,58,000 /-", category: "physiotherapy-rehabilitation", level: "undergraduate", link: "https://www.krmangalam.edu.in/programs/bachelor-of-physiotherapy-bpt/" },

  // { id: 31, title: "B.A. (Hons.) English", duration: "3 Years", fees: "₹ 1,20,000 /-", category: "liberal-arts", level: "undergraduate", link: "https://www.krmangalam.edu.in/programs/ba-hon-english/" },
  // { id: 32, title: "B.A. (Hons.) Psychology", duration: "3 Years", fees: "₹ 1,30,000 /-", category: "liberal-arts", level: "undergraduate", link: "https://www.krmangalam.edu.in/programs/ba-hons-psychology/" },

  { id: 33, title: "D.Pharm", duration: "2 Years", fees: "₹ 1,20,000 /-", category: "medical-allied", level: "diploma", link: "https://www.krmangalam.edu.in/programs/dpharm/" },
  { id: 34, title: "B.Pharm", duration: "4 Years", fees: "₹ 1,95,000 /-", category: "medical-allied", level: "undergraduate", link: "https://www.krmangalam.edu.in/programs/bpharma/" },

  { id: 35, title: "Bachelor of Architecture (B.Arch)", duration: "5 Years", fees: "₹ 1,90,000 /-", category: "architecture-design", level: "undergraduate", link: "https://www.krmangalam.edu.in/programs/barch-architecture/" },

  { id: 36, title: "B.A. Journalism & Mass Communication", duration: "3 Years", fees: "₹ 1,60,000 /-", category: "journalism-masscomm", level: "undergraduate", link: "https://www.krmangalam.edu.in/programs/bjmc/" },
  
  // { id: 132, title: "B.A. (Hons. / Hons. with Research) (Journalism And Mass Communication)", duration: "3 Years", fees: "₹ 1,60,000 /-", category: "journalism-masscomm", level: "undergraduate", link: "https://www.krmangalam.edu.in/programs/bjmc/" },

  
  { id: 37, title: "M.A. Journalism & Mass Communication", duration: "2 Years", fees: "₹ 1,10,000 /-", category: "journalism-masscomm", level: "postgraduate", link: "https://www.krmangalam.edu.in/programs/mjmc-masters-journalism-mass-communication/" },

  { id: 38, title: "Bachelor of Hotel Management and Catering Technology (BHMCT)", duration: "4 Years", fees: "₹ 1,95,000 /-", category: "hotel-management", level: "undergraduate", link: "https://www.krmangalam.edu.in/programs/bhmct-hotel-management/" },

  { id: 39, title: "Bachelor of Education (B.Ed.)", duration: "2 Years", fees: "₹ 1,25,000 /-", category: "education", level: "undergraduate", link: "https://www.krmangalam.edu.in/programs/bachelor-of-education-b-ed/" },
  { id: 40, title: "Bachelor of Elementary Education (B.El.Ed.)", duration: "4 Years", fees: "₹ 1,25,000 /-", category: "education", level: "undergraduate", link: "https://www.krmangalam.edu.in/programs/bachelor-elementary-education-b-el-ed" },

  { id: 41, title: "B.Sc. (Hons.) Agriculture", duration: "4 Years", fees: "₹ 1,40,000 /-", category: "agricultural-sciences", level: "undergraduate", link: "https://www.krmangalam.edu.in/programs/bsc-hons-agriculture/" },

  { id: 42, title: "Ph.D. in Computer Science and Engineering", duration: "Min. 3 Years", fees: "₹ 1,20,000 /-", category: "engineering-tech", level: "doctorate", link: "https://www.krmangalam.edu.in/programs/phd-computer-science-engineering/" },
  { id: 43, title: "Ph.D. in Mechanical Engineering", duration: "Min. 3 Years", fees: "₹ 1,20,000 /-", category: "engineering-tech", level: "doctorate", link: "https://www.krmangalam.edu.in/programs/phd-mechanical-engineering/" },
  { id: 44, title: "Ph.D. in Management", duration: "Min. 3 Years", fees: "₹ 1,20,000 /-", category: "management-commerce", level: "doctorate", link: "https://www.krmangalam.edu.in/programs/phd-management/" },
  { id: 45, title: "Ph.D. in Commerce", duration: "Min. 3 Years", fees: "₹ 1,20,000 /-", category: "management-commerce", level: "doctorate", link: "https://www.krmangalam.edu.in/programs/phd-commerce/" },
  { id: 46, title: "Ph.D. in Law", duration: "Min. 3 Years", fees: "₹ 1,20,000 /-", category: "legal-studies", level: "doctorate", link: "https://www.krmangalam.edu.in/programs/phd-law/" },
  { id: 47, title: "Ph.D. in Pharmaceutical Sciences", duration: "Min. 3 Years", fees: "₹ 1,20,000 /-", category: "medical-allied", level: "doctorate", link: "https://www.krmangalam.edu.in/programs/phd-pharmaceutical-sciences/" },
  { id: 48, title: "Ph.D. in Psychology", duration: "Min. 3 Years", fees: "₹ 1,20,000 /-", category: "liberal-arts", level: "doctorate", link: "https://www.krmangalam.edu.in/programs/phd-in-psychology/" },
  { id: 49, title: "Ph.D. in English", duration: "Min. 3 Years", fees: "₹ 1,20,000 /-", category: "liberal-arts", level: "doctorate", link: "https://www.krmangalam.edu.in/programs/phd-english-literature-studies/" },
  { id: 50, title: "Ph.D. in Economics", duration: "Min. 3 Years", fees: "₹ 1,20,000 /-", category: "liberal-arts", level: "doctorate", link: "https://www.krmangalam.edu.in/programs/phd-economics/" },
     { id: 51, title: "B.Com. (Hons.)", duration: "3 Years", fees: "₹ 1,40,000 /-", category: "management-commerce", level: "undergraduate", link: "https://www.krmangalam.edu.in/programs/bcom-hons/" },
  { id: 52, title: "B.Com. (Hons. / Hons. with Research)", duration: "4 Years", fees: "₹ 1,40,000 /-", category: "management-commerce", level: "undergraduate", link: "https://www.krmangalam.edu.in/programs/bcom-hons-research/" },
  { id: 53, title: "B.Com. Programme", duration: "3 Years", fees: "₹ 1,25,000 /-", category: "management-commerce", level: "undergraduate", link: "https://www.krmangalam.edu.in/programs/bcom-programme/" },



  { id: 127, title: "Ph.D. in Political Science", duration: "Min. 3 Years", fees: "₹ 1,20,000 /-", category: "liberal-arts", level: "doctorate", link: "https://www.krmangalam.edu.in/programs/phd-in-psychology/" },


  { id: 54, title: "Integrated BBA+MBA with Academic Support of IBM", duration: "5 Years", fees: "₹ 2,30,000 /-", category: "management-commerce", level: "undergraduate", link: "https://www.krmangalam.edu.in/programs/integrated-bba-mba/" },

  { id: 55, title: "B.Pharm (Lateral Entry)", duration: "3 Years", fees: "₹ 1,95,000 /-", category: "medical-allied", level: "undergraduate", link: "https://www.krmangalam.edu.in/programs/bpharm-lateral/" },

  { id: 56, title: "B.Sc. (Hons.) Emergency Medical Technology with Academic & Industry Support of Emversity**", duration: "4 Years", fees: "₹ 2,40,000 /-", category: "medical-allied", level: "undergraduate", link: "https://www.krmangalam.edu.in/programs/bsc-emergency-medical-technology/" },
  { id: 57, title: "B.Sc. (Hons.) Respiratory Technology with Academic & Industry Support of Emversity", duration: "4 Years", fees: "₹ 2,40,000 /-", category: "medical-allied", level: "undergraduate", link: "https://www.krmangalam.edu.in/programs/bsc-respiratory-technology/" },
  { id: 58, title: "B.Sc. (Hons.) Cardiovascular Technology with Academic & Industry Support of Emversity**", duration: "4 Years", fees: "₹ 2,40,000 /-", category: "medical-allied", level: "undergraduate", link: "https://www.krmangalam.edu.in/programs/bsc-cardiovascular-technology/" },

  { id: 59, title: "M.Pharm Pharmaceutics", duration: "2 Years", fees: "₹ 1,54,000 /-", category: "medical-allied", level: "postgraduate", link: "https://www.krmangalam.edu.in/programs/mpharm-pharmaceutics/" },
  { id: 60, title: "M.Pharm Pharmacology", duration: "2 Years", fees: "₹ 1,54,000 /-", category: "medical-allied", level: "postgraduate", link: "https://www.krmangalam.edu.in/programs/mpharm-pharmacology/" },

  { id: 61, title: "Bachelor of Design (B.Des.) (Hons. / Hons. with Research) (Fashion Design)", duration: "4 Years", fees: "₹ 2,10,000 /-", category: "architecture-design", level: "undergraduate", link: "https://www.krmangalam.edu.in/programs/bdes-fashion-design/" },
  { id: 62, title: "Bachelor of Design (B.Des.) (Hons. / Hons. with Research) (Interior Design)", duration: "4 Years", fees: "₹ 2,10,000 /-", category: "architecture-design", level: "undergraduate", link: "https://www.krmangalam.edu.in/programs/bdes-interior-design/" },
  { id: 63, title: "Bachelor of Design (B.Des.) (Hons. / Hons. with Research) (Game Design & Animation) with academic support of ImaginXP", duration: "4 Years", fees: "₹ 2,40,000 /-", category: "architecture-design", level: "undergraduate", link: "https://www.krmangalam.edu.in/programs/bdes-game-design-animation/" },
  { id: 64, title: "Bachelor of Fine Arts (BFA)", duration: "4 Years", fees: "₹ 1,20,000 /-", category: "architecture-design", level: "undergraduate", link: "https://www.krmangalam.edu.in/programs/bfa/" },
  { id: 65, title: "Bachelor of Design (B.Des.) (Hons. / Hons. with Research) (UX/UI & Interaction Design) with academic support of ImaginXP", duration: "4 Years", fees: "₹ 2,40,000 /-", category: "architecture-design", level: "undergraduate", link: "https://www.krmangalam.edu.in/programs/bdes-ux-ui-interaction-design/" },

  { id: 66, title: "B.A. (Hons./Research) Journalism & Mass Communication", duration: "4 Years", fees: "₹ 1,60,000 /-", category: "journalism-masscomm", level: "undergraduate", link: "https://www.krmangalam.edu.in/programs/bjmc-hons-research/" },

  { id: 67, title: "Ph.D. in Journalism & Mass Communication", duration: "Min. 3 Years", fees: "₹ 1,20,000 /-", category: "journalism-masscomm", level: "doctorate", link: "https://www.krmangalam.edu.in/programs/phd-journalism-mass-communication/" },

  { id: 68, title: "Ph.D. in Education", duration: "Min. 3 Years", fees: "₹ 1,20,000 /-", category: "education", level: "doctorate", link: "https://www.krmangalam.edu.in/programs/phd-education/" },

  { id: 133, title: "M.A. Education", duration: "2 Years", fees: "₹ 1,20,000 /-", category: "education", level: "postgraduate", link: "https://www.krmangalam.edu.in/programs/phd-education/" },

  
  { id: 69, title: "M.A. Applied Psychology", duration: "2 Years", fees: "₹ 1,15,000 /-", category: "liberal-arts", level: "postgraduate", link: "https://www.krmangalam.edu.in/programs/ma-applied-psychology/" },

  { id: 124, title: "M.A. in English", duration: "2 Years", fees: "₹ 1,15,000 /-", category: "liberal-arts", level: "postgraduate", link: "https://www.krmangalam.edu.in/programs/ma-applied-psychology/" },
  { id: 125, title: "M.A. in Economics", duration: "2 Years", fees: "₹ 1,15,000 /-", category: "liberal-arts", level: "postgraduate", link: "https://www.krmangalam.edu.in/programs/ma-applied-psychology/" },
  { id: 126, title: "M.A. in Political Science", duration: "2 Years", fees: "₹ 1,15,000 /-", category: "liberal-arts", level: "postgraduate", link: "https://www.krmangalam.edu.in/programs/ma-applied-psychology/" },


  { id: 70, title: "B.Sc. (Hons. / Hons. with Research ) Physics", duration: "4 Years", fees: "₹ 90,000 /-", category: "basic-applied-sciences", level: "undergraduate", link: "https://www.krmangalam.edu.in/programs/bsc-physics-hons-research/" },
  { id: 71, title: "B.Sc. (Hons. / Hons. with Research) Chemistry", duration: "4 Years", fees: "₹ 90,000 /-", category: "basic-applied-sciences", level: "undergraduate", link: "https://www.krmangalam.edu.in/programs/bsc-chemistry-hons-research/" },

  { id: 130, title: "B.Sc. (Hons. / Hons. with Research) Maths", duration: "4 Years", fees: "₹ 90,000 /-", category: "basic-applied-sciences", level: "undergraduate", link: "https://www.krmangalam.edu.in/programs/bsc-chemistry-hons-research/" },



  { id: 72, title: "B.Sc. (Hons.) Forensic Science", duration: "3 Years", fees: "₹ 1,30,000 /-", category: "basic-applied-sciences", level: "undergraduate", link: "https://www.krmangalam.edu.in/programs/bsc-forensic-science/" },
  { id: 73, title: "B.Sc. (Hons. / Hons. with Research) Forensic Science", duration: "4 Years", fees: "₹ 1,30,000 /-", category: "basic-applied-sciences", level: "undergraduate", link: "https://www.krmangalam.edu.in/programs/bsc-forensic-hons-research/" },

  { id: 74, title: "M.Sc. Forensic Science", duration: "2 Years", fees: "₹ 1,25,000 /-", category: "basic-applied-sciences", level: "postgraduate", link: "https://www.krmangalam.edu.in/programs/msc-forensic-science/" },

  { id: 131, title: "M.Sc. (Hons.) (Part time)", duration: "2 Years", fees: "₹ 1,25,000 /-", category: "basic-applied-sciences", level: "postgraduate", link: "https://www.krmangalam.edu.in/programs/msc-forensic-science/" },


  { id: 75, title: "Integrated B.Sc.–M.Sc. Forensic Science", duration: "5 Years", fees: "₹ 1,30,000 /-", category: "basic-applied-sciences", level: "undergraduate", link: "https://www.krmangalam.edu.in/programs/integrated-bsc-msc-forensic/" },

  { id: 76, title: "Ph.D. in Physics", duration: "Min. 3 Years", fees: "₹ 1,20,000 /-", category: "basic-applied-sciences", level: "doctorate", link: "https://www.krmangalam.edu.in/programs/phd-physics/" },
  { id: 77, title: "Ph.D. in Chemistry", duration: "Min. 3 Years", fees: "₹ 1,20,000 /-", category: "basic-applied-sciences", level: "doctorate", link: "https://www.krmangalam.edu.in/programs/phd-chemistry/" },
  { id: 78, title: "Ph.D. in Mathematics", duration: "Min. 3 Years", fees: "₹ 1,20,000 /-", category: "basic-applied-sciences", level: "doctorate", link: "https://www.krmangalam.edu.in/programs/phd-mathematics/" },
  { id: 79, title: "Ph.D. in Forensic Science", duration: "Min. 3 Years", fees: "₹ 1,20,000 /-", category: "basic-applied-sciences", level: "doctorate", link: "https://www.krmangalam.edu.in/programs/phd-forensic-science/" },
  { id: 105, title: "B.A. (Hons.) English", duration: "3 Years", fees: "₹ 1,85,000 /-", category: "liberal-arts", level: "undergraduate", link: "" },
{ id: 106, title: "B.A. (Hons. / Hons. with Research) English", duration: "4 Years", fees: "₹ 1,85,000 /-", category: "liberal-arts", level: "undergraduate", link: "" },

{ id: 107, title: "B.A. (Hons.) Economics", duration: "3 Years", fees: "₹ 1,85,000 /-", category: "liberal-arts", level: "undergraduate", link: "" },
{ id: 108, title: "B.A. (Hons. / Hons. with Research) Economics", duration: "4 Years", fees: "₹ 1,85,000 /-", category: "liberal-arts", level: "undergraduate", link: "" },

{ id: 109, title: "B.A. (Hons.) Psychology", duration: "3 Years", fees: "₹ 1,85,000 /-", category: "liberal-arts", level: "undergraduate", link: "" },
{ id: 110, title: "B.A. (Hons. / Hons. with Research) Psychology", duration: "4 Years", fees: "₹ 1,85,000 /-", category: "liberal-arts", level: "undergraduate", link: "" },


{ id: 120, title: "B.A. Programme", duration: "3 Years", fees: "₹ 1,85,000 /-", category: "liberal-arts", level: "undergraduate", link: "" },
{ id: 121, title: "B.A. (Hons. / Hons. with Research) (Liberal Arts)", duration: "4 Years", fees: "₹ 1,85,000 /-", category: "liberal-arts", level: "undergraduate", link: "" },


{ id: 111, title: "B.A. (Hons.) Political Science", duration: "3 Years", fees: "₹ 1,85,000 /-", category: "liberal-arts", level: "undergraduate", link: "" },
{ id: 112, title: "B.A. (Hons. / Hons. with Research) Political Science", duration: "4 Years", fees: "₹ 1,85,000 /-", category: "liberal-arts", level: "undergraduate", link: "" },
{ id: 80, title: "BBA Human Resource", duration: "3 Years", fees: "₹ 1,85,000 /-", category: "management-commerce", level: "undergraduate", link: "" },
{ id: 81, title: "BBA Marketing", duration: "3 Years", fees: "₹ 1,85,000 /-", category: "management-commerce", level: "undergraduate", link: "" },
{ id: 82, title: "BBA Finance", duration: "3 Years", fees: "₹ 1,85,000 /-", category: "management-commerce", level: "undergraduate", link: "" },
{ id: 83, title: "BBA International Business", duration: "3 Years", fees: "₹ 1,85,000 /-", category: "management-commerce", level: "undergraduate", link: "" },
{ id: 84, title: "BBA Travel & Tourism", duration: "3 Years", fees: "₹ 1,85,000 /-", category: "management-commerce", level: "undergraduate", link: "" },

{ id: 85, title: "BBA (Hons. / Hons. with Research) Human Resource", duration: "4 Years", fees: "₹ 1,85,000 /-", category: "management-commerce", level: "undergraduate", link: "" },
{ id: 86, title: "BBA (Hons. / Hons. with Research) Marketing", duration: "4 Years", fees: "₹ 1,85,000 /-", category: "management-commerce", level: "undergraduate", link: "" },
{ id: 87, title: "BBA (Hons. / Hons. with Research) Finance", duration: "4 Years", fees: "₹ 1,85,000 /-", category: "management-commerce", level: "undergraduate", link: "" },
{ id: 88, title: "BBA (Hons. / Hons. with Research) International Business", duration: "4 Years", fees: "₹ 1,85,000 /-", category: "management-commerce", level: "undergraduate", link: "" },
{ id: 89, title: "BBA (Hons. / Hons. with Research) Travel & Tourism", duration: "4 Years", fees: "₹ 1,85,000 /-", category: "management-commerce", level: "undergraduate", link: "" },

{ id: 90, title: "BBA (Business Analytics) with academic support of Ernst & Young (EY)", duration: "3 Years", fees: "₹ 1,85,000 /-", category: "management-commerce", level: "undergraduate", link: "" },
{ id: 91, title: "BBA (Hons. / Hons. with Research) (Business Analytics) with academic support of Ernst & Young (EY)", duration: "4 Years", fees: "₹ 1,85,000 /-", category: "management-commerce", level: "undergraduate", link: "" },

{ id: 92, title: "BBA (Entrepreneurship) with academic support of GCEC Global Foundation", duration: "3 Years", fees: "₹ 1,85,000 /-", category: "management-commerce", level: "undergraduate", link: "" },
{ id: 93, title: "BBA (Hons. / Hons. with Research) (Entrepreneurship) with academic support of GCEC Global Foundation", duration: "4 Years", fees: "₹ 1,85,000 /-", category: "management-commerce", level: "undergraduate", link: "" },

{ id: 94, title: "BBA (International Accounting and Finance) (ACCA – UK) with academic support of Grant Thornton", duration: "3 Years", fees: "₹ 1,85,000 /-", category: "management-commerce", level: "undergraduate", link: "" },
{ id: 95, title: "BBA (Hons. / Hons. with Research) (International Accounting and Finance) (ACCA – UK) with academic support of Grant Thornton", duration: "4 Years", fees: "₹ 1,85,000 /-", category: "management-commerce", level: "undergraduate", link: "" },

{ id: 96, title: "BBA (Digital Marketing) with academic support of IIDE", duration: "3 Years", fees: "₹ 1,85,000 /-", category: "management-commerce", level: "undergraduate", link: "" },
{ id: 97, title: "BBA (Hons. / Hons. with Research) (Digital Marketing) with academic support of IIDE", duration: "4 Years", fees: "₹ 1,85,000 /-", category: "management-commerce", level: "undergraduate", link: "" },

{ id: 98, title: "BBA (Logistics and Supply Chain Management) with academic support of Safexpress", duration: "3 Years", fees: "₹ 1,85,000 /-", category: "management-commerce", level: "undergraduate", link: "" },
{ id: 99, title: "BBA (Hons. / Hons. with Research) (Logistics and Supply Chain Management) with academic support of Safexpress", duration: "4 Years", fees: "₹ 1,85,000 /-", category: "management-commerce", level: "undergraduate", link: "" },

{ id: 100, title: "B.Com. (Hons.)", duration: "3 Years", fees: "₹ 1,85,000 /-", category: "commerce", level: "undergraduate", link: "" },
{ id: 101, title: "B.Com. (Hons. / Hons. with Research)", duration: "4 Years", fees: "₹ 1,85,000 /-", category: "commerce", level: "undergraduate", link: "" },

{ id: 102, title: "B.Com. (Hons.) (International Accounting and Finance) (ACCA – UK) with academic support of Grant Thornton", duration: "3 Years", fees: "₹ 1,85,000 /-", category: "management-commerce", level: "undergraduate", link: "" },
{ id: 103, title: "B.Com. (Hons. / Hons. with Research) (International Accounting and Finance) (ACCA – UK) with academic support of Grant Thornton", duration: "4 Years", fees: "₹ 1,85,000 /-", category: "management-commerce", level: "undergraduate", link: "" },

{ id: 104, title: "B.Com. Programme", duration: "3 Years", fees: "₹ 1,85,000 /-", category: "commerce", level: "undergraduate", link: "" },

{ id: 113, title: "B.Tech. (Lateral) Computer Science and Engineering (AI & ML) with Academic Support of Samatrix & IBM", duration: "3 Years", fees: "₹ 1,85,000 /-", category: "engineering-tech", level: "undergraduate", link: "" },
{ id: 114, title: "B.Tech. (Lateral) Computer Science and Engineering (Full Stack Development) with Academic Support of Xebia", duration: "3 Years", fees: "₹ 1,85,000 /-", category: "engineering-tech", level: "undergraduate", link: "" },
{ id: 115, title: "B.Tech. (Lateral) Computer Science & Engineering (UX/UI) with academic support of ImaginXP", duration: "3 Years", fees: "₹ 1,85,000 /-", category: "engineering-tech", level: "undergraduate", link: "" },
{ id: 116, title: "B.Tech. (Lateral) Computer Science and Engineering (Cyber Security) with academic support of EC-Council and IBM", duration: "3 Years", fees: "₹ 1,85,000 /-", category: "engineering-tech", level: "undergraduate", link: "" },
{ id: 117, title: "B.Tech. (Lateral) Computer Science and Engineering (Data Science) with academic support of IBM", duration: "3 Years", fees: "₹ 1,85,000 /-", category: "engineering-tech", level: "undergraduate", link: "" },
{ id: 118, title: "B.Tech. (Lateral) Computer Science & Engineering", duration: "3 Years", fees: "₹ 1,85,000 /-", category: "engineering-tech", level: "undergraduate", link: "" },
{ id: 119, title: "M.Tech. Computer Science & Engineering", duration: "2 Years", fees: "₹ 1,85,000 /-", category: "engineering-tech", level: "postgraduate", link: "" },



];

