import Image from "next/image";
import React from "react";

const KEICInauguration = () => {
  return (
    <section className="py-[50px] bg-[#051630] px-4">
      <div className="max-w-[1664px] mx-auto w-full">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/3 text-white">
            <h4 className="text-[32px] font-semibold mb-2.5">
              Inauguration Highlight
            </h4>
            <p className="leading-[2] mb-5">
              KEIC is more than an incubator; it’s a commitment to making a
              tangible impact on society through innovation and
              entrepreneurship. The recent inauguration of KEIC by Mr Dipanshu
              Sahu, Assistant Innovation Director at the Ministry of Education
              (MOE), marks a significant milestone towards innovation and
              entrepreneurship. This event underscores our strong collaboration
              with government bodies and our commitment to nurturing innovative
              ventures.
            </p>
          </div>
          <div className="lg:w-2/3 flex flex-col lg:flex-row justify-between">
            <Image src="/keic/hl-2.webp" width={430} height={380} alt="" />
            <Image src="/keic/hl-1.webp" width={430} height={380} alt="" />
          </div>
        </div>
        <p className="my-5 text-white">
          Join us at KEIC Foundation, where your entrepreneurial journey is
          supported every step of the way. Together, we will turn innovative
          ideas into reality and contribute to a brighter, more innovative
          future.
        </p>
      </div>
    </section>
  );
};

export default KEICInauguration;
