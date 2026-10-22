import Image from "next/image";

const PhdAwardsAchievements = () => {
  return (
    <section
      className="pt-10 pb-20 px-4 bg-fixed relative phd-bg-overlay"
      style={{
        background: `url(/wp-content/landingpage/phd-2026/trophy-background.webp)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: 'center'
      }}
    >
      <div className="max-w-[1300px] mx-auto w-full z-10 relative">
        <h3 className="text-white text-center font-semibold text-5xl mb-10">
          Accreditation and Awards
        </h3>
        {/* <div className="w-full md:w-2/5">
        
          <div className="achive-trans-bg flex flex-col justify-center items-center p-10 h-full">
            <div>
              <Image
                src="/landingpage/phd/naac-logo.png"
                width={300}
                height={280}
                alt="Trophy Icon"
                className="z-10"
              />
            </div>
            <div className="text-center">
              <h5 className="text-2xl font-semibold">NAAC A Accredited</h5>
              <span>
                Celebrating excellence and outstanding achievements in
                education, research, and innovation that have been recognized
                nationally and internationally.
              </span>
            </div>
          </div>
        </div> */}
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="flex flex-col justify-center items-center text-center bg-white py-5 px-10 rounded-[10px]">
              <Image
                src="/landingpage/phd/naac-logo.png"
                width={250}
                height={250}
                alt="NAAC"
              />
              {/* <div className="">
                <h5 className="text-2xl font-semibold">NAAC A Accredited</h5>
                <span className="text-xs text-[#777777]">
                  Ranked 87th in University Category
                </span>
              </div> */}
            </div>
            <div className="flex flex-col justify-center items-center text-center bg-white py-5 px-10 rounded-[10px]">
              <Image
                src="/landingpage/phd/awards/ioh.png"
                width={250}
                height={250}
                alt="NAAC"
              />
              {/* <div className="">
                <h5 className="text-2xl font-semibold">NAAC A Accredited</h5>
                <span className="text-xs text-[#777777]">
                  Ranked 87th in University Category
                </span>
              </div> */}
            </div>
            <div className="flex flex-col justify-center items-center text-center bg-white py-5 px-10 rounded-[10px]">
              <Image
                src="/landingpage/phd/awards/gu.png"
                width={250}
                height={250}
                alt="NAAC"
              />
              {/* <div className="">
                <h5 className="text-2xl font-semibold">NAAC A Accredited</h5>
                <span className="text-xs text-[#777777]">
                  Ranked 87th in University Category
                </span>
              </div> */}
            </div>
            <div className="flex flex-col justify-center items-center text-center bg-white py-5 px-10 rounded-[10px]">
              <Image
                src="/landingpage/phd/awards/coe.png"
                width={800}
                height={600}
                alt="NAAC"
              />
              {/* <div className="">
                <h5 className="text-2xl font-semibold">NAAC A Accredited</h5>
                <span className="text-xs text-[#777777]">
                  Ranked 87th in University Category
                </span>
              </div> */}
            </div>
            <div className="flex flex-col justify-center items-center text-center bg-white py-5 px-10 rounded-[10px]">
              <Image
                src="/landingpage/phd/awards/irsd.webp"
                width={800}
                height={600}
                alt="NAAC"
              />
              {/* <div className="">
                <h5 className="text-2xl font-semibold">NAAC A Accredited</h5>
                <span className="text-xs text-[#777777]">
                  Ranked 87th in University Category
                </span>
              </div> */}
            </div>
            <div className="flex flex-col justify-center items-center text-center bg-white py-5 px-10 rounded-[10px]">
              <Image
                src="/landingpage/phd/awards/obe.png"
                width={800}
                height={600}
                alt="NAAC"
              />
              {/* <div className="">
                <h5 className="text-2xl font-semibold">NAAC A Accredited</h5>
                <span className="text-xs text-[#777777]">
                  Ranked 87th in University Category
                </span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhdAwardsAchievements;
