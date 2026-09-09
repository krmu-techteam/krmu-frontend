import { outcomesSchools } from "../constant";
import SchoolOutcomeCard from "./cards/SchoolOutcomeCard";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const OutcomesBySchool = () => {
  return (
    <section className="px-5 xl:px-0 pb-10 md:pb-20">
      <div className="max-w-6xl mx-auto w-full">
        <div>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#001836] mb-5 font-newsreader">
            Outcomes by school
          </h2>
        </div>
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full relative"
          >
            <div className="absolute z-10 right-10 -top-5 w-[100px] hidden md:block">
              <CarouselPrevious className="left-0 bg-black text-white w-10 h-10" />
              <CarouselNext className="right-0 bg-black text-white w-10 h-10" />
            </div>
            <CarouselContent className="-ml-5">
              {outcomesSchools.map((school, i) => (
                <CarouselItem
                  key={i}
                  className="pl-5 basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <SchoolOutcomeCard
                    code={school.code}
                    schoolName={school.schoolName}
                    placementRate={school.placementRate}
                    medianCtc={school.medianCtc}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex md:hidden items-center justify-center mt-10">
              <div className="absolute z-10  w-[100px]">
                <CarouselPrevious className="left-0 bg-black text-white w-10 h-10" />
                <CarouselNext className="right-0 bg-black text-white w-10 h-10" />
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default OutcomesBySchool;
