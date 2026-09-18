"use client";

import React from "react";
import { ProgrammeHighlight } from "@/lib/types/phd-programmes";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Newsreader } from "next/font/google";
import Image from "next/image";

const newsreader = Newsreader({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    style: ["normal", "italic"],
});

type Props = {
    highlightContent: ProgrammeHighlight;
};

const PHDProgrammeHighlight = ({ highlightContent }: Props) => {
    if (!highlightContent) return null;

    return (
        <section
            id="programme-highlight"
            className="w-full bg-[#F4F6F9] pt-0 pb-16 sm:pb-20 lg:pb-24 px-5 sm:px-8 md:px-10 lg:px-12 xl:px-[51px]"
        >
            <div className="max-w-[1440px] mx-auto w-full">
                {/* DARK CARD CONTAINER (#14233D) */}
                <div className="bg-[#14233D] rounded-[20px] sm:rounded-[24px] overflow-hidden flex flex-col lg:flex-row items-stretch shadow-[0px_10px_30px_rgba(20,35,61,0.15)]">
                    {/* LEFT SIDE IMAGE (width: 420, full height flush) */}
                    <div className="w-full lg:w-[420px] min-h-[260px] sm:min-h-[300px] lg:min-h-[340px] self-stretch relative shrink-0">
                        <Image
                            src="/images/phd/workmens.jpg"
                            alt="Program Highlight"
                            fill
                            className="object-cover object-center"
                            sizes="(max-width: 1024px) 100vw, 420px"
                        />
                    </div>

                    {/* RIGHT SIDE CONTENT */}
                    <div className="w-full lg:flex-1 bg-[#14233D] p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                        <div className="w-full flex flex-col gap-[14px]">
                            {/* SUBTITLE */}
                            <span className="text-[#C29C4B] uppercase text-[11px] sm:text-[12px] font-semibold tracking-[0.2em] block">
                                RESEARCH FOCUS
                            </span>

                            {/* TITLE */}
                            <h3
                                className={`${newsreader.className} text-[32px] sm:text-[38px] lg:text-[40px] font-medium text-white tracking-[-0.02em] leading-tight`}
                            >
                                {highlightContent?.heading ||
                                    "Program Highlight"}
                            </h3>

                            {/* PARAGRAPHS */}
                            <div className="text-[#CBD5E1] text-[13px] sm:text-[14px] leading-relaxed font-normal">
                                {highlightContent?.phdcontent && (
                                    <BlocksRenderer
                                        content={highlightContent.phdcontent}
                                        blocks={{
                                            paragraph: ({ children }) => (
                                                <p className="text-[#CBD5E1] text-[13px] sm:text-[14px] leading-relaxed mb-3 last:mb-0">
                                                    {children}
                                                </p>
                                            ),
                                        }}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PHDProgrammeHighlight;
