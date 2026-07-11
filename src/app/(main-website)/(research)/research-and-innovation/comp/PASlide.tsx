import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

type SlideProps = {
  imgUrl: string;
  link: string;
  content: string;
};

type Props = {
  slide: SlideProps[];
};

const PASlide = ({ slide }: Props) => {
  return (
    <div>
      <Carousel className="w-full">
        <CarouselContent>
          {slide &&
            slide?.map((item, i) => {
              return (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
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
                    <div className="text-center mt-2.5">
                      <Link
                        href={item?.link}
                        className="text-white"
                        target="_blank" rel="noopener noreferrer"
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

export default PASlide;
