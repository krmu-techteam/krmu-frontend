"use client";

import { getWordImageById } from "@/lib/api/common";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

type NewsCardProps = {
  title: string;
  slug: string;
  firstImage: number;
  publishedAt: string;
};

const NewsCard = ({ title, slug, firstImage, publishedAt }: NewsCardProps) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      if (!firstImage) return;

      try {
        const url = await getWordImageById(firstImage);
        setImageUrl(url);
      } catch (error) {
        console.error("Failed to load image:", error);
      }
    };

    fetchImage();
  }, [firstImage]);

  const formattedDate = publishedAt
    ? new Date(publishedAt).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "";

  return (
    <div className="h-full">
      <Link
        href={`/events-and-news/${slug}`}
        className="block h-full w-full group border border-[#294861] rounded-[10px] flex flex-col justify-between"
      >
        <div>
          <div className="relative aspect-[16/10] w-full rounded-[8px] border border-[#294861] overflow-hidden mb-3.5 bg-white/5">
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt={title || "News Image"}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full bg-[#294861]" />
            )}
          </div>

          <div className="p-3.5">
            {formattedDate && (
              <p className="text-[#E7C268] text-xs sm:text-sm font-medium mb-2 font-poppins">
                Published On: {formattedDate}
              </p>
            )}

            <h3
              className="text-white font-poppins text-base sm:text-[18px] md:text-[20px] font-normal leading-snug line-clamp-2 group-hover:text-[#E7C268] transition-colors"
              dangerouslySetInnerHTML={{ __html: title || "" }}
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NewsCard;
