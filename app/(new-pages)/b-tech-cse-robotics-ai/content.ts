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
    img_url: "/demo/1.png",
    alt: "Slide 1",
  },
  {
    img_url: "/demo/2.png",
    alt: "Slide 2",
  },
  {
    img_url: "/demo/3.png",
    alt: "Slide 3",
  },
  {
    img_url: "/demo/4.png",
    alt: "Slide 4",
  },
  {
    img_url: "/demo/5.png",
    alt: "Slide 5",
  },
  {
    img_url: "/demo/6.png",
    alt: "Slide 5",
  },
];

export const faqData = [
  {
    category: "General",
    faqs: [
      {
        question: "Does K.R. Mangalam University offer Diploma courses?",
        answer:
          "Yes, K.R. Mangalam University offers diploma courses to cater to diverse interests and career aspirations. We currently have a Diploma in Pharmacy programme structured to provide practical and theoretical knowledge.",
      },
      {
        question: "What are the admission office hours at KRMU?",
        answer: "The office is open from 9:00 AM to 4:00 PM",
      },
      {
        question: "Where can I apply for UG, PG, Ph.D. or Diploma programmes?",
        answer: "You can visit https://admissions.krmangalam.edu.in/ to apply for any of our programmes.",
      },
      {
        question: "Are guest lectures or workshops part of the course?",
        answer: "Yes, frequent expert sessions, industry talks, and technical workshops are organised.",
      },
      {
        question: "Is there a hostel facility on campus?",
        answer: "Yes, the university offers on-campus residential facilities with separate hostels for boys and girls, equipped with all essential amenities and round-the-clock security.",
      },
    ],
  },
  {
    category: "Programme",
    faqs: [
      {
        question: "What are the subjects in B.Tech. Robotics and AI?",
        answer:
          "Core subjects include: Programming in Python, C++, Java, Design & Analysis of Algorithms, Engineering Physics/Chemistry, Design Thinking & Prototyping, Arithmetic & Reasoning, Modern Software Engineering, Robot Kinematics & Dynamics, System Design Embedded/Autonomous,",
      },
      {
        question: "Is coding mandatory in this programme?",
        answer:
          "Yes. Coding is a fundamental skill to be taught in Robotics and AI. The programmes consist of around 40% coding in Python, C++ & Java.",
      },
      {
        question: "What skills will I learn in this programme?",
        answer:
          "You gain expertise in programming, AI algorithms, computer vision, systems engineering, automation engineering, etc, which positions you as a reliable asset in the robotics and AI space.",
      },
         {
        question: "Is B.Tech. AI & Robotics difficult?",
        answer:
          "Moderately. B.Tech. CSE in Robotics and AI includes subjects such as Maths, Programming, and Engineering concepts, which makes it moderately difficult compared to general specialisations.",
      },
        {
        question: "How is Robotics & AI different from B.Tech. AI/ML?",
        answer:
          "The robotics and AI programme focuses on hardware-software integration, control systems, kinematics (the geometry of motion), and sensor fusion (Lidar, Radar, Cameras). On the other hand, AI/ML focuses more on Pattern recognition, predictive modelling, large-scale data processing, and neural network architecture.",
      },
        {
        question: "What robots and hardware will I work with during the programme?",
        answer:
          "During the programme, you will generally work with a range of robotic systems and related hardware components in a practical learning environment. The focus is on gaining hands-on experience with intelligent machines, embedded systems, control mechanisms, and integrated hardware–software setups.",
      },
        {
        question: "Are internships included with this programme?",
        answer:
          "Yes, internships, externships and industry training are an integral part of programmes offered by KRMU.",
      },
        {
        question: "What are the job opportunities after B.Tech. in Robotics & AI?",
        answer:
          "This programme opens doors for many career options in positions such as: Robotics Engineer, Computer Vision Engineer, AI Software Engineer, Embedded AI Developer, Control Systems Engineer, RPA/Automation Engineer and AI Research Scientist, etc.",
      },
        {
        question: "Is robotics and AI a good career for the future?",
        answer:
          "Absolutely. Robotics and AI are in high demand due to the rise of automation, smart technologies like AI, and Industry 4.0, allowing students to build an impactful, high-paying career.",
      },
    ],
  },
  {
    category: "Fees",
    faqs: [
      {
        question: "What is the fees of Ph.D. programmes at KRMU?",
        answer:
          "The fees for all Ph.D. programmes is ₹1,30,000 at K.R. Mangalam University.",
      },
      {
        question: "Does K.R. Mangalam University offer any scholarships?",
        answer:
          "Yes, we offer up to 100% scholarships based on merit, quota, and academic performance to deserving students.",
      },
      {
        question: "Can I take an education loan to finance my education fees?",
        answer:
          "Yes! We have partnered with several banks and financial institutions like IDFC Bank, Axis Bank, ICICI Bank, Propelled, and GrayQuest to offer great loan options to our students.",
      },
      {
        question: "Is there an EMI or instalment payment option for the fees?",
        answer:
          "Many universities offer fee payment in instalments or partner with financial institutions for education loans.",
      },
    ],
  },
  {
    category: "Admissions",
    faqs: [
      {
        question: "Does K.R. Mangalam University have an entrance exam?",
        answer: "The University has formed its own entrance exam K.R. Mangalam Entrance Exam (KREE).",
      },
      {
        question: "What are the Admission Office hours?",
        answer:
          "The office is open from 9:00 AM to 4:00 PM.",
      },
      {
        question: "What is the admission procedure at KRMU?",
        answer:
          "To apply at KRMU, you must visit our admission page, fill the registration form, appear for KREE (entrance test), and finally attend the faculty led interview to secure your admission.",
      },
      {
        question: "What is the application fee for admission at K.R. Mangalam University?",
        answer:
          "An application fee of ₹1,000 must be submitted during the application process.",
      },
    ],
  },
];
