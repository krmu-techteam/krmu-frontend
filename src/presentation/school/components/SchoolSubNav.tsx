"use client";

import React, { useEffect, useRef, useState } from "react";

export const SCHOOL_CODE_MAP: Record<string, string> = {
    "school-of-engineering-and-technology": "SOET",
    "school-of-engineering-technology": "SOET",
    "school-of-physiotherapy-and-rehabilitation-sciences": "SPRS",
    "school-of-management-and-commerce": "SOMC",
    "school-of-management-commerce": "SOMC",
    "school-of-legal-studies": "SOLS",
    "school-of-medical-and-allied-sciences": "SMAS",
    "school-of-medical-allied-sciences": "SMAS",
    "school-of-liberal-arts": "SOLA",
    "school-of-architecture-design": "SOAD",
    "school-of-basic-and-applied-sciences": "SBAS",
    "school-of-emerging-media-and-creator-economy": "SEMCE",
    "school-of-journalism-and-mass-communication": "SEMCE",
    "school-of-hotel-management-and-catering-technology": "SOHMCT",
    "school-of-hotel-management-catering-technology": "SOHMCT",
    "school-of-education": "SOED",
    "school-of-agriculutural-sciences": "SOAS",
    "school-of-agricultural-sciences": "SOAS",
};

interface SchoolSubNavProps {
    slug: string;
}

export default function SchoolSubNav({ slug }: SchoolSubNavProps) {
    const cleanSlug = decodeURIComponent(slug || "")
        .trim()
        .toLowerCase()
        .replace(/\/$/, "");
    const schoolCode = SCHOOL_CODE_MAP[cleanSlug] || "SOET";

    const navItems = [
        { label: "Overview", targetId: "overview" },
        { label: "Programmes", targetId: "programmes" },
        { label: "Why KRMU", targetId: "advantage" },
        { label: "Knowledge Partners", targetId: "knowledge-partners" },
        { label: "Testimonials", targetId: "testimonials" },
        { label: "Faculty", targetId: "faculty" },
        { label: "Event List", targetId: "events" },
    ];

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

    const handleItemClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        targetId: string
    ) => {
        e.preventDefault();
        setActiveId(targetId);
        const element = document.getElementById(targetId);
        if (element) {
            const subNavH = containerRef.current
                ? containerRef.current.offsetHeight
                : 55;
            const totalStickyHeight = headerHeight + subNavH;
            const y =
                element.getBoundingClientRect().top +
                window.pageYOffset -
                totalStickyHeight +
                5;
            window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
        }
    };

    return (
        <div
            ref={containerRef}
            className="w-full min-h-[58px] lg:min-h-[68px] relative"
        >
            <div
                className={`${
                    isSticky
                        ? "fixed left-0 w-full z-[36] bg-[#003560] shadow-md transition-[top] duration-150"
                        : "relative w-full bg-[#003560] z-[36]"
                }`}
                style={isSticky ? { top: `${headerHeight}px` } : undefined}
            >
                <div className="max-w-[1530px] mx-auto min-h-[52px] px-4 md:px-8 xl:px-16 flex items-center justify-between overflow-x-auto no-scrollbar py-2">
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
                                    className={`relative text-[14px] sm:text-[14px] md:text-[14px] xl:text-[16px] font-normal font-poppins tracking-wide whitespace-nowrap transition-colors duration-200 cursor-pointer py-[1px] ${
                                        isActive
                                            ? "text-white after:w-full"
                                            : "text-white/80 hover:text-white after:w-0 hover:after:w-full"
                                    } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-white after:transition-all after:duration-300`}
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
