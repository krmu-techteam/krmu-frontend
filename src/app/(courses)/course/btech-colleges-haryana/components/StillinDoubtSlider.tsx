import { courseTestimonials } from "../content";
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
          {courseTestimonials.map((item) => (
            <CarouselItem
              key={item.id}
              className="md:basis-1/2 pl-1 lg:basis-1/3"
            >
              <StillinDoubtCard data={item} />
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
