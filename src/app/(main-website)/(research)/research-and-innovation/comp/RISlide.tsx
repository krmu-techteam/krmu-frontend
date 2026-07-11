import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type SlideProps = {
  imgUrl: string;
};

type Props = {
  slide: SlideProps[];
};

const RISlide = ({ slide }: Props) => {
  return (
    <div>
      <Carousel className="w-full">
        <CarouselContent>
          {slide.map((item, index) => (
            <CarouselItem key={index}>
              <Image
                src={item?.imgUrl}
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

export default RISlide;
