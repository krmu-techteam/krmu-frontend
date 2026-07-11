import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const iprSlideImgages = [
  {
    iprimgurl: "/ipr/item-1.jpg",
  },
  {
    iprimgurl: "/ipr/item-2.jpg",
  },
  {
    iprimgurl: "/ipr/item-3.jpg",
  },
];

const IPRSlide = () => {
  return (
    <div>
      <Carousel
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {iprSlideImgages.map((item, index) => (
            <CarouselItem key={index}>
              <Image
                src={item?.iprimgurl}
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

export default IPRSlide;
