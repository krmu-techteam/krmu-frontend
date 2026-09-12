"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { trainers, Trainer } from "../constant";
import TrainerCard from "../../common/cards/TrainerCard";

const Trainers = () => {
  const [selectedTrainer, setSelectedTrainer] =
    useState<Trainer | null>(null);

  return (
    <>
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
                    <TrainerCard
                      {...trainer}
                      onViewProfile={() =>
                        setSelectedTrainer(trainer)
                      }
                    />
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

      {/* ========================= */}
      {/* TRAINER PROFILE MODAL */}
      {/* ========================= */}

      {selectedTrainer && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-black/60
            p-4
            sm:p-6
          "
          onClick={() => setSelectedTrainer(null)}
        >
          {/* Modal */}
          <div
            className="
              relative
              w-full
              max-w-5xl
              max-h-[90vh]
              overflow-y-auto
              bg-white
              shadow-2xl
            "
            onClick={(event) => event.stopPropagation()}
          >

            {/* Close */}
            <button
              type="button"
              onClick={() => setSelectedTrainer(null)}
              aria-label="Close profile"
              className="
                absolute
                right-4
                top-4
                z-10
                flex
                h-9
                w-9
                items-center
                justify-center
                bg-white
                text-[#001836]
                shadow-md
                transition-colors
                hover:bg-[#001836]
                hover:text-white
              "
            >
              <X className="size-5" strokeWidth={1.5} />
            </button>

            {/* Content */}
            <div className="grid md:grid-cols-[0.9fr_1.35fr]">

              {/* Image */}
              <div className="relative min-h-[350px] bg-[#eee] sm:min-h-[450px] md:min-h-[600px]">
                {/* {<Image
                  src={selectedTrainer.image}
                  alt={selectedTrainer.name}
                  fill
                  sizes="(max-width: 767px) 100vw, 40vw"
                  className="object-cover"
                />} */}

                {/* Name overlay */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    bg-[#287694]
                    px-6
                    py-4
                    text-center
                    text-white
                    sm:px-8
                    sm:py-5
                  "
                >
                  <h3
                    className="
                      font-newsreader
                      text-2xl
                      leading-tight
                      sm:text-3xl
                    "
                  >
                    {selectedTrainer.name}
                  </h3>

                  <p
                    className="
                      mt-1
                      font-poppins
                      text-xs
                      sm:text-sm
                    "
                  >
                    {selectedTrainer.designation}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div
                className="
                  flex
                  items-center
                  px-6
                  py-8
                  sm:px-10
                  sm:py-10
                  md:px-12
                  md:py-12
                "
              >
                <p
                  className="
                    font-poppins
                    text-base
                    leading-8
                    tracking-wide
                    text-[#222]
                    sm:text-lg
                    sm:leading-9
                  "
                >
                  {selectedTrainer.description}
                </p>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Trainers;