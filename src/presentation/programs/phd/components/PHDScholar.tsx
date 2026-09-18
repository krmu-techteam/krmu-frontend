import React from "react";
import { ScholarSponsoredPartTime } from "@/lib/types/phd-programmes";
import { Newsreader } from "next/font/google";

const newsreader = Newsreader({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    style: ["normal", "italic"],
});

type Props = {
    scholarShipsData?: ScholarSponsoredPartTime;
};

const PHDScholar = ({ scholarShipsData }: Props) => {
    return (
        <section
            id="scholar-categories"
            className="w-full bg-[#F7F2E7] pt-8 sm:pt-10 lg:pt-12 pb-16 sm:pb-20 lg:pb-24 px-5 sm:px-8 md:px-10 lg:px-12 xl:px-[51px] scroll-mt-24"
        >
            <div className="max-w-[1440px] mx-auto w-full">
                {/* Title */}
                <h2
                    className={`${newsreader.className} text-[36px] sm:text-[44px] lg:text-[48px] font-medium text-[#14233D] tracking-[-0.02em] leading-tight mb-8 sm:mb-10`}
                >
                    Scholar categories
                </h2>

                {/* 3-Column Card Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 bg-[#FFFCF6] border border-[#D6D2C9]">
                    {/* Column 1: TYPE - A */}
                    <div className="p-6 sm:p-8 lg:p-10 flex flex-col border-b md:border-b-0 md:border-r border-[#D6D2C9]">
                        <span className="text-[#B08233] uppercase text-[11px] sm:text-[12px] font-semibold tracking-[0.15em] mb-3">
                            TYPE — A
                        </span>
                        <h3 className="text-[#14233D] font-bold text-[20px] sm:text-[22px] lg:text-[24px] leading-tight mb-4">
                            {scholarShipsData?.title1}
                        </h3>
                        <p className="text-[#14233D] text-[14px] sm:text-[15px] font-normal">
                            {scholarShipsData?.desc1}
                        </p>
                    </div>

                    {/* Column 2: TYPE - B */}
                    <div className="p-6 sm:p-8 lg:p-10 flex flex-col border-b md:border-b-0 md:border-r border-[#D6D2C9]">
                        <span className="text-[#B08233] uppercase text-[11px] sm:text-[12px] font-semibold tracking-[0.15em] mb-3">
                            TYPE — B
                        </span>
                        <h3 className="text-[#14233D] font-bold text-[20px] sm:text-[22px] lg:text-[24px] leading-tight mb-4">
                            {scholarShipsData?.title2}
                        </h3>
                        <p className="text-[#14233D] text-[14px] sm:text-[15px]font-normal">
                            {scholarShipsData?.desc2}
                        </p>
                    </div>

                    {/* Column 3: TYPE - C */}
                    <div className="p-6 sm:p-8 lg:p-10 flex flex-col">
                        <span className="text-[#B08233] uppercase text-[11px] sm:text-[12px] font-semibold tracking-[0.15em] mb-3">
                            TYPE — C
                        </span>
                        <h3 className="text-[#14233D] font-bold text-[20px] sm:text-[22px] lg:text-[24px] leading-tight mb-4">
                            {scholarShipsData?.title3}
                        </h3>
                        <p className="text-[#14233D] text-[14px] sm:text-[15px] font-normal">
                            {scholarShipsData?.desc3}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PHDScholar;
