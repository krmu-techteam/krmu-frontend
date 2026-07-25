export const curriculumData = [
  // 1st Year
  {
    year: "1st Year",
    bgImage: "url(/demo/year-1.png)",
    // image: "/demo/year1-bg.png",
    semesters: [
      {
        title: "Semester 1",
        subjects: [
          "Probability, Statistics & Linear Algebra",
          "Programming for Problem Solving Using Python",
          "Foundations of Robotics, IoT & Intelligent Systems",
          "Basics of Electronics & Digital Logic Design",
          "CS Fundamentals & Career Pathways",
          `<strong>Maker Lab:</strong> Tinkering with Technology`,
        ],
      },
      {
        title: "Semester 2",
        subjects: [
          "Discrete Mathematics",
          "Foundational C++ for Robotics",
          "Robotics Kinematics, Coordinates & Jacobian",
          "Engineering Physics",
          "AI Fluency & Digital Intelligence",
          "Design Thinking & Prototyping",
          "Environmental Studies",
          "Summer Internship-I",
        ],
      },
    ],
  },

  // 2nd Year
  {
    year: "2nd Year",
    bgImage: "url(/demo/year-2.png)",
    // image: "/demo/side-1.png",
    semesters: [
      {
        title: "Semester 3",
        subjects: [
          "Data Structures",
          "Database Management Systems",
          "Computer Organization & System Architecture",
          "Control Systems for Robotics",
          "Robot Modelling, Simulation & ROS 2",
          "Foundations of Everyday Communication",
          "Competitive Coding I",
          "Summer Internship-I (Assessment)",
        ],
      },
      {
        title: "Semester 4",
        subjects: [
          "Design & Analysis of Algorithms",
          "Operating Systems",
          "Object-Oriented Programming with Java",
          "Value Added Course II",
          "Embedded AI & Robotic Systems",
          "Professional & Workplace Communication",
          "Competitive Coding II",
          "Minor Project I",
          "Summer Internship-II",
        ],
      },
    ],
  },
  // 3rd Year
  {
    year: "3rd Year",
    bgImage: "url(/demo/year-3.png)",
    // image: "/demo/year3-bg.png",
    semesters: [
      {
        title: "Semester 5",
        subjects: [
          "Software Engineering & System Design",
          "Computer Networks",
          "AI & ML for Robotics",
          "Computer Vision & Robot Perception",
          "Advanced Communication and Interview Mastery",
          "Competitive Coding III",
          "Summer Internship-II (Assessment)",
        ],
      },
      {
        title: "Semester 6",
        subjects: [
          "Robot Dynamics, Trajectories & Advanced Control",
          "Professional Problem Solving & Career Readiness-I",
          "Motion Planning, SLAM & Autonomous Navigation",
          "Deep Reinforcement Learning & Intelligent Robot Behavior",
          "Arithmetic & Reasoning",
          "Value Added Course III",
          "Competitive Coding II",
          "Minor Project II",
          "Summer Internship-III",
        ],
      },
    ],
  },
  // 4th Year
  {
    year: "4th Year",
    bgImage: "url(/demo/year-4.png)",
    // image: "/demo/year4-bg.png",
    semesters: [
      {
        title: "Semester 7",
        subjects: [
          "Professional Problem Solving & Career Readiness-II",
          "Autonomous Systems, HRI & Robotics Capstone",
          "Capstone Project I",
          "Summer Internship-III (Assessment)",
        ],
      },
      {
        title: "Semester 8",
        subjects: ["Capstone Project II / Internship"],
      },
    ],
  },

  // Add 2nd Year, 3rd Year, 4th Year here...
];

export type BeyondSlideType = {
  img_url: string;
  alt: string;
};

export const beyondSlides: BeyondSlideType[] = [
  {
    img_url: "/demo/slide-1.png",
    alt: "Slide 1",
  },
  {
    img_url: "/demo/slide-1.png",
    alt: "Slide 2",
  },
  {
    img_url: "/demo/slide-1.png",
    alt: "Slide 3",
  },
  {
    img_url: "/demo/slide-1.png",
    alt: "Slide 4",
  },
  {
    img_url: "/demo/slide-1.png",
    alt: "Slide 5",
  },
];

export const faqData = [
  {
    category: "General",
    faqs: [
      {
        question: "What are the admission office hours at KRMU?",
        answer:
          "The admission office is open Monday to Saturday from 9:00 AM to 5:00 PM.",
      },
      {
        question: "Where is K.R. Mangalam University located?",
        answer: "K.R. Mangalam University is located in Gurugram, Haryana.",
      },
    ],
  },
  {
    category: "Programme",
    faqs: [
      {
        question: "Does KRMU offer diploma programmes?",
        answer:
          "Yes, K.R. Mangalam University offers Diploma in Pharmacy and other programmes designed with industry-focused curriculum.",
      },
      {
        question: "Are internships included in programmes?",
        answer:
          "Yes, most programmes include internships, live projects and industry exposure.",
      },
    ],
  },
  {
    category: "Admissions",
    faqs: [
      {
        question: "How can I apply?",
        answer:
          "You can apply online through the university admission portal or visit the campus admission office.",
      },
      {
        question: "Is there an entrance exam?",
        answer:
          "Some programmes require entrance exams while others are merit-based.",
      },
    ],
  },
  {
    category: "Fees",
    faqs: [
      {
        question: "Can I pay fees in installments?",
        answer: "Yes, installment options are available for eligible students.",
      },
      {
        question: "Are scholarships available?",
        answer:
          "Yes, merit-based and category-based scholarships are available.",
      },
    ],
  },
];
