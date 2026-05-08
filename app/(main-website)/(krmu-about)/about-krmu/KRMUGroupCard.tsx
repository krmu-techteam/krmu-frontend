"use client";

import { STRAPI_URL } from "@/app/constant";
import { StrapiMedia } from "@/lib/types/common";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface KRMBRANCHPROP {
  krmBranchImages: StrapiMedia[];
}

const KRMUGroupCard: React.FC<KRMBRANCHPROP> = ({ krmBranchImages }) => {
  return (
    <>
      <div className="cursor-pointer relative">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            {krmBranchImages &&
              krmBranchImages.map((branch) => {
                return (
                  <CarouselItem
                    key={branch?.id}
                    className="basis-1/2 lg:basis-1/4"
                  >
                    <div key={branch?.id}>
                      <Image
                        src={`${STRAPI_URL}${branch.url}`}
                        alt={branch?.alternativeText || "KRM Branch School"}
                        width={312}
                        height={342}
                      />
                    </div>
                  </CarouselItem>
                );
              })}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
};

export default KRMUGroupCard;
