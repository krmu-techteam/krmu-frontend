import React from "react";
import { CalendarCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SectionDivider from "@/components/common/SectionDivider";

export function VisitSection() {
    return (
        <section className="relative w-full py-0 md:py-12 xl:py-20 overflow-hidden font-poppins">
            <div className="relative w-full flex flex-col lg:flex-row items-stretch gap-6 xl:gap-16">
                {/* Background Image Overlay on Tablet & Mobile Only */}
                <div className="absolute inset-0 lg:hidden z-0 overflow-hidden">
                    <Image
                        src="/modules/home/visit/campus-visit.jpg"
                        alt="KRMU Campus Facade"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/75 z-10" />
                </div>

                {/* Content Column - Centered over background on mobile/tablet, Left 45% on desktop */}
                <div className="w-full lg:w-[45%] flex flex-col justify-center px-4 md:px-12 xl:pl-16 2xl:pl-64 py-10 md:py-16 lg:py-20 relative z-10">
                    <div className="w-full max-w-[620px] lg:ml-0 flex flex-col">
                        <h2 className="heading-primary mb-4 xl:mb-6">
                            Visit and Explore
                            <br />
                            K.R. Mangalam University
                        </h2>

                        <p className="text-white text-justify md:text-left lg:text-white/80 text-[15px] xl:text-[16px] leading-relaxed mb-6 font-light">
                            Located in Gurugram&#39;s tech hub and the expansive
                            NCR, K.R. Mangalam University is a blend of urban
                            innovation and natural beauty. Schedule a campus
                            visit or take our online 360-degree tour to
                            experience our inspiring environment, surrounded by
                            the tranquil Aravalli hills.
                        </p>

                        <div className="flex flex-row items-center justify-start gap-4 md:gap-8">
                            {/* Schedule Visit */}
                            <Link
                                href="/campus-tour"
                                className="flex items-center gap-4 xl:gap-6 p-3 xl:p-5 rounded-[4px] border border-white group max-w-[240px] xl:max-w-[280px] text-left h-[70px] xl:h-[80px] text-white hover:bg-white/10 transition-colors"
                            >
                                <div>
                                    <CalendarCheck className="text-[22px] xl:text-[26px]" />
                                </div>
                                <div>
                                    <h3 className="text-white/80 group-hover:text-white font-medium text-[14px] xl:text-[17px] leading-relaxed xl:leading-tight transition-colors">
                                        Schedule your visit to KRMU Campus
                                    </h3>
                                </div>
                            </Link>

                            {/* Virtual Tour */}
                            <Link
                                href="/campus-life/virtual-tour"
                                target="_blank"
                                className="relative group transition-all shrink-0 w-20 h-20 md:w-24 md:h-24"
                            >
                                <div className="relative h-full w-full">
                                    <Image
                                        src="/modules/home/hero/virtual-tour.png"
                                        alt="360 Virtual Tour"
                                        fill
                                        sizes="96px"
                                        priority
                                        className="object-contain"
                                    />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Right Column - Desktop Image Only */}
                <div className="hidden lg:block lg:w-[55%] lg:h-auto relative">
                    <div className="absolute inset-0 lg:rounded-l-[10px] overflow-hidden group">
                        <Image
                            src="/modules/home/visit/campus-visit.jpg"
                            alt="KRMU Campus Facade"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-1000"
                        />
                    </div>
                </div>
            </div>
            <div className="hidden md:block">
                <SectionDivider />
            </div>
        </section>
    );
}
