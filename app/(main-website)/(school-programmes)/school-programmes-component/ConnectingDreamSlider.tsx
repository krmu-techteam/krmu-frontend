"use client";

import { STRAPI_URL } from "@/app/constant";
import { StrapiMedia } from "@/lib/types/common";
import Image from "next/image";

type Props = {
  logos: StrapiMedia[] | undefined;
  showNumberOfSlides?: string;
};

const ConnectingDreamSlider = ({ logos }: Props) => {
  return (
    <div className="w-full overflow-hidden relative">
      {/* Universal Slider (Marquee) */}
      <div className="flex animate-marquee whitespace-nowrap gap-2">
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
          animation: marquee 20s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default ConnectingDreamSlider;
