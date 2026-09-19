"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { corporateAdvisors } from "../constant";
import CorporateAdvisorCard from "../../common/cards/CorporateAdvisorCard";

const CorporateAdvisoryBoard = () => {
  return (
    <section className="bg-[#f7f4ef] py-12 md:py-16">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8 xl:px-0">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-3 md:mb-12 md:flex-row md:items-center md:justify-between">
          <h2 className="font-newsreader text-3xl font-semibold leading-none text-[#001836] sm:text-4xl lg:text-[44px]">
            Corporate Advisory Board
          </h2>

          <p className="font-poppins text-xs text-[#333] sm:text-sm">
            Guiding students from enrollment to employment.
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-5">
            {corporateAdvisors.map((advisor) => (
              <CarouselItem
                key={advisor.id}
                className="
                  basis-full
                  pl-5
                  sm:basis-1/2
                  md:basis-1/3
                  lg:basis-1/4
                  xl:basis-1/5
                "
              >
                <CorporateAdvisorCard advisor={advisor} />
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-end gap-3">
            <CarouselPrevious className="static translate-y-0 border-[#001836] text-[#001836] hover:bg-[#001836] hover:text-white">
              <ChevronLeft className="size-4" />
            </CarouselPrevious>

            <CarouselNext className="static translate-y-0 border-[#001836] text-[#001836] hover:bg-[#001836] hover:text-white">
              <ChevronRight className="size-4" />
            </CarouselNext>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default CorporateAdvisoryBoard;
