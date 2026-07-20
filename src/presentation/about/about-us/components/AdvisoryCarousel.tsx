"use client";

import { useState } from "react";
import Image from "next/image";
import { AdvisoryCardSkeleton } from "./AdvisoryCardSkeleton";
import { DEANS } from "../constants/about.constants";

const ITEMS_PER_LOAD = 5;

const AdvisoryCarousel = () => {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + ITEMS_PER_LOAD);
      setIsLoading(false);
    }, 600);
  };

  const remainingCount = DEANS.length - visibleCount;
  const skeletonCount = Math.min(remainingCount, ITEMS_PER_LOAD);

  return (
    <div className="space-y-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {DEANS.slice(0, visibleCount).map((dean, index) => (
          <div
            key={index}
            className={`group relative flex-col bg-[#061623] border-[1px] border-transparent hover:border-[#007DE3] transition-all duration-300 h-full overflow-hidden ${
              (index + 1) % 5 === 0 ? "hidden xl:flex" : "flex"
            }`}
          >
            {/* Person Image */}
            <div className="w-full h-[240px] sm:h-[260px] p-4">
              <div className="w-full h-full relative overflow-hidden rounded-[4px]">
                <Image
                  src={dean.img}
                  alt={dean.name}
                  fill
                  className="object-fill"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="px-5 pb-5 flex flex-col flex-grow text-left">
              <h5
                className="text-[18px] sm:text-[20px] font-serif font-semibold text-white leading-tight mb-3"
                title={dean.name}
              >
                {dean.name}
              </h5>
              <p
                className="text-[13px] font-poppins sm:text-[14px] line-clamp-4 text-white/90 font-normal leading-[1.4] mb-2"
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

      {visibleCount < DEANS.length && (
        <div className="flex justify-center pt-2">
          <button
            onClick={handleLoadMore}
            disabled={isLoading}
            className="text-white font-poppins font-normal text-[16px] hover:text-[#4DAFFF] disabled:opacity-60 transition-colors duration-300 cursor-pointer flex items-center gap-2"
          >
            {isLoading ? (
              <>
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Loading...
              </>
            ) : (
              "Load more"
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default AdvisoryCarousel;
