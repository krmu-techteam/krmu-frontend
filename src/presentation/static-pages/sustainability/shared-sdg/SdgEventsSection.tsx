"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { SdgEventItem } from "./types";

export interface SdgEventsSectionProps {
  title?: string;
  events?: SdgEventItem[];
  initialCount?: number;
  batchSize?: number;
}

export const SdgEventsSection: React.FC<SdgEventsSectionProps> = ({
  title = "Events And Activities",
  events = [],
  initialCount = 12,
  batchSize = 8,
}) => {
  const [visibleCount, setVisibleCount] = useState<number>(initialCount);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const observerTarget = useRef<HTMLDivElement>(null);

  const hasMore = visibleCount < events.length;

  useEffect(() => {
    if (!hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoadingMore) {
          setIsLoadingMore(true);
          setTimeout(() => {
            setVisibleCount((prev) =>
              Math.min(prev + batchSize, events.length),
            );
            setIsLoadingMore(false);
          }, 350);
        }
      },
      { threshold: 0.1, rootMargin: "150px" },
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
  }, [hasMore, batchSize, events.length, isLoadingMore]);

  if (!events || events.length === 0) return null;

  const displayedEvents = events.slice(0, visibleCount);

  return (
    <section className="w-full text-white pt-8 sm:pt-12 ">
      <div className="max-w-[1440px] mx-auto space-y-8 sm:space-y-8 px-4 sm:px-6 md:px-10">
        {/* Header Title */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-semibold md:text-[28px] font-serif text-white tracking-tight">
            {title}
          </h2>
          <span className="text-xs sm:text-sm text-gray-400 font-poppins">
            Showing {displayedEvents.length} of {events.length} Events
          </span>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedEvents.map((item) => (
            <a
              key={item.id}
              href={item.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-full h-[329px] overflow-hidden p-[4px] transition-all duration-300 ease-out cursor-pointer hover:shadow-xl hover:shadow-[#173452]/50 flex flex-col justify-between"
              style={{
                border: "1px solid",
                borderImageSource:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #173452 100%)",
                borderImageSlice: 1,
                background:
                  "linear-gradient(180deg, #061623 0%, rgba(24, 52, 83, 0) 100%)",
              }}
            >
              {/* Image Box */}
              <div className="relative w-full h-[245px] overflow-hidden bg-[#0a1824] shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
                />
              </div>

              {/* Title Bar */}
              <div className="px-2.5 py-2 flex items-center grow min-h-[58px]">
                <h3 className="text-[16px] sm:text-[17px] font-serif font-medium text-[#E7C268] group-hover:text-white transition-colors duration-300 leading-snug line-clamp-2">
                  {item.title}
                </h3>
              </div>
            </a>
          ))}

          {/* Skeleton Loaders rendered ONLY during active scroll loading */}
          {isLoadingMore &&
            Array.from({ length: 4 }).map((_, idx) => (
              <div
                key={`skeleton-${idx}`}
                className="block w-full h-[329px] overflow-hidden p-[4px] flex flex-col justify-between animate-pulse"
                style={{
                  border: "1px solid #173452",
                  background:
                    "linear-gradient(180deg, #061623 0%, rgba(24, 52, 83, 0.4) 100%)",
                }}
              >
                {/* Skeleton Image Box */}
                <div className="w-full h-[245px] bg-[#0d2235] shrink-0 animate-pulse relative overflow-hidden">
                  <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>

                {/* Skeleton Title Lines */}
                <div className="px-2.5 py-2 flex flex-col gap-2 justify-center shrink-0 min-h-[58px]">
                  <div className="h-3.5 bg-[#173452] w-5/6 rounded animate-pulse" />
                  <div className="h-3 bg-[#173452]/60 w-4/6 rounded animate-pulse" />
                </div>
              </div>
            ))}
        </div>

        {/* Observer Target */}
        {hasMore && <div ref={observerTarget} className="h-4 w-full" />}
      </div>
    </section>
  );
};
