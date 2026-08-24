import React from "react";
import Image from "next/image";
import Link from "next/link";

export const HeroVirtualTour = () => {
    return (
        <Link
            href="/campus-life/virtual-tour"
            className="absolute bottom-2 md:bottom-10 right-4 md:right-12 z-30 flex flex-col items-center group cursor-pointer"
            target="_blank"
        >
            <div className="flex flex-col items-center transition-all duration-500">
                <div className="relative w-[80px] sm:w-[120px] h-[60px] sm:h-[90px]">
                    <Image
                        src="/modules/home/hero/virtual-tour.png"
                        alt="360 Virtual Tour"
                        fill
                        sizes="(max-width: 768px) 80px, 120px"
                        className="object-contain"
                        priority
                    />
                </div>
            </div>
        </Link>
    );
};
