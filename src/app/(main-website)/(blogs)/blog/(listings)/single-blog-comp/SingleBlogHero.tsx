import Image from "next/image";
import NoPaperFormsWidget from "@/app/(main-website)/(blogs)/blog/(listings)/comp/NoPaperFormsWidget";
import { checkImage } from "../comp/CommonBlogCard";

type SingleBlogProps = {
  title: string;
  imgUrl?: string;
  authorName?: string;
  date?: string;
  authorDesignation?: string;
  imgId?: number;
  authorSlug?: string;
  formId?: string;
};

const SingleBlogHero = async ({
  title,
  imgUrl,
  date,
  formId = "0d2d6e28c86e4213b353bfe132035965",
}: SingleBlogProps) => {
  const normalizedImgUrl = imgUrl
    ?.replace("/blog/wp-content", "/wp-content")
    ?.replace("wp.krmangalam.edu.in", "www.krmangalam.edu.in");

  let finalImage: string = "/images/blog/single/hero.jpg";

  if (imgUrl && (await checkImage(imgUrl))) {
    finalImage = imgUrl;
  } else if (normalizedImgUrl && (await checkImage(normalizedImgUrl))) {
    finalImage = normalizedImgUrl;
  }

  const rawDate = date || "2026-07-15";
  const formattedDate = new Date(rawDate).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <section className="pt-[110px] md:pt-[155px] pb-6 md:pb-8 font-poppins">
      <div className="max-w-[1530px] mx-auto w-full px-6 md:px-8 relative z-10 flex flex-col gap-6 md:gap-8">
        {/* Main Grid: Left Featured Banner + Right Admission Form */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 xl:gap-[31px] w-full">
          {/* LEFT COLUMN: SINGLE BLOG HERO BANNER WITH GREEN CLIP */}
          <div className="w-full lg:flex-1 lg:max-w-[1038px] h-[380px] sm:h-[480px] md:h-[520px] lg:h-[584px] relative overflow-hidden flex flex-col justify-end">
            {/* Hero Background Image */}
            <Image
              src={finalImage}
              alt={title || "Single Blog Hero Image"}
              fill
              className="object-cover object-center"
              priority
              unoptimized
            />

            {/* Green Clip Overlay (Bottom Left) */}
            <div className="absolute bottom-4 left-3 z-10 w-full sm:w-[90%] md:w-[80%] lg:w-[68%] xl:w-[650px] min-h-[160px] sm:min-h-[160px] flex items-end">
              {/* Green Clip Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/blog/single/clip.png"
                  alt="Green Clip Overlay"
                  fill
                  className="object-fill object-left-bottom pointer-events-none"
                  unoptimized
                />
              </div>

              {/* Text Content inside Green Clip */}
              <div className="relative z-10 p-5 sm:p-6 text-white flex flex-col justify-end w-full">
                {/* Title */}
                <h1
                  className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold text-white leading-tight font-serif mb-2 sm:mb-3 tracking-tight drop-shadow-md pr-4"
                  dangerouslySetInnerHTML={{ __html: title }}
                />

                {/* Published Date */}
                <p className="text-xs sm:text-sm text-white/90 font-poppins font-light tracking-wide">
                  Published On: {formattedDate}
                </p>
              </div>
            </div>

            {/* KRMU Logo Emblem Badge Overlay (Bottom Right) */}
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-10 flex items-center justify-center">
              <Image
                src="/images/blog/aside/logo.png"
                alt="KRMU Logo Emblem"
                width={70}
                height={70}
                className="object-contain max-h-[50px] sm:max-h-[70px] w-auto drop-shadow-xl"
                unoptimized
              />
            </div>

            {/* Bottom Color Accent Line (50% Blue Left, 50% Red Right) */}
            <div className="absolute bottom-0 left-0 right-0 h-[5px] z-20 flex">
              <div className="w-1/2 bg-[#00529b]" />
              <div className="w-1/2 bg-[#d9232a]" />
            </div>
          </div>

          {/* RIGHT COLUMN: ADMISSION OPEN NPF FORM CARD */}
          <div className="w-full lg:w-[370px] h-[520px] sm:h-[550px] lg:h-[585px] bg-white rounded-[8px] p-3 sm:p-4 pt-3 sm:pt-4 shadow-2xl flex flex-col justify-between text-black flex-shrink-0">
            <div>
              <h2 className="text-xl sm:text-[22px] font-bold text-center text-black mb-1 font-poppins tracking-tight">
                Admission Open
              </h2>

              {/* Live NPF Admission Open Widget */}
              <div className="w-full overflow-hidden rounded-[8px]">
                <NoPaperFormsWidget widgetId={formId} height="510px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleBlogHero;
