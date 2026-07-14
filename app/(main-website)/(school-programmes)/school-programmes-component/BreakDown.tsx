"use client";

import React, { useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const BreakDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const rows = [
    {
      role: "Software Developer / SDE",
      package: "4 LPA - 6 LPA",
      sectors: "IT Services, IT Products, Startups",
    },
    {
      role: "AI / ML Engineer",
      package: "5 LPA - 8 LPA",
      sectors: "AI Labs SaaS Deep-Tech",
    },
    {
      role: "Data Scientist",
      package: "6 LPA - 8 LPA",
      sectors: "BFSI, E-commerce, Analytics",
    },
    {
      role: "Cybersecurity Analyst",
      package: "4 LPA - 5 LPA",
      sectors: "Cyber, Defence, BFSI, Consulting",
    },
    {
      role: "Full Stack Developer",
      package: "4 LPA - 5 LPA",
      sectors: "Startups, Product Companies",
    },
    {
      role: "Cloud Engineer",
      package: "6 LPA - 8 LPA",
      sectors: "AWS, Azure, GCP Ecosystem",
    },
    {
      role: "Data Engineer",
      package: "6 LPA - 8 LPA",
      sectors: "FinTech, Retail, Healthcare tech",
    },
    {
      role: "DevOps Engineer",
      package: "4 LPA - 6 LPA",
      sectors: "SaaS, Enterprise IT",
    },
    {
      role: "UX / UI Designer",
      package: "4 LPA - 6 LPA",
      sectors: "Product, Agencies, EdTech",
    },
    {
      role: "IT Consultant",
      package: "4 LPA - 5 LPA",
      sectors: "Big 4, System Integrators",
    },
    {
      role: "Robotics / Automation Engineer",
      package: "6 LPA - 8 LPA",
      sectors: "Manufacturing, Defence, R&D",
    },
    {
      role: "Product Management Trainee (tech track)",
      package: "4 LPA - 5 LPA",
      sectors: "Product Companies, FinTech",
    },
  ];

  return (
    <section
      className={`${inter.className} w-full bg-[#f9f9f9] ${isOpen ? "pb-6 sm:pb-12" : "pb-0"}  `}
    >
      <div className="w-full flex flex-col items-center mx-auto">
        {/* Toggle Button */}
        <div className="flex justify-center w-full  py-10 px-2 sm:px-6  bg-white ">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-between gap-2 sm:gap-6 bg-[#002045] text-white font-bold py-3 px-6 rounded-[10px] shadow-md transition-all duration-300  text-center text-sm sm:text-base md:text-[24px] cursor-pointer"
          >
            <span>Career Scope & Salary Insights</span>
            <span
              className={`flex items-center justify-center w-[40px] h-[30px] sm:w-[40px] sm:h-[40px] rounded-full ${isOpen ? "bg-[#E7C268]" : "bg-white"} text-[#002045] shadow-sm`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className={` w-[20px] sm:w-[24px] h-[20px] sm:h-[24px] transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </button>
        </div>

        {/* Collapsible Content */}
        <div
          className={` relative w-full px-12 overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen
              ? "max-h-[2500px] opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className=" max-w-[1500px] mx-auto">
            {/* Close Button X */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute hidden sm:block sm:top-6 sm:right-[3%] 2xl:right-[12%]  text-black transition-all p-2 rounded-full cursor-pointer"
              aria-label="Close details "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-[40px] h-[40px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Header Text */}
            <div className="flex justify-center items-center my-8 px-0 sm:px-12">
              <h3 className="text-center text-[#002855] text-lg sm:text-lg md:text-[24px] font-bold leading-[120%] max-w-[850px]">
                Below is a full breakdown of career roles, average salary ranges
                in India, and the sectors actively hiring B.Tech. CSE graduates.
              </h3>
            </div>

            {/* Table Container with Horizontal Scroll support */}
            <div className="overflow-x-auto rounded-[10px] border border-[#A0A0A0] w-full bg-white shadow-inner">
              <table className="w-full border-collapse border-spacing-0 min-w-[800px]">
                <thead>
                  <tr className=" text-white">
                    <th className=" pl-3 pt-3  text-center text-sm md:text-[16px] lg:text-[18px] font-semibold ">
                      <div className="flex items-center justify-center bg-[#002045] min-h-[78px] rounded-l-[10px]">
                        Job Role <br /> After B.Tech. CSE
                      </div>
                    </th>
                    <th className="pt-3  text-center text-sm md:text-[16px] lg:text-[18px] font-semibold">
                      <div className="flex items-center justify-center bg-[#002045] min-h-[78px]">
                        Average Package for Freshers in India <br /> (In INR)*
                      </div>
                    </th>
                    <th className="pr-3 pt-3  text-center text-sm md:text-[16px] lg:text-[18px] font-semibold ">
                      <div className=" flex items-center justify-center bg-[#002045] min-h-[78px] rounded-r-[10px]">
                        Hiring Sectors
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? "bg-white" : "bg-[#EBF6FE]"
                      } `}
                    >
                      <td className="py-4 px-6 text-center text-sm md:text-[16px]  text-black border-r-2 border-[#002045]/10">
                        {row.role}
                      </td>
                      <td className="py-4 px-6 text-center text-sm md:text-[16px]  text-black border-r-2 border-[#002045]/10">
                        {row.package}
                      </td>
                      <td className="py-4 px-6 text-center text-sm md:text-[16px]  text-black">
                        {row.sectors}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Note Footer */}
            <div className="w-full bg-[linear-gradient(90deg,#001834_0%,#00479A_100%)] text-white text-center py-3.5 px-6 rounded-lg text-xs sm:text-[16px] font-semibold  shadow-sm mt-6">
              *Note: The packages mentioned above are sourced from various
              sources on the internet. Hence, they can vary.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
