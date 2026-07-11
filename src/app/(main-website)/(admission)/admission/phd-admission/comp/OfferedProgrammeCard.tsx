import { STRAPI_URL } from "@/app/constant";
import Image from "next/image";
import Link from "next/link";

type Props = {
  heading: string;
  content: string;
  url: string;
  imgUrl: string;
};

const OfferedProgrammeCard = ({ heading, content, url, imgUrl }: Props) => {
  return (
    <div
      className="px-3 pt-3 pb-5 text-white rounded-4xl"
      style={{
        backgroundImage:
          "linear-gradient(180deg,rgba(255,255,255,.2) 0%,rgba(255,255,255,.12) 100%)",
      }}
    >
      <div>
        {imgUrl && (
          <Image
            src={`${STRAPI_URL}${imgUrl}`}
            width={340}
            height={263}
            alt=""
            className="max-h-[263px] min-h-[263px] rounded-xl object-cover w-full"
          />
        )}
      </div>
      <div className="md:px-5">
        <h6 className="text-xl my-2.5 leading-[1.2]">{heading}</h6>
        <p className="text-sm mb-5 line-clamp-2">{content}</p>
        {url && (
          <Link
            href={url || "#"}
            className="underline text-white text-sm underline-offset-4"
            target="_blank" rel="noopener noreferrer"
          >
            Read More
          </Link>
        )}
      </div>
    </div>
  );
};

export default OfferedProgrammeCard;
