"use client";

import { useState, useEffect } from "react";

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
    thumbnail || `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

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
        <img
          src={thumbnailUrl}
          alt={title}
          className="w-full h-full rounded-md object-cover"
        />

        {/* Play Button */}
        {playIcon && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black/60 p-4 rounded-full group-hover:scale-110 transition">
              ▶
            </div>
          </div>
        )}
      </div>

      {/* Popup */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="relative w-[90%] md:w-[800px]">
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-10 right-0 text-white text-3xl cursor-pointer"
            >
              ✕
            </button>

            {/* Video */}
            <div className="aspect-video rounded-xl overflow-hidden">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
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
