import { STRAPI_URL } from "@/app/constant";
import { DEPUTYCOMMISSIONER } from "@/lib/types/industry-connect";
import Image from "next/image";
import React from "react";

type Props = {
  deput: DEPUTYCOMMISSIONER;
};

const DeputyCommissioner = ({ deput }: Props) => {
  return (
    <section className="pb-[50px] px-4">
      <div className="max-w-[1664px] mx-auto w-full">
        <h3 className="text-2xl text-center font-bold mx-[1.92%]">
          {deput?.big_para}
        </h3>
      </div>
      <div className="max-w-[1664px] mx-auto w-full lg:flex items-center gap-20 mt-10">
        <div className="lg:w-1/2">{deput?.desc}</div>
        <div className="lg:w-1/2 mt-5 lg:mt-0">
          <Image
            src={`${STRAPI_URL}${deput?.deputy_img?.url}`}
            width={766}
            height={430}
            alt={deput?.deputy_img?.alternativeText || ""}
            className="md:h-[430px] object-cover rounded-sm border border-black"
          />
        </div>
      </div>
    </section>
  );
};

export default DeputyCommissioner;
