import { STRAPI_URL } from "@/app/constant";
import { CUISINE } from "@/lib/types/industry-connect";
import Image from "next/image";

type Props = {
  cuisine: CUISINE;
};

const JapeneseCuisines = ({ cuisine }: Props) => {
  return (
    <section className="pb-[50px] px-4">
      <div className="max-w-[1664px] mx-auto w-full md:flex items-center gap-14">
        <div className="w-full md:w-1/2 mb-5 md:mb-0">
          <Image
            src={`${STRAPI_URL}${cuisine?.cuisine_img?.url}`}
            width={766}
            height={430}
            alt={cuisine?.heading}
            className="h-[430px] object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl md:text-[38px] font-bold mb-5">
            {cuisine?.heading || ""}
          </h3>
          <p>{cuisine?.desc}</p>
        </div>
      </div>
    </section>
  );
};

export default JapeneseCuisines;
