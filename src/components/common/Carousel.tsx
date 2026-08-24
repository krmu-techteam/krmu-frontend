"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import AutoScroll from "embla-carousel-auto-scroll";
import Fade from "embla-carousel-fade";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
    children: React.ReactNode;
    options?: EmblaOptionsType;
    autoplay?: boolean;
    autoplayDelay?: number;
    autoScroll?: boolean;
    autoScrollSpeed?: number;
    stopOnInteraction?: boolean;
    showArrows?: boolean;
    showDots?: boolean;
    className?: string;
    containerClassName?: string;
    slideClassName?: string;
    prevArrowClassName?: string;
    nextArrowClassName?: string;
    activeDotClassName?: string;
    dotClassName?: string;
    fade?: boolean;
    setApi?: (api: any) => void;
}

export const Carousel = ({
    children,
    options = { loop: true },
    autoplay = true,
    autoplayDelay = 4000,
    autoScroll = false,
    autoScrollSpeed = 1,
    stopOnInteraction = false,
    showArrows = true,
    showDots = true,
    className = "",
    containerClassName = "",
    slideClassName = "",
    prevArrowClassName = "",
    nextArrowClassName = "",
    activeDotClassName = "",
    dotClassName = "",
    fade = false,
    setApi,
}: CarouselProps) => {
    const isAutoPlayActive = autoplay && !autoScroll;

    const plugins = React.useMemo(() => {
        const list = [];
        if (isAutoPlayActive) {
            list.push(Autoplay({ delay: autoplayDelay, stopOnInteraction }));
        }
        if (autoScroll) {
            list.push(
                AutoScroll({
                    speed: autoScrollSpeed,
                    stopOnInteraction,
                    stopOnMouseEnter: true,
                })
            );
        }
        if (fade) {
            list.push(Fade());
        }
        return list;
    }, [
        isAutoPlayActive,
        autoplayDelay,
        autoScroll,
        autoScrollSpeed,
        stopOnInteraction,
        fade,
    ]);

    const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(
        Boolean(options?.loop ?? true)
    );
    const [nextBtnEnabled, setNextBtnEnabled] = useState(
        Boolean(options?.loop ?? true)
    );
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const scrollPrev = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollPrev();
         
        const autoScrollPlugin = (emblaApi.plugins() as any).autoScroll;
        if (autoScrollPlugin && typeof autoScrollPlugin.stop === "function") {
            autoScrollPlugin.stop();
        }
         
        const autoplayPlugin = (emblaApi.plugins() as any).autoplay;
        if (autoplayPlugin && typeof autoplayPlugin.reset === "function") {
            autoplayPlugin.reset();
        }
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollNext();
         
        const autoScrollPlugin = (emblaApi.plugins() as any).autoScroll;
        if (autoScrollPlugin && typeof autoScrollPlugin.stop === "function") {
            autoScrollPlugin.stop();
        }
         
        const autoplayPlugin = (emblaApi.plugins() as any).autoplay;
        if (autoplayPlugin && typeof autoplayPlugin.reset === "function") {
            autoplayPlugin.reset();
        }
    }, [emblaApi]);
    const scrollTo = useCallback(
        (index: number) => {
            if (!emblaApi) return;
            emblaApi.scrollTo(index, true);
             
            const autoplay = (emblaApi.plugins() as any).autoplay;
            if (autoplay && typeof autoplay.reset === "function") {
                autoplay.reset();
            }
        },
        [emblaApi]
    );

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
        setPrevBtnEnabled(Boolean(options?.loop || emblaApi.canScrollPrev()));
        setNextBtnEnabled(Boolean(options?.loop || emblaApi.canScrollNext()));
    }, [emblaApi, options?.loop]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);
    }, [emblaApi, onSelect]);

    useEffect(() => {
        if (!emblaApi || !setApi) return;
        setApi(emblaApi);
    }, [emblaApi, setApi]);

    const childrenArray = React.Children.toArray(children);

    return (
        <div className={`relative ${className}`}>
            <div className="overflow-hidden py-4 -my-4" ref={emblaRef}>
                <div
                    className={`${
                        fade ? "grid grid-cols-1 grid-rows-1 w-full" : "flex"
                    } ${containerClassName}`}
                >
                    {childrenArray.map((child, index) => (
                        <div
                            key={index}
                            className={`min-w-0 shrink-0 grow-0 ${
                                fade
                                    ? "col-start-1 row-start-1 w-full"
                                    : slideClassName || "basis-full"
                            }`}
                            data-active={index === selectedIndex}
                        >
                            {child}
                        </div>
                    ))}
                </div>
            </div>

            {showArrows && childrenArray.length > 1 && (
                <>
                    <button
                        className={`absolute left-0 md:left-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all z-20 disabled:opacity-0 ${prevArrowClassName}`}
                        onClick={scrollPrev}
                        disabled={!prevBtnEnabled}
                        aria-label="Previous slide"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        className={`absolute right-0 md:right-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all z-20 disabled:opacity-0 ${nextArrowClassName}`}
                        onClick={scrollNext}
                        disabled={!nextBtnEnabled}
                        aria-label="Next slide"
                    >
                        <ChevronRight size={24} />
                    </button>
                </>
            )}

            {showDots && childrenArray.length > 1 && (
                <div className="flex justify-center gap-2 pt-3 md:pt-6">
                    {scrollSnaps.map((_, index) => (
                        <button
                            key={index}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                index === selectedIndex
                                    ? activeDotClassName || "bg-brand-gold w-6"
                                    : dotClassName ||
                                      "bg-slate-300 dark:bg-white/20"
                            }`}
                            onClick={() => scrollTo(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};
