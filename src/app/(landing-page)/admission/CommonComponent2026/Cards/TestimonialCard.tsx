"use client";

import Image from "next/image";

import { useState } from "react";
import { TestimonialItem } from "../../law-2026/contentype";

type Props = {
  data: TestimonialItem;
};

const TestimonialCard = ({ data }: Props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-2xl">
      {/* Image */}
      <Image
        src={data.image}
        width={400}
        height={600}
        alt={data.name}
        className="h-[420px] w-full object-cover"
      />

      {/* Play Button */}
      {/* {data.videoUrl && (
        <div className="absolute top-4 left-4 bg-white/90 p-3 rounded-full z-20">
          <Link href={data.videoUrl}>
            <Image
              src="/landingpage/common/play-icon.png"
              width={14}
              height={14}
              alt="Play"
            />
          </Link>
        </div>
      )} */}

      {/* Overlay */}
      <div className="absolute bottom-0 left-[50%] translate-x-[-50%] w-[94%] mx-auto z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

        <div className="relative px-5 pb-5 pt-5 mb-4 rounded-2xl bg-white opacity-[0.8]">
          {/* Quote */}
          <p
            className={`text-black text-sm leading-relaxed mb-2 transition-all italic ${
              expanded ? "" : "line-clamp-3"
            }`}
          >
            “{data.quote}”
          </p>

          {/* Read More */}
          {data.quote.length > 120 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-xs text-red-500 underline mb-3 cursor-pointer"
            >
              {expanded ? "Read less" : "Read more"}
            </button>
          )}

          {/* Name + Programme */}
          <div className="flex gap-4 text-xs text-black">
            <span>{data.name}</span>
            <span>{data.programme}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
