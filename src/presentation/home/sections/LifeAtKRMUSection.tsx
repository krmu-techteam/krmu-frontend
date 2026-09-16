"use client";

import { useMemo } from "react";
import { ArrowUpRight } from "lucide-react";
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
                    At K.R. Mangalam University, life goes be yond the
                    classroom. Our campus is a thriving hub of academic
                    excellence, cultural diversity, and vibrant student life. We
                    encourage students to explore their passion by making them
                    participate in various cultural events, sports, and
                    community services. We believe in creating a friendly and
                    positive environment where students can learn, grow, and
                    build lasting relationships that shape their futures.
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

                {/* Bottom Row: Moves Left to Right (RTL / Reverse) */}
                <div className="flex w-max krmu-marquee-bottom">
                    {row2Items.map((img, index) =>
                        renderCard(img, `bottom-${img.id}-${index}`)
                    )}
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
