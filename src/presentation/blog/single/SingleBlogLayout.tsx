import React from "react";
import { Raleway } from "next/font/google";
import SingleBlogContent from "./SingleBlogContent";
import SingleBlogCategorySidebar from "./SingleBlogCategorySidebar";
import SingleBlogCarousel from "./SingleBlogCarousel";
import SingleBlogHeroAuthor from "./SingleBlogHeroAuthor";
import { Eye } from "lucide-react";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  fallback: ["Arial", "Helvetica", "sans-serif"],
});

type Props = {
  content: string;
  currentSlug?: string;
  authorName: string;
  authorSlug: string;
  authorDesignation: string;
  imgId: number;
  date: string;
  excerpt: string;
  title: string;
  authorBio?: string;
  authorLinkedin?: string;
};

const SingleBlogLayout = ({
  content,
  currentSlug,
  authorName,
  authorSlug,
  authorDesignation,
  imgId,
  date,
  excerpt,
  title,
  authorBio = "",
  authorLinkedin = "",
}: Props) => {
  // Format date like "July 10, 2026"
  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "July 10, 2026";

  const shareUrl = `https://www.krmangalam.edu.in/blog/${currentSlug}`;

  return (
    <main className={`${raleway.className} pb-8 relative z-10`}>
      <div className="max-w-[1530px] mx-auto w-full px-6 md:px-8 flex flex-col lg:flex-row justify-between gap-6 xl:gap-[31px] relative z-10 scroll-style-1">
        {/* LEFT COLUMN: Main Blog Content */}
        <div className="w-full lg:flex-1 lg:max-w-[1038px] order-1 flex flex-col min-h-screen">
          {/* Main Title */}
          <h1
            className="text-3xl md:text-4xl lg:text-[40px] xl:text-[45px] font-bold text-white leading-tight tracking-tight mb-5 font-sans"
            dangerouslySetInnerHTML={{ __html: title }}
          />

          {/* Metadata & Share Row */}
          <div className="flex flex-col border-y py-3 border-white/20 sm:flex-row sm:items-center justify-between gap-4 text-white/70 text-[14px] font-sans pb-3 mb-6">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <Eye size={16} className="text-[#D8D8D8]" />
                <span className="text-white">1,32,124</span>
              </span>
              <span>
                <span className="text-[#D8D8D8] mr-2">Published On:</span>
                <span className="font-semibold text-white">
                  {formattedDate}
                </span>
              </span>
            </div>

            {/* Share Group */}
            <div className="flex items-center gap-2">
              <span className="text-white mr-1.5 font-medium text-[15px]">
                Share:
              </span>

              {/* Facebook */}
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1877f2] text-white hover:scale-110 transition-transform"
                title="Share on Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href={`https://www.instagram.com/`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285aeb_90%)] text-white hover:scale-110 transition-transform"
                title="Share on Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0077b5] text-white hover:scale-110 transition-transform"
                title="Share on LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://api.whatsapp.com/send?text=Check%20out%20this%20post:%20${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#25d366] text-white hover:scale-110 transition-transform"
                title="Share on WhatsApp"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.66.986 3.284 1.447 5.355 1.448 5.485 0 9.948-4.467 9.95-9.953.001-2.657-1.026-5.153-2.894-7.022C17.135 1.758 14.634 .731 12.01 .73 6.522.731 2.058 5.195 2.056 10.683c-.001 2.112.553 4.177 1.61 5.922l-.997 3.64 3.738-.981zM17.15 15.64c-.284-.144-1.68-.83-1.94-.925-.26-.096-.45-.144-.64.144-.19.287-.736.925-.903 1.117-.166.19-.333.216-.617.072-.284-.144-1.202-.443-2.29-1.415-.847-.756-1.42-1.69-1.587-1.978-.166-.288-.018-.444.124-.587.128-.129.285-.335.426-.503.14-.168.188-.288.283-.48.095-.192.048-.361-.024-.505-.07-.144-.64-1.54-.877-2.11-.23-.554-.464-.477-.64-.486l-.547-.01c-.19 0-.5-.072-.76.216-.26.288-1 .977-1 2.382s1.02 2.761 1.162 2.953c.143.192 2.007 3.064 4.862 4.29.68.292 1.21.466 1.62.596.683.217 1.3.187 1.79.114.545-.081 1.68-.686 1.914-1.312.23-.627.23-1.163.16-1.272-.07-.109-.26-.205-.544-.349z" />
                </svg>
              </a>

              {/* Twitter/X */}
              <a
                href={`https://twitter.com/intent/tweet?url=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white hover:scale-110 transition-transform"
                title="Share on X"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Excerpt/Italic Intro Sentence */}
          {/* <p className="text-white/90 text-base md:text-lg italic leading-relaxed mb-6 font-sans">
            {excerpt}
          </p> */}

          {/* Main Article Content */}
          <SingleBlogContent content={content} />

          {/* Horizontal Divider Line */}
          <div className="w-full h-[1px] bg-white/20 mb-8" />

          {/* About the Author Card & Share Row */}
          <div className="mb-6">
            <div className="flex flex-row items-center justify-end mb-4 flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <span className="text-white mr-1.5 font-medium text-[15px]">
                  Share:
                </span>
                {/* Facebook */}
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1877f2] text-white hover:scale-110 transition-transform"
                  title="Share on Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href={`https://www.instagram.com/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285aeb_90%)] text-white hover:scale-110 transition-transform"
                  title="Share on Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0077b5] text-white hover:scale-110 transition-transform"
                  title="Share on LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://api.whatsapp.com/send?text=Check%20out%20this%20post:%20${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-[#25d366] text-white hover:scale-110 transition-transform"
                  title="Share on WhatsApp"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.66.986 3.284 1.447 5.355 1.448 5.485 0 9.948-4.467 9.95-9.953.001-2.657-1.026-5.153-2.894-7.022C17.135 1.758 14.634 .731 12.01 .73 6.522.731 2.058 5.195 2.056 10.683c-.001 2.112.553 4.177 1.61 5.922l-.997 3.64 3.738-.981zM17.15 15.64c-.284-.144-1.68-.83-1.94-.925-.26-.096-.45-.144-.64.144-.19.287-.736.925-.903 1.117-.166.19-.333.216-.617.072-.284-.144-1.202-.443-2.29-1.415-.847-.756-1.42-1.69-1.587-1.978-.166-.288-.018-.444.124-.587.128-.129.285-.335.426-.503.14-.168.188-.288.283-.48.095-.192.048-.361-.024-.505-.07-.144-.64-1.54-.877-2.11-.23-.554-.464-.477-.64-.486l-.547-.01c-.19 0-.5-.072-.76.216-.26.288-1 .977-1 2.382s1.02 2.761 1.162 2.953c.143.192 2.007 3.064 4.862 4.29.68.292 1.21.466 1.62.596.683.217 1.3.187 1.79.114.545-.081 1.68-.686 1.914-1.312.23-.627.23-1.163.16-1.272-.07-.109-.26-.205-.544-.349z" />
                  </svg>
                </a>

                {/* Twitter/X */}
                <a
                  href={`https://twitter.com/intent/tweet?url=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white hover:scale-110 transition-transform"
                  title="Share on X"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
            <SingleBlogHeroAuthor
              authorName={authorName}
              authorSlug={authorSlug}
              desg={authorDesignation}
              imgId={imgId}
              bio={authorBio}
              linkedin={authorLinkedin}
            />
          </div>
        </div>

        {/* RIGHT COLUMN: Right Sidebar – hidden on mobile, visible on lg+ */}
        <aside className="hidden lg:block w-full lg:w-[300px] xl:w-[370px] flex-shrink-0 order-2">
          <SingleBlogCategorySidebar />
        </aside>
      </div>

      {/* Dynamic Related Carousel aligned with same container constraints */}
      <div className="max-w-[1530px] mx-auto w-full h-auto px-6 md:px-8 mt-12 relative z-10 scroll-style-1">
        <SingleBlogCarousel currentSlug={currentSlug} />
      </div>
    </main>
  );
};

export default SingleBlogLayout;
