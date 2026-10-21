"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const heroSlides = [
    {
        src: "/images/programme/hero/program-hero-banner.png",
        alt: "K.R. Mangalam University Academic Programmes",
    },
    {
        src: "/images/programme/hero/program-hero-banner-1.jpg",
        alt: "KRMU Students - Management & Commerce Programmes",
    },
    {
        src: "/images/programme/hero/program-hero-banner-2.jpg",
        alt: "KRMU Students - Design & Creative Arts",
    },
    {
        src: "/images/programme/hero/program-hero-banner-3.jpg",
        alt: "KRMU Students - Legal Studies & Law",
    },
    {
        src: "/images/programme/hero/program-hero-banner-4.jpg",
        alt: "KRMU Students - Architecture & Planning",
    },
    {
        src: "/images/programme/hero/program-hero-banner-5.jpg",
        alt: "KRMU Students - Medical & Allied Health Sciences",
    },
    {
        src: "/images/programme/hero/program-hero-banner-6.jpg",
        alt: "KRMU Students - Engineering & Technology",
    },
];

const HeroSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [touchStartX, setTouchStartX] = useState<number | null>(null);
    const [touchEndX, setTouchEndX] = useState<number | null>(null);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentIndex(
            (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
        );
    }, []);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    // Auto-advance slides smoothly every 4.5 seconds (paused on hover)
    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            nextSlide();
        }, 4500);
        return () => clearInterval(interval);
    }, [isPaused, nextSlide]);

    // Touch swipe handling for mobile
    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchEndX(null);
        setTouchStartX(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEndX(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStartX || !touchEndX) return;
        const distance = touchStartX - touchEndX;
        if (distance > 45) {
            nextSlide();
        } else if (distance < -45) {
            prevSlide();
        }
    };

    return (
        <section className="relative w-full overflow-hidden pt-28 sm:pt-[120px] lg:pt-38 lg:pb-8 font-poppins">
            <div className="mx-auto max-w-[1440px] w-full px-0 md:px-6">
                <div
                    className="w-full rounded-[0px] lg:rounded-[6px] relative z-10 overflow-hidden bg-[#07141E] group"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {/* Background Images Carousel with crystal clear smooth crossfade */}
                    <div className="relative w-full h-[180px] sm:h-[210px] md:h-[230px] lg:h-[240px] overflow-hidden bg-[#07141E]">
                        {heroSlides.map((slide, index) => {
                            const isActive = index === currentIndex;
                            return (
                                <div
                                    key={slide.src}
                                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                                        isActive
                                            ? "opacity-100 z-[1]"
                                            : "opacity-0 z-0 pointer-events-none"
                                    }`}
                                    aria-hidden={!isActive}
                                >
                                    <Image
                                        src={slide.src}
                                        alt={slide.alt}
                                        fill
                                        priority={index === 0}
                                        loading={index === 0 ? "eager" : "lazy"}
                                        unoptimized
                                        className="w-full h-full object-cover object-top lg:object-[center_15%] block rounded-t-[0px] lg:rounded-[6px]"
                                    />
                                </div>
                            );
                        })}

                        {/* Desktop Gradient Overlay (visible on lg screens and above) */}
                        <div
                            className="hidden lg:block absolute inset-0 pointer-events-none z-[3]"
                            style={{
                                background:
                                    "linear-gradient(90deg, rgba(7, 20, 30, 0.94) 0%, rgba(7, 20, 30, 0.8) 25%, rgba(7, 20, 30, 0.35) 50%, rgba(7, 20, 30, 0) 70%)",
                            }}
                        />

                        {/* Subtle bottom vignette */}
                        <div className="absolute inset-x-0 bottom-0 h-14 pointer-events-none z-[3] bg-gradient-to-t from-black/40 to-transparent" />

                        {/* Slide Navigation Arrows (visible on hover) */}
                        <div className="absolute inset-y-0 left-3 right-3 flex items-center justify-between pointer-events-none z-[12]">
                            <button
                                type="button"
                                onClick={prevSlide}
                                aria-label="Previous banner"
                                className="pointer-events-auto opacity-0 group-hover:opacity-90 hover:opacity-100 transition-all duration-300 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-sm text-white flex items-center justify-center cursor-pointer shadow-lg hover:scale-105"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                type="button"
                                onClick={nextSlide}
                                aria-label="Next banner"
                                className="pointer-events-auto opacity-0 group-hover:opacity-90 hover:opacity-100 transition-all duration-300 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-sm text-white flex items-center justify-center cursor-pointer shadow-lg hover:scale-105"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Hero Content */}
                    {/* Mobile & Tablet (< lg): Stacked below image with dark background */}
                    {/* Desktop (lg:): Overlay over left side of hero image */}
                    <div className="lg:absolute lg:inset-0 z-10 w-full lg:w-1/2 p-5 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center text-left bg-[#061623] lg:bg-transparent rounded-b-[0px] lg:rounded-none pointer-events-none">
                        <div className="pointer-events-auto">
                            <span className="text-white/80 text-xs md:text-sm uppercase tracking-[0.2em] font-light font-poppins block mb-1">
                                Academics
                            </span>
                            <div className="space-y-1 md:space-y-2 mb-2">
                                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white font-serif leading-tight">
                                    Programmes
                                </h1>
                                <div
                                    className="w-full max-w-[360px] h-[2px] my-2 sm:my-3"
                                    style={{
                                        background:
                                            "linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0.6) 40%, rgba(255, 255, 255, 0) 100%)",
                                    }}
                                />
                            </div>
                            <p className="text-white/80 text-sm sm:text-base font-light font-poppins max-w-lg leading-relaxed mb-1 lg:mb-2">
                                Transform your Life with the Right Programme
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
