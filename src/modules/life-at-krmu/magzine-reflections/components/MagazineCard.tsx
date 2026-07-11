import { STRAPI_URL } from "@/app/constant";
import { StrapiMedia } from "@/lib/types/common";
import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  magazineimg: StrapiMedia;
  magazinePDF: StrapiMedia;
};

const MagazineCard = ({ magazineimg, magazinePDF }: Props) => {
  return (
    <div className="rounded-xl border border-[#061623] bg-[#061623] font-poppins p-5">
      <div className="flex items-center justify-center overflow-hidden rounded-lg bg-[#061623] h-[380px]">
        <Image
          src={`${STRAPI_URL}${magazineimg?.url}`}
          width={392}
          height={446}
          alt={magazineimg?.alternativeText || "Magazine Cover"}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      <div className="mt-6 flex justify-center">
        <Link
          href={`${STRAPI_URL}${magazinePDF?.url}`}
          target="_blank"
          rel="noopener noreferrer"
          download
          className="inline-flex items-center gap-2 rounded-full bg-[#034272] px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-[#022d4c] hover:shadow-lg"
        >
          <span>Download PDF</span>
          <Download size={18} />
        </Link>
      </div>
    </div>
  );
};

export default MagazineCard;
