"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { StrapiMedia } from "@/lib/types/common";
import { STRAPI_URL } from "@/app/constant";

interface IndustryCollabLogosProps {
  indusLogos: StrapiMedia[];
}

const IndustryCollabLogos = ({ indusLogos }: IndustryCollabLogosProps) => {
  return (
    <div>
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
          {indusLogos &&
            indusLogos.map((logo) => {
              return (
                <CarouselItem key={logo?.id} className="basis-1/2 lg:basis-1/3">
                  <Image
                    src={`${STRAPI_URL}${logo?.url}`}
                    width={201}
                    height={115}
                    alt={logo?.alternativeText || "Industry Colloboration Logo"}
                  />
                </CarouselItem>
              );
            })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default IndustryCollabLogos;
