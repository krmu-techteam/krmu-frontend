import Divider from "@/app/(new-pages)/placements/common/Divider";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-[#e4eaf1] py-8 sm:py-10 lg:py-14">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 sm:px-8 lg:flex-row lg:gap-10 lg:px-6">
        
        {/* Content */}
        <div className="w-full space-y-4 pb-2 sm:space-y-5 lg:w-[55%] lg:pb-5">
          <Image
            src="/a/beyond-logo.jpg"
            width={150}
            height={150}
            alt="Beyond Logo"
            className="h-auto w-[90px] sm:w-[110px] lg:w-[150px]"
          />

          <h3 className="text-lg font-normal leading-snug sm:text-xl lg:text-2xl">
            3rd International Multidisciplinary Conference
          </h3>

          <h1 className="text-4xl leading-none sm:text-5xl md:text-6xl lg:text-7xl">
            design<strong>BEYOND</strong>
          </h1>

          <p className="max-w-2xl pb-6 text-lg leading-relaxed sm:pb-10 sm:text-xl lg:pb-14 lg:text-2xl">
            Developing Efficient and Sustainable Innovations for Global Needs
            BEYOND 2030
          </p>

          <Divider />

          {/* Details */}
          <div className="pt-2">
            <ul className="flex flex-col gap-4 text-xs sm:gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
              <li className="flex items-start gap-3 leading-relaxed sm:items-center sm:gap-4 lg:gap-5">
                <span className="mt-1.5 inline-block h-2 w-2 shrink-0 rounded-full bg-black sm:mt-0" />
                <span>HYBRID April 2027</span>
              </li>

              <li className="flex items-start gap-3 leading-relaxed sm:items-center sm:gap-4 lg:gap-5">
                <span className="mt-1.5 inline-block h-2 w-2 shrink-0 rounded-full bg-black sm:mt-0" />
                <span>School of Architecture and Design</span>
              </li>

              <li className="flex items-start gap-3 leading-relaxed sm:items-center sm:gap-4 lg:gap-5">
                <span className="mt-1.5 inline-block h-2 w-2 shrink-0 rounded-full bg-black sm:mt-0" />
                <span>K.R. Mangalam University, Gurugram</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex w-full items-center lg:w-[45%]">
          <Image
            src="/a/hero-img.png"
            width={600}
            height={300}
            alt="Design Beyond Conference"
            className="h-auto w-full object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;