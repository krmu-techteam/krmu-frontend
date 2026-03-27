"use client";

import Image from "next/image";
import { useState } from "react";
import { SemesterSectionData } from "../contentype";

interface SemesterSectionProps {
  data: SemesterSectionData;
}

const SemesterSection = ({ data }: SemesterSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section
      className="py-10 sm:py-14 lg:py-24"
      style={{ background: "linear-gradient(360deg, #FFFFFF 0%, #F3F5F7 100%)" }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-8 sm:gap-10 lg:gap-16 items-start">

          {/* Left — heading + CTA */}
          <div className="flex flex-col gap-6 sm:gap-8 lg:sticky lg:top-24">
            <h2
              className="m-0 font-semibold italic leading-[140%] tracking-[-0.02em]"
              style={{
                fontFamily: "'Libre Caslon Condensed', serif",
                fontSize: "clamp(28px, 5vw, 62px)",
              }}
            >
              <span className="block text-[#DF3232]">{data.headingLine1}</span>
              <span className="block text-[#DF3232]">{data.headingLine2}</span>
              <span className="block text-[#111111]">{data.headingLine3}</span>
            </h2>

            <div className="flex flex-wrap gap-3 items-center">
              <a
                href={data.brochureHref}
                download
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-[10px] rounded-lg border border-[#D1D1D1] bg-white text-[#344054] hover:bg-gray-50 font-semibold text-[13px] sm:text-[14px] leading-5 tracking-normal transition-all duration-200 no-underline"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {data.brochureLabel}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v8M8 12l4 4 4-4" />
                </svg>
              </a>

              <a
                href={data.applyHref}
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-[10px] rounded-lg bg-[#0060A7] text-white hover:bg-[#004f8c] font-semibold text-[13px] sm:text-[14px] leading-5 tracking-normal transition-all duration-200 no-underline"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {data.applyLabel}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right — accordion */}
          <div className="flex flex-col">
            {data.semesters.map((sem, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="border-b border-[#E4E7EC] first:border-t"
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center justify-between gap-3 py-3 sm:py-4 lg:py-5 text-left bg-transparent border-0 cursor-pointer outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex flex-col gap-0.5 sm:gap-1">
                      <span
                        className="font-semibold text-[12px] sm:text-[14px] leading-5 text-[#DF3232]"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {sem.credits}
                      </span>
                      <span
                        className="font-semibold text-[16px] sm:text-[20px] lg:text-[24px] leading-7 sm:leading-8 text-[#101828]"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {sem.title}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="shrink-0 w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center">
                      {isOpen ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#101828"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          aria-hidden="true"
                        >
                          <path d="M5 12h14" />
                        </svg>
                      ) : (
                        <Image
                          src="/landingpage/bsc-finance-2026/icon-plus.png"
                          alt="expand"
                          width={20}
                          height={20}
                          style={{ display: "block" }}
                        />
                      )}
                    </div>
                  </button>

                  {/* Expandable course list */}
                  {isOpen && (
                    <p
                      className="m-0 pb-4 sm:pb-5 font-normal text-[13px] sm:text-[14px] lg:text-[16px] leading-6 text-[#344054]"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {sem.courses}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SemesterSection;
