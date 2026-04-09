import Image from "next/image";
import Link from "next/link";

import { getWordImageById } from "@/lib/api/common";

interface HomeNewsEventsCardProps {
  data: {
    id: number;
    title: {
      rendered: string;
    };
    date: string;
    featured_media: number;
    slug: string;
    acf: {
      event_images: number[];
    };
  };
  // data: {
  //   id: number;
  //   title: string;
  //   createdAt: string;
  //   newsmedia: StrapiMedia[];
  //   slug: string;
  // };
}

const HomeNewsEventsCard: React.FC<HomeNewsEventsCardProps> = async ({
  data,
}) => {
  const formattedDate = new Date(data.date).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  console.log(formattedDate, "formattedDate");

  const getImgUrl = await getWordImageById(data?.featured_media);

  return (
    <div>
      <div>
        <Link href={`/events-and-news/${data.slug}`}>
          {getImgUrl && (
            <Image
              src={getImgUrl}
              alt={data.title?.rendered || ""}
              width={466}
              height={312}
              className="w-full rounded-t-3xl object-fill"
            />
          )}
        </Link>
        <div className="pt-5 pl-0 sm:pl-7 text-white">
          <span className="text-sm text-[#898989]">
            Published On: {formattedDate}
          </span>
          <div className="flex flex-col">
            {data?.slug && (
              <Link
                href={`/events-and-news/${data?.slug}`}
                className="font-medium text-xl leading-[1] mt-2.5 mb-4 inline-block h-[50px]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h5
                  dangerouslySetInnerHTML={{
                    __html: data.title?.rendered || "",
                  }}
                />
              </Link>
            )}
            {data?.slug && (
              <Link
                href={`/events-and-news/${data?.slug}`}
                className="text-xs underline italic"
                target="_blank"
                rel="noopener noreferrer"
              >
                Know More
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNewsEventsCard;
