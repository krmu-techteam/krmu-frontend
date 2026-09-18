"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { Pursue } from "@/lib/types/phd-programmes";
import { Newsreader } from "next/font/google";

const newsreader = Newsreader({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    style: ["normal", "italic"],
});

type Props = {
    pursueContent: Pursue;
};

const PHDPursue = ({ pursueContent }: Props) => {
    const title = (pursueContent?.title || "Who Should Pursue ?").replace(
        /\r?\n/g,
        " "
    );

    // Split paragraphs so each thought is a distinct paragraph as shown in design
    const paragraphs = useMemo(() => {
        if (!pursueContent?.pursue || !Array.isArray(pursueContent.pursue))
            return [];

        const result: string[] = [];

        for (const block of pursueContent.pursue) {
            const text = (block.children || [])
                .map((c: any) => c?.text || "")
                .join("")
                .trim();

            if (!text) continue;

            // Separate combined paragraphs if merged in CMS
            if (text.includes("This field is also well-suited")) {
                const parts = text.split(/(?=This field is also well-suited)/);
                for (const part of parts) {
                    if (part.trim()) result.push(part.trim());
                }
            } else {
                result.push(text);
            }
        }

        return result;
    }, [pursueContent]);

    if (!pursueContent) return null;

    return (
        <section
            id="who-should-pursue"
            className="w-full bg-[#F7F2E7] py-14 sm:py-16 lg:py-20 px-5 sm:px-8 md:px-10 lg:px-12 xl:px-[51px] scroll-mt-24"
        >
            <div className="max-w-[1240px] mx-auto w-full">
                {/* ITEMS-CENTER: Vertically centered layout */}
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14 xl:gap-16">
                    {/* LEFT IMAGE (Bigger size, exact 470px width, blue border) */}
                    <div className="w-full max-w-[470px] lg:w-[470px] xl:w-[490px] shrink-0">
                        <div className="relative w-full aspect-[549/428] overflow-hidden">
                            <Image
                                src="/images/phd/capmen.jpg"
                                alt={title}
                                fill
                                className="object-contain object-center"
                                sizes="(max-width: 640px) 100vw, 490px"
                            />
                        </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="w-full lg:flex-1 flex flex-col justify-center">
                        {/* TITLE */}
                        <h2
                            className={`${newsreader.className} text-[32px] sm:text-[38px] lg:text-[42px] font-medium text-[#14233D] tracking-[-0.01em] leading-tight mb-5 sm:mb-6`}
                        >
                            {title}
                        </h2>

                        {/* DISTINCT PARAGRAPHS */}
                        <div className="flex flex-col gap-4 sm:gap-5 text-[#272624] text-[13px] sm:text-[14px] lg:text-[14.5px] leading-relaxed font-normal">
                            {paragraphs.map((p, idx) => (
                                <p key={idx} className="m-0 p-0">
                                    {p}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

                {/* BOTTOM DIVIDER */}
                <div className="mt-12 sm:mt-16 lg:mt-20 border-t border-[#000000]/30 w-full"></div>
            </div>
        </section>
    );
};

export default PHDPursue;
