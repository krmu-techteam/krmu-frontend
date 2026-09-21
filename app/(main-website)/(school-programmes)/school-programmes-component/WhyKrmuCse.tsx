"use client";

import React from "react";
import { Inter } from "next/font/google";
import { whyKrmuData } from "../programs/progdata/whyKrmuData";

type Props = {
  slug: string;
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

// interface ComparisonRow {
//   parameter: string;
//   krmu: string;
//   typical: string;
// }

// const comparisonData: ComparisonRow[] = [
//   {
//     parameter: "Highest placement package",
//     krmu: "56.6 LPA",
//     typical: "8-20 LPA",
//   },
//   {
//     parameter: "Campus recruiters",
//     krmu: "800+ companies",
//     typical: "100-300 companies",
//   },
//   {
//     parameter: "Curriculum",
//     krmu: "Industry-aligned and regularly updated",
//     typical: "Generic AICTE syllabus",
//   },
//   {
//     parameter: "Research output",
//     krmu: "600+ Scopus/WoS papers, 100+ patents",
//     typical: "Minimal or unreported",
//   },
//   {
//     parameter: "Project-based credits",
//     krmu: "15% of total credits",
//     typical: "None or Typically 5-8%",
//   },
//   {
//     parameter: "International exposure",
//     krmu: "*Fully sponsored 2-week European summer school",
//     typical: "Rarely offered",
//   },
//   {
//     parameter: "Competitive programming lab",
//     krmu: "Dedicated facility for product-company preparation",
//     typical: "Not a standard offering",
//   },
//   {
//     parameter: "Mentorship",
//     krmu: "CTOs & startup founders as regular mentors",
//     typical: "Faculty-only mentorship",
//   },
//   {
//     parameter: "Industry certifications included",
//     krmu: "Microsoft Azure AI, GCP Ecosystem, EC-Council CEH- AI pathways",
//     typical: "Rarely included in the curriculum",
//   },
//   {
//     parameter: "Location",
//     krmu: "Sohna Road, Gurugram (near India's second largest IT hub)",
//     typical: "Varies, often suburban or Tier-2",
//   },
//   {
//     parameter: "Scholarship available",
//     krmu: "Up to 100% for toppers and sports achievers",
//     typical: "Limited, highly competitive",
//   },
// ];

export const WhyKrmuCse = ({ slug }: Props) => {
  const data = whyKrmuData[slug];
  return (
    <section
      className={`${inter.className} relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat z-0"
        style={{
          backgroundImage: `url('https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Rectangle_1658_6e11a8c351.jpg')`,
        }}
      />
      {/* Dark Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-[#001834] opacity-[0.4] z-0 pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1182px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-[36px] font-bold text-white leading-tight tracking-tight max-w-[710px] mx-auto mb-6">
            {data.title}
          </h2>
          <p className="text-white text-sm md:text-base lg:text-[18px] max-w-[1029px] mx-auto leading-relaxed font-normal mb-4">
            {data.description}
          </p>
          <div className="w-full h-[1px] bg-[linear-gradient(90deg,#FFFFFF05_0%,#5383BC_52.88%,#FFFFFF05_100%)]" />
          <p className="text-white font-bold text-sm md:text-base lg:text-[18px] max-w-4xl mt-4 mx-auto leading-snug">
            {data.comparisonTitle}
          </p>
        </div>

        {/* Comparison Card */}
        <div className="bg-white rounded-[10px] overflow-hidden">
          <div className="h-full w-full rounded-[8px] outline-3 outline-dashed outline-[#A0A0A0] outline-offset-[-1.3px]">
            {/* Scrollable Table Wrapper */}
            <div className="w-full overflow-x-auto bg-[linear-gradient(90deg,#E6F0F4_15%,#F4F4F4_100%)]  pt-2">
              <table className="w-full min-w-[850px] border-collapse ">
                <colgroup>
                  <col className="w-[28%]" />
                  <col className="w-[37%] bg-[linear-gradient(180deg,#001732_15%,#00316A_100%)]" />
                  <col className="w-[35%] " />
                </colgroup>

                <thead>
                  <tr className="w-[80%] bg-white ">
                    {/* Parameter Header */}
                    <th className=" text-left pl-2 bg-[linear-gradient(90deg,#E6F0F4_15%,#F4F4F4_100%)] text-[#001834] font-bold text-base md:text-[18px] ">
                      <div className="pl-3 py-3 bg-white h-[51px]">
                        {data.parameterHeader}
                      </div>
                    </th>

                    {/* KRMU Highlighted Header */}
                    <th className="text-left py-3 px-5 text-[#E7C268] font-bold text-base md:text-[18px] bg-[#001732] rounded-t-[10px]">
                      {data.krmuHeader}
                    </th>

                    {/* Typical University Header */}
                    <th className="text-left pr-2 bg-[linear-gradient(90deg,#E6F0F4_15%,#F4F4F4_100%)] text-[#001732] font-bold text-base md:text-[18px]">
                      <div className="pl-5 py-3 h-[51px] bg-white">
                        {data.typicalHeader}
                      </div>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {data.comparisonData.map((row, index) => {
                    // const isLastRow = index === comparisonData.length - 1;
                    const isEven = index % 2 === 0;
                    const rowBgClass = isEven ? "" : "bg-white";

                    return (
                      <tr key={index} className="">
                        {/* Parameter Cell */}
                        <td
                          className={`py-3 px-5 text-[#051730]   text-sm md:text-[16px] ${rowBgClass} `}
                        >
                          {row.parameter}
                        </td>

                        <td className="relative py-3 px-5 ">
                          {/* Reduce gradient opacity on even rows */}
                          {!isEven && (
                            <div className="absolute inset-0 bg-[#325f85]/30 pointer-events-none" />
                          )}

                          <span className="relative z-10 text-white font-medium text-sm md:text-[16px]">
                            {row.krmu}
                          </span>
                        </td>

                        {/* Typical University Cell */}
                        <td
                          className={`py-3 px-5 text-[#051730] text-sm md:text-[16px] ${rowBgClass} `}
                        >
                          {row.typical}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Swipe Indicator (Visible only on mobile) */}
            <div className="flex lg:hidden items-center justify-center gap-2 text-xs text-gray-400 font-medium animate-pulse">
              {/* <span>← Swipe left or right to compare →</span> */}
            </div>

            {/* Bottom Information Box */}
            <div className="p-6 md:px-13 md:py-8  bg-[linear-gradient(90deg,#F8FBFF_0%,#FFEDED_100%)]  text-center">
              <p className="text-[#000000] text-sm md:text-[16px] mb-4 ">
                {data.bottomDescription1}
              </p>
              <p className="text-[#000000] text-sm md:text-[16px] ">
                {data.bottomDescription2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
