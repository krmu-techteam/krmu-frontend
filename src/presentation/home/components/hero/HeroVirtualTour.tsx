import React from "react";
import Image from "next/image";
import Link from "next/link";

export const HeroVirtualTour = () => {
  return (
    <Link
      href="/campus-life/virtual-tour"
      className="absolute bottom-10 right-6 md:right-12 z-30 flex flex-col items-center group cursor-pointer"
      target="_blank"
    >
      <div className="flex flex-col items-center transition-all duration-500">
        <div className="relative w-[120px] h-[90px]">
          <Image
            src="/modules/home/hero/virtual-tour.png"
            alt="360 Virtual Tour"
            fill
            sizes="120px"
            className="object-contain filter drop-shadow-xl"
            priority
          />
        </div>
      </div>
    </Link>
  );
};
