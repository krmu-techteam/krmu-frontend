"use client";

import Image from "next/image";
import { useMemo } from "react";
import { STRAPI_URL } from "@/app/constant";
import { StrapiMedia } from "@/lib/types/common";

type Props = {
  logos?: StrapiMedia[];
  speed?: number; // seconds
};

const SchoolHeroSlider = ({
  logos = [],
  speed = 25,
}: Props) => {
  // duplicate logos for infinite smooth loop
  const duplicatedLogos = useMemo(
    () => [...logos, ...logos],
    [logos]
  );

  if (!logos.length) return null;

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex items-center w-max gap-10 animate-marquee"
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo.id}-${index}`}
            className="flex items-center justify-center shrink-0"
          >
            <Image
              src={`${STRAPI_URL}${logo.url}`}
              alt={logo.alternativeText || "logo"}
              width={140}
              height={70}
              className="object-contain h-[45px] w-auto"
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
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default SchoolHeroSlider;