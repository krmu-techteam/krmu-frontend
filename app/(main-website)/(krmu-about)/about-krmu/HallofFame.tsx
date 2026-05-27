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
      <div className="mb-5">
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
                    className="md:basis-1/2 xl:basis-1/3 bg-[url(/honor.webp)] bg-no-repeat bg-cover bg-center"
                  >
                    <div className="text-base text-white text-center h-[300px] sm:h-[350px] md:h-[400px] flex items-center justify-center flex-col py-2.5 px-4 sm:px-8 md:px-16">
                      <h4 className="text-xl sm:text-2xl md:text-3xl pr-8 pl-4">
                        {fame?.title}
                      </h4>
                      <p className="text-sm sm:text-base p-2.5 sm:p-5 md:p-6 pr-8 pl-4">
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
