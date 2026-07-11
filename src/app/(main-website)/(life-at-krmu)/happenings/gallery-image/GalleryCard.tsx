import { STRAPI_URL } from "@/app/constant";
import { StrapiMedia } from "@/lib/types/common";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  date_text: string;
  slug: string;
  imageGallery: StrapiMedia[];
};

const GalleryCard = ({ title, date_text, slug, imageGallery }: Props) => {
  const featuredImage = imageGallery[0]?.url;
  return (
    <div
      className="rounded-3xl"
      style={{
        background: `linear-gradient(180deg,rgba(255,255,255,.2) 0%,rgba(255,255,255,.12) 100%)`,
        backdropFilter: "blur(13.410955429077px)",
      }}
    >
      <Image
        src={`${STRAPI_URL}${featuredImage}`}
        alt=""
        width={370}
        height={246}
        className="w-full rounded-t-3xl h-[246px] object-fill"
      />

      <div className="pt-5 pl-[30px]">
        <span className="text-xs text-[#898989]">
          Published On: {date_text}
          {/* {new Date(publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })} */}
        </span>
        <div className="text-white mt-2.5 mb-[15px] text-xl font-semibold">
          <h2>{title}</h2>
        </div>
        <div>
          <Link
            href={`/photo-gallery/${slug}`}
            target="_blank" rel="noopener noreferrer"
            className="italic text-white text-xs underline inline-block py-[29px]"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
