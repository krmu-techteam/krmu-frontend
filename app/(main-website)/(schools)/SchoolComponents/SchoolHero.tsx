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
        {fullWidth ? (
          <div className="max-w-[1664px] mx-auto w-full px-5 relative z-10 temp-class">
            <div className="text-center text-white w-full">
              <p className="text-sm md:text-[28px] lg:mb-5 font-medium text-shadow-[2px_2px_5px_rgba(0,0,0,0.5)]">
                {subheading}
              </p>
              <h1 className="text-2xl md:text-4xl lg:text-8xl font-semibold leading-[1.2] text-shadow-[2px_2px_5px_rgba(0,0,0,0.5)]">
                {title}
              </h1>
              <div className="flex flex-col lg:flex-row items-center justify-center gap-2.5 sm:gap-5 my-4">
                {heroBtns?.map((btn) => {
                  if (!btn?.buttonlink) return null;
                  return btn?.buttontext === "Explore Programmes" ? (
                    <Link
                      key={btn.id}
                      href={btn.buttonlink}
                      className={`text-white w-full sm:w-fit flex justify-center items-center px-5 py-2  border rounded-md gap-4 font-semibold bg-[#034272] ${
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
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-[1850px] mx-auto w-full xl:flex items-center justify-between p-5 sm:p-0 relative z-10 bg-transparent">
            <div className="text-center text-white w-full xl:w-1/2 xl:pr-52">
              <p className="text-sm md:text-[28px] lg:mb-5 font-medium text-shadow-[2px_2px_5px_rgba(0,0,0,0.5)]">
                {subheading}
              </p>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-[1.2] text-shadow-[2px_2px_5px_rgba(0,0,0,0.5)]">
                {title}
              </h1>
              <div className="flex flex-col lg:flex-row items-center justify-center gap-3.5 sm:gap-5 my-4">
                {heroBtns?.map((btn) => {
                  if (!btn?.buttonlink) return null;
                  return btn?.buttontext === "Explore Programmes" ? (
                    <Link
                      key={btn.id}
                      href={btn.buttonlink}
                      className="text-white w-full sm:w-fit flex justify-center items-center px-8 py-2.5 rounded-lg gap-4 font-semibold bg-[#034272] transition-all hover:bg-[#02335a]"
                    >
                      {btn.buttontext}
                    </Link>
                  ) : (
                    <Link
                      key={btn.id}
                      href={btn.buttonlink}
                      className={`text-black w-full sm:w-fit flex justify-center items-center px-8 py-2.5 rounded-lg gap-4 font-semibold bg-white transition-all hover:bg-gray-100 ${
                        btn.buttonclass || ""
                      }`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {btn.buttontext}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="w-full xl:w-1/2 xl:ml-20 xl:pl-20 flex justify-center xl:justify-end temp-class">
              {videoFmt === "Iframe" ? (
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
