import Image from "next/image";
import { globalLearningData } from "../constant";

const GlobalLearning = () => {
  const { title, subtitle, logos } = globalLearningData;

  return (
    <section className="bg-[#001328] py-10">
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="w-full lg:w-2/5 text-white">
          <h3 className="text-4xl lg:text-6xl font-poppins font-extrabold mb-5 leading-20">
            {title}
          </h3>

          <h4 className="text-2xl lg:text-4xl font-fraunces font-semibold italic">
            {subtitle}
          </h4>
        </div>

        {/* Right Logos */}
        <div className="w-full lg:w-3/5">
          <div className="bg-white p-10 grid grid-cols-5 gap-5 rounded-[10px]">
            {logos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center">
                <Image
                  src={logo.src}
                  width={logo.width}
                  height={logo.height}
                  alt={logo.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalLearning;
