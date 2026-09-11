"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import CDCTeamCard from "../../common/cards/CDCTeamCard";
import { useCDCTeam } from "@/app/(krmu-backend)/lib/api/cdc-team/useCDCTeam";

const SKELETON_COUNT = 4;

const CDCTeam = () => {
  const {
    data: teamMembers = [],
    isLoading,
    isError,
  } = useCDCTeam();

  /**
   * Loading State
   */
  if (isLoading) {
    return (
      <section className="bg-[#fdfaf5] px-5 py-12 sm:py-16 md:py-20 lg:py-24 xl:px-0">
        <div className="mx-auto w-full max-w-7xl">
          {/* Header */}
          <div className="mb-8 flex flex-col gap-3 sm:mb-10 md:flex-row md:items-center md:justify-between">
            <div className="h-10 w-64 animate-pulse rounded-md bg-gray-200 sm:h-12 sm:w-80 md:h-14 md:w-[400px]" />

            <div className="h-5 w-64 animate-pulse rounded-md bg-gray-200" />
          </div>

          {/* Skeleton Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: SKELETON_COUNT }).map((_, index) => (
              <CDCTeamSkeleton key={index} />
            ))}
          </div>

          {/* Bottom Border */}
          <div className="mt-10 border-b border-[#d8d5d0] sm:mt-12" />
        </div>
      </section>
    );
  }

  /**
   * Error State
   */
  if (isError) {
    return (
      <section className="bg-[#fdfaf5] px-5 py-12 sm:py-16 md:py-20 lg:py-24 xl:px-0">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-8 flex flex-col gap-3 sm:mb-10 md:flex-row md:items-center md:justify-between">
            <h2 className="font-newsreader text-3xl font-medium text-[#001836] sm:text-4xl md:text-5xl lg:text-[55px]">
              Meet the CDC team
            </h2>

            <p className="font-poppins text-xs leading-5 text-[#333] sm:text-sm md:text-right">
              Guiding students from enrollment to employment.
            </p>
          </div>

          <div className="flex min-h-[250px] items-center justify-center rounded-lg border border-red-100 bg-red-50 px-5">
            <div className="text-center">
              <h3 className="font-newsreader text-2xl font-semibold text-[#001836]">
                Unable to load the CDC team
              </h3>

              <p className="mt-2 font-poppins text-sm text-red-600">
                Something went wrong while loading team members.
                Please try again later.
              </p>
            </div>
          </div>

          <div className="mt-10 border-b border-[#d8d5d0] sm:mt-12" />
        </div>
      </section>
    );
  }

  /**
   * Empty State
   */
  if (!teamMembers.length) {
    return (
      <section className="bg-[#fdfaf5] px-5 py-12 sm:py-16 md:py-20 lg:py-24 xl:px-0">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-8 flex flex-col gap-3 sm:mb-10 md:flex-row md:items-center md:justify-between">
            <h2 className="font-newsreader text-3xl font-medium text-[#001836] sm:text-4xl md:text-5xl lg:text-[55px]">
              Meet the CDC team
            </h2>

            <p className="font-poppins text-xs leading-5 text-[#333] sm:text-sm md:text-right">
              Guiding students from enrollment to employment.
            </p>
          </div>

          <div className="flex min-h-[250px] items-center justify-center rounded-lg border border-[#e5e1da] bg-white px-5">
            <div className="text-center">
              <h3 className="font-newsreader text-2xl font-semibold text-[#001836]">
                No team members available
              </h3>

              <p className="mt-2 font-poppins text-sm text-[#666]">
                CDC team information is currently unavailable.
              </p>
            </div>
          </div>

          <div className="mt-10 border-b border-[#d8d5d0] sm:mt-12" />
        </div>
      </section>
    );
  }

  /**
   * Success State
   */
  const showNavigation = teamMembers.length > 4;

  return (
    <section className="bg-[#fdfaf5] px-5 py-12 sm:py-16 md:py-20 lg:py-24 xl:px-0">
      <div className="mx-auto w-full max-w-7xl">
        <Carousel
          opts={{
            align: "start",
            loop: showNavigation,
          }}
          className="w-full"
        >
          {/* Header */}
          <div className="mb-8 flex flex-col gap-3 sm:mb-10 md:flex-row md:items-center md:justify-between">
            <h2 className="font-newsreader text-3xl font-medium leading-none text-[#001836] sm:text-4xl md:text-5xl lg:text-[55px]">
              Meet the CDC team
            </h2>

            <p className="font-poppins text-xs leading-5 text-[#333] sm:text-sm md:text-right">
              Guiding students from enrollment to employment.
            </p>
          </div>

          {/* Carousel */}
          <div className="relative px-0 sm:px-8 lg:px-0">
            <CarouselContent className="-ml-4">
              {teamMembers.map((member) => (
                <CarouselItem
                  key={member.id}
                  className="basis-full pl-4 sm:basis-1/2 lg:basis-1/4"
                >
                  <CDCTeamCard member={member} />
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation */}
            {showNavigation && (
              <>
                <CarouselPrevious
                  className="
                    absolute
                    -left-3
                    top-[105px]
                    z-20
                    size-7
                    translate-y-0
                    border-0
                    bg-[#001836]
                    text-white
                    shadow-none
                    hover:bg-[#001836]
                    hover:text-white
                    sm:-left-2
                    sm:top-[115px]
                    md:size-8
                    lg:-left-8
                  "
                />

                <CarouselNext
                  className="
                    absolute
                    -right-3
                    top-[105px]
                    z-20
                    size-7
                    translate-y-0
                    border-0
                    bg-[#001836]
                    text-white
                    shadow-none
                    hover:bg-[#001836]
                    hover:text-white
                    sm:-right-2
                    sm:top-[115px]
                    md:size-8
                    lg:-right-8
                  "
                />
              </>
            )}
          </div>

          {/* Bottom Border */}
          <div className="mt-10 border-b border-[#d8d5d0] sm:mt-12" />
        </Carousel>
      </div>
    </section>
  );
};

/**
 * CDC Team Skeleton
 */
const CDCTeamSkeleton = () => {
  return (
    <div className="animate-pulse">
      {/* Image */}
      <div className="aspect-square w-full rounded-md bg-gray-200" />

      {/* Content */}
      <div className="mt-5 space-y-3">
        {/* Name */}
        <div className="h-6 w-3/4 rounded bg-gray-200" />

        {/* Designation */}
        <div className="h-4 w-1/2 rounded bg-gray-200" />

        {/* Email */}
        <div className="h-4 w-full rounded bg-gray-200" />
      </div>
    </div>
  );
};

export default CDCTeam;