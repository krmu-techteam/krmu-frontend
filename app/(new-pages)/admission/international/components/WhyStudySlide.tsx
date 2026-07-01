import { whyStudyData } from "../constant";
import WhyStudyCard from "./cards/WhyStudyCard";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const WhyStudySlide = () => {
  return (
    <div>
      <Carousel
        opts={{
          align: "start",
          // loop: true,
        }}
        className="w-full"
      >
        <div className="absolute -bottom-11 sm:-top-14 xl:-top-20 right-5 flex gap-4 z-20 w-[110px] h-12">
          <CarouselPrevious className="left-0 text-white bg-transparent border-4 border-white w-12 h-12 intPrevBtn disabled:border-white-[#a8bacf] disable:bg-[#001732]" />
          <CarouselNext className="right-0 text-white bg-transparent border-4 border-white w-12 h-12 intNextBtn disabled:border-white-[#a8bacf] disable:bg-[#001732]" />
        </div>

        <CarouselContent>
          {whyStudyData.map((item) => (
            <CarouselItem
              key={item.id}
              className="sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <WhyStudyCard
                title={item.title}
                description={item.description}
                image={item.image}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default WhyStudySlide;