import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CIFGalleryImages } from "@/features/research/cif/types";

const CIFGallerySlider = ({images}:{images:CIFGalleryImages[]}) => {
  return (
    <div>
      <Carousel className="w-full">
        <CarouselContent>
          {images?.map((item, index) => (
            <CarouselItem key={index}>
              <Image
                src={item?.url}
                width={600}
                height={438}
                className="w-full"
                alt={`cif-image-${index}`}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 rounded-none bg-black text-white opacity-10" />
        <CarouselNext className="right-0 rounded-none bg-black text-white opacity-10" />
      </Carousel>
    </div>
  );
};

export default CIFGallerySlider;
