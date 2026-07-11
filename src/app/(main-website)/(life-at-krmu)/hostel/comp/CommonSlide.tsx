import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

type SlideType = {
  imgUrl: string;
};

type Props = {
  data: SlideType[];
};

const CommonSlide = ({ data }: Props) => {
  return (
    <Carousel
      className="w-full"
      opts={{
        loop: true, // <-- ENABLE LOOP
      }}
    >
      <CarouselContent>
        {data.map((item, index) => (
          <CarouselItem
            key={index}
            className="relative w-full h-[200px] lg:h-[438px]"
          >
            <Image
              src={item?.imgUrl}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              alt="carousel image"
              priority={index === 0} // optional (for first image)
            />
          </CarouselItem>
          // <CarouselItem key={index} className="min-h-[438]">
          //   <Image
          //     src={item?.imgUrl}
          //     // width={600}
          //     // height={438}
          //     className="w-full"
          //     alt=""
          //   />
          // </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-0 rounded-none bg-black text-white" />
      <CarouselNext className="right-0 rounded-none bg-black text-white" />
    </Carousel>
  );
};

export default CommonSlide;
