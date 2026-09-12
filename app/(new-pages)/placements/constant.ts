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
    placementRate: 85,
    medianCtc: "9.20 LPA",
  },
  {
    code: "SOMC",
    schoolName: "School of Management & Commerce",
    placementRate: 95,
    medianCtc: "8.50 LPA",
  },
  {
    code: "SOLS",
    schoolName: "School of Legal Studies",
    placementRate: 91,
    medianCtc: "5.50 LPA",
  },
  {
    code: "SOLA",
    schoolName: "School of Liberal Arts",
    placementRate: 85,
    medianCtc: "7.10 LPA",
  },
  {
    code: "SOED",
    schoolName: "School of Education",
    placementRate: 84,
    medianCtc: "5.50 LPA",
  },
  {
    code: "SBAS",
    schoolName: "School of Basic & Applied Sciences",
    placementRate: 82,
    medianCtc: "6.20 LPA",
  },
  {
    code: "SEMCE",
    schoolName: "School of Emerging Media and Creator Economy",
    placementRate: 94,
    medianCtc: "6.70 LPA",
  },
  {
    code: "SMAS",
    schoolName: "School of Medical & Allied Sciences",
    placementRate: 85,
    medianCtc: "5.20 LPA",
  },
  {
    code: "SOAD",
    schoolName: "School of Architecture & Design",
    placementRate: 86,
    medianCtc: "6.30 LPA",
  },
  {
    code: "SOAS",
    schoolName: "School of Agricultural Sciences",
    placementRate: 86,
    medianCtc: "5.40 LPA",
  },
  {
    code: "SOHMCT",
    schoolName: "School of Hotel Management & Catering Technology",
    placementRate: 83,
    medianCtc: "5.60 LPA",
  },
  {
    code: "SPRS",
    schoolName: "School of Physiotherapy and Rehabilitation Sciences",
    placementRate: 84,
    medianCtc: "5.90 LPA",
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
    imageUrl: "https://www.krmangalam.edu.in/images/recuiters/rkclick.webp",
    alt: "RK Click",
    width: 126,
    height: 76,
  },
  {
    imageUrl: "https://www.krmangalam.edu.in/images/recuiters/ibm.webp",
    alt: "IBM",
    width: 126,
    height: 76,
  },
  {
    imageUrl: "https://www.krmangalam.edu.in/images/recuiters/xebia.webp",
    alt: "xebia",
    width: 126,
    height: 76,
  },
  {
    imageUrl: "https://www.krmangalam.edu.in/images/recuiters/aecc.webp",
    alt: "aecc",
    width: 126,
    height: 76,
  },
  {
    imageUrl: "https://www.krmangalam.edu.in/images/recuiters/systique.webp",
    alt: "systique",
    width: 126,
    height: 76,
  },
  {
    imageUrl: "https://www.krmangalam.edu.in/images/recuiters/medanta.webp",
    alt: "Medanta",
    width: 126,
    height: 76,
  },
  {
    imageUrl: "https://www.krmangalam.edu.in/images/recuiters/samatrix.webp",
    alt: "samatrix",
    width: 126,
    height: 76,
  },
  {
    imageUrl: "https://www.krmangalam.edu.in/images/recuiters/ec-council.webp",
    alt: "samatrix",
    width: 126,
    height: 76,
  },
  {
    imageUrl: "https://www.krmangalam.edu.in/images/recuiters/deep.webp",
    alt: "deep",
    width: 126,
    height: 76,
  },
  {
    imageUrl: "https://www.krmangalam.edu.in/images/recuiters/fdci.webp",
    alt: "fdci",
    width: 126,
    height: 76,
  },
  {
    imageUrl:
      "https://www.krmangalam.edu.in/images/recuiters/grant-thorton.webp",
    alt: "grant-thorton",
    width: 126,
    height: 76,
  },
  {
    imageUrl: "https://www.krmangalam.edu.in/images/recuiters/cesim.webp",
    alt: "cesim",
    width: 126,
    height: 76,
  },
  {
    imageUrl: "https://www.krmangalam.edu.in/images/recuiters/apple.webp",
    alt: "apple",
    width: 126,
    height: 76,
  },
  {
    imageUrl: "https://www.krmangalam.edu.in/images/recuiters/google.webp",
    alt: "google",
    width: 126,
    height: 76,
  },
  {
    imageUrl: "https://www.krmangalam.edu.in/images/recuiters/icsi.webp",
    alt: "icsi",
    width: 126,
    height: 76,
  },
  {
    imageUrl: "https://www.krmangalam.edu.in/images/recuiters/odour.webp",
    alt: "odour",
    width: 126,
    height: 76,
  },
  {
    imageUrl: "https://www.krmangalam.edu.in/images/recuiters/wisdom.webp",
    alt: "wisdom",
    width: 126,
    height: 76,
  },
  {
    imageUrl:
      "https://www.krmangalam.edu.in/images/recuiters/ignite-minds.webp",
    alt: "ignite-minds",
    width: 126,
    height: 76,
  },
  {
    imageUrl: "https://www.krmangalam.edu.in/images/recuiters/gcec.webp",
    alt: "gcec",
    width: 126,
    height: 76,
  },
  {
    imageUrl: "https://www.krmangalam.edu.in/images/recuiters/pranab.webp",
    alt: "pranab",
    width: 126,
    height: 76,
  },
  {
    imageUrl:
      "https://www.krmangalam.edu.in/images/recuiters/aditya-birla.webp",
    alt: "aditya-birla",
    width: 126,
    height: 76,
  },
  {
    imageUrl:
      "https://www.krmangalam.edu.in/images/recuiters/politechnika.webp",
    alt: "politechnika",
    width: 126,
    height: 76,
  },
  {
    imageUrl: "https://www.krmangalam.edu.in/images/recuiters/mieg.webp",
    alt: "mieg",
    width: 126,
    height: 76,
  },
  {
    imageUrl: "https://www.krmangalam.edu.in/images/recuiters/suai.webp",
    alt: "suai",
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
    image: "https://www.krmangalam.edu.in/images/success-stories/rishb-bakshi.jpg",
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
    image: "https://www.krmangalam.edu.in/images/success-stories/daksh-mehta.jpg",
    imageAlt: "DAKSH MEHTA",
    course: "B.Tech. CSE",
    name: "DAKSH MEHTA",
    school: "School of Engineering and Technology",
    package: "36 LPA",
    companyLogo: "https://krmangalam.edu.in/images/logos/logo-unias-india.jpeg",
    companyName: "Unias",
  },
  {
    id: 3,
    image: "https://www.krmangalam.edu.in/images/success-stories/veneet-verma.jpg",
    imageAlt: "VINEET VERMA",
    course: "B.Tech. CSE",
    name: "VINEET VERMA",
    school: "School of Engineering and Technology",
    package: "34 LPA",
    companyLogo: "https://krmangalam.edu.in/images/logos/autodesk.svg",
    companyName: "Autodesk",
  },
  {
    id: 4,
    image: "https://www.krmangalam.edu.in/images/success-stories/shourya.jpg",
    imageAlt: "SHOURYA TYAGI",
    course: "B.Tech. CSE",
    name: "SHOURYA TYAGI",
    school: "School of Engineering and Technology",
    package: "34 LPA",
    companyLogo: "https://krmangalam.edu.in/images/logos/autodesk.svg",
    companyName: "Autodesk",
  },
  {
    id: 5,
    image: "https://www.krmangalam.edu.in/images/success-stories/om-mishra.jpg",
    imageAlt: "Om Mishra",
    course: "B.Tech. CSE",
    name: "Om Mishra",
    school: "School of Engineering and Technology",
    package: "24 LPA",
    companyLogo: "https://krmangalam.edu.in/images/logos/cmo.png",
    companyName: "Como",
  }, 
  {
    id: 5,
    image: "https://www.krmangalam.edu.in/images/success-stories/nitesh.jpg",
    imageAlt: "NITESH",
    course: "MCA",
    name: "NITESH",
    school: "School of Engineering and Technology",
    package: "12 LPA",
    companyLogo: "https://krmangalam.edu.in/images/logos/akal-logo.png",
    companyName: "AKAL",
  },
  {
    id: 6,
    image: "https://www.krmangalam.edu.in/images/success-stories/naman-pune.jpg",
    imageAlt: "Naman Pune",
    course: "B.Tech. CSE",
    name: "Naman Pune",
    school: "School of Engineering and Technology",
    package: "10.6 LPA",
    companyLogo: "https://krmangalam.edu.in/images/logos/hsc-logo-1.png",
    companyName: "Systique",
  },
  {
    id: 6,
    image: "https://www.krmangalam.edu.in/images/success-stories/ayush-sai.jpg",
    imageAlt: "Ayush Sai",
    course: "B.Tech. CSE",
    name: "Ayush Sai",
    school: "School of Engineering and Technology",
    package: "10.6 LPA",
    companyLogo: "https://krmangalam.edu.in/images/logos/hsc-logo-1.png",
    companyName: "Systique",
  },
];

export interface CDCTeamMemberData {
  id: number;
  image: string;
  imageAlt?: string;
  name: string;
  designation: string;
  email: string;
}

export const cdcTeamMembers: CDCTeamMemberData[] = [
  {
    id: 1,
    image: "https://krmangalam.edu.in/images/cdc-team/dr-vibha-thakur.jpg",
    imageAlt: "Dr. Vibha Thakur",
    name: "Dr. Vibha Thakur",
    designation: "Director | Career Development Centre",
    email: "director.cdc@krmangalam.edu.in",
  },
  {
    id: 2,
    image: "https://krmangalam.edu.in/images/cdc-team/jharna-jagtiani.jpg",
    imageAlt: "Jharna Jagtiani",
    name: "Jharna Jagtiani",
    designation: "Senior Manager",
    email: "jharnavijay.jagtiani@krmangalam.edu.in",
  },
  {
    id: 3,
    image: "https://krmangalam.edu.in/images/cdc-team/charu-gola.jpg",
    imageAlt: "Charu Gola",
    name: "Charu Gola",
    designation: "Assistant Manager- CDC",
    email: "charu.gola@krmangalam.edu.in",
  },
  {
    id: 4,
    image: "https://krmangalam.edu.in/images/cdc-team/sreejita-saha.jpg",
    imageAlt: "Sreejita Saha",
    name: "Sreejita Saha",
    designation: "Manager- Career Development Centre",
    email: "sreejita.saha@krmangalam.edu.in",
  },
  {
    id: 5,
    image: "https://krmangalam.edu.in/images/cdc-team/dhaval-bhaskar.jpg",
    imageAlt: "Dhaval Bhaskar",
    name: "Dhaval Bhaskar",
    designation: "Sr. Placement Manager",
    email: "dhaval.bhaskar@krmangalam.edu.in",
  },

  {
    id: 6,
    image: "https://krmangalam.edu.in/images/cdc-team/vanshita-jain.jpg",
    imageAlt: "Vanshita Jain",
    name: "Vanshita Jain",
    designation: "Internship Manager",
    email: "vanshita.jain@krmangalam.edu.in",
  },
];
