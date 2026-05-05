"use client";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { StrapiMedia } from "@/lib/types/common";
import { STRAPI_URL } from "@/app/constant";

type Props = {
  logos: StrapiMedia[];
};
const SchoolKnowledgeLogos = ({ logos }: Props) => {
  const getBasis = (len: number) => {
    if (len === 1) return "lg:basis-full";
    if (len === 2) return "lg:basis-1/2";
    if (len === 3) return "lg:basis-1/3";
    if (len === 4) return "lg:basis-1/4";
    return "lg:basis-1/5";
  };

  const basisClass = getBasis(logos?.length || 0);

  return (
    <div className="px-12 rounded-[20px]">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full max-w-6xl mx-auto"
      >
        <CarouselContent className="-ml-4 items-center">
          {logos &&
            logos.map((logo) => {
              return (
                <CarouselItem
                  key={logo?.id}
                  className={`sm:basis-1/2 ${basisClass} pl-4 flex justify-center items-center`}
                >
                  <div className="bg-white rounded-md p-4 w-full h-[120px] flex justify-center items-center shadow-sm border border-gray-100 mb-2">
                    <Image
                      src={`${STRAPI_URL}${logo?.url}`}
                      width={logo?.width || 215}
                      height={logo.height || 115}
                      alt={logo.alternativeText || "Knowledge Partner Logo"}
                      className="h-[80px] w-auto object-contain"
                    />
                  </div>
                </CarouselItem>
              );
            })}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex -left-12" />
        <CarouselNext className="hidden md:flex -right-12" />
      </Carousel>
    </div>
  );
};

export default SchoolKnowledgeLogos;
