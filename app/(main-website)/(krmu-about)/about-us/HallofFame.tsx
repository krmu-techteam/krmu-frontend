"use client";

import { HALLFAME } from "@/lib/types/about";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface HALLFAMEPROP {
  fameData: HALLFAME[];
}

const HallofFame: React.FC<HALLFAMEPROP> = ({ fameData }) => {
  return (
    <>
      <div className="mb-5 px-4">
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
            {fameData &&
              fameData.map((fame) => {
                return (
                  <CarouselItem
                    key={fame?.id}
                    className="xs:basis-1/3 sm:basis-1/2 md:basis-1/2 xl:basis-1/3 pr-4 py-8  bg-[url(/honor.webp)] bg-no-repeat bg-contain bg-center"
                  >
                    <div className="text-base text-white text-center h-[300px] sm:h-[350px] md:h-[400px] flex items-center justify-center flex-col py-2.5 px-4 sm:px-8 md:px-6">
                      <h4 className="text-lg xs:text-lg sm:text-lg md:text-xl lg:text-3xl pr-8 pl-6">
                        {fame?.title}
                      </h4>
                      <p className="text-sm sm:text-base p-2.5 sm:p-5 md:px-14 px-6 ">
                        {fame?.description}
                      </p>
                    </div>
                  </CarouselItem>
                );
              })}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
};

export default HallofFame;
