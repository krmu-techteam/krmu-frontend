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

export const AdvisoryEmployeeCard = ({ name, imgUrl, qual, desg }: Props) => {
  return (
    <div className="overflow-hidden rounded-t-xl bg-white group hover:shadow-xl duration-300 ease-in-out">
      {/* IMAGE SECTION */}
      <div className="bg-[#001732]  relative h-[130px] sm:h-[297px] w-full overflow-hidden flex items-end justify-center">
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
          style={{
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
        />
      </div>

      {/* CONTENT */}
      <div>
        {/* DETAILS */}
        <div className="border-b border-[#ddd] p-1.5 sm:p-5">
          <h4 className="text-[11px] sm:text-base font-bold inline-block leading-snug">
            {name}
          </h4>

          <h5
            className="text-[11px] uppercase py-1"
            dangerouslySetInnerHTML={{
              __html: desg,
            }}
          />

          <h6
            className="text-[10px] sm:text-xs font-bold"
            dangerouslySetInnerHTML={{
              __html: qual,
            }}
          />
        </div>
      </div>
    </div>
  );
};
