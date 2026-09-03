"use client";

import React, { useEffect, useRef, useState } from "react";

interface NavItemDef {
    label: string;
    targetIds: string[];
}

const allNavItemDefs: NavItemDef[] = [
    { label: "Overview", targetIds: ["about-program", "overview"] },
    { label: "Why KRMU", targetIds: ["why-choose", "why-krmu"] },
    {
        label: "Specialisations",
        targetIds: ["specializations", "specialization", "specialisations"],
    },
    {
        label: "Curriculum & Syllabus",
        targetIds: ["syllabus", "curriculum", "curriculum-syllabus"],
    },
    {
        label: "Lab & Facilities",
        targetIds: ["labs-facilities", "lab-facilities"],
    },
    {
        label: "Financial Assistance",
        targetIds: ["financial-assistance", "fees-financial-assistance"],
    },
    { label: "FAQs", targetIds: ["faqs", "faq"] },
];

interface ResolvedNavItem {
    label: string;
    targetId: string;
}

export default function ProgramSubNav() {
    const [activeId, setActiveId] = useState<string>("about-program");
    const [isSticky, setIsSticky] = useState<boolean>(false);
    const [visibleNavItems, setVisibleNavItems] = useState<ResolvedNavItem[]>(
        []
    );
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const resolveNavItems = () => {
            const resolved: ResolvedNavItem[] = [];
            for (const item of allNavItemDefs) {
                for (const id of item.targetIds) {
                    if (document.getElementById(id)) {
                        resolved.push({ label: item.label, targetId: id });
                        break;
                    }
                }
            }

            if (resolved.length > 0) {
                setVisibleNavItems(resolved);
            }
        };

        resolveNavItems();
        const t1 = setTimeout(resolveNavItems, 100);
        const t2 = setTimeout(resolveNavItems, 400);

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const headerHeight =
                window.innerWidth >= 1280
                    ? 124
                    : window.innerWidth >= 640
                      ? 115
                      : 110;

            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                if (rect.top <= headerHeight) {
                    setIsSticky(true);
                } else {
                    setIsSticky(false);
                }
            }

            const currentItems =
                visibleNavItems.length > 0
                    ? visibleNavItems
                    : allNavItemDefs
                          .filter(
                              (item) =>
                                  item.label !== "Why KRMU" &&
                                  item.label !== "Specialisations"
                          )
                          .map((item) => ({
                              label: item.label,
                              targetId: item.targetIds[0],
                          }));

            // Scroll spy logic to highlight current visible section
            const spyThreshold = window.innerWidth >= 1280 ? 210 : 175;
            for (let i = currentItems.length - 1; i >= 0; i--) {
                const el = document.getElementById(currentItems[i].targetId);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= spyThreshold) {
                        setActiveId(currentItems[i].targetId);
                        break;
                    }
                }
            }
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, [visibleNavItems]);

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
                    ? 185
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

    const itemsToRender =
        visibleNavItems.length > 0
            ? visibleNavItems
            : allNavItemDefs
                  .filter(
                      (item) =>
                          item.label !== "Why KRMU" &&
                          item.label !== "Specialisations"
                  )
                  .map((item) => ({
                      label: item.label,
                      targetId: item.targetIds[0],
                  }));

    return (
        <div
            ref={containerRef}
            className="w-full min-h-[58px] lg:min-h-[68px] relative"
        >
            <div
                className={`${
                    isSticky
                        ? "fixed top-[110px] md:top-[115px] xl:top-[124px] left-0 w-full z-[36] bg-[#003560]"
                        : "relative w-full bg-[#003560] z-[36]"
                }`}
            >
                <div className="max-w-[1530px] mx-auto min-h-[52px] px-4 md:px-8 xl:px-16 flex items-center justify-between overflow-x-auto no-scrollbar py-2">
                    <nav className="flex items-center justify-between w-full min-w-max gap-8 lg:gap-6 xl:gap-8">
                        {itemsToRender.map((item) => {
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
