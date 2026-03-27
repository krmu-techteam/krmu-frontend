"use client";

import Image from "next/image";
import { useState } from "react";
import { OrganisationsSectionData } from "../contentype";

interface OrganisationsSectionProps {
  data: OrganisationsSectionData;
}

const PLACEHOLDER_COUNT = 12;

const headingFont = { fontFamily: "'Libre Caslon Condensed', serif" };

const OrganisationsSection = ({ data }: OrganisationsSectionProps) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-16 sm:py-20 lg:py-24" style={{ background: "#000000" }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-start">

          {/* Left — heading + stat */}
          <div className="flex flex-col gap-6 sm:gap-8">

            {/* Heading */}
            <h2
              className="m-0 font-semibold italic text-[30px] sm:text-[40px] lg:text-[48px] xl:text-[62px] leading-[140%] tracking-[-0.02em]"
              style={headingFont}
            >
              <span className="block text-[#DF3232]">{data.headingLine1}</span>
              <span className="block">
                <span className="text-[#DF3232]">{data.headingHighlight}</span>
                <span className="text-white">{data.headingLine2}</span>
              </span>
              <span className="block text-white">{data.headingLine3}</span>
            </h2>

            {/* Stat box — centered on mobile, left on lg+ */}
            <div className="flex lg:block">
              <div
                className="inline-flex flex-col items-center gap-1 px-5 py-4 rounded-xl"
                style={{ background: "#FFFFFF", border: "1px solid #E4E7EC" }}
              >
                <span
                  className="font-normal text-[12px] leading-[18px] tracking-normal text-center"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    color: "rgba(17,17,17,0.9)",
                  }}
                >
                  {data.statLabel}
                </span>
                <span
                  className="font-bold text-[24px] leading-8 tracking-normal text-center text-[#111111]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {data.statValue}
                </span>
              </div>
            </div>
          </div>

          {/* Right — fictional logo + tabs + logo grid */}
          <div className="flex flex-col gap-5 sm:gap-6">

            {/* Fictional logo */}
            <div className="flex items-center w-full">
              <Image
                src="/landingpage/bsc-finance-2026/logo-fictional.png"
                alt="Fictional company logo"
                width={0}
                height={0}
                sizes="200px"
                className="h-7 sm:h-8 w-auto object-contain"
              />
            </div>

            {/* Tab bar — wraps naturally, no scrollbar */}
            <div className="flex justify-between border-b border-[#2A2A2A]">
              {data.tabs.map((tab, idx) => (
                <button
                  key={tab.label}
                  onClick={() => setActiveTab(idx)}
                  className={[
                    "px-3 py-2 sm:py-3 font-medium text-[11px] sm:text-[12px] lg:text-[13px] leading-5 tracking-normal transition-colors duration-200 border-b-2 -mb-px",
                    activeTab === idx
                      ? "border-white text-white"
                      : "border-transparent text-[#8C8C8C] hover:text-[#CCCCCC]",
                  ].join(" ")}
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Logo grid — 2-col mobile, 3-col tablet, 4-col desktop */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {Array.from({ length: PLACEHOLDER_COUNT }).map((_, idx) => (
                <div
                  key={idx}
                  className="h-[56px] sm:h-[68px] rounded-lg flex items-center justify-center"
                  style={{
                    background: "#1A1A1A",
                    border: "1px solid #2E2E2E",
                  }}
                >
                  <Image
                    src="/landingpage/bsc-finance-2026/logo-fictional.png"
                    alt="Company logo"
                    width={0}
                    height={0}
                    sizes="120px"
                    className="h-5 sm:h-6 w-auto object-contain opacity-60"
                  />
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganisationsSection;
