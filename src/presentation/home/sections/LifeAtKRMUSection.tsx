"use client";

import { useMemo, useRef, useEffect } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import SectionDivider from "@/components/common/SectionDivider";
import Link from "next/link";
import { SectionTitle } from "@/components/common/SectionTitle";
import {
    LIFE_AT_KRMU_CAROUSEL_CONFIGS,
    LIFE_AT_KRMU_GALLERY,
    LIFE_AT_KRMU_CELEBRITY_GALLERY,
} from "@/features/home";
import { resolveHomeEventAlt } from "@/alt-text";

export function LifeAtKRMUSection() {
    // Row 1 (Top Slider): Campus Life, Labs & Academics (/images/home/whykrmu)
    const row1 = LIFE_AT_KRMU_GALLERY;
    // Row 2 (Bottom Slider): Celebrities, Concerts & Fests (/images/home/whykrmu/celebrity)
    const row2 = LIFE_AT_KRMU_CELEBRITY_GALLERY;

    // Tripled sets for mathematically seamless infinite marquee on all screen sizes
    const row1Items = useMemo(() => [...row1, ...row1, ...row1], [row1]);
    const row2Items = useMemo(() => [...row2, ...row2, ...row2], [row2]);

    const bottomSliderRef = useRef<HTMLDivElement>(null);
    const isHoveredRef = useRef(false);
    const isManualScrollingRef = useRef(false);
    const manualScrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Continuous smooth movement + loop for bottom celebrity slider
    useEffect(() => {
        const slider = bottomSliderRef.current;
        if (!slider) return;

        // Set initial scroll position to the middle set for seamless bidirectional scroll
        const updateInitialPosition = () => {
            if (slider && slider.scrollWidth > 0) {
                const singleSetWidth = slider.scrollWidth / 3;
                if (slider.scrollLeft === 0) {
                    slider.scrollLeft = singleSetWidth;
                }
            }
        };

        const initTimer = setTimeout(updateInitialPosition, 50);

        let animationFrameId: number;
        // 0.8px per frame ≈ 48px/s, smooth continuous movement
        const speed = 0.8;

        const step = () => {
            if (
                !isHoveredRef.current &&
                !isManualScrollingRef.current &&
                slider &&
                slider.scrollWidth > 0
            ) {
                const singleSetWidth = slider.scrollWidth / 3;
                // Reverse / RTL direction (same as original marquee)
                slider.scrollLeft -= speed;

                if (slider.scrollLeft <= 0) {
                    slider.scrollLeft += singleSetWidth;
                } else if (slider.scrollLeft >= singleSetWidth * 2) {
                    slider.scrollLeft -= singleSetWidth;
                }
            }
            animationFrameId = requestAnimationFrame(step);
        };

        animationFrameId = requestAnimationFrame(step);

        const handleResize = () => {
            if (!slider || slider.scrollWidth === 0) return;
            const singleSetWidth = slider.scrollWidth / 3;
            if (
                slider.scrollLeft < singleSetWidth * 0.3 ||
                slider.scrollLeft > singleSetWidth * 2.2
            ) {
                slider.scrollLeft = singleSetWidth;
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            clearTimeout(initTimer);
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", handleResize);
            if (manualScrollTimeoutRef.current) {
                clearTimeout(manualScrollTimeoutRef.current);
            }
        };
    }, [row2Items]);

    const handleBottomScroll = (direction: "left" | "right") => {
        const slider = bottomSliderRef.current;
        if (!slider) return;

        isManualScrollingRef.current = true;
        if (manualScrollTimeoutRef.current) {
            clearTimeout(manualScrollTimeoutRef.current);
        }

        const singleSetWidth = slider.scrollWidth / 3;

        // Ensure safe wrapping before scrolling
        if (direction === "left" && slider.scrollLeft < singleSetWidth * 0.4) {
            slider.scrollLeft += singleSetWidth;
        } else if (
            direction === "right" &&
            slider.scrollLeft > singleSetWidth * 1.8
        ) {
            slider.scrollLeft -= singleSetWidth;
        }

        // Get responsive card width
        const firstCard = slider.firstElementChild as HTMLElement;
        const cardWidth = firstCard ? firstCard.offsetWidth : 460;
        const scrollAmount = direction === "left" ? -cardWidth : cardWidth;

        slider.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
        });

        // Resume auto-scroll after manual smooth scroll completes
        manualScrollTimeoutRef.current = setTimeout(() => {
            isManualScrollingRef.current = false;
        }, 800);
    };

    const renderCard = (img: (typeof LIFE_AT_KRMU_GALLERY)[0], key: string) => (
        <div
            key={key}
            className="group relative shrink-0 w-[280px] sm:w-[380px] md:w-[460px] lg:w-[520px] h-[180px] sm:h-[240px] md:h-[290px] lg:h-[330px] overflow-hidden cursor-pointer bg-[#0A1017] select-none"
        >
            {/* Card Image */}
            <Image
                src={img.src}
                alt={resolveHomeEventAlt(
                    img.title || img.alt || img.src,
                    img.alt
                )}
                fill
                sizes="(max-width: 768px) 380px, 520px"
                className="object-cover object-center group-hover:scale-[1.04] transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] pointer-events-none will-change-transform"
                loading="lazy"
            />

            {/* Subtle bottom gradient vignette (Smooth height and opacity expansion) */}
            <div className="absolute inset-x-0 bottom-0 h-[55%] group-hover:h-[65%] bg-gradient-to-t from-black/90 via-black/35 to-transparent pointer-events-none z-10 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]" />

            {/* Bottom Content Area */}
            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 md:p-6 text-left pointer-events-none z-20 flex flex-col justify-end">
                <div className="transform transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
                    <h4 className="text-white text-sm sm:text-base md:text-[20px] lg:text-[22px] font-semibold font-serif leading-snug mb-0.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                        {img.title || img.alt}
                    </h4>
                    {img.description && (
                        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
                            <div className="overflow-hidden">
                                <p className="text-white/90 text-[11px] sm:text-xs md:text-[13px] line-clamp-2 leading-relaxed font-light drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] pt-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out">
                                    {img.description}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );

    return (
        <section className="relative w-full overflow-hidden py-10 md:py-12 xl:py-20 font-poppins">
            <div className="container mx-auto px-0 md:px-12 relative z-10 text-center mb-6 md:mb-8 lg:mb-12">
                <SectionTitle title="Why KRMU?" />
                <p className="font-poppins font-[275] text-[24px] md:text-[42px] leading-[1.2] md:leading-[30px] tracking-normal text-white mb-6">
                    A Closer Look at Life@KRMU
                </p>
                <p className="max-w-[340px] sm:max-w-[380px] md:max-w-7xl text-justify mx-auto text-white/80 text-sm md:text-[16px] leading-[1.6] md:leading-[30px] font-normal md:text-center">
                    At K.R. Mangalam University, life goes beyond the classroom.
                    Our campus is a thriving hub of academic excellence,
                    cultural diversity, and vibrant student life. We encourage
                    students to explore their passion by making them participate
                    in various cultural events, sports, and community services.
                    We believe in creating a friendly and positive environment
                    where students can learn, grow, and build lasting
                    relationships that shape their futures.
                </p>
                {/* 3 Action Buttons (Events, Facilities, Clubs & Societies) */}
                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-6 md:mt-8">
                    {LIFE_AT_KRMU_CAROUSEL_CONFIGS.map((item, idx) => (
                        <Link
                            key={idx}
                            href={item.url || "#"}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[3px] border border-white hover:border-white/90 bg-white/2 hover:bg-white/5 text-white hover:text-white/90 text-[14px] md:text-[15px] font-medium tracking-wide transition-all duration-300 group shadow-sm"
                        >
                            <span>{item.label}</span>
                            <ArrowUpRight
                                size={17}
                                className="text-white group-hover:text-white/90 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                            />
                        </Link>
                    ))}
                </div>
            </div>

            {/* 2-Row Dual-Direction Marquee Image Stream (Single Stream with Left/Right Grayscale Vignette) */}
            <div className="relative w-full mb-8 md:mb-12 overflow-hidden flex flex-col select-none">
                {/* Left Side Subtle Gray Edge Overlay */}
                <div
                    className="pointer-events-none absolute left-0 top-0 bottom-0 z-20 w-[14%] sm:w-[16%] md:w-[18%] lg:w-[20%]"
                    style={{
                        backdropFilter: "grayscale(100%) contrast(95%)",
                        WebkitBackdropFilter: "grayscale(100%) contrast(95%)",
                        maskImage:
                            "linear-gradient(to right, black 30%, transparent 100%)",
                        WebkitMaskImage:
                            "linear-gradient(to right, black 30%, transparent 100%)",
                    }}
                />

                {/* Right Side Subtle Gray Edge Overlay */}
                <div
                    className="pointer-events-none absolute right-0 top-0 bottom-0 z-20 w-[14%] sm:w-[16%] md:w-[18%] lg:w-[20%]"
                    style={{
                        backdropFilter: "grayscale(100%) contrast(95%)",
                        WebkitBackdropFilter: "grayscale(100%) contrast(95%)",
                        maskImage:
                            "linear-gradient(to left, black 30%, transparent 100%)",
                        WebkitMaskImage:
                            "linear-gradient(to left, black 30%, transparent 100%)",
                    }}
                />

                {/* Top Row: Moves Right to Left */}
                <div className="flex w-max krmu-marquee-top">
                    {row1Items.map((img, index) =>
                        renderCard(img, `top-${img.id}-${index}`)
                    )}
                </div>

                {/* Bottom Row Container with Red Navigation Arrows */}
                <div
                    className="relative w-full overflow-hidden group/bottom-slider"
                    onMouseEnter={() => (isHoveredRef.current = true)}
                    onMouseLeave={() => (isHoveredRef.current = false)}
                    onTouchStart={() => (isHoveredRef.current = true)}
                    onTouchEnd={() => (isHoveredRef.current = false)}
                >
                    {/* Centered 1440px Container for Navigation Arrows */}
                    <div className="pointer-events-none absolute inset-0 z-30 flex items-center justify-between max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 w-full">
                        {/* Left Red Arrow Button */}
                        <button
                            type="button"
                            onClick={() => handleBottomScroll("left")}
                            aria-label="Previous celebrity slide"
                            className="pointer-events-auto w-9 h-9 rounded-[2px] bg-[#CB000D] hover:bg-[#b0000b] active:bg-[#900009] text-white flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-110 active:scale-95"
                        >
                            <ChevronLeft className="w-5 h-5 text-white drop-shadow" />
                        </button>

                        {/* Right Red Arrow Button */}
                        <button
                            type="button"
                            onClick={() => handleBottomScroll("right")}
                            aria-label="Next celebrity slide"
                            className="pointer-events-auto w-9 h-9 rounded-[2px] bg-[#CB000D] hover:bg-[#b0000b] active:bg-[#900009] text-white flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-110 active:scale-95"
                        >
                            <ChevronRight className="w-5 h-5 text-white drop-shadow" />
                        </button>
                    </div>

                    {/* Bottom Slider Track */}
                    <div
                        ref={bottomSliderRef}
                        className="flex w-full overflow-x-auto scrollbar-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden select-none"
                    >
                        {row2Items.map((img, index) =>
                            renderCard(img, `bottom-${img.id}-${index}`)
                        )}
                    </div>
                </div>
            </div>

            {/* Feature Cards Grid - Hidden for now as requested */}
            {/*
            <div className="max-w-[1530px] mx-auto relative z-10 px-4 md:px-8 xl:px-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xl:gap-5">
                    {LIFE_AT_KRMU_CAROUSEL_CONFIGS.map((card, i) => {
                        const cardAlt = card.label
                            .toLowerCase()
                            .includes("facilit")
                            ? resolveHomeFacilityAlt(
                                  "Facilities",
                                  "State-of-the-art infrastructure and facilities at K.R. Mangalam University"
                              )
                            : card.label.toLowerCase().includes("club") ||
                                card.label.toLowerCase().includes("societ")
                              ? resolveHomeClubAlt(
                                    "Clubs & Societies",
                                    "KRMU student club/society activity"
                                )
                              : resolveHomeEventAlt(
                                    card.label,
                                    `Campus event at KRMU — ${card.label}`
                                );

                        return (
                            <div
                                key={i}
                                className="group flex flex-col rounded-[4px] overflow-hidden bg-[#0A1017]"
                            >
                                <div className="relative aspect-4/5 w-full flex flex-col justify-end overflow-hidden">
                                    <Image
                                        src={card.bg}
                                        alt={cardAlt}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-1000"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent"></div>

                                    <div className="relative p-5 md:p-6 xl:p-8">
                                        <h3 className="text-white font-poppins font-light text-[28px] xl:text-[42px] leading-[32px] xl:leading-[47px] mb-2 md:mb-4 whitespace-pre-line group-hover:text-brand-gold transition-colors">
                                            {card.title
                                                .split("\n")
                                                .map((line, idx) => (
                                                    <span
                                                        key={idx}
                                                        className={
                                                            line === card.accent
                                                                ? "text-brand-gold"
                                                                : ""
                                                        }
                                                    >
                                                        {line}
                                                        {idx !== 2 ? "\n" : ""}
                                                    </span>
                                                ))}
                                        </h3>
                                    </div>
                                </div>
                                <Link
                                    href={card.url || "#"}
                                    className="block w-full transition-colors duration-300"
                                >
                                    <div className="flex items-center justify-between px-8 py-5">
                                        <span className="text-white font-poppins font-medium text-xl md:text-[24px] leading-tight group-hover:text-brand-gold transition-colors">
                                            {card.label}
                                        </span>
                                        <ArrowUpRight
                                            size={20}
                                            className="text-white group-hover:text-brand-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                                        />
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
            */}
            <SectionDivider />
        </section>
    );
}
