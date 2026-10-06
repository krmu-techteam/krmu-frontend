"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export const HeroVideo = ({ HeroSectionVideo }: { HeroSectionVideo?: any }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const hasAnimated = useRef(false);

    const triggerCinematicReveal = () => {
        if (hasAnimated.current || !videoRef.current) return;
        hasAnimated.current = true;

        const isDesktop =
            typeof window !== "undefined" && window.innerWidth >= 1024;
        const targetScaleX = isDesktop ? 1 : 1.07;
        const targetScaleY = isDesktop ? 1.0634 : 1.07;
        const startScaleX = targetScaleX * 1.04;
        const startScaleY = targetScaleY * 1.04;

        // Smooth cinematic settle into place once video starts playing
        gsap.fromTo(
            videoRef.current,
            {
                scaleX: startScaleX,
                scaleY: startScaleY,
            },
            {
                scaleX: targetScaleX,
                scaleY: targetScaleY,
                duration: 1.2,
                ease: "power2.out",
            }
        );
    };

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        let frameCallbackId: number | null = null;

        const onFirstFrame = () => {
            if (hasAnimated.current) return;
            triggerCinematicReveal();
        };

        // Modern browsers: wait for the actual decoded video frame
        if ("requestVideoFrameCallback" in video) {
            frameCallbackId = (video as any).requestVideoFrameCallback(() => {
                onFirstFrame();
            });
        }

        const handlePlaying = () => {
            requestAnimationFrame(() => {
                onFirstFrame();
            });
        };

        const handleTimeUpdate = () => {
            if (video.currentTime > 0) {
                onFirstFrame();
            }
        };

        video.addEventListener("playing", handlePlaying);
        video.addEventListener("timeupdate", handleTimeUpdate);

        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.catch(() => {});
        }

        if (video.currentTime > 0 && !video.paused) {
            onFirstFrame();
        }

        // Fallback timer: only triggers if browser completely delays media events for 4s
        const fallbackTimer = setTimeout(() => {
            onFirstFrame();
        }, 4000);

        return () => {
            clearTimeout(fallbackTimer);
            if (video) {
                video.removeEventListener("playing", handlePlaying);
                video.removeEventListener("timeupdate", handleTimeUpdate);
                if (
                    frameCallbackId !== null &&
                    "cancelVideoFrameCallback" in video
                ) {
                    (video as any).cancelVideoFrameCallback(frameCallbackId);
                }
            }
        };
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
                title="K.R. Mangalam university video"
                aria-label="K.R. Mangalam university video"
                className="absolute top-0 left-0 w-full h-full object-contain lg:object-cover z-0 will-change-transform"
            >
                <source src={videoSrc} type="video/mp4" />
                {videoSrc !== "/modules/home/hero/krm_bg_hero.mp4" && (
                    <source
                        src="/modules/home/hero/krm_bg_hero.mp4"
                        type="video/mp4"
                    />
                )}
                Your browser does not support the video tag. K.R. Mangalam
                university video
            </video>

            {/* Subtle Left Black Gradient Overlay for Mobile & Tablet Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent z-[2] pointer-events-none lg:hidden" />
        </div>
    );
};
