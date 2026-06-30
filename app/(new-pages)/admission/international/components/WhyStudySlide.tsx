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
    <div className="">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <div className="absolute -bottom-11 sm:-top-14 xl:-top-20 right-0  flex gap-4 z-20 w-[130px] h-12">
          <CarouselPrevious className="left-0 text-white bg-transparent border-4 border-white w-12 h-12 intPrevBtn disabled:border-white-[#a8bacf]" />
          <CarouselNext className="right-0 text-white bg-transparent border-4 border-white w-12 h-12 intNextBtn" />
        </div>

        <CarouselContent>
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="sm:basis-1/2 lg:basis-1/3 xl:basis-1/5"
            >
              <WhyStudyCard />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default WhyStudySlide;
