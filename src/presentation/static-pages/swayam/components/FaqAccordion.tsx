"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
    swayamFaqList,
    swayamImportantPoints,
    SwayamFaqItem,
} from "../data/faqData";

interface FaqAccordionProps {
    className?: string;
    maxHeight?: string;
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({
    className = "",
    maxHeight,
}) => {
    // Only one accordion open at a time; when another opens, the previous closes
    const [openId, setOpenId] = useState<number | null>(1);

    const toggleItem = (id: number) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

    return (
        <div
            className={`w-full flex flex-col gap-4 text-[#1F2937] ${className}`}
        >
            {/* Header info */}
            <div className="flex items-center justify-between text-xs text-gray-500 pb-2 border-b border-gray-200 shrink-0">
                <span>Total: {swayamFaqList.length} Questions</span>
                {openId !== null && (
                    <button
                        type="button"
                        onClick={() => setOpenId(null)}
                        className="hover:text-black font-medium transition-colors cursor-pointer"
                    >
                        Close All
                    </button>
                )}
            </div>

            {/* Accordion List Container */}
            <div
                className={`w-full flex flex-col gap-3 ${
                    maxHeight ? `${maxHeight} overflow-y-auto pr-1` : ""
                }`}
            >
                {swayamFaqList.map((item: SwayamFaqItem) => {
                    const isOpen = openId === item.id;
                    return (
                        <div
                            key={item.id}
                            className="w-full shrink-0 bg-white border border-gray-200 rounded-[6px] overflow-hidden transition-all duration-200"
                        >
                            {/* Accordion Header Button */}
                            <button
                                type="button"
                                onClick={() => toggleItem(item.id)}
                                className={`w-full min-h-[52px] text-left px-4 py-3.5 sm:py-4 flex items-center justify-between gap-3 transition-colors cursor-pointer ${
                                    isOpen
                                        ? "bg-gray-50 border-b border-gray-200 font-semibold"
                                        : "bg-white hover:bg-gray-50"
                                }`}
                                aria-expanded={isOpen}
                            >
                                <span className="text-sm sm:text-[15px] font-semibold text-[#111827] leading-snug">
                                    Question {item.questionNumber}: {item.title}
                                </span>
                                <span className="shrink-0 text-gray-500 ml-2">
                                    {isOpen ? (
                                        <ChevronUp className="w-4 h-4 text-gray-800" />
                                    ) : (
                                        <ChevronDown className="w-4 h-4" />
                                    )}
                                </span>
                            </button>

                            {/* Accordion Body Content */}
                            {isOpen && (
                                <div className="p-4 sm:p-5 flex flex-col gap-4 text-xs sm:text-sm bg-white">
                                    {/* HEI Query */}
                                    <div className="flex flex-col gap-1.5">
                                        <span className="text-[11px] sm:text-xs font-bold text-gray-700 uppercase tracking-wider">
                                            HEI Query:
                                        </span>
                                        <p className="text-gray-800 leading-relaxed whitespace-pre-line text-xs sm:text-sm">
                                            {item.heiQuery}
                                        </p>
                                    </div>

                                    {/* UGC Reply */}
                                    <div className="flex flex-col gap-1.5 pt-3.5 border-t border-gray-100">
                                        <span className="text-[11px] sm:text-xs font-bold text-gray-700 uppercase tracking-wider">
                                            UGC Reply:
                                        </span>
                                        <p className="text-gray-900 leading-relaxed whitespace-pre-line text-xs sm:text-sm font-normal">
                                            {item.ugcReply}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}

                {/* Important Points from Document */}
                <div className="w-full shrink-0 bg-white border border-gray-200 rounded-[6px] p-4 sm:p-5 mt-2">
                    <h4 className="text-xs sm:text-sm font-bold text-[#111827] mb-3 uppercase tracking-wider">
                        Important Points from the Document
                    </h4>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-gray-800">
                        {swayamImportantPoints.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 shrink-0" />
                                <span className="leading-relaxed">{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FaqAccordion;
