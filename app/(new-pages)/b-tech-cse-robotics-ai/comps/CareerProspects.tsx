import Image from "next/image";

const CareerProspects = () => {
  return (
    <section className="">
      <div className="w-full flex">
        <div className="bg-[url(/demo/career-prospects-bg.svg)] bg-no-repeat bg-cover w-11/12 text-white pt-20 pb-28 relative">
          <Image
            src="/demo/career-prospects-girl.png"
            width={450}
            height={630}
            alt=""
            className="absolute right-20 bottom-0 z-20"
          />
          <Image
            src="/demo/gradient-ellipse.svg"
            width={498}
            height={250}
            className="absolute bottom-0 right-20"
            alt=""
          />

          <div className="max-w-[1100px] mx-auto">
            <h3 className="text-[46px] font-bold leading-none mb-5">
              Career Prospects
            </h3>
            <div className="max-w-[850px] w-full flex gap-5">
              <div className="space-y-5 w-3/4">
                <div className="text-white flex gap-9">
                  <div className="bg-[#002C5F] w-3/5 text-center py-3 px-2 rounded-full">
                    Robotics Programmer
                  </div>
                  <div className="bg-[#002C5F] w-2/5 text-center py-3 px-2 rounded-full">
                    Data Analyst
                  </div>
                  <div className="w-1/5"></div>
                </div>
                <div className="text-white flex justify-center gap-4">
                  <div className="w-1/5"></div>
                  <div className="bg-[#002C5F] w-2/5 text-center py-3 px-2 rounded-full">
                    Data Scientist
                  </div>
                  <div className="bg-[#002C5F] w-3/5 text-center py-3 px-2 rounded-full">
                    Embedded Systems Developer
                  </div>
                </div>
              </div>
              <div className="w-1/4 p-5 border-2 border-[#1FB6E1] rounded-[14px] text-center">
                <h4 className="text-4xl text-[#E3C26B] font-bold">56.6 LPA</h4>
                <h5 className="font-medium text-[#25B8DE]">Highest Package</h5>
              </div>
            </div>
            <div className="mt-20 max-w-[680px]">
              <h4 className="text-white text-base">
                Connecting Talent to Dream Careers
              </h4>
              <div className="grid grid-cols-5 gap-3 mt-5">
                <div className="bg-white py-4 px-1.5 rounded-[10px] flex items-center justify-center">
                  <Image
                    src="/demo/gm.png"
                    width={66}
                    height={69}
                    alt=""
                    className="object-contain"
                  />
                </div>
                <div className="bg-white py-4 px-1.5 rounded-[10px] flex items-center justify-center">
                  <Image
                    src="/demo/toshiba.png"
                    width={100}
                    height={20}
                    alt=""
                    className="object-contain"
                  />
                </div>
                <div className="bg-white py-4 px-1.5 rounded-[10px] flex items-center justify-center">
                  <Image
                    src="/demo/mahindra.png"
                    width={80}
                    height={48}
                    alt=""
                    className="object-contain"
                  />
                </div>
                <div className="bg-white py-4 px-1.5 rounded-[10px] flex items-center justify-center">
                  <Image
                    src="/demo/wipro.png"
                    width={84}
                    height={32}
                    alt=""
                    className="object-contain"
                  />
                </div>
                <div className="bg-white py-4 px-1.5 rounded-[10px] flex items-center justify-center">
                  <Image
                    src="/demo/addverb.png"
                    width={100}
                    height={34}
                    alt=""
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/12"></div>
      </div>
    </section>
  );
};

export default CareerProspects;
