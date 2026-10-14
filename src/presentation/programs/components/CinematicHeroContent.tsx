"use client";

import React from "react";
import { CinematicHeroSectionProps } from "@/features/programs";

const CinematicHeroContent = ({
    title,
    highlightitle,
    heroSection,
    slug,
    config,
}: CinematicHeroSectionProps) => {
    const handleApplyClick = (e: React.MouseEvent) => {
        e.preventDefault();
        const formElement =
            document.getElementById("apply-form-mobile") ||
            document.getElementById("apply-form") ||
            document.querySelector(".heroBannerForm__form");

        if (formElement) {
            formElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div className="flex flex-col lg:block bg-gradient-to-t from-black/90 via-black/45 to-transparent lg:bg-none px-4 pt-16 pb-0 sm:px-6 sm:pt-20 sm:pb-8 md:px-8 lg:p-0 antialiased [text-rendering:optimizeLegibility] [-webkit-font-smoothing:antialiased] [-moz-osx-font-smoothing:grayscale]">
            <div className="mb-0 lg:mb-10">
                <p
                    className={`text-white/90 lg:block font-poppins hidden ${config.subtitleMaxWidth || "xl:max-w-[65%] 2xl:max-w-[70%]"} ${config.subtitleSize || "text-md lg:text-[14px] xl:text-lg"} font-normal uppercase tracking-[0.08em] antialiased`}
                >
                    {heroSection?.subtitle}
                </p>
                <h1
                    className={`text-white text-[24px] md:text-[30px] lg:text-3xl xl:text-[42px] 2xl:text-5xl ${config.titleMaxWidth || ""} font-bold font-serif md:font-bold mb-0 lg:mb-3 leading-[1.25] md:leading-[1.25] lg:leading-[1.1] antialiased`}
                >
                    {title}{" "}
                    <span
                        className={`${config.highlightClass || "text-white/90"} [&_.highlight]:text-[#f5a623] lg:leading-[1.1] font-bold antialiased`}
                        dangerouslySetInnerHTML={{ __html: highlightitle }}
                    />
                </h1>
                <p
                    className={`text-white/90 font-poppins text-[16px] xl:text-lg  ${config.descSize} mb-4 leading-relaxed font-normal hidden lg:block lg:max-w-lg lg:text-shadow-xs xl:text-shadow-none xl:max-w-md ${config.contentMaxWidth || "2xl:max-w-lg"} antialiased tracking-[-0.005em]`}
                >
                    {heroSection?.description}
                </p>

                {![
                    "bhmct-hotel-management",
                    "bachelor-elementary-education-b-el-ed",
                    "bachelor-of-education-b-ed",
                ].includes(slug || "") && (
                    <div className="mt-4 lg:mt-3 mb-8 md:mb-0 xl:mt-4 flex justify-start lg:justify-start">
                        <a
                            href="#apply-form-mobile"
                            onClick={handleApplyClick}
                            className={`progherobtn lg:hidden inline-flex items-center justify-center px-6 py-2.5 md:py-[8px] md:px-7 font-poppins text-sm md:text-[14px] ${
                                heroSection?.herobtn?.buttonclass ||
                                "bg-[#CB000D] text-white"
                            } rounded-[2px] transition-all cursor-pointer relative overflow-hidden group`}
                        >
                            <span>
                                {heroSection?.herobtn?.buttontext ||
                                    "Apply Now"}
                            </span>
                            <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-800 ease-in-out pointer-events-none"></div>
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CinematicHeroContent;
