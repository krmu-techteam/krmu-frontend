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
                : window.innerWidth >= 1280
                  ? 88
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

            // Scroll spy logic to highlight current visible section
            const spyThreshold = currentHeaderHeight + 70;
            for (let i = navItems.length - 1; i >= 0; i--) {
                const el = document.getElementById(navItems[i].targetId);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= spyThreshold) {
                        setActiveId(navItems[i].targetId);
                        break;
                    }
                }
            }
        };

        handleScroll();
        const t1 = setTimeout(handleScroll, 100);
        const t2 = setTimeout(handleScroll, 400);
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll, { passive: true });

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    const scrollToSection = (e: React.MouseEvent, targetId: string) => {
        e.preventDefault();
        setActiveId(targetId);
        const element = document.getElementById(targetId);
        if (element) {
            const subNavH = containerRef.current
                ? containerRef.current.offsetHeight
                : 61;
            const totalStickyHeight = headerHeight + subNavH;
            const top =
                element.getBoundingClientRect().top +
                window.pageYOffset -
                totalStickyHeight +
                5;
            window.scrollTo({
                top: Math.max(0, top),
                behavior: "smooth",
            });
        }
    };

    return (
        <div ref={containerRef} className="w-full min-h-[61px] relative">
            <nav
                style={{
                    backgroundColor: "#D6D1C7",
                    top: isSticky ? `${headerHeight}px` : "auto",
                }}
                className={`w-full z-40 transition-[top] duration-150 ${
                    isSticky ? "fixed left-0" : "relative"
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
                                        className="group relative inline-block text-[14px] sm:text-[16px] font-semibold text-[#14233D] cursor-pointer py-[2px] transition-colors duration-200"
                                    >
                                        {item.label}
                                        <span
                                            className={`absolute bottom-0 left-0 h-[2px] bg-[#14233D] rounded-full transition-all duration-300 ease-in-out ${
                                                isActive
                                                    ? "w-full opacity-100"
                                                    : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                                            }`}
                                        />
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </nav>
        </div>
    );
}
