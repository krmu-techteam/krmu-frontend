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
    if (lowerTitle.includes("ai") || lowerTitle.includes("machine learning")) {
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
    if (lowerTitle.includes("cloud computing")) {
      return "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/1_5ee34b2594.png";
    }
    if (lowerTitle.includes("semiconductor design")) {
      return "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/2_6e0ebe6cdd.png";
    }
    return currentUrl
      ? `${STRAPI_URL}${currentUrl}`
      : "/programmes/specialisation.webp";
  };

  const isSlider = specialisations && specialisations.length > 4;

  return (
    <section className="prog-global-padding py-8 md:p-6 lg:px-10 lg:py-10 xl:py-12 2xl:py-16 px-4 xl:px-10 2xl:px-0">
      <div className="max-w-[1440px] mx-auto w-full">
        <div className="common-prog-container">
          <h2 className="text-[28px] md:text-[45px] font-bold text-gray-900 leading-tight tracking-tight mb-2">
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
                    specialisation?.specialisationimg?.url || "",
                  );

                  return (
                    <div
                      key={specialisation?.id}
                      className="bg-white border border-gray-100 rounded-md shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden flex flex-col group h-full"
                    >
                      <div className="relative w-full aspect-[17/14] bg-white flex items-center justify-center overflow-hidden border-b border-gray-50">
                        <Image
                          fill
                          src={displayImage}
                          alt={specialisation?.title}
                          className="object-contain group-hover:scale-105 transition-transform duration-700 p-1"
                        />
                      </div>
                      <div className="p-4 flex-1 flex flex-col items-center justify-center text-center bg-white z-10">
                        <a
                          href={specialisation?.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:no-underline"
                        >
                          <h5 className="text-lg font-semibold text-[#051730]/80 group-hover:text-[#051730] transition-colors duration-300 leading-tight">
                            {specialisation?.title}
                          </h5>
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
                  {specialisations.map((specialisation, i) => {
                    const displayImage = getSpecialisationImage(
                      specialisation?.title || "",
                      specialisation?.specialisationimg?.url || "",
                    );

                    return (
                      <CarouselItem
                        key={specialisation?.id || i}
                        className="pl-4 sm:pl-4 lg:pl-6 xl:pl-6 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 flex"
                      >
                        <div className="bg-white border border-gray-100 rounded-md shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden flex flex-col group h-full w-full">
                          <div className="relative w-full aspect-[17/14] bg-white flex items-center justify-center overflow-hidden border-b border-gray-50">
                            <Image
                              fill
                              src={displayImage}
                              alt={specialisation?.title}
                              className="object-contain group-hover:scale-105 transition-transform duration-700 p-1"
                            />
                          </div>
                          <div className="p-4 flex-1 flex flex-col items-center justify-center text-center bg-white z-10">
                            <a
                              href={specialisation?.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:no-underline"
                            >
                              <h5 className="text-lg font-semibold text-[#051730]/80 group-hover:text-[#051730] transition-colors duration-300 leading-tight">
                                {specialisation?.title}
                              </h5>
                            </a>
                          </div>
                        </div>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>

                {/* Left/Right Navigation Arrows */}
                <button
                  onClick={() => api?.scrollPrev()}
                  className="absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg flex items-center justify-center text-[#051730] hover:bg-[#051730] hover:text-white transition-all duration-300 border border-gray-100 cursor-pointer hover:scale-110 active:scale-95 rounded-full w-12 h-12"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() => api?.scrollNext()}
                  className="absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg flex items-center justify-center text-[#051730] hover:bg-[#051730] hover:text-white transition-all duration-300 border border-gray-100 cursor-pointer hover:scale-110 active:scale-95 rounded-full w-12 h-12"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </Carousel>
            )}
          </div>
        )}
        <p className="text-right text-sm  mt-2  text-muted-foreground">
          ** Subject to Approval
        </p>
      </div>
    </section>
  );
};

export default Specialisation;
