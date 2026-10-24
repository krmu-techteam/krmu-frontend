"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { MdPlayArrow } from "react-icons/md";
import {
    Search,
    X,
    GraduationCap,
    Users,
    Briefcase,
    FlaskConical,
    Sparkles,
    Building2,
    BookOpen,
    Compass,
} from "lucide-react";
import HeroSection from "./HeroSection";
import { sitemapData, SitemapSection } from "../constants";

const getSectionIcon = (title: string) => {
    const iconClass = "w-5 h-5 text-white";
    switch (title.toLowerCase()) {
        case "academics":
            return <GraduationCap className={iconClass} />;
        case "admissions":
            return <Users className={iconClass} />;
        case "placements":
            return <Briefcase className={iconClass} />;
        case "research":
            return <FlaskConical className={iconClass} />;
        case "life at krmu":
            return <Sparkles className={iconClass} />;
        case "about us":
            return <Building2 className={iconClass} />;
        case "programmes":
            return <BookOpen className={iconClass} />;
        default:
            return <Compass className={iconClass} />;
    }
};

const getSectionId = (title: string) =>
    title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

const SitemapContentSection = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeId, setActiveId] = useState<string>("academics");
    const [isSticky, setIsSticky] = useState<boolean>(false);
    const [headerHeight, setHeaderHeight] = useState<number>(80);
    const containerRef = useRef<HTMLDivElement>(null);

    // Calculate total links count
    const totalLinks = useMemo(() => {
        return sitemapData.reduce(
            (acc, sec) =>
                acc +
                sec.groups.reduce((gAcc, grp) => gAcc + grp.links.length, 0),
            0
        );
    }, []);

    // Filter sitemap data when search is active
    const filteredSections: SitemapSection[] = useMemo(() => {
        const query = searchQuery.trim().toLowerCase();
        if (!query) return sitemapData;

        return sitemapData
            .map((section) => {
                const sectionMatches = section.title
                    .toLowerCase()
                    .includes(query);

                const filteredGroups = section.groups
                    .map((group) => {
                        const groupMatches = group.title
                            .toLowerCase()
                            .includes(query);

                        const filteredLinks = group.links.filter(
                            (link) =>
                                sectionMatches ||
                                groupMatches ||
                                link.label.toLowerCase().includes(query) ||
                                link.href.toLowerCase().includes(query)
                        );

                        return {
                            ...group,
                            links: filteredLinks,
                        };
                    })
                    .filter((group) => group.links.length > 0);

                return {
                    ...section,
                    groups: filteredGroups,
                };
            })
            .filter((section) => section.groups.length > 0);
    }, [searchQuery]);

    const filteredTotalCount = useMemo(() => {
        return filteredSections.reduce(
            (acc, sec) =>
                acc +
                sec.groups.reduce((gAcc, grp) => gAcc + grp.links.length, 0),
            0
        );
    }, [filteredSections]);

    // Sticky SubNav scroll handler (similar to SchoolSubNav)
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

            // Scroll spy logic
            const spyThreshold = currentHeaderHeight + 90;
            for (let i = sitemapData.length - 1; i >= 0; i--) {
                const id = getSectionId(sitemapData[i].title);
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= spyThreshold) {
                        setActiveId(id);
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

    const scrollToSection = (id: string) => {
        setActiveId(id);
        const scrollToTarget = () => {
            const el = document.getElementById(id);
            if (el) {
                const headerEl = document.querySelector("header");
                const currentHeaderHeight = headerEl
                    ? Math.round(headerEl.getBoundingClientRect().height)
                    : window.innerWidth >= 1280
                      ? 88
                      : 80;
                // If topbar is expanded (scrollY < 40), it will collapse when scrolling down
                const isTopbarExpanded = window.scrollY < 40;
                const effectiveHeaderHeight = isTopbarExpanded
                    ? Math.max(80, currentHeaderHeight - 40)
                    : currentHeaderHeight;

                const subNavH = containerRef.current
                    ? containerRef.current.offsetHeight
                    : 52;
                const totalStickyHeight = effectiveHeaderHeight + subNavH;
                const y =
                    el.getBoundingClientRect().top +
                    window.pageYOffset -
                    totalStickyHeight -
                    16;
                window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
            }
        };

        scrollToTarget();
        setTimeout(scrollToTarget, 150);
        setTimeout(scrollToTarget, 400);
    };

    return (
        <div className="w-full text-white">
            {/* Hero Section with Search Bar */}
            <HeroSection
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />

            {/* Sticky SubNav (SchoolSubNav style) */}
            <div
                ref={containerRef}
                className="w-full min-h-[58px] lg:min-h-[64px] relative"
            >
                <div
                    className={`${
                        isSticky
                            ? "fixed left-0 w-full z-[36] bg-[#025594] shadow-md transition-[top] duration-150"
                            : "relative w-full bg-[#025594] z-[36]"
                    }`}
                    style={isSticky ? { top: `${headerHeight}px` } : undefined}
                >
                    <div className="max-w-7xl mx-auto min-h-[52px] px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-4 overflow-x-auto scrollbar-hide py-2">
                        {/* Category Quick-Jump Items */}
                        <div className="flex items-center gap-6 sm:gap-8 md:gap-10 shrink-0">
                            {sitemapData.map((sec) => {
                                const id = getSectionId(sec.title);
                                const isActive = activeId === id;
                                return (
                                    <button
                                        key={sec.title}
                                        onClick={() => scrollToSection(id)}
                                        className={`relative text-[13px] md:text-[15px] font-normal tracking-wide whitespace-nowrap transition-colors duration-200 cursor-pointer py-[2px] ${
                                            isActive
                                                ? "text-white after:w-full"
                                                : "text-white/80 hover:text-white after:w-0 hover:after:w-full"
                                        } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-white after:transition-all after:duration-300`}
                                    >
                                        {sec.title}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Section (Dark themed without bg-white) */}
            <section className="py-12 md:py-16 bg-transparent text-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Search Result Indicator */}
                    {searchQuery && (
                        <div className="flex items-center justify-between text-sm text-white bg-white/5 border border-white/15 rounded-xl px-4 py-3 mb-8 backdrop-blur-xs">
                            <span>
                                Found{" "}
                                <strong className="text-white font-bold">
                                    {filteredTotalCount}
                                </strong>{" "}
                                links matching &ldquo;{searchQuery}&rdquo;
                            </span>
                            <button
                                onClick={() => setSearchQuery("")}
                                className="text-xs text-white/80 hover:text-white hover:underline font-semibold cursor-pointer"
                            >
                                Clear Search
                            </button>
                        </div>
                    )}

                    {/* Empty State */}
                    {filteredSections.length === 0 && (
                        <div className="text-center py-16 px-4 bg-white/5 rounded-2xl border border-white/15 backdrop-blur-xs shadow-xs">
                            <Search className="w-12 h-12 text-white/40 mx-auto mb-3" />
                            <h3 className="text-lg font-semibold text-white">
                                No links found
                            </h3>
                            <p className="text-white/70 text-sm mt-1 mb-4">
                                We couldn&apos;t find any links matching &ldquo;
                                {searchQuery}&rdquo;.
                            </p>
                            <button
                                onClick={() => setSearchQuery("")}
                                className="inline-flex items-center px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-medium transition-colors cursor-pointer"
                            >
                                Reset Search
                            </button>
                        </div>
                    )}

                    {/* Sitemap Sections */}
                    <div className="space-y-8 md:space-y-10">
                        {filteredSections.map((section) => {
                            const sectionId = getSectionId(section.title);
                            const sectionLinkCount = section.groups.reduce(
                                (acc, g) => acc + g.links.length,
                                0
                            );

                            return (
                                <div
                                    id={sectionId}
                                    key={section.title}
                                    className="overflow-hidden rounded-2xl border-2 border-[#025594] scroll-mt-36"
                                >
                                    {/* Section Header */}
                                    <div className="bg-transparent px-6 py-4 md:px-8 md:py-3.5 flex items-center justify-between border-b border-white/10">
                                        <div className="flex items-center gap-3">
                                            <div className="p-[6px] rounded-xl border-2 border-[#025594]">
                                                {getSectionIcon(section.title)}
                                            </div>
                                            <h2 className="text-xl md:text-2xl font-bold font-serif text-white tracking-wide">
                                                {section.title}
                                            </h2>
                                        </div>

                                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-transparent text-white border-2 border-[#025594] shrink-0">
                                            {sectionLinkCount}{" "}
                                            {sectionLinkCount === 1
                                                ? "Link"
                                                : "Links"}
                                        </span>
                                    </div>

                                    {/* Groups (Masonry 2-column Layout) */}
                                    <div className="columns-1 gap-8 p-6 md:columns-2">
                                        {section.groups.map(
                                            (group, groupIdx) => (
                                                <div
                                                    key={
                                                        group.title ||
                                                        `group-${groupIdx}`
                                                    }
                                                    className="mb-8 break-inside-avoid rounded-lg"
                                                >
                                                    {group.title ? (
                                                        <h3 className="mb-5 font-serif border-b border-white/10 pb-3 text-xl md:text-2xl font-semibold text-white tracking-wide">
                                                            {group.title}
                                                        </h3>
                                                    ) : null}

                                                    <ul className="space-y-3">
                                                        {group.links.map(
                                                            (link, linkIdx) => (
                                                                <li
                                                                    key={`${link.label}-${linkIdx}`}
                                                                >
                                                                    <Link
                                                                        href={
                                                                            link.href
                                                                        }
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="group flex items-start gap-3 text-white/75 transition-colors hover:text-white"
                                                                    >
                                                                        <MdPlayArrow className="mt-1 h-4 w-4 flex-shrink-0 text-white/50 transition-all duration-150 group-hover:translate-x-0.5 group-hover:text-white" />
                                                                        <span className="leading-6">
                                                                            {
                                                                                link.label
                                                                            }
                                                                        </span>
                                                                    </Link>
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Bottom Footer Note */}
                    <div className="mt-12 text-center text-xs md:text-sm text-white/60">
                        Showing {filteredTotalCount} of {totalLinks} total
                        directory links across K.R. Mangalam University.
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SitemapContentSection;
