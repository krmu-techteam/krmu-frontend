import { getRecentPosts } from "@/lib/api/blogs/main-blog";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const CommonBlogRightSidebar = async () => {
  const recentPosts = await getRecentPosts();

  return (
    <aside className="w-full flex flex-col gap-6 font-poppins">
      {/* Widget 1: Counsellors Online Card */}
      <div className="bg-[#071726] border border-[#14283c] rounded-[10px] p-4 sm:p-5 relative overflow-hidden text-white shadow-md">
        {/* Header line with pulsing green dot */}
        <div className="flex items-center text-[11px] font-semibold tracking-wider text-white/90 uppercase">
          <span className="w-2 h-2 rounded-full bg-[#00e5ff] inline-block mr-2 animate-pulse shadow-[0_0_8px_#00e5ff]" />
          <span>COUNSELLORS ONLINE</span>
        </div>

        {/* Subtitle */}
        <p className="text-white/75 text-xs mt-1 font-light">
          Talk to our admission team
        </p>

        {/* Large Golden Phone Number */}
        <a
          href="tel:8800697010"
          className="block text-xl sm:text-2xl font-bold text-[#E7C268] hover:text-white transition-colors tracking-tight my-0.5"
        >
          8800697010
        </a>

        {/* Timing info */}
        <p className="text-white/70 text-[11px] font-light">
          Mon–Sat · 9 AM – 7 PM
        </p>

        {/* KRMU Logo Badge Overlay Bottom Right */}
        <div className="absolute bottom-3 right-3 opacity-90 pointer-events-none">
          <Image
            src="/images/blog/hero/krmu-logo.png"
            alt="KRMU Logo"
            width={28}
            height={28}
            className="object-contain max-h-[28px] w-auto"
            unoptimized
          />
        </div>
      </div>

      {/* Widget 2: Aside Banner Graphic Image (/images/blog/aside/aside.jpg) */}
      <div className="w-full relative rounded-[10px] overflow-hidden shadow-md border border-[#14283c]">
        <a
          href="https://admissions.krmangalam.edu.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full"
        >
          <Image
            src="/images/blog/aside/aside.jpg"
            alt="Why Wait For Success - Up to 100% Scholarships"
            width={400}
            height={900}
            className="w-full h-auto object-cover rounded-[10px]"
            priority
            unoptimized
          />
        </a>
      </div>

      {/* Widget 3: Recent Post Card */}
      <div className="bg-[#071726] border border-[#14283c] rounded-[10px] p-4 sm:p-5 text-white shadow-md">
        <h4 className="text-lg sm:text-xl font-bold text-white mb-4 tracking-tight font-poppins">
          Recent Post
        </h4>

        <div className="flex flex-col gap-3">
          {recentPosts && recentPosts.length > 0 ? (
            recentPosts.slice(0, 5).map((post, i) => (
              <Link
                key={post?.id || i}
                href={`/blog/${post?.slug}`}
                className="flex items-start gap-2 text-white/85 hover:text-[#E7C268] text-xs sm:text-sm font-medium leading-snug transition-colors group"
              >
                <ChevronRight className="w-3.5 h-3.5 text-white/60 group-hover:text-[#E7C268] flex-shrink-0 mt-0.5 transition-colors" />
                <span
                  dangerouslySetInnerHTML={{
                    __html: post?.title?.rendered || "",
                  }}
                  className="line-clamp-2"
                />
              </Link>
            ))
          ) : (
            <p className="text-white/60 text-xs">No recent posts available.</p>
          )}
        </div>
      </div>
    </aside>
  );
};

export default CommonBlogRightSidebar;
