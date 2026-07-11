"use client";
import { useState } from "react";
import { faqData } from "../content";

// export const faqData = [
//   {
//     ques: "What is B.Tech. CSE, and what makes it unique at K.R. Mangalam University?",
//     ans: "B.Tech. CSE (Bachelor of Technology in Computer Science and Engineering) at our university is a well-rounded programme that combines a rigorous curriculum, expert faculty, and modern facilities, providing a strong foundation for a career in the tech industry.",
//   },
//   {
//     ques: "What are the admission requirements for the B.Tech. CSE programme?",
//     ans: "Admission in B.Tech. Computer Science programme typically requires candidates to have completed their 10+2 education with a minimum specified percentage in relevant subjects. For precise criteria, please refer to our official website.",
//   },
//   {
//     ques: "Does the programme offer opportunities for research and innovation?",
//     ans: "Absolutely, our university actively promotes research and innovation. Students are encouraged to undertake research projects and collaborate with faculty on advanced technological developments making us the best B.Tech. College in Delhi.",
//   },
//   {
//     ques: "What facilities and resources are available for students in the B.Tech. CSE programme?",
//     ans: "We provide fully-equipped computer labs, an extensive digital library, access to various online resources, and opportunities for involvement in tech clubs and competitive events.",
//   },
//   {
//     ques: "How should I filter the best computer science engineering colleges?",
//     ans: "While choosing a B Tech computer science university, you must ensure that the college is accredited and recognised by legal bodies, has an experienced faculty, offers great placement and industrial exposure, and most importantly, has recruitment partnerships with leading tech firms.",
//   },
//   {
//     ques: "What are the career opportunities after completing a B Tech of Computer Science at K.R. Mangalam University?",
//     ans: "A B Tech from Computer Science at K.R. Mangalam University opens doors to exciting careers in software development, artificial intelligence, cybersecurity, data science, and IT consulting. Graduates can work with top tech companies, and startups, or even pursue higher studies and research in emerging technologies.",
//   },
//   {
//     ques: "Is JEE not Mandatory to apply for B.Tech. course at KRMU?",
//     ans: "Admission in B.Tech. without JEE is possible at K.R. Mangalam University (KRMU). Candidates can either take the university entrance exam, i.e., K.R. Mangalam University Entrance Exam (KREE), which is followed by a faculty-led interview, or obtain direct merit-based admission based on their 10+2 PCM scores (minimum 50% aggregate).",
//   },
//   {
//     ques: "What are the in-demand specialisations of the B.Tech. CSE engineering course?",
//     ans: "Artificial Intelligence and Machine Learning, Robotics, Data Science, Cybersecurity, and Cloud computing are the most popular B.Tech. specialisations.",
//   },
//   {
//     ques: "What is the Difference Between B.Tech. and B.E.?",
//     ans: "While B.Tech. focuses on practical application, skill-based knowledge, and technical skill sets, B.E. emphasises theoretical aspects and fundamental engineering principles.",
//   },
//   {
//     ques: "What are the B.Tech. CSE course subjects at K.R. Mangalam University?",
//     ans: "Programming, Data Structures & Algorithms, Operating Systems, Computer Networks, DBMS, Artificial Intelligence, Machine Learning, Cybersecurity, Cloud Computing, and Big Data Analytics are among the subjects covered in KRMU's B.Tech. CSE courses. Depending on their professional interests, students can also select from specialisation electives in fields like AI, Data Science, or Full Stack Development.",
//   },
//   {
//     ques: "Are there any additional charges in B.Tech. CSE course fees apart from tuition costs?",
//     ans: "Yes, students may need to pay for hostel, transport, and other optional facilities.",
//   },
//   {
//     ques: "What is the B.Tech. CSE fee structure?",
//     ans: "The B.Tech. CSE fee structure includes annual tuition fees, academic charges, and one-time admission costs, typically divided across four years.",
//   },
// ];

export default function Accordion() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="grid lg:grid-cols-2 gap-10">
      {faqData.map((item, i) => (
        <div key={i} className="border-b-[2px] border-[rgba(5,22,48,0.05)]">
          {/* HEADER */}
          <div
            onClick={() => setActive(active === i ? null : i)}
            className="flex items-center justify-between cursor-pointer py-2.5  lg:max-w-[500px] xl:max-w-full"
          >
            <span className="font-bold pr-10 sm:pr-0">{item.ques}</span>

            <svg
              className={`transition-transform duration-300 ${
                active === i ? "rotate-90" : ""
              }`}
              width="14"
              height="14"
              viewBox="0 0 320 512"
              fill="currentColor"
            >
              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
            </svg>
          </div>

          {/* CONTENT */}
          <div
            className={`px-[15px] pb-[10px] text-gray-600 text-[14px] transition-all duration-300 ${
              active === i ? "block" : "hidden"
            }`}
          >
            <p>{item.ans}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
