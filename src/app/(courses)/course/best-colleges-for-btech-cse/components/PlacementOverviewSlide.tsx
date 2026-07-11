"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

type PlacementItem = {
  name: string;
  company: string;
  package: string;
  image: string;
};

type Props = {
  data: PlacementItem[];
};

const PlacementOverviewSlide = ({ data }: Props) => {
  return (
    <Carousel
      opts={{ align: "start" }}
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
      className="w-full"
    >
      <CarouselContent>
        {data?.map((item, index) => (
          <CarouselItem key={index}>
            <div className="flex flex-row rounded-[24px] overflow-hidden h-[300px] relative bg-[#0e3d8a] border border-white/10 w-[98%] mx-auto transition-all duration-300 text-white md:h-[300px] sm:h-[240px]">

              {/* LEFT */}
              <div className="flex-1 flex flex-col justify-center z-[2] p-5 md:p-6 sm:p-4">
                <h3 className="font-bold text-[1.75rem] md:text-[1.5rem] sm:text-[1.25rem]">
                  {item?.name}
                </h3>

                <p className="mb-4 text-[0.85rem] text-[#cbd5e0]">
                  Placed at - <br />
                  <strong>{item?.company}</strong>
                </p>

                <div className="mt-auto pt-3">
                  <span className="text-sm">Highest Package</span>

                  <h2 className="font-bold text-[2rem] sm:text-[1.8rem]">
                    ₹{item?.package}
                    <small className="text-[0.75rem]"> LPA</small>
                  </h2>
                </div>
              </div>

              {/* RIGHT */}
              <div className="sm:flex-1 sm:relative min-h-[250px]">
                <img
                  src={item?.image}
                  alt={item?.name}
                  loading="lazy"
                  className="absolute bottom-0 right-0 h-full w-auto object-contain object-bottom"
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default PlacementOverviewSlide;