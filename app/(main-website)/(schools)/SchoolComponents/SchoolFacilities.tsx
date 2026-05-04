"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { FacilitySlide } from "@/lib/types/schools";
import { STRAPI_URL } from "@/app/constant";



type Props = {
  fac_slides: FacilitySlide[];
};

const SchoolFacilities = ({ fac_slides }: Props) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    const updateCurrent = () => setCurrent(api.selectedScrollSnap());
    api.on("select", updateCurrent);
    updateCurrent();
  }, [api]);

  return (
    <div className="pt-[30px] pb-32 px-4 sm:pt-20 sm:pb-40 bg-[#051630]">
      <div className="max-w-[1664px] mx-auto w-full">
        <div className="text-center text-white px-4">
          <h5 className="text-3xl md:text-5xl lg:text-6xl xl:text-[80px] leading-[1.16] font-medium">
            Facilities
          </h5>
        </div>
      </div>

      <div>
        <Carousel
          opts={{
            loop: true,
            align: "center",
          }}
          setApi={setApi}
        >
          <CarouselContent>
            {fac_slides.map((slide, index) => (
              <CarouselItem
                key={slide.id}
                className={`basis-[100%] md:basis-[70%] lg:basis-[60%] p-0 fac_slide ${
                  index === current ? "fac_active_slide" : ""
                }`}
              >
                <h6 className="text-[10px] sm:text-xl md:text-2xl mt-5 font-semibold text-center fac_title text-white">
                  {slide.title}
                </h6>
                <div className="fac_slide_img_container mt-10">
                  <Image
                    src={`${STRAPI_URL}${slide?.facility_img?.url}`}
                    width={1140}
                    height={607}
                    alt={slide.title}
                    className="w-full fac_slide_img"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious
            className="bg-[#2c3a4f] text-[#bfc4ca] hover:bg-[#051630] hover:text-white cursor-pointer buttonPrevNextSize w-[60px] h-[60px]
           top-[118%] sm:top-[115%] md:top-[108%] xl:top-[110%] left-[20%] sm:left-[30%] xl:left-[46%]"
          />
          <CarouselNext
            className="bg-[#2c3a4f] text-[#bfc4ca] hover:bg-[#051630] hover:text-white cursor-pointer buttonPrevNextSize w-[60px] h-[60px] 
            top-[118%] sm:top-[115%] md:top-[108%]  xl:top-[110%] right-[20%] sm:right-[30%] xl:right-[46%]"
          />
        </Carousel>
      </div>
    </div>
  );
};

export default SchoolFacilities;
