"use client";

import React from "react";
import { PhDOutcome as PhDOutcomeType } from "@/lib/types/phd-programmes";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Newsreader } from "next/font/google";

const newsreader = Newsreader({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    style: ["normal", "italic"],
});

type Props = {
    phdoutcomecontent: PhDOutcomeType;
};

const PHDOutcome = ({ phdoutcomecontent }: Props) => {
    if (!phdoutcomecontent) return null;

    const outcomes = phdoutcomecontent.phdoutcome || [];

    return (
        <section
            id="program-outcome"
            className="w-full bg-[#F4F6F9] pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 px-5 sm:px-8 md:px-10 lg:px-12 xl:px-[51px] scroll-mt-24"
        >
            <div className="max-w-[1440px] mx-auto w-full">
                {/* SUBTITLE */}
                <span className="text-[#B08233] uppercase text-[11px] sm:text-[12px] font-semibold tracking-[0.2em] block mb-2">
                    PROGRAMME OUTCOMES
                </span>

                {/* HEADING */}
                <h2
                    className={`${newsreader.className} text-[36px] sm:text-[44px] lg:text-[48px] font-medium text-[#14233D] tracking-[-0.02em] leading-tight mb-8 sm:mb-10`}
                >
                    {phdoutcomecontent.title || "Programme outcomes"}
                </h2>

                {/* 3 OUTCOME CARDS */}
                {outcomes.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
                        {outcomes.map((item, idx) => {
                            // Extract first paragraph as title and remaining as description if structured as such
                            const desc = item.outcomedesc || [];
                            const hasMultipleBlocks = desc.length > 1;
                            const titleText = hasMultipleBlocks
                                ? (desc[0] as any)?.children
                                      ?.map((c: any) => c.text)
                                      .join("")
                                : "";
                            const remainingBlocks = hasMultipleBlocks
                                ? desc.slice(1)
                                : desc;

                            return (
                                <div
                                    key={item.id || idx}
                                    className="bg-white rounded-[16px] pt-[32px] pr-[28px] pb-[32px] pl-[28px] flex flex-col justify-start gap-[14px] min-h-[319px] shadow-[0px_8px_24px_0px_#14233D14] border border-[#E5E8F0]"
                                >
                                    {/* NUMBER BADGE (01, 02, 03) */}
                                    <div className="w-10 h-10 rounded-full bg-[#14233D] text-white font-bold flex items-center justify-center text-[13px] sm:text-[14px] shrink-0">
                                        {String(idx + 1).padStart(2, "0")}
                                    </div>

                                    {/* TITLE */}
                                    {titleText && (
                                        <h3 className="font-bold text-[#14233D] text-[18px] sm:text-[19px] leading-snug">
                                            {titleText}
                                        </h3>
                                    )}

                                    {/* DESCRIPTION */}
                                    <div className="text-[#525966] text-[13.5px] sm:text-[14px] leading-relaxed font-normal">
                                        <BlocksRenderer
                                            content={remainingBlocks}
                                            blocks={{
                                                paragraph: ({ children }) => (
                                                    <p className="text-[#525966] text-[13.5px] sm:text-[14px] leading-relaxed mb-2 last:mb-0">
                                                        {children}
                                                    </p>
                                                ),
                                            }}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    );
};

export default PHDOutcome;
