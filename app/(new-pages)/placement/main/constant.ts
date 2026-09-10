export const stats = [
  {
    value: "12K+",
    label: "Students Placed",
  },
  {
    value: "56.6 LPA",
    label: "Highest CTC",
  },
  {
    value: "7.5 LPA",
    label: "Median CTC",
  },
  {
    value: "800+",
    label: "Recruiters",
  },
  {
    value: "92%",
    label: "Eligible Cohort Placed",
    highlight: true,
  },
];

export const outcomesSchools = [
  {
    code: "SOET",
    schoolName: "School of Engineering & Technology",
    placementRate: "85%",
    medianCtc: "9.20 LPA",
  },
  {
    code: "SOMC",
    schoolName: "School of Management & Commerce",
    placementRate: "95%",
    medianCtc: "8.50 LPA",
  },
  {
    code: "SOLS",
    schoolName: "School of Legal Studies",
    placementRate: "91%",
    medianCtc: "5.50 LPA",
  },
  {
    code: "SOLS",
    schoolName: "School of Legal Studies",
    placementRate: "91%",
    medianCtc: "5.50 LPA",
  },
];

export interface StudentSuccessStory {
  image: string;
  imageAlt?: string;
  category: string;
  quote: string;
  name: string;
  batch: string;
  placementLink: string;
}

const stories: StudentSuccessStory[] = [
  {
    image: "/placements/main/success-girl.jpg",
    imageAlt: "Namrata Muralidharan",
    category: "Student Success Story",
    quote:
      "My journey at K.R. Mangalam University, pursuing BCA in Artificial Intelligence & Data Science, has been a transformative blend of knowledge, innovation, and hands-on learning.",
    name: "Namrata Muralidharan",
    batch: "BCA (AI & DS) 2024–26 batch",
    placementLink: "#",
  },
  // more students...
];

export interface RecruiterLogo {
  imageUrl: string;
  alt: string;
  width: number;
  height: number;
}

export const ourTopRecruitersLogos: RecruiterLogo[] = [
  {
    imageUrl: "/placements/main/tata.png",
    alt: "Tata",
    width: 126,
    height: 76,
  },
  {
    imageUrl: "/placements/main/tata.png",
    alt: "Tata",
    width: 126,
    height: 76,
  },
  {
    imageUrl: "/placements/main/tata.png",
    alt: "Tata",
    width: 126,
    height: 76,
  },
  {
    imageUrl: "/placements/main/tata.png",
    alt: "Tata",
    width: 126,
    height: 76,
  },
  {
    imageUrl: "/placements/main/tata.png",
    alt: "Tata",
    width: 126,
    height: 76,
  },
  {
    imageUrl: "/placements/main/tata.png",
    alt: "Tata",
    width: 126,
    height: 76,
  },
];

export interface InterviewSuccessStory {
  id: number;
  image: string;
  imageAlt?: string;
  course: string;
  name: string;
  school: string;
  package: string;
  companyLogo: string;
  companyName?: string;
}

export const interviewSuccessStories: InterviewSuccessStory[] = [
  {
    id: 1,
    image: "/placements/main/rishabh.png",
    imageAlt: "Rishab Bakshi",
    course: "BCA",
    name: "Rishab Bakshi",
    school: "School of Engineering and Technology",
    package: "56.6 LPA",
    companyLogo: "/placements/main/ferrari.png",
    companyName: "Ferrari",
  },
  {
    id: 2,
    image: "/placements/main/student-2.png",
    imageAlt: "Student Name",
    course: "B.Tech",
    name: "Student Name",
    school: "School of Engineering and Technology",
    package: "32 LPA",
    companyLogo: "/placements/main/company-2.png",
    companyName: "Company Name",
  },
  {
    id: 3,
    image: "/placements/main/student-3.png",
    imageAlt: "Student Name",
    course: "BCA",
    name: "Student Name",
    school: "School of Engineering and Technology",
    package: "25 LPA",
    companyLogo: "/placements/main/company-3.png",
    companyName: "Company Name",
  },
  {
    id: 4,
    image: "/placements/main/student-4.png",
    imageAlt: "Student Name",
    course: "B.Tech",
    name: "Student Name",
    school: "School of Engineering and Technology",
    package: "20 LPA",
    companyLogo: "/placements/main/company-4.png",
    companyName: "Company Name",
  },
];

export interface CDCTeamMemberData {
  id: number;
  image: string;
  imageAlt: string;
  name: string;
  designation: string;
  email: string;
}

export const cdcTeamMembers: CDCTeamMemberData[] = [
  {
    id: 1,
    image: "/placements/main/rishabh.png",
    imageAlt: "Dr. Vibha Thakur",
    name: "Dr. Vibha Thakur",
    designation: "Director | Career Development Centre",
    email: "director.cdc@krmangalam.edu.in",
  },
    {
    id: 1,
    image: "/placements/main/rishabh.png",
    imageAlt: "Dr. Vibha Thakur",
    name: "Dr. Vibha Thakur",
    designation: "Director | Career Development Centre",
    email: "director.cdc@krmangalam.edu.in",
  },
    {
    id: 1,
    image: "/placements/main/rishabh.png",
    imageAlt: "Dr. Vibha Thakur",
    name: "Dr. Vibha Thakur",
    designation: "Director | Career Development Centre",
    email: "director.cdc@krmangalam.edu.in",
  },
    {
    id: 1,
    image: "/placements/main/rishabh.png",
    imageAlt: "Dr. Vibha Thakur",
    name: "Dr. Vibha Thakur",
    designation: "Director | Career Development Centre",
    email: "director.cdc@krmangalam.edu.in",
  },
    {
    id: 1,
    image: "/placements/main/rishabh.png",
    imageAlt: "Dr. Vibha Thakur",
    name: "Dr. Vibha Thakur",
    designation: "Director | Career Development Centre",
    email: "director.cdc@krmangalam.edu.in",
  },
    {
    id: 1,
    image: "/placements/main/rishabh.png",
    imageAlt: "Dr. Vibha Thakur",
    name: "Dr. Vibha Thakur",
    designation: "Director | Career Development Centre",
    email: "director.cdc@krmangalam.edu.in",
  },
    {
    id: 1,
    image: "/placements/main/rishabh.png",
    imageAlt: "Dr. Vibha Thakur",
    name: "Dr. Vibha Thakur",
    designation: "Director | Career Development Centre",
    email: "director.cdc@krmangalam.edu.in",
  },

    {
    id: 1,
    image: "/placements/main/rishabh.png",
    imageAlt: "Dr. Vibha Thakur",
    name: "Dr. Vibha Thakur",
    designation: "Director | Career Development Centre",
    email: "director.cdc@krmangalam.edu.in",
  },
    {
    id: 1,
    image: "/placements/main/rishabh.png",
    imageAlt: "Dr. Vibha Thakur",
    name: "Dr. Vibha Thakur",
    designation: "Director | Career Development Centre",
    email: "director.cdc@krmangalam.edu.in",
  },
    {
    id: 1,
    image: "/placements/main/rishabh.png",
    imageAlt: "Dr. Vibha Thakur",
    name: "Dr. Vibha Thakur",
    designation: "Director | Career Development Centre",
    email: "director.cdc@krmangalam.edu.in",
  },

];
