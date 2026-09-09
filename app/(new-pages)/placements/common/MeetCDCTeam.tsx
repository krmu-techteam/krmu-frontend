import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cdcTeamMembers } from "../constant";
import CDCTeamMember from "./CDCTeamMember";

const MeetCDCTeam = () => {
  return (
    <section className="px-5 lg:px-0 pb-10 md:pb-20">
      <div className="mx-auto w-full max-w-6xl font-poppins">
        {/* Heading */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-8">
          <h5 className="text-4xl md:text-5xl font-semibold text-[#001836] md:mb-5 font-newsreader">
            Meet the CDC team
          </h5>

          <p className="text-sm sm:text-base">
            Guiding students from enrollment to employment.
          </p>
        </div>

        {/* Team Carousel */}
        <div className="relative mt-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {cdcTeamMembers.map((member, i) => (
                <CarouselItem
                  key={i}
                  className="basis-full pl-4 sm:basis-1/2 md:basis-1/3 xl:basis-1/4"
                >
                  <CDCTeamMember member={member} />
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation */}

            <CarouselPrevious
              className="
                    
                    h-9 w-9
                    bg-black text-white
                    hover:bg-black/80
                    left-0
                    xl:-left-10
                  "
            />

            <CarouselNext
              className="
                    h-9 w-9
                    bg-black text-white
                    hover:bg-black/80
                    right-0
                    xl:-right-10
                  "
            />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default MeetCDCTeam;
