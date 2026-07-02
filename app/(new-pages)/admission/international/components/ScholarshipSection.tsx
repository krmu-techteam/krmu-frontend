"use client";

import Image from "next/image";

export default function ScholarshipSection() {
  return (
    <section className="relative overflow-hidden bg-[url('/international-admission/stone-bg.jpg')] bg-cover bg-no-repeat bg-center pt-10 pb-16 md:pt-20 pb-40 px-5">
      <div className="max-w-[1427px] mx-auto flex flex-col xl:flex-row gap-10 xl:gap-0">
        <div className="w-full xl:w-1/2 text-white">
          <div className="max-w-125 xl:max-w-[360px]">
            <h4 className="font-poppins text-3xl sm:text-5xl font-extrabold mb-2.5 sm:mb-0 sm:leading-20">
              Scholarships
            </h4>
            <h5 className="text-2xl sm:text-[28px] max-w-[400px] font-fraunces italic font-medium leading-tight mb-5">
              Make Your Study in India Dream Affordable
            </h5>
            <p className="text-base text-justify">
              Merit-based scholarships and transparent fee structures ensure
              that world-class Indian education remains accessible to every
              international student.
            </p>
          </div>
        </div>
        <div className="w-full xl:w-1/2 flex justify-center xl:justify-end">
          <div>
            <div className="relative w-fit">
              <Image
                src="/international-admission/scholarship-img.webp"
                width={627}
                height={441}
                alt=""
                className="relative"
              />
              <div className="absolute rounded-2xl -bottom-28 md:-bottom-20 left-1/2 w-[90%] -translate-x-1/2 bg-[#001732] p-6 shadow-2xl">
                <h3 className="font-fraunces text-4xl- md:text-[44px] font-bold text-white">
                  Up to 60% Scholarship
                </h3>

                <p className="mt-3 text-sm sm:text-lg text-white/90 leading-tight">
                  Available for meritorious international students based on
                  academic excellence and qualifying criteria.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
