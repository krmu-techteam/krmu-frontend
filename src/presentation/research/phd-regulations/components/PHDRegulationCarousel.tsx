import Image from "next/image";
import { Carousel } from "@/components/common/Carousel";
import { PHD_REGULATION_IMGS } from "@/features/research/phd-regulations";

const PHDRegulationCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      showDots={false}
      className="w-full"
      slideClassName="basis-full"
      options={{ loop: true }}
      autoplay={true}
      autoplayDelay={4000}
      prevArrowClassName="!left-2 md:!left-2 !bg-[#061623] !rounded-xs !border-[1px] !border-[#061623]"
      nextArrowClassName="!right-2 md:!right-2 !bg-[#061623] !rounded-xs !border-[1px] !border-[#061623]"
    >
      {PHD_REGULATION_IMGS &&
        PHD_REGULATION_IMGS?.map((item, i) => {
          return (
            <div key={i} className="w-full relative">
              <Image
                src={item?.imgUrl}
                width={483}
                height={310}
                className="w-full h-auto object-cover"
                alt=""
              />
            </div>
          );
        })}
    </Carousel>
  );
};

export default PHDRegulationCarousel;
