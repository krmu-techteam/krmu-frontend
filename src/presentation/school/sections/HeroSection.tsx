"use client";

import { STRAPI_URL } from "@/app/constant";
import { SchoolHeroBanner, StrapiMedia } from "@/lib/types/common";
import { Button } from "@/lib/types/home";
import Link from "next/link";
import Image from "next/image";
import { YoutubeVideoSection } from "@/presentation/school/components";
import { Download, ArrowRightCircle, ArrowUpRight } from "lucide-react";
import { splitTitleByFor } from "@/features/school";
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
            bgURl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/bg_3_3278992eec.webp",
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
            bgURl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/School_of_Hotel_Management_and_Catering_Technology_1_a5b1fbe841.jpg",
            middleImg:
                "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/School_of_Hotel_Management_and_Catering_Technology_2_0661fa8786.png",
            mobileBgImg:
                "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/School_of_Hotel_Management_and_Catering_Technology_1_a5b1fbe841.jpg",
            notCutoutBg: false,
        },

        "school-of-basic-and-applied-sciences": {
            thumbnail: "",
            ytUrl: "",
            bgURl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/School_of_Basic_and_Applied_Sciences_jpg_08017a5590.jpeg",
            middleImg:
                "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/School_of_Basic_and_Applied_Sciences_90df839754.png",
            mobileBgImg:
                "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/School_of_Basic_and_Applied_Sciences_57259cf197.jpg",
            notCutoutBg: false,
        },

        "school-of-management-and-commerce": {
            thumbnail: "",
            ytUrl: "",
            bgURl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/School_of_Management_and_Commerce_jpg_d03b9be31f.jpeg",
            middleImg:
                "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/School_of_Management_and_Commerce_81961cccc7.png",
            mobileBgImg:
                "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/School_of_Management_and_Commerce_06115115bc.jpg",
            notCutoutBg: false,
        },

        "school-of-agriculutural-sciences": {
            thumbnail: "",
            ytUrl: "",
            bgURl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Agricultural_Sciences_c8932590b0.jpg",
            middleImg: "",
            mobileBgImg:
                "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Agricultural_Sciences_233167137a.png",
            notCutoutBg: true,
        },

        "school-of-agricultural-sciences": {
            thumbnail: "",
            ytUrl: "",
            bgURl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Agricultural_Sciences_c8932590b0.jpg",
            middleImg: "",
            mobileBgImg:
                "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Agricultural_Sciences_233167137a.png",
            notCutoutBg: true,
        },

        "school-of-emerging-media-and-creator-economy": {
            thumbnail:
                "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/school_of_emerging_media_and_creator_economy_f1c0436cee.png",
            ytUrl: "https://www.youtube.com/watch?v=RV4YQUNAVMA",
            bgURl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/School_of_Emerging_Media_and_Creator_Economy_1_11c030bd7f.jpg",
            middleImg:
                "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/School_of_Emerging_Media_and_Creator_Economy_2_4755b03dd1.png",
            mobileBgImg: "/schools/banners/mob-semce-banner.webp",
            notCutoutBg: false,
        },

        "school-of-architecture-design": {
            thumbnail:
                "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/school_of_architecture_design_89e7b8e3be.png",
            ytUrl: "https://www.youtube.com/watch?v=U3U9_dXYruQ",
            bgURl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/School_of_Architecture_and_Design_jpg_1_0519194f1b.jpeg",
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
            bgURl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/School_of_Liberal_Arts_jpg_c4f33403bd.webp",
            middleImg:
                "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/School_of_Liberal_Arts_622f42e605.png",
            mobileBgImg:
                "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/School_of_Liberal_Arts_cef8c3f2fd.jpg",
            notCutoutBg: false,
        },

        "school-of-physiotherapy-and-rehabilitation-sciences": {
            thumbnail: "",
            ytUrl: "",
            bgURl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/School_of_Physiotherapy_and_Rehabilitation_Sciences_jpg_b491139041.jpeg",
            middleImg:
                "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/School_of_Physiotherapy_and_Rehabilitation_Sciences_340ffc86b0.png",
            mobileBgImg:
                "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/School_of_Physiotherapy_and_Rehabilitation_Sciences_c0aaf99b80.jpg",
            notCutoutBg: false,
        },
        "school-of-medical-and-allied-sciences": {
            thumbnail: "",
            ytUrl: "",
            bgURl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/School_of_Medical_and_Allied_Sciences_jpg_1_8fc7057c8c.jpeg",
            middleImg:
                "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/School_of_Medical_and_Allied_Sciences_f6083aef6e.png",
            mobileBgImg:
                "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/School_of_Medical_and_Allied_Sciences_jpg_555205c827.jpeg",
            notCutoutBg: false,
        },
        "school-of-medical-allied-sciences": {
            thumbnail: "",
            ytUrl: "",
            bgURl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/School_of_Medical_and_Allied_Sciences_jpg_1_8fc7057c8c.jpeg",
            middleImg:
                "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/School_of_Medical_and_Allied_Sciences_f6083aef6e.png",
            mobileBgImg:
                "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/School_of_Medical_and_Allied_Sciences_jpg_555205c827.jpeg",
            notCutoutBg: false,
        },
        "school-of-legal-studies": {
            thumbnail: "",
            ytUrl: "",
            bgURl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/School_of_Legal_Studies_jpg_40fc22291b.jpeg",
            middleImg:
                "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/School_of_Legal_Studies_6f45e90d77_bea8808f47.png",
            mobileBgImg:
                "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/School_of_Legal_Studies_3bba92175a.jpg",
            notCutoutBg: false,
        },
    };

    const cleanSlug = decodeURIComponent(slug || "")
        .trim()
        .toLowerCase()
        .replace(/\/$/, "");
    const normalizedSlug =
        cleanSlug === "school-of-agriculutural-sciences"
            ? "school-of-agricultural-sciences"
            : cleanSlug === "school-of-agricultural-sciences"
              ? "school-of-agriculutural-sciences"
              : cleanSlug === "school-of-medical-allied-sciences"
                ? "school-of-medical-and-allied-sciences"
                : cleanSlug === "school-of-medical-and-allied-sciences"
                  ? "school-of-medical-allied-sciences"
                  : cleanSlug;

    const {
        ytUrl: videoUrl = "",
        thumbnail = "",
        bgURl: bgUrl = "",
        middleImg: middleimg = "",
        mobileBgImg = "",
        notCutoutBg = false,
    } = schoolBgMedia[cleanSlug as keyof typeof schoolBgMedia] ||
    schoolBgMedia[normalizedSlug as keyof typeof schoolBgMedia] ||
    {};

    const schoolBanners = Object.keys(schoolBgMedia);

    const videoURL = iframeContent;
    fullWidth = false;

    const desktopBg = schoolBanners.includes(slug)
        ? bgUrl
        : `${STRAPI_URL}${herobanner?.url}`;

    const mobileBg = mobileBgImg || desktopBg;

    const { boldText, normalText } = splitTitleByFor(
        admTitle || "Admissions Open for 2026-27"
    );

    const activeSlug = cleanSlug.replace(/^\/+|\/+$/g, "");
    const isReducedPtSchool =
        activeSlug === "school-of-emerging-media-and-creator-economy" ||
        activeSlug.includes(
            "school-of-hotel-management-and-catering-technology"
        );

    return (
        <>
            <section
                className={`relative overflow-hidden ${
                    fullWidth
                        ? "lg:py-[20%] lg:pb-0 pt-[300px] pb-5"
                        : `${notCutoutBg ? "pt-[110px] sm:pt-0 xl:pt-[340px] bgPosNotCut" : `pt-[110px] sm:pt-[140px] lg:pt-[280px] xl:pt-[310px] 2xl:pt-[320px] ${activeSlug.includes("legal-studies") ? "2xl:pt-[500px]" : ""} ${isReducedPtSchool ? "xl:!pt-[280px]" : ""} `} schoolBanner`
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
                            className={`${notCutoutBg ? "h-full" : "h-[400px]"} w-full object-cover object-top`}
                        />
                    </div>
                )}
                <div
                    className={`hidden xl:block absolute bottom-0 left-1/2 -translate-x-1/2 ${slug === "school-of-architecture-design" ? "lg:left-[51%]" : ""} ${slug === "school-of-emerging-media-and-creator-economy" ? "bottom-[50px] left-[52%]" : ""} ${slug === "school-of-hotel-management-and-catering-technology" ? "bottom-[50px]" : ""}`}
                >
                    {videoUrl && middleimg && (
                        <Image
                            src={middleimg}
                            width={492}
                            height={700}
                            alt={title || ""}
                            className={`object-contain max-h-[85vh] 2xl:max-h-[700px] ${slug === "school-of-architecture-design" ? "w-[450px]" : ""} z-10 relative`}
                            priority
                        />
                    )}
                </div>
                <div
                    className="hidden xl:block absolute left-0 top-0 w-full xl:w-[703px] h-full z-10 pointer-events-none"
                    style={{
                        background:
                            "linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0.75) 45%, rgba(0, 0, 0, 0.35) 75%, rgba(0, 0, 0, 0) 100%)",
                        opacity: 1,
                    }}
                ></div>
                <div className="xl:px-8 2xl:px-16">
                    {fullWidth ? (
                        <div className="max-w-[1664px] mx-auto w-full px-5 relative z-20 sm:px-4">
                            <div className="text-center text-white w-full">
                                <p className="text-sm md:text-[28px] lg:mb-5 font-medium text-shadow-[2px_2px_5px_rgba(0,0,0,0.5)]">
                                    {subheading}
                                </p>
                                <h1 className="text-2xl md:text-4xl lg:text-8xl font-semibold leading-[1.2] text-shadow-[2px_2px_5px_rgba(0,0,0,0.5)]">
                                    {title}
                                </h1>
                                <div className="flex flex-col lg:flex-row items-center justify-center gap-2.5 sm:gap-5 my-4 relative z-30">
                                    {heroBtns?.map((btn) => {
                                        const isExplore =
                                            btn?.buttontext ===
                                            "Explore Programmes";
                                        const linkUrl =
                                            btn?.buttonlink ||
                                            (isExplore ? "#programmes" : "#");
                                        const isExternal =
                                            linkUrl.startsWith("http://") ||
                                            linkUrl.startsWith("https://");

                                        const handleBtnClick = (
                                            e: React.MouseEvent<HTMLAnchorElement>
                                        ) => {
                                            if (
                                                isExplore ||
                                                linkUrl === "#programmes"
                                            ) {
                                                const el =
                                                    document.getElementById(
                                                        "programmes"
                                                    );
                                                if (el) {
                                                    e.preventDefault();
                                                    const yOffset = -115;
                                                    const y =
                                                        el.getBoundingClientRect()
                                                            .top +
                                                        window.pageYOffset +
                                                        yOffset;
                                                    window.scrollTo({
                                                        top: Math.max(0, y),
                                                        behavior: "smooth",
                                                    });
                                                }
                                            }
                                        };

                                        return isExplore ? (
                                            <Link
                                                key={btn.id}
                                                href={linkUrl}
                                                onClick={handleBtnClick}
                                                className={`text-white w-full sm:w-fit flex justify-center items-center px-5 py-2 border rounded-md gap-4 font-semibold bg-[#061623] cursor-pointer relative z-30 ${
                                                    btn.buttonclass || ""
                                                }`}
                                            >
                                                {btn.buttontext}
                                            </Link>
                                        ) : (
                                            <Link
                                                key={btn.id}
                                                href={linkUrl}
                                                className={`text-black w-full sm:w-fit flex justify-center items-center px-5 py-1.5 rounded-md gap-4 font-semibold bg-white cursor-pointer relative z-30 ${
                                                    btn.buttonclass || ""
                                                }`}
                                                target={
                                                    isExternal
                                                        ? "_blank"
                                                        : undefined
                                                }
                                                rel={
                                                    isExternal
                                                        ? "noopener noreferrer"
                                                        : undefined
                                                }
                                            >
                                                {btn.buttontext}
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="max-w-[1440px] mx-auto w-full xl:flex items-center justify-between p-0 relative z-20">
                            <div className="text-center xl:text-left text-white w-full xl:w-1/2 xl:pr-0">
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
                                    className={`bg-[#061623] ${slug === "school-of-legal-studies" ? "2xl:-translate-y-[60px]" : ""} xl:bg-transparent p-5 xl:p-0 z-20 relative ${notCutoutBg ? "-mt-10" : ""}`}
                                >
                                    <p className="text-[14px] tracking-wider lg:text-lg xl:text-lg 2xl:text-lg font-normal mb-2 md:mb-2.5 text-shadow-[2px_2px_5px_rgba(0,0,0,0.5)] uppercase">
                                        {subheading}
                                    </p>
                                    <h1
                                        className={`text-[24px] tracking-wide font-serif md:text-4xl xl:text-5xl 2xl:text-5xl leading-[1.4] xl:leading-[1.2] font-bold xl:max-w-[580px] xl:mx-0 ${
                                            slug ===
                                                "school-of-emerging-media-and-creator-economy" ||
                                            slug ===
                                                "school-of-hotel-management-and-catering-technology"
                                                ? "max-w-[705px] xl:mx-0"
                                                : ""
                                        }
                    ${slug === "school-of-liberal-arts" ? "max-w-[580px] xl:mx-0" : ""}    
                    ${slug === "school-of-architecture-design" ? "max-w-[750px] xl:mx-0" : ""}    
                    `}
                                    >
                                        {title}
                                    </h1>
                                    <div className="flex flex-col items-center xl:items-start justify-center xl:justify-start gap-3.5 sm:gap-5 mt-4 md:mt-5 sm:my-4 relative z-30">
                                        {heroBtns
                                            ?.filter(
                                                (btn) =>
                                                    btn?.buttontext !==
                                                    "Explore Programmes"
                                            )
                                            ?.map((btn) => {
                                                const linkUrl =
                                                    btn?.buttonlink || "#";
                                                const isExternal =
                                                    linkUrl.startsWith(
                                                        "http://"
                                                    ) ||
                                                    linkUrl.startsWith(
                                                        "https://"
                                                    );

                                                return (
                                                    <Link
                                                        key={btn.id}
                                                        href={linkUrl}
                                                        className="flex items-center gap-2.5 text-white hover:text-[#0189ae] font-medium text-base sm:text-lg transition-colors relative z-30 group cursor-pointer"
                                                        target={
                                                            isExternal
                                                                ? "_blank"
                                                                : undefined
                                                        }
                                                        rel={
                                                            isExternal
                                                                ? "noopener noreferrer"
                                                                : undefined
                                                        }
                                                    >
                                                        <Download className="w-5 h-5 text-white group-hover:text-[#0189ae] transition-colors" />
                                                        <span>
                                                            {btn.buttontext}
                                                        </span>
                                                    </Link>
                                                );
                                            })}
                                    </div>

                                    {Array.isArray(alumniLogos) &&
                                        alumniLogos.length > 0 && (
                                            <div className="hidden xl:block max-w-[450px] xl:mx-0 my-2.5 sm:mt-10 p-3 rounded-[10px] alumniHeaderCarousel brightness-0 invert">
                                                <SchoolHeroSlider
                                                    logos={alumniLogos}
                                                />
                                            </div>
                                        )}
                                </div>
                            </div>
                            {videoUrl && (
                                <div className="w-full xl:w-1/2 xl:ml-20 xl:pl-20 flex justify-center xl:justify-end px-5 pb-5 sm:pb-0 sm:px-0 bg-[#061623] xl:bg-transparent">
                                    <div className="w-full max-w-[500px] xl:max-w-[520px] border-3 border-[#b7e2f3] rounded-[8px] overflow-hidden">
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
                    <section className="w-full bg-[#061623] lg:bg-transparent relative z-20 py-6 lg:py-8 px-6 md:px-8 xl:px-10">
                        <div className="max-w-[1440px] mx-auto px-3 sm:px-3 py-4 sm:py-3 flex flex-col md:flex-row items-center justify-between gap-6 bg-[linear-gradient(90deg,#8B3D22_11.06%,#003763_100%)] rounded-sm">
                            {/* Heading */}
                            <h2 className="text-center font-poppins md:text-left text-xl xl:text-[25px] text-white">
                                <span className="font-semibold">
                                    {boldText}
                                </span>
                                {normalText && (
                                    <span className="font-normal">
                                        {normalText}
                                    </span>
                                )}
                            </h2>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                <Link
                                    href="#programmes"
                                    className="inline-flex font-poppins items-center justify-center border border-white/60 px-5 py-2.5 text-md font-medium text-white rounded-sm whitespace-nowrap hover:bg-white/10 transition-colors"
                                >
                                    <ArrowRightCircle
                                        className="w-5 h-5 mr-2"
                                        strokeWidth={1.5}
                                    />
                                    Explore Programmes
                                </Link>

                                {(admBtn?.buttonlink ||
                                    admBtn?.buttonclass ||
                                    admBtn?.buttontext) && (
                                    <Link
                                        href={admBtn?.buttonlink || "#"}
                                        className={`inline-flex w-full sm:w-auto items-center justify-center border border-[#CB000D] bg-[#CB000D] hover:bg-[#CB000D] px-6 py-2.5 text-md font-medium font-poppins text-white rounded-sm whitespace-nowrap transition-all relative overflow-hidden group ${admBtn?.buttonclass || ""}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-800 ease-in-out pointer-events-none"></div>
                                        {admBtn?.buttontext || "APPLY NOW"}
                                        <ArrowUpRight
                                            className="w-4 h-4 ml-2"
                                            strokeWidth={2.5}
                                        />
                                    </Link>
                                )}
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </>
    );
};

export default HeroSection;
