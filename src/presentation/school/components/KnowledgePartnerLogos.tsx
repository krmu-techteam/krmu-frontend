"use client";
import Image from "next/image";
import { useMemo, useState, useEffect } from "react";
import { StrapiMedia } from "@/lib/types/common";
import { STRAPI_URL } from "@/app/constant";

type Props = {
  logos: StrapiMedia[];
  speed?: number;
};

const KnowledgePartnerLogos = ({ logos = [], speed = 50 }: Props) => {
  const [isMarquee, setIsMarquee] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let threshold = 6;
      if (width < 640) {
        threshold = 2;
      } else if (width < 768) {
        threshold = 3;
      } else if (width < 1024) {
        threshold = 4;
      } else {
        threshold = 6;
      }
      setIsMarquee(logos.length > threshold);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [logos.length]);

  const displayLogos = useMemo(() => {
    if (!logos || !logos.length) return [];
    if (isMarquee) {
      return [...logos, ...logos, ...logos];
    }
    return logos;
  }, [logos, isMarquee]);

  if (!logos || !logos.length) return null;

  if (!isMarquee) {
    // 6 or fewer logos: centered single-row flex layout without wrapping
    return (
      <div className="max-w-[1530px] mx-auto w-full py-2">
        <div className="flex flex-nowrap items-center justify-center gap-4 lg:gap-5 overflow-x-auto no-scrollbar">
          {logos.map((logo, index) => (
            <div
              key={`${logo?.id || index}-${index}`}
              className="bg-white rounded-[4px] p-1.5 sm:p-2 flex justify-center items-center shadow-md w-[140px] sm:w-[165px] md:w-[180px] lg:w-[190px] xl:w-[206px] 2xl:w-[210px] h-[90px] sm:h-[105px] xl:h-[110px] shrink-0 transition-transform duration-300 hover:scale-[1.02]"
            >
              <Image
                src={`${STRAPI_URL}${logo?.url}`}
                width={logo?.width || 240}
                height={logo?.height || 120}
                alt={logo?.alternativeText || "Knowledge Partner Logo"}
                className="h-full sm:h-[96px] w-auto max-w-[92%] object-contain"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // More than 6 logos: marquee infinite slider in max-w-[1530px]
  return (
    <div className="relative w-full max-w-[1530px] mx-auto overflow-hidden py-2">
      <div
        className="flex items-center w-max gap-4 lg:gap-6 animate-marquee hover:[animation-play-state:paused]"
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {displayLogos.map((logo, index) => (
          <div
            key={`${logo?.id || index}-${index}`}
            className="bg-white rounded-[4px] p-1.5 sm:p-2 flex justify-center items-center shadow-md w-[190px] sm:w-[220px] h-[95px] sm:h-[110px] shrink-0 transition-transform duration-300 hover:scale-[1.02]"
          >
            <Image
              src={`${STRAPI_URL}${logo?.url}`}
              width={logo?.width || 240}
              height={logo?.height || 120}
              alt={logo?.alternativeText || "Knowledge Partner Logo"}
              className="h-full sm:h-[96px] w-auto max-w-[92%] object-contain"
              unoptimized
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        .animate-marquee {
          animation: marquee linear infinite;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </div>
  );
};

export default KnowledgePartnerLogos;
