import Image from "next/image";

const CareerProspects = () => {
  return (
    // <section className="px-5 relative bg-[linear-gradient(180deg,#001B3B_0%,#002F67_100%)] bg-contain">
    <section className="px-5 relative cp-main-container">
      {/* Blue Shape */}
      <Image
        src="/demo/career-prospects-girl.png"
        width={450}
        height={630}
        alt=""
        className="z-20 absolute bottom-0 right-0 hidden xl:block"
      />
      <Image
        src="/demo/gradient-ellipse.svg"
        width={498}
        height={250}
        className="absolute bottom-0 right-0 hidden xl:block z-10"
        alt=""
      />
      <svg
        className="absolute inset-0 w-full h-full hidden xl:block"
        viewBox="0 0 1920 620"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="careerGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#001B3B" />
            <stop offset="100%" stopColor="#002F67" />
          </linearGradient>
        </defs>

        <path
          fill="url(#careerGradient)"
          d="
      M0 0
      H1180
      C1500 0 1830 120 1900 380
      C1920 460 1920 540 1920 620
      H0
      Z
    "
        />
      </svg>
      {/* <div className="absolute left-0 right-0">
        <Image
          src="/demo/cp-bg.svg"
          width={1920}
          height={550}
          alt=""
          className="w-full h-full"
        />
      </div> */}
      <div className="w-full flex max-w-[1100px] mx-auto flex-col xl:flex-row cp-container-2">
        <div className="w-full  text-white pt-20 pb-10 sm:pb-20 xl:pb-28 robot-ai-cp-container relative">
          <div className="">
            <h3 className="text-3xl md:text-[46px] font-bold leading-none mb-10">
              Career Prospects
            </h3>
            <div className="xl:max-w-[850px] w-full flex flex-col lg:flex-row gap-5">
              <div className="space-y-5 w-full lg:w-3/4">
                <div className="text-white flex flex-col md:flex-row gap-5 sm:gap-9">
                  <div className="bg-[#002C5F] w-full md:w-3/5 text-center py-3 px-2 rounded-full">
                    Robotics Programmer
                  </div>
                  <div className="bg-[#002C5F] w-full  md:w-2/5 text-center py-3 px-2 rounded-full">
                    Data Analyst
                  </div>
                  <div className="w-1/5 hidden xl:block"></div>
                </div>
                <div className="text-white flex flex-col md:flex-row justify-center gap-4">
                  <div className="w-1/5 hidden xl:block"></div>
                  <div className="bg-[#002C5F] w-full md:w-2/5 text-center py-3 px-2 rounded-full">
                    Data Scientist
                  </div>
                  <div className="bg-[#002C5F] w-full md:w-3/5 text-center py-3 px-2 rounded-full">
                    Embedded Systems Developer
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/4 p-5 border-2 border-[#1FB6E1] rounded-[14px] text-center">
                <h4 className="text-[34px] text-[#E3C26B] font-bold">
                  56.6 LPA
                </h4>
                <h5 className="font-medium text-[#25B8DE]">Highest Package</h5>
              </div>
            </div>
            <div className="mt-10 xl:mt-20 max-w-[680px] mx-auto xl:mx-0">
              <h4 className="text-white text-base text-center xl:text-left">
                Connecting Talent to Dream Careers
              </h4>
              <div className="flex flex-wrap sm:grid grid-cols-5 gap-3 mt-5">
                <div className="bg-white py-4 px-1.5 rounded-[10px] flex items-center justify-center w-1/2 sm:w-full flex-1">
                  <Image
                    src="/demo/gm.png"
                    width={66}
                    height={69}
                    alt=""
                    className="object-contain"
                  />
                </div>
                <div className="bg-white py-4 px-1.5 rounded-[10px] flex items-center justify-center w-1/2 sm:w-full flex-1">
                  <Image
                    src="/demo/toshiba.png"
                    width={100}
                    height={20}
                    alt=""
                    className="object-contain"
                  />
                </div>
                <div className="bg-white py-4 px-1.5 rounded-[10px] flex items-center justify-center w-1/2 sm:w-full flex-1">
                  <Image
                    src="/demo/mahindra.png"
                    width={80}
                    height={48}
                    alt=""
                    className="object-contain"
                  />
                </div>
                <div className="bg-white py-4 px-1.5 rounded-[10px] flex items-center justify-center w-1/2 sm:w-full flex-1">
                  <Image
                    src="/demo/wipro.png"
                    width={84}
                    height={32}
                    alt=""
                    className="object-contain"
                  />
                </div>
                <div className="bg-white py-4 px-1.5 rounded-[10px] flex items-center justify-center w-full">
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
        <div className="w-full  flex xl:hidden justify-center relative">
          <Image
            src="/demo/career-prospects-girl.png"
            width={450}
            height={630}
            alt=""
            className="z-10 xl:hidden"
          />
          <Image
            src="/demo/gradient-ellipse.svg"
            width={498}
            height={250}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 xl:hidden"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default CareerProspects;
