import Link from "next/link";
import { Eye } from "lucide-react";
import {
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { getBlogService, generateRealisticViews } from "@/features/blog";
import Image from "next/image";
import { Calendar } from "lucide-react";

type PopularPost = {
  id: number;
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  categoryName: string;
  views: string;
  authorName?: string;
  authorAvatar?: string | null;
};

const DEFAULT_POPULAR_POSTS: PopularPost[] = [
  {
    id: 1,
    title: "B.Des. in Interior Design: Complete Guide",
    slug: "bdes-in-interior-design-complete-guide",
    excerpt:
      "The best interiors are the combination of creativity, purpose, and precision.",
    date: "15 July 2026",
    categoryName: "Btech Design",
    views: "1,32,124",
  },
  {
    id: 2,
    title: "B.Des. in Interior Design: Complete Guide",
    slug: "bdes-in-interior-design-complete-guide-2",
    excerpt:
      "The best interiors are the combination of creativity, purpose, and precision.",
    date: "15 July 2026",
    categoryName: "Btech Design",
    views: "1,32,124",
  },
  {
    id: 3,
    title: "B.Des. in Interior Design: Complete Guide",
    slug: "bdes-in-interior-design-complete-guide-3",
    excerpt:
      "The best interiors are the combination of creativity, purpose, and precision.",
    date: "15 July 2026",
    categoryName: "Btech Design",
    views: "1,32,124",
  },
];

const MostPopularBlogsSection = async () => {
  let displayPosts: PopularPost[] = [];

  try {
    const rawPosts = await getBlogService().getRecentPosts();
    if (rawPosts && rawPosts.length > 0) {
      displayPosts = rawPosts.slice(0, 3).map((post: any, idx: number) => {
        const rawDate = post?.date || post?.date_gmt;
        const formattedDate = rawDate
          ? new Date(rawDate).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })
          : "15 July 2026";

        const rawExcerpt =
          post?.excerpt?.rendered ||
          post?.excerpt ||
          "The best interiors are the combination of creativity, purpose, and precision.";
        const cleanExcerpt = rawExcerpt
          .replace(/<[^>]*>?/gm, "")
          .replace(/\[&hellip;\]/g, "")
          .replace(/\[&hellip;/g, "")
          .replace(/&hellip;/g, "")
          .replace(/\[\.\.\.\]/g, "")
          .trim();

        return {
          id: post?.id || idx + 1,
          title:
            post?.title?.rendered ||
            post?.title ||
            "B.Des. in Interior Design: Complete Guide",
          excerpt:
            cleanExcerpt ||
            "The best interiors are the combination of creativity, purpose, and precision.",
          slug: post?.slug || "bdes-in-interior-design-complete-guide",
          date: formattedDate,
          categoryName:
            post?._embedded?.["wp:term"]?.[0]?.[0]?.name || "KRMU Blog",
          views: generateRealisticViews(
            rawDate || new Date().toISOString(),
            post?.slug || "dummy",
          ),
          authorName: post?._embedded?.author?.[0]?.name || "KRMU Team",
          authorImgId: post?._embedded?.author?.[0]?.acf?.profile_image,
          authorAvatarUrl:
            post?._embedded?.author?.[0]?.avatar_urls?.["48"] ||
            post?._embedded?.author?.[0]?.avatar_urls?.["24"],
        };
      });

      // Fetch custom avatars in parallel
      displayPosts = await Promise.all(
        displayPosts.map(async (post: any) => {
          let finalAvatar = post.authorAvatarUrl;
          if (post.authorImgId) {
            const customAvatar = await getBlogService().getBlogImageById(
              post.authorImgId,
            );
            if (customAvatar) finalAvatar = customAvatar;
          }
          return {
            ...post,
            authorAvatar: finalAvatar,
          };
        }),
      );
    }
  } catch (error) {
    console.error("Error fetching popular blogs:", error);
  }

  // Fallback to sample posts if fetch returned empty array
  if (displayPosts.length === 0) {
    displayPosts = DEFAULT_POPULAR_POSTS;
  }

  return (
    <section className="w-full mt-10 md:mt-14 font-poppins">
      {/* Top Divider Line */}
      <div
        className="w-full h-[1px] mb-8 sm:mb-10"
        style={{
          background:
            "linear-gradient(90deg, #1A1A1A 0%, #FFFFFF 48.08%, #1A1A1A 100%)",
        }}
      />

      <h2 className="text-xl sm:text-2xl font-medium text-white mb-5 sm:mb-6 tracking-tight">
        Most Popular blogs
      </h2>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-6">
        {displayPosts.map((post, index) => {
          const shareUrl =
            typeof window !== "undefined"
              ? window.location.href
              : `https://www.krmangalam.edu.in/blog/${post.slug}`;
          const encodedUrl = encodeURIComponent(shareUrl);
          const encodedTitle = encodeURIComponent(post.title);

          const isThirdCard = index === 2;

          return (
            <div
              key={post.id}
              className={`w-full relative flex-col justify-between bg-[linear-gradient(180deg,#061623_0%,rgba(24,52,83,0)_100%)] border border-[#14283c] rounded-none overflow-hidden font-poppins p-5 sm:p-6 group transition-transform duration-500 ease-out transform-gpu hover:-translate-y-1 ${
                isThirdCard ? "hidden xl:flex" : "flex"
              }`}
            >
              {/* Left Vertical Gradient Border Line (Centered Vertically) */}
              <div
                className="absolute left-0 top-1/2 -translate-y-1/2 h-[60%] w-[1px] pointer-events-none z-20 group-hover:h-[80%] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #999999 50%, rgba(255, 255, 255, 0) 100%)",
                }}
              />

              {/* Right Vertical Gradient Border Line (Centered Vertically) */}
              <div
                className="absolute right-0 top-1/2 -translate-y-1/2 h-[60%] w-[1px] pointer-events-none z-20 group-hover:h-[80%] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #999999 50%, rgba(255, 255, 255, 0) 100%)",
                }}
              />

              {/* Top Header: Category Badge on Right */}
              <div>
                <div className="flex justify-end mb-4">
                  <span className="inline-block bg-[#E7C268] text-[#071726] text-xs font-semibold px-3 py-1 rounded-full font-poppins group-hover:brightness-110 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    {post.categoryName}
                  </span>
                </div>

                {/* Title */}
                <h3
                  dangerouslySetInnerHTML={{ __html: post.title }}
                  className="font-serif text-lg sm:text-xl font-bold text-[#E7C268] group-hover:text-[#f7d788] leading-snug mb-2.5 line-clamp-2 tracking-tight transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />

                {/* Excerpt */}
                <p
                  className="text-white/75 text-xs sm:text-sm leading-relaxed line-clamp-2 mb-3 font-light"
                  dangerouslySetInnerHTML={{ __html: post.excerpt }}
                />

                {/* Read More Link */}
                <Link
                  href={`/blog/${post.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#009bf2] group-hover:text-[#38bdf8] text-xs sm:text-sm font-medium font-poppins inline-block mb-1 hover:underline transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                >
                  Read more →
                </Link>
              </div>

              {/* Bottom Section */}
              <div>
                {/* Horizontal Gradient Divider Line */}
                <div
                  className="w-full h-[1px] my-3.5"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #999999 49.04%, rgba(255, 255, 255, 0) 97.12%)",
                  }}
                />

                {/* Card Footer Metadata: Views & Date on Left, Author Profile on Right */}
                <div className="flex items-center justify-between text-white/80 text-xs font-poppins pt-0.5">
                  {/* Meta Group: Views & Date */}
                  <div className="flex items-center gap-4">
                    {/* Views Count */}
                    <div className="flex items-center gap-1.5">
                      <Eye className="w-4 h-4 text-white/70" />
                      <span className="text-white/90 font-light">
                        {post.views}
                      </span>
                    </div>

                    {/* Date */}
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-white/70" />
                      <span className="text-white/90 font-light">
                        {post.date}
                      </span>
                    </div>
                  </div>

                  {/* Author Profile Avatar */}
                  {post.authorAvatar && (
                    <div
                      className="flex items-center justify-center relative group/author"
                      title={post.authorName || "Author"}
                    >
                      <div className="w-[22px] h-[22px] rounded-full overflow-hidden border border-white/20 shadow-sm relative group-hover/author:border-[#E7C268]/60 transition-colors duration-300">
                        <Image
                          src={post.authorAvatar}
                          alt={post.authorName || "Author Profile"}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MostPopularBlogsSection;
