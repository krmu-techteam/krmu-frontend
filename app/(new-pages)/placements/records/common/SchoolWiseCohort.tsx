"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { SchoolWiseSummary } from "../constant";
import CommonSchoolCard from "../../common/CommonSchoolCard";
import Divider from "../../common/Divider";

const SchoolWiseCohort = () => {
  const hasSlider = SchoolWiseSummary.length > 3;

  return (
    <section className="px-5 xl:px-0 py-10 sm:py-14 md:py-20">
      <div className="max-w-7xl mx-auto w-full">
        {/* =========================
            HEADING
        ========================= */}
        <div className="mb-6 sm:mb-8 md:mb-10">
          <h3 className="text-xs sm:text-sm font-medium tracking-[4px] uppercase text-[#8d5552] mb-5">
            2024–25 cohort
          </h3>

          <h2 className="text-3xl sm:text-4xl md:text-[55px] leading-tight text-[#001836] font-newsreader">
            School-wise summary
          </h2>
        </div>

        {/* =========================
            3 OR LESS SCHOOLS
            NORMAL GRID
        ========================= */}
        {!hasSlider ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {SchoolWiseSummary.map((school, index) => (
              <CommonSchoolCard
                key={school.id ?? `school-${index}`}
                school={school}
              />
            ))}
          </div>
        ) : (
          /* =========================
             MORE THAN 3 SCHOOLS
             CAROUSEL
          ========================= */
          <div className="relative">
            <Carousel
              opts={{
                align: "start",
                loop: true,

                // Prevent free dragging
                dragFree: false,

                // One snap at a time
                skipSnaps: false,

                // IMPORTANT:
                // Disable mouse/touch dragging.
                // Slides will move only using arrows.
                watchDrag: false,
              }}
              className="w-full"
            >
              {/* =========================
                  DESKTOP ARROWS
              ========================= */}
              <div className="absolute right-0 -top-16 z-30 hidden md:flex items-center gap-1.5">
                <CarouselPrevious
                  className="
                    static
                    translate-y-0
                    m-0
                    w-10
                    h-10
                    rounded-full
                    bg-black
                    text-white
                    border-0
                    shadow-none
                    hover:bg-black/80
                    hover:text-white
                    cursor-pointer
                    disabled:opacity-40
                  "
                />

                <CarouselNext
                  className="
                    static
                    translate-y-0
                    m-0
                    w-10
                    h-10
                    rounded-full
                    bg-black
                    text-white
                    border-0
                    cursor-pointer
                    shadow-none
                    hover:bg-black/80
                    hover:text-white
                    disabled:opacity-40
                  "
                />
              </div>

              {/* =========================
                  CAROUSEL CONTENT
              ========================= */}
              <CarouselContent
                className="
                  -ml-0
                "
              >
                {SchoolWiseSummary.map((school, index) => (
                  <CarouselItem
                    key={school.id ?? `school-${index}`}
                    className="
                      pl-0
                      pr-4
                      sm:pr-5

                      basis-full
                      sm:basis-1/2
                      lg:basis-1/3
                    "
                  >
                    {/* ONE ITEM = ONE SCHOOL */}
                    <div className="h-full">
                      <CommonSchoolCard school={school} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* =========================
                  MOBILE ARROWS
              ========================= */}
              <div className="flex md:hidden justify-center mt-6">
                <div className="flex items-center gap-10">
                  <CarouselPrevious
                    className="
                      static
                      translate-y-0
                      m-0
                      w-10
                      h-10
                      rounded-full
                      bg-black
                      text-white
                      border-0
                      shadow-none
                      hover:bg-black/80
                      hover:text-white
                      disabled:opacity-40
                    "
                  />

                  <CarouselNext
                    className="
                      static
                      translate-y-0
                      m-0
                      w-10
                      h-10
                      rounded-full
                      bg-black
                      text-white
                      border-0
                      shadow-none
                      hover:bg-black/80
                      hover:text-white
                      disabled:opacity-40
                    "
                  />
                </div>
              </div>
            </Carousel>
          </div>
        )}
      </div>
    </section>
  );
};

export default SchoolWiseCohort;
