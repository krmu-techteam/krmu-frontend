"use client";

import React from "react";
import {
    CounterBlock,
    PhDOverview as PhDOverviewType,
} from "@/lib/types/phd-programmes";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Newsreader } from "next/font/google";

const newsreader = Newsreader({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    style: ["normal", "italic"],
});

interface PHDOverviewProps {
    overviewData: PhDOverviewType;
    eligibilityCriteria?: CounterBlock;
}

const PHDOverview = ({
    overviewData,
    eligibilityCriteria,
}: PHDOverviewProps) => {
    const eligibilityText = eligibilityCriteria?.countercontent?.trim();

    const rawTitle = overviewData?.title || "Overview";
    // Normalize uppercase "OVERVIEW" to "Overview"
    const overviewTitle =
        rawTitle.toUpperCase() === rawTitle
            ? rawTitle.charAt(0).toUpperCase() + rawTitle.slice(1).toLowerCase()
            : rawTitle;

    return (
        <>
            <section
                id="overview"
                className="w-full bg-[#F7F2E7] pt-14 sm:pt-16 lg:pt-20 px-5 sm:px-8 md:px-10 lg:px-12 xl:px-[51px] scroll-mt-24"
            >
                <div className="max-w-[1440px] mx-auto w-full flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-14 xl:gap-20">
                    {/* LEFT COLUMN: OVERVIEW (Title + Paragraphs) */}
                    <div className="w-full lg:w-[58%] xl:w-[60%]">
                        <h2
                            className={`${newsreader.className} text-[38px] sm:text-[46px] lg:text-[52px] font-medium text-[#1F2D46] tracking-[-0.02em] leading-tight mb-4`}
                        >
                            {overviewTitle}
                        </h2>
                        <div className="text-[#333333] text-[15px] sm:text-[16px] font-normal">
                            {overviewData?.desc && (
                                <BlocksRenderer
                                    content={overviewData.desc}
                                    blocks={{
                                        paragraph: ({ children }) => (
                                            <p className="text-[#14233D] text-[15px] sm:text-[16px]">
                                                {children}
                                            </p>
                                        ),
                                    }}
                                />
                            )}
                        </div>
                    </div>

                    {/* RIGHT COLUMN: ELIGIBILITY CARD (Aligned with left title/column) */}
                    <div className="w-full lg:w-[42%] xl:w-[38%] shrink-0">
                        <div className="bg-[#D3E1EA] p-8 flex flex-col justify-between">
                            <div>
                                <h3
                                    className={`${newsreader.className} text-[24px] font-semibold text-[#000000] mb-2`}
                                >
                                    Eligibility
                                </h3>
                                <p className="text-[#000] text-[14px] sm:text-[16px] mb-5 font-normal">
                                    {eligibilityText}
                                </p>
                            </div>
                            <div>
                                <a
                                    href="#admission-process"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const formContainer =
                                            document.querySelector(
                                                ".heroBannerForm__form"
                                            ) ||
                                            document.querySelector("iframe") ||
                                            document.getElementById(
                                                "admission-process"
                                            );
                                        if (formContainer) {
                                            formContainer.scrollIntoView({
                                                behavior: "smooth",
                                                block: "center",
                                            });
                                        } else {
                                            window.scrollTo({
                                                top: 0,
                                                behavior: "smooth",
                                            });
                                        }
                                    }}
                                    className="inline-block bg-[#E21F21] hover:bg-[#C91A1C] text-white font-normal text-[15px] px-8 py-[9px] transition-colors cursor-pointer"
                                >
                                    Apply Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 sm:mt-16  border-t border-black w-[1440px] mx-auto"></div>
            </section>
        </>
    );
};

export default PHDOverview;
