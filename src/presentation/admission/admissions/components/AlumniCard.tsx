import { STRAPI_URL } from "@/app/constant";
import { ProgrammeAlumniData } from "@/lib/types/programme";
import Image from "next/image";

type Props = {
  item: ProgrammeAlumniData;
};

const AlumniCard = ({ item }: Props) => {
  return (
    <div className="flex gap-5">
      <div className="w-1/2 sm:w-2/5">
        <div>
          <Image
            src={`${STRAPI_URL}${item?.alumni_img?.url}`}
            width={325}
            height={300}
            alt="Alumni"
            className="h-[130px] w-full object-cover rounded-[3px] sm:h-full"
          />
        </div>
        <div className="text-center mt-5 sm:hidden">
          <h6 className="font-semibold font-poppins text-white">{item?.name}</h6>
          <span className="font-poppins text-white">{item?.qualification}</span>
        </div>
        <div className="text-center sm:hidden mt-2">
          {item?.review_img?.url && (
            <div className="rounded-[3px] overflow-hidden inline-block">
              <Image
                src={`${STRAPI_URL}${item.review_img.url}`}
                width={164}
                height={30}
                alt="Star"
                className="rounded-[3px]"
              />
            </div>
          )}
        </div>
      </div>
      <div className="w-1/2 sm:w-3/5">
        <div className="mb-4">
          <p className="text-xs text-white font-poppins sm:text-base line-clamp-20 sm:line-clamp-5">
            {item?.content}
          </p>
        </div>
        <div className="hidden sm:flex items-center justify-between">
          <div>
            <h6 className="font-semibold font-poppins text-white/90">{item?.name}</h6>
            <span className="font-poppins text-white/90">{item?.qualification}</span>
          </div>
          <div className="rounded-[3px] overflow-hidden">
            {item?.review_img?.url && (
              <Image
                src={`${STRAPI_URL}${item?.review_img?.url}`}
                width={164}
                height={30}
                alt="Star"
                className="rounded-[3px]"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniCard;
