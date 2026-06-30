import Image from "next/image";
import { Companies, NetworkContent } from "../constant";

const SuccessNetwork = () => {
  return (
    <section className="overflow-hidden">
      {/* Desktop Layout */}
      <div className="hidden xl:block">
        <div className="max-w-[1664px] mx-auto h-[750px] relative flex items-end justify-center">
          <div className="relative h-[577px] w-[1200px] rounded-t-full bg-[#efeee7]">
            {Companies.map((company) => (
              <div
                key={company.name}
                className="absolute z-20 flex h-[144px] w-[144px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#D8D8D8] bg-white shadow-lg transition-transform duration-300 hover:scale-105"
                style={{
                  left: company.left,
                  top: company.top,
                }}
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={85}
                  height={45}
                  className="h-auto w-[65%] object-contain"
                />
              </div>
            ))}

            <div className="absolute left-1/2 top-[54%] z-10 w-full max-w-[430px] -translate-x-1/2 -translate-y-1/2 text-center">
              {NetworkContent.map((item, index) => (
                <div key={item.title}>
                  <h2 className="font-fraunces text-3xl font-bold text-[#CB000D]">
                    {item.number}
                  </h2>

                  <h3 className="mt-2 font-fraunces text-3xl font-bold text-[#CB000D]">
                    {item.title}
                  </h3>

                  <p className="mx-auto mt-5 max-w-[366px] font-poppins text-sm font-semibold leading-tight text-[#001732]">
                    {item.desc}
                  </p>

                  {index !== NetworkContent.length - 1 && (
                    <div className="mx-auto my-8 h-px w-[343px] bg-[#D5D5D5]" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Layout */}
      <div className="xl:hidden bg-[#efeee7] py-10">
        <div className="max-w-7xl mx-auto px-5">
          {/* Content */}
          <div className="text-center max-w-xl mx-auto">
            {NetworkContent.map((item, index) => (
              <div key={item.title}>
                <h2 className="font-fraunces text-3xl font-bold text-[#CB000D]">
                  {item.number}
                </h2>

                <h3 className="mt-2 font-fraunces text-3xl font-bold text-[#CB000D]">
                  {item.title}
                </h3>

                <p className="mx-auto mt-4 font-poppins text-sm font-semibold leading-tight text-[#001732]">
                  {item.desc}
                </p>

                {index !== NetworkContent.length - 1 && (
                  <div className="mx-auto my-6 h-px w-64 bg-[#D5D5D5]" />
                )}
              </div>
            ))}
          </div>

          {/* Top Slider */}
          <div className="marquee mt-10">
            <div className="marquee-track">
              {[...Companies, ...Companies].map((company, index) => (
                <div
                  key={`top-${index}`}
                  className="mx-3 flex h-[110px] w-[110px] shrink-0 items-center justify-center rounded-full border border-[#D8D8D8] bg-white shadow-lg"
                >
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={80}
                    height={45}
                    className="h-auto w-[65%] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Slider */}
          {/* <div className="marquee reverse mt-6">
            <div className="marquee-track">
              {[...Companies, ...Companies].map((company, index) => (
                <div
                  key={`bottom-${index}`}
                  className="mx-3 flex h-[110px] w-[110px] shrink-0 items-center justify-center rounded-full border border-[#D8D8D8] bg-white shadow-lg"
                >
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={80}
                    height={45}
                    className="h-auto w-[65%] object-contain"
                  />
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default SuccessNetwork;