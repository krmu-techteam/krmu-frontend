"use client";

import React, { useEffect, useRef, useState } from "react";

export const HeroVideo = ({ HeroSectionVideo }: { HeroSectionVideo?: any }) => {
    console.log(HeroSectionVideo);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(() => {});
        }
    }, []);

    const videoSrc = HeroSectionVideo?.url
        ? HeroSectionVideo.url.startsWith("http")
            ? HeroSectionVideo.url
            : `${HeroSectionVideo.url}`
        : "/modules/home/hero/krm_bg_hero.mp4";

    return (
        <div className="absolute top-0 left-0 w-full h-full bg-[#0B1221] z-0 overflow-hidden">
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="absolute top-0 left-0 w-full h-full object-contain scale-[1.07] lg:scale-100 lg:object-fill lg:scale-y-[1.0634] z-0"
            >
                <source src={videoSrc} type="video/mp4" />
                <source
                    src="/modules/home/hero/krm_bg_hero.mp4"
                    type="video/mp4"
                />
                <source
                    src="/modules/home/hero/krmu-video.mp4"
                    type="video/mp4"
                />
            </video>
            {/* Subtle Left Black Gradient Overlay for Mobile & Tablet Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent z-[1] pointer-events-none lg:hidden" />
        </div>
    );
};
