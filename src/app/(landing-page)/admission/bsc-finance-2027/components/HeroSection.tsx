"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { CirclePlay } from "lucide-react";
import HeroMarquee from "../../CommonComponent2026/HeroMarquee";
import CountdownTimer from "./CountdownTimer";
import CommonLeadPopup from "@/app/(main-website)/components/CommonLeadPopup";
import {
    BscFinanceHeroContent,
    HeroMarqueeSection,
    StatCard,
} from "../contentype";
import NoPaperFormsWidget from "../../CommonComponent2026/NoPaperFormsWidget";

interface HeroSectionProps {
    hero: BscFinanceHeroContent;
    statCards: StatCard[];
    marqueeData: HeroMarqueeSection;
}

const HeroSection = ({ hero, statCards, marqueeData }: HeroSectionProps) => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    const youtubeVideoId = ((url?: string) => {
        if (!url) return "";
        const match = url.match(/(?:youtube\.com\/.*v=|youtu\.be\/)([^&]+)/);
        return match ? match[1] : "";
    })(hero.videoUrl);

    useEffect(() => {
        document.body.style.overflow = isVideoOpen ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isVideoOpen]);

    return (
        <>
            {/* Hero — full viewport */}
            <section className="relative min-h-svh flex flex-col justify-center">
                {/* Background image via Next.js Image for optimization */}
                <Image
                    src="/landingpage/bsc-finance-2026/home-page.png"
                    alt=""
                    fill
                    priority
                    className="object-cover object-top"
                    sizes="100vw"
                    quality={75}
                />
                {/* Dark gradient overlay — left heavier, right lighter for image visibility */}
                <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[rgba(5,10,28,0.7)] via-[rgba(5,10,28,0.5)] to-[rgba(5,10,28,0.3)]" />

                <div className="relative z-[2] max-w-[1300px] mx-auto w-full px-4 sm:px-6 pt-24 sm:pt-32 lg:pt-28 pb-10 sm:pb-16 flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-12">
                    {/* LEFT — text content & stats */}
                    <div className="w-full lg:w-[58%] flex flex-col gap-4 sm:gap-6 text-white lg:text-left text-center">
                        <div className="flex flex-col gap-3 sm:gap-4">
                            <span className="text-[13px] sm:text-[14px] font-medium tracking-normal text-white/90">
                                {hero.schoolLabel}
                            </span>

                            <h1
                                className="font-bold italic text-[36px] sm:text-[48px] md:text-[56px] lg:text-[68px] leading-[1.15] tracking-[-0.02em] text-white m-0"
                                style={{
                                    fontFamily:
                                        "'Libre Caslon Condensed', serif",
                                }}
                            >
                                {hero.heading}
                            </h1>

                            <h2 className="font-medium text-[18px] sm:text-[22px] lg:text-[26px] leading-[1.3] tracking-normal text-white/95 m-0">
                                {hero.subheading}
                            </h2>

                            <p className="font-normal text-[15px] sm:text-[17px] leading-relaxed tracking-normal text-white/80 max-w-xl m-0 lg:mx-0 mx-auto">
                                {hero.description}
                            </p>
                        </div>

                        {/* Stats grid — moved to left side */}
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-3 w-full max-w-4xl mt-2">
                            {statCards.map((card, idx) => (
                                <div
                                    key={idx}
                                    className="flex flex-col items-center lg:items-start justify-center text-center lg:text-left px-4 py-5 rounded-xl gap-1 transition-colors duration-200 border border-white/20"
                                    style={{
                                        background: "rgba(255, 255, 255, 0.05)",
                                        backdropFilter: "blur(4px)",
                                    }}
                                >
                                    <span
                                        className="font-bold italic text-[28px] sm:text-[34px] xl:text-[40px] leading-[100%] tracking-[-0.01em] text-white"
                                        style={{
                                            fontFamily:
                                                "'Libre Caslon Condensed', serif",
                                        }}
                                    >
                                        {card.value}
                                    </span>
                                    <span className="font-medium text-[10px] sm:text-[12px] leading-tight tracking-normal text-white/70 uppercase">
                                        {card.label}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* <div className="mt-2">
              <CountdownTimer
                targetDate={hero.countdownTargetDate}
                lastDateLabel={hero.lastDateLabel}
              />
            </div> */}

                        {/* CTA buttons */}
                        <div className="flex flex-wrap gap-4 lg:justify-start justify-center mt-2">
                            <CommonLeadPopup
                                buttonText={hero.brochureBtnLabel}
                                buttonClassName="relative overflow-hidden group inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white border border-white hover:bg-white/90 transition-all duration-200 font-bold text-[15px] leading-5 tracking-wide text-[#050a1c] cursor-pointer"
                                redirectUrl={hero.brochureBtnHref}
                                form_name="BSc Finance 2026 - Brochure Download"
                            />

                            {hero.videoUrl && (
                                <button
                                    onClick={() => setIsVideoOpen(true)}
                                    className="inline-flex items-center gap-2 bg-transparent font-semibold text-white hover:text-white/80 transition-colors duration-200 text-[13px] leading-5 cursor-pointer"
                                >
                                    <CirclePlay size={35} strokeWidth={1.2} />
                                    <span>Watch Video</span>
                                </button>
                            )}
                        </div>
                    </div>

                    {/* RIGHT — Form content */}
                    <div
                        id="apply-section"
                        className="w-full lg:w-[42%] lg:max-w-[450px] shrink-0 self-center lg:self-start lg:mt-0 mt-8 scroll-mt-20"
                    >
                        <div className="min-h-[580px]">
                            <NoPaperFormsWidget
                                widgetId="047a23de933bd996c4c01578fad16790"
                                height="580px"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Red marquee — uses existing CommonComponent2026/HeroMarquee */}
            <HeroMarquee data={marqueeData} />

            {/* Video Modal */}
            {isVideoOpen && youtubeVideoId && (
                <div
                    onClick={() => setIsVideoOpen(false)}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 p-4 md:p-10 cursor-pointer backdrop-blur-md"
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-7xl aspect-video shadow-2xl overflow-hidden rounded-2xl bg-black cursor-auto"
                    >
                        <button
                            onClick={() => setIsVideoOpen(false)}
                            className="absolute top-3 right-3 z-[10000] text-white/80 hover:text-white flex items-center justify-center transition-all duration-300 hover:rotate-90 hover:scale-110 cursor-pointer"
                            aria-label="Close video"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M18 6L6 18M6 6L18 18"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                        <div className="w-full h-full bg-black">
                            <iframe
                                className="w-full h-full"
                                src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0`}
                                title="YouTube video"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default HeroSection;
