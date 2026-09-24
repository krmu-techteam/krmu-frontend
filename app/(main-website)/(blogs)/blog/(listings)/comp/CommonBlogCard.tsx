import Link from "next/link";
import BlogCardImage from "./BlogCardImage";
import { getBlogImageById } from "@/lib/api/blogs/single-blog";

type Props = {
  title: string;
  excerpt: string;
  slug: string;
  imageUrl?: string | null;
  date: string;
  imageId: number;
};

const WP_HOST = "https://wp.krmangalam.edu.in";

function getImageCandidates(url?: string | null): string[] {
  if (!url) return [];

  const fixed = url
    .replace(
      /^https:\/\/www\.krmangalam\.edu\.in/,
      WP_HOST
    )
    .replace(
      /^https:\/\/wp\.krmangalam\.edu\.in\/+wp-content/,
      `${WP_HOST}/blog/wp-content`
    );

  return Array.from(new Set([url, fixed]));
}

const CommonBlogCard = async ({
  title,
  excerpt,
  slug,
  imageUrl,
  date,
  imageId,
}: Props) => {
  const postDate = new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  });

  // Wait for WordPress media API
  const fetchedImageUrl = await getBlogImageById(imageId);

  console.log("imageId:", imageId);
  console.log("fetchedImageUrl:", fetchedImageUrl);

  const cleanExcerpt = (excerpt ?? "")
    .split("[&hellip;]")[0]
    .trim();

  // Prefer API fetched image, fallback to existing imageUrl
  const finalImageUrl = fetchedImageUrl || imageUrl;

  return (
    <div className="w-full">
      <Link
        href={`/blog/${slug}`}
        className="block w-full rounded-[24px]"
        style={{
          boxShadow: "0px 0px 6px 0px #c6dcfd",
        }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="p-2.5">
          <div className="relative">
            <span className="absolute bottom-0 right-0 z-10 rounded-tl-[24px] bg-[#051730] px-5 py-2.5 text-sm font-bold text-white text-shadow-2xl">
              {postDate}
            </span>

            <BlogCardImage
              sources={getImageCandidates(finalImageUrl)}
              imageUrl={fetchedImageUrl}
            />
          </div>

          <div>
            <div
              dangerouslySetInnerHTML={{
                __html: title,
              }}
              className="mt-2.5 mb-[15px] text-lg font-bold leading-[1.2] text-[#093475]"
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