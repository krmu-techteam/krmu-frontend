"use client";
import React, { useEffect, useState } from "react";
import { getBlogService } from "@/features/blog";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import Image from "next/image";
import { Eye, Calendar } from "lucide-react";

type Props = {
  title: string;
  imgId: number;
  date: string;
  slug: string;
};

const AuthorPostsCard = ({ title, imgId, date, slug }: Props) => {
  const [imgUrl, setImgUrl] = useState<string | null>(null);

  useEffect(() => {
    getBlogService()
      .getBlogImageByIdClientComp(imgId)
      .then((url) => setImgUrl(url || null));
  }, [imgId]);

  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "15 July 2026";

  return (
    <Link
      href={`/blog/${slug}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col h-full bg-[linear-gradient(180deg,#061623_0%,rgba(24,52,83,0)_100%)] border border-[#14283c] rounded-none overflow-hidden font-poppins transition-transform duration-500 ease-out transform-gpu hover:-translate-y-1"
    >
      {/* Left Vertical Gradient Border */}
      <div
        className="absolute left-0 top-[45%] bottom-0 w-[1px] pointer-events-none z-20"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0) 0%, #999 49%, rgba(255,255,255,0) 97%)",
        }}
      />
      {/* Right Vertical Gradient Border */}
      <div
        className="absolute right-0 top-[45%] bottom-0 w-[1px] pointer-events-none z-20"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0) 0%, #999 49%, rgba(255,255,255,0) 97%)",
        }}
      />

      {/* Image */}
      <div className="relative w-full aspect-[16/9] bg-[#071726] overflow-hidden">
        {imgUrl ? (
          <Image
            src={imgUrl}
            alt={title || "Blog Post"}
            fill
            className="object-contain object-center group-hover:scale-[1.03] transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, 25vw"
            unoptimized
          />
        ) : (
          <Skeleton className="w-full h-full rounded-none bg-white/10" />
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1 justify-between">
        <div>
          {/* Category pill */}
          <div className="inline-block border border-white/20 text-white/90 text-xs px-3.5 py-1 rounded-full font-light mb-3 tracking-wide group-hover:border-[#E7C268]/40 transition-colors duration-500">
            KRMU Blog
          </div>

          {/* Title */}
          {title ? (
            <h3
              dangerouslySetInnerHTML={{ __html: title }}
              className="font-serif text-lg sm:text-xl font-bold text-[#E7C268] group-hover:text-[#f7d788] leading-snug mb-2.5 line-clamp-2 tracking-tight transition-colors duration-500"
            />
          ) : (
            <Skeleton className="w-full h-8 mb-2.5 bg-white/10 rounded" />
          )}

          <span className="text-[#009bf2] group-hover:text-[#38bdf8] text-xs sm:text-sm font-medium inline-block mb-1 transition-colors duration-500">
            Read more →
          </span>
        </div>

        <div>
          {/* Divider */}
          <div
            className="w-full h-[1px] my-3.5"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,255,255,0) 0%, #999 49%, rgba(255,255,255,0) 97%)",
            }}
          />

          {/* Footer */}
          <div className="flex items-center gap-4 text-white/70 text-xs font-poppins pt-0.5 flex-wrap">
            <div className="flex items-center gap-1.5">
              <Eye className="w-4 h-4" />
              <span>1,32,124</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>{formattedDate}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AuthorPostsCard;
