import { STRAPI_URL } from "@/app/constant";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

type Props = {
  name: string;
  imgUrl: string;
  qual: string;
  desg: string;
  slug: string;
};

export const AdvisoryCard = ({ name, imgUrl, qual, desg }: Props) => {
  return (
    <div className="overflow-hidden rounded-t-xl bg-[#061623]/50 transition-all duration-300 ease-in-out group flex flex-col font-poppins">
      {/* IMAGE SECTION */}
      <div className="bg-transparent  relative  w-full overflow-hidden flex items-end justify-center">
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <Image
            src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/KRMU_Logo_white_3_33a6547c3f.png"
            width={290}
            height={299}
            alt="KRMU Logo"
            className="object-contain opacity-95"
          />
        </div>

        <Image
          src={`${STRAPI_URL}${imgUrl}`}
          width={272}
          height={295}
          alt={name}
          className="h-[120px] sm:w-full sm:h-full rounded-t-[15px] relative z-10 object-contain group-hover:scale-103  duration-500 ease"
        />
      </div>
      {/* DETAILS */}
      <div className="p-1.5 sm:p-5 bg-[#061623] flex-1 flex flex-col">
        <h4 className="text-[11px] sm:text-base font-bold text-white inline-block leading-snug">
          {name}
        </h4>

        <h5
          className="text-[12px] uppercase text-white py-1 tracking-wide"
          dangerouslySetInnerHTML={{
            __html: desg,
          }}
        />

        <h6
          className="text-[10px] sm:text-xs font-bold text-white tracking-wide"
          dangerouslySetInnerHTML={{
            __html: qual,
          }}
        />
      </div>
    </div>
  );
};
