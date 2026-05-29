"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { LuX } from "react-icons/lu";

type Props = {
  videoUrl: string;
  thumbnail?: string;
  title?: string;
  ytClassName?: string;
  playIcon?: boolean;
};

export default function YoutubePopup({
  videoUrl,
  thumbnail,
  title = "Watch Video",
  ytClassName,
  playIcon,
}: Props) {
  const [open, setOpen] = useState(false);

  // 👉 Extract YouTube ID
  const getVideoId = (url: string) => {
    const regExp = /(?:youtube\.com\/.*v=|youtu\.be\/)([^&]+)/;
    const match = url.match(regExp);
    return match ? match[1] : "";
  };

  const videoId = getVideoId(videoUrl);

  // 👉 Auto thumbnail if not passed
  const thumbnailUrl =
    thumbnail ||
    (videoId
      ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
      : "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Thumbnail_51b749248c.png");

  // 👉 Disable background scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      {/* Thumbnail */}
      <div
        onClick={() => setOpen(true)}
        className={`relative cursor-pointer group ${ytClassName}`}
      >
        <Image
          src={thumbnailUrl}
          alt={title}
          width={800}
          height={450}
          className="w-full h-full rounded-md object-cover"
        />

        {/* Play Button */}
        {/* {playIcon && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <Image
              src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/play_bed78459c4.png"
              alt="Play Video"
              width={72}
              height={72}
              className="h-[72px] w-[72px] object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-[12px] font-bold antialiased tracking-[0.3em] text-white uppercase drop-shadow-lg">
              Play Video
            </span>
          </div>
        )} */}
      </div>

      {/* Popup */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 p-4 md:p-10 cursor-pointer backdrop-blur-md"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl 2xl:max-w-7xl aspect-video shadow-2xl overflow-hidden rounded-md cursor-auto"
          >
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-1 z-[10000] text-white flex items-center justify-center transition-all duration-300 hover:rotate-90 hover:scale-110  cursor-pointer group"
            >
              <LuX size={25} className="transition-transform" />
            </button>

            {/* Video */}
            <div className="w-full h-full bg-black">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                title="YouTube video"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
