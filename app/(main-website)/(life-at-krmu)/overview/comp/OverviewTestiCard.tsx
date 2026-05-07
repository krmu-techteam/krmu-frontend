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
    <div className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-200 text-black rounded-[30px] h-full transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:-translate-y-2">
      <div
        className="flex flex-row items-center gap-5 p-6 rounded-t-[30px]"
        style={{
          background: "linear-gradient(168deg,#051630 6.9%,#005ba1 162.66%)",
        }}
      >
        <div className="relative w-20 h-20 flex-shrink-0">
          <Image
            src={`${STRAPI_URL}${profileImage?.url}`}
            fill
            alt={profileImage?.alternativeText || "Profile Image"}
            className="rounded-full object-cover border-2 border-white/20"
            unoptimized={true}
          />
        </div>
        <div className="text-white">
          <p className="leading-tight text-xl md:text-2xl font-bold mb-1">{profilename}</p>
          <p className="text-white/80 text-sm md:text-base font-medium">{qualification}</p>
        </div>
      </div>
      <div className="p-6">
        <p className="text-sm md:text-base leading-relaxed text-gray-700">{info}</p>
      </div>
    </div>
  );
};

export default OverviewTestiCard;
