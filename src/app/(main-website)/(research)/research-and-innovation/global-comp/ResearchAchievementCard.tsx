import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
type RASlide = {
  name: string;
  desg: string;
  school: string;
  imgUrl: string;
  certUrl: string;
  content: string;
};

type Props = {
  slide: RASlide[];
};

const ResearchAchievementCard = ({ slide }: Props) => {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {slide.map((item, index) => (
          <CarouselItem key={index}>
            <div className="max-w-[1481px] mx-auto w-full flex flex-col lg:flex-row gap-10 lg:px-10 pb-10">
              <div className="lg:w-3/4 text-white">
                <p className="mb-5">{item?.content}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p>
                      <strong>{item?.name}</strong>
                    </p>
                    <p>
                      <strong>{item?.desg}</strong>
                    </p>
                    <p>
                      <strong>{item?.school}</strong>
                    </p>
                  </div>
                  <div>
                    <Image src={item?.imgUrl} width={100} height={101} alt="" />
                  </div>
                </div>
              </div>
              <div className="lg:w-1/4 flex justify-center">
                <Image src={item?.certUrl} width={282} height={400} alt="" />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-0 rounded-none bg-black text-white opacity-10" />
      <CarouselNext className="right-0 rounded-none bg-black text-white opacity-10" />
    </Carousel>
  );
};

export default ResearchAchievementCard;
