"use client";

import React from "react";
import { getFeeFinanceContent } from "../lib/getContent";
import { Fraunces, Poppins } from "next/font/google";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
});

export interface FeeFinanceSectionProps {
  slug: string;
}

export const FeeFinanceSection = ({ slug }: FeeFinanceSectionProps) => {
  const data = getFeeFinanceContent();
  const content = data.feeFinance;
  const pf = content.programFee;
  const lp = content.loanPartners;

  return (
    <section className="w-full bg-[#FDF7EB] text-[#012D52]">
      <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 lg:py-14">
        {/* Header */}
        <div className="mb-6 max-w-4xl">
          <span
            className={`${inter.className} text-[#7A5821] text-xs sm:text-[11px] leading-[16px] font-medium tracking-[1.54px] uppercase block mb-3`}
          >
            {content.badge}
          </span>
          <h2
            className={`${fraunces.className} text-[#002C51] text-3xl sm:text-4xl md:text-[38px] font-semibold leading-tight max-w-[800px]`}
          >
            {content.title}
          </h2>
        </div>

        {/* Layout Grid */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Card - Program Fee */}
          <div className="border border-[#8C969E] rounded-[10px] bg-[#F7F0E0] p-6 flex flex-col justify-between transition-shadow duration-300 hover:shadow-[0_4px_25px_rgba(188,176,147,0.15)] w-full md:max-w-[48%]">
            <div>
              <h3
                className={`${fraunces.className} text-2xl md:text-[28px] text-[#002C51] mb-4`}
              >
                {pf.title}
              </h3>

              {/* Amount Display */}
              <div className="flex items-baseline gap-2 mb-4">
                <span
                  className={`${fraunces.className} text-[#002C51] text-4xl sm:text-5xl md:text-[38px] lg:text-[46px] font-bold tracking-tight`}
                >
                  {slug === "mba" ? "₹3,30,000" : pf.amount}
                </span>
                <span
                  className={`${inter.className} text-[#002C51] text-lg sm:text-[21px]`}
                >
                  {pf.unit}
                </span>
              </div>

              {/* Subtext */}
              <p
                className={`${inter.className} text-black text-[13px] sm:text-[18px] leading-relaxed mb-6 w-full md:max-w-[420px]`}
              >
                {pf.subtext}
              </p>

              {/* Bullet Points */}
              <ul className="space-y-2 mb-8">
                {pf.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="text-black font-semibold text-lg leading-none">
                      •
                    </span>
                    <span
                      className={`${inter.className} text-black text-[14px] sm:text-[18px]`}
                    >
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Card - Education-loan partners */}
          <div className="rounded-[10px] bg-[radial-gradient(50%_50%_at_50%_50%,#024178_0%,#012D52_80%,#012D52_100%)] p-6 px-8 text-white flex flex-col justify-between transition-shadow duration-300 hover:shadow-[0_4px_25px_rgba(1,45,82,0.25)] w-full md:max-w-[48%]">
            <div>
              <h3
                className={`${fraunces.className} text-2xl md:text-[28px] text-[#E7C268] mb-4`}
              >
                {lp.title}
              </h3>

              {/* Description */}
              <p
                className={`${inter.className} text-[#FDF7EB] text-sm sm:text-[18px] mb-8 w-full md:max-w-[440px]`}
              >
                {lp.description}
              </p>

              {/* Partners Capsules Grid */}
              <div className="flex flex-wrap gap-2.5 mb-6">
                {lp.partners.map((partner, idx) => (
                  <div
                    key={idx}
                    className={`${inter.className} border border-[#E7C268] rounded-full px-4 py-1 text-xs sm:text-[13px] text-white bg-[#012D52] transition-colors duration-300 hover:bg-white/10 hover:border-white/40 mb-3`}
                  >
                    {partner}
                  </div>
                ))}
              </div>

              {/* Bullet Points */}
              <ul className="space-y-1">
                {lp.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-white font-semibold text-lg leading-none mt-[2px]">
                      •
                    </span>
                    <span
                      className={`${inter.className} text-white text-[14px] sm:text-[18px]`}
                    >
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeeFinanceSection;
