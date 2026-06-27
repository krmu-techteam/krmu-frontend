"use client";

import React, { useState } from "react";
import Link from "next/link";
import { getTwoYearArcContent } from "../lib/getContent";
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

const TwoYearArc = () => {
  const data = getTwoYearArcContent();
  const content = data.twoYearArc;

  const [activeSemester, setActiveSemester] = useState<number | null>(null);

  // Helper to dynamically render Lucide Icons by name
  const renderIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return (
        <IconComponent className="w-[24px] h-[24px] text-[#A17200] group-hover:text-[#D4C49E] transition-colors duration-300" />
      );
    }
    return (
      <Icons.HelpCircle className="w-[24px] h-[24px] text-[#A17200] group-hover:text-[#D4C49E] transition-colors duration-300" />
    );
  };

  return (
    <section className="w-full bg-[#FDF7EB] py-16 md:py-24 text-[#012D52]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Top Header */}
        <div className="mb-8">
          <span
            className={`${inter.className} text-[#87601A] text-xs sm:text-[15px] font-semibold tracking-[0.7px] uppercase block mb-2`}
          >
            {content.badge}
          </span>
          <h2
            className={`${fraunces.className} text-[#0F2A4D] text-2xl sm:text-3xl md:text-4xl lg:text-[38px] leading-tight font-medium max-w-4xl`}
          >
            {content.title}
          </h2>
        </div>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 border border-[#D0C6B1] overflow-hidden shadow-[0_4px_20px_rgba(181,142,61,0.05)]">
          {content.semesters.map((sem, idx) => {
            const isOpen = activeSemester === idx;
            return (
              <div
                key={idx}
                className="group flex flex-col p-6 bg-[#F7F0E0] hover:bg-[#012D52] transition-all duration-300 border-b md:border-b-0 md:border-r border-[#D0C6B1] last:border-b-0 last:border-r-0"
              >
                {/* Top Content */}
                <div className="mb-4 min-h-[205px]">
                  {/* Icon */}
                  <div className="mb-6">{renderIcon(sem.icon)}</div>

                  {/* Period Name */}
                  <div
                    className={`${inter.className} text-xs sm:text-[12px] font-bold tracking-[0.1em] uppercase mb-2 text-[#A17200] transition-colors duration-300`}
                  >
                    {sem.period}
                  </div>

                  {/* Title */}
                  <h3
                    className={`${fraunces.className} text-lg sm:text-xl lg:text-[16px] tracking-wide font-bold mb-4 text-[#0F2A4D] group-hover:text-white transition-colors duration-300`}
                  >
                    {sem.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`${inter.className} text-[13px] sm:text-[12px] text-[#012D52] group-hover:text-[#F7F0E0] opacity-[77%] font-medium transition-colors duration-300`}
                  >
                    {sem.desc}
                  </p>
                </div>

                {/* Bottom Read More Section */}
                <div className="flex flex-col">
                  {/* Toggle Button */}
                  <div>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        if (sem.details) {
                          setActiveSemester(isOpen ? null : idx);
                        }
                      }}
                      className="inline-flex items-center gap-1.5 font-semibold text-[14px] tracking-[0.7px] underline underline-offset-2 decoration-1 text-[#A17200] group-hover:text-white transition-colors duration-300 cursor-pointer bg-transparent border-0 p-0 text-left"
                    >
                      <span className="transition-transform duration-300">
                        <Icons.Play
                          size={8}
                          className={`text-current fill-current transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
                        />
                      </span>{" "}
                      {isOpen ? "Read Less" : sem.linkText}
                    </button>
                  </div>

                  {/* Smooth Expandable Content Panel */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 mt-4"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      {sem.details && (
                        <p
                          className={`${inter.className} text-[13px] sm:text-[12px] leading-relaxed text-[#012D52] group-hover:text-[#F7F0E0] opacity-[85%] transition-colors duration-300`}
                        >
                          {sem.details}
                        </p>
                      )}
                    </div>
                  </div>
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
