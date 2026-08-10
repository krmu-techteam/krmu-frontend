"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getWordImageById } from "@/lib/api/common";

interface FeaturedBannerSectionProps {
  title?: string;
  slug?: string;
  publishedAt?: string;
  firstImage?: number;
  imageUrl?: string;
}

const FeaturedBannerSection = ({
  title,
  slug,
  publishedAt,
  firstImage,
  imageUrl: initialImageUrl = "",
}: FeaturedBannerSectionProps) => {
  const [imageUrl, setImageUrl] = useState<string>(initialImageUrl);

  useEffect(() => {
    if (firstImage) {
      getWordImageById(firstImage)
        .then((url) => {
          if (url) setImageUrl(url);
        })
        .catch((err) => console.error("Failed to load featured image:", err));
    } else if (initialImageUrl) {
      setImageUrl(initialImageUrl);
    }
  }, [firstImage, initialImageUrl]);

  const formattedDate = publishedAt
    ? new Date(publishedAt).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "";

  const href = slug ? `/events-and-news/${slug}` : "#";

  return (
    <div className="w-full">
      {/* Card Content Container with direct border */}
      <div className="rounded-[10px] border-2 border-[#0D7377] p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10 xl:gap-12 min-h-[380px]">
        {/* Left Image Column */}
        <div className="w-full lg:w-[50%] xl:w-[681px] max-w-[681px] shrink-0 rounded-[10px] overflow-hidden relative aspect-[16/10]">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={title || "Featured News"}
              fill
              className="object-cover rounded-[10px]"
              priority
            />
          ) : (
            <div className="w-full h-full bg-[#294861]/40 rounded-[10px] animate-pulse" />
          )}
        </div>

        {/* Right Text Content Column */}
        <div className="w-full lg:w-[48%] xl:flex-1 flex flex-col items-center lg:items-center text-center lg:text-center justify-center space-y-4 sm:space-y-6 text-white py-2">
          {formattedDate && (
            <p className="text-[#E7C268] font-poppins text-sm sm:text-base lg:text-[18px] font-normal tracking-wide">
              Published On: {formattedDate}
            </p>
          )}

          <h2
            className="font-serif font-normal text-xl sm:text-2xl lg:text-[28px] xl:text-[34px] leading-[1.3] text-white max-w-[780px]"
            dangerouslySetInnerHTML={{ __html: title || "" }}
          />

          <Link
            href={href}
            className="inline-flex items-center text-[#00B7FF] hover:text-[#00B7FF]/80 font-poppins text-[16px] font-medium transition-colors underline pt-2"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBannerSection;
