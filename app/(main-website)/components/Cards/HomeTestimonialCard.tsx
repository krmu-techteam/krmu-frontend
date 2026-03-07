import { STRAPI_URL } from "@/app/constant";
import { StrapiMedia } from "@/lib/types/common";
import Image from "next/image";

type ProfileProp = {
  profilename: string;
  info: string;
  desg: string;
  profileImage: StrapiMedia;
};

const HomeTestimonialCard = ({
  profilename,
  info,
  desg,
  profileImage,
}: ProfileProp) => {
  return (
    <div className="bg-white p-5 text-black rounded-md  h-full">
      <div className="flex items-center flex-col sm:flex-row gap-4">
        <div>
          <Image
            src={`${STRAPI_URL}${profileImage?.url}`}
            width={128}
            height={128}
            alt={profileImage?.alternativeText || "Profile Image"}
            className="mb-5 rounded-md"
          />
        </div>
        <div className=" text-center sm:text-left">
          <p className="leading-[1.5] font-bold text-xl">{profilename}</p>
          <p className="font-normal text-base">{desg}</p>
        </div>
      </div>
      <div>
        <p
          className="my-5 text-lg"
          dangerouslySetInnerHTML={{
            __html: info,
          }}
        />
      </div>
    </div>
  );
};

export default HomeTestimonialCard;
