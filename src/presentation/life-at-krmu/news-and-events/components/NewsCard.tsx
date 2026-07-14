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

  const formattedDate = new Date(publishedAt).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="group cursor-pointer transform-gpu backface-hidden">
      <Link href={`/events-and-news/${slug}`} className="block">
        <div className="relative aspect-[3/2] rounded-sm overflow-hidden mb-4 bg-white/5 transform-gpu backface-hidden">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-1000 transform-gpu backface-hidden"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
            <span className="text-white text-[12px] font-normal font-poppins flex items-center gap-2 transform transform-gpu translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 backface-hidden">
              Read Full Story{" "}
              <ArrowUpRight size={14} className="text-brand-gold" />
            </span>
          </div>
        </div>
      </Link>

      <p className="text-white/90 text-[16px] font-poppins font-normal mb-1 antialiased">
        Published On: {formattedDate}
      </p>

      <Link href={`/events-and-news/${slug}`} className="block">
        <h3
          className="text-white font-serif md:text-[18px] text-base leading-snug group-hover:text-brand-gold transition-colors line-clamp-2 antialiased"
          dangerouslySetInnerHTML={{
            __html: title,
          }}
        />
      </Link>
    </div>
  );
};

export default NewsCard;
