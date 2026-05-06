"use client";

import TestimonialCard from "./schoolglobalcomponent/TestimonialCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SchoolTestimonials } from "@/lib/types/schools";
import Autoplay from "embla-carousel-autoplay";

type Props = {
  testimonials: SchoolTestimonials[];
};

const SchoolTestimonialsCard = ({ testimonials }: Props) => {
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
          {testimonials &&
            testimonials.map((testimonial) => {
              return (
                <CarouselItem
                  key={testimonial?.id}
                  className="md:basis-1/2 py-5"
                >
                  <TestimonialCard
                    name={testimonial?.name}
                    edu={testimonial?.education}
                    desc={testimonial?.info}
                    img={testimonial?.userimg}
                  />
                </CarouselItem>
              );
            })}
        </CarouselContent>
        <CarouselPrevious
          className="bg-[#2c3a4f] text-[#bfc4ca] hover:bg-[#051630] hover:text-white cursor-pointer buttonPrevNextSize w-[60px] h-[60px]
         top-[105%] left-[20%] sm:left-[30%] xl:top-[80%] xl:left-[-66%]"
        />
        <CarouselNext
          className="bg-[#2c3a4f] text-[#bfc4ca] hover:bg-[#051630] hover:text-white cursor-pointer buttonPrevNextSize w-[60px] h-[60px] 
         top-[105%] right-[20%] sm:right-[30%] xl:top-[80%] xl:right-[152%]"
        />
      </Carousel>
      {/* <TestimonialCard /> */}
    </>
  );
};

export default SchoolTestimonialsCard;
