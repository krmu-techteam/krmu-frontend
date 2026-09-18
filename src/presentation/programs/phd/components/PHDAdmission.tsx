"use client";

import React, { useMemo } from "react";
import { ParagraphBlock } from "@/lib/types/about";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Newsreader } from "next/font/google";

const newsreader = Newsreader({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    style: ["normal", "italic"],
});

type Props = {
    title1: ParagraphBlock[];
    title2: ParagraphBlock[];
    desc1: ParagraphBlock[];
    desc2: ParagraphBlock[];
};

type ProcessedItem = {
    isHeading: boolean;
    text: string;
};

const PHDAdmission = ({ title1, title2, desc1, desc2 }: Props) => {
    // Process desc2 to merge broken line-breaks from CMS while keeping headings distinct and preserving all text
    const processedDesc2 = useMemo(() => {
        if (!desc2 || !Array.isArray(desc2)) return [];

        const items: ProcessedItem[] = [];
        let currentParagraph: string[] = [];

        const flushParagraph = () => {
            if (currentParagraph.length > 0) {
                items.push({
                    isHeading: false,
                    text: currentParagraph
                        .join(" ")
                        .replace(/\s+/g, " ")
                        .trim(),
                });
                currentParagraph = [];
            }
        };

        for (const block of desc2) {
            const blockText = (block.children || [])
                .map((c: any) => c?.text || "")
                .join("")
                .trim();

            // Skip blank CMS entries to eliminate awkward empty line gaps
            if (!blockText) {
                flushParagraph();
                continue;
            }

            // Detect section headers
            const isHeading =
                (blockText.length > 0 &&
                    blockText.length < 50 &&
                    blockText === blockText.toUpperCase() &&
                    !blockText.endsWith(".")) ||
                /^(written entrance examination|personal interview)/i.test(
                    blockText
                );

            if (isHeading) {
                flushParagraph();
                items.push({
                    isHeading: true,
                    text: blockText,
                });
            } else {
                if (currentParagraph.length === 0) {
                    currentParagraph.push(blockText);
                } else {
                    const prev = currentParagraph[currentParagraph.length - 1];
                    // If previous line did not end with sentence-ending punctuation, merge as continuous sentence
                    if (
                        !prev.endsWith(".") &&
                        !prev.endsWith(":") &&
                        !prev.endsWith("!") &&
                        !prev.endsWith("?")
                    ) {
                        currentParagraph.push(blockText);
                    } else {
                        flushParagraph();
                        currentParagraph.push(blockText);
                    }
                }
            }
        }

        flushParagraph();
        return items;
    }, [desc2]);

    // Normalize titles to remove unwanted hard-coded newlines from CMS so they stay on a single line
    const normalizedTitle1 = useMemo(() => {
        if (!title1 || !Array.isArray(title1)) return [];
        return title1.map((block) => ({
            ...block,
            children: (block.children || []).map((child: any) => ({
                ...child,
                text: (child?.text || "").replace(/\r?\n/g, " "),
            })),
        }));
    }, [title1]);

    const normalizedTitle2 = useMemo(() => {
        if (!title2 || !Array.isArray(title2)) return [];
        return title2.map((block) => ({
            ...block,
            children: (block.children || []).map((child: any) => ({
                ...child,
                text: (child?.text || "").replace(/\r?\n/g, " "),
            })),
        }));
    }, [title2]);

    return (
        <section
            id="admission-process"
            className="w-full bg-[#14233D] py-14 sm:py-16 lg:py-20 px-5 sm:px-8 md:px-10 lg:px-12 xl:px-[51px] scroll-mt-24"
        >
            <div className="max-w-[1440px] mx-auto w-full">
                <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 sm:gap-10 lg:gap-14 xl:gap-16">
                    {/* LEFT CARD: ADMISSION PROCESS (#D3E1EA) */}
                    <div className="w-full lg:w-[48%] xl:w-[46%] shrink-0 bg-[#D3E1EA] rounded-[10px] sm:rounded-[10px] p-6 sm:p-8 lg:p-10 xl:p-12 flex flex-col justify-center">
                        {/* TITLE 1 */}
                        {normalizedTitle1 && normalizedTitle1.length > 0 && (
                            <div
                                className={`${newsreader.className} text-[30px] sm:text-[36px] lg:text-[40px] font-medium text-[#14233D] tracking-[-0.01em] leading-tight mb-5 sm:mb-6 whitespace-normal [&_p]:text-[#14233D] [&_h1]:text-[#14233D] [&_h2]:text-[#14233D] [&_h3]:text-[#14233D]`}
                            >
                                <BlocksRenderer content={normalizedTitle1} />
                            </div>
                        )}

                        {/* DESC 1 */}
                        {desc1 && desc1.length > 0 && (
                            <div className="text-[#14233D] text-[13px] sm:text-[14px] leading-relaxed font-normal [&_p]:mb-4 last:[&_p]:mb-0 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_p:empty]:hidden [&_p:has(br:only-child)]:hidden">
                                <BlocksRenderer
                                    content={desc1}
                                    blocks={{
                                        paragraph: ({ children }) => (
                                            <p className="text-[#14233D] text-[13px] sm:text-[14px] leading-relaxed mb-4 last:mb-0 font-normal">
                                                {children}
                                            </p>
                                        ),
                                    }}
                                />
                            </div>
                        )}
                    </div>

                    {/* RIGHT COLUMN: SELECTION PROCESS */}
                    <div className="w-full lg:flex-1 flex flex-col justify-center">
                        {/* TITLE 2 */}
                        {normalizedTitle2 && normalizedTitle2.length > 0 && (
                            <div
                                className={`${newsreader.className} text-[30px] sm:text-[36px] lg:text-[40px] font-medium text-[#8ABBD7] tracking-[-0.01em] leading-tight mb-5 sm:mb-6 whitespace-normal [&_p]:text-[#8ABBD7] [&_h1]:text-[#8ABBD7] [&_h2]:text-[#8FC1DE] [&_h3]:text-[#8FC1DE]`}
                            >
                                <BlocksRenderer content={normalizedTitle2} />
                            </div>
                        )}

                        {/* DESC 2 (Cleanly normalized paragraphs with no broken line gaps) */}
                        {processedDesc2.length > 0 && (
                            <div className="flex flex-col gap-3 text-[#CBD5E1] text-[13px] sm:text-[14px] leading-relaxed font-normal">
                                {processedDesc2.map((item, idx) => {
                                    if (item.isHeading) {
                                        return (
                                            <h4
                                                key={idx}
                                                className="text-[#8ABBD7] text-[13px] sm:text-[14px] font-semibold tracking-wider uppercase mt-4 first:mt-0 mb-0.5"
                                            >
                                                {item.text}
                                            </h4>
                                        );
                                    }

                                    return (
                                        <p
                                            key={idx}
                                            className="text-[#CBD5E1] text-[13px] sm:text-[14px] leading-relaxed m-0 p-0 font-normal"
                                        >
                                            {item.text}
                                        </p>
                                    );
                                })}
                            </div>
                        )}

                        {/* APPLY NOW BUTTON */}
                        <div className="pt-4">
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
                                className="inline-block bg-[#E21F21] hover:bg-[#C91A1C] text-white font-medium text-[14px] sm:text-[15px] px-8 py-[10px] transition-colors cursor-pointer w-fit"
                            >
                                Apply Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PHDAdmission;
