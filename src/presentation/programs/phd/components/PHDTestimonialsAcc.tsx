"use client";

import React, { useState } from "react";
import { PhDFaq } from "@/lib/types/phd-programmes";
import { Newsreader } from "next/font/google";

const newsreader = Newsreader({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    style: ["normal", "italic"],
});

type Props = {
    faqTitle: string;
    faqs: PhDFaq[];
};

const PHDTestimonialsAcc = ({ faqTitle, faqs }: Props) => {
    // Default open first item (01) as shown in Figma mockup
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    if (!faqs || faqs.length === 0) return null;

    const cleanFaqTitle = (faqTitle || "Frequently Asked Questions").trim();
    const displayTitle = cleanFaqTitle.endsWith("?")
        ? cleanFaqTitle
        : `${cleanFaqTitle}?`;

    return (
        <section
            id="faqs"
            className="w-full bg-[#F7F2E7] pb-16 sm:pb-20 lg:pb-24 px-5 sm:px-8 md:px-10 lg:px-12 xl:px-[51px] scroll-mt-24"
        >
            <div className="max-w-[1050px] mx-auto w-full">
                {/* SECTION TITLE */}
                <h2
                    className={`${newsreader.className} text-[36px] sm:text-[44px] lg:text-[50px] font-medium text-[#14233D] tracking-[-0.02em] leading-tight text-center mb-12 sm:mb-16`}
                >
                    {displayTitle}
                </h2>

                {/* ACCORDION LIST */}
                <div className="w-full border-t border-black">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        const num = String(index + 1).padStart(2, "0");

                        return (
                            <div
                                key={faq.id || index}
                                className="border-b border-black py-6 sm:py-7 transition-colors"
                            >
                                <button
                                    type="button"
                                    onClick={() => toggleItem(index)}
                                    className="w-full flex items-start justify-between gap-4 sm:gap-6 text-left cursor-pointer group"
                                    aria-expanded={isOpen}
                                >
                                    <div className="flex items-start gap-5 sm:gap-8 flex-1">
                                        {/* NUMBER BADGE (01, 02, etc.) */}
                                        <span className="text-[22px] sm:text-[26px] font-bold text-[#14233D] shrink-0 w-8 sm:w-10 leading-none pt-0.5 select-none">
                                            {num}
                                        </span>

                                        {/* QUESTION & ANSWER */}
                                        <div className="flex-1 pr-2">
                                            <h3 className="text-[15px] sm:text-[17px] font-bold text-[#14233D] leading-snug tracking-tight">
                                                {faq.ques?.trim()}
                                            </h3>

                                            {/* SMOOTH ANIMATED ACCORDION CONTENT */}
                                            <div
                                                className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                                                style={{
                                                    gridTemplateRows: isOpen
                                                        ? "1fr"
                                                        : "0fr",
                                                }}
                                            >
                                                <div className="overflow-hidden">
                                                    {faq.ans && (
                                                        <div className="pt-3 text-[#272624] text-[13px] sm:text-[14px] leading-relaxed font-normal">
                                                            <p>
                                                                {faq.ans.trim()}
                                                            </p>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* GOLDEN CIRCLE TOGGLE BUTTON WITH SMOOTH ROTATION */}
                                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#E9C878] group-hover:bg-[#dfbd6b] flex items-center justify-center shrink-0 transition-all duration-300 shadow-sm mt-0.5 relative">
                                        {/* Horizontal minus bar (always present) */}
                                        <span className="w-3.5 sm:w-4 h-[2px] bg-[#14233D] rounded-full absolute transition-transform duration-300"></span>

                                        {/* Vertical bar (animates and rotates to 0 when open) */}
                                        <span
                                            className={`w-[2px] h-3.5 sm:h-4 bg-[#14233D] rounded-full absolute transition-all duration-300 ${
                                                isOpen
                                                    ? "rotate-90 opacity-0 scale-0"
                                                    : "rotate-0 opacity-100 scale-100"
                                            }`}
                                        ></span>
                                    </div>
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default PHDTestimonialsAcc;
