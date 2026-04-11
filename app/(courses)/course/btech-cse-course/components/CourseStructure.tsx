"use client";

import { useState } from "react";

export default function CourseStructure() {
  const [open, setOpen] = useState<number | null>(0);

  const data = [
    {
      year: "Year 1",
      semesters: [
        {
          title: "Semester I",
          subjects: [
            "Computational Mathematics - I",
            "Fundamentals of Web Development",
            "Computer Science Fundamentals & Career Pathways",
            "Environmental Studies",
            "Programming for Problem Solving Using Python",
            "Engineering Physics/Engineering Chemistry",
            "Design Thinking & Prototyping / Maker Lab: Tinkering with Technology",
          ],
        },
        {
          title: "Semester II",
          subjects: [
            "Computational Mathematics - II",
            "Advanced Web Development",
            "Minor Project - I",
            "Open Elective - I",
            "Data Structures",
            "Engineering Chemistry/Engineering Physics",
            "Maker Lab: Tinkering with Technology/Design Thinking & Prototyping",
          ],
        },
      ],
    },
    {
      year: "Year 2",
      semesters: [
        {
          title: "Semester III",
          subjects: [
            "Design & Analysis of Algorithms",
            "Object-Oriented Programming with Java",
            "Open Elective-II",
            "Competitive Coding - I",
            "Community Service",
            "Digital Logic Design",
            "Database Management Systems",
            "Verbal Ability",
            "Summer Internship-I (Assessment)",
          ],
        },
        {
          title: "Semester IV",
          subjects: [
            "From NAND to Tetris: Building a Computer from Scratch",
            "Modern Software Engineering & Agile Practices",
            "Open Elective-III",
            "Competitive Coding - II",
            "Club/Society",
            "Essentials of Machine Learning",
            "Data Analytics with PowerBI & KNIME",
            "Communication & Personality Development",
            "Minor Project-II",
          ],
        },
      ],
    },
    {
      year: "Year 3",
      semesters: [
        {
          title: "Semester V",
          subjects: [
            "Computer Networks",
            "Cloud Computing & DevOps",
            "Value Added Course (VAC)",
            "Summer Internship-II (Assessment)",
            "Operating Systems",
            "Arithmetic and Reasoning",
            "Competitive Coding - III",
          ],
        },
        {
          title: "Semester VI",
          subjects: [
            "Cyber Security & Ethical Hacking",
            "Cross-Platform Mobile Development",
            "Value Added Course (VAC)",
            "Minor Project-III",
            "Applied Generative AI",
            "Comprehensive Placement Preparation",
            "Competitive Coding - IV",
          ],
        },
      ],
    },
    {
      year: "Year 4",
      semesters: [
        {
          title: "Semester V",
          subjects: [
            "Discipline Specific Elective-I",
            "MOOC (Swayam/ NPTEL/AICTE’s ELIS )",
            "Summer Internship-III (Assessment)",
            "Major Project -I",
            "Discipline Specific Elective-II",
          ],
        },
        {
          title: "Semester VI",
          subjects: [
            "Industry Internship",
            "Major Project -II",
            "MOOC (Swayam/ NPTEL/AICTE’s ELIS )",
          ],
        },
      ],
    },
  ];

  return (
    <section className="py-16 px-4 md:px-10 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto">
        {/* 🔥 Top Content */}
        <div className="text-center mb-12">
          {/* <p className="italic text-gray-600">
            Apply for KRMU’s B.Tech. CSE Course!
          </p> */}

          {/* <button className="mt-3 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
            Enrol Now
          </button> */}

          <h2 className="text-2xl md:text-3xl font-bold mt-4">
            B.Tech. CSE Course Structure
          </h2>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Strong engineering basics, core computer science, advanced
            specialisations, industry-grade projects, and internships make up
            the KRMU's meticulously planned four-year B.Tech. CSE course.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-6">
          {data.map((yearData, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              {/* Header */}
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left text-lg font-semibold"
              >
                {yearData.year}
                <span className="text-blue-600 text-2xl">
                  {open === index ? "−" : "+"}
                </span>
              </button>

              {/* Content */}
              <div
                className={`transition-all duration-300 ${
                  open === index
                    ? "max-h-[2000px] p-6 pt-0"
                    : "max-h-0 overflow-hidden"
                }`}
              >
                <div className="grid lg:grid-cols-2 gap-6">
                  {yearData.semesters.map((sem, i) => (
                    <div
                      key={i}
                      className="relative group bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300"
                    >
                      {/* Glow */}
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-blue-100 via-transparent to-blue-100 blur-xl"></div>

                      {/* Title */}
                      <h3 className="relative text-lg font-semibold text-blue-600 mb-4">
                        {sem.title}
                      </h3>

                      {/* Subjects */}
                      <div className="relative max-h-[260px] overflow-y-auto pr-2 custom-scroll">
                        <ul className="space-y-2 text-gray-700 text-sm">
                          {sem.subjects.map((subj, j) => (
                            <li key={j} className="flex items-start gap-2">
                              <span className="text-blue-500 mt-[2px]">•</span>
                              <span>{subj}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
