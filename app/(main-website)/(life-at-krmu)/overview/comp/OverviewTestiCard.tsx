import { STRAPI_URL } from "@/app/constant";
import { StrapiMedia } from "@/lib/types/common";
import Image from "next/image";

type ProfileProp = {
  profilename: string;
  info: string;
  qualification: string;
  profileImage: StrapiMedia;
};

const OverviewTestiCard = ({
  profilename,
  info,
  qualification,
  profileImage,
}: ProfileProp) => {
  return (
    <div className="bg-white  text-black rounded-[30px]  h-full">
      <div
        className="flex flex-col items-center sm:items-start gap-4 p-6 rounded-t-[30px]"
        style={{
          background: "linear-gradient(168deg,#051630 6.9%,#005ba1 162.66%)",
        }}
      >
        <div className="relative w-32 h-32">
          <Image
            src={`${STRAPI_URL}${profileImage?.url}`}
            fill
            alt={profileImage?.alternativeText || "Profile Image"}
            className="rounded-full object-cover"
            unoptimized={true}
          />
        </div>
        <div className="text-white text-center sm:text-left">
          <p className="leading-tight text-2xl font-bold mb-1">{profilename}</p>
          <p className="text-white/80 font-medium">{qualification}</p>
        </div>
      </div>
      <div className="p-5">
        <p className="my-5">{info}</p>
      </div>
    </div>
  );
};

export default OverviewTestiCard;
