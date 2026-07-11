"use client";

import Image from "next/image";
import { useState } from "react";
import { CirclePlay, CircleX } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Props = {
  thumbnail: string;
  videoUrl: string; // full youtube url OR id
  title?: string;
};

/* --------------------------
   helper → extract youtube id
---------------------------*/
function getYoutubeId(url: string) {
  if (!url) return "";

  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    const regExp =
      /(?:youtube\.com\/(?:.*v=|embed\/)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regExp);
    return match?.[1] || "";
  }

  return url; // already id
}

export default function SEMCEVideoSection({
  thumbnail,
  videoUrl,
  title,
}: Props) {
  const [open, setOpen] = useState(false);

  const videoId = getYoutubeId(videoUrl);

  return (
    <section className="lg:h-[700px] 2xl:h-[800px] object-center">
      <div className="w-full lg:h-[700px] 2xl:h-[800px] object-center">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild className="lg:h-[700px] 2xl:h-[800px] object-center">
            <div className="relative cursor-pointer group lg:h-[700px] 2xl:h-[800px] object-center">
              <Image
                src={thumbnail}
                alt={title || "video"}
                width={1200}
                height={600}
                className="w-full lg:h-[700px] 2xl:h-[800px] object-center object-fill"
              />

              {/* Overlay */}
              <div className="absolute inset-0 rounded-xl flex items-center justify-center">
                <CirclePlay color="#ffffff" strokeWidth={1} size={60} />
              </div>
            </div>
          </DialogTrigger>

          <DialogContent className="p-0 overflow-hidden semce-popup-video">
            <DialogTitle className="hidden">
              <span>
                The SEMCE{" "}
                <span className="instrument-serif ">Conversations</span>
              </span>
            </DialogTitle>
            {open && (
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                  title={title || "video"}
                  allow="autoplay; encrypted-media; fullscreen"
                  allowFullScreen
                />
              </div>
            )}
            <DialogClose asChild className="absolute top-2.5 right-2.5 cursor-pointer">
            <CircleX color="#ffffff" />
          </DialogClose>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
