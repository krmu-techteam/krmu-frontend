"use client";

import { useState } from "react";
import { STRAPI_URL } from "@/app/constant";
import { SpecialisationCard } from "@/lib/types/school-programme";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import SectionDivider from "@/components/common/SectionDivider";

type Props = {
    heading: string;
    highlightheading: string;
    specialisations: SpecialisationCard[];
};

const Specialisation = ({
    heading,
    highlightheading,
    specialisations,
}: Props) => {
    const [api, setApi] = useState<CarouselApi>();

    // Staging / Testing Image Overrides to avoid hitting live Strapi for test data
    const getSpecialisationImage = (title: string, currentUrl: string) => {
        const lowerTitle = title.toLowerCase();

        if (lowerTitle.includes("robotics")) {
            return "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/b_tech_computer_science_and_engineering_robotics_and_ai_b9b24da4a4.jpeg";
        }
        if (
            lowerTitle.includes("ai") ||
            lowerTitle.includes("machine learning")
        ) {
            return "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/b_tech_computer_science_and_engineering_ai_and_ml_b0fc013bcb.png";
        }
        if (lowerTitle.includes("cyber security")) {
            return "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/btech_computer_science_and_engineering_cyber_security_c32ad8f7f8.jpeg";
        }
        if (lowerTitle.includes("data science")) {
            return "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/b_tech_computer_science_and_engineering_data_science_ff14ce5505.jpeg";
        }
        if (lowerTitle.includes("full stack")) {
            return "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/b_tech_computer_science_and_engineering_full_stack_development_aade4f5abe.png";
        }
        if (lowerTitle.includes("ux") || lowerTitle.includes("ui")) {
            return "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/btech_computer_science_and_engineering_ux_ui_00fecef876.jpeg";
        }

        return currentUrl
            ? `${STRAPI_URL}${currentUrl}`
            : "/programmes/specialisation.webp";
    };

    const isSlider = specialisations && specialisations.length > 4;

    return (
        <section className="relative z-10 py-8 md:py-12 xl:py-20">
            <div className="max-w-[1530px] mx-auto w-full px-6 md:px-8 xl:px-16">
                <div className="common-prog-container mb-2 md:mb-6">
                    <h2 className="heading-primary mb-2 md:mb-3">
                        {heading} {highlightheading}
                    </h2>
                </div>

                {specialisations && specialisations.length > 0 && (
                    <div className="mt-6 lg:mt-8 xl:mt-6">
                        {!isSlider ? (
                            // Static Grid for 4 or fewer cards
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:gap-6">
                                {specialisations.map((specialisation) => {
                                    const displayImage = getSpecialisationImage(
                                        specialisation?.title || "",
                                        specialisation?.specialisationimg
                                            ?.url || ""
                                    );

                                    return (
                                        <div
                                            key={specialisation?.id}
                                            className="relative flex flex-col group h-full cursor-pointer"
                                        >
                                            {/* Image Container */}
                                            <div className="relative w-full aspect-[12/10] rounded-md overflow-hidden bg-white/5">
                                                <Image
                                                    fill
                                                    src={displayImage}
                                                    alt={specialisation?.title}
                                                    className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                                                    unoptimized
                                                />
                                            </div>

                                            {/* Title */}
                                            <div className="px-2 pt-4 w-full">
                                                <a
                                                    href={specialisation?.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:no-underline block w-full"
                                                >
                                                    <h3 className="text-white font-poppins text-[16px] md:text-[15px] font-normal group-hover:text-white/80 transition-colors duration-300 leading-tight w-full">
                                                        {specialisation?.title}
                                                    </h3>
                                                </a>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        ) : (
                            // Slider for more than 4 cards
                            <Carousel
                                opts={{
                                    align: "start",
                                    loop: true,
                                }}
                                plugins={[
                                    Autoplay({
                                        delay: 3000,
                                        stopOnInteraction: false,
                                    }),
                                ]}
                                setApi={setApi}
                                className="w-full relative px-4 md:px-0"
                            >
                                <CarouselContent className="-ml-4 sm:-ml-4 lg:-ml-6 xl:-ml-6 px-0 my-5 flex items-stretch">
                                    {specialisations.map(
                                        (specialisation, i) => {
                                            const displayImage =
                                                getSpecialisationImage(
                                                    specialisation?.title || "",
                                                    specialisation
                                                        ?.specialisationimg
                                                        ?.url || ""
                                                );

                                            return (
                                                <CarouselItem
                                                    key={
                                                        specialisation?.id || i
                                                    }
                                                    className="pl-4 sm:pl-4 lg:pl-6 xl:pl-6 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 flex"
                                                >
                                                    <div className="relative flex flex-col group h-full w-full cursor-pointer">
                                                        {/* Image Container */}
                                                        <div className="relative w-full aspect-[12/10] rounded-md overflow-hidden bg-white/5">
                                                            <Image
                                                                fill
                                                                src={
                                                                    displayImage
                                                                }
                                                                alt={
                                                                    specialisation?.title
                                                                }
                                                                className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                                                                unoptimized
                                                            />
                                                        </div>

                                                        {/* Title */}
                                                        <div className="px-2 pt-4 w-full">
                                                            <a
                                                                href={
                                                                    specialisation?.link
                                                                }
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="hover:no-underline block w-full"
                                                            >
                                                                <h3 className="text-white font-poppins text-[16px] md:text-[15px] font-normal group-hover:text-white/80 transition-colors duration-300 leading-tight w-full">
                                                                    {
                                                                        specialisation?.title
                                                                    }
                                                                </h3>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </CarouselItem>
                                            );
                                        }
                                    )}
                                </CarouselContent>

                                {/* Left/Right Navigation Arrows */}
                                <button
                                    onClick={() => api?.scrollPrev()}
                                    className="absolute left-2 md:-left-13 top-1/2 -translate-y-1/2 z-20 bg-[#0161B0] hobver:bg-[#0161B0]/80 flex items-center justify-center text-white transition-all duration-300 cursor-pointer rounded-[4px] w-10 h-10"
                                    aria-label="Previous slide"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>
                                <button
                                    onClick={() => api?.scrollNext()}
                                    className="absolute right-2 md:-right-13 top-1/2 -translate-y-1/2 z-20 bg-[#0161B0] hobver:bg-[#0161B0]/80 flex items-center justify-center text-white transition-all duration-300 cursor-pointer rounded-[4px] w-10 h-10"
                                    aria-label="Next slide"
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </button>
                            </Carousel>
                        )}
                    </div>
                )}
            </div>
            <SectionDivider />
        </section>
    );
};

export default Specialisation;
