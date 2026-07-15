"use client";

import React, { useState } from "react";
import Link from "next/link";
import { getMbaExistsContent } from "../lib/getContent";
import { Fraunces, Inter } from "next/font/google";
import { Play } from "lucide-react";

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

const MbaExists = () => {
  const data = getMbaExistsContent();
  const content = data.mbaExists;

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="relative w-full bg-[radial-gradient(40%_80%_at_15%_50%,#024178_0%,#012D52_50%,#012D52_100%)]  overflow-hidden text-white flex flex-col justify-center">
      <div className="max-w-[1280px] mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 lg:py-14">
        <div className="">
          {/* Badge */}
          <span
            className={`${inter.className} text-[#EDBA55] text-xs sm:text-[15px] font-semibold tracking-[0.7px] uppercase block mb-4`}
          >
            {content.badge}
          </span>

          {/* Double Underlined Heading */}
          <h2
            className={`${fraunces.className} text-[#FFF1C2] text-2xl sm:text-3xl md:text-[38px] lg:text-[37px] leading-tight font-medium max-w-5xl mb-6 tracking-wide`}
          >
            {content.titleLineOne}

            <br />

            {content.titleLineTwo}
          </h2>

          {/* Read More Button */}
          <div className="mb-6">
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsExpanded(!isExpanded);
              }}
              className="inline-flex items-center gap-2 group text-white cursor-pointer bg-transparent border-0 p-0 text-left"
            >
              <span className="text-white text-xs transition-transform group-hover:translate-x-0.5">
                <Play
                  size={12}
                  fill="white"
                  className={`text-white transition-transform duration-300 ${isExpanded ? "rotate-90" : ""}`}
                />
              </span>
              <span
                className={`${inter.className} font-bold text-[15px] sm:text-[16px] underline decoration-1 underline-offset-2`}
              >
                {isExpanded ? "Read Less" : "Read More"}
              </span>
            </button>
          </div>

          {/* Smooth Expandable Content Panel */}
          <div
            className={`grid transition-all duration-300 ease-in-out ${
              isExpanded
                ? "grid-rows-[1fr] opacity-100 mb-8"
                : "grid-rows-[0fr] opacity-0 mb-0"
            }`}
          >
            <div className="overflow-hidden">
              {content.details && (
                <p
                  className={`${inter.className} text-sm sm:text-base leading-relaxed text-[#FFF1C2] max-w-4xl`}
                >
                  {content.details}
                </p>
              )}
            </div>
          </div>

          {/* Demands / Capsules */}
          <div className="flex flex-wrap gap-[5px] items-center">
            {content.demands.map((demand, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 border border-[#1D4F79] bg-[#012D52]/30 px-6 py-2.5 rounded-full hover:bg-white/5 hover:border-white/40 transition-all duration-300 cursor-default"
              >
                <span
                  className={`${fraunces.className} text-[#E7C268] text-lg sm:text-[22px] font-semibold leading-none`}
                >
                  {demand.id}
                </span>
                <span
                  className={`${inter.className} text-[#FFF1C2] text-xs sm:text-[15px] font-semibold tracking-wide leading-none`}
                >
                  {demand.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MbaExists;
