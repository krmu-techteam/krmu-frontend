import React from "react";
import { ConnectingTalent } from "@/lib/types/phd-programmes";
import { Newsreader } from "next/font/google";

const newsreader = Newsreader({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    style: ["normal", "italic"],
});

type Props = {
    connectingTalent: ConnectingTalent;
};

const PHDConnectingDream = ({ connectingTalent }: Props) => {
    const dreamcounter = connectingTalent?.dreamcounter;

    return (
        <section
            style={{
                background:
                    "radial-gradient(38.46% 38.46% at 50% 50%, #1D2F4C 0%, #080E1B 100%)",
            }}
            className="w-full text-white pt-[64px] pb-[56px] px-6 sm:px-10 lg:px-[77px] overflow-hidden"
        >
            <div className="max-w-[1440px] mx-auto w-full flex flex-col justify-between gap-[44px]">
                {/* 3 STATS ROW WITH GOLDEN VERTICAL GRADIENT DIVIDERS */}
                {dreamcounter && dreamcounter.length > 0 && (
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        {dreamcounter.map((counter, idx) => (
                            <React.Fragment key={counter?.id || idx}>
                                <div className="flex-1 flex flex-col items-center justify-center py-6 md:py-0 px-4 text-center">
                                    <span
                                        className={`${newsreader.className} text-white text-[52px] sm:text-[60px] lg:text-[68px] font-normal leading-none mb-3 sm:mb-4`}
                                    >
                                        {counter?.countertext}
                                    </span>
                                    <span className="text-[#C29C4B] uppercase text-[11px] sm:text-[12px] font-semibold tracking-[0.2em]">
                                        {counter?.countercontent}
                                    </span>
                                </div>
                                {idx < dreamcounter.length - 1 && (
                                    <div
                                        style={{
                                            background:
                                                "linear-gradient(180deg, rgba(194, 156, 75, 0) 0%, rgba(194, 156, 75, 0.45) 50%, rgba(194, 156, 75, 0) 100%)",
                                        }}
                                        className="hidden md:block w-[1px] h-[96px] shrink-0"
                                    />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                )}

                {/* HORIZONTAL GRADIENT DIVIDER */}
                <div
                    style={{
                        background:
                            "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.14) 50%, rgba(255, 255, 255, 0) 100%)",
                    }}
                    className="w-full h-[1px]"
                />

                {/* RECRUITMENT PARTNERS */}
                <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center -mt-3">
                    <span className="text-[#C29C4B] uppercase text-[11px] sm:text-[12px] font-semibold tracking-[0.18em]">
                        RECRUITMENT PARTNERS
                    </span>
                    <span className="text-[#BFC7D6] text-[12px] sm:text-[13px] font-normal tracking-wide">
                        Apple &nbsp;·&nbsp; Google &nbsp;·&nbsp; NASA
                        &nbsp;·&nbsp; Tesla &nbsp;·&nbsp; Microsoft
                        &nbsp;·&nbsp; Ford Motor Company
                    </span>
                </div>
            </div>
        </section>
    );
};

export default PHDConnectingDream;
