"use client";

import React, { useState } from "react";
import { getTwoYearArcContent } from "../lib/getContent";
import { Fraunces, Inter, Poppins } from "next/font/google";
import * as Icons from "lucide-react";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
});

const TwoYearArc = () => {
  const data = getTwoYearArcContent();
  const content = data.twoYearArc;

  const [activeSemester, setActiveSemester] = useState<number | null>(null);

  const renderIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return (
        <IconComponent className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] lg:w-[24px] lg:h-[24px] text-[#B08233] group-hover:text-[#D4C49E] transition-colors duration-300" />
      );
    }
    return (
      <Icons.HelpCircle className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] lg:w-[24px] lg:h-[24px] text-[#B08233] group-hover:text-[#D4C49E] transition-colors duration-300" />
    );
  };

  return (
    <section className="w-full bg-[#FDF7EB]  text-[#012D52]">
      <div className="max-w-[1280px] mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 lg:py-14">
        {/* Top Header */}
        <div className="mb-6 sm:mb-8">
          <span
            className={`${inter.className} text-[#A17200] text-[10px] sm:text-[12px] lg:text-[15px] font-semibold tracking-[0.7px] uppercase block mb-2`}
          >
            {content.badge}
          </span>
          <h2
            className={`${fraunces.className} text-[#0F2A4D] text-xl sm:text-2xl md:text-3xl lg:text-[38px] leading-tight font-medium max-w-4xl`}
          >
            {content.title}
          </h2>
        </div>

        {/* Grid — 1 col mobile, 2 col sm, 5 col lg+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border border-[#D0C6B1] overflow-hidden shadow-[0_4px_20px_rgba(181,142,61,0.05)]">
          {content.semesters.map((sem, idx) => {
            const isOpen = activeSemester === idx;
            return (
              <div
                key={idx}
                className="group flex flex-col p-4 sm:p-5 lg:p-6 bg-[#F7F0E0] hover:bg-[#012D52] transition-all duration-300
                  border-b sm:border-r border-[#D0C6B1]
                  last:border-b-0
                  sm:[&:nth-child(2n)]:border-r-0
                  lg:[&:nth-child(2n)]:border-r
                  lg:border-b-0 lg:last:border-r-0"
              >
                {/* Top Content — smooth height transition */}
                <div
                  className={`mb-2 overflow-hidden transition-all duration-500 ease-in-out flex flex-col justify-start ${
                    isOpen
                      ? "h-auto max-h-[600px]"
                      : "h-[140px] sm:h-[150px] lg:h-[210px] xl:h-[220px] max-h-[200px] sm:max-h-[200px] lg:max-h-[270px] xl:max-h-[220px]"
                  }`}
                >
                  {/* Icon */}
                  <div className="mb-4 sm:mb-5 lg:mb-6">
                    {renderIcon(sem.icon)}
                  </div>

                  {/* Period Name */}
                  <div
                    className={`${inter.className} text-[10px] sm:text-[11px] lg:text-[12px] font-bold tracking-[0.1em] uppercase mb-1.5 sm:mb-2 text-[#A17200] transition-colors duration-500`}
                  >
                    {sem.period}
                  </div>

                  {/* Title */}
                  <h3
                    className={`${fraunces.className} text-base sm:text-[15px] lg:text-[16px] tracking-wide font-bold mb-2 sm:mb-3 lg:mb-4 text-[#0F2A4D] group-hover:text-white transition-colors duration-500`}
                  >
                    {sem.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`${inter.className} text-[12px] lg:text-[13px] text-[#012D52] group-hover:text-[#F7F0E0] opacity-[77%] font-medium transition-colors duration-500 leading-relaxed ${!isOpen ? "line-clamp-2 lg:line-clamp-3" : ""}`}
                  >
                    {sem.details || sem.desc}
                  </p>
                </div>

                {/* Read More Button — always at the same vertical position */}
                <div className="flex flex-col">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      if (sem.details) {
                        setActiveSemester(isOpen ? null : idx);
                      }
                    }}
                    className="inline-flex items-center gap-1.5 font-semibold text-[12px] sm:text-[13px] lg:text-[14px] tracking-[0.7px] underline underline-offset-2 decoration-1 text-[#AA8324]  transition-colors duration-300 cursor-pointer bg-transparent border-0 p-0 text-left w-fit"
                  >
                    <Icons.Play
                      size={7}
                      className={`text-current fill-current transition-transform duration-500 ${isOpen ? "rotate-90" : ""}`}
                    />
                    {isOpen ? "Read Less" : sem.linkText}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TwoYearArc;
