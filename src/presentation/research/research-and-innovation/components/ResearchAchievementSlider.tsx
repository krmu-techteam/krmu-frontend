import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ResearchAchievement } from "@/features/research/research-and-innovation/types";

const ResearchAchievementSlider = ({
  achievements,
}: {
  achievements?: ResearchAchievement[];
}) => {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {achievements?.map((item, index) => (
          <CarouselItem key={index}>
            <div className="max-w-[1530px] mx-auto w-full flex flex-col lg:flex-row gap-10 lg:px-10 pb-10">
              <div className="lg:w-3/4 text-white">
                <p className="mb-5 font-poppins">{item?.content}</p>
                <div className="flex items-center justify-between">
                  <div className="font-poppins font">
                    <p>
                      <span className="text-white font-semibold">
                        {item?.name}
                      </span>
                    </p>
                    <p className="text-white font-light">{item?.designation}</p>
                    <p className="text-white font-light">{item?.school}</p>
                  </div>
                  <div>
                    <Image
                      src={item?.imageUrl}
                      width={100}
                      height={101}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="lg:w-1/4 flex justify-center">
                <Image
                  src={item?.certificateUrl}
                  width={282}
                  height={400}
                  alt=""
                />
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

export default ResearchAchievementSlider;
