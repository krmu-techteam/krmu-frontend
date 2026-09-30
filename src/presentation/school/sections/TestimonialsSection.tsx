"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionDivider from "@/components/common/SectionDivider";
import {
    TestimonialSectionProps,
    SBAS_STATIC_TESTIMONIALS,
    SEMCE_STATIC_TESTIMONIALS,
    SMAS_STATIC_TESTIMONIALS,
    SOAD_STATIC_TESTIMONIALS,
    SOAS_STATIC_TESTIMONIALS,
    SOED_STATIC_TESTIMONIALS,
    SOET_STATIC_TESTIMONIALS,
    SOLA_STATIC_TESTIMONIALS,
    SOLS_STATIC_TESTIMONIALS,
    SOMC_STATIC_TESTIMONIALS,
    SPRS_STATIC_TESTIMONIALS,
} from "@/features/school";
import { STRAPI_URL } from "@/app/constant";

const TestimonialsSection = ({
    title,
    desc,
    testis,
    slug,
}: TestimonialSectionProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const touchStartX = useRef<number | null>(null);

    const isSBAS =
        slug === "school-of-basic-and-applied-sciences" || slug === "sbas";
    const isSEMCE =
        slug === "school-of-emerging-media-and-creator-economy" ||
        slug === "school-of-journalism-and-mass-communication" ||
        slug === "semce";
    const isSMAS =
        slug === "school-of-medical-and-allied-sciences" ||
        slug === "school-of-medical-allied-sciences" ||
        slug === "smas";
    const isSOAD =
        slug === "school-of-architecture-design" ||
        slug === "school-of-architecture-and-design" ||
        slug === "soad";
    const isSOAS =
        slug === "school-of-agricultural-sciences" ||
        slug === "school-of-agriculutural-sciences" ||
        slug === "soas";
    const isSOED = slug === "school-of-education" || slug === "soed";
    const isSOET =
        slug === "school-of-engineering-and-technology" ||
        slug === "school-of-engineering-technology" ||
        slug === "soet";
    const isSOLA = slug === "school-of-liberal-arts" || slug === "sola";
    const isSOLS = slug === "school-of-legal-studies" || slug === "sols";
    const isSOMC =
        slug === "school-of-management-and-commerce" ||
        slug === "school-of-management-commerce" ||
        slug === "somc";
    const isSPRS =
        slug === "school-of-physiotherapy-and-rehabilitation-sciences" ||
        slug === "school-of-physiotherapy-rehabilitation-sciences" ||
        slug === "sprs";

    const testimonialsData = isSBAS
        ? SBAS_STATIC_TESTIMONIALS
        : isSEMCE
          ? SEMCE_STATIC_TESTIMONIALS
          : isSMAS
            ? SMAS_STATIC_TESTIMONIALS
            : isSOAD
              ? SOAD_STATIC_TESTIMONIALS
              : isSOAS
                ? SOAS_STATIC_TESTIMONIALS
                : isSOED
                  ? SOED_STATIC_TESTIMONIALS
                  : isSOET
                    ? SOET_STATIC_TESTIMONIALS
                    : isSOLA
                      ? SOLA_STATIC_TESTIMONIALS
                      : isSOLS
                        ? SOLS_STATIC_TESTIMONIALS
                        : isSOMC
                          ? SOMC_STATIC_TESTIMONIALS
                          : isSPRS
                            ? SPRS_STATIC_TESTIMONIALS
                            : testis || [];

    const handleNext = useCallback(() => {
        if (testimonialsData.length === 0) return;
        setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, [testimonialsData.length]);

    const handlePrev = useCallback(() => {
        if (testimonialsData.length === 0) return;
        setCurrentIndex(
            (prev) =>
                (prev - 1 + testimonialsData.length) % testimonialsData.length
        );
    }, [testimonialsData.length]);

    const handleSelectPerson = useCallback((index: number) => {
        setCurrentIndex(index);
    }, []);

    useEffect(() => {
        if (isHovered || testimonialsData.length === 0) return;
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [isHovered, currentIndex, testimonialsData.length]);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null) return;
        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX.current - touchEndX;
        if (Math.abs(diff) > 40) {
            if (diff > 0) {
                handleNext();
            } else {
                handlePrev();
            }
        }
        touchStartX.current = null;
    };

    if (testimonialsData.length === 0) return null;

    const displayTitle =
        isSBAS ||
        isSEMCE ||
        isSMAS ||
        isSOAD ||
        isSOAS ||
        isSOED ||
        isSOET ||
        isSOLA ||
        isSOLS ||
        isSOMC ||
        isSPRS
            ? title || "Students’ Testimonials"
            : title;
    const displayDesc = isSBAS
        ? desc ||
          "Hear from our students about their transformative academic and practical journey at the School of Basic & Applied Sciences."
        : isSEMCE
          ? desc ||
            "Hear from our students about their creative, media-driven, and industry-oriented journey at the School of Emerging Media and Creator Economy."
          : isSMAS
            ? desc ||
              "Hear from our students about their transformative academic and clinical journey at the School of Medical & Allied Sciences."
            : isSOAD
              ? desc ||
                "Hear from our students about their creative, technical, and transformative design journey at the School of Architecture & Design."
              : isSOAS
                ? desc ||
                  "Hear from our students about their experiential learning, agricultural research, and career journey at the School of Agricultural Sciences."
                : isSOED
                  ? desc ||
                    "Hear from our students about their enriching academic, classroom training, and teaching journey at the School of Education."
                  : isSOET
                    ? desc ||
                      "Hear from our students about their hands-on engineering, cutting-edge technology innovation, and career journey at the School of Engineering and Technology."
                    : isSOLA
                      ? desc ||
                        "Hear from our students about their multidisciplinary, transformative academic and critical inquiry journey at the School of Liberal Arts."
                      : isSOLS
                        ? desc ||
                          "Hear from our students about their enriching academic, moot court advocacy, and career journey at the School of Legal Studies."
                        : isSOMC
                          ? desc ||
                            "Hear from our students about their industry-driven, transformative leadership, management and commerce journey at the School of Management and Commerce."
                          : isSPRS
                            ? desc ||
                              "Hear from our students about their compassionate healthcare, clinical exposure, and rehabilitative sciences journey at the School of Physiotherapy and Rehabilitation Sciences."
                            : desc;

    const headingText =
        isSBAS ||
        isSEMCE ||
        isSMAS ||
        isSOAD ||
        isSOAS ||
        isSOED ||
        isSOET ||
        isSOLA ||
        isSOLS ||
        isSOMC ||
        isSPRS
            ? displayTitle
            : displayTitle?.split(" ")[1] || displayTitle;
    const t = testimonialsData[currentIndex];

    const getImageSrc = (item: any) => {
        const rawUrl = item?.url || item?.image || item?.userimg?.url;
        if (!rawUrl) return "/images/placeholder.jpg";
        if (rawUrl.startsWith("http") || rawUrl.startsWith("/")) return rawUrl;
        return `${STRAPI_URL}${rawUrl}`;
    };

    const getImageAlt = (item: any) => {
        return (
            item?.alternativeText ||
            item?.userimg?.alternativeText ||
            `${item?.name || "Student"}, ${item?.education || ""} student testimonial at KRMU`
        );
    };

    return (
        <section
            id="testimonials"
            className="py-12 xl:py-20 font-poppins relative overflow-hidden bg-transparent scroll-mt-28"
        >
            <div className="max-w-[1440px] mx-auto w-full relative z-10 px-4 md:px-8 lg:px-12">
                <div className="mb-10 max-w-5xl">
                    <h2 className="heading-primary mb-4">{headingText}</h2>
                    {displayDesc && (
                        <p className="text-white/90 text-justify text-[15px] lg:text-[16px]">
                            {displayDesc}
                        </p>
                    )}
                </div>

                <div
                    className="relative w-full py-2"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    <div className="w-full min-h-[520px] sm:min-h-[460px] md:min-h-[380px] lg:min-h-[340px] xl:min-h-[320px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={t.id || currentIndex}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{
                                    duration: 0.2,
                                    ease: "easeInOut",
                                }}
                                className="flex flex-col lg:flex-row items-center lg:items-stretch gap-6 lg:gap-8 w-full"
                            >
                                <div
                                    onClick={handleNext}
                                    className="w-full lg:w-[260px] xl:w-[300px] shrink-0 relative aspect-square sm:aspect-[4/4.5] lg:aspect-auto rounded-[16px] overflow-hidden cursor-pointer group select-none"
                                    title="Click to view next testimonial"
                                >
                                    <Image
                                        src={getImageSrc(t)}
                                        alt={getImageAlt(t)}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 300px"
                                        className="object-cover rounded-[16px] transition-transform duration-500 group-hover:scale-105"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none rounded-[16px]" />
                                </div>

                                <div className="hidden lg:block w-[1px] self-stretch my-1 bg-[linear-gradient(180deg,#1A1A1A_0%,#FFFFFF_48.08%,#1A1A1A_100%)] shrink-0"></div>

                                <div className="flex-1 flex flex-col justify-between relative z-10 pt-2 lg:pt-0 w-full min-w-0">
                                    <div className="relative pt-2 md:pt-4">
                                        <div className="absolute -top-1 left-0 md:-top-2 md:-left-4 pointer-events-none z-0 opacity-35">
                                            <Image
                                                src="/modules/home/testimonial/quote.png"
                                                alt="Quote Icon"
                                                width={120}
                                                height={96}
                                                className="w-14 md:w-20 lg:w-24 h-auto object-contain brightness-0 invert"
                                            />
                                        </div>

                                        <div className="min-h-[220px] sm:min-h-[190px] md:min-h-[170px] flex items-center justify-center md:justify-start">
                                            <p className="italic text-white/90 text-sm md:text-[16px] xl:text-[18px] leading-relaxed font-light font-poppins relative z-10 text-justify md:text-left pr-0 md:pr-2 lg:pr-12">
                                                &ldquo;
                                                {t.info?.replace(
                                                    /^["“]|["”]$/g,
                                                    ""
                                                )}
                                                &rdquo;
                                            </p>
                                        </div>

                                        <div className="w-10 h-[2px] bg-brand-gold my-4 rounded-full opacity-80 relative z-10 mx-auto md:mx-0"></div>
                                    </div>

                                    <div className="mt-2 relative z-10 text-center md:text-left">
                                        <h3 className="text-brand-gold font-poppins font-bold text-base md:text-lg lg:text-xl leading-tight">
                                            {t.name}
                                        </h3>
                                        <p className="text-white/70 font-poppins text-xs md:text-sm font-light mt-1 mb-4">
                                            {t.education}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="w-full flex items-center justify-start sm:justify-center gap-3 sm:gap-4 mt-8 md:mt-10 overflow-x-auto py-4 px-2 min-h-[96px] sm:min-h-[104px] md:min-h-[112px] no-scrollbar">
                        {testimonialsData.map((item, idx) => {
                            const isActive = currentIndex === idx;
                            return (
                                <button
                                    key={item.id || idx}
                                    type="button"
                                    onMouseDown={(e) => e.preventDefault()}
                                    onClick={(e) => {
                                        e.currentTarget.blur();
                                        handleSelectPerson(idx);
                                    }}
                                    className={`relative shrink-0 rounded-full overflow-hidden transition-all duration-300 cursor-pointer ${
                                        isActive
                                            ? "w-16 h-16 sm:w-[72px] sm:h-[72px] md:w-20 md:h-20 ring-[2.5px] ring-brand-gold opacity-100 z-10 shadow-xl"
                                            : "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 opacity-40 hover:opacity-90 ring-2 ring-brand-gold/20 hover:scale-105"
                                    }`}
                                    aria-label={`View ${item.name}'s testimonial`}
                                    title={`${item.name} - ${item.education}`}
                                >
                                    <Image
                                        src={getImageSrc(item)}
                                        alt={getImageAlt(item)}
                                        fill
                                        sizes="200px"
                                        quality={95}
                                        className="object-cover"
                                    />
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
            <SectionDivider />
        </section>
    );
};

export default TestimonialsSection;
