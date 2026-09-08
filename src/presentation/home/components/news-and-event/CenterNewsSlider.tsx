"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export interface NewsSlideItem {
    id: number | string;
    image: string;
    date: string;
    title: string;
    link: string;
}

interface CenterNewsSliderProps {
    slides: NewsSlideItem[];
}

export function CenterNewsSlider({ slides }: CenterNewsSliderProps) {
    const [activeSlide, setActiveSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (!slides || slides.length <= 1 || isPaused) return;
        const timer = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % slides.length);
        }, 4500);
        return () => clearInterval(timer);
    }, [isPaused, slides]);

    if (!slides || slides.length === 0) return null;

    const currentSlide = slides[activeSlide] || slides[0];

    return (
        <div
            className="flex flex-col w-full h-full"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Slide Image Box */}
            <div className="relative aspect-[16/10] w-full rounded-[8px] overflow-hidden bg-white/5 shadow-xl">
                {slides.map((slide, idx) => (
                    <Link
                        key={slide.id || idx}
                        href={slide.link}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                            activeSlide === idx
                                ? "opacity-100 z-10 pointer-events-auto"
                                : "opacity-0 z-0 pointer-events-none"
                        }`}
                    >
                        <Image
                            src={slide.image}
                            alt={slide.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover transition-transform duration-700 hover:scale-105"
                            priority={idx === 0}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                    </Link>
                ))}
            </div>

            {/* Slide Metadata & Title */}
            <div className="mt-4 sm:mt-5 min-h-[85px] flex flex-col justify-start">
                <p className="text-white/70 text-xs sm:text-sm font-poppins mb-1">
                    Published On: {currentSlide.date}
                </p>
                <Link href={currentSlide.link}>
                    <h3
                        className="text-white font-serif font-normal text-2xl sm:text-3xl md:text-[30px] leading-tight hover:text-brand-gold transition-colors line-clamp-2"
                        dangerouslySetInnerHTML={{ __html: currentSlide.title }}
                    />
                </Link>
            </div>

            {/* 5 Pagination Dots */}
            <div className="flex items-center gap-2 mt-3">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveSlide(idx)}
                        className={`transition-all duration-300 rounded-full cursor-pointer ${
                            activeSlide === idx
                                ? "w-3.5 h-2 bg-[#CB000D]"
                                : "w-2 h-2 bg-white/40 hover:bg-white/70"
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
