import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type slideProps = {
  imgUrl: string;
};

type Props = {
  pastEvents: slideProps[];
};

const KEICPastEventSlide = ({ pastEvents }: Props) => {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {pastEvents &&
          pastEvents?.map((item, i) => {
            return (
              <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/4">
                <div>
                  <div>
                    <Image
                      src={item?.imgUrl}
                      width={483}
                      height={310}
                      className="w-full h-80"
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

export default KEICPastEventSlide;
