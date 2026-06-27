"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getCareerGoalContent } from "../lib/getContent";
import { Fraunces, Inter } from "next/font/google";
import * as Icons from "lucide-react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
});

const CareerGoal = () => {
  const data = getCareerGoalContent();
  const content = data.careerGoal;

  // Manage active tab index and course expanded index
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const [activeCourseIdx, setActiveCourseIdx] = useState<number | null>(null);

  const activeSemester = content.semesters[activeTabIdx];

  const handleTabChange = (idx: number) => {
    setActiveTabIdx(idx);
    setActiveCourseIdx(null);
  };

  return (
    <section className="w-full bg-[#F7F0E0] py-14 text-[#012D52]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="mb-6">
          <span
            className={`${inter.className} text-[#87601A] text-xs sm:text-[15px] font-semibold tracking-[0.7px] uppercase block mb-2`}
          >
            {content.badge}
          </span>
          <h2
            className={`${fraunces.className} text-[#0F2A4D] text-2xl sm:text-3xl md:text-4xl lg:text-[38px] leading-tight font-medium max-w-[720px]`}
          >
            {content.title}
          </h2>
        </div>

        {/* Semester Tab Row */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 pb-4 overflow-x-auto scrollbar-none">
          {content.semesters.map((sem, idx) => {
            const isActive = activeTabIdx === idx;
            return (
              <button
                key={sem.id}
                onClick={() => handleTabChange(idx)}
                className={`${
                  inter.className
                } text-[13px] sm:text-[12px] font-medium transition-all duration-300 px-5 py-1.5 rounded-full cursor-pointer focus:outline-none whitespace-nowrap ${
                  isActive
                    ? "border border-[#87601A] text-[#87601A] bg-transparent"
                    : "text-[#012D52] hover:text-[#87601A]"
                }`}
              >
                {sem.tabLabel}
              </button>
            );
          })}
        </div>

        {/* Tab Content Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Stack of Course Cards */}
          <div
            key={activeSemester.id}
            className="lg:col-span-6 flex flex-col gap-3 animate-[fadeIn_0.5s_ease-out] w-full"
          >
            {activeSemester.courses.map((course, idx) => {
              const isOpen = activeCourseIdx === idx;
              return (
                <div
                  key={idx}
                  className="group p-4 py-3 bg-[#F7F0E0] border border-[#557C9C33] rounded-[13px] flex flex-col justify-between hover:bg-[#E8DDCF] hover:shadow-[0_4px_20px_rgba(181,142,61,0.08)] transition-all duration-300 w-full"
                >
                  <div className="mb-3">
                    <h3
                      className={`${fraunces.className} text-lg sm:text-[18px] font-bold text-[#0F2A4D] tracking-wide mb-1`}
                    >
                      {course.title}
                    </h3>
                    <p
                      className={`${inter.className} text-[13px] sm:text-[15px] leading-relaxed text-[#000000]`}
                    >
                      {course.desc}
                    </p>
                  </div>

                  <div className="flex flex-col">
                    <div>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          if (course.details) {
                            setActiveCourseIdx(isOpen ? null : idx);
                          }
                        }}
                        className="inline-flex items-center gap-1.5 font-semibold text-[14px] tracking-[0.7px] underline underline-offset-2 decoration-1 text-[#A17200] hover:text-[#87601A] transition-colors duration-300 cursor-pointer bg-transparent border-0 p-0 text-left"
                      >
                        <span className="transition-transform duration-300">
                          <Icons.Play
                            size={8}
                            className={`text-current fill-current transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
                          />
                        </span>{" "}
                        {isOpen ? "Read Less" : course.linkText}
                      </button>
                    </div>

                    {/* Smooth Expandable Content Panel */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100 mt-3"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        {course.details && (
                          <ul className="flex flex-col gap-2 list-disc pl-5 mt-2 text-black/80">
                            {course.details.map((detail, dIdx) => (
                              <li
                                key={dIdx}
                                className={`${inter.className} text-[13px] sm:text-[14px] leading-relaxed`}
                              >
                                {detail}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Image Banner */}
          <div className="lg:col-span-6 w-full">
            <div className="relative w-full overflow-hidden">
              <Image
                src={content.image}
                alt="Cohort MBA students walking on university steps"
                width={1024}
                height={1024}
                className="relative object-cover w-[462px] h-[445px] mx-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Embedded CSS for Fade In Animation */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default CareerGoal;
