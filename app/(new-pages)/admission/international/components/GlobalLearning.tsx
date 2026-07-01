import Image from "next/image";
import { globalLearningData } from "../constant";

const GlobalLearning = () => {
  const { title, subtitle, topLogos, bottomLogos } = globalLearningData;

  return (
    <section className="bg-[#001328] py-10 px-5 overflow-hidden">
      <div className="max-w-[1427px] mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
        {/* Left Content */}
        <div className="w-full lg:w-2/5 text-white">
          <h3 className="text-4xl lg:text-6xl font-poppins font-extrabold mb-4 leading-tight">
            {title}
          </h3>

          <h4 className="text-2xl lg:text-4xl font-fraunces italic font-semibold">
            {subtitle}
          </h4>
        </div>

        {/* Right Slider */}
        <div className="w-full lg:w-3/5 bg-white rounded-xl py-8 overflow-hidden">
          {/* Top */}
          <div className="marquee">
            <div className="marquee-track">
              {[...topLogos, ...topLogos].map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center min-w-[180px] px-6"
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={logo.width}
                    height={logo.height}
                    className="object-contain h-[70px] w-auto"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom */}
          <div className="marquee reverse mt-8">
            <div className="marquee-track">
              {[...bottomLogos, ...bottomLogos].map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center min-w-[180px] px-6"
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={logo.width}
                    height={logo.height}
                    className="object-contain h-[70px] w-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalLearning;
