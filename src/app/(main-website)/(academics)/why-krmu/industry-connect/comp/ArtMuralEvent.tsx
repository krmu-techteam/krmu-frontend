import { STRAPI_URL } from "@/app/constant";
import { MURALEVENT } from "@/lib/types/industry-connect";
import Image from "next/image";

type Props = {
  mural: MURALEVENT;
};

const ArtMuralEvent = ({ mural }: Props) => {
  return (
    <section className="py-[50px] bg-[#051630] px-4">
      <div className="max-w-[1664px] mx-auto w-full md:flex items-center gap-14">
        <div className="md:w-1/2 text-white">
          <h3 className="text-2xl md:text-[38px] font-bold mb-5">
            {mural?.heading}
          </h3>
          <p>{mural?.desc}</p>
        </div>
        <div className="md:w-1/2 mt-5 md:mt-0">
          <Image
            src={`${STRAPI_URL}${mural?.mural_img?.url}`}
            width={766}
            height={430}
            alt={mural?.heading || ""}
            className="h-[430px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ArtMuralEvent;
