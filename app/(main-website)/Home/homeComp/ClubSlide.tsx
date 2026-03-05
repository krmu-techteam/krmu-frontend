import Image from "next/image";

type Props = {
  imgUrl: string;
  alt: string;
};

const ClubSlide = ({ imgUrl, alt }: Props) => {
  return (
    <div className="bg-gray-500 h-full min-h-[600px] rounded-2xl relative overflow-hidden">
      <Image src={imgUrl} fill className="object-cover aspect-auto z-10" alt={alt || ""} />
    </div>
  );
};

export default ClubSlide;
