import { STRAPI_URL } from "@/app/constant";
import { SchoolHeroBanner, StrapiMedia } from "@/lib/types/common";
import { Button } from "@/lib/types/home";
import Link from "next/link";
import Image from "next/image";
import { AdmissionOpenBanner, YoutubeVideoSection } from "@/presentation/school/components";
import { Download } from "lucide-react";
import SchoolHeroSlider from "@/app/(main-website)/(school-programmes)/school-programmes-component/SchoolHeroSlider";

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

const HeroSection = ({
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
    "school-of-engineering-and-technology": {
      thumbnail:
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/img2_219c145b08.png",
      ytUrl: "https://www.youtube.com/watch?v=9I6QQ6ZYCi8",
      bgURl:
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/bg_3_3278992eec.webp",
      middleImg:
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/lady_2b76154bef.png",
      mobileBgImg:
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/bg_3_3278992eec.webp",
      notCutoutBg: false,
    },

    "school-of-hotel-management-and-catering-technology": {
      thumbnail:
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/sohmct_yt_ac9764e49e.webp",
      ytUrl: "https://www.youtube.com/watch?v=yRbHVk8qaOs",
      bgURl:
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/School_of_Hotel_Management_and_Catering_Technology_1_a5b1fbe841.jpg",
      middleImg:
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/School_of_Hotel_Management_and_Catering_Technology_2_0661fa8786.png",
      mobileBgImg:
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/School_of_Hotel_Management_and_Catering_Technology_1_a5b1fbe841.jpg",
      notCutoutBg: false,
    },

    "school-of-basic-and-applied-sciences": {
      thumbnail: "",
      ytUrl: "",
      bgURl:
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/School_of_Basic_and_Applied_Sciences_jpg_08017a5590.jpeg",
      middleImg:
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/School_of_Basic_and_Applied_Sciences_90df839754.png",
      mobileBgImg:
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/School_of_Basic_and_Applied_Sciences_57259cf197.jpg",
      notCutoutBg: false,
    },

    "school-of-management-and-commerce": {
      thumbnail: "",
      ytUrl: "",
      bgURl:
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/School_of_Management_and_Commerce_jpg_d03b9be31f.jpeg",
      middleImg:
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/School_of_Management_and_Commerce_81961cccc7.png",
      mobileBgImg:
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/School_of_Management_and_Commerce_06115115bc.jpg",
      notCutoutBg: false,
    },

    "school-of-agriculutural-sciences": {
      thumbnail: "",
      ytUrl: "",
      bgURl:
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Agricultural_Sciences_c8932590b0.jpg",
      middleImg: "",
      mobileBgImg:
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Agricultural_Sciences_233167137a.png",
      notCutoutBg: true,
    },

    "school-of-agricultural-sciences": {
      thumbnail: "",
      ytUrl: "",
      bgURl:
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Agricultural_Sciences_c8932590b0.jpg",
      middleImg: "",
      mobileBgImg:
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Agricultural_Sciences_233167137a.png",
      notCutoutBg: true,
    },

    "school-of-emerging-media-and-creator-economy": {
      thumbnail:
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/school_of_emerging_media_and_creator_economy_f1c0436cee.png",
      ytUrl: "https://www.youtube.com/watch?v=RV4YQUNAVMA",
      bgURl:
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/School_of_Emerging_Media_and_Creator_Economy_1_11c030bd7f.jpg",
      middleImg:
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/School_of_Emerging_Media_and_Creator_Economy_2_4755b03dd1.png",
      mobileBgImg: "/schools/banners/mob-semce-banner.webp",
      notCutoutBg: false,
    },

    "school-of-architecture-design": {
      thumbnail:
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/school_of_architecture_design_89e7b8e3be.png",
      ytUrl: "https://www.youtube.com/watch?v=U3U9_dXYruQ",
      bgURl:
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/School_of_Architecture_and_Design_jpg_1_0519194f1b.jpeg",
      middleImg:
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/School_of_Architecture_and_Design_5_2a944ecd36.png",
      mobileBgImg:
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/School_of_Architecture_and_Design_jpg_1_0519194f1b.jpeg",
      notCutoutBg: false,
    },

    "school-of-education": {
      thumbnail: "",
      ytUrl: "",
      bgURl: "/schools/banners/soed-banner-3.webp",
      middleImg: "/schools/middleImg/soed-middleimg-2.png",
      mobileBgImg: "/schools/banners/mob-soed-banner.webp",
      notCutoutBg: false,
    },

    "school-of-liberal-arts": {
      thumbnail: "",
      ytUrl: "",
      bgURl:
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/School_of_Liberal_Arts_jpg_c4f33403bd.webp",
      middleImg:
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/School_of_Liberal_Arts_622f42e605.png",
      mobileBgImg:
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/School_of_Liberal_Arts_cef8c3f2fd.jpg",
      notCutoutBg: false,
    },

    "school-of-physiotherapy-and-rehabilitation-sciences": {
      thumbnail: "",
      ytUrl: "",
      bgURl:
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/School_of_Physiotherapy_and_Rehabilitation_Sciences_jpg_b491139041.jpeg",
      middleImg:
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/School_of_Physiotherapy_and_Rehabilitation_Sciences_340ffc86b0.png",
      mobileBgImg:
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/School_of_Physiotherapy_and_Rehabilitation_Sciences_c0aaf99b80.jpg",
      notCutoutBg: false,
    },
    "school-of-medical-and-allied-sciences": {
      thumbnail: "",
      ytUrl: "",
      bgURl:
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/School_of_Medical_and_Allied_Sciences_jpg_1_8fc7057c8c.jpeg",
      middleImg:
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/School_of_Medical_and_Allied_Sciences_f6083aef6e.png",
      mobileBgImg:
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/School_of_Medical_and_Allied_Sciences_jpg_555205c827.jpeg",
      notCutoutBg: false,
    },
    "school-of-legal-studies": {
      thumbnail: "",
      ytUrl: "",
      bgURl:
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/School_of_Legal_Studies_jpg_40fc22291b.jpeg",
      middleImg:
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/School_of_Legal_Studies_6f45e90d77_bea8808f47.png",
      mobileBgImg:
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/School_of_Legal_Studies_3bba92175a.jpg",
      notCutoutBg: false,
    },
  };

  const {
    ytUrl: videoUrl = "",
    thumbnail = "",
    bgURl: bgUrl = "",
    middleImg: middleimg = "",
    mobileBgImg = "",
    notCutoutBg = false,
  } = schoolBgMedia[slug as keyof typeof schoolBgMedia] || {};

  const schoolBanners = Object.keys(schoolBgMedia);

  const videoURL = iframeContent;
  fullWidth = false;

  const desktopBg = schoolBanners.includes(slug)
    ? bgUrl
    : `${STRAPI_URL}${herobanner?.url}`;

  const mobileBg = mobileBgImg || desktopBg;

  return (
    <>
      <section
        className={`relative overflow-hidden ${fullWidth
            ? "lg:py-[20%] lg:pb-0 pt-[300px] pb-5"
            : `${notCutoutBg ? "pt-[45px] sm:pt-0 xl:pt-[340px] bgPosNotCut" : `pt-[100px] sm:pt-[140px] lg:pt-[280px] xl:pt-[180px] 2xl:pt-[280px] ${slug === "school-of-legal-studies" ? "2xl:pt-[400px]" : ""} `} schoolBanner`
          } bg-cover bg-no-repeat bg-center`}
        style={
          {
            "--mobile-bg": `url(${mobileBg})`,
            "--desktop-bg": `url(${desktopBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          } as React.CSSProperties
        }
      >
        {notCutoutBg && (
          <div className="flex xl:hidden items-center justify-center w-full">
            <Image
              src={mobileBgImg}
              width={640}
              height={640}
              alt=""
              className={`${notCutoutBg ? "h-full" : "h-[400px]"} w-full object-cover`}
            />
          </div>
        )}
        <div
          className={`hidden xl:block absolute bottom-0 left-1/2 -translate-x-1/2 ${slug === "school-of-architecture-design" ? "lg:left-[51%]" : ""} ${slug === "school-of-emerging-media-and-creator-economy" ? "bottom-[50px] left-[52%]" : ""} ${slug === "school-of-hotel-management-and-catering-technology" ? "bottom-[10px]" : ""}`}
        >
          {videoUrl && middleimg && (
            <Image
              src={middleimg}
              width={492}
              height={700}
              alt={title || ""}
              className={`object-contain ${slug === "school-of-architecture-design" ? "w-[450px]" : ""} z-10 relative`}
              priority
            />
          )}
        </div>
        <div
          className="h-full w-1/2 opacity-40 bg-[linear-gradient(90deg,#000000_0%,rgba(0,0,0,0.6)61.25%,rgba(102,102,102,0)100.31%)] absolute inset-0 z-10"
        ></div>
        <div className="xl:px-8 2xl:px-16">
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
                  {heroBtns?.map((btn) => {
                    if (!btn?.buttonlink) return null;
                    return btn?.buttontext === "Explore Programmes" ? (
                      <Link
                        key={btn.id}
                        href={btn.buttonlink}
                        className={`text-white w-full sm:w-fit flex justify-center items-center px-5 py-2 border rounded-md gap-4 font-semibold bg-[#001732] ${btn.buttonclass || ""
                          }`}
                      >
                        {btn.buttontext}
                      </Link>
                    ) : (
                      <Link
                        key={btn.id}
                        href={btn.buttonlink}
                        className={`text-black w-full sm:w-fit flex justify-center items-center px-5 py-1.5 rounded-md gap-4 font-semibold bg-white ${btn.buttonclass || ""
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
            <div className="max-w-[1850px] mx-auto w-full xl:flex items-center justify-between p-0 relative z-20">
              <div className="text-center text-white w-full xl:w-1/2 xl:pr-0">
                <div className="xl:hidden flex justify-center">
                  {middleimg && (
                    <Image
                      src={middleimg}
                      width={600}
                      height={600}
                      alt={title || ""}
                      className="object-contain z-10 w-[200px] md:h-[400px] xl:h-full sm:w-full relative"
                      priority
                    />
                  )}
                </div>
                <div
                  className={`bg-[#001732] ${slug === "school-of-legal-studies" ? "2xl:-translate-y-[60px]" : ""} xl:bg-transparent p-5 xl:p-0 z-20 relative ${notCutoutBg ? "-mt-10" : `${slug === "school-of-physiotherapy-and-rehabilitation-sciences" ? "-mt-28 sm:mt-0" : ""}`}`}
                >
                  <p className="text-sm lg:text-lg 2xl:text-2xl font-normal sm:mb-2.5 text-shadow-[2px_2px_5px_rgba(0,0,0,0.5)] uppercase">
                    {subheading}
                  </p>
                  <h1
                    className={`text-2xl md:text-4xl xl:text-6xl text-shadow-lg leading-[1.2] font-bold ${slug === "school-of-emerging-media-and-creator-economy" ||
                        slug ===
                        "school-of-hotel-management-and-catering-technology"
                        ? "max-w-[705px] mx-auto"
                        : ""
                      }
                    ${slug === "school-of-liberal-arts" ? "max-w-[580px] mx-auto" : ""}    
                    ${slug === "school-of-architecture-design" ? "max-w-[750px] mx-auto" : ""}    
                    `}
                  >
                    {title}
                  </h1>
                  <div className="flex flex-col items-center justify-center gap-3.5 sm:gap-5 mt-5 sm:my-4">
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
                          key={btn.id}
                          href={btn.buttonlink || "#"}
                          className={`text-white w-full md:text-xl sm:w-fit flex justify-center items-center max-w-[220px] sm:max-w-none p-2.5 sm:px-6 sm:py-3.5 rounded-lg gap-4 font-semibold bg-[#001732] border-2 border-[#0189ae] transition-all relative overflow-hidden group ${btn.buttonclass || ""}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-800 ease-in-out pointer-events-none"></div>
                          <Download color="#fff" /> {btn.buttontext}
                        </Link>
                      ),
                    )}
                  </div>

                  {Array.isArray(alumniLogos) && alumniLogos.length > 0 && (
                    <div className="hidden xl:block max-w-[450px] mx-auto my-2.5 sm:mt-10 p-3 rounded-[10px] alumniHeaderCarousel brightness-0 invert">
                      <SchoolHeroSlider logos={alumniLogos} />
                    </div>
                  )}
                </div>
              </div>
              {videoUrl && (
                <div className="w-full xl:w-1/2 xl:ml-20 xl:pl-20 flex justify-center xl:justify-end px-5 pb-5 sm:pb-0 sm:px-0 bg-[#001732] xl:bg-transparent">
                  <div className="w-full max-w-[520px] 2xl:max-w-[680px] border-6 border-[#b7e2f3] rounded-3xl">
                    <YoutubeVideoSection
                      thumbnail={thumbnail}
                      ytUrl={videoUrl}
                    />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="relative z-20 w-full xl:mt-20">
          <AdmissionOpenBanner title={admTitle} admBtn={admBtn} />
        </div>
      </section>
    </>
  );
};

export default HeroSection;

