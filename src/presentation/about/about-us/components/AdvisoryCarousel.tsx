"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { AdvisoryCardSkeleton } from "./AdvisoryCardSkeleton";
import { DEANS } from "../constants/about.constants";

const ITEMS_PER_LOAD = 5;

const AdvisoryCarousel = () => {
    const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);
    const [isLoading, setIsLoading] = useState(false);
    const observerTarget = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (
                    entries[0].isIntersecting &&
                    visibleCount < DEANS.length &&
                    !isLoading
                ) {
                    setIsLoading(true);
                    setTimeout(() => {
                        setVisibleCount((prev) => prev + ITEMS_PER_LOAD);
                        setIsLoading(false);
                    }, 400);
                }
            },
            { threshold: 0.1 }
        );

        const currentTarget = observerTarget.current;
        if (currentTarget) {
            observer.observe(currentTarget);
        }

        return () => {
            if (currentTarget) {
                observer.unobserve(currentTarget);
            }
        };
    }, [visibleCount, isLoading]);

    const remainingCount = DEANS.length - visibleCount;
    const skeletonCount = Math.min(remainingCount, ITEMS_PER_LOAD);

    return (
        <div className="space-y-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {DEANS.slice(0, visibleCount).map((dean, index) => (
                    <div
                        key={index}
                        className={`group relative flex-col bg-[#061623] hover:border-[#007DE3] transition-all duration-300 h-full overflow-hidden p-3 sm:p-4 w-full max-w-[280px] sm:max-w-none mx-auto ${
                            (index + 1) % 5 === 0 ? "hidden xl:flex" : "flex"
                        }`}
                    >
                        {/* Person Image */}
                        <div className="w-full h-[220px] sm:h-[250px] relative overflow-hidden rounded-[12px] mb-3 bg-[#04101A]/50 flex items-center justify-center">
                            <Image
                                src={dean.img}
                                alt={dean.name}
                                fill
                                className="object-fill sm:object-cover object-top group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                        {/* Text Content */}
                        <div className="px-1 pb-1 flex flex-col flex-grow text-left">
                            <h5
                                className="text-[18px] sm:text-[20px] font-serif font-semibold text-white leading-tight mb-3"
                                title={dean.name}
                            >
                                {dean.name}
                            </h5>
                            <p
                                className="text-[13px] sm:text-[14px] font-poppins line-clamp-4 text-white/90 font-normal leading-[1.4] mb-2"
                                title={dean.role}
                            >
                                {dean.role}
                            </p>
                            {dean.desg && (
                                <p
                                    className="text-[13px] font-poppins sm:text-[14px] text-[#4DAFFF] font-semibold leading-snug mt-auto"
                                    title={dean.desg}
                                >
                                    {dean.desg}
                                </p>
                            )}
                        </div>
                    </div>
                ))}

                {/* Skeleton cards shown during loading */}
                {isLoading &&
                    Array.from({ length: skeletonCount }).map((_, index) => (
                        <AdvisoryCardSkeleton key={`skeleton-${index}`} />
                    ))}
            </div>

            {/* Sentinel element for infinite scroll */}
            {visibleCount < DEANS.length && (
                <div
                    ref={observerTarget}
                    className="h-10 w-full flex justify-center items-center"
                >
                    {isLoading && (
                        <span className="w-6 h-6 border-2 border-[#4DAFFF] border-t-transparent rounded-full animate-spin" />
                    )}
                </div>
            )}
        </div>
    );
};

export default AdvisoryCarousel;
