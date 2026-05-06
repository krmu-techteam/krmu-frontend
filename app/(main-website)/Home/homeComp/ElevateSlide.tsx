import Image from "next/image";

type Props = {
  imgUrl: string;
  alt: string;
};

const ElevateSlide = ({ imgUrl, alt }: Props) => {
  return (
    <div className="bg-gray-500 h-full min-h-[500px] rounded-2xl relative overflow-hidden">
      <Image src={imgUrl} fill className="object-cover z-10" alt={alt || ""} />
    </div>
  );
};

export default ElevateSlide;
