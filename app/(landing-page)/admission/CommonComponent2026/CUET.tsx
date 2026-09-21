import { Poppins } from "next/font/google";
import Image from "next/image";
import React from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const CUET = () => {
  return (
    <div
      className={`${poppins.className} bg-[#0E1F4B] text-white p-6 md:p-10 lg:p-12 2xl:p-16 shadow-2xl`}
    >
      <div className="grid grid-cols-1 lg:grid-rows-[1.20fr_1.80fr] lg:grid-cols-none xl:grid-cols-[1.10fr_1.85fr] xl:grid-rows-none gap-6 2xl:gap-10 items-center">
        {/* Left Side: Copy and Ribbon */}
        <div className="flex flex-col items-center xl:items-start space-y-3 2xl:space-y-4">
          <p className="text-center xl:text-left text-xs md:text-sm lg:text-[16px] 2xl:text-[18px] font-normal text-white">
            Your CUET UG Score Is The First Step Towards Success!
          </p>
          <h2 className="text-center xl:text-left text-3xl md:text-4xl lg:text-[38px] 2xl:text-[46px] font-extrabold leading-[1.20] tracking-wide text-white">
            Cracked CUET UG <span className="text-[#fec810]">2026?</span>
            <br />
            Choose <span className="text-[#fec810]">KRMU!</span>
          </h2>
          <p className="text-center xl:text-left text-sm md:text-base lg:text-[16px] 2xl:text-[18px] leading-relaxed font-normal text-white">
            At K.R. Mangalam University, You Can Avail Up To 100% Scholarship
            Benefits Based On Your CUET Score/Percentile, Helping You Pursue
            Your Dream Career With Reduced Financial Burden.
          </p>

          {/* Red Ribbon */}
          <div className="w-full flex items-center justify-center xl:justify-start">
            <div className="relative inline-flex items-center w-[240px] h-[38px] 2xl:w-[297px] 2xl:h-[47px] self-start mt-2">
              <Image
                src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Group_19_250ca584da.png"
                alt="First Come First Serve"
                height={100}
                width={300}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Right Side: Eligibility Tables */}
        <div className="flex flex-col space-y-6">
          <h3 className="text-xl md:text-2xl lg:text-[32px] 2xl:text-[40px] font-medium text-center text-white tracking-wide">
            CUET Eligibility Details
          </h3>
          <div className="flex flex-col md:flex-row items-stretch gap-2 md:gap-6 2xl:gap-12 relative">
            {/* Card A: Category A */}
            <div className="flex-1 overflow-hidden bg-[#E0EDFE] flex flex-col shadow-lg ">
              {/* Header */}
              <div className="bg-[#1D4BAA] flex justify-between items-center px-4 py-3 lg:px-4 lg:py-3.5 2xl:px-5 2xl:py-4 text-white">
                <span className="font-semibold text-sm lg:text-[18px] 2xl:text-[21px]">
                  Category A
                </span>
                <span className="text-[10px] lg:text-[13px] 2xl:text-[17px] font-semibold">
                  On The Basis of Percentage
                </span>
              </div>
              {/* Table Column Titles */}
              <div className="bg-[#fbf4e5] flex justify-between mx-4 my-1.5 px-4 py-2 lg:px-3 lg:py-1.5 text-[11px] lg:text-[14px] 2xl:text-[17px] font-semibold text-black border border-[#8F8F8F26] rounded">
                <span>Percentage</span>
                <span>Scholarship</span>
              </div>
              {/* Table Rows */}
              <div className="flex flex-col divide-y px-4 2xl:px-5 divide-[#BDCFE8]">
                {[
                  { label: "90%+", val: "100%" },
                  { label: "75% - 89.9%", val: "50%" },
                  { label: "60% - 74.9%", val: "35%" },
                  { label: "50% - 59.9%", val: "25%" },
                  { label: "45% - 49.9%", val: "10%" },
                ].map((row, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between px-2 py-2.5 2xl:py-[13px] text-xs lg:text-[14px] 2xl:text-[17px] font-medium text-black"
                  >
                    <span>{row.label}</span>
                    <span className="">{row.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* OR Divider */}
            <div className="flex items-center justify-center my-[-10px] md:my-0 md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-20">
              <div className="w-9 h-9 lg:w-11 lg:h-11 2xl:w-14 2xl:h-14 text-[16px] lg:text-[18px] 2xl:text-[24px] rounded-full bg-white text-black font-semibold flex items-center justify-center shadow-xl border-2 border-gray-100">
                OR
              </div>
            </div>

            {/* Card B: Category B */}
            <div className="flex-1 overflow-hidden bg-[#FEF3DD] flex flex-col shadow-lg">
              {/* Header */}
              <div className="bg-[#FFC815] flex justify-between items-center px-4 py-3 lg:px-4 lg:py-3.5 2xl:px-5 2xl:py-4 text-black">
                <span className="font-semibold text-sm lg:text-[18px] 2xl:text-[21px]">
                  Category B
                </span>
                <span className="text-[10px] lg:text-[13px] 2xl:text-[17px] font-semibold">
                  On The Basis of Percentile
                </span>
              </div>
              {/* Table Column Titles */}
              <div className="bg-[#FEFAF1] flex justify-between mx-4 my-1.5 px-4 py-2 lg:px-3 lg:py-1.5 text-[11px] lg:text-[14px] 2xl:text-[17px] font-semibold text-black border border-[#8F8F8F26] rounded">
                <span>Percentile</span>
                <span>Scholarship</span>
              </div>
              {/* Table Rows */}
              <div className="flex flex-col divide-y px-4 2xl:px-5 divide-[#FEE8BC]">
                {[
                  { label: "95 Percentile and Above", val: "100%" },
                  {
                    label: "85 Percentile to Less than 95 Percentile",
                    val: "35%",
                  },
                  {
                    label: "70 Percentile to Less than 85 Percentile",
                    val: "25%",
                  },
                  {
                    label: "50 Percentile to Less than 70 Percentile",
                    val: "10%",
                  },
                ].map((row, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between px-2 py-[13.5px] lg:py-[12.5px] 2xl:py-[18.2px] text-xs lg:text-[14px] 2xl:text-[17px] font-medium text-black"
                  >
                    <span className="w-[80%] sm:w-full ">{row.label}</span>
                    <span>{row.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Note */}
          <p className="text-[11px] md:text-sm lg:text-[15px] 2xl:text-[18px] text-center text-white font-medium tracking-wide">
            <span className="font-bold text-white">Note:</span> For the CUET
            Scholarship, either percentage (Category A) or percentile (Category
            B) will be considered.
          </p>
        </div>
      </div>
    </div>
  );
};
