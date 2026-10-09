"use client";

import Image from "next/image";
import Link from "next/link";
import NoPaperFormsWidget from "../components/NoPaperFormsWidget";
import { SocialShareBar } from "@/presentation/blog";

type Props = {
    catName?: string;
    featuredTitle?: string;
    featuredDate?: string;
    featuredImage?: string;
    featuredSlug?: string;
    formId?: string;
};

const HeroSection = ({
    catName,
    featuredTitle = "Why K.R. Mangalam University Best University in 2026",
    featuredDate = "15 July 2026",
    featuredImage = "/images/blog/hero/blog-herobanner.jpg",
    featuredSlug = "k-r-mangalam-university",
    formId = "0d2d6e28c86e4213b353bfe132035965",
}: Props) => {
    const featuredUrl = featuredSlug.startsWith("http")
        ? featuredSlug
        : `/blog/${featuredSlug}`;

    return (
        <section className="pt-[110px] md:pt-[155px] pb-6 md:pb-8">
            <div className="max-w-[1530px] mx-auto w-full px-6 md:px-8 relative z-10 flex flex-col gap-6 md:gap-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6 xl:gap-[31px] w-full">
                    {/* LEFT COLUMN: FEATURED BLOG HERO BANNER (Clickable) */}
                    <div className="w-full lg:flex-1 h-[380px] sm:h-[480px] md:h-[520px] lg:h-[584px] relative rounded-[10px] overflow-hidden flex flex-col justify-end group">
                        {/* Clickable Image Banner */}
                        <Link
                            href={featuredUrl}
                            className="absolute inset-0 z-10 block cursor-pointer"
                            aria-label={catName || featuredTitle}
                        >
                            <Image
                                src={featuredImage}
                                alt={featuredTitle}
                                fill
                                className="object-cover object-[15%_center] sm:object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out cursor-pointer"
                                priority
                                unoptimized
                            />
                        </Link>

                        {/* Logo & Desktop Social Share Overlay */}
                        <div className="absolute top-4 right-4 lg:top-auto lg:bottom-6 lg:right-6 z-20 flex flex-col items-end lg:items-center gap-2 pointer-events-auto">
                            {/* KRMU Logo */}
                            <div className="flex items-center justify-center">
                                <Image
                                    src="/images/blog/hero/krmu-logo.png"
                                    alt="K.R. Mangalam University"
                                    width={140}
                                    height={40}
                                    className="object-contain max-h-[30px] sm:max-h-[40px] w-auto drop-shadow-md"
                                    unoptimized
                                />
                            </div>

                            {/* Desktop Social Share Bar */}
                            <div className="hidden lg:block">
                                <SocialShareBar
                                    title={catName || featuredTitle}
                                />
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: ADMISSION OPEN NPF FORM CARD */}
                    <div className="w-full lg:w-[370px] h-auto lg:h-[585px] bg-white rounded-[10px] p-3 sm:p-4 shadow-2xl flex flex-col text-black flex-shrink-0">
                        <div>
                            <h2 className="text-xl sm:text-[22px] font-bold text-center text-black mb-1 font-poppins tracking-tight">
                                Admission Open
                            </h2>

                            {/* Live NPF Admission Open Widget */}
                            <div className="w-full overflow-hidden rounded-[8px]">
                                {/* Desktop: 510px height */}
                                <div className="hidden lg:block">
                                    <NoPaperFormsWidget
                                        widgetId={formId}
                                        height="510px"
                                    />
                                </div>
                                {/* Mobile/Tablet: tighter height */}
                                <div className="block lg:hidden">
                                    <NoPaperFormsWidget
                                        widgetId={formId}
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

export default HeroSection;
