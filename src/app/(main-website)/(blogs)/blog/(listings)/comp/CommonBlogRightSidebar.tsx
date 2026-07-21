import { getRecentPosts } from "@/lib/api/blogs/main-blog";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const CommonBlogRightSidebar = async () => {
  const recentPosts = await getRecentPosts();

  return (
    <aside className="w-full flex flex-col gap-6 font-poppins">
      {/* Widget 1: Counsellors Online Card */}
      <div className="bg-[#071726] rounded-[8px] h-[169px] p-5 relative overflow-hidden text-white font-poppins flex flex-col justify-between">
        {/* Left Bottom Red Gradient Glow */}
        <div className="absolute left-0 bottom-0 w-40 h-40 pointer-events-none z-0 bg-[radial-gradient(circle_at_0%_100%,rgba(220,38,38,0.45)_0%,rgba(185,28,28,0.15)_45%,transparent_75%)]" />

        <div className="relative z-10">
          {/* Header line with pulsing green dot */}
          <div className="flex items-center text-[14px] font-semibold tracking-widest text-white uppercase">
            <span className="w-2 h-2 rounded-full bg-[#22c55e] inline-block mr-2.5 animate-pulse shadow-[0_0_8px_#22c55e]" />
            <span>COUNSELLORS ONLINE</span>
          </div>

          {/* Subtitle */}
          <p className="text-white/75 text-[14px] mt-1 font-light">
            Talk to our admission team
          </p>

          {/* Large Golden Phone Number */}
          <a
            href="tel:8800697010"
            className="block text-2xl sm:text-4xl font-bold text-[#E7C268] hover:text-white transition-colors tracking-tight my-1 font-poppins"
          >
            8800697010
          </a>

          {/* Timing info */}
          <p className="text-white/70 text-[14px] font-light">
            Mon–Sat · 9 AM – 7 PM
          </p>
        </div>

        {/* KRMU Logo Badge Overlay Bottom Right */}
        <div className="absolute bottom-3.5 right-3.5 opacity-90 pointer-events-none z-10">
          <Image
            src="/images/blog/aside/logo.png"
            alt="KRMU Logo"
            width={34}
            height={34}
            className="object-contain max-h-[34px] w-auto"
            unoptimized
          />
        </div>
      </div>

      {/* Widget 2: Aside Banner Graphic Image (/images/blog/aside/aside.jpg) */}
      <div className="w-full relative rounded-[8px] overflow-hidden">
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
            className="w-full h-auto object-cover rounded-[8px]"
            priority
            unoptimized
          />
        </a>
      </div>

      {/* Widget 3: Recent Post Card */}
      <div className="bg-[#061623]  rounded-[8px] p-4 sm:p-5 text-white">
        <h4 className="text-lg sm:text-xl font-bold text-white mb-4 tracking-tight font-poppins">
          Recent Post
        </h4>

        <div className="flex flex-col gap-3">
          {recentPosts && recentPosts.length > 0 ? (
            recentPosts.slice(0, 5).map((post, i) => (
              <Link
                key={post?.id || i}
                href={`/blog/${post?.slug}`}
                className="flex items-start gap-2 text-[#93B9D9] hover:text-[#E7C268] text-xs sm:text-sm font-medium leading-snug transition-colors group"
              >
                <ChevronRight className="w-4 h-4 text-[#93B9D9] group-hover:text-[#E7C268] flex-shrink-0 mt-0.5 transition-colors" />
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
