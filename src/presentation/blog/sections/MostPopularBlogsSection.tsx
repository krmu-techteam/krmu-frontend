import Link from "next/link";
import { Eye } from "lucide-react";
import {
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { getBlogService } from "@/features/blog";

type PopularPost = {
  id: number;
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  categoryName: string;
  views: string;
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
          categoryName: "Btech Design",
          views: "1,32,124",
        };
      });
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

              {/* Top Header: Date on Left, Category Badge on Right */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-white/70 text-xs italic font-poppins font-light">
                    {post.date}
                  </span>
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
                <p className="text-white/75 text-xs sm:text-sm leading-relaxed line-clamp-2 mb-3 font-light">
                  {post.excerpt}
                </p>

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

                {/* Card Footer Metadata: Views & Social Share */}
                <div className="flex items-center justify-between text-white/80 text-xs font-poppins pt-0.5">
                  {/* Views Count */}
                  <div className="flex items-center gap-1.5">
                    <Eye className="w-4 h-4 text-white/70" />
                    <span className="text-white/90 font-light">
                      {post.views}
                    </span>
                  </div>

                  {/* Social Share Icons */}
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="font-light text-white/75 text-xs mr-0.5">
                      Share:
                    </span>

                    {/* Facebook */}
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook Share"
                      className="w-6 h-6 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <FaFacebookF className="w-3 h-3 fill-current" />
                    </a>

                    {/* Instagram */}
                    <a
                      href="https://www.instagram.com/krmangalamuniv/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <FaInstagram className="w-3 h-3 text-white" />
                    </a>

                    {/* LinkedIn */}
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn Share"
                      className="w-6 h-6 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <FaLinkedinIn className="w-3 h-3 fill-current" />
                    </a>

                    {/* WhatsApp */}
                    <a
                      href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WhatsApp Share"
                      className="w-6 h-6 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <FaWhatsapp className="w-3 h-3 fill-current" />
                    </a>

                    {/* X / Twitter */}
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="X Twitter Share"
                      className="w-6 h-6 rounded-full bg-black text-white border border-white/20 flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <FaXTwitter className="w-3 h-3 fill-current" />
                    </a>
                  </div>
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
