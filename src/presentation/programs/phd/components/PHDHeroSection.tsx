"use client";

import React from "react";
import Image from "next/image";
import NoPaperForm from "@/lib/constants/NoPaperForm";
import {
    CounterBlock,
    PhDLogo,
    SchoolCategory,
} from "@/lib/types/phd-programmes";
import { STRAPI_URL } from "@/app/constant";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Newsreader } from "next/font/google";

const newsreader = Newsreader({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    style: ["normal", "italic"],
});

interface PHDHeroSectionProps {
    heading: string;
    schoolCategory?: SchoolCategory;
    duration?: CounterBlock;
    feePerYear?: CounterBlock;
    eligibleCriteria?: CounterBlock;
    logoSlide?: PhDLogo[];
    slug?: string;
    formId?: string;
}

export default function PHDHeroSection({
    heading,
    schoolCategory,
    duration,
    feePerYear,
    logoSlide = [],
    formId = "b8a1d46829929a0a7c19f4fc185e7d45",
}: PHDHeroSectionProps) {
    // Parse Duration (Mockup: DURATION -> Min. 3 Years -> Full research term)
    const durationValue =
        duration?.countercontent && duration.countercontent.trim().length > 0
            ? duration.countercontent.trim()
            : "Min. 3 Years";
    const durationSubtitle = "Full research term";

    // Parse Fee (Mockup: FEE / YEAR -> ₹1,30,000 -> Programme fee)
    let feeValue = "₹1,30,000";
    if (
        feePerYear?.countercontent &&
        feePerYear.countercontent.trim().length > 0
    ) {
        feeValue = feePerYear.countercontent
            .trim()
            .replace(/^Rs\.?\s*/i, "₹")
            .replace(/\/-\s*$/, "");
    }
    const feeSubtitle = "Programme fee";

    const schoolName = schoolCategory?.name || "SOET";

    // Prepare partner/recruiter logos for the slider
    const hasApiLogos = logoSlide && logoSlide.length > 0;
    const displayLogos = hasApiLogos
        ? logoSlide.length < 5
            ? [...logoSlide, ...logoSlide, ...logoSlide]
            : logoSlide
        : [];

    return (
        <section className="w-full bg-white overflow-hidden relative">
            {/* CONTAINER LOCKED TO 1440PX MAX-WIDTH (Aligned with rest of website) */}
            <div className="max-w-[1440px] mx-auto w-full flex flex-col lg:flex-row items-stretch justify-between relative">
                {/* LEFT / MAIN DARK BLUE SECTION (Flush with 1440px layout & extended left to screen edge) */}
                <div
                    className="relative z-20 w-full lg:w-[70%] xl:w-[72%] bg-[#14233D] rounded-none rounded-br-[80px] sm:rounded-br-[100px] lg:rounded-br-[120px] flex flex-col justify-between overflow-visible min-h-[700px] lg:min-h-[780px] pl-5 sm:pl-8 md:pl-10 lg:pl-12 xl:pl-[51px] pr-5 sm:pr-8 lg:pr-10 pt-28 sm:pt-32 md:pt-36 lg:pt-44 xl:pt-48 pb-8 before:content-[''] before:absolute before:top-0 before:bottom-0 before:right-full before:w-[100vw] before:bg-[#14233D]"
                    style={{ background: "#14233D" }}
                >
                    {/* Upper Content Area */}
                    <div className="relative z-10 w-full max-w-[460px] lg:max-w-[480px]">
                        {/* School Badge */}
                        <div className="mb-2 sm:mb-3">
                            <span className="inline-block text-[#E7C268] font-semibold text-[14px] sm:text-[16px] tracking-[0.25em] uppercase">
                                {schoolName}
                            </span>
                        </div>

                        {/* Heading - Exact Figma Newsreader Typography */}
                        <h1
                            className={`${newsreader.className} text-white font-semibold text-[34px] sm:text-[44px] lg:text-[52px] xl:text-[59px] leading-[1.15] lg:leading-[60px] xl:leading-[65px] tracking-[-0.96px] mb-4 align-middle`}
                            style={{
                                fontFamily: `${newsreader.style.fontFamily}, 'Newsreader', serif`,
                                fontWeight: 600,
                                letterSpacing: "-0.96px",
                            }}
                            dangerouslySetInnerHTML={{ __html: heading }}
                        />

                        {/* Subtitle */}
                        <p className="text-[#8FC1DE] font-normal text-[12px] sm:text-[18px] tracking-[0.13em] uppercase mb-6 max-w-[440px] leading-relaxed">
                            DOCTORAL RESEARCH PROGRAMME — GURUGRAM, HARYANA
                        </p>

                        {/* RECRUITER / PARTNER LOGOS ACTIVE RUNNING SLIDER */}
                        {hasApiLogos && (
                            <div className="w-full max-w-[500px] lg:max-w-[540px] mt-2 mb-4 lg:mb-0">
                                <Carousel
                                    opts={{
                                        align: "start",
                                        loop: true,
                                    }}
                                    plugins={[
                                        Autoplay({
                                            delay: 2000,
                                            stopOnInteraction: false,
                                        }),
                                    ]}
                                    className="w-full"
                                >
                                    <CarouselContent className="-ml-6 sm:-ml-8 flex items-center">
                                        {displayLogos.map((logo, idx) => (
                                            <CarouselItem
                                                key={`${logo.id}-${idx}`}
                                                className="pl-6 sm:pl-8 basis-auto shrink-0 flex items-center justify-center"
                                            >
                                                <div className="h-[64px] max-w-[167px] w-auto flex items-center justify-center brightness-0 invert opacity-100 hover:opacity-100 transition-opacity">
                                                    <Image
                                                        src={`${STRAPI_URL}${logo.url}`}
                                                        alt="Partner Logo"
                                                        width={167}
                                                        height={64}
                                                        className="h-[64px] max-w-[167px] w-auto object-contain"
                                                    />
                                                </div>
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                </Carousel>
                            </div>
                        )}
                    </div>

                    {/* GRADUATE GIRL IMAGE (Starts flush from bottom: 0, overlapping form with z-30) */}
                    <div className="relative lg:absolute lg:right-0 xl:-right-4 bottom-0 z-30 pointer-events-none flex justify-center mt-6 lg:mt-0">
                        <div className="relative w-[340px] h-[380px] sm:w-[420px] sm:h-[470px] lg:w-[490px] lg:h-[550px] xl:w-[580px] xl:h-[620px]">
                            <Image
                                src="/images/phd/girl.png"
                                alt="PhD Graduate Celebrating"
                                fill
                                priority
                                className="object-contain object-bottom"
                                sizes="(max-width: 640px) 340px, (max-width: 1024px) 420px, (max-width: 1280px) 490px, 580px"
                            />
                        </div>
                    </div>

                    {/* BOTTOM STATS & DIVIDER (DURATION & FEE / YEAR ONLY) */}
                    <div className="relative z-10 w-full mt-8 lg:mt-auto pt-4">
                        {/* Divider Line */}
                        <div className="w-full max-w-[460px] lg:max-w-[480px] h-[1.5px] bg-[#8FC1DE] opacity-30 mb-5" />

                        {/* 2 Columns Stats Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-0 max-w-[460px] lg:max-w-[480px]">
                            {/* Column 1: DURATION */}
                            <div className="pr-2 sm:pr-6">
                                <p className="text-[#8FC1DE] uppercase text-[11px] sm:text-[12px] font-normal tracking-wider mb-1">
                                    DURATION
                                </p>
                                <p className="text-white font-bold text-[19px] sm:text-[21px] lg:text-[23px] leading-tight mb-1">
                                    {durationValue}
                                </p>
                                <p className="text-[#8FC1DE] text-[13px] leading-snug">
                                    {durationSubtitle}
                                </p>
                            </div>

                            {/* Column 2: FEE / YEAR */}
                            <div className="sm:border-l sm:border-[#8FC1DE]/30 sm:pl-6 lg:pl-8 pr-2 sm:pr-4 pt-3 sm:pt-0 border-t border-[#8FC1DE]/15 sm:border-t-0">
                                <p className="text-[#8FC1DE] uppercase text-[11px] sm:text-[12px] font-normal tracking-wider mb-1">
                                    FEE / YEAR
                                </p>
                                <p className="text-white font-bold text-[19px] sm:text-[21px] lg:text-[23px] leading-tight mb-1">
                                    {feeValue}
                                </p>
                                <p className="text-[#8FC1DE] text-[13px] leading-snug">
                                    {feeSubtitle}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE ADMISSION FORM (Aligned with 1440px container, pulled in naturally) */}
                <div className="relative z-10 w-full lg:w-[30%] xl:w-[28%] bg-white flex flex-col justify-center px-4 sm:px-6 lg:px-4 xl:px-2 pt-10 sm:pt-14 lg:pt-36 xl:pt-40 pb-8 lg:pb-4">
                    <div className="w-full max-w-[420px] mx-auto bg-white border-0 border-none shadow-none p-0 sm:p-2">
                        <div className="mb-3 px-1">
                            <h2 className="font-bold text-[18px] sm:text-[20px] lg:text-[20px] leading-[1.45]">
                                <span className="text-[#CB000D] block">
                                    Apply for International Admission
                                </span>
                                <span className="text-[#000000] block font-bold">
                                    at K.R. Mangalam University Today
                                </span>
                            </h2>
                        </div>

                        <div className="w-full min-h-[490px]">
                            <NoPaperForm formId={formId} height="520px" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
