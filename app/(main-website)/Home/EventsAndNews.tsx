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
      <div className="w-full xl:max-w-7xl 2xl:max-w-[1664px] mx-auto bg-gray-50 p-5 sm:p-10">
        <div>
          <h4
            className="text-2xl sm:text-4xl xl:text-5xl leading-[1.17] font-semibold text-center text-black lg:pt-2.5 lg:pb-10 lg:text-left"
            dangerouslySetInnerHTML={{
              __html: title || "",
            }}
          />

          <div className="grid gap-5 lg:gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:px-0 mt-5 lg:mt-0">
            {newsandeventsdata?.data?.map((item: NewsEventItem, i: number) => (
              <HomeNewsEventsCard key={i} data={item} />
            ))}
          </div>
          <div className="flex justify-center py-4">
            {(newsandeventbtn?.buttonlink || newsandeventbtn?.buttonclass) && (
              <Link
                href={newsandeventbtn?.buttonlink}
                className={`bg-[#034272] font-semibold text-sm sm:text-base border-2 text-white flex justify-center items-center px-5 py-1.5 rounded-md gap-4 ${newsandeventbtn?.buttonclass || ""}`}
                target="_blank"
                rel="noopener noreferrer"
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
