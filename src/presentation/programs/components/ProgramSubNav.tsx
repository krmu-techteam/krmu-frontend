"use client";

import React, { useEffect, useRef, useState } from "react";

const navItems = [
    { label: "Overview", targetId: "about-program" },
    { label: "Why KRMU", targetId: "why-choose" },
    { label: "Specialisations", targetId: "specializations" },
    { label: "Curriculum & Syllabus", targetId: "syllabus" },
    { label: "Lab & Facilities", targetId: "labs-facilities" },
    { label: "Financial Assistance", targetId: "financial-assistance" },
    { label: "FAQs", targetId: "faqs" },
];

export default function ProgramSubNav() {
    const [activeId, setActiveId] = useState<string>("about-program");
    const [isSticky, setIsSticky] = useState<boolean>(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const initialTopRef = useRef<number>(0);

    useEffect(() => {
        const calculateTop = () => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                initialTopRef.current = rect.top + window.scrollY;
            }
        };

        calculateTop();

        const handleScroll = () => {
            const headerHeight =
                window.innerWidth >= 1280
                    ? 124
                    : window.innerWidth >= 640
                      ? 100
                      : 95;
            const currentScroll = window.scrollY;

            if (initialTopRef.current === 0) {
                calculateTop();
            }

            if (
                initialTopRef.current > 0 &&
                currentScroll + headerHeight >= initialTopRef.current
            ) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }

            // Scroll spy logic to highlight current visible section
            const spyThreshold = window.innerWidth >= 1280 ? 210 : 175;
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

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", calculateTop);

        const t1 = setTimeout(calculateTop, 150);
        const t2 = setTimeout(calculateTop, 500);
        const t3 = setTimeout(calculateTop, 1200);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", calculateTop);
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
        };
    }, []);

    const handleItemClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        targetId: string
    ) => {
        e.preventDefault();
        setActiveId(targetId);
        const element = document.getElementById(targetId);
        if (element) {
            const totalStickyHeight =
                window.innerWidth >= 1280
                    ? 192
                    : window.innerWidth >= 640
                      ? 160
                      : 155;
            const y =
                element.getBoundingClientRect().top +
                window.pageYOffset -
                totalStickyHeight +
                5;
            window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
        }
    };

    return (
        <div ref={containerRef} className="w-full min-h-[68px] relative">
            <div
                className={`${
                    isSticky
                        ? "fixed top-[110px] md:top-[115px] xl:top-[124px] left-0 w-full z-[36] bg-[#003560] shadow-lg"
                        : "relative w-full bg-[#003560] shadow-md z-[36]"
                }`}
            >
                <div className="max-w-[1530px] mx-auto min-h-[58px] lg:min-h-[68px] px-4 md:px-8 xl:px-16 flex items-center justify-between overflow-x-auto no-scrollbar py-2">
                    <nav className="flex items-center justify-between w-full min-w-max gap-8 lg:gap-6 xl:gap-8">
                        {navItems.map((item) => {
                            const isActive = activeId === item.targetId;
                            return (
                                <a
                                    key={item.targetId}
                                    href={`#${item.targetId}`}
                                    onClick={(e) =>
                                        handleItemClick(e, item.targetId)
                                    }
                                    className={`relative text-[14px] sm:text-[14px] md:text-[14px] xl:text-[16px] font-normal font-poppins tracking-wide whitespace-nowrap transition-colors duration-200 cursor-pointer py-2 ${
                                        isActive
                                            ? "text-white after:w-full font-medium"
                                            : "text-white/80 hover:text-white after:w-0 hover:after:w-full"
                                    } after:content-[''] after:absolute after:bottom-1 after:left-0 after:h-[2px] after:bg-white after:transition-all after:duration-300`}
                                >
                                    {item.label}
                                </a>
                            );
                        })}
                    </nav>
                </div>
            </div>
        </div>
    );
}
