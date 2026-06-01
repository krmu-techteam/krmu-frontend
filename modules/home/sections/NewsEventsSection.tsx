 

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Carousel } from '@/components/common/Carousel';
import { getNewsEventsWP } from '@/lib/api/news-events';
import { NewsEventItem } from '@/lib/types/news-events';
import { ButtonType } from '@/lib/types/common';
import { EventAndNewsCard } from '../components';

export default async function NewsEventsSection({
  title,
  newsandeventbtn,
}: {
  title?: string;
  newsandeventbtn?: ButtonType;
}) {
  const newsandeventsdata = await getNewsEventsWP(1, 10);
  return (
    <section 
      className="relative w-full py-6 md:py-10 lg:py-16 xl:py-20 overflow-hidden font-poppins"
    >
      <div 
        className="absolute -top-[100px] left-[88%] -translate-x-1/2 w-[948px] h-[948px] bg-[radial-gradient(circle_at_center,rgba(0,162,255,0.05)_0%,transparent_85%)] rounded-full blur-[140px] z-0 pointer-events-none transition-opacity"
        style={{ opacity: 0.66 }}
      ></div>

      <div className="w-full max-w-[1530px] mx-auto px-4 md:px-16 2xl:px-0 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-6 md:mb-6">
          <h2 className="text-3xl md:text-[45px] font-serif font-bold text-white leading-tight" dangerouslySetInnerHTML={{ __html: title || "" }}></h2>
          {(newsandeventbtn?.buttonlink || newsandeventbtn?.buttontext) && (
            <Link 
              href={newsandeventbtn?.buttonlink || "#"} 
              className="flex cursor-pointer items-center gap-2 text-white/80 hover:text-white transition-colors text-sm font-medium group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-6 h-6 rounded-full border border-white flex items-center justify-center transition-all overflow-hidden relative shadow-lg">
                <ArrowRight className="w-3.5 h-3.5 text-white transition-all duration-500 ease-in-out transform group-hover:translate-x-5 group-hover:opacity-0" />
                <ArrowRight className="w-3.5 h-3.5 text-white transition-all duration-500 ease-in-out absolute -translate-x-5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
              </div>
              <span className="font-normal tracking-wide text-md">Explore</span>
              {/* <span className="font-normal tracking-wide text-md">{newsandeventbtn?.buttontext || "Explore"}</span> */}
            </Link>
          )}
        </div>

        <Carousel
          options={{ loop: true, align: 'start' }}
          showArrows={false}
          autoplayDelay={5000}
          containerClassName="-ml-3"
          slideClassName="pl-1 basis-[85%] md:basis-1/2 lg:basis-1/4"
        >
          {newsandeventsdata?.data?.map((event: NewsEventItem, i: number) => (
            <div 
              key={i} 
              className="group cursor-pointer py-2"
            >
              <EventAndNewsCard data={event} />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

