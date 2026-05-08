import { STRAPI_URL } from "@/app/constant";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { StrapiMedia } from "@/lib/types/common";
import Image from "next/image";

type Props = {
  slides: StrapiMedia[];
};

const AccordionSlide = ({ slides }: Props) => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full relative group"
    >
      <CarouselContent className="-ml-4">
        {slides &&
          slides.map((image, index) => (
            <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
              <div className="relative aspect-[4/3] rounded-xs overflow-hidden border border-slate-100 shadow-sm group/item">
                <Image
                  src={`${STRAPI_URL}${image?.url}`}
                  fill
                  alt={image?.alternativeText || "club activity"}
                  className="object-cover transition-transform duration-500 group-hover/item:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </CarouselItem>
          ))}
      </CarouselContent>
      {slides?.length > 1 && (
        <div className="flex justify-end gap-2 mt-6">
          <CarouselPrevious className="static translate-y-0 bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 shadow-sm transition-colors" />
          <CarouselNext className="static translate-y-0 bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 shadow-sm transition-colors" />
        </div>
      )}
    </Carousel>
  );
};

export default AccordionSlide;
