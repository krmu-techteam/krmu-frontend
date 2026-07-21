"use client";

import Autoplay from "embla-carousel-autoplay";
import { useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import CommonBlogCard from "../comp/CommonBlogCard";
import { MainBlogs } from "@/lib/types/blogs/main-blogs";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  blogs: MainBlogs[];
};

const BlogCarouselSlider = ({ blogs }: Props) => {
  const [api, setApi] = useState<CarouselApi>();
  const autoplay = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true }),
  );

  if (!blogs.length) return null;

  return (
    <div className="w-full relative">
      <Carousel
        setApi={setApi}
        plugins={[autoplay.current]}
        opts={{ align: "start", loop: true }}
        className="w-full h-auto"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            Recent blogs
          </h2>
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => api?.scrollPrev()}
              aria-label="Previous slide"
              type="button"
              className="w-9 h-9 rounded-full border border-white/30 bg-transparent text-white/80 hover:text-white hover:border-white hover:bg-white/10 flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95 z-20"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => api?.scrollNext()}
              aria-label="Next slide"
              type="button"
              className="w-9 h-9 rounded-full border border-white/30 bg-transparent text-white/80 hover:text-white hover:border-white hover:bg-white/10 flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95 z-20"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <CarouselContent className="-ml-4">
          {blogs.map((blog) => (
            <CarouselItem
              key={blog.id}
              className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <CommonBlogCard
                title={blog.title.rendered}
                excerpt={blog.excerpt?.rendered || ""}
                slug={blog.slug}
                imgId={blog.featured_media}
                date={blog.date_gmt}
                categoryName={
                  blog._embedded?.["wp:term"]?.[0]?.[0]?.name || "KRMU Blog"
                }
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default BlogCarouselSlider;
