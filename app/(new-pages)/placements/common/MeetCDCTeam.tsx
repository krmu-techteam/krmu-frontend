"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useCDCTeam } from "@/app/(krmu-backend)/lib/api/cdc-team/useCDCTeam";
import CDCTeamMember from "./CDCTeamMember";

const SKELETON_COUNT = 4;

const MeetCDCTeam = () => {
  const { data: teamMembers = [], isLoading, isError, error } = useCDCTeam();

  const hasMembers = teamMembers.length > 0;

  return (
    <section className="px-5 pb-10 lg:px-0 md:pb-20">
      <div className="mx-auto w-full max-w-6xl font-poppins">
        {/* Heading */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-8">
          <h5 className="font-newsreader text-4xl font-semibold text-[#001836] md:mb-5 md:text-5xl">
            Meet the CDC team
          </h5>

          <p className="text-sm sm:text-base">
            Guiding students from enrollment to employment.
          </p>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: SKELETON_COUNT }).map((_, index) => (
              <CDCTeamMemberSkeleton key={index} />
            ))}
          </div>
        )}

        {/* Error State */}
        {!isLoading && isError && (
          <div className="mt-8 flex min-h-[300px] items-center justify-center rounded-lg border border-red-100 bg-red-50 px-6 text-center">
            <div>
              <h6 className="font-newsreader text-2xl font-semibold text-red-800">
                Unable to load the CDC team
              </h6>

              <p className="mt-2 text-sm text-red-600">
                Something went wrong while fetching the team members. Please try
                again later.
              </p>

              {process.env.NODE_ENV === "development" && error && (
                <p className="mt-2 text-xs text-red-400">
                  {error instanceof Error ? error.message : "Unknown error"}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Empty State */}
        {!isLoading && !isError && !hasMembers && (
          <div className="mt-8 flex min-h-[300px] items-center justify-center rounded-lg border border-gray-200 bg-gray-50 px-6 text-center">
            <div>
              <h6 className="font-newsreader text-2xl font-semibold text-[#001836]">
                No team members found
              </h6>

              <p className="mt-2 text-sm text-gray-500">
                CDC team information is currently unavailable.
              </p>
            </div>
          </div>
        )}

        {/* Team Carousel */}
        {!isLoading && !isError && hasMembers && (
          <div className="relative mt-8">
            <Carousel
              opts={{
                align: "start",
                loop: teamMembers.length > 4,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {teamMembers.map((member) => (
                  <CarouselItem
                    key={member.id}
                    className="basis-full pl-4 sm:basis-1/2 md:basis-1/3 xl:basis-1/4"
                  >
                    <CDCTeamMember member={member} />
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Navigation */}
              {teamMembers.length > 4 && (
                <>
                  <CarouselPrevious
                    className="
                      left-0 h-9 w-9
                      bg-black text-white
                      hover:bg-black/80
                      xl:-left-10
                    "
                  />

                  <CarouselNext
                    className="
                      right-0 h-9 w-9
                      bg-black text-white
                      hover:bg-black/80
                      xl:-right-10
                    "
                  />
                </>
              )}
            </Carousel>
          </div>
        )}
      </div>
    </section>
  );
};

const CDCTeamMemberSkeleton = () => {
  return (
    <div className="animate-pulse">
      {/* Image */}
      <div className="aspect-square w-full max-w-[264px] rounded-md bg-gray-200" />

      {/* Text */}
      <div className="mt-5 space-y-2">
        <div className="h-6 w-3/4 rounded bg-gray-200" />
        <div className="h-4 w-1/2 rounded bg-gray-200" />
        <div className="h-4 w-full rounded bg-gray-200" />
      </div>
    </div>
  );
};

export default MeetCDCTeam;
