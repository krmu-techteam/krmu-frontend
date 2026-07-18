import Image from "next/image";
import Link from "next/link";
import { STRAPI_URL } from "@/app/constant";
import { FileText } from "lucide-react";
import { CocItem } from "@/features/about/coc";

interface Props {
  item: CocItem;
}

const CocCard = ({ item }: Props) => {
  return (
    <Link
      href={item.listlink}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col justify-between h-full p-6 bg-[#061623] border border-[#1E2D4A]/50 rounded-[4px] hover:bg-[#0055A4] transition-all duration-300"
    >
      <div>
        {/* Icon container */}
        <div className="w-12 h-12 rounded-[3px] bg-[#061623] flex items-center justify-center border border-gray-200/50 group-hover:bg-[#061623] group-hover:white/20 transition-all duration-300 mb-5">
          {item.listicon?.url ? (
            <Image
              src={`${STRAPI_URL}${item.listicon.url}`}
              alt={item.listicon.alternativeText || ""}
              width={20}
              height={20}
              className="object-contain brightness-0 invert group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <FileText className="w-5 h-5 text-white" />
          )}
        </div>

        {/* Text content */}
        <h3 className="text-lg font-medium text-white tracking-wide font-poppins leading-snug group-hover:text-white transition-colors duration-300">
          {item.listtext}
        </h3>
      </div>

      {/* View Action */}
      <div className="mt-6 flex items-center justify-between text-sm font-medium text-white/80 group-hover:text-white transition-colors duration-300">
        <span>View Document</span>
        <svg
          className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </Link>
  );
};

export default CocCard;
