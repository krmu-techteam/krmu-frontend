import { getWordImageById } from "@/lib/api/common";
import { STRAPI_URL } from "@/app/constant";
import Image from "next/image";
import Link from "next/link";
import BackButton from "./BackButton";
import SectionDivider from "@/components/common/SectionDivider";

type Props = {
  title?: string;
  bgSlideImageIds?: number[];
  bgSlideImageUrls?: string[];
  content: string;
};

const NewsEventsImageContent = async ({
  title,
  bgSlideImageIds,
  bgSlideImageUrls,
  content,
}: Props) => {
  let imageUrls: string[] = [];

  if (bgSlideImageIds && bgSlideImageIds.length > 0) {
    const fetchedUrls = await Promise.all(
      bgSlideImageIds.map((id) => getWordImageById(id)),
    );
    imageUrls = fetchedUrls.filter((url): url is string =>
      Boolean(url && typeof url === "string" && url.trim().length > 0),
    );
  } else if (bgSlideImageUrls && bgSlideImageUrls.length > 0) {
    const baseUrl = STRAPI_URL || "";
    imageUrls = bgSlideImageUrls.map((url) =>
      url.startsWith("http") ? url : `${baseUrl}${url}`,
    );
  }

  return (
    <section className="relative pt-36 md:pt-40 pb-16 px-4 md:px-10 max-w-[1530px] mx-auto w-full font-poppins">
      <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-8">
        {/* Left Main Section (Title, Images, Content) */}
        <div className="flex-1 w-full lg:max-w-[calc(100%-320px-3rem)]">
          {/* Header Title with Back Button */}
          {title && (
            <div className="flex items-start gap-4 md:gap-6 mb-4">
              <div className="shrink-0 mt-1 md:mt-2.5">
                <BackButton />
              </div>
              <h1
                className="text-2xl md:text-4xl lg:text-[47px] font-serif font-normal text-white leading-tight tracking-normal"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            </div>
          )}

          {/* Event Images Grid (Above Content) */}
          {imageUrls?.length > 0 && (
            <div className="grid grid-cols-2 mb-6">
              {imageUrls.map((imgUrl, i) => (
                <div key={i} className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={imgUrl}
                    fill
                    alt={title || "Event Image"}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Content Description (Below Images) */}
          <div
            className="text-white/90 text-base md:text-[22px] leading-normal text-justify space-y-4 font-normal tracking-wide [&>p]:mb-4 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mb-3 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mb-2 [&>ul]:list-disc [&>ul]:pl-5 [&>ol]:list-decimal [&>ol]:pl-5"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>

        {/* Right Side Banner Section */}
        <div className="w-full lg:w-[320px] shrink-0 flex justify-center lg:justify-end">
          <div className="sticky top-28 w-full max-w-[380px]">
            <Link
              href="https://admissions.krmangalam.edu.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative overflow-hidden"
            >
              <Image
                src="/images/news-and-events/event-banner.jpg"
                width={320}
                height={680}
                alt="Why Wait For Success - KRMU Admissions"
                className="w-full h-auto object-contain"
                priority
              />
            </Link>
          </div>
        </div>
      </div>
      <SectionDivider maxWidth="1530px" />
    </section>
  );
};

export default NewsEventsImageContent;
