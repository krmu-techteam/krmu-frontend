"use client";

import React, { useState } from "react";
import { getCommonQuestionContent } from "../lib/getContent";
import { Fraunces, Inter, Poppins } from "next/font/google";
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

type Props = {
  dataContent?: CommonQuestionPageContentType | null;
};

const CommonQuestion = ({ dataContent }: Props) => {
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
      <div className="max-w-[1280px] mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 lg:py-14">
        {/* Header */}
        <div className="mb-8 max-w-4xl">
          <span
            className={`${poppins.className} text-[#7A5821] text-xs sm:text-[11px] leading-[16px] font-medium tracking-[1.54px] uppercase block mb-3`}
          >
            {content.badge}
          </span>
          <h2
            className={`${fraunces.className} max-w-[389px] text-[#002C51] text-3xl sm:text-4xl md:text-[38px]  `}
          >
            {content.title}
          </h2>
        </div>

        {/* Accordions Container */}
        <div className=" flex flex-col gap-4 mr-[10%] lg:mr-[20%]">
          {content.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.id}
                onClick={() => toggleIndex(idx)}
                className="border border-[#C9BA99] bg-[#FDF7EB] rounded-[10px] p-5 sm:p-[26px] transition-all duration-300 hover:shadow-md cursor-pointer select-none "
              >
                {/* Accordion Header */}
                <div className="flex justify-between items-center w-full gap-6 text-left">
                  <h3
                    className={`${fraunces.className} text-[#002C51] text-base sm:text-lg md:text-[20px] font-semibold `}
                  >
                    {faq.question}
                  </h3>
                  <div className="shrink-0 flex items-center justify-center">
                    {isOpen ? (
                      <Minus className="w-5 h-5 text-[#002C51] transition-transform duration-300" />
                    ) : (
                      <Plus className="w-5 h-5 text-[#002C51] transition-transform duration-300" />
                    )}
                  </div>
                </div>

                {/* Smooth transition content container using modern CSS Grid rows transition */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 mt-4"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p
                      className={`${poppins.className} text-black/85 text-[14px] sm:text-[16px] leading-relaxed pt-2`}
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

export default CommonQuestion;
