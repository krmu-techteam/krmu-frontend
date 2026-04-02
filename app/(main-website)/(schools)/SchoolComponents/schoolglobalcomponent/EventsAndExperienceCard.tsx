import { STRAPI_URL } from "@/app/constant";
import { ParagraphBlock } from "@/lib/types/about";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  content: ParagraphBlock[];
  slug: string;
  featured_img_url: string;
};

const EventsAndExperienceCard = ({
  title,
  content,
  slug,
  featured_img_url,
}: Props) => {
  return (
    <div
      className="px-2.5 pt-2.5 pb-5 rounded-4xl h-[470px]"
      style={{
        background:
          "linear-gradient(180deg,rgba(255,255,255,.2) 0%,rgba(255,255,255,.12) 100%)",
      }}
    >
      <Image
        src={`${STRAPI_URL}${featured_img_url}`}
        width={340}
        height={263}
        alt={title || ""}
        className="max-h-[263px] min-h-[264px] w-full h-full p-2.5 rounded-4xl"
      />
      <div className="text-white px-5">
        <h5 className="mt-5 mb-3.5 text-xl font-medium">{title}</h5>
        <div className="line-clamp-2">
          <BlocksRenderer content={content}  />
        </div>
        <Link
          href={`events-and-news/${slug}`}
          className="text-sm mt-4 inline-block underline"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default EventsAndExperienceCard;
