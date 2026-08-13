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
}

export default function ProgrammesList({
  programmes,
  isLoading = false,
  onLoadMore,
  showLoadMore,
  onProgrammeClick,
  viewMode = "list",
  schoolOnly = false,
}: ProgrammesListProps) {
  return (
    <div className="flex-1 w-full min-w-0 overflow-hidden relative px-6 md:px-8 lg:px-0 xl:px-0">
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
            ),
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
        ) : (
          <div className="col-span-full py-20 text-center border border-white/5 bg-white/2 rounded-sm">
            <p className="text-white/40 font-light">No programme found</p>
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
      <p className="text-right text-xs md:text-sm mt-4 text-white/40 font-light">
        ** Subject to Approval
      </p>
    </div>
  );
}
