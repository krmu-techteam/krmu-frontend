"use client";

import React from "react";
import { getHowToApplyContent } from "../lib/getContent";
import { Fraunces, Inter } from "next/font/google";
import { Check } from "lucide-react";
import { GraduationCap } from "lucide-react";

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

const HowToApply = () => {
  const data = getHowToApplyContent();
  const content = data.howToApply;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "GraduationCap":
        return (
          <GraduationCap
            strokeWidth={1}
            className="w-8 h-8 md:w-[40px] md:h-[40px] text-[#002C51]  shrink-0"
          />
        );
      case "Check":
        return (
          <Check
            strokeWidth={1}
            className="w-8 h-8 md:w-[40px] md:h-[40px] text-[#002C51] shrink-0"
          />
        );
      default:
        return (
          <GraduationCap
            strokeWidth={1}
            className="w-8 h-8 md:w-[40px] md:h-[40px] text-[#002C51] shrink-0"
          />
        );
    }
  };

  return (
    <section className="w-full bg-[#F7F0E0] py-16 md:py-20 text-[#012D52]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-30">
        {/* Header */}
        <div className="mb-10">
          <span
            className={`${inter.className} text-[#7A5821] text-xs sm:text-[11px] leading-[16px] font-medium tracking-[1.54px] uppercase block mb-3`}
          >
            {content.badge}
          </span>
          <h2
            className={`${fraunces.className} text-[#0F2A4D] text-3xl sm:text-4xl md:text-[38px] font-semibold`}
          >
            {content.title}
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-16 items-start">
          {/* Left Column: Eligibility and Selection Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {content.leftCards.map((card) => (
              <div
                key={card.id}
                className="border border-[#AEBAC5] rounded-[5px] bg-[#FDF7EB] pl-6 py-8 px-2  flex gap-5 items-start transition-shadow duration-300 hover:shadow-[0_4px_25px_rgba(188,176,147,0.12)] max-w-[452px] min-h-[167px]"
              >
                {renderIcon(card.icon)}
                <div>
                  <h3
                    className={`${fraunces.className} text-xl sm:text-2xl md:text-[28px] text-[#002C51] font-semibold mb-2`}
                  >
                    {card.title}
                  </h3>
                  <p
                    className={`${inter.className} text-black text-sm sm:text-[16px] leading-relaxed`}
                  >
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Step-by-Step numbered list */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex flex-col gap-0">
              {content.steps.map((step, idx) => (
                <div
                  key={step.number}
                  className="flex gap-6 items-start py-4 border-b border-[#9EAFBD] first:pt-0 last:border-b-0"
                >
                  {/* Number */}
                  <span
                    className={`${fraunces.className} text-[#7E5705] text-2xl sm:text-[32px] leading-none w-6 text-center`}
                  >
                    {step.number}
                  </span>

                  {/* Title & Description */}
                  <div className="flex flex-col">
                    <h4
                      className={`${inter.className} text-[#012D52] text-[15px] sm:text-[18px] font-semibold mb-1`}
                    >
                      {step.title}
                    </h4>
                    <p
                      className={`${inter.className} text-black text-[13px] sm:text-[16px] leading-normal`}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button and Admissions Counsellor Info */}
            <div className="mt-4 flex flex-col items-start gap-4">
              <a
                href={content.cta.buttonLink}
                className={`${inter.className} bg-[#DE0000] hover:bg-[#b30000] text-white text-sm sm:text-[19px] px-6 py-3.5 rounded-[5px] transition-all duration-300 shadow-md hover:shadow-lg inline-block w-full sm:w-auto text-center cursor-pointer`}
              >
                {content.cta.buttonText}
              </a>
              <span
                className={`${inter.className} text-xs sm:text-[16px] text-black`}
              >
                or call an admissions counsellor –{" "}
                <a href={`tel:${content.cta.phoneNumber}`}>+91 93114 11717</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToApply;
