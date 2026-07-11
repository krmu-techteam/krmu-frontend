"use client";

import { STRAPI_URL } from "@/app/constant";
import { ImageAsset } from "@/lib/types/phd-programmes";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
type Props = {
  logoSlide: ImageAsset[];
};

const PHDSlide = ({ logoSlide }: Props) => {
  return (
    <section className="bg-[#051630]">
      <div className="max-w-[1664px] mx-auto w-full flex justify-between min-h-[130px] h-full">
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
          className="w-full"
        >
          <CarouselContent>
            {logoSlide &&
              logoSlide?.map((logo) => {
                return (
                  <CarouselItem
                    key={logo?.id}
                    className="basis-1/2 md:basis-1/3 lg:basis-1/4"
                  >
                    <Image
                      src={`${STRAPI_URL}${logo?.url}`}
                      width={304}
                      height={84}
                      alt={""}
                      className="object-contain h-[120px]"
                    />
                  </CarouselItem>
                );
              })}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default PHDSlide;
