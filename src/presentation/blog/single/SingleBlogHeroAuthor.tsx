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
      <div className="single_blog_author_image relative w-[90px] h-[90px] shrink-0">
        <div className="relative w-full h-full overflow-hidden rounded-full border-2 border-white/10 shadow-lg">
          <Image
            src={authorImgUrl || "/images/blog/single/abhinav-sharma.png"}
            fill
            className="object-cover"
            alt={authorName}
            unoptimized
          />
        </div>
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-0 right-0 bg-[#0077b5] w-[26px] h-[26px] rounded-full flex items-center justify-center border-2 border-[#132737] hover:scale-110 transition-transform z-10 shadow-md"
            title="LinkedIn Profile"
          >
            <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        )}
      </div>
      <div className="single_blog_author_content_wrapper">
        <div className="single_blog_author_header">
          <div className="single_blog_author_info">
            <span className="author_name">
              <span className="text-white">{authorName}</span>
            </span>
            <span className="author_designation">{desg}</span>
          </div>
        </div>
        {bio && <p className="single_blog_author_bio">{bio}</p>}

        <div className="flex items-center gap-4">
          <Link
            href={`/blog/author/${authorSlug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#E7C268] hover:text-[#E7C268]/70 transition-colors text-[14px] font-semibold"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogHeroAuthor;
