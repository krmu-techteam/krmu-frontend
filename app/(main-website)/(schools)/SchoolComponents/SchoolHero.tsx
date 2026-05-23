import { STRAPI_URL } from "@/app/constant";
import { AlumniMedia, SchoolHeroBanner, StrapiMedia } from "@/lib/types/common";
import { Button } from "@/lib/types/home";
import Link from "next/link";
import SchoolHeroSEMCE from "./SchoolHeroSEMCE";
import SchoolHeroSBAS from "./SchoolHeroSBAS";
import Image from "next/image";
import YoutubeVideoSection from "./schoolglobalcomponent/YoutubeVideoSection";
import ConnectingDreamSlider from "../../(school-programmes)/school-programmes-component/ConnectingDreamSlider";
import { Download } from "lucide-react";
import SchoolAdmissionOpen from "./SchoolAdmissionOpen";

type Props = {
  title: string;
  subheading: string;
  heroBtns: Button[];
  videoFmt: string;
  iframeContent: string;
  videoLink: string;
  herobanner: SchoolHeroBanner;
  fullWidth: boolean;
  alumniLogos: StrapiMedia[] | undefined;
  admTitle: string;
  admBtn: Button;
  slug: string;
};

const SchoolHero = ({
  title,
  subheading,
  heroBtns,
  videoFmt,
  iframeContent,
  videoLink,
  herobanner,
  fullWidth,
  alumniLogos,
  admTitle,
  admBtn,
  slug,
}: Props) => {
  const schoolBgMedia = {
    soet: {
      thumbnail:
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/ytsoet_abda042457.webp",
      ytUrl: "https://www.youtube.com/watch?v=9I6QQ6ZYCi8",
      bgURl:
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/bg_3_3278992eec.webp",
      middleImg:
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/lady_2b76154bef.png",
    },
    sohmct: {
      thumbnail:
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/sohmct_yt_ac9764e49e.webp",
      ytUrl: "https://www.youtube.com/watch?v=yRbHVk8qaOs",
      bgURl: "",
      middleImg: "",
    },
    sbas: {
      thumbnail:
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/sbas_1_da2168aa21.webp",
      ytUrl: "https://www.youtube.com/watch?v=QdsVt6tERg0",
      bgURl: "",
      middleImg: "",
    },
  };

  let videoUrl = "";
  let thumbnail = "";
  let bgUrl = "";
  let middleimg = "";

  if (slug === "school-of-hotel-management-and-catering-technology") {
    videoUrl = schoolBgMedia.sohmct.ytUrl;
    thumbnail = schoolBgMedia.sohmct.thumbnail;
    bgUrl = schoolBgMedia.sohmct.bgURl;
    middleimg = schoolBgMedia.sohmct.middleImg;
  }
  if (slug === "school-of-engineering-and-technology") {
    videoUrl = schoolBgMedia.soet.ytUrl;
    thumbnail = schoolBgMedia.soet.thumbnail;
    bgUrl = schoolBgMedia.soet.bgURl;
    middleimg = schoolBgMedia.soet.middleImg;
  }
  if (slug === "school-of-basic-and-applied-sciences") {
    videoUrl = schoolBgMedia.sbas.ytUrl;
    thumbnail = schoolBgMedia.sbas.thumbnail;
    bgUrl = schoolBgMedia.sbas.bgURl;
    middleimg = schoolBgMedia.sbas.middleImg;
  }

  const videoURL = iframeContent;
  return (
    <>
      <section
        className={` relative overflow-hidden ${
          fullWidth
            ? "lg:py-[20%] lg:pb-0 pt-[300px] pb-5"
            : "pt-[100px] sm:pt-[140px] lg:pt-[280px] schoolBanner"
        } bg-cover bg-no-repeat bg-center bg-[#001732]`}
        style={{
          backgroundImage:
            slug === "school-of-engineering-and-technology"
              ? `url(${bgUrl})`
              : `url( ${STRAPI_URL}${herobanner?.url})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="hidden xl:block absolute -bottom-12 left-1/2 -translate-x-1/2">
          {middleimg && (
            <Image
              src={middleimg}
              width={492}
              height={700}
              alt={title || ""}
              className="object-contain z-10 relative"
              priority
            />
          )}
        </div>
        <div
          className="
    h-full
    w-1/2
    opacity-40
    bg-[linear-gradient(90deg,#000000_0%,rgba(0,0,0,0.6)61.25%,rgba(102,102,102,0)100.31%)]
      absolute
      inset-0
      z-10
  "
        ></div>
        <div className="xl:px-8 2xl:px-16">
          <div className="hidden sm:block">
            {herobanner?.url && (
              <Image
                src={`${STRAPI_URL}${herobanner.url}`}
                alt={"hero"}
                fill
                priority
                sizes="100vw"
                className="object-cover -z-10"
              />
            )}
          </div>
          {fullWidth ? (
            <div className="max-w-[1664px] mx-auto w-full px-5 relative z-10 sm:px-4">
              <div className="text-center text-white w-full">
                <p className="text-sm md:text-[28px] lg:mb-5 font-medium text-shadow-[2px_2px_5px_rgba(0,0,0,0.5)]">
                  {subheading}
                </p>
                <h1 className="text-2xl md:text-4xl lg:text-8xl font-semibold leading-[1.2] text-shadow-[2px_2px_5px_rgba(0,0,0,0.5)]">
                  {title}
                </h1>
                <div className="flex flex-col lg:flex-row items-center justify-center gap-2.5 sm:gap-5 my-4">
                  {heroBtns?.map((btn) =>
                    btn?.buttontext === "Explore Programmes" ? (
                      <Link
                        key={btn.id}
                        href={btn.buttonlink}
                        className={`text-white w-full sm:w-fit flex justify-center items-center px-5 py-2  border rounded-md gap-4 font-semibold bg-[#001732] ${
                          btn.buttonclass || ""
                        }`}
                      >
                        {btn.buttontext}
                      </Link>
                    ) : (
                      <Link
                        key={btn.id}
                        href={btn.buttonlink}
                        className={`text-black w-full sm:w-fit flex justify-center items-center px-5 py-1.5 rounded-md gap-4 font-semibold bg-white ${
                          btn.buttonclass || ""
                        }`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {btn.buttontext}
                      </Link>
                    ),
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-[1850px] mx-auto w-full xl:flex items-start justify-between p-0 relative z-20">
              <div className="text-center text-white w-full xl:w-1/2 xl:pr-20">
                <div className="xl:hidden flex justify-center">
                  {middleimg && (
                    <Image
                      src={middleimg}
                      width={492}
                      height={600}
                      alt={title || ""}
                      className="object-contain z-10 h-[400px] relative"
                      priority
                    />
                  )}
                </div>
                <div className="bg-[#001732] xl:bg-transparent p-5 xl:p-0 z-20 relative -mt-28 sm:mt-0">
                  <p className="text-sm lg:text-lg 2xl:text-2xl font-normal sm:mb-2.5 text-shadow-[2px_2px_5px_rgba(0,0,0,0.5)] uppercase">
                    {subheading}
                  </p>
                  <h1 className="text-2xl md:text-4xl 2xl:text-6xl text-shadow-lg leading-[1.2] font-bold">
                    {title}
                  </h1>
                  <div className="flex flex-col items-center justify-center gap-3.5 sm:gap-5 mt-0 sm:my-4">
                    {heroBtns?.map((btn) =>
                      btn?.buttontext === "Explore Programmes" ? (
                        <Link
                          key={btn.id}
                          href={btn.buttonlink}
                          className="text-white underline font-bold text-xl"
                        >
                          {btn.buttontext}
                        </Link>
                      ) : (
                        <Link
                          key={btn.id} /* Rectangle 970 */
                          href={btn.buttonlink}
                          className={`text-white w-full sm:w-fit flex justify-center items-center px-6 py-3.5 rounded-lg gap-4 font-semibold bg-[#001732] border-2 border-[#0189ae] transition-all ${
                            btn.buttonclass || ""
                          }`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Download color="#fff" /> {btn.buttontext}
                        </Link>
                      ),
                    )}
                  </div>
                  <div className="max-w-[450px] mx-auto my-2.5 sm:mt-10 p-3 rounded-[10px] alumniHeaderCarousel brightness-0 invert">
                    <ConnectingDreamSlider logos={alumniLogos} />
                  </div>
                </div>
              </div>
              <div className="w-full xl:w-1/2 xl:ml-20 xl:pl-20 flex justify-center xl:justify-end px-5 pb-5 sm:pb-0 sm:px-0 bg-[#001732] sm:bg-transparent">
                {/* {videoFmt === "Iframe" ? (
                <div
                  className="w-full customSchoolIframeStyle"
                  dangerouslySetInnerHTML={{ __html: iframeContent }}
                />
              ) : videoFmt === "videourl" ? (
                <video controls className="w-full">
                  <source src={videoLink} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : null} */}
                <div className="w-full max-w-[520px] 2xl:max-w-[680px] border-6 border-[#b7e2f3] rounded-xl">
                  <YoutubeVideoSection thumbnail={thumbnail} ytUrl={videoUrl} />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="relative z-20 w-full xl:mt-20">
          <SchoolAdmissionOpen title={admTitle} admBtn={admBtn} />
        </div>
      </section>
    </>
  );
};

export default SchoolHero;
