import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { ResearchHighlights } from "../types";

const ResearchHighlightSlider = ({
  highlights,
}: {
  highlights: ResearchHighlights[];
}) => {
  return (
    <div>
      <Carousel className="w-full">
        <CarouselContent>
          {highlights &&
            highlights?.map((item, i) => {
              return (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                  <div>
                    <div>
                      <Image
                        src={item?.imageUrl}
                        width={483}
                        height={310}
                        className="w-full h-80"
                        alt=""
                      />
                    </div>
                    <div className="text-center font-poppins mt-2.5">
                      <Link
                        href={item?.link}
                        className="text-white text-[15px]"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item?.content}
                        <Image
                          src="/research/new-icon-gif-animation-14.gif"
                          width={45}
                          height={32}
                          className="inline"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
        </CarouselContent>
        <CarouselPrevious className="left-0 rounded-none bg-black text-white opacity-10" />
        <CarouselNext className="right-0 rounded-none bg-black text-white opacity-10" />
      </Carousel>
    </div>
  );
};

export default ResearchHighlightSlider;
