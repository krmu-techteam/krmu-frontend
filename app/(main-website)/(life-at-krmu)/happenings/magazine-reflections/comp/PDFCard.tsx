import { STRAPI_URL } from "@/app/constant";
import { StrapiMedia } from "@/lib/types/common";
import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  magazineimg: StrapiMedia;
  magazinePDF: StrapiMedia;
};

const PDFCard = ({ magazineimg, magazinePDF }: Props) => {
  return (
    <div
      className="p-5 rounded-[8px]"
      style={{
        boxShadow: "0px 0px 2px 2px #c6dcfd",
      }}
    >
      <Image
        src={`${STRAPI_URL}${magazineimg?.url}`}
        width={392}
        height={446}
        alt={`${magazineimg?.alternativeText || ""}`}
        className="w-full h-[446px] object-contain"
      />
      <div className="mt-[30px] flex justify-center">
        <Link
          href={`${STRAPI_URL}${magazinePDF?.url}`}
          className="flex items-center gap-3 p-5 sm:x-2.5 border-2 border-black rounded-full w-fit font-semibold hover:bg-[#034272] hover:text-white
         duration-300 ease-in-out"
         target="_blank" rel="noopener noreferrer"
          download
        >
          <span>Download PDF</span>
          <Download />
        </Link>
      </div>
    </div>
  );
};

export default PDFCard;
