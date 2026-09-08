"use client";

import { useMemo } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import SectionDivider from "@/components/common/SectionDivider";
import Link from "next/link";
import { SectionTitle } from "@/components/common/SectionTitle";
import {
    LIFE_AT_KRMU_CAROUSEL_CONFIGS,
    LIFE_AT_KRMU_GALLERY,
} from "@/features/home";

export function LifeAtKRMUSection() {
    // Row 1 starts from index 0 (Images 1, 2, 3...)
    const row1 = LIFE_AT_KRMU_GALLERY;
    // Row 2 starts from index 3 (Images 4, 5, 6...) matching the reference layout
    const row2 = useMemo(
        () => [
            ...LIFE_AT_KRMU_GALLERY.slice(3),
            ...LIFE_AT_KRMU_GALLERY.slice(0, 3),
        ],
        []
    );

    // Tripled sets for mathematically seamless infinite marquee on all screen sizes
    const row1Items = useMemo(() => [...row1, ...row1, ...row1], [row1]);
    const row2Items = useMemo(() => [...row2, ...row2, ...row2], [row2]);

    return (
        <section className="relative w-full overflow-hidden py-10 md:py-12 xl:py-20 font-poppins">
            {/* Precision Spec Glow (Bottom Left) - Spec: Blue Institutional Soft Light */}
            <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(0,162,255,0.08)_0%,transparent_70%)] rounded-full blur-[100px] z-0 pointer-events-none opacity-40 transition-opacity"></div>

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
                <Link
                    href={"/happenings/news-and-events"}
                    className="inline-flex gap-1 items-center  text-[16px] font-light tracking-wide text-white hover:text-white/70  transition-colors duration-300 mt-6"
                >
                    <span>
                        <ArrowRight size={18} />
                    </span>
                    <span>Learn More</span>
                </Link>
            </div>

            {/* 2-Row Dual-Direction Marquee Image Stream (LPU Spotlight Style - Seamless Zero Gap) */}
            <div className="relative w-full mb-16 md:mb-20 overflow-hidden flex flex-col select-none">
                {/* Top Row: Moves Right to Left */}
                <div className="flex w-max krmu-marquee-top">
                    {row1Items.map((img, index) => (
                        <div
                            key={`top-${img.id}-${index}`}
                            className="group relative shrink-0 w-[280px] sm:w-[380px] md:w-[460px] lg:w-[520px] h-[180px] sm:h-[240px] md:h-[290px] lg:h-[330px] overflow-hidden cursor-pointer bg-[#0A1017]"
                        >
                            {/* Card Image */}
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                sizes="(max-width: 768px) 380px, 520px"
                                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out pointer-events-none"
                                loading="lazy"
                            />

                            {/* Default subtle resting bottom gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />

                            {/* LPU-style Interactive Hover Content Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/35 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out flex flex-col justify-end p-4 sm:p-5 md:p-6 text-left pointer-events-none">
                                <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                    {img.category && (
                                        <span className="inline-block px-2.5 py-0.5 mb-1.5 md:mb-2 text-[10px] md:text-[11px] font-semibold tracking-wider uppercase text-brand-gold bg-brand-gold/15 border border-brand-gold/30 rounded-[3px]">
                                            {img.category}
                                        </span>
                                    )}
                                    <h4 className="text-white text-sm sm:text-base md:text-lg font-semibold font-poppins leading-snug mb-1">
                                        {img.title || img.alt}
                                    </h4>
                                    {img.description && (
                                        <p className="text-white/80 text-[11px] sm:text-xs md:text-[13px] line-clamp-2 leading-relaxed font-light">
                                            {img.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Row: Moves Left to Right (RTL / Reverse) */}
                <div className="flex w-max krmu-marquee-bottom">
                    {row2Items.map((img, index) => (
                        <div
                            key={`bottom-${img.id}-${index}`}
                            className="group relative shrink-0 w-[280px] sm:w-[380px] md:w-[460px] lg:w-[520px] h-[180px] sm:h-[240px] md:h-[290px] lg:h-[330px] overflow-hidden cursor-pointer bg-[#0A1017]"
                        >
                            {/* Card Image */}
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                sizes="(max-width: 768px) 380px, 520px"
                                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out pointer-events-none"
                                loading="lazy"
                            />

                            {/* Default subtle resting bottom gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />

                            {/* LPU-style Interactive Hover Content Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/35 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out flex flex-col justify-end p-4 sm:p-5 md:p-6 text-left pointer-events-none">
                                <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                    {img.category && (
                                        <span className="inline-block px-2.5 py-0.5 mb-1.5 md:mb-2 text-[10px] md:text-[11px] font-semibold tracking-wider uppercase text-brand-gold bg-brand-gold/15 border border-brand-gold/30 rounded-[3px]">
                                            {img.category}
                                        </span>
                                    )}
                                    <h4 className="text-white text-sm sm:text-base md:text-lg font-semibold font-poppins leading-snug mb-1">
                                        {img.title || img.alt}
                                    </h4>
                                    {img.description && (
                                        <p className="text-white/80 text-[11px] sm:text-xs md:text-[13px] line-clamp-2 leading-relaxed font-light">
                                            {img.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Feature Cards Grid - Premium Dark Theme */}
            <div className="max-w-[1530px] mx-auto relative z-10 px-4 md:px-8 xl:px-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xl:gap-5">
                    {LIFE_AT_KRMU_CAROUSEL_CONFIGS.map((card, i) => (
                        <div
                            key={i}
                            className="group flex flex-col rounded-[4px] overflow-hidden bg-[#0A1017]"
                        >
                            <div className="relative aspect-4/5 w-full flex flex-col justify-end overflow-hidden">
                                <Image
                                    src={card.bg}
                                    alt={card.label}
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
                    ))}
                </div>
            </div>
            <SectionDivider />
        </section>
    );
}
