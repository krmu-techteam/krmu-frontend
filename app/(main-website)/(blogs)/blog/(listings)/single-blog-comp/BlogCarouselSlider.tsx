"use client";

import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export type BlogSlide = {
  title: string;
  slug: string;
  imgUrl: string;
  date: string;
};

type Props = {
  slides: BlogSlide[];
};

const BlogCarouselSlider = ({ slides }: Props) => {
  const autoplay = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true }),
  );

  if (!slides.length) return null;

  return (
    <Carousel
      plugins={[autoplay.current]}
      opts={{ align: "start", loop: true }}
      className="w-full h-auto "
    >
      <CarouselContent className="mx-.5 ">
        {slides.map((blog, i) => {
          const postDate = new Date(blog.date).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
          });

          return (
            <CarouselItem
              key={i}
              className="basis-full  sm:basis-1/2 lg:basis-1/3"
            >
              <Link
                href={`/blog/${blog.slug}`}
                className="block w-full rounded-[24px] h-full overflow-hidden transition-transform duration-300 hover:scale-[1.02] border-1 border-[#c6dcfd] "
                style={{ boxShadow: "0px 0px 2px 0px #c6dcfd" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="p-2.5 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative">
                    <span className="absolute bottom-0 right-0 text-xs bg-red-600 text-white py-2.5 px-5 rounded-tl-[24px] z-10">
                      {postDate}
                    </span>
                    <Image
                      src={blog.imgUrl}
                      width={426}
                      height={284}
                      alt={blog.title}
                      className="rounded-[24px] lg:h-[270px] w-full lg:object-cover object-contain"
                    />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col flex-1 pt-3">
                    <p
                      dangerouslySetInnerHTML={{ __html: blog.title }}
                      className="text-[#093475] font-bold text-lg leading-[1.3] mb-3 line-clamp-2"
                    />
                    <span className="text-[#093475] text-base font-normal mt-auto">
                      Read More
                    </span>
                  </div>
                </div>
              </Link>
            </CarouselItem>
          );
        })}
      </CarouselContent>

      <CarouselPrevious className="left-0 bg-[#093475] text-white hover:bg-[#093475]/80 hover:text-white border-none" />
      <CarouselNext className="right-0 bg-[#093475] text-white hover:bg-[#093475]/80 hover:text-white border-none" />
    </Carousel>
  );
};

export default BlogCarouselSlider;
