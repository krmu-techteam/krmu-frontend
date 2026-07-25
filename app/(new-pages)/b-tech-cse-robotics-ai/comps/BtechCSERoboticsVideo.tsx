"use client";

import { useState } from "react";
import { Roboto_Condensed } from "next/font/google";
import Image from "next/image";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const VIDEO_URL =
  "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";

const BtechCSERoboticsVideo = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="py-10 md:py-16">
        <div className="max-w-[1126px] mx-auto px-4">
          <button
            onClick={() => setOpen(true)}
            className="relative w-full group overflow-hidden rounded-xl"
          >
            <Image
              src="/demo/video-thumbnail.jpg"
              width={1126}
              height={605}
              alt="Video Thumbnail"
              className="w-full h-auto rounded-xl"
            />

            {/* Play Button */}
            <Image
              src="/demo/play-icon.svg"
              width={80}
              height={80}
              alt="Play"
              className="absolute top-1/2 left-1/2
              -translate-x-1/2 -translate-y-1/2
              w-12 h-12
              sm:w-16 sm:h-16
              lg:w-20 lg:h-20
              transition-transform duration-300
              group-hover:scale-110"
            />

            {/* Caption */}
            <p
              className={`${robotoCondensed.className}
              absolute bottom-3 sm:bottom-5 left-1/2
              -translate-x-1/2
              w-[92%] sm:w-[80%] md:w-[70%]
              bg-[rgba(9,51,105,0.45)]
              backdrop-blur-sm
              text-white
              text-sm sm:text-base md:text-lg lg:text-xl
              font-semibold
              leading-tight
              rounded-md
              px-3 py-2`}
            >
              Inside KRMU's Robotics Lab | Student Innovations, Projects &
              Future Tech
            </p>
          </button>
        </div>
      </section>

      {/* Popup */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-6xl aspect-video rounded-xl overflow-hidden bg-black"
          >
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute right-2 top-2 sm:right-4 sm:top-4 z-20
              flex h-9 w-9 sm:h-11 sm:w-11
              items-center justify-center
              rounded-full bg-white text-xl font-bold
              text-black transition hover:scale-105"
            >
              ✕
            </button>

            <iframe
              className="h-full w-full"
              src={VIDEO_URL}
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
};

export default BtechCSERoboticsVideo;