"use client";

import React, { useEffect, useRef, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const HeroVideo = ({ HeroSectionVideo }: { HeroSectionVideo?: any }) => {
  console.log(HeroSectionVideo);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-[#0B1221] z-0 overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute top-0 left-0 w-full h-full object-cover object-center z-0"
      >
        <source src="/modules/home/hero/krmu-video.mp4" type="video/mp4" />
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
    </div>
  );
};
