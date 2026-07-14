"use client";

import React from "react";
import { getHowToApplyContent } from "../lib/getContent";
import { Fraunces, Poppins } from "next/font/google";
import { Check } from "lucide-react";
import { GraduationCap } from "lucide-react";
import Link from "next/link";
import { HeroSection } from "@/lib/types/school-programme";
import NpfPopup from "@/app/(main-website)/components/NpfPopup";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
});

type Props = {
  formId?: string;
  heroSection?: HeroSection;
};

const HowToApply = ({ formId, heroSection }: Props) => {
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
    <section className="w-full bg-[#F7F0E0] text-[#012D52]">
      <div className="max-w-[1280px] mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 lg:py-20">
        {/* Header */}
        <div className="mb-10">
          <span
            className={`${poppins.className} text-[#7A5821] text-xs sm:text-[11px] leading-[16px] font-medium tracking-[1.54px] uppercase block mb-3`}
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
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 xl:gap-0  items-start">
          {/* Left Column: Eligibility and Selection Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {content.leftCards.map((card) => (
              <div
                key={card.id}
                className="border border-[#AEBAC5] rounded-[5px] bg-[#FDF7EB] pl-10 py-8 px-4  flex gap-5 items-start transition-shadow duration-300 hover:shadow-[0_4px_25px_rgba(188,176,147,0.12)] max-w-[500px] "
              >
                {renderIcon(card.icon)}
                <div>
                  <h3
                    className={`${fraunces.className} text-xl sm:text-2xl md:text-[28px] text-[#002C51] font-semibold mb-2`}
                  >
                    {card.title}
                  </h3>
                  <p
                    className={`${poppins.className} text-black text-sm sm:text-[16px] leading-relaxed`}
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
                      className={`${poppins.className} text-[#012D52] text-[15px] sm:text-[18px] font-semibold mb-1`}
                    >
                      {step.title}
                    </h4>
                    <p
                      className={`${poppins.className} text-black text-[13px] sm:text-[16px] leading-normal`}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button and Admissions Counsellor Info */}
            <div className="mt-4 flex flex-col items-start gap-4">
              {/* <Link
                href={content.cta.buttonLink}
                className={`${poppins.className} bg-[#DE0000] hover:bg-[#b30000] text-white text-sm sm:text-[19px] px-6 py-3.5 rounded-[5px] transition-all duration-300 shadow-md hover:shadow-lg inline-block w-full sm:w-auto text-center cursor-popoppins`}
              >
                {content.cta.buttonText}
              </Link> */}
              {formId && (
                <NpfPopup
                  formId={formId}
                  btnClass={`${poppins.className} bg-[#DE0000] hover:bg-[#b30000] text-white text-sm sm:text-[19px] px-6 py-3.5 rounded-[5px] transition-all duration-300 shadow-md hover:shadow-lg font-bold inline-block w-fit sm:w-auto text-center cursor-pointer ${heroSection?.herobtn?.buttonclass || ""}`}
                  btnText={`${content.cta.buttonText}`}
                  showIcon={false}
                />
              )}

              {/* <span
                className={`${poppins.className} text-xs sm:text-[16px] text-black`}
              >
                or call an admissions counsellor –{" "}
                <Link href={`tel:${content.cta.phoneNumber}`}>
                  +91 93114 11717
                </Link>
              </span> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToApply;
