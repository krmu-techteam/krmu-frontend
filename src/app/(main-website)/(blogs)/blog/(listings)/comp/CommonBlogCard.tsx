import { getBlogImageById } from "@/lib/api/blogs/single-blog";
import Image from "next/image";
import Link from "next/link";
import { Eye, Calendar } from "lucide-react";

type Props = {
  title: string;
  excerpt: string;
  slug: string;
  imgId: number;
  date: string;
  categoryName?: string;
  views?: string | number;
};

export const checkImage = async (url: string | null): Promise<boolean> => {
  if (!url) return false;
  try {
    const res = await fetch(url, { method: "HEAD" });
    return res.ok;
  } catch {
    return false;
  }
};

const CommonBlogCard = async ({
  title,
  excerpt,
  slug,
  imgId,
  date,
  categoryName = "Btech Design",
  views = "1,32,124",
}: Props) => {
  const imgUrl = await getBlogImageById(imgId);

  const finalSrc = imgUrl?.includes(
    "https://wp.krmangalam.edu.in/blog/wp-content",
  )
    ? imgUrl
    : imgUrl?.replace(
        /^https:\/\/www\.krmangalam\.edu\.in/,
        "https://wp.krmangalam.edu.in/",
      ) || null;

  const finalSrc2 = finalSrc?.includes(
    "https://wp.krmangalam.edu.in//wp-content",
  )
    ? finalSrc.replace(
        "https://wp.krmangalam.edu.in//wp-content",
        "https://wp.krmangalam.edu.in/blog/wp-content",
      )
    : finalSrc;

  let finalImage: string | null = null;

  if (await checkImage(imgUrl)) {
    finalImage = imgUrl;
  } else if (await checkImage(finalSrc2)) {
    finalImage = finalSrc2;
  }

  // Format date like "15 July 2026"
  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "15 July 2026";

  // Clean HTML tags AND raw WordPress [&hellip;] / &hellip; entity strings
  const cleanExcerpt = excerpt
    ? excerpt
        .replace(/<[^>]*>?/gm, "")
        .replace(/\[&hellip;\]/g, "")
        .replace(/\[&hellip;/g, "")
        .replace(/&hellip;/g, "")
        .replace(/\[\.\.\.\]/g, "")
        .trim()
    : "The best interiors are the combination of creativity, purpose, and precision.";

  return (
    <div className="w-full h-full relative">
      <Link
        href={`/blog/${slug}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex flex-col h-full bg-[linear-gradient(180deg,#061623_0%,rgba(24,52,83,0)_100%)] border border-[#14283c] rounded-none overflow-hidden font-poppins transition-transform duration-500 ease-out transform-gpu hover:-translate-y-1"
      >
        {/* Left Vertical Gradient Border Line (Starts Halfway Down) */}
        <div
          className="absolute left-0 top-[45%] bottom-0 w-[1px] pointer-events-none z-20"
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #999999 49.04%, rgba(255, 255, 255, 0) 97.12%)",
          }}
        />

        {/* Right Vertical Gradient Border Line (Starts Halfway Down) */}
        <div
          className="absolute right-0 top-[45%] bottom-0 w-[1px] pointer-events-none z-20"
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #999999 49.04%, rgba(255, 255, 255, 0) 97.12%)",
          }}
        />

        {/* Top Image Banner */}
        <div className="relative w-full aspect-[16/9] bg-[#071726] overflow-hidden">
          {finalImage ? (
            <Image
              src={finalImage}
              alt={title || "Blog Post"}
              fill
              className="object-contain object-center group-hover:scale-[1.03] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              unoptimized
            />
          ) : (
            <Image
              src="/images/blog/hero/hero.jpg"
              alt="Default Blog Image"
              fill
              className="object-contain object-center group-hover:scale-[1.03] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              unoptimized
            />
          )}
        </div>

        {/* Content Body */}
        <div className="p-4 flex flex-col flex-1 justify-between">
          <div>
            {/* Category Pill */}
            <div className="inline-block border border-white/20 text-white/90 text-xs px-3.5 py-1 rounded-full font-poppins font-light mb-3 self-start tracking-wide group-hover:border-[#E7C268]/40 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
              {categoryName}
            </div>

            {/* Title (Golden Accent Serif typography) */}
            <h3
              dangerouslySetInnerHTML={{ __html: title }}
              className="font-serif text-lg sm:text-xl font-bold text-[#E7C268] group-hover:text-[#f7d788] leading-snug mb-2.5 line-clamp-2 tracking-tight transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            />

            {/* Clean Excerpt Paragraph (without [&hellip;]) */}
            {cleanExcerpt && (
              <p className="text-white/75 text-xs sm:text-sm leading-relaxed line-clamp-2 mb-3.5 font-light">
                {cleanExcerpt}
              </p>
            )}

            {/* Read More Link */}
            <span className="text-[#009bf2] group-hover:text-[#38bdf8] text-xs sm:text-sm font-medium font-poppins inline-block mb-1 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
              Read more →
            </span>
          </div>

          <div>
            {/* Horizontal Gradient Divider Line */}
            <div
              className="w-full h-[1px] my-3.5"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #999999 49.04%, rgba(255, 255, 255, 0) 97.12%)",
              }}
            />

            {/* Card Footer Metadata */}
            <div className="flex items-center gap-8 text-white/80 text-xs font-poppins pt-0.5">
              {/* Views Count */}
              <div className="flex items-center gap-1.5">
                <Eye className="w-4 h-4 text-white/70" />
                <span>{views}</span>
              </div>

              {/* Date */}
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-white/70" />
                <span>{formattedDate}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CommonBlogCard;
