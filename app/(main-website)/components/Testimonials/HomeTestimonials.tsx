"use client";

import { TestimonialItem } from "@/lib/constants/testimonial";
import HomeTestimonialCard from "../Cards/HomeTestimonialCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface TestimonialProp {
  testiData: TestimonialItem[];
}

const HomeTestimonials = ({ testiData }: TestimonialProp) => {
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
                <CarouselItem key={item?.id} className="md:basis-1/2">
                  <HomeTestimonialCard
                    profilename={item?.profilename}
                    info={item?.profileinfo}
                    desg={item?.profiledesignation}
                    profileImage={item?.profile}
                  />
                </CarouselItem>
              );
            })}
        </CarouselContent>
        <CarouselPrevious
          className="bg-[#2c3a4f] text-[#bfc4ca] hover:bg-[#051630] hover:text-white cursor-pointer buttonPrevNextSize w-[60px] h-[60px]
         top-[115%] left-[20%] sm:left-[30%] xl:top-[88%] xl:left-[-66%]"
        />
        <CarouselNext
          className="bg-[#2c3a4f] text-[#bfc4ca] hover:bg-[#051630] hover:text-white cursor-pointer buttonPrevNextSize w-[60px] h-[60px] 
         top-[115%] right-[20%] sm:right-[30%] xl:top-[88%] xl:right-[145%]"
        />
      </Carousel>
    </>
  );
};

export default HomeTestimonials;
