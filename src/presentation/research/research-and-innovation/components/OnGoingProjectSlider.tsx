import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { OnGoingProjectsImages } from "@/features/research/research-and-innovation";

const OnGoingProjectSlider = ({
  images,
}: {
  images: OnGoingProjectsImages[];
}) => {
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
                alt=""
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

export default OnGoingProjectSlider;
