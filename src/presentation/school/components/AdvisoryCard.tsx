"use client";

import { useEffect, useRef } from "react";
import { STRAPI_URL } from "@/app/constant";
import Image from "next/image";
import { resolveFacultyAlt } from "@/alt-text";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

type Props = {
    name: string;
    imgUrl: string;
    qual: string;
    desg: string;
    slug: string;
    schoolCat?: string;
};

export const AdvisoryCard = ({
    name,
    imgUrl,
    qual,
    desg,
    schoolCat,
}: Props) => {
    const photoRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!photoRef.current) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                photoRef.current,
                {
                    opacity: 0,
                    scale: 0.94,
                    y: 18,
                },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.65,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: photoRef.current,
                        start: "top 95%",
                        toggleActions: "play none none none",
                        once: true,
                    },
                }
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="overflow-hidden bg-[#061623] transition-all duration-300 ease-in-out group flex flex-col font-poppins h-full w-full">
            {/* IMAGE SECTION */}
            <div
                ref={photoRef}
                className="relative flex h-[240px] sm:h-[280px] w-full items-end justify-center overflow-hidden bg-[#ffffff] will-change-transform"
            >
                <div className="absolute inset-0 flex items-center justify-center p-6">
                    <Image
                        src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/KRMU_Logo_white_3_33a6547c3f.png"
                        width={290}
                        height={299}
                        alt="KRMU Logo"
                        className="object-contain"
                    />
                </div>

                <Image
                    src={`${STRAPI_URL}${imgUrl}`}
                    width={272}
                    height={295}
                    alt={resolveFacultyAlt(schoolCat, name || imgUrl, name)}
                    className="relative z-10 h-full w-full object-contain object-bottom transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
            </div>
            {/* DETAILS */}
            <div className="p-4 sm:p-5 bg-[#061623] flex-1 flex flex-col justify-between">
                <div>
                    <h3 className="text-[15px] sm:text-base font-bold text-white leading-snug">
                        {name}
                    </h3>

                    <p
                        className="text-[12px] uppercase text-white/90 py-1 tracking-wide"
                        dangerouslySetInnerHTML={{
                            __html: desg,
                        }}
                    />
                </div>

                <p
                    className="text-[13px] font-medium text-white/80 tracking-wide mt-1"
                    dangerouslySetInnerHTML={{
                        __html: qual,
                    }}
                />
            </div>
        </div>
    );
};
