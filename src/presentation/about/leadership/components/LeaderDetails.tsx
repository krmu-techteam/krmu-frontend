"use client";

import { useState } from "react";
import Image from "next/image";
import type { Leadership } from "@/lib/api/leadership";
import { STRAPI_URL } from "@/app/constant";

type LeaderDetailsProps = {
  leader: Leadership;
};

export const LeaderDetails = ({ leader }: LeaderDetailsProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex flex-col font-poppins md:flex-row items-start md:items-center gap-10">
      {/* LEFT CONTENT */}
      <div className="md:w-3/5">
        <h3 className="text-4xl text-[#0060aa] font-bold">{leader.name}</h3>

        <h4 className="text-lg text-[#0060aa]  mt-3 font-semibold">
          {leader.desg}
        </h4>

        {leader.content && (
          <div className="relative mt-5">
            {/* CONTENT */}
            <div
              className={`prose max-w-none transition-all duration-300 bg-transparent overflow-hidden ${
                expanded ? "max-h-[2000px]" : "max-h-[150px]"
              }`}
              dangerouslySetInnerHTML={{
                __html: leader.content,
              }}
            />

            {/* FADE OVERLAY (only when collapsed) */}
            {!expanded && (
              <div className="absolute bottom-0 left-0 w-full h-20  pointer-events-none" />
            )}

            {/* READ MORE / LESS */}
            <button
              onClick={() => setExpanded((prev) => !prev)}
              className="mt-4 text-[#0060aa] font-semibold hover:underline"
            >
              {expanded ? "Read less" : "Read more"}
            </button>
          </div>
        )}
      </div>

      {/* RIGHT IMAGE */}
      <div className="hidden sm:block md:w-2/5 flex justify-center min-h-[368px] h-full relative">
        {leader.leadership_img?.url && (
          <Image
            src={`${STRAPI_URL}${leader.leadership_img.url}`}
            fill
            alt={leader.name}
            className="object-contain hidden sm:block z-10"
          />
        )}
      </div>
    </div>
  );
};
