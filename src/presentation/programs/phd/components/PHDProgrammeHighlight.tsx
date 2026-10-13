"use client";

import React from "react";
import { ProgrammeHighlight } from "@/lib/types/phd-programmes";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { newsreader } from "../font";
import Image from "next/image";

type Props = {
    highlightContent: ProgrammeHighlight;
    slug?: string;
};

interface HighlightImageConfig {
    src: string;
    alt: string;
}

const PHD_HIGHLIGHT_IMAGES: Record<string, HighlightImageConfig> = {
    "phd-in-chemistry": {
        src: "/images/phd/highlights/phd-in-chemistry.webp",
        alt: "Ph.D. in Chemistry Research Highlight",
    },
    "phd-chemistry": {
        src: "/images/phd/highlights/phd-in-chemistry.webp",
        alt: "Ph.D. in Chemistry Research Highlight",
    },
    "phd-in-commerce": {
        src: "/images/phd/highlights/phd-in-commerce.webp",
        alt: "Ph.D. in Commerce Research Highlight",
    },
    "phd-commerce": {
        src: "/images/phd/highlights/phd-in-commerce.webp",
        alt: "Ph.D. in Commerce Research Highlight",
    },
    "phd-in-computer-science-and-engineering": {
        src: "/images/phd/highlights/phd-in-computer-science-and-engineering.webp",
        alt: "Ph.D. in Computer Science and Engineering Research Highlight",
    },
    "phd-computer-science-engineering": {
        src: "/images/phd/highlights/phd-in-computer-science-and-engineering.webp",
        alt: "Ph.D. in Computer Science and Engineering Research Highlight",
    },
    "phd-computer-science-and-engineering": {
        src: "/images/phd/highlights/phd-in-computer-science-and-engineering.webp",
        alt: "Ph.D. in Computer Science and Engineering Research Highlight",
    },
    "phd-in-computer-science-engineering": {
        src: "/images/phd/highlights/phd-in-computer-science-and-engineering.webp",
        alt: "Ph.D. in Computer Science and Engineering Research Highlight",
    },
    "phd-cse": {
        src: "/images/phd/highlights/phd-in-computer-science-and-engineering.webp",
        alt: "Ph.D. in Computer Science and Engineering Research Highlight",
    },
    "phd-in-cse": {
        src: "/images/phd/highlights/phd-in-computer-science-and-engineering.webp",
        alt: "Ph.D. in Computer Science and Engineering Research Highlight",
    },
    "phd-in-economics": {
        src: "/images/phd/highlights/phd-in-economics.webp",
        alt: "Ph.D. in Economics Research Highlight",
    },
    "phd-economics": {
        src: "/images/phd/highlights/phd-in-economics.webp",
        alt: "Ph.D. in Economics Research Highlight",
    },
    "phd-in-education": {
        src: "/images/phd/highlights/phd-in-education.webp",
        alt: "Ph.D. in Education Research Highlight",
    },
    "phd-education": {
        src: "/images/phd/highlights/phd-in-education.webp",
        alt: "Ph.D. in Education Research Highlight",
    },
    "phd-in-english": {
        src: "/images/phd/highlights/phd-in-english.webp",
        alt: "Ph.D. in English Research Highlight",
    },
    "phd-english": {
        src: "/images/phd/highlights/phd-in-english.webp",
        alt: "Ph.D. in English Research Highlight",
    },
    "phd-english-literature-studies": {
        src: "/images/phd/highlights/phd-in-english.webp",
        alt: "Ph.D. in English Literature and Studies Research Highlight",
    },
    "phd-in-english-literature-studies": {
        src: "/images/phd/highlights/phd-in-english.webp",
        alt: "Ph.D. in English Literature and Studies Research Highlight",
    },
    "phd-in-forensic-science": {
        src: "/images/phd/highlights/phd-in-forensic-science.webp",
        alt: "Ph.D. in Forensic Science Research Highlight",
    },
    "phd-forensic-science": {
        src: "/images/phd/highlights/phd-in-forensic-science.webp",
        alt: "Ph.D. in Forensic Science Research Highlight",
    },
    "phd-in-journalism-and-mass-communication": {
        src: "/images/phd/highlights/phd-in-journalism-and-mass-communication.webp",
        alt: "Ph.D. in Journalism and Mass Communication Research Highlight",
    },
    "phd-journalism-mass-communication": {
        src: "/images/phd/highlights/phd-in-journalism-and-mass-communication.webp",
        alt: "Ph.D. in Journalism and Mass Communication Research Highlight",
    },
    "phd-in-journalism-mass-communication": {
        src: "/images/phd/highlights/phd-in-journalism-and-mass-communication.webp",
        alt: "Ph.D. in Journalism and Mass Communication Research Highlight",
    },
    "phd-journalism-and-mass-communication": {
        src: "/images/phd/highlights/phd-in-journalism-and-mass-communication.webp",
        alt: "Ph.D. in Journalism and Mass Communication Research Highlight",
    },
    "phd-in-law": {
        src: "/images/phd/highlights/phd-in-law.webp",
        alt: "Ph.D. in Law Research Highlight",
    },
    "phd-law": {
        src: "/images/phd/highlights/phd-in-law.webp",
        alt: "Ph.D. in Law Research Highlight",
    },
    "phd-in-management": {
        src: "/images/phd/highlights/phd-in-management.webp",
        alt: "Ph.D. in Management Research Highlight",
    },
    "phd-management": {
        src: "/images/phd/highlights/phd-in-management.webp",
        alt: "Ph.D. in Management Research Highlight",
    },
    "phd-in-mathematics": {
        src: "/images/phd/highlights/phd-in-mathematics.webp",
        alt: "Ph.D. in Mathematics Research Highlight",
    },
    "phd-mathematics": {
        src: "/images/phd/highlights/phd-in-mathematics.webp",
        alt: "Ph.D. in Mathematics Research Highlight",
    },
    "phd-in-pharmaceutical-sciences": {
        src: "/images/phd/highlights/phd-in-pharmaceutical-sciences.webp",
        alt: "Ph.D. in Pharmaceutical Sciences Research Highlight",
    },
    "phd-pharmaceutical-sciences": {
        src: "/images/phd/highlights/phd-in-pharmaceutical-sciences.webp",
        alt: "Ph.D. in Pharmaceutical Sciences Research Highlight",
    },
    "phd-in-pharmacy": {
        src: "/images/phd/highlights/phd-in-pharmaceutical-sciences.webp",
        alt: "Ph.D. in Pharmaceutical Sciences Research Highlight",
    },
    "phd-pharmacy": {
        src: "/images/phd/highlights/phd-in-pharmaceutical-sciences.webp",
        alt: "Ph.D. in Pharmaceutical Sciences Research Highlight",
    },
    "phd-in-physics": {
        src: "/images/phd/highlights/phd-in-physics.webp",
        alt: "Ph.D. in Physics Research Highlight",
    },
    "phd-physics": {
        src: "/images/phd/highlights/phd-in-physics.webp",
        alt: "Ph.D. in Physics Research Highlight",
    },
    "phd-in-psychology": {
        src: "/images/phd/highlights/phd-in-psychology.webp",
        alt: "Ph.D. in Psychology Research Highlight",
    },
    "phd-psychology": {
        src: "/images/phd/highlights/phd-in-psychology.webp",
        alt: "Ph.D. in Psychology Research Highlight",
    },
    "phd-mechanical-engineering": {
        src: "/images/phd/highlights/phd-in-mechanical-engineering.jpg",
        alt: "Ph.D. in Mechanical Engineering Research Highlight",
    },
};

const PHDProgrammeHighlight = ({ highlightContent, slug }: Props) => {
    if (!highlightContent) return null;

    const normalizedSlug = slug ? slug.toLowerCase().trim() : "";
    const highlightImage = (normalizedSlug &&
        PHD_HIGHLIGHT_IMAGES[normalizedSlug]) ||
        (normalizedSlug && {
            src: `/images/phd/highlights/${normalizedSlug}.webp`,
            alt: `${highlightContent?.heading || "Ph.D."} Research Highlight`,
        }) || {
            src: "/images/phd/workmens.webp",
            alt: highlightContent?.heading || "Program Highlight",
        };

    return (
        <section
            id="programme-highlight"
            className="w-full bg-[#F4F6F9] pt-0 pb-12 sm:pb-20  px-5 sm:px-8 md:px-10 lg:px-12 xl:px-[51px]"
        >
            <div className="max-w-[1440px] mx-auto w-full">
                {/* DARK CARD CONTAINER (#14233D) */}
                <div className="bg-[#14233D] rounded-[10px] overflow-hidden flex flex-col lg:flex-row items-stretch">
                    {/* LEFT SIDE IMAGE (width: 420, full height flush) */}
                    <div className="w-full lg:w-[420px] min-h-[260px] sm:min-h-[300px] lg:min-h-[382px] self-stretch relative shrink-0">
                        <Image
                            src={highlightImage.src}
                            alt={highlightImage.alt}
                            fill
                            className="object-contain object-center"
                            sizes="(max-width: 1024px) 100vw, 420px"
                        />
                    </div>

                    {/* RIGHT SIDE CONTENT */}
                    <div className="w-full lg:flex-1 bg-[#14233D] p-4 md:p-8 lg:p-10 flex flex-col justify-center">
                        <div className="w-full flex flex-col gap-[14px]">
                            {/* SUBTITLE */}
                            <span className="text-[#C29C4B] uppercase text-[11px] sm:text-[12px] font-semibold tracking-[0.2em] block">
                                RESEARCH FOCUS
                            </span>

                            {/* TITLE */}
                            <h3
                                className={`${newsreader.className} text-[30px] md:text-[38px] lg:text-[40px] font-medium text-white tracking-[-0.02em] leading-tight`}
                            >
                                {highlightContent?.heading ||
                                    "Program Highlight"}
                            </h3>

                            {/* PARAGRAPHS */}
                            <div className="text-[#CBD5E1] text-[13px] sm:text-[14px] leading-relaxed font-normal [&_p:empty]:hidden [&_p:has(br:only-child)]:hidden">
                                {highlightContent?.phdcontent && (
                                    <BlocksRenderer
                                        content={highlightContent.phdcontent}
                                        blocks={{
                                            paragraph: ({ children }) => (
                                                <p className="text-[#CBD5E1] text-[13px] sm:text-[14px] leading-relaxed mb-0 md:mb-3 last:mb-0">
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
