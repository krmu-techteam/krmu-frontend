import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export function NewsEventsSkeleton() {
    return (
        <section className="relative w-full overflow-hidden py-12 md:py-16 xl:py-20 font-poppins">
            <div className="w-full max-w-[1530px] mx-auto relative z-10">
                {/* Header: Centered Title + Top-Right Link Skeleton */}
                <div className="relative flex items-center justify-center mb-10 md:mb-14">
                    <Skeleton className="h-10 md:h-12 w-64 md:w-80 bg-white/10 rounded-md" />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-2.5">
                        <Skeleton className="h-5 w-24 bg-white/10 rounded" />
                        <Skeleton className="w-6 h-6 rounded-full bg-white/10" />
                    </div>
                </div>

                {/* 3-Column Magazine Grid Skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 xl:gap-10 items-start">
                    {/* LEFT COLUMN: Scrollable Feed of Cards Skeleton */}
                    <div className="md:col-span-1 lg:col-span-3 order-2 lg:order-1">
                        <div className="max-h-[500px] lg:max-h-[540px] xl:max-h-[560px] overflow-hidden flex flex-col gap-3.5 pr-2">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="flex flex-col">
                                    <div className="flex items-center gap-3.5 sm:gap-4 py-1">
                                        <Skeleton className="w-[90px] h-[100px] sm:w-[96px] sm:h-[108px] shrink-0 rounded-[4px] bg-white/10" />
                                        <div className="flex-1 min-w-0 flex flex-col justify-center gap-2">
                                            <Skeleton className="h-3 w-20 bg-white/10 rounded" />
                                            <Skeleton className="h-4 w-full bg-white/10 rounded" />
                                            <Skeleton className="h-4 w-3/4 bg-white/10 rounded" />
                                            <Skeleton className="h-3 w-28 bg-white/5 rounded mt-1" />
                                        </div>
                                    </div>
                                    {i < 4 && (
                                        <div className="w-full h-[1px] bg-white/10 my-2.5" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CENTER COLUMN: Slider Card Skeleton */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-6 flex flex-col order-1 lg:order-2">
                        {/* Slide Image Box */}
                        <div className="relative aspect-[16/10] w-full rounded-[8px] overflow-hidden bg-white/10 shadow-xl">
                            <Skeleton className="w-full h-full bg-white/10" />
                            {/* Overlay Arrows */}
                            <Skeleton className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-[2px] bg-[#CB000D]/50" />
                            <Skeleton className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-[2px] bg-[#CB000D]/50" />
                        </div>

                        {/* Slide Metadata & Title */}
                        <div className="mt-4 sm:mt-5 min-h-[85px] flex flex-col justify-start gap-2.5">
                            <Skeleton className="h-3.5 w-36 bg-white/10 rounded" />
                            <Skeleton className="h-7 sm:h-8 w-11/12 bg-white/10 rounded" />
                            <Skeleton className="h-7 sm:h-8 w-2/3 bg-white/10 rounded" />
                        </div>

                        {/* 5 Pagination Dots */}
                        <div className="flex items-center gap-2 mt-3">
                            <Skeleton className="w-3.5 h-2 rounded-full bg-[#CB000D]/70" />
                            {[1, 2, 3, 4].map((dot) => (
                                <Skeleton
                                    key={dot}
                                    className="w-2 h-2 rounded-full bg-white/20"
                                />
                            ))}
                        </div>
                    </div>

                    {/* RIGHT COLUMN: 2 Stacked Cards Skeleton */}
                    <div className="md:col-span-1 lg:col-span-3 flex flex-col gap-5 sm:gap-6 justify-between h-full order-3">
                        {[1, 2].map((card) => (
                            <div
                                key={card}
                                className="bg-white/5 rounded-[8px] overflow-hidden flex flex-col shadow-lg border border-white/5"
                            >
                                <Skeleton className="relative aspect-[16/9] w-full bg-white/10" />
                                <div className="p-4 sm:p-5 flex flex-col gap-2.5 bg-white/[0.03]">
                                    <Skeleton className="h-3 w-28 bg-white/10 rounded" />
                                    <Skeleton className="h-4 w-full bg-white/10 rounded" />
                                    <Skeleton className="h-4 w-4/5 bg-white/10 rounded" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
