"use client";

import Image from "next/image";
import { useState } from "react";
import {
  logoAltFromFilename,
  organisationLogoSrc,
  organisationLogosByTab,
  ORGANISATION_TAB_FOLDERS,
} from "../organisationLogos";
import { OrganisationsSectionData } from "../contentype";

interface OrganisationsSectionProps {
  data: OrganisationsSectionData;
}

const headingFont = { fontFamily: "'Libre Caslon Condensed', serif" };

const OrganisationsSection = ({ data }: OrganisationsSectionProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const folder = ORGANISATION_TAB_FOLDERS[activeTab] ?? ORGANISATION_TAB_FOLDERS[0];
  const logos = organisationLogosByTab[activeTab] ?? organisationLogosByTab[0];

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

          {/* Right — tabs + logo grid (images from public/.../Core Finance | Quantitative Finance | Actuarial Science) */}
          <div className="flex flex-col gap-5 sm:gap-6">

            {/* Tab bar — wraps naturally, no scrollbar */}
            <div className="flex justify-between border-b border-[#2A2A2A]">
              {data.tabs.map((tab, idx) => (
                <button
                  key={tab.label}
                  onClick={() => setActiveTab(idx)}
                  className={[
                    "px-3 py-2 sm:py-3 font-medium text-[12px] sm:text-[14px] lg:text-[14px] leading-5 tracking-normal transition-colors duration-200 border-b-2 -mb-px",
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
              {logos.map((filename, idx) => (
                <div
                  key={`${folder}-${idx}-${filename}`}
                  className="h-[56px] sm:h-[68px] rounded-lg flex items-center justify-center px-2 py-1.5"
                  style={{
                    background: "#fff",
                    border: "1px solid #2E2E2E",
                  }}
                >
                  <Image
                    src={organisationLogoSrc(folder, filename)}
                    alt={logoAltFromFilename(filename)}
                    width={0}
                    height={0}
                    sizes="(max-width: 640px) 45vw, 120px"
                    className="max-h-[44px] sm:max-h-[52px] max-w-full object-contain object-center"
                    style={{ width: "100%", height: "auto" }}
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
