import Image from "next/image";
import { LibraryContentType } from "@/features/life-at-krmu/library";

export const LibraryContent = ({
  tagLine,
  heading,
  imageUrl,
  description,
}: LibraryContentType) => {
  return (
    <div className="max-w-[1664px] font-poppins text-white mx-auto w-full libtabcontent flex flex-col lg:flex-row gap-10">
      <div className="w-full lg:w-1/2">
        {tagLine && <p>{tagLine}</p>}

        <h2>{heading}</h2>

        {description && <p>{description}</p>}
      </div>

      <div className="w-full lg:w-1/2">
        <Image src={imageUrl} width={540} height={768} alt={heading} />
      </div>
    </div>
  );
};
