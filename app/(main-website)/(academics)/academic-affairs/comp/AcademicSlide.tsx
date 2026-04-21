"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const AcademicImgURL = [
  // { imageUrl: "slide-1.webp" },
  { imageUrl: "slide-2.webp" },
  { imageUrl: "slide-3.webp" },
  { imageUrl: "slide-4.webp" },
  { imageUrl: "slide-5.webp" },
  { imageUrl: "slide-6.webp" },
  { imageUrl: "slide-7.webp" },
  { imageUrl: "slide-8.webp" },
  //   { imageUrl: "slide-9.webp" },
  { imageUrl: "slide-10.webp" },
  { imageUrl: "slide-11.webp" },
];

const AcademicSlide = () => {
  return (
    <section className="bg-[#051630] py-10">
      <div className="max-w-[1664px] mx-auto w-full">
        <Carousel
          className="w-full"
          plugins={[
            Autoplay({
              delay: 1000,
            }),
          ]}
          opts={{
            loop: true, // infinite loop
            align: "start",
          }}
        >
          <CarouselContent className="-ml-1">
            {AcademicImgURL.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/3 lg:basis-1/5 flex justify-center text-white"
              >
                <Image
                  src={`/academics/${item.imageUrl}`}
                  width={150}
                  height={150}
                  alt={`Academic Slide ${index + 1}`}
                  className="object-contain h-[150px]"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default AcademicSlide;
