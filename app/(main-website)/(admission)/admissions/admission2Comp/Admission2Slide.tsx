import { STRAPI_URL } from "@/app/constant";
import { ProgrammeAlumniData } from "@/lib/types/programme";
import Image from "next/image";

type Props = {
  item: ProgrammeAlumniData;
};

const Admission2Slide = ({ item }: Props) => {
  return (
    <div className="flex gap-5">
      <div className="w-1/2 sm:w-2/5">
        <div>
          <Image
            src={`${STRAPI_URL}${item?.alumni_img?.url}`}
            width={325}
            height={300}
            alt=""
            className="h-[130px] object-contain rounded-[20px] sm:rounded-none sm:h-full"
          />
        </div>
        <div className="text-center mt-5 sm:hidden">
          <h6 className="font-semibold">{item?.name}</h6>
          <span>{item?.qualification}</span>
        </div>
        <div className="text-center sm:hidden">
          {item?.review_img?.url && (
            <Image
              src={`${STRAPI_URL}${item.review_img.url}`}
              width={164}
              height={30}
              alt="Star"
            />
          )}
        </div>
      </div>
      <div className="w-1/2 sm:w-3/5">
        <div className="mb-4">
          <p className="text-xs sm:text-base line-clamp-20 sm:line-clamp-5">
            {item?.content}
          </p>
        </div>
        <div className="hidden sm:flex items-center justify-between">
          <div>
            <h6 className="font-semibold">{item?.name}</h6>
            <span>{item?.qualification}</span>
          </div>
          <div>
            {item?.review_img?.url && (
              <Image
                src={`${STRAPI_URL}${item?.review_img?.url}`}
                width={164}
                height={30}
                alt="Star"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admission2Slide;
