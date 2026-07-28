"use client";

import { useState } from "react";
import { Roboto_Condensed } from "next/font/google";
import Image from "next/image";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const BtechCSERoboticsVideo = () => {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto w-full relative rounded-lg overflow-hidden">
        {!playVideo ? (
          <>
            <Image
              src="/demo/video-thumbnail.jpg"
              width={1126}
              height={605}
              alt="Video Thumbnail"
              className="w-full h-auto"
            />

            <button
              onClick={() => setPlayVideo(true)}
              className="absolute inset-0 flex items-center justify-center cursor-pointer"
              aria-label="Play Video"
            >
              <Image
                src="/demo/play-icon.svg"
                width={68}
                height={68}
                alt="Play"
              />
            </button>

            <p
              className={`${robotoCondensed.className} text-xl font-semibold max-w-[620px] text-white absolute bottom-4 left-1/2 -translate-x-1/2 bg-[rgba(9,51,105,0.4)] rounded px-3 py-2 text-center leading-tight w-[90%]`}
            >
              Inside KRMU's Robotics Lab | Student Innovations, Projects &
              Future Tech
            </p>
          </>
        ) : (
          <div className="relative w-full aspect-video">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/iLzhza28QnM?autoplay=1&rel=0"
              title="Inside KRMU's Robotics Lab"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default BtechCSERoboticsVideo;