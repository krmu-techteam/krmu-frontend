"use client";

import { useState } from "react";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

const deans = [
  {
    name: "Dr. Tanaya Verma",
    role: "Dean- SOAD",
    img: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Dr_Tanaya_Verma_SOAD_0c930f1c6b.jpg",
  },
  {
    name: "Dr. Tania Gupta",
    role: "Professor & Dean- SOED",
    img: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Prof_Tania_Gupta_SOED_3cafa605a2.jpg",
  },
  {
    name: "Dr. Joginder Singh Yadav",
    role: "Professor & Dean- SOAS",
    img: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Prof_Dr_J_S_Yadav_SOAS_06631d634a.png",
  },
  {
    name: "Dr. Pankaj Agarwal",
    role: "Professor & Dean, SOET",
    img: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Dr_Pankaj_Agarwal_DEAN_SOET_2e63c16f24.png",
  },
  {
    name: "Dr. Hema Chaudhary",
    role: "Professor & Dean, SMAS",
    img: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Dr_Hema_Chaudhary_f8b6ce6363.jpg",
  },
  {
    name: "Dr. Meena Bhandari",
    role: "Associate Professor & Dean, SBAS",
    img: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Dr_Meena_Bhandari_SBAS_81ba776ac8.jpg",
  },
  {
    name: "Dr. Amit Chawla",
    role: "Professor & Dean, SEMCE",
    img: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Dr_Amit_Chawla_SEMCE_54fb0f6497.png",
  },
  {
    name: "Prof (Dr.) Kaveri Sharma",
    role: "Professor & Dean, SOLS",
    img: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/16_5ba7e2ac00.jpg",
  },
  {
    name: "Mamta Shankar",
    role: "School Coordinator, SPRS",
    img: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Dr_Mamta_Shankar_P_T_SPRS_7350075f69.jpg",
  },
  {
    name: "Prof. Shravan Kumar",
    role: "Professor and Dean, SOLA",
    img: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Dr_Shravan_Kumar_095984b81a.png",
  },
];

const ITEMS_PER_LOAD = 5;

const DeansCardSkeleton = () => (
  <div className="flex flex-col h-full">
    <div className="w-full h-[220px] sm:h-[260px] rounded-[4px] overflow-hidden bg-white/10">
      <Skeleton className="w-full h-full" />
    </div>
    <div className="flex flex-col flex-grow text-left pt-4 space-y-2">
      <Skeleton className="h-6 w-3/4 bg-white/15 rounded-[2px]" />
      <Skeleton className="h-4 w-1/2 bg-[#4DAFFF]/20 rounded-[2px]" />
    </div>
  </div>
);

const DeansCarousel = () => {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + ITEMS_PER_LOAD);
      setIsLoading(false);
    }, 600);
  };

  const remainingCount = deans.length - visibleCount;
  const skeletonCount = Math.min(remainingCount, ITEMS_PER_LOAD);

  return (
    <div className="space-y-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {deans.slice(0, visibleCount).map((dean, index) => (
          <div
            key={index}
            className={`group relative flex-col h-full ${
              (index + 1) % 5 === 0 ? "hidden xl:flex" : "flex"
            }`}
          >
            {/* Person Image */}
            <div className="w-full h-[220px] sm:h-[260px] relative overflow-hidden   bg-white">
              <Image
                src={dean.img}
                alt={dean.name}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                unoptimized
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col flex-grow text-left pt-4">
              <h5
                className="text-[18px] sm:text-[20px] font-serif font-semibold text-white leading-tight mb-2"
                title={dean.name}
              >
                {dean.name}
              </h5>
              <p
                className="text-[13px] font-poppins sm:text-[14px] text-[#4DAFFF] font-normal leading-snug mt-auto"
                title={dean.role}
              >
                {dean.role}
              </p>
            </div>
          </div>
        ))}

        {/* Skeleton cards shown during loading */}
        {isLoading &&
          Array.from({ length: skeletonCount }).map((_, index) => (
            <DeansCardSkeleton key={`skeleton-${index}`} />
          ))}
      </div>

      {visibleCount < deans.length && (
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

export default DeansCarousel;
