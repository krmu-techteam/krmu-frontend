"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
    thumbnail: string;
    ytUrl: string;
};

export default function YoutubeVideoSection({ thumbnail, ytUrl }: Props) {
    const [isPlaying, setIsPlaying] = useState(false);

    const youtubeUrl = ytUrl;
    const videoId = youtubeUrl?.split("v=")[1]?.split("&")[0];

    return (
        <section className="w-full">
            <div className="w-full">
                <div className="relative overflow-hidden rounded-[4px] aspect-video group">
                    {!isPlaying ? (
                        <>
                            <Image
                                src={
                                    thumbnail ||
                                    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                                }
                                width={680}
                                height={384}
                                alt="Video Thumbnail"
                                className="w-full h-full object-cover scale-[1.01]"
                            />

                            <button
                                onClick={() => setIsPlaying(true)}
                                className="absolute inset-0 flex items-center justify-center cursor-pointer z-10"
                            >
                                <div className="w-18 h-18 rounded-full relative flex items-center justify-center shadow-2xl group-hover:scale-105 transition duration-300">
                                    <Image
                                        fill
                                        src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/play_icon_colorful_6ca9565f28.svg"
                                        alt="playicon"
                                    />
                                </div>
                            </button>
                        </>
                    ) : (
                        <div className="relative w-full h-full aspect-video overflow-hidden">
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
