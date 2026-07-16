"use client";

import { STRAPI_URL } from "@/app/constant";
import { RankingCard } from "@/features/about/membership-and-rankings";
import Image from "next/image";
import { Carousel } from "@/components/common/Carousel";

interface RankingProps {
  rankingData: RankingCard[];
}

export const Ranking: React.FC<RankingProps> = ({ rankingData }) => {
  return (
    <Carousel
      options={{
        align: "start",
        loop: true,
      }}
      autoplay={true}
      autoplayDelay={1500}
      showArrows={false}
      slideClassName="basis-full md:basis-1/2 lg:basis-1/4"
    >
      {rankingData &&
        rankingData.map((rank) => {
          return (
            <div
              key={rank?.id}
              className="rounded-[4px] bg-[#061623] border border-white/10 p-6 flex flex-col items-center justify-between min-h-[320px] hover:border-[#0060aa] transition-all duration-300 group text-center mx-2"
            >
              {/* Logo/Image Container */}
              <div className="w-full flex-1 flex items-center justify-center p-4 rounded-[4px] mb-4">
                <Image
                  src={`${STRAPI_URL}${rank.image}`}
                  width={150}
                  height={132}
                  className="max-w-[150px] max-h-[120px] object-contain transition-transform duration-500 group-hover:scale-105"
                  alt={rank.title || "Rank"}
                />
              </div>

              {/* Title Section */}
              <div className="w-full min-h-[50px] flex items-center justify-center">
                <p
                  className=" text-[16px] sm:text-[16px] text-[#94a3b8] group-hover:text-white font-normal transition-colors duration-200 line-clamp-2 font-poppins leading-snug"
                  dangerouslySetInnerHTML={{
                    __html: rank?.title,
                  }}
                />
              </div>
            </div>
          );
        })}
    </Carousel>
  );
};
