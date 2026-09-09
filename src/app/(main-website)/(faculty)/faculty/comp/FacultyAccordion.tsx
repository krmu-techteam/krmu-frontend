"use client";

import React, { useState } from "react";
import {
    User,
    GraduationCap,
    Briefcase,
    FileText,
    Trophy,
    Newspaper,
    Award,
    ChevronDown,
} from "lucide-react";

export type FacultyTabItem = {
    title: string;
    content: string;
};

type Props = {
    tabs: FacultyTabItem[];
};

export const FacultyAccordion: React.FC<Props> = ({ tabs }) => {
    // Only one item open at a time (first item open by default)
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleIndex = (index: number) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    const renderIcon = (IconComponent: React.ElementType) => (
        <IconComponent
            className="w-[18px] h-[22.5px] shrink-0"
            stroke="url(#faculty-icon-grad)"
            style={{ stroke: "url(#faculty-icon-grad)" }}
            strokeWidth={2}
        />
    );

    const getTabIcon = (title: string) => {
        const t = title.toLowerCase();
        if (t.includes("profile") || t.includes("about") || t.includes("bio")) {
            return renderIcon(User);
        }
        if (
            t.includes("education") ||
            t.includes("qualification") ||
            t.includes("academic")
        ) {
            return renderIcon(GraduationCap);
        }
        if (
            t.includes("experience") ||
            t.includes("work") ||
            t.includes("career")
        ) {
            return renderIcon(Briefcase);
        }
        if (t.includes("research") || t.includes("interest")) {
            return renderIcon(FileText);
        }
        if (
            t.includes("project") ||
            t.includes("achievement") ||
            t.includes("award")
        ) {
            return renderIcon(Trophy);
        }
        if (
            t.includes("conference") ||
            t.includes("seminar") ||
            t.includes("workshop")
        ) {
            return renderIcon(FileText);
        }
        if (
            t.includes("publication") ||
            t.includes("book") ||
            t.includes("journal") ||
            t.includes("paper")
        ) {
            return renderIcon(Newspaper);
        }
        return renderIcon(Award);
    };

    if (!tabs || tabs.length === 0) {
        return null;
    }

    return (
        <div className="w-full max-w-[1187px] mx-auto flex flex-col gap-3 sm:gap-3.5">
            {/* SVG definition for vertical gradient stroke: #FA696B to #1962AB */}
            <svg
                width="0"
                height="0"
                className="sr-only absolute pointer-events-none"
                aria-hidden="true"
            >
                <defs>
                    <linearGradient
                        id="faculty-icon-grad"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                    >
                        <stop offset="0%" stopColor="#CB000D" />
                        <stop offset="100%" stopColor="#FA696B" />
                    </linearGradient>
                </defs>
            </svg>

            {tabs.map((tab, index) => {
                const isOpen = openIndex === index;

                return (
                    <div
                        key={index}
                        className="w-full rounded-[2px] overflow-hidden transition-all duration-200 shadow-sm"
                        style={{
                            background:
                                "linear-gradient(280deg, #061623 98.65%, #CB000D 100%)",
                        }}
                    >
                        <button
                            type="button"
                            onClick={() => toggleIndex(index)}
                            className="w-full   h-[55px] md:h-[66px] flex items-center justify-between px-4 sm:px-6 text-left focus:outline-none cursor-pointer hover:opacity-95 transition-opacity"
                            aria-expanded={isOpen}
                        >
                            <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                                <div className="shrink-0 flex items-center justify-center">
                                    {getTabIcon(tab.title)}
                                </div>
                                <span className="text-base sm:text-[17px] font-semibold text-white  font-poppins truncate">
                                    {tab.title}
                                </span>
                            </div>

                            <ChevronDown
                                className={`w-5 h-5 text-white transition-transform duration-300 shrink-0 ${
                                    isOpen ? "rotate-180" : ""
                                }`}
                            />
                        </button>

                        {/* Smooth animated accordion body */}
                        <div
                            className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                                isOpen
                                    ? "grid-rows-[1fr] opacity-100"
                                    : "grid-rows-[0fr] opacity-0"
                            }`}
                        >
                            <div className="overflow-hidden">
                                {tab.content && (
                                    <div className="px-5 sm:px-7 pb-6 pt-3 text-white border-t border-white/10 bg-[#061623]">
                                        <div
                                            className="prose prose-invert max-w-none text-sm sm:text-[15px] leading-relaxed faculty-tab-content text-white"
                                            dangerouslySetInnerHTML={{
                                                __html: tab.content,
                                            }}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default FacultyAccordion;
