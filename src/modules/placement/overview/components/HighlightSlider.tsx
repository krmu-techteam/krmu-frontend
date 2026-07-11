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
  slideImages: StrapiMedia[];
};

const ProgramHighlightSlider = ({ slideImages }: Props) => {
  return (
    <>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {slideImages.map((image, index) => (
            <CarouselItem key={index} className="basis-1/2 sm:basis-1/4">
              <div>
                <Image
                  src={`${STRAPI_URL}${image?.url}`}
                  width={390}
                  height={390}
                  alt={image?.alternativeText || "programme highlight"}
                  className="w-full h-full"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 bg-[#000000b2] text-white rounded-none" />
        <CarouselNext className="right-0 bg-[#000000b2] text-white rounded-none" />
      </Carousel>
    </>
  );
};

export default ProgramHighlightSlider;
