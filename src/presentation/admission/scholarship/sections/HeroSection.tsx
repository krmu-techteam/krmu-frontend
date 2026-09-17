import React from "react";
import Image from "next/image";

const HeroSection = () => {
    return (
        <section className="relative overflow-hidden bg-[#061623] pt-[100px] sm:pt-[110px] md:pt-[115px] xl:pt-[130px] pb-4 md:pb-10 xl:pb-0">
            {/* Background Pattern on the Left (Desktop only, hidden on tablet and mobile) */}
            <div
                className="hidden xl:block absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden"
                style={{
                    maskImage:
                        "radial-gradient(ellipse at 0% 50%, black 40%, rgba(0,0,0,0.6) 70%, transparent 95%)",
                    WebkitMaskImage:
                        "radial-gradient(ellipse at 0% 50%, black 40%, rgba(0,0,0,0.6) 70%, transparent 95%)",
                }}
            >
                <Image
                    src="/images/scholarship/scholarship-hero-bg.png"
                    alt="Scholarship Hero Background Pattern"
                    fill
                    priority
                    className="w-full h-full object-contain object-left"
                />
            </div>

            <div className="relative z-10 max-w-[1530px] mx-auto w-full px-6 md:px-8 xl:px-12 flex flex-col xl:flex-row items-center justify-between min-h-[auto] xl:min-h-[620px] gap-4 xl:gap-0">
                {/* Students Image & Circular Badge (Image on TOP for tablet & mobile, RIGHT for desktop) */}
                <div className="relative w-full xl:w-[58%] 2xl:w-[60%] flex justify-center xl:justify-end items-end self-center xl:self-end mt-1 sm:mt-3 xl:mt-0 z-10 order-1 xl:order-2">
                    <div className="relative flex justify-center xl:justify-end items-end">
                        <Image
                            src="/images/scholarship/girls-boy.png"
                            alt="KRMU Scholarship Students"
                            width={682}
                            height={615}
                            priority
                            className="w-auto h-[240px] sm:h-[300px] md:h-[360px] lg:h-[380px] xl:h-[615px] max-w-full object-contain object-bottom select-none pointer-events-none"
                        />

                        {/* Circular Badge */}
                        <div className="absolute bottom-2 right-1 sm:bottom-4 sm:right-3 md:bottom-6 md:right-4 lg:bottom-6 lg:right-6 xl:bottom-10 xl:right-6 z-20">
                            <div className="w-22 h-22 sm:w-28 sm:h-28 md:w-34 md:h-34 lg:w-36 lg:h-36 xl:w-48 xl:h-48 rounded-full bg-gradient-to-b from-[#f8fbfe] via-[#e4f0f8] to-[#cee3f2] p-1.5 sm:p-2 md:p-2.5 shadow-2xl shadow-black/40 flex items-center justify-center">
                                <div className="w-full h-full rounded-full border-[1.5px] sm:border-2 border-dashed border-[#061623]/75 flex flex-col items-center justify-center text-center px-1 select-none">
                                    <span className="text-[8px] sm:text-[10px] md:text-xs xl:text-sm font-semibold text-[#061623] tracking-tight leading-tight">
                                        Avail upto
                                    </span>
                                    <span className="text-xs sm:text-lg md:text-2xl xl:text-[32px] font-black text-[#061623] leading-none my-0.5 sm:my-1">
                                        100%
                                    </span>
                                    <span className="text-[8px] sm:text-[10px] md:text-xs xl:text-sm font-bold text-[#061623] leading-tight">
                                        Scholarship
                                    </span>
                                    <span className="text-[7px] sm:text-[9px] md:text-[11px] xl:text-xs font-normal text-[#061623] leading-tight mt-0.5">
                                        worth
                                    </span>
                                    <span className="text-[8px] sm:text-[10px] md:text-xs xl:text-sm font-black text-[#061623] leading-tight mt-0.5">
                                        INR 27 Cr
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Text Content (Text on BOTTOM for tablet & mobile, LEFT for desktop) */}
                <div className="w-full xl:w-[42%] 2xl:w-[40%] pt-2 xl:pt-0 pb-2 sm:pb-4 xl:pb-10 text-white z-10 shrink-0 order-2 xl:order-1 flex flex-col items-center xl:items-start text-center xl:text-left">
                    <h1 className="flex flex-col text-white font-inter items-center xl:items-start">
                        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[47px] font-light tracking-wide leading-tight">
                            Scholarship
                        </span>
                        <span className="text-5xl sm:text-6xl md:text-7xl lg:text-[84px] xl:text-[150px] font-black tracking-tight leading-[0.9] my-1 sm:my-2">
                            2026
                        </span>
                        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[47px] !font-extralight tracking-wide leading-tight">
                            Intake
                        </span>
                    </h1>

                    {/* Gradient Divider Line */}
                    <div className="w-24 sm:w-32 xl:w-36 h-[2.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent xl:from-white xl:via-white/80 xl:to-transparent my-3 sm:my-4 xl:my-5" />

                    {/* Subtext */}
                    <div className="font-poppins text-xs sm:text-sm md:text-base xl:text-lg text-white">
                        <p className="font-normal text-white">
                            Only For First{" "}
                            <span className="text-[#FFA800] font-semibold">
                                100 students
                            </span>
                            ,
                        </p>
                        <p className="font-bold text-white mt-1">
                            First Come First Served
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
