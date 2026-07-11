"use client";

import { STRAPI_URL } from "@/app/constant";
import { Rankings } from "@/lib/types/membership-and-ranking";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface RankingProps {
  rankingData: Rankings[];
}

const Ranking: React.FC<RankingProps> = ({ rankingData }) => {
  return (
    <>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 1500,
          }),
        ]}
      >
        <CarouselContent>
          {rankingData &&
            rankingData.map((rank) => {
              return (
                <CarouselItem
                  key={rank?.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <div className="text-center flex flex-col items-center">
                    <div className="mb-5">
                      <Image
                        src={`${STRAPI_URL}${rank.cardimg.url}`}
                        width={150}
                        height={132}
                        alt={rank.cardimg.alternativeText || "Rank"}
                      />
                    </div>
                    <p
                      className="font-bold"
                      dangerouslySetInnerHTML={{
                        __html: rank?.title,
                      }}
                    />
                  </div>
                </CarouselItem>
              );
            })}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
    </>
  );
};

export default Ranking;
