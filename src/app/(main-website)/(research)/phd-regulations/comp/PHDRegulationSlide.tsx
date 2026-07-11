import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PHDRegulationSlide = () => {
  const PHDRegulationImgs = [
    {
      imgUrl: "/phd-regulation/img-1.jpeg",
    },
    {
      imgUrl: "/phd-regulation/img-2.jpeg",
    },
    {
      imgUrl: "/phd-regulation/img-3.jpeg",
    },
    {
      imgUrl: "/phd-regulation/img-4.jpeg",
    },
    {
      imgUrl: "/phd-regulation/img-5.jpeg",
    },
    {
      imgUrl: "/phd-regulation/img-6.jpeg",
    },
  ];

  return (
    <Carousel className="w-full">
      <CarouselContent>
        {PHDRegulationImgs &&
          PHDRegulationImgs?.map((item, i) => {
            return (
              <CarouselItem key={i}>
                <div>
                  <div>
                    <Image
                      src={item?.imgUrl}
                      width={483}
                      height={310}
                      className="w-full"
                      alt=""
                    />
                  </div>
                </div>
              </CarouselItem>
            );
          })}
      </CarouselContent>
      <CarouselPrevious className="left-0 rounded-none bg-black text-white opacity-10" />
      <CarouselNext className="right-0 rounded-none bg-black text-white opacity-10" />
    </Carousel>
  );
};

export default PHDRegulationSlide;
