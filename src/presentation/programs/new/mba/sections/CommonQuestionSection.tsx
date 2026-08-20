"use client";

import React, { useState } from "react";
import { Fraunces, Poppins } from "next/font/google";
import { Plus, Minus } from "lucide-react";
import { CommonQuestionPageContentType } from "../types/contentCommonQuestion";

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

export interface CommonQuestionSectionProps {
  dataContent?: CommonQuestionPageContentType | null;
}

export const CommonQuestionSection = ({
  dataContent,
}: CommonQuestionSectionProps) => {
  const data = dataContent;
  if (!data || !data.commonQuestion) return null;
  const content = data.commonQuestion;

  // Keep track of which accordion items are open
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#F7F0E0] text-[#012D52]">
      <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 lg:py-14">
        {/* Header */}
        <div className="mb-8">
          <span
            className={`${poppins.className} text-[#87601A] text-xs sm:text-[14px] font-semibold tracking-wider uppercase block mb-2`}
          >
            {content.badge}
          </span>
          <h2
            className={`${fraunces.className} text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-tight font-medium text-[#0F2A4D]`}
          >
            {content.title}
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-3">
          {content.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.id}
                className="bg-[#FDF7EB] border border-[#BCB093]/40 rounded-[8px] overflow-hidden transition-all duration-300"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <h3
                    className={`${fraunces.className} text-[16px] sm:text-[18px] md:text-[20px] font-bold text-[#002C51]`}
                  >
                    {faq.question}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-[#F7F0E0] flex items-center justify-center shrink-0 text-[#002C51]">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>

                {/* Accordion Body */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p
                      className={`${poppins.className} px-4 sm:px-5 pb-5 text-xs sm:text-sm md:text-[15px] font-normal leading-relaxed text-[#2A2A2A]`}
                    >
                      {faq.answer}
                    </p>
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

export default CommonQuestionSection;
