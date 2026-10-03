"use client";

import React from "react";
import ProgrammeCard, { ProgrammeCardData } from "./ProgrammeCard";
import { Skeleton } from "@/components/ui/skeleton";

export interface SidebarDegree {
    id: string | number;
    name: string;
    slug: string;
}

interface ProgrammesListProps {
    programmes: ProgrammeCardData[];
    isLoading?: boolean;
    onLoadMore: () => void;
    showLoadMore: boolean;
    onProgrammeClick: (programId: number | string) => void;
    viewMode?: "list" | "grid";
    // Kept for prop compatibility though not used directly here anymore
    activeDegreeSlug?: string;
    onDegreeChange?: (slug: string) => void;
    degreesList?: SidebarDegree[];
    searchQuery?: string;
    onSearchChange?: (query: string) => void;
    schoolOnly?: boolean;
    onClearFilters?: () => void;
    onSearchAllSchools?: () => void;
    activeSchoolName?: string;
    isSchoolFiltered?: boolean;
}

export default function ProgrammesList({
    programmes,
    isLoading = false,
    onLoadMore,
    showLoadMore,
    onProgrammeClick,
    viewMode = "list",
    schoolOnly = false,
    searchQuery = "",
    onClearFilters,
    onSearchAllSchools,
    activeSchoolName,
    isSchoolFiltered = false,
}: ProgrammesListProps) {
    return (
        <div className="flex-1 w-full min-w-0 overflow-hidden relative px-0 md:px-0 lg:px-0 xl:px-0">
            {/* List Content */}
            <div
                className={
                    viewMode === "list"
                        ? "flex flex-col gap-4"
                        : `grid grid-cols-1 md:grid-cols-2 ${schoolOnly ? "xl:grid-cols-4" : "xl:grid-cols-3"} gap-5`
                }
            >
                {isLoading ? (
                    Array.from({ length: viewMode === "list" ? 4 : 6 }).map(
                        (_, index) => (
                            <div
                                key={index}
                                className={`flex flex-col gap-4 border border-white/10 rounded-[4px] p-5 md:p-6 ${viewMode === "list" ? "h-[160px]" : "h-[240px]"}`}
                            >
                                <div className="flex justify-between items-start">
                                    <div className="space-y-3 w-full">
                                        <Skeleton className="h-6 w-3/4 bg-white/5" />
                                        <Skeleton className="h-4 w-1/2 bg-white/5" />
                                    </div>
                                </div>
                                <div
                                    className={`flex gap-3 mt-auto ${viewMode === "list" ? "justify-end w-full" : "w-full"}`}
                                >
                                    <Skeleton
                                        className={`h-9 bg-white/5 ${viewMode === "list" ? "w-32" : "flex-1"}`}
                                    />
                                    <Skeleton
                                        className={`h-9 bg-white/5 ${viewMode === "list" ? "w-32" : "flex-1"}`}
                                    />
                                </div>
                            </div>
                        )
                    )
                ) : programmes.length > 0 ? (
                    programmes.map((program, index) => (
                        <ProgrammeCard
                            key={program.id}
                            program={program}
                            viewMode={viewMode}
                            index={index}
                            totalCards={programmes.length}
                            cardsPerRow={schoolOnly ? 4 : 3}
                            onFeeClick={() => onProgrammeClick(program.id)}
                        />
                    ))
                ) : searchQuery && isSchoolFiltered && onSearchAllSchools ? (
                    <div className="col-span-full py-16 px-4 text-center border border-white/5 bg-white/[0.02] rounded-md flex flex-col items-center justify-center">
                        <h3 className="text-lg md:text-xl font-medium text-white mb-2">
                            No programmes matching &quot;{searchQuery}&quot;
                            found in {activeSchoolName || "this school"}
                        </h3>
                        <p className="text-white/60 text-sm max-w-md mb-6 font-light">
                            This programme might be offered under a different
                            school at K.R. Mangalam University.
                        </p>
                        <div className="flex flex-wrap gap-3 justify-center">
                            <button
                                onClick={onSearchAllSchools}
                                className="px-5 py-2.5 bg-[#0161B0] hover:bg-[#014f8f] text-white text-sm font-medium rounded transition-all cursor-pointer shadow-md"
                            >
                                Search in All Schools
                            </button>
                            {onClearFilters && (
                                <button
                                    onClick={onClearFilters}
                                    className="px-5 py-2.5 bg-white/10 hover:bg-white/15 text-white/80 hover:text-white text-sm font-medium rounded transition-all cursor-pointer border border-white/10"
                                >
                                    Clear all filters
                                </button>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="col-span-full py-16 px-4 text-center border border-white/5 bg-white/[0.02] rounded-md flex flex-col items-center justify-center">
                        <h3 className="text-lg md:text-xl font-medium text-white mb-2">
                            {searchQuery
                                ? `No programmes match your search "${searchQuery}"`
                                : "No programmes match the selected filters"}
                        </h3>
                        <p className="text-white/60 text-sm max-w-md mb-6 font-light">
                            Try checking for spelling errors, trying broader
                            keywords (e.g. &quot;B.Tech&quot;, &quot;MBA&quot;,
                            &quot;Law&quot;), or clearing filters.
                        </p>
                        {onClearFilters && (
                            <button
                                onClick={onClearFilters}
                                className="px-5 py-2.5 bg-[#0161B0] hover:bg-[#014f8f] text-white text-sm font-medium rounded transition-all cursor-pointer shadow-md"
                            >
                                Clear all filters
                            </button>
                        )}
                    </div>
                )}
            </div>

            {showLoadMore && (
                <div className="pt-8 flex items-center justify-center">
                    <button
                        onClick={onLoadMore}
                        className="text-white flex justify-center items-center px-6 py-2.5 rounded-sm gap-3 font-semibold bg-[#034272] hover:bg-[#023359] transition-colors cursor-pointer shadow-lg"
                    >
                        <span>View All Programmes</span>
                    </button>
                </div>
            )}
            {/* <p className="text-right text-xs md:text-sm mt-4 text-white/40 font-light">
        ** Subject to Approval
      </p> */}
        </div>
    );
}
