"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import CDCTeamMember from "./CDCTeamMember";
import { cdcTeamMembers } from "../constant"; 

interface MeetCDCTeamProps {
  teamMembers: typeof cdcTeamMembers;
}

const MeetCDCTeam = ({ teamMembers }: MeetCDCTeamProps) => {
  const hasMembers = teamMembers.length > 0;

  return (
    <section className="px-5 pb-10 md:pb-20 lg:px-0">
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

        {/* Empty State */}
        {!hasMembers && (
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
        {hasMembers && (
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
                      left-0
                      h-9 w-9
                      bg-black text-white
                      hover:bg-black/80
                      xl:-left-10
                    "
                  />

                  <CarouselNext
                    className="
                      right-0
                      h-9 w-9
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

export default MeetCDCTeam;