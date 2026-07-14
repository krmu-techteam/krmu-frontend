"use client";

import { STRAPI_URL } from "@/app/constant";
import Image from "next/image";
import { useEffect, useState } from "react";
import { RecruiterCarouselProps } from "@/features/programs/types";

 
const RecruiterCarousel = ({ logos }: RecruiterCarouselProps) => {
  const [isSlider, setIsSlider] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      const width = window.innerWidth;
      const count = logos?.length || 0;

      let shouldSlide = false;
      if (width >= 1536) {
        // Desktop
        shouldSlide = count > 6;
      } else if (width >= 1280) {
        // Laptop
        shouldSlide = count > 6;
      } else if (width >= 1024) {
        // Mini laptop
        shouldSlide = count > 4;
      } else if (width >= 640) {
        // Tablet
        shouldSlide = count > 3;
      } else {
        // Mobile
        shouldSlide = count > 2;
      }
      setIsSlider(shouldSlide);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [logos]);

  if (!logos || logos.length === 0) return null;

  if (!mounted) {
    return <div className="w-full min-h-[80px] sm:min-h-[96px] md:min-h-[112px]" />;
  }

  if (!isSlider) {
    return (
      <div className="w-full flex flex-row flex-nowrap justify-center items-center gap-x-4 lg:gap-x-6">
        {logos.map((logo) => (
          <div
            key={logo.id}
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-40 md:h-24 flex items-center justify-center bg-white border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] rounded-sm p-3 sm:p-4 flex-shrink-0 transition-transform duration-300 hover:scale-[1.02]"
          >
            <Image
              src={`${STRAPI_URL}${logo?.url}`}
              width={120}
              height={120}
              alt={logo?.alternativeText || "Career Logo"}
              className="object-contain max-w-full max-h-full transition-all"
              unoptimized
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden relative">
      {/* Universal Slider (Marquee) */}
      <div className="flex animate-marquee whitespace-nowrap gap-4 py-2">
        {logos?.concat(logos).concat(logos).map((logo, index) => (
          <div
            key={`${logo.id}-${index}`}
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center bg-white border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] rounded-md p-3 sm:p-4 flex-shrink-0 transition-transform duration-300 hover:scale-105 customCarousel"
          >
            <Image
              src={`${STRAPI_URL}${logo?.url}`}
              width={120}
              height={120}
              alt={logo?.alternativeText || "Career Logo"}
              className="object-contain max-w-full max-h-full transition-all"
              unoptimized
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default RecruiterCarousel;
