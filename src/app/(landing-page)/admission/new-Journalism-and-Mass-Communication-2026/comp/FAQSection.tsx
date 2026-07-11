"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "Who is this MA programme designed for?",
    answer:
      "This programme is designed for graduates who want to build a serious career in journalism, digital media, content strategy, creator economy, film and OTT, advertising, PR or media research. It suits both fresh graduates and early stage professionals who want to deepen their skills and move into more responsible roles.",
  },
  {
    question:
      "Do I need a Bachelor’s in Journalism or Mass Communication to apply?",
    answer:
      "No. Graduates from any discipline with minimum 50 percent aggregate from a UGC recognised university can apply. However, you should have a clear interest in media, content, communication or storytelling. A basic portfolio or prior exposure helps but is not compulsory.",
  },
  {
    question: "Is this programme more theoretical or practical?",
    answer:
      "It balances both. You study advanced media theory, research and critical thinking, and at the same time you work on labs, projects, campaigns, films, data stories and a dissertation or capstone project. The goal is to make you both industry ready and research aware.",
  },
  {
    question: "Can I work or freelance while pursuing this MA?",
    answer:
      "Since it is a full time on campus programme, your primary commitment is to classes, projects and labs. Limited freelance or part time work that does not clash with academic requirements may be possible, especially in media and content related roles, but it must be managed responsibly.",
  },
  {
    question:
      "Is the degree recognised for higher studies and government jobs?",
    answer:
      "Yes. The degree awarded is MA (Journalism & Mass Communication) from K.R. Mangalam University, a UGC recognised university. It is valid for higher studies, competitive exams and opportunities where a recognised postgraduate degree is required, as per applicable regulations.",
  },
  {
    question: "Does this programme help if I want to do a Ph.D later?",
    answer:
      "Yes. Through courses in communication research, data journalism, development communication and the dissertation / capstone component, you build research skills and academic grounding that support applications to Ph.D programmes in media and communication.",
  },
  {
    question:
      "Is the School of Emerging Media and Creator Economy the same as the former School of Journalism and Mass Communication?",
    answer:
      "The School of Journalism and Mass Communication has been renamed as the School of Emerging Media and Creator Economy (SEMCE). The new name reflects an expanded focus on digital media, content creation, and evolving industry trends, while continuing the legacy and academic foundation of the former school.",
  },
];
const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <section className="w-full bg-[#f3f0f4] py-10 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <h2 className="text-center text-[26px] md:text-[39px] font-serif font-normal text-[#000000] mb-6">
          MA (Journalism & Mass Communication) – FAQs
        </h2>
        <div className="space-y-5">
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className="bg-[#efeff5] border border-gray-300 rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full cursor-pointer flex items-center justify-between gap-5 text-left px-6 md:px-8 py-4"
                >
                  <h3 className="text-[16px] md:text-[18px] font-normal text-[#000000] leading-6">
                    {item.question}
                  </h3>
                  <ChevronDown
                    size={28}
                    className={`shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 md:px-8 pb-6">
                      <p className="text-gray-700 text-sm md:text-base leading-5 max-w-5xl">
                        {item.answer}
                      </p>
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

export default FAQSection;
