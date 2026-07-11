import { STRAPI_URL } from "@/app/constant";
import { ConnectingTalent } from "@/lib/types/phd-programmes";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";
import React from "react";

type Props = {
  connectingTalent: ConnectingTalent;
};

const PHDConnectingDream = ({ connectingTalent }: Props) => {
  return (
    <section className="py-[50px] relative px-4">
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-3/5">
          <h3 className="text-3xl mb-5 md:text-[64px] font-semibold leading-[1.2]">
            {connectingTalent?.title}
          </h3>
          {connectingTalent && (
            <BlocksRenderer content={connectingTalent?.desc} />
          )}
        </div>
        <div className="lg:w-2/5">
          <Image
            src={`${STRAPI_URL}${connectingTalent?.dreamimg?.url}`}
            width={633}
            height={326}
            alt={""}
            className="w-full"
          />
        </div>
      </div>
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row gap-10 mt-10">
        {connectingTalent?.dreamcounter &&
          connectingTalent?.dreamcounter.map((counter) => {
            return (
              <div key={counter?.id} className="prog-counter-container w-full lg:w-1/3">
                <span className="counter">{counter?.countertext}</span>
                <span className="counter_content">
                  {counter?.countercontent}
                </span>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default PHDConnectingDream;
