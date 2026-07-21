import React from "react";
import { Raleway } from "next/font/google";
import SingleBlogContent from "./SingleBlogContent";
// import SingleBlogSidebar from "./SingleBlogSidebar";
import SingleBlogCategorySidebar from "./SingleBlogCategorySidebar";
import BlogCrousel from "./BlogCrousel";

// Configure font with fallbacks
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  fallback: ["Arial", "Helvetica", "sans-serif"],
});

type Props = {
  content: string;
  title?: string;
  date?: string;
  excerpt?: string;
  currentSlug?: string;
};

// const SingleBlogLayout = ({ content }: Props) => {
//   return (
//     <main className={`md:p-7 ${raleway.className} relative z-10`}>
//       <div className="max-w-[1664px] mx-auto w-full px-5 2xl:px-10 flex flex-col lg:flex-row gap-10 xl:gap-16 relative z-10 scroll-style-1">
//         <div className="lg:w-1/5">
//           <SingleBlogSidebar content={content} />
//         </div>
//         <div className="lg:w-3/5">
//           <SingleBlogContent content={content} />
//         </div>
//         <div className="lg:w-1/5">
//           <SingleBlogCategorySidebar />
//         </div>
//       </div>
//     </main>
//   );
// };

const SingleBlogLayout = ({
  content,
  title,
  date,
  excerpt,
  currentSlug,
}: Props) => {
  // console.log("Rendering SingleBlogLayout with slug:", currentSlug);
  return (
    <main className={`pb-12 ${raleway.className} relative z-10`}>
      <div className="max-w-[1530px] mx-auto w-full px-6 md:px-8 flex flex-col lg:flex-row items-start justify-between gap-6 xl:gap-[31px] relative z-10 scroll-style-1">
        {/* Blog Content (Aligned with Hero Left Banner) */}
        <div className="w-full lg:flex-1 lg:max-w-[1038px]">
          <SingleBlogContent
            content={content}
            title={title}
            date={date}
            excerpt={excerpt}
          />
        </div>

        {/* Right Sidebar (Aligned with Hero Right Form Card) */}
        <div className="w-full lg:w-[370px] flex-shrink-0">
          <SingleBlogCategorySidebar />
        </div>
      </div>
      <div className="max-w-[1530px] mx-auto w-full px-6 md:px-8 relative z-10 mt-10">
        <BlogCrousel currentSlug={currentSlug} />
      </div>
    </main>
  );
};

export default SingleBlogLayout;
