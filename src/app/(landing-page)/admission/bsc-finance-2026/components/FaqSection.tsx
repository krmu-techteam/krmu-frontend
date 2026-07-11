"use client";

import Image from "next/image";
import { useState } from "react";
import { FaqSectionData } from "../contentype";

interface FaqSectionProps {
  data: FaqSectionData;
}

const FaqSection = ({ data }: FaqSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-24 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[6fr_4fr] gap-10 lg:gap-16 items-start">

          {/* Left — badge, heading, description, accordion */}
          <div className="flex flex-col gap-6 sm:gap-7">

            {/* Badge */}
            <span
              className="inline-flex w-fit px-3 py-1 rounded-full uppercase tracking-wide text-[#175CD3]"
              style={{
                background: "#EFF8FF", border: "1px solid #B2DDFF",
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: "12px",
                lineHeight: "18px",
              }}
            >
              {data.badge}
            </span>

            {/* Heading — single line */}
            <h2
              className="m-0 font-semibold italic leading-[140%] tracking-[-0.02em]"
              style={{
                fontFamily: "'Libre Caslon Condensed', serif",
                fontWeight: 600,
                fontSize: "clamp(18px, 3.8vw, 62px)",
                lineHeight: "140%",
                letterSpacing: "-0.02em",
              }}
            >
              <span style={{ color: "#111111" }}>{data.headingDark} </span>
              <span style={{ color: "#DF3232" }}>{data.headingRed}</span>
            </h2>

            {/* Description */}
            <p
              className="m-0"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "0%",
                color: "#344054",
              }}
            >
              {data.description}
            </p>

            {/* Accordion */}
            <div className="flex flex-col">
              {data.faqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className="border-b border-[#E4E7EC] first:border-t"
                  >
                    <button
                      onClick={() => toggle(idx)}
                      className="w-full flex items-center gap-3 py-4 text-left bg-transparent border-0 cursor-pointer outline-none"
                      aria-expanded={isOpen}
                    >
                      {/* Icon */}
                      <span className="shrink-0 w-5 h-5 flex items-center justify-center">
                        {isOpen ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#667085"
                            strokeWidth="2"
                            strokeLinecap="round"
                            aria-hidden="true"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <path d="M8 12h8" />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#667085"
                            strokeWidth="2"
                            strokeLinecap="round"
                            aria-hidden="true"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 8v8M8 12h8" />
                          </svg>
                        )}
                      </span>

                      {/* Question */}
                      <span
                        className="text-[#101828]"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontWeight: isOpen ? 600 : 500,
                          fontSize: "16px",
                          lineHeight: "24px",
                        }}
                      >
                        {faq.question}
                      </span>
                    </button>

                    {/* Answer */}
                    {isOpen && (
                      <p
                        className="m-0 pl-8 pb-4 text-[#475467]"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 400,
                          fontSize: "15px",
                          lineHeight: "24px",
                        }}
                      >
                        {faq.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right — person image aligned to first FAQ question */}
          <div className="relative hidden lg:flex justify-center pt-[260px]">

            {/* Ellipse — partially off-screen right, behind person */}
            <div className="absolute top-[160px] right-[-60px] z-0" style={{ width: "420px", height: "420px" }}>
              <Image
                src="/landingpage/bsc-finance-2026/faq-ellipse.png"
                alt=""
                aria-hidden={true}
                fill
                sizes="420px"
                className="object-contain"
              />
            </div>

            {/* Person image */}
            <div className="relative z-10 w-full max-w-[380px]" style={{ aspectRatio: "380/500" }}>
              <Image
                src="/landingpage/bsc-finance-2026/faq-person.png"
                alt="Student thinking about BSc Finance"
                fill
                sizes="380px"
                className="object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FaqSection;
