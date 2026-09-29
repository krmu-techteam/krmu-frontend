"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { breakdownData } from "../constants/breakdown.constants";

interface Props {
    slug?: string;
}

const BreakDownSection = ({ slug }: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    const data = (slug && breakdownData[slug]) || breakdownData["b-tech-cse"];

    if (!data || !data.rows || data.rows.length === 0) return null;

    const rows = data.rows;

    return (
        <section
            className={`relative font-poppins w-full bg-[radial-gradient(ellipse_at_center,_#002b54_0%,_#00152e_60%,_#000c1c_100%)]   shadow-inner transition-all duration-300 ${
                isOpen ? "pb-8 sm:pb-14" : "pb-0"
            }`}
        >
            <div className="max-w-[1530px] mx-auto px-4 md:px-8 xl:px-16 w-full flex flex-col items-center">
                {/* Toggle Button */}
                <div
                    className={`flex justify-center w-full bg-transparent transition-all duration-300 ${
                        isOpen ? "pt-8 sm:pt-10 pb-4" : "py-4 sm:py-5"
                    }`}
                >
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="group flex items-center justify-between gap-3 sm:gap-4 bg-[#002045] hover:bg-[#002b5c] text-white font-semibold py-2 px-5 sm:px-6 rounded-full border border-[#ECA836]/40 hover:border-[#ECA836] shadow-md hover:shadow-[0_4px_18px_rgba(236,168,54,0.35)] active:scale-95 transition-all duration-300 text-center text-xs sm:text-sm md:text-[16px] cursor-pointer"
                    >
                        <span className="tracking-wide">
                            {data.buttonText || "Career Prospects"}
                        </span>
                        <span className="flex items-center justify-center w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] rounded-full bg-[#ECA836] group-hover:bg-[#f3b54e] text-[#002045] shadow-xs transition-colors duration-200">
                            <ChevronDown
                                strokeWidth={2.5}
                                className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 ${
                                    isOpen ? "rotate-180" : ""
                                }`}
                            />
                        </span>
                    </button>
                </div>

                {/* Collapsible Content */}
                <div
                    className={`relative w-full px-0 lg:px-12 overflow-hidden transition-all duration-500 ease-in-out ${
                        isOpen
                            ? "max-h-[3500px] opacity-100"
                            : "max-h-0 opacity-0 pointer-events-none"
                    }`}
                >
                    <div className="max-w-[1500px] mx-auto relative">
                        {/* Header Text */}
                        <div className="flex justify-center items-center my-8 px-0 sm:px-12">
                            <h3 className="text-center font-serif text-white text-lg sm:text-lg md:text-[24px] font-bold leading-[120%] max-w-[850px]">
                                {data.headerText}
                            </h3>
                        </div>

                        {/* Table Container with Horizontal Scroll support */}
                        <div className="overflow-x-auto rounded-[10px] border border-[#A0A0A0] w-full bg-white shadow-inner">
                            <table className="w-full border-collapse border-spacing-0 min-w-[800px]">
                                <thead>
                                    <tr className="text-white">
                                        <th className="pl-3 pt-3 text-center text-sm md:text-[16px] lg:text-[18px] font-semibold">
                                            <div className="flex items-center justify-center bg-[#002045] min-h-[78px] rounded-l-[10px] px-4">
                                                {data.col1Title}
                                            </div>
                                        </th>
                                        <th className="pt-3 text-center text-sm md:text-[16px] lg:text-[18px] font-semibold">
                                            <div className="flex items-center justify-center bg-[#002045] min-h-[78px] px-4">
                                                {data.col2Title}
                                            </div>
                                        </th>
                                        <th className="pr-3 pt-3 text-center text-sm md:text-[16px] lg:text-[18px] font-semibold">
                                            <div className="flex items-center justify-center bg-[#002045] min-h-[78px] rounded-r-[10px] px-4">
                                                {data.col3Title}
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rows.map((row, index) => (
                                        <tr
                                            key={index}
                                            className={`${
                                                index % 2 === 0
                                                    ? "bg-white"
                                                    : "bg-[#EBF6FE]"
                                            }`}
                                        >
                                            <td className="py-4 px-6 text-center text-sm md:text-[16px] text-black border-r-2 border-[#002045]/10">
                                                {row.role}
                                            </td>
                                            <td className="py-4 px-6 text-center text-sm md:text-[16px] text-black border-r-2 border-[#002045]/10">
                                                {row.package}
                                            </td>
                                            <td className="py-4 px-6 text-center text-sm md:text-[16px] text-black">
                                                {row.sectors}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Note Footer */}
                        <div className="w-full bg-[linear-gradient(90deg,#001834_0%,#00479A_100%)] text-white text-center py-3.5 px-6 rounded-[4px] text-xs sm:text-[16px] font-semibold mt-6">
                            *Note: The packages mentioned above are sourced from
                            various sources on the internet. Hence, they can
                            vary.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default BreakDownSection;
