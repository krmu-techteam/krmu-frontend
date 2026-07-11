import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <section className="bg-[url(/CUET-IMAGE.webp)] py-[2%] h-[200px] sm:h-[500px] md:h-[834px] bg-no-repeat bg-cover bg-center">
        <div className="max-w-[1664px] mx-auto w-full">
          <div className="w-1/2"></div>
          <div className="w-1/2"></div>
        </div>
      </section>
      <section>
        <div className="max-w-[1664px] mx-auto w-full flex flex-col md:flex-row gap-5 px-4">
          <div className="w-full md:w-1/2">
            <Image src="/cuet-left.webp" width={768} height={624} alt="" className="w-full h-full object-contain" />
          </div>
          <div className="w-full md:w-1/2">
            <Image src="/cuet-right.webp" width={768} height={624} alt="" className="w-full h-full object-contain" />
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
