import { STRAPI_URL } from "@/app/constant";
import { Adm2Alumni } from "@/lib/types/admission2";
import Image from "next/image";

type Props = {
  item: Adm2Alumni;
};

const Admission2Slide = ({ item }: Props) => {
  return (
    <div className="flex gap-4 md:gap-6 items-start">
      {/* Alumni Image */}
      <div className="w-[100px] md:w-[150px] shrink-0">
        <div className="aspect-[4/5] overflow-hidden rounded-xs">
          <Image
            src={`${STRAPI_URL}${item?.alumni_img?.url}`}
            width={150}
            height={180}
            alt={item?.name || "Alumni"}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col justify-between self-stretch">
        <div className="mb-4">
          <p className="text-[13px] md:text-[15px] text-gray-600 leading-relaxed line-clamp-4 md:line-clamp-5">
            {item?.content}
          </p>
        </div>

        {/* Footer info: Name & Rating */}
        <div className="flex items-end justify-between mt-auto">
          <div className="flex flex-col">
            <h6 className="font-bold text-[#051630] text-sm md:text-base leading-none mb-1">
              {item?.name}
            </h6>
            <span className="text-gray-400 text-[12px] md:text-sm font-medium">
              {item?.qualification}
            </span>
          </div>

          <div className="flex items-center gap-2 mb-1">
            <div className="flex items-center">
              {[1, 2, 3, 4].map((star) => (
                <svg key={star} className="w-3.5 h-3.5 md:w-4 md:h-4 text-orange-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-300 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <span className="text-sm md:text-base font-bold text-black ml-1">4.8</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admission2Slide;
