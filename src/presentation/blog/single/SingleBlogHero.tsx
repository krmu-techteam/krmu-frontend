import Image from "next/image";
import NoPaperFormsWidget from "../components/NoPaperFormsWidget";
import { checkImage } from "../components/CommonBlogCard";

type SingleBlogProps = {
  title: string;
  imgUrl: string;
  authorName: string;
  date: string;
  authorDesignation: string;
  imgId: number;
  authorSlug: string;
};

const SingleBlogHero = async ({
  title,
  imgUrl,
  authorName,
  date,
  authorDesignation,
  imgId,
  authorSlug,
}: SingleBlogProps) => {
  const normalizedImgUrl = imgUrl
    ?.replace("/blog/wp-content", "/wp-content")
    ?.replace("wp.krmangalam.edu.in", "www.krmangalam.edu.in");

  let finalImage: string | null = null;

  if (await checkImage(imgUrl)) {
    finalImage = imgUrl;
  } else if (await checkImage(normalizedImgUrl)) {
    finalImage = normalizedImgUrl;
  }

  // Format date like "July 15, 2026"
  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "July 15, 2026";

  return (
    <section className="pt-[110px] md:pt-[155px] pb-6 md:pb-8 overflow-hidden">
      <div className="max-w-[1530px] mx-auto w-full px-6 md:px-8 relative z-10 flex flex-col gap-6 md:gap-8">
        {/* Main Grid: Left Featured Banner + Right Admission Form */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 xl:gap-[31px] w-full">
          {/* LEFT COLUMN: Featured Image with Overlay Badge & Accent Strip */}
          <div className="w-full lg:flex-1 flex flex-col overflow-hidden bg-[#111d32] shadow-xl">
            {/* Image Wrapper — aspect-ratio scales correctly on all screen sizes */}
            <div className="relative w-full aspect-[16/9] overflow-hidden flex flex-col justify-end">
              {finalImage ? (
                <Image
                  src={finalImage}
                  alt={title || "Blog Hero Image"}
                  fill
                  priority
                  className="object-cover object-center"
                  unoptimized
                />
              ) : (
                <Image
                  src="/images/blog/hero/hero.jpg"
                  alt="Default Blog Image"
                  fill
                  priority
                  className="object-cover object-center"
                  unoptimized
                />
              )}
            </div>

            {/* ACCENT STRIP (50% Blue on left, 50% Red on right) - Under the Image Block */}
            <div className="w-full flex h-[8px] mt-0 flex-shrink-0">
              <div className="bg-[#0b4c8c] w-1/2" />
              <div className="bg-[#e50914] w-1/2" />
            </div>
          </div>

          {/* RIGHT COLUMN: Admission Open Form Card */}
          <div className="w-full lg:w-[300px] xl:w-[370px] h-auto xl:h-[563px] 2xl:h-[592px] bg-white rounded-[8px] p-3 sm:p-4 pt-3 sm:pt-4 shadow-2xl flex flex-col justify-between text-black flex-shrink-0 border border-[#d2d2d2]">
            <div>
              <h2 className="text-xl sm:text-[22px] font-bold text-center text-black mb-1 font-poppins tracking-tight">
                Admission Open
              </h2>

              {/* Live NPF Admission Open Widget */}
              <div className="w-full overflow-hidden rounded-[8px]">
                {/* Desktop: 510px height */}
                <div className="hidden lg:block">
                  <NoPaperFormsWidget
                    widgetId="0d2d6e28c86e4213b353bfe132035965"
                    height="510px"
                  />
                </div>
                {/* Mobile/Tablet: tighter height to avoid bottom white space */}
                <div className="block lg:hidden">
                  <NoPaperFormsWidget
                    widgetId="0d2d6e28c86e4213b353bfe132035965"
                    height="490px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleBlogHero;
