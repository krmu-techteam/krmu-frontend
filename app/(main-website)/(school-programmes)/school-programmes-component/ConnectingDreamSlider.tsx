"use client";

import { useEffect, useState } from "react";
import { STRAPI_URL } from "@/app/constant";
import { StrapiMedia } from "@/lib/types/common";
import Image from "next/image";

type Props = {
  logos: StrapiMedia[] | undefined;
  showNumberOfSlides?: string;
};

const ConnectingDreamSlider = ({ logos }: Props) => {
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

  if (!mounted || !isSlider) {
    return (
      <div className="w-full flex flex-row flex-nowrap justify-center items-center gap-x-2 sm:gap-x-6 xl:gap-x-8">
        {logos.map((logo) => (
          <div
            key={logo.id}
            className="px-2 sm:px-4 md:px-6 flex items-center justify-center"
          >
            <Image
              src={`${STRAPI_URL}${logo?.url}`}
              width={180}
              height={180}
              alt={logo?.alternativeText || "Career Logo"}
              className="object-contain max-h-[56px] sm:max-h-16 w-auto transition-all"
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden relative">
      {/* Universal Slider (Marquee) */}
      <div className="flex animate-marquee whitespace-nowrap">
        {logos?.concat(logos).concat(logos).map((logo, index) => (
          <div
            key={`${logo.id}-${index}`}
            className="px-4 md:px-6 xl:px-8 flex items-center justify-center customCarousel"
          >
            <Image
              src={`${STRAPI_URL}${logo?.url}`}
              width={180}
              height={180}
              alt={logo?.alternativeText || "Career Logo"}
              className="object-contain max-h-[56px] sm:max-h-16 w-auto transition-all"
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
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default ConnectingDreamSlider;
