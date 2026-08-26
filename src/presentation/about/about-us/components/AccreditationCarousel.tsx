"use client";

import { STRAPI_URL } from "@/app/constant";
import { StrapiMedia } from "@/lib/types/common";
import Image from "next/image";
import { Carousel } from "@/components/common/Carousel";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

interface AccreditationCarouselProps {
    logosData: StrapiMedia[];
}

const AccreditationCarousel: React.FC<AccreditationCarouselProps> = ({
    logosData,
}) => {
    const [api, setApi] = useState<
        ReturnType<typeof useEmblaCarousel>[1] | undefined
    >(undefined);
    const [canScroll, setCanScroll] = useState(false);

    useEffect(() => {
        if (!api) return;
        const checkScroll = () => {
            // If there's more than 1 snap point, the carousel can scroll
            setCanScroll(api.scrollSnapList().length > 1);
        };
        checkScroll();
        api.on("resize", checkScroll);
        api.on("reInit", checkScroll);
        api.on("select", checkScroll);
        return () => {
            api.off("resize", checkScroll);
            api.off("reInit", checkScroll);
            api.off("select", checkScroll);
        };
    }, [api]);

    return (
        <div>
            <Carousel
                setApi={setApi}
                options={{
                    align: "start",
                    loop: canScroll,
                }}
                autoplay={true}
                autoplayDelay={2500}
                showDots={canScroll}
                showArrows={false}
                className="w-full"
                containerClassName="-ml-2 sm:-ml-4"
                slideClassName="pl-2 sm:pl-4 md:pl-6 basis-1/2 sm:basis-auto"
            >
                {logosData?.map((logo) => (
                    <div key={logo?.id} className="h-full">
                        <div className="flex items-center justify-center w-full sm:w-[140px] h-[100px] md:h-[135px] bg-white border border-slate-200 rounded-[4px] hover:border-[#00A0E3]/30 transition-all duration-300 overflow-hidden group">
                            <Image
                                src={`${STRAPI_URL}${logo?.url}`}
                                alt={
                                    logo?.alternativeText ||
                                    "Accreditation Logo"
                                }
                                width={151}
                                height={135}
                                quality={100}
                                className="object-contain max-w-full max-h-full group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default AccreditationCarousel;
