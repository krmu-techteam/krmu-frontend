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
  data: StrapiMedia[];
};

const AestheticsCafeteriaSlide = ({ data }: Props) => {
  return (
    <Carousel
      className="w-full"
      opts={{
        loop: true, // <-- ENABLE LOOP
      }}
    >
      <CarouselContent>
        {data.map((item, index) => {
          return (
            <CarouselItem key={index} className="md:basis-1/3">
              <Image
                src={`${STRAPI_URL}${item?.url}`}
                width={600}
                height={438}
                className="w-full"
                alt={item?.alternativeText || ""}
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="left-0 rounded-none bg-black text-white" />
      <CarouselNext className="right-0 rounded-none bg-black text-white" />
    </Carousel>
  );
};

export default AestheticsCafeteriaSlide;
