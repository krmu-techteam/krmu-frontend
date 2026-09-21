"use client";

import { STRAPI_URL } from "@/app/constant";
import { StrapiMedia } from "@/lib/types/common";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface ACCREDIATIONLOGOPROP {
  logosData: StrapiMedia[]; 
}

const AccrediationLogo: React.FC<ACCREDIATIONLOGOPROP> = ({ logosData }) => {
  return (
    <>
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
          {logosData &&
            logosData.map((logo) => {
              return (
                <CarouselItem
                  key={logo?.id}
                  className="basis-1/3 lg:basis-1/7"
                >
                  <div className="p-1.5">
                    <div className="flex justify-center items-center h-32 bg-white border border-slate-200 rounded-sm shadow-sm hover:shadow-md hover:border-[#00A0E3]/30 transition-all duration-300 group overflow-hidden">
                      <Image
                        src={`${STRAPI_URL}${logo?.url}`}
                        width={140}
                        height={140}
                        className="object-contain group-hover:scale-110 transition-transform duration-300"
                        alt={logo?.alternativeText || "Accrediation Logo"}
                      />
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
        </CarouselContent>
        <CarouselPrevious className="bg-black text-white rounded-none left-0" />
        <CarouselNext className="bg-black text-white rounded-none right-0" />
      </Carousel>
    </>
  );
};

export default AccrediationLogo;
