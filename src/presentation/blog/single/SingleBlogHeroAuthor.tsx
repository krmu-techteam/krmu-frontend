import Link from "next/link";
import Image from "next/image";
import { getBlogService } from "@/features/blog";

type Props = {
  authorName: string;
  desg: string;
  imgId: number;
  authorSlug: string;
  bio?: string;
  linkedin?: string;
};

const SingleBlogHeroAuthor = async ({
  authorName,
  desg,
  imgId,
  authorSlug,
  bio = "",
  linkedin = "",
}: Props) => {
  const authorImgUrl = imgId
    ? await getBlogService().getBlogImageById(imgId)
    : "/images/blog/single/abhinav-sharma.png"; // Fallback image if none provided

  return (
    <div className="single_blog_author_container">
      <div className="single_blog_author_image relative overflow-hidden rounded-full w-[90px] h-[90px] shrink-0 border-2 border-white/10 shadow-lg">
        <Image
          src={authorImgUrl || "/images/blog/single/abhinav-sharma.png"}
          fill
          className="object-cover"
          alt={authorName}
          unoptimized
        />
      </div>
      <div className="single_blog_author_content_wrapper">
        <div className="single_blog_author_header">
          <div className="single_blog_author_info">
            <span className="author_name">
              {authorName === "KRMU Team" ? (
                <span className="text-white">{authorName}</span>
              ) : (
                <Link
                  href={`/blog/author/${authorSlug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  {authorName}
                </Link>
              )}
            </span>
            <span className="author_designation">{desg}</span>
          </div>
        </div>
        {bio ? (
          <p className="single_blog_author_bio">{bio}</p>
        ) : (
          <p className="single_blog_author_bio text-white/70 italic text-sm mt-2">
            This author has not yet added a biography.
          </p>
        )}
        
        {/* LinkedIn Link moved below the bio */}
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="single_blog_author_linkedin_link mt-3 inline-flex items-center gap-1.5 text-[#0077b5] hover:text-white transition-colors"
            title="LinkedIn Profile"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            <span className="text-xs font-semibold">Connect on LinkedIn</span>
          </a>
        </div>
        {bio && <p className="single_blog_author_bio">{bio}</p>}
      </div>
    </div>
  );
};

export default SingleBlogHeroAuthor;
