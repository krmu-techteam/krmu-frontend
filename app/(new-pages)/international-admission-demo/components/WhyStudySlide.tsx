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
    <div className="overflow-hidden">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        {/* <CarouselPrevious className="text-white left-full" /> */}
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="basis-1/2 lg:basis-1/5">
              <WhyStudyCard />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* <CarouselNext /> */}
      </Carousel>
    </div>
  );
};

export default WhyStudySlide;
