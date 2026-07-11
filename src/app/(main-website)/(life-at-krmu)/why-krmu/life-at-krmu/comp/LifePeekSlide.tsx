import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
const LifePeekSlide = () => {
  return (
    <>
      <Carousel
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="items-center">
          {Array.from({ length: 13 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="PeekSlideItem flex justify-center"
            >
              <Image
                src={`/life-at-krmu/peek/item-${index + 1}.jpg`}
                width={500}
                height={500}
                alt=""
                className="object-cover w-full h-full"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 rounded-none bg-black text-white " />
        <CarouselNext className="right-0 rounded-none bg-black text-white " />
      </Carousel>
    </>
  );
};

export default LifePeekSlide;
