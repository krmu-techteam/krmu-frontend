import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ScholarTestimonialCard from "./ScholarTestimonialCard";
import { ScholarTestimonial } from "./ScholarTestimonials";

type Props = {
  data: ScholarTestimonial[];
};

const ScholarTestimonialSlide = ({ data }: Props) => {
  return (
    <div className="testimonials">
      <Carousel opts={{ align: "start", loop: true }} className="w-full">
        <CarouselContent>
          {data.map((item) => (
            <CarouselItem key={item.id} className="md:basis-1/2 xl:basis-1/3">
              <ScholarTestimonialCard
                image={item.image}
                name={item.name}
                course={item.course}
                content={item.content}
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="top-[110%] left-[20%] sm:left-[30%] xl:left-[88%] bg-[#051630] text-white w-16 h-16 scholTestibtn" />
        <CarouselNext className="top-[110%] right-[20%] sm:right-[40%] xl:right-0 bg-[#051630] text-white w-16 h-16 scholTestibtn" />
      </Carousel>
    </div>
  );
};

export default ScholarTestimonialSlide;
