import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { CourseComeToLifeSection } from "../contentType";

type Props = {
  data: CourseComeToLifeSection;
};

const FaciltiesSlide = ({ data }: Props) => {
  return (
    <Carousel opts={{ align: "start" }} className="w-full">
      <CarouselContent>
        {data?.slides?.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 xl:basis-1/3">
            <div className="relative rounded-2xl overflow-hidden h-[280px] md:h-[300px] xl:h-[400px] shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
              <Image
                src={item.image}
                fill
                alt={item.alt || ""}
                className="w-full object-cover hover:scale-[1.05] transition-transform duration-500 ease-in-out"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="left-0 lg:-left-2.5 bg-[#e31e24] text-white border-none" />
      <CarouselNext className="right-0 lg:-right-2.5 bg-[#e31e24] text-white border-none" />
    </Carousel>
  );
};

export default FaciltiesSlide;
