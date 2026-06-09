import Image from "next/image";
import { STRAPI_URL } from "@/app/constant";
import { AlumniLogoCardProps } from "@/modules/school";

const AlumniLogoCard = ({ logoUrl, altText }: AlumniLogoCardProps) => {
  return (
    <div
      className="p-2 md:p-3 flex items-center border border-gray-500/50  justify-center rounded-sm bg-transparent bg-cover bg-center w-full"
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
