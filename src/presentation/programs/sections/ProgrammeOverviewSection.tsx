"use client";

import Image from "next/image";
import React, { useState } from "react";
import { programmeOverviewData } from "../constants/programme-overview.constants";

interface Props {
    slug?: string;
}

const ProgrammeOverviewSection = ({ slug }: Props) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const data =
        (slug && programmeOverviewData[slug]) ||
        programmeOverviewData["b-tech-cse"];

    if (!data) return null;

    return (
        <section
            id="about-program"
            className={`w-full bg-transparent py-8 md:py-12 xl:py-20 scroll-mt-28`}
        >
            <div className="max-w-[1530px] mx-auto px-4 md:px-8 xl:px-16">
                <div
                    className="relative overflow-hidden rounded-[15px] py-10 px-6 sm:px-10 z-10 flex flex-col justify-center text-left"
                    style={{
                        background:
                            "linear-gradient(90deg, #0161B0 0%, #001228 100%)",
                    }}
                >
                    {/* Dashed Gradient Border */}
                    <svg
                        className="absolute inset-0 w-full h-full pointer-events-none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect
                            x="1.5"
                            y="1.5"
                            width="calc(100% - 3px)"
                            height="calc(100% - 3px)"
                            rx="16"
                            ry="16"
                            fill="none"
                            stroke="url(#gradient)"
                            strokeWidth="3"
                            strokeDasharray="6 6"
                        />

                        <defs>
                            <linearGradient
                                id="gradient"
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="0%"
                            >
                                <stop offset="0%" stopColor="#001732" />
                                <stop offset="100%" stopColor="#004698" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {/* Background Decoration */}
                    <div className="absolute bottom-0 right-0 pointer-events-none w-[220px] h-[212px] z-0 overflow-hidden select-none">
                        <Image
                            src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/image_636_1_a5c11e2e58.png"
                            alt="bg image"
                            width={1024}
                            height={1024}
                            className="w-full h-full"
                        />
                    </div>

                    {/* Content Container */}
                    <div className="relative z-10 flex flex-col items-start w-full">
                        <h2 className="heading-primary mb-4">
                            Programme Overview
                        </h2>

                        {/* Always visible initial paragraph */}
                        <p className="mb-4 text-white text-[16px] leading-[130%] font-light w-full font-poppins">
                            {data.initial}
                        </p>

                        {/* Expandable Container - Smooth CSS Grid transition */}
                        {data.more && data.more.length > 0 && (
                            <div
                                className={`grid transition-all duration-500 ease-in-out text-white text-[16px] leading-[130%] font-light w-full font-poppins ${
                                    isExpanded
                                        ? "grid-rows-[1fr] opacity-100"
                                        : "grid-rows-[0fr] opacity-0"
                                }`}
                            >
                                <div className="overflow-hidden space-y-4">
                                    {data.more.map((paragraph, index) => (
                                        <p key={index}>{paragraph}</p>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Toggle Button */}
                        {data.more && data.more.length > 0 && (
                            <button
                                type="button"
                                onClick={() => setIsExpanded(!isExpanded)}
                                aria-expanded={isExpanded}
                                className="inline-block font-normal text-white text-[16px] underline underline-offset-4 decoration-1 hover:text-white/80 hover:decoration-2 transition-all duration-300 cursor-pointer mt-4 select-none bg-transparent border-0 p-0 text-left"
                            >
                                {isExpanded ? "Read Less" : "Read More"}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
export default ProgrammeOverviewSection;
