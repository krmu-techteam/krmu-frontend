"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
 
import { skilledPartners } from "../constant";
import SkilledPartnerCard from "../../common/cards/SkilledPartnerCard";

const SkilledPartners = () => {
  return (
    <section className="bg-[#fdfaf5] px-5 pb-10 xl:pb-20 xl:px-0">
      <div className="mx-auto w-full max-w-7xl">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          {/* Header */}
          <div className="mb-6 flex items-center justify-between gap-4 sm:mb-8">
            <h2
              className="
                font-newsreader
                text-3xl font-medium
                leading-none
                text-[#001836]
                sm:text-4xl
                md:text-5xl
                lg:text-[55px]
              "
            >
              Skilled Partners
            </h2>

            {/* Navigation */}
            <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
              <CarouselPrevious
                className="
                  static m-0
                  size-7
                  translate-y-0
                  rounded-full
                  border-0
                  bg-[#001836]
                  text-white
                  transition-transform
                  hover:scale-110
                  hover:bg-[#001836]
                  hover:text-white
                  sm:size-8
                  md:size-9
                "
              />

              <CarouselNext
                className="
                  static m-0
                  size-7
                  translate-y-0
                  rounded-full
                  border-0
                  bg-[#001836]
                  text-white
                  transition-transform
                  hover:scale-110
                  hover:bg-[#001836]
                  hover:text-white
                  sm:size-8
                  md:size-9
                "
              />
            </div>
          </div>

          {/* Cards */}
          <div className="overflow-hidden">
            <CarouselContent className="ml-0">
              {skilledPartners.map((partner) => (
                <CarouselItem
                  key={partner.id}
                  className="
                    basis-full
                    pl-0
                    sm:basis-1/2
                    md:basis-1/3
                    lg:basis-1/4
                  "
                >
                  <div className="h-full border border-[#d8d5d0] bg-white">
                    <SkilledPartnerCard partner={partner} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default SkilledPartners;
