import Link from "next/link";
import BlogCardImage from "./BlogCardImage";

type Props = {
  title: string;
  excerpt: string;
  slug: string;
  imageUrl?: string | null;
  date: string;
};

const WP_HOST = "https://wp.krmangalam.edu.in";

// Same URL rewriting rules as before, but returned as a list of URLs to try
// (the browser falls back to the next one on error) instead of server-side HEAD requests.
function getImageCandidates(url?: string | null): string[] {
  if (!url) return [];

  const fixed = url
    // www.krmangalam.edu.in/...  ->  wp.krmangalam.edu.in/...
    .replace(/^https:\/\/www\.krmangalam\.edu\.in/, WP_HOST)
    // wp.krmangalam.edu.in//wp-content  ->  wp.krmangalam.edu.in/blog/wp-content
    .replace(
      /^https:\/\/wp\.krmangalam\.edu\.in\/+wp-content/,
      `${WP_HOST}/blog/wp-content`,
    );

  return Array.from(new Set([url, fixed]));
}

const CommonBlogCard = ({ title, excerpt, slug, imageUrl, date }: Props) => {
console.log('imageUrl', imageUrl);
  // timeZone is fixed so server (UTC on Netlify) and browser render the same date
  const postDate = new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  });

  const cleanExcerpt = (excerpt ?? "").split("[&hellip;]")[0].trim();

  return (
    <div className="w-full">
      <Link
        href={`/blog/${slug}`}
        className="block w-full rounded-[24px]"
        style={{ boxShadow: `0px 0px 6px 0px #c6dcfd` }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="p-2.5">
          <div className="relative">
            <span className="absolute bottom-0 right-0 z-10 text-sm font-bold text-shadow-2xl bg-[#051730] text-white py-2.5 px-5 rounded-tl-[24px]">
              {postDate}
            </span>

            <BlogCardImage sources={getImageCandidates(imageUrl)} />
          </div>

          <div>
            <div
              dangerouslySetInnerHTML={{ __html: title }}
              className="text-[#093475] mt-2.5 mb-[15px] text-lg font-bold leading-[1.2]"
            />

            <div
              dangerouslySetInnerHTML={{
                __html: `${cleanExcerpt}...&nbsp;<span style="color: #093475;">Read More</span>`,
              }}
              className="mb-5"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CommonBlogCard;
