import StillinDoubtCard from "./StillinDoubtCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const StillinDoubtSlider = () => {
  return (
    <div>
      <Carousel>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 pl-1 lg:basis-1/3">
              <StillinDoubtCard />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 bg-[#e31e24] text-white" />
        <CarouselNext className="right-0 bg-[#e31e24] text-white" />
      </Carousel>
    </div>
  );
};

export default StillinDoubtSlider;
