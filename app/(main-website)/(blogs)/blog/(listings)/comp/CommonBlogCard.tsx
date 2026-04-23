import { getBlogImageById } from "@/lib/api/blogs/single-blog";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  excerpt: string;
  slug: string;
  imgId: number;
  date: string;
};

const checkImage = async (url: string | null): Promise<boolean> => {
  if (!url) return false;

  try {
    const res = await fetch(url, { method: "HEAD" });
    return res.ok;
  } catch {
    return false;
  }
};

const CommonBlogCard = async ({ title, excerpt, slug, imgId, date }: Props) => {
  const imgUrl = await getBlogImageById(imgId);

  // if (imgUrl) {
  //   imgUrl = imgUrl.replace("/blog/wp-content", "/wp-content");
  // }

  const finalSrc = imgUrl?.includes(
    "https://wp.krmangalam.edu.in/blog/wp-content",
  )
    ? imgUrl
    : imgUrl?.replace(
        /^https:\/\/www\.krmangalam\.edu\.in/,
        "https://wp.krmangalam.edu.in/",
      ) || null;

  const finalSrc2 = finalSrc?.includes(
    "https://wp.krmangalam.edu.in//wp-content",
  )
    ? finalSrc.replace(
        "https://wp.krmangalam.edu.in//wp-content",
        "https://wp.krmangalam.edu.in/blog/wp-content",
      )
    : finalSrc;

  let finalImage: string | null = null;

  if (await checkImage(imgUrl)) {
    finalImage = imgUrl; // ✅ original works
  } else if (await checkImage(finalSrc2)) {
    finalImage = finalSrc2; // ✅ fallback works
  }

  const postDate = new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="w-full">
      <Link
        href={`/blog/${slug}`}
        className="block w-full rounded-[24px]"
        style={{ boxShadow: `0px 0px 6px 0px #c6dcfd` }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="p-2.5" data-test={finalSrc} data-test2={imgUrl}>
          <div className="relative">
            <span className="absolute bottom-0 right-0 text-xs bg-red-600 text-white py-2.5 px-5 rounded-tl-[24px]">
              {postDate}
            </span>
            {finalImage && (
              <Image
                src={finalImage}
                width={426}
                height={284}
                alt=""
                className="rounded-[24px] h-auto w-full"
                sizes="(max-width: 768px) 100vw, 426px"
              />
            )}
          </div>

          <div>
            <div
              dangerouslySetInnerHTML={{ __html: title }}
              className="text-[#093475] mt-2.5 mb-[15px] text-lg font-bold leading-[1.2]"
            />

            <div
              dangerouslySetInnerHTML={{ __html: excerpt }}
              className="mb-5"
            />

            <span className="text-lg font-normal text-[#093475] block">
              Read More
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CommonBlogCard;
