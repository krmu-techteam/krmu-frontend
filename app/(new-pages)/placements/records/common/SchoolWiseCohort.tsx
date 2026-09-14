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
  return (
    <section className="px-5 xl:px-0 pt-10 sm:pt-14 md:pt-20">
      <div className="max-w-7xl mx-auto w-full">
        {/* Heading */}
        <div className="mb-6 sm:mb-8 md:mb-10">
          <h3 className="text-xs sm:text-sm font-medium tracking-[4px] uppercase text-[#8d5552] mb-5">
            2024–25 cohort
          </h3>
          <h2 className="text-3xl sm:text-4xl md:text-[55px] leading-tight text-[#001836] font-newsreader">
            School-wise summary
          </h2>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            {/* Desktop / Tablet arrows */}
            <div className="absolute z-10 right-0 -top-16 hidden md:block">
              <CarouselPrevious className="static inline-flex translate-y-0 mr-2 bg-black text-white w-10 h-10" />
              <CarouselNext className="static inline-flex translate-y-0 bg-black text-white w-10 h-10" />
            </div>

            <CarouselContent className="-ml-3 sm:-ml-4 md:-ml-5">
              {SchoolWiseSummary.map((school, i) => (
                <CarouselItem
                  key={i}
                  className="pl-3 sm:pl-4 md:pl-5 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <CommonSchoolCard school={school} />
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Mobile arrows */}
            <div className="flex md:hidden items-center justify-center mt-6">
              <div className="relative flex items-center gap-12 w-[100px] h-10">
                <CarouselPrevious className="static translate-y-0 bg-black text-white w-10 h-10" />
                <CarouselNext className="static translate-y-0 bg-black text-white w-10 h-10" />
              </div>
            </div>
          </Carousel>
        </div>
        <Divider />
      </div>
    </section>
  );
};

export default SchoolWiseCohort;
