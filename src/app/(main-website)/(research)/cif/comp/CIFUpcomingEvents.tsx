import Image from "next/image";
import React from "react";

const CIFUpcomingEvents = () => {
  return (
    <section className="py-[50px] bg-[url(/research/color-gradient.webp)] bg-cover bg-no-repeat px-4">
      <div className="max-w-[1664px] mx-auto w-full">
        <h3 className="text-white w-fit text-3xl md:text-5xl font-bold relative after:content-[''] after:absolute after:-top-10 md:after:top-0 after:left-0  md:after:right-[-58px] after:w-[57px] after:h-[40px] after:bg-[url(/research/new-icon-gif-animation-14.gif)] after:bg-cover mb-10">
          Upcoming Events{" "}
        </h3>
        <div className="flex justify-center">
          <Image src="/research/poster.jpg" width={490} height={490} alt="" />
        </div>
      </div>
    </section>
  );
};

export default CIFUpcomingEvents;
