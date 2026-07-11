"use client";
import { STRAPI_URL } from "@/app/constant";
import { NewsItem } from "@/lib/api/overviewslide";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";
import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

type Props = {
  data: NewsItem[];
};

const OverviewUpdatedSlide = ({ data }: Props) => {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <>
      <Carousel
        className="w-full"
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          loop: true, 
          align: "center",
        }}
      >
        <CarouselContent>
          {data &&
            data.map((item, i) => (
              <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3 flex pb-5">
                <div className="pt-2.5 px-2.5 pb-5 bg-[#172a45] rounded-sm flex flex-col h-full w-full">
                  <Image
                    src={`${STRAPI_URL}${item?.newsmedia?.[0]?.url}`}
                    width={338}
                    height={263}
                    alt={item?.title || "news image"}
                    className="w-full rounded-xs object-cover aspect-[4/3]"
                    unoptimized
                  />

                  <div className="text-white mt-5 flex flex-col flex-grow items-center text-center">
                    <h4 className="text-xl font-semibold mb-6 line-clamp-2">
                      {item?.title}
                    </h4>

                    <div className="line-clamp-2 flex-grow mb-4">
                      <BlocksRenderer content={item.content} />
                    </div>

                    {item?.slug && (
                      <Link
                        href={`/events-and-news/${item.slug}`}
                        className="text-white text-xs underline underline-offset-2 mt-auto w-fit"

                        target="_blank" rel="noopener noreferrer"
                      >
                        Show More
                      </Link>
                    )}
                  </div>
                </div>
              </CarouselItem>
            ))}
        </CarouselContent>

        <CarouselPrevious className="-left-6 bg-white/10 hover:bg-[#0060aa] text-white border-none backdrop-blur-sm transition-all w-10 h-10" />
        <CarouselNext className="-right-6 bg-white/10 hover:bg-[#0060aa] text-white border-none backdrop-blur-sm transition-all w-10 h-10" />
      </Carousel>
    </>
  );
};

export default OverviewUpdatedSlide;
