"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { HearItTestimonials } from "@/lib/api/lkoverview";
import OverviewTestiCard from "./OverviewTestiCard";

interface TestimonialProp {
  testiData: HearItTestimonials[];
}

const OverviewTestimonial = ({ testiData }: TestimonialProp) => {
  return (
    <>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {testiData &&
            testiData.map((item) => {
              return (
                <CarouselItem key={item?.id} className="md:basis-1/2 pt-4 flex">
                  <OverviewTestiCard
                    profilename={item?.name}
                    info={item?.info}
                    qualification={item?.qualification}
                    profileImage={item?.img}
                  />
                </CarouselItem>
              );
            })}
        </CarouselContent>
        <CarouselPrevious
          className="bg-[#051630] text-white hover:bg-[#0060aa] border-none w-[50px] h-[50px] md:w-[60px] md:h-[60px] top-[110%] left-[20%] sm:left-[30%] xl:top-[85%] xl:left-[-66.5%]"
        />
        <CarouselNext
          className="bg-[#051630] text-white hover:bg-[#0060aa] border-none w-[50px] h-[50px] md:w-[60px] md:h-[60px] top-[110%] right-[20%] sm:right-[30%] xl:top-[85%] xl:left-[-56.5%]"
        />
      </Carousel>
    </>
  );
};

export default OverviewTestimonial;
