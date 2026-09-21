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
    <section>
      <div className="w-full xl:max-w-7xl 2xl:max-w-[1664px] mx-auto px-5 py-10 sm:py-20">
        <div>
          <h4
            className="text-2xl sm:text-4xl xl:text-5xl leading-[1.17] font-semibold text-center text-black lg:pt-2.5 lg:pb-10 lg:text-left"
            dangerouslySetInnerHTML={{
              __html: title || "",
            }}
          />

          <div className="grid gap-5 lg:gap-10  lg:grid-cols-3  xl:grid-cols-3 lg:px-0 mt-5 lg:mt-0 ">
            {newsandeventsdata?.data?.map((item: NewsEventItem, i: number) => (
              <HomeNewsEventsCard key={i} data={item} />
            ))}
          </div>
          <div className="flex justify-center pt-6 sm:pt-12">
            {(newsandeventbtn?.buttonlink || newsandeventbtn?.buttonclass) && (
              <Link
                href={newsandeventbtn?.buttonlink}
                className={` w-full sm:w-auto flex items-center justify-center gap-2 h-14 rounded-md font-medium transition-all  text-[14px] md:text-base leading-none tracking-wide relative overflow-hidden group px-6 bg-[#001732] text-white border-1 border-transparent hover:bg-[#001732] shadow-lg px-6 hover:bg-[#001732] ${newsandeventbtn?.buttonclass || ""}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-800 ease-in-out pointer-events-none"></div>
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
