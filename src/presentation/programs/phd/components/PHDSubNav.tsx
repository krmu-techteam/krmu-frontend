"use client";

import React, { useEffect, useRef, useState } from "react";

interface SubNavItem {
    label: string;
    targetId: string;
}

const navItems: SubNavItem[] = [
    { label: "Overview", targetId: "overview" },
    { label: "Scholar Categories", targetId: "scholar-categories" },
    { label: "Career", targetId: "career" },
    { label: "Program Outcome", targetId: "program-outcome" },
    { label: "Admission Process", targetId: "admission-process" },
    { label: "FAQs", targetId: "faqs" },
];

export default function PHDSubNav() {
    const [activeId, setActiveId] = useState<string>("overview");
    const [isSticky, setIsSticky] = useState<boolean>(false);
    const [headerHeight, setHeaderHeight] = useState<number>(80);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const headerEl = document.querySelector("header");
            const currentHeaderHeight = headerEl
                ? Math.round(headerEl.getBoundingClientRect().height)
                : 80;

            setHeaderHeight(currentHeaderHeight);

            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                if (rect.top <= currentHeaderHeight) {
                    setIsSticky(true);
                } else {
                    setIsSticky(false);
                }
            }

            // Find which section is currently active
            const scrollPos = window.scrollY + currentHeaderHeight + 100;
            for (let i = navItems.length - 1; i >= 0; i--) {
                const el = document.getElementById(navItems[i].targetId);
                if (el) {
                    const top = el.getBoundingClientRect().top + window.scrollY;
                    if (scrollPos >= top) {
                        setActiveId(navItems[i].targetId);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToSection = (e: React.MouseEvent, targetId: string) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            const headerEl = document.querySelector("header");
            const offset = headerEl
                ? headerEl.getBoundingClientRect().height + 65
                : 140;
            const top =
                element.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({
                top: Math.max(0, top),
                behavior: "smooth",
            });
            setActiveId(targetId);
        }
    };

    return (
        <>
            {/* Placeholder to prevent layout jump when sticky */}
            {isSticky && <div className="h-[61px] w-full" />}

            <nav
                ref={containerRef}
                style={{
                    backgroundColor: "#D6D1C7",
                    top: isSticky ? `${headerHeight}px` : "auto",
                }}
                className={`w-full z-40 transition-shadow duration-200 border-b border-black/5 ${
                    isSticky ? "fixed left-0 shadow-md" : "relative"
                }`}
            >
                <div className="max-w-[1440px] mx-auto h-[61px] px-4 sm:px-6 lg:px-8 flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar">
                    <ul className="flex items-center gap-6 sm:gap-10 lg:gap-14 whitespace-nowrap min-w-max py-2">
                        {navItems.map((item) => {
                            const isActive = activeId === item.targetId;
                            return (
                                <li key={item.targetId}>
                                    <a
                                        href={`#${item.targetId}`}
                                        onClick={(e) =>
                                            scrollToSection(e, item.targetId)
                                        }
                                        className={`text-[14px] sm:text-[15px] font-medium transition-all duration-200 cursor-pointer relative py-2 ${
                                            isActive
                                                ? "text-[#14233D] font-bold"
                                                : "text-[#14233D]/80 hover:text-[#14233D]"
                                        }`}
                                    >
                                        {item.label}
                                        {isActive && (
                                            <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#14233D] rounded-full" />
                                        )}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </nav>
        </>
    );
}
