"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { MdPlayArrow } from "react-icons/md";
import {
    Search,
    X,
    ArrowUpRight,
    GraduationCap,
    Users,
    Briefcase,
    FlaskConical,
    Sparkles,
    Building2,
    BookOpen,
    Compass,
} from "lucide-react";
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

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            const yOffset = -90;
            const y =
                el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    return (
        <section className="py-12 md:py-16 text-[#061623]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Search & Category Navigation Bar */}
                <div className="mb-10 space-y-4">
                    {/* Search Bar */}
                    <div className="relative max-w-xl mx-auto md:mx-0">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#061623] pointer-events-none" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search sitemap links (e.g., B.Tech, MBA, Admission, Hostel)..."
                            className="w-full pl-12 pr-10 py-3.5 bg-white border border-[#061623]/30 rounded-xl text-sm md:text-base text-[#061623] placeholder-slate-400 focus:outline-none focus:border-[#061623] focus:ring-2 focus:ring-[#061623]/20 shadow-xs transition-all"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery("")}
                                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#061623] p-1 rounded-full hover:bg-slate-100"
                                aria-label="Clear search"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        )}
                    </div>

                    {/* Category Quick-Jump Chips (only when not searching) */}
                    {!searchQuery && (
                        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide pt-1">
                            <span className="text-xs uppercase font-bold text-[#061623]/80 tracking-wider shrink-0 pr-1">
                                Jump to:
                            </span>
                            {sitemapData.map((sec) => {
                                const id = getSectionId(sec.title);
                                return (
                                    <button
                                        key={sec.title}
                                        onClick={() => scrollToSection(id)}
                                        className="shrink-0 px-4 py-1.5 rounded-full text-xs md:text-sm font-medium bg-white text-[#061623] hover:bg-[#061623] hover:text-white border border-[#061623]/30 hover:border-[#061623] shadow-2xs transition-all duration-150 active:scale-95"
                                    >
                                        {sec.title}
                                    </button>
                                );
                            })}
                        </div>
                    )}

                    {/* Search Result Indicator */}
                    {searchQuery && (
                        <div className="flex items-center justify-between text-sm text-[#061623] bg-white border border-[#061623]/30 rounded-xl px-4 py-2.5 shadow-2xs">
                            <span>
                                Found{" "}
                                <strong className="text-[#061623] font-bold">
                                    {filteredTotalCount}
                                </strong>{" "}
                                links matching &ldquo;{searchQuery}&rdquo;
                            </span>
                            <button
                                onClick={() => setSearchQuery("")}
                                className="text-xs text-[#061623] hover:underline font-semibold"
                            >
                                Clear Search
                            </button>
                        </div>
                    )}
                </div>

                {/* Empty State */}
                {filteredSections.length === 0 && (
                    <div className="text-center py-16 px-4 bg-white rounded-2xl border border-[#061623]/30 shadow-xs">
                        <Search className="w-12 h-12 text-[#061623]/50 mx-auto mb-3" />
                        <h3 className="text-lg font-semibold text-[#061623]">
                            No links found
                        </h3>
                        <p className="text-slate-600 text-sm mt-1 mb-4">
                            We couldn&apos;t find any links matching &ldquo;
                            {searchQuery}&rdquo;.
                        </p>
                        <button
                            onClick={() => setSearchQuery("")}
                            className="inline-flex items-center px-5 py-2 rounded-xl bg-[#061623] hover:bg-[#061623]/85 text-white text-sm font-medium shadow-xs transition-colors"
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
                                className="overflow-hidden rounded-2xl border border-[#061623]/25 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 scroll-mt-28"
                            >
                                {/* Section Header */}
                                <div className="bg-[#061623] px-6 py-4 md:px-8 md:py-3 flex items-center justify-between border-b border-[#061623]">
                                    <div className="flex items-center gap-3">
                                        <div className="p-[6px] rounded-xl bg-white/10 border border-white/20">
                                            {getSectionIcon(section.title)}
                                        </div>
                                        <h2 className="text-xl md:text-2xl  font-bold font-serif text-white tracking-wide">
                                            {section.title}
                                        </h2>
                                    </div>

                                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/15 text-white border border-white/20 shrink-0">
                                        {sectionLinkCount}{" "}
                                        {sectionLinkCount === 1
                                            ? "Link"
                                            : "Links"}
                                    </span>
                                </div>

                                {/* Groups (Masonry 2-column Layout) */}
                                <div className="columns-1 gap-8 p-6 md:columns-2">
                                    {section.groups.map((group, groupIdx) => (
                                        <div
                                            key={
                                                group.title ||
                                                `group-${groupIdx}`
                                            }
                                            className="mb-8 break-inside-avoid rounded-lg"
                                        >
                                            {group.title ? (
                                                <h3 className="mb-5 border-b border-gray-200 pb-3 text-2xl font-semibold text-[#061623]">
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
                                                                href={link.href}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="group flex items-start gap-3 text-gray-700 transition hover:text-[#061623]"
                                                            >
                                                                <MdPlayArrow className="mt-1 h-4 w-4 flex-shrink-0 text-[#061623] transition-transform duration-150 group-hover:translate-x-0.5" />
                                                                <span className="leading-6">
                                                                    {link.label}
                                                                </span>
                                                            </Link>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom Footer Note */}
                <div className="mt-12 text-center text-xs md:text-sm text-[#061623]/70">
                    Showing {filteredTotalCount} of {totalLinks} total directory
                    links across K.R. Mangalam University.
                </div>
            </div>
        </section>
    );
};

export default SitemapContentSection;
