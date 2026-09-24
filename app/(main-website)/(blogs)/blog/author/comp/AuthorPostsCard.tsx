"use client";

import { useEffect, useState } from "react";
import { getBlogImageByIdClientComp } from "@/lib/api/blogs/single-blog";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  imgId: number;
  date: string;
  slug: string;
};

const FALLBACK_IMAGE =
  "https://www.krmangalam.edu.in/images/blog/blog-placeholder.jpg";

const AuthorPostsCard = ({
  title,
  imgId,
  date,
  slug,
}: Props) => {
  const [imgUrl, setImgUrl] = useState("");
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    let mounted = true;

    setImgUrl("");
    setImageError(false);

    if (!imgId) {
      setImageError(true);
      return;
    }

    getBlogImageByIdClientComp(imgId)
      .then((url) => {
        if (!mounted) return;

        if (url) {
          setImgUrl(url);
        } else {
          setImageError(true);
        }
      })
      .catch((error) => {
        console.error(`Failed to load image for media ID ${imgId}:`, error);
        if (mounted) {
          setImageError(true);
        }
      });

    return () => {
      mounted = false;
    };
  }, [imgId]);

  const postDate = new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const finalImageUrl = imageError ? FALLBACK_IMAGE : imgUrl;

  return (
    <Link
      href={`/blog/${slug}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col md:flex-row gap-2.5 md:gap-5 mb-5 md:h-[172px] border-b border-[#d2d2d2] pb-5"
    >
      {/* IMAGE */}
      <div className="w-full md:w-2/5 md:h-[151px] shrink-0">
        {!imgUrl && !imageError ? (
          <Skeleton className="w-full h-[151px] rounded-none" />
        ) : (
          <Image
            src={finalImageUrl}
            width={300}
            height={151}
            alt={title || "Blog article"}
            className="w-full h-[151px] object-cover"
            onError={() => {
              console.error(
                `Broken blog image. Media ID: ${imgId}, URL: ${imgUrl}`
              );

              setImageError(true);
            }}
          />
        )}
      </div>

      {/* CONTENT */}
      <div className="w-full md:w-3/5">
        {title ? (
          <h3
            className="font-semibold text-sm sm:text-xl md:text-2xl leading-[1.2] mb-2.5 text-[#1048c3]"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        ) : (
          <Skeleton className="w-full h-10" />
        )}

        {postDate ? (
          <p className="text-[#666] text-xs sm:text-sm">
            {postDate}
          </p>
        ) : (
          <Skeleton className="w-[80px] h-3" />
        )}
      </div>
    </Link>
  );
};

export default AuthorPostsCard;