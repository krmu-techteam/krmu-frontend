"use client";

import { useState } from "react";
import Image from "next/image";

const InterviewReady = () => {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <section className="px-5 xl:px-0 pb-10 md:pb-20 mt-5">
      <div className="mx-auto w-full max-w-6xl">
        {/* Heading */}
        <div className="mb-5 text-center">
          <h3 className="mb-1.5 text-[10px] font-medium uppercase tracking-[0.3em] text-[#8d5552] sm:text-xs sm:tracking-[0.4em]">
            Interview
          </h3>

          <h2 className="font-newsreader text-3xl font-semibold leading-tight text-[#001836] sm:text-4xl md:text-5xl">
            How KRMU Gets you Interview Ready?
          </h2>
        </div>

        {/* Video */}
        <div className="relative w-full overflow-hidden">
          {!playVideo ? (
            <>
              <Image
                src="/placements/main/interview.webp"
                width={1126}
                height={605}
                alt="Video Thumbnail"
                className="block h-auto w-full object-cover"
                priority
              />

              <button
                type="button"
                onClick={() => setPlayVideo(true)}
                className="absolute inset-0 flex items-center justify-center"
                aria-label="Play Video"
              >
                <Image
                  src="/demo/play-icon.svg"
                  width={68}
                  height={68}
                  alt="Play"
                  className="h-10 w-10 sm:h-14 sm:w-14 md:h-[68px] md:w-[68px]"
                />
              </button>
            </>
          ) : (
            <div className="relative aspect-video w-full">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/iLzhza28QnM?autoplay=1&rel=0"
                title="Inside KRMU's Robotics Lab"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InterviewReady;