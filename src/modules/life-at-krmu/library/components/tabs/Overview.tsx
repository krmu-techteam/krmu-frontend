import Image from "next/image";
import { LibraryContentProps } from "../../types";
import { BookRenewalList } from "../overview";

const Overview = ({
  libraryContent,
}: {
  libraryContent?: LibraryContentProps;
}) => {
  if (!libraryContent?.overview) return null;

  const { tagLine, heading, description, imageUrl, bookRenewal } =
    libraryContent.overview;

  return (
    <div className="max-w-[1664px] font-poppins mx-auto w-full libtabcontent flex flex-col lg:flex-row items-center gap-10">
      <div className="w-full text-white lg:w-1/2">
        <p>{tagLine}</p>
        <h2>{heading}</h2>
        <p>{description}</p>
        <BookRenewalList items={bookRenewal} />
      </div>
      <div className="w-full lg:w-1/2">
        {imageUrl && (
          <Image
            src={imageUrl}
            width={540}
            height={768}
            alt={heading || "Overview"}
          />
        )}
      </div>
    </div>
  );
};

export default Overview;
