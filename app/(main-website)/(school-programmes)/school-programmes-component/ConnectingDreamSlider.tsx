"use client";

import { STRAPI_URL } from "@/app/constant";
import { StrapiMedia } from "@/lib/types/common";
import Image from "next/image";

type Props = {
  logos: StrapiMedia[] | undefined;
};

const ConnectingDreamSlider = ({ logos }: Props) => {
  return (
    <div className="w-full overflow-hidden relative">
      {/* Universal Slider (Marquee) */}
      <div className="flex animate-marquee whitespace-nowrap">
        {logos?.concat(logos).concat(logos).map((logo, index) => (
          <div
            key={`${logo.id}-${index}`}
            className="flex-shrink-0 px-6 sm:px-8 flex items-center justify-center"
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
