import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const cifSlideImgages = [
  {
    cifimgurl: "/cif/item-1.webp",
  },
  {
    cifimgurl: "/cif/item-2.webp",
  },
  {
    cifimgurl: "/cif/item-3.webp",
  },
  {
    cifimgurl: "/cif/item-4.webp",
  },
];

const CIFSlide = () => {
  return (
    <div>
      <Carousel className="w-full">
        <CarouselContent>
          {cifSlideImgages.map((item, index) => (
            <CarouselItem key={index}>
              <Image
                src={item?.cifimgurl}
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

export default CIFSlide;
