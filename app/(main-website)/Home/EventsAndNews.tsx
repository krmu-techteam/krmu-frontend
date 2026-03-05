import HomeNewsEventsCard from "../components/Cards/HomeNewsEventsCard";

import Link from "next/link";
import { ButtonType } from "@/lib/types/common";
import { getNewsEventsWP } from "@/lib/api/news-events";
import { NewsEventItem } from "@/lib/types/news-events";

interface HomeEventsNewsProp {
  title: string;
  newsandeventbtn: ButtonType;
}

const EventsAndNews = async ({
  title,
  newsandeventbtn,
}: HomeEventsNewsProp) => {
  const newsandeventsdata = await getNewsEventsWP(1, 3);

  return (
    <section className="bg-[url(/homenewsevent.webp)] bg-cover bg-no-repeat pb-12 px-4 lg:pb-20">
      <div className="w-full max-w-[1664px] mx-auto">
        <div>
          <h4 className="text-4xl leading-[1.17] font-semibold text-center text-white lg:pt-2.5 lg:pb-10 lg:text-left">
            {title}
          </h4>
          <div className="grid gap-5 lg:gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:px-0 mt-5 lg:mt-0">
            {newsandeventsdata?.data?.map((item: NewsEventItem, i: number) => (
              <HomeNewsEventsCard key={i} data={item} />
            ))}
          </div>
          <div className="flex justify-center py-4">
            {(newsandeventbtn?.buttonlink || newsandeventbtn?.buttonclass) && (
              <Link
                href={newsandeventbtn?.buttonlink}
                className={`py-2 px-[18px] text-white bg-[#034272] hover:bg-[#034272] inline-block rounded-md text-base md:text-xl font-bold ${newsandeventbtn?.buttonclass}`}
                target="_blank" rel="noopener noreferrer"
              >
                {newsandeventbtn?.buttontext}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsAndNews;
