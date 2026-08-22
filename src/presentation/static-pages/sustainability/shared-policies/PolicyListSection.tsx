"use client";

import React, { useState, useEffect } from "react";
import { Download, Search, X, FileText } from "lucide-react";
import { BsFileEarmarkPdfFill } from "react-icons/bs";
import { Button } from "@/components/common/Button";
import { PolicyItem } from "./types";

interface PolicyListSectionProps {
    policies: PolicyItem[];
    title?: string;
}

export const PolicyListSection: React.FC<PolicyListSectionProps> = ({
    policies,
    title,
}) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [isSearching, setIsSearching] = useState(false);

    const filteredPolicies = policies.filter((policy) =>
        policy.title.toLowerCase().includes(searchQuery.toLowerCase().trim())
    );

    useEffect(() => {
        if (searchQuery.trim() !== "") {
            setIsSearching(true);
            const timer = setTimeout(() => {
                setIsSearching(false);
            }, 250);
            return () => clearTimeout(timer);
        } else {
            setIsSearching(false);
        }
    }, [searchQuery]);

    const skeletonCount =
        filteredPolicies.length > 0 ? filteredPolicies.length : 3;

    return (
        <section className="w-full text-white py-6 sm:py-8 md:py-10">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">
                {/* Section Heading only if explicitly provided */}
                {title && (
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight font-poppins mb-8 pb-4 border-b border-white/10">
                        {title}
                    </h2>
                )}

                {/* Search Input Bar & Documents Count Badge */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-6">
                    {/* Search Input */}
                    <div className="relative flex-1 w-full sm:max-w-md">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50 pointer-events-none" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search documents..."
                            className="w-full pl-10 pr-9 py-2.5 bg-transparent border border-white/15 focus:border-white/40 rounded-[4px] text-sm text-white placeholder-white/40 outline-none transition-all duration-200"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery("")}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
                                title="Clear search"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        )}
                    </div>

                    {/* Documents Count Badge (Hidden on mobile/tablet, visible on md and up) */}
                    <div className="hidden md:flex items-center font-poppins gap-2 self-start md:self-auto text-xs sm:text-sm text-white/70 px-3.5 py-2 border border-white/10 rounded-[4px] bg-transparent">
                        <FileText className="w-4 h-4 text-[#80C6FF]" />
                        <span>
                            Total Documents:{" "}
                            <strong className="text-white font-semibold">
                                {filteredPolicies.length}
                            </strong>
                            {searchQuery &&
                                ` (filtered from ${policies.length})`}
                        </span>
                    </div>
                </div>

                {/* Dynamic Skeleton Loader state during search */}
                {isSearching ? (
                    <div className="flex flex-col gap-4">
                        {Array.from({ length: skeletonCount }).map(
                            (_, index) => (
                                <div
                                    key={`skeleton-${index}`}
                                    className="flex flex-col md:flex-row items-start md:items-center justify-between p-3 border border-white/10 rounded-[4px] bg-white/[0.02] animate-pulse gap-4"
                                >
                                    <div className="flex items-start md:items-center gap-3.5 sm:gap-4 flex-1 pr-4 w-full">
                                        <div className="w-10 h-10 rounded-[4px] bg-white/10 shrink-0" />
                                        <div
                                            className="h-4 bg-white/10 rounded-[3px] w-full mt-1 md:mt-0"
                                            style={{
                                                maxWidth: `${Math.max(40, 85 - index * 10)}%`,
                                            }}
                                        />
                                    </div>
                                    <div className="w-24 h-[38px] bg-white/10 rounded-[3px] shrink-0 self-end md:self-auto" />
                                </div>
                            )
                        )}
                    </div>
                ) : filteredPolicies.length > 0 ? (
                    /* Policy Links List */
                    <div className="flex flex-col gap-4">
                        {filteredPolicies.map((policy) => {
                            return (
                                <div
                                    key={policy.id}
                                    className="group flex flex-col md:flex-row items-start md:items-center justify-between p-3 border border-white/15 hover:border-white/35 rounded-[4px] bg-transparent hover:bg-white/[0.03] transition-all duration-300 shadow-sm gap-3.5 md:gap-6"
                                >
                                    {/* Left / Main Section: Glowing Icon & Title (Side-by-side) */}
                                    <div className="flex items-start md:items-center gap-3.5 sm:gap-4 pr-0 md:pr-4 w-full md:w-auto">
                                        {/* Glowing PDF Red Icon */}
                                        <div className="shrink-0 p-2.5 rounded-[4px] bg-linear-to-br from-[#E5243B]/20 to-[#E5243B]/5 border border-[#E5243B]/30 shadow-[0_0_12px_rgba(229,36,59,0.2)] group-hover:shadow-[0_0_18px_rgba(229,36,59,0.4)] transition-all duration-300">
                                            <BsFileEarmarkPdfFill className="w-6 h-6 sm:w-7 sm:h-7 text-[#E5243B] group-hover:scale-105 transition-transform duration-300" />
                                        </div>
                                        {/* Title */}
                                        <span className="text-sm sm:text-[15px] xl:text-[16px] font-medium text-white/90 group-hover:text-white font-poppins leading-snug pt-0.5 md:pt-0">
                                            {policy.title}
                                        </span>
                                    </div>

                                    {/* Bottom Right on Mobile & Tablet (`self-end`) / Standard Right on Desktop (`md:self-auto`) */}
                                    <div className="shrink-0 self-end md:self-auto">
                                        <Button
                                            href={policy.url}
                                            variant="outline"
                                            icon={Download}
                                            iconPosition="left"
                                            target="_blank"
                                            className="h-[38px] px-4 text-[13px] border-white/20 hover:border-white/50 text-white hover:bg-white/10 whitespace-nowrap !border-white/20"
                                        >
                                            Download
                                        </Button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    /* Empty Search Results State */
                    <div className="flex flex-col items-center justify-center py-12 px-4 border border-dashed border-white/15 rounded-[4px] text-center bg-white/[0.02]">
                        <Search className="w-10 h-10 text-white/30 mb-3" />
                        <p className="text-base text-white/80 font-medium mb-1 font-poppins">
                            No documents found
                        </p>
                        <p className="text-sm text-white/50 mb-4 max-w-sm font-poppins">
                            No results matching &quot;{searchQuery}&quot;. Try
                            checking for spelling errors or searching another
                            keyword.
                        </p>
                        <button
                            onClick={() => setSearchQuery("")}
                            className="text-xs sm:text-sm text-[#80C6FF] hover:underline font-medium"
                        >
                            Clear search filter
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default PolicyListSection;
