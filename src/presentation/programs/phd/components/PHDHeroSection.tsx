"use client";

import React, { useState } from "react";
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
    eligibleCriteria,
    logoSlide = [],
    formId = "b8a1d46829929a0a7c19f4fc185e7d45",
}: PHDHeroSectionProps) {
    const [showFullEligibility, setShowFullEligibility] = useState(false);

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

    // Parse Eligibility (Show real data from API)
    const eligibilityValue = "PG DEGREE";
    const rawEligibilityContent =
        eligibleCriteria?.countercontent?.trim() || "";
    const isLongEligibility = rawEligibilityContent.length > 100;
    const truncatedEligibility = isLongEligibility
        ? `${rawEligibilityContent.slice(0, 100).trim()}...`
        : rawEligibilityContent;

    const schoolName = schoolCategory?.name || "SOET";

    // Prepare partner/recruiter logos for the slider
    const hasApiLogos = logoSlide && logoSlide.length > 0;
    const displayLogos = hasApiLogos
        ? logoSlide.length < 5
            ? [...logoSlide, ...logoSlide, ...logoSlide]
            : logoSlide
        : [];

    return (
        <section className="w-full bg-white overflow-hidden">
            {/* FULL WIDTH HERO ROW: Dark Blue box from left:0 to ~72%, Form on right */}
            <div className="w-full flex flex-col lg:flex-row items-stretch justify-between">
                {/* LEFT / MAIN DARK BLUE SECTION (Starts flush from screen left edge) */}
                <div
                    className="relative z-20 w-full lg:w-[70%] xl:w-[72%] 2xl:w-[74%] bg-[#14233D] rounded-none rounded-br-[80px] sm:rounded-br-[100px] lg:rounded-br-[120px] flex flex-col justify-between overflow-visible min-h-[700px] lg:min-h-[780px] pl-5 sm:pl-8 md:pl-10 lg:pl-12 xl:pl-[51px] 2xl:pl-[51px] pr-5 sm:pr-8 lg:pr-10 pt-28 sm:pt-32 md:pt-36 lg:pt-44 xl:pt-48 pb-8"
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

                        {/* RECRUITER / PARTNER LOGOS ACTIVE RUNNING SLIDER (Exact Figma: width 167, height 64) */}
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

                    {/* GRADUATE GIRL IMAGE (Positioned flush on divider line, overlapping form with z-30) */}
                    <div className="relative lg:absolute lg:right-2 xl:-right-8 2xl:-right-12 bottom-0 lg:bottom-[138px] xl:bottom-[144px] z-30 pointer-events-none flex justify-center mt-6 lg:mt-0">
                        <div className="relative w-[280px] h-[290px] sm:w-[350px] sm:h-[370px] lg:w-[430px] lg:h-[420px] xl:w-[490px] xl:h-[480px]">
                            <Image
                                src="/images/phd/girl.png"
                                alt="PhD Graduate Celebrating"
                                fill
                                priority
                                className="object-contain object-bottom"
                                sizes="(max-width: 640px) 280px, (max-width: 1024px) 350px, (max-width: 1280px) 430px, 490px"
                            />
                        </div>
                    </div>

                    {/* BOTTOM STATS & DIVIDER (Matching design: width: 892px; opacity: 0.3; border: 1px solid #8FC1DE) */}
                    <div className="relative z-10 w-full mt-8 lg:mt-auto pt-4">
                        {/* Divider Line */}
                        <div className="w-full max-w-[925px] h-[2px] bg-[#8FC1DE] opacity-30 mb-5" />

                        {/* 3 Columns Stats Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-[190px_200px_1fr] lg:grid-cols-[200px_220px_1fr] gap-5 sm:gap-0 max-w-[920px]">
                            {/* Column 1: DURATION */}
                            <div className="pr-2 sm:pr-8">
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
                            <div className="sm:border-l sm:border-[#8FC1DE]/30 sm:pl-5 lg:pl-8 pr-2 sm:pr-4 pt-3 sm:pt-0 border-t border-[#8FC1DE]/15 sm:border-t-0">
                                <p className="text-[#8FC1DE] uppercase text-[11px] sm:text-[12px] font-normal tracking-wider mb-1">
                                    FEE / YEAR
                                </p>
                                <p className="text-white font-bold text-[19px] sm:text-[21px] lg:text-[23px] xl:text-[24px] leading-tight mb-1">
                                    {feeValue}
                                </p>
                                <p className="text-[#8FC1DE] text-[13px] leading-snug">
                                    {feeSubtitle}
                                </p>
                            </div>

                            {/* Column 3: ELIGIBILITY */}
                            <div className="sm:border-l sm:border-[#8FC1DE]/30 sm:pl-5 lg:pl-8 pt-3 sm:pt-0 border-t border-[#8FC1DE]/15 sm:border-t-0">
                                <p className="text-[#8FC1DE] uppercase text-[11px] sm:text-[12px] font-normal tracking-wider mb-1">
                                    ELIGIBILITY
                                </p>
                                <p className="text-white font-bold text-[19px] sm:text-[21px] lg:text-[23px] leading-tight mb-1">
                                    {eligibilityValue}
                                </p>
                                <p className="text-[#8FC1DE] text-[13px] leading-snug">
                                    {showFullEligibility
                                        ? rawEligibilityContent
                                        : truncatedEligibility}
                                    {isLongEligibility && (
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setShowFullEligibility(
                                                    !showFullEligibility
                                                )
                                            }
                                            className="ml-1 text-[#8FC1DE] underline cursor-pointer inline text-[12px] hover:text-white"
                                        >
                                            {showFullEligibility
                                                ? "less"
                                                : "more"}
                                        </button>
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE ADMISSION FORM (Seamless, zero border, zero shadow) */}
                <div className="relative z-10 w-full lg:w-[30%] xl:w-[28%] 2xl:w-[26%] bg-white flex flex-col justify-center px-4 sm:px-6 lg:px-4 xl:px-2 pt-10 sm:pt-14 lg:pt-36 xl:pt-40 pb-8 lg:pb-4">
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
