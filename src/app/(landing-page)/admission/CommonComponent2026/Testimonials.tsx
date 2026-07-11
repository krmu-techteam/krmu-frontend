import { TestimonialsSection } from "../law-2026/contentype";
import TestimonialCard from "./Cards/TestimonialCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Props = {
  data: TestimonialsSection;
};

const Testimonials = ({ data }: Props) => {
  return (
    <section className="py-20 sm:pt-20 px-4 lg:pl-20 overflow-hidden w-full">
      <div className="w-full">
        {/* Header */}
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 text-center md:text-left">
            <h4
              className="text-xl md:text-2xl"
              dangerouslySetInnerHTML={{
                __html: data.subheading,
              }}
            />
            <h3
              className="text-2xl md:text-4xl font-semibold text-[#013fa1]"
              dangerouslySetInnerHTML={{ __html: data.heading }}
            />
          </div>
          <div className="w-full lg:w-1/2" />
        </div>

        {/* Carousel */}
        <div className="w-full mt-10">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            {/* <CarouselContent className="mb-10 sm:my-12 sm:pr-[20%]"> */}
            <CarouselContent className="mb-10 sm:my-12">
              {data.testimonials.map((item, index) => (
                // <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-2">
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 pl-2"
                >
                  <TestimonialCard data={item} />
                </CarouselItem>
              ))}
            </CarouselContent>

            {data?.testimonials?.length > 4 && (
              <div className="pt-10 hidden sm:block">
                <CarouselPrevious className="bottom-0 top-full left-[25%] sm:left-0 md:top-0 md:left-[85%] xl:left-[90%] landingpagePrevArrow" />
                <CarouselNext className="bottom-0 top-full md:top-0 right-[25%] sm:right-0 landingpageNextArrow" />
              </div>
            )}
            <div className="sm:hidden">
              <CarouselPrevious className="bottom-0 top-full left-[25%] sm:left-0 md:top-0 md:left-[85%] xl:left-[90%] landingpagePrevArrow" />
              <CarouselNext className="bottom-0 top-full md:top-0 right-[25%] sm:right-0 landingpageNextArrow" />
            </div>
            {/* <div className="pt-10">
              <CarouselPrevious className="bottom-0 top-full left-[25%] sm:left-0 md:top-0 md:left-[85%] xl:left-[90%] landingpagePrevArrow" />
              <CarouselNext className="bottom-0 top-full md:top-0 right-[25%] sm:right-0 landingpageNextArrow" />
            </div> */}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
