import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const keicSlideImgages = [
  {
    keicimgurl: "/keic/keic-1.webp",
  },
  {
    keicimgurl: "/keic/keic-2.webp",
  },
  {
    keicimgurl: "/keic/keic-3.webp",
  },
  {
    keicimgurl: "/keic/keic-4.webp",
  },
];

const KeicSlide = () => {
  return (
    <div>
      <Carousel className="w-full">
        <CarouselContent>
          {keicSlideImgages.map((item, index) => (
            <CarouselItem key={index}>
              <Image
                src={item?.keicimgurl}
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

export default KeicSlide;
