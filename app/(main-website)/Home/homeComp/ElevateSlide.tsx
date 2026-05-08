import Image from "next/image";

type Props = {
  imgUrl: string;
  alt: string;
};

const ElevateSlide = ({ imgUrl, alt }: Props) => {
  return (
    <div className="bg-gray-50 h-full min-h-[428px] rounded-2xl relative overflow-hidden">
      <Image src={imgUrl} fill className="object-contain z-10 shadow-2xl" alt={alt || ""} />
    </div>
  );
};

export default ElevateSlide;
