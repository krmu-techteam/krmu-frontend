"use client";

import { useState } from "react";
import { Play } from "lucide-react";

type props = {
  thumbnail?: string;
};

export default function YoutubeVideoSection({ thumbnail }: props) {
  const [isPlaying, setIsPlaying] = useState(false);

  const youtubeUrl = "https://www.youtube.com/watch?v=9I6QQ6ZYCi8";

  // GET VIDEO ID
  const videoId = youtubeUrl.split("v=")[1]?.split("&")[0];

  // CUSTOM THUMBNAIL
//   const thumbnail =
//     "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop";

  return (
    <section className="w-full ">
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl aspect-video group">
          {!isPlaying ? (
            <>
              {/* THUMBNAIL */}
              <img
                src={thumbnail || 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop'}
                alt="Video Thumbnail"
                className="w-full h-full object-cover"
              />

              {/* OVERLAY */}
              {/* <div className="absolute inset-0 bg-black/40" /> */}

              {/* PLAY BUTTON */}
              <button
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition duration-300">
                  <Play className="fill-black text-black ml-1" size={34} />
                </div>
              </button>
            </>
          ) : (
            <div className="relative w-full aspect-video rounded-xs overflow-hidden border border-white/10">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
