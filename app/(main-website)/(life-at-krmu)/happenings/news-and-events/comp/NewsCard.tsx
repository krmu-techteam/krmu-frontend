"use client";

import { getWordImageById } from "@/lib/api/common";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type NewsCardProps = {
  title: string;
  slug: string;
  firstImage: number;
  publishedAt: string;
};

const NewsCard = ({ title, slug, firstImage, publishedAt }: NewsCardProps) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [imageLoading, setImageLoading] = useState<boolean>(!!firstImage);

  useEffect(() => {
    const fetchImage = async () => {
      if (!firstImage) {
        setImageLoading(false);
        return;
      }

      setImageLoading(true);
      try {
        const url = await getWordImageById(firstImage);

        setImageUrl(url);
      } catch (error) {
        console.error("Failed to load image:", error);
      } finally {
        setImageLoading(false);
      }
    };

    fetchImage();
  }, [firstImage]);

  return (
    <div
      className="rounded-3xl overflow-hidden"
      style={{
        background: `linear-gradient(180deg,rgba(255,255,255,.2) 0%,rgba(255,255,255,.12) 100%)`,
        backdropFilter: "blur(13.410955429077px)",
      }}
    >
      {imageLoading && (
        <div className="w-full xl:h-[265px] h-[246px] rounded-t-3xl animate-pulse bg-slate-200" />
      )}

      {!imageLoading && imageUrl && (
        <Image
          src={imageUrl}
          alt={title}
          width={370}
          height={246}
          className="w-full rounded-t-3xl xl:h-[265px]"
        />
      )}

      {!imageLoading && !imageUrl && firstImage ? (
        <div className="w-full xl:h-[265px] h-[246px] rounded-t-3xl bg-white/5 flex items-center justify-center text-white/40 text-xs">
          No image
        </div>
      ) : null}

      <div className="pt-5 pl-[30px]">
        <span className="text-xs text-[#898989]">
          Published On:{" "}
          {new Date(publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>

        <div className="text-white mt-2.5 mb-[15px] text-xl font-semibold">
          <h2
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          />
        </div>

        <Link
          href={`/events-and-news/${slug || "#"}`}
          target="_blank"
          rel="noopener noreferrer"
          className="italic text-white text-xs underline inline-block py-[29px]"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
