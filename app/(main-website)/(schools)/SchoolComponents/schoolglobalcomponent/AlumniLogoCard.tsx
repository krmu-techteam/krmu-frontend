import { STRAPI_URL } from "@/app/constant";
import Image from "next/image";

type Props = {
  logoUrl: string;
  altText: string;
};

const AlumniLogoCard = ({ logoUrl, altText }: Props) => {
  return (
    // <div className="p-2 md:p-4 flex items-center justify-center rounded-[30px] bg-[url(/bg-1.webp)] bg-cover bg-center w-full">
    <div
      className="p-2 md:p-4 flex items-center justify-center rounded-lg bg-white bg-cover bg-center w-full"
      style={{
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      }}
    >
      <Image
        src={`${STRAPI_URL}${logoUrl}`}
        width={150}
        height={80}
        alt={altText}
        className="h-20 object-contain"
      />
    </div>
  );
};

export default AlumniLogoCard;
