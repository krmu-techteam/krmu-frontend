"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { trainers } from "../constant";
import TrainerCard from "../../common/cards/TrainerCard";

const Trainers = () => {
  return (
    <section
      className="
        bg-[#fdfaf5]
        px-5
        pb-10
        pt-10
        sm:pb-14
        sm:pt-12
        md:pb-16
        md:pt-14
        lg:pb-20
        lg:pt-16
        xl:px-0
      "
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Header */}
        <div
          className="
            mb-8
            flex
            flex-col
            gap-2
            sm:mb-10
            sm:flex-row
            sm:items-center
            sm:justify-between
            md:mb-12
          "
        >
          <h2
            className="
              font-newsreader
              text-[32px]
              font-medium
              leading-none
              text-[#001836]
              sm:text-4xl
              md:text-5xl
            "
          >
            Trainers
          </h2>

          <p
            className="
              font-poppins
              text-xs
              leading-5
              text-[#444]
              sm:text-sm
            "
          >
            Industry veterans guiding our curriculum.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative px-0 sm:px-2 md:px-0">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 sm:-ml-5">
              {trainers.map((trainer) => (
                <CarouselItem
                  key={trainer.id}
                  className="
                    basis-[85%]
                    pl-4
                    sm:basis-1/2
                    sm:pl-5
                    md:basis-1/3
                    lg:basis-1/4
                    xl:basis-1/6
                  "
                >
                  <TrainerCard {...trainer} />
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Previous */}
            <CarouselPrevious
              className="
                left-[-10px]
                top-[38%]
                z-20
                h-7
                w-7
                -translate-y-1/2
                border-0
                bg-[#001836]
                text-white
                shadow-sm
                hover:bg-[#001836]
                hover:text-white
                sm:left-[-14px]
                md:left-[-18px]
                lg:left-[-25px]
                xl:left-[-32px]
              "
            >
              <ChevronLeft
                className="size-4"
                strokeWidth={1.5}
              />
            </CarouselPrevious>

            {/* Next */}
            <CarouselNext
              className="
                right-[-10px]
                top-[38%]
                z-20
                h-7
                w-7
                -translate-y-1/2
                border-0
                bg-[#001836]
                text-white
                shadow-sm
                hover:bg-[#001836]
                hover:text-white
                sm:right-[-14px]
                md:right-[-18px]
                lg:right-[-25px]
                xl:right-[-32px]
              "
            >
              <ChevronRight
                className="size-4"
                strokeWidth={1.5}
              />
            </CarouselNext>
          </Carousel>
        </div>

        {/* Bottom Border */}
        <div className="mt-8 border-b border-[#d8d5d0] sm:mt-10 md:mt-12" />
      </div>
    </section>
  );
};

export default Trainers;