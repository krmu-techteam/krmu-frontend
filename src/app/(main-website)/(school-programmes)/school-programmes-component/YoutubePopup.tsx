"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { LuX } from "react-icons/lu";

type Props = {
    videoUrl: string;
    thumbnail?: string;
    title?: string;
    ytClassName?: string;
    imgClassName?: string;
    playIcon?: boolean;
    inline?: boolean;
};

export default function YoutubePopup({
    videoUrl,
    thumbnail,
    title = "Watch Video",
    ytClassName,
    imgClassName,
    playIcon,
    inline = false,
}: Props) {
    const [open, setOpen] = useState(false);
    const [isPlayingInline, setIsPlayingInline] = useState(false);
    const [isLoadingInline, setIsLoadingInline] = useState(true);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

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
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [open]);

    const handleClick = () => {
        if (inline) {
            setIsLoadingInline(true);
            setIsPlayingInline(true);
        } else {
            setOpen(true);
        }
    };

    if (inline && isPlayingInline && videoId) {
        return (
            <div
                className={`relative overflow-hidden rounded-md ${ytClassName || "w-full h-full"}`}
            >
                <iframe
                    className="w-full h-full rounded-md"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    onLoad={() => setIsLoadingInline(false)}
                />
                <div
                    className={`absolute inset-0 z-10 flex items-center justify-center transition-all duration-700 ease-out ${
                        isLoadingInline
                            ? "opacity-100 scale-100 pointer-events-auto"
                            : "opacity-0 scale-110 pointer-events-none"
                    }`}
                >
                    <Image
                        src={thumbnailUrl}
                        alt={title}
                        width={800}
                        height={450}
                        className={`w-full h-full absolute inset-0 rounded-md ${imgClassName || "object-cover"}`}
                        unoptimized
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        {/* Gradient Border Loading Spinner */}
                        <div className="w-12 h-12 rounded-full p-[3.5px] bg-gradient-to-b from-[#0084ff] via-[#ffaa00] to-[#e32831] animate-spin shadow-xl">
                            <div className="w-full h-full bg-[#061623]/90 rounded-full" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            {/* Thumbnail */}
            <div
                onClick={handleClick}
                className={`relative cursor-pointer group ${ytClassName}`}
            >
                <Image
                    src={thumbnailUrl}
                    alt={title}
                    width={800}
                    height={450}
                    className={`w-full h-full rounded-md ${imgClassName || "object-cover"}`}
                    unoptimized
                />
                {playIcon && (
                    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                        <div className="w-12 h-12  relative flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                            <Image
                                fill
                                src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/play_icon_colorful_6ca9565f28.svg"
                                alt="playicon"
                            />
                        </div>
                    </div>
                )}
            </div>

            {/* Popup */}
            {!inline &&
                open &&
                mounted &&
                createPortal(
                    <div
                        onClick={() => setOpen(false)}
                        className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70 p-4 md:p-10 cursor-pointer backdrop-blur-sm"
                    >
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-5xl 2xl:max-w-7xl cursor-auto"
                        >
                            {/* Close Button positioned above the video container */}
                            <button
                                onClick={() => setOpen(false)}
                                className="absolute -top-11 right-0 text-white/90 hover:text-white flex items-center justify-center transition-all duration-300 hover:rotate-90 hover:scale-110 cursor-pointer p-2 rounded-full bg-black/60 hover:bg-black/80 border border-white/20 shadow-lg z-[10000]"
                                title="Close"
                            >
                                <LuX size={22} />
                            </button>

                            {/* Video */}
                            <div className="w-full aspect-video shadow-2xl overflow-hidden rounded-md bg-black">
                                <iframe
                                    className="w-full h-full"
                                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                                    title={title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>,
                    document.body
                )}
        </>
    );
}
