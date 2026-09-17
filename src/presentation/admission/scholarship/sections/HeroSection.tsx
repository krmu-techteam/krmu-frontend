import React from "react";
import Image from "next/image";

const HeroSection = () => {
    return (
        <section className="relative overflow-hidden bg-[#061623] pt-[120px] sm:pt-[130px] lg:pt-[120px] xl:pt-[130px] pb-0">
            {/* Background Pattern on the Left */}
            <div
                className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden"
                style={{
                    maskImage:
                        "linear-gradient(to right, black 35%, rgba(0,0,0,0.7) 60%, transparent 95%)",
                    WebkitMaskImage:
                        "linear-gradient(to right, black 35%, rgba(0,0,0,0.7) 60%, transparent 95%)",
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

            <div className="relative z-10 max-w-[1530px] mx-auto w-full px-6 md:px-8 xl:px-12 flex flex-col lg:flex-row items-center justify-between min-h-[500px] lg:min-h-[580px] xl:min-h-[620px]">
                {/* Left Content */}
                <div className="w-full lg:w-[42%] xl:w-[40%] pt-4 lg:pt-0 pb-6 lg:pb-10 text-white z-10 shrink-0">
                    <h1 className="flex flex-col text-white font-inter">
                        <span className="text-3xl font-poppins sm:text-4xl md:text-5xl lg:text-[42px] xl:text-[47px] font-light tracking-wide leading-tight">
                            Scholarship
                        </span>
                        <span className="text-6xl font-poppins sm:text-7xl md:text-8xl lg:text-[88px] xl:text-[150px] font-black tracking-tight leading-[0.9] my-1 sm:my-2">
                            2026
                        </span>
                        <span className="text-3xl font-poppins sm:text-4xl md:text-5xl lg:text-[42px] xl:text-[47px] !font-extralight tracking-wide leading-tight">
                            Intake
                        </span>
                    </h1>

                    {/* Gradient Divider Line */}
                    <div className="w-28 sm:w-36 h-[2.5px] bg-gradient-to-r from-white via-white/80 to-transparent my-4 sm:my-5" />

                    {/* Subtext */}
                    <div className="font-poppins text-sm sm:text-base md:text-lg text-white">
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

                {/* Right Students Image & Circular Badge */}
                <div className="relative w-full lg:w-[58%] xl:w-[60%] flex justify-center lg:justify-end items-end self-end mt-4 lg:mt-0 z-10">
                    <div className="relative flex justify-center lg:justify-end items-end">
                        <Image
                            src="/images/scholarship/girls-boy.png"
                            alt="KRMU Scholarship Students"
                            width={682}
                            height={615}
                            priority
                            className="w-auto h-[380px] sm:h-[450px] md:h-[500px] lg:h-[540px] xl:h-[615px] max-w-full object-contain object-bottom select-none pointer-events-none"
                        />

                        {/* Circular Badge */}
                        <div className="absolute bottom-3 right-1 sm:bottom-6 sm:right-3 md:bottom-8 md:right-4 lg:bottom-6 lg:right-4 xl:bottom-10 xl:right-6 z-20">
                            <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-40 lg:h-40 xl:w-48 xl:h-48 rounded-full bg-gradient-to-b from-[#f8fbfe] via-[#e4f0f8] to-[#cee3f2] p-1.5 sm:p-2 md:p-2.5 shadow-2xl shadow-black/40 flex items-center justify-center">
                                <div className="w-full h-full rounded-full border-[1.5px] sm:border-2 border-dashed border-[#061623]/75 flex flex-col items-center justify-center text-center px-1 select-none">
                                    <span className="text-[10px] sm:text-xs md:text-sm font-semibold text-[#061623] tracking-tight leading-tight">
                                        Avail upto
                                    </span>
                                    <span className="text-base sm:text-2xl md:text-3xl lg:text-[28px] xl:text-[32px] font-black text-[#061623] leading-none my-0.5 sm:my-1">
                                        100%
                                    </span>
                                    <span className="text-[10px] sm:text-xs md:text-sm font-bold text-[#061623] leading-tight">
                                        Scholarship
                                    </span>
                                    <span className="text-[9px] sm:text-[11px] md:text-xs font-normal text-[#061623] leading-tight mt-0.5">
                                        worth
                                    </span>
                                    <span className="text-[10px] sm:text-xs md:text-sm font-black text-[#061623] leading-tight mt-0.5">
                                        INR 27 Cr
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
