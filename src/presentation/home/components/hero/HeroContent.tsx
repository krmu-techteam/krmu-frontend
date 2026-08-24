import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const HeroContent = ({
    title,
    subtitle,
}: {
    title: string;
    subtitle: string;
}) => {
    return (
        <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-16 lg:px-24 z-20 text-white">
            <div className="max-w-4xl w-full">
                <p
                    className="text-[14px]  sm:text-[20px] md:text-[24px] lg:text-[35px] font-normal tracking-tight mb-3 sm:mb-4 leading-[1.3] opacity-95"
                    style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
                >
                    {subtitle}
                </p>
                <h1
                    className="text-[30px]  sm:text-[44px] md:text-[56px] lg:text-[70px] font-semibold tracking-tighter mb-4 sm:mb-6 leading-[1.05]"
                    style={{ textShadow: "0 4px 8px rgba(0,0,0,0.6)" }}
                >
                    {title}
                </h1>
                <div className="flex justify-start">
                    <Link
                        href="/about-us"
                        className="inline-flex items-center gap-2.5 text-[14px] md:text-[16px] font-medium group/btn cursor-pointer relative overflow-hidden group"
                    >
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all overflow-hidden relative">
                            <ArrowRight className="w-4 h-4 text-white transition-all duration-500 ease-in-out transform group-hover:translate-x-5 group-hover:opacity-0" />
                            <ArrowRight className="w-4 h-4 text-white transition-all duration-500 ease-in-out absolute -translate-x-5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
                        </div>
                        <span
                            className="tracking-tight hover:underline"
                            style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
                        >
                            Explore K.R. Mangalam
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};
