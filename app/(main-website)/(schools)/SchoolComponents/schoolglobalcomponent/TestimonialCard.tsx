import { STRAPI_URL } from "@/app/constant";
import { StrapiMedia } from "@/lib/types/common";
import Image from "next/image";

type Props = {
  name: string;
  edu: string;
  desc: string;
  img: StrapiMedia;
};

const TestimonialCard = ({ name, edu, desc, img }: Props) => {
  return (
    <div
      className="bg-white rounded-b-[25px] h-full"
      style={{
        boxShadow: "-2px 0px 20px 0px rgba(0,0,0,7%)",
      }}
    >
      <div
        className="p-5 rounded-t-[25px] text-white flex items-center gap-4"
        style={{
          background: "linear-gradient(168deg,#051630 6.9%,#005ba1 162.66%)",
        }}
      >
        <Image
          src={`${STRAPI_URL}${img?.url}`}
          width={105}
          height={105}
          alt="mask"
          className="rounded-full w-[80px] h-[80px] md:w-[105px] md:h-[105px]"
        />
        <div className="flex flex-col gap-2.5">
          <p className="text-3xl font-medium">{name} </p>
          <p>{edu}</p>
        </div>
      </div>
      <div className="text-base sm:text-lg p-5 bg-white rounded-b-[25px]">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
