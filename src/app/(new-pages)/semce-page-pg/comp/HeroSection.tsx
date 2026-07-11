import Image from "next/image";
import AcademicsTabs from "./AcademicTabs";
import { instrumentSerif } from "../lib/font";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative sm:min-h-screen flex flex-col justify-between common-overlay">
      <Image
        src="/semce/semce-prog-page/semce-prog-bg.webp"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        alt="Hero section"
      />
          <header className="p-2.5 z-10">
            <div className="max-w-[1664px] mx-auto w-full flex flex-col md:flex-row items-center gap-5 md:gap-0">
              <div className="w-full flex justify-center md:block md:w-1/2">
                <Image src="/semce/krmu-logo.svg" width={274} height={55} alt="KRMU Logo" />
              </div>
              <div className="w-full md:w-2/3 flex flex-col sm:flex-row justify-center items-center sm:items-end sm:justify-end gap-5">
                <Link
                  href="#"
                  className="bg-white font-semibold py-2.5 px-5 text-base text-center rounded-full cursor-pointer max-w-48 w-full"
                >
                  Explore Programme
                </Link>
                <Link
                  href="#"
                  className="redGradient text-white font-semibold py-2.5 px-5 text-center text-base rounded-full cursor-pointer max-w-48 w-full"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </header>
      {/* Content */}
      <div className="max-w-[1664px] mx-auto w-full text-white px-5 sm:px-8 lg:px-12 pt-32 sm:pt-40 pb-20 relative z-10">
        <h1
          className="league-gothic font-bold leading-[1.1]
        text-3xl sm:text-4xl mb-6 text-center md:text-left"
        >
          MA IN JOURNALISM
          <br className="hidden sm:block" />
          <span
            className={`
          text-4xl sm:text-6xl lg:text-7xl xl:text-[80px] block mt-2 ${instrumentSerif.className}`}
          >
            Digital Media and the <br className="hidden sm:block" /> Creator Economy
          </span>
        </h1>
        {/* 
        <p className={`text-base sm:text-lg lg:text-xl max-w-2xl `}>
          <em>
            Digital Media and the Creator Economy
          </em> 
        </p>*/}

        {/* Quote Block */}
        <div
          className="
          mt-10 
          lg:mt-0
          lg:absolute 
          lg:right-12 
          lg:top-[70%]
          lg:-translate-y-1/2
          max-w-md
        "
        >
          <Image
            src="/wp-content/semce/doublequote.svg"
            width={60}
            height={60}
            alt="quote"
            className="w-10 sm:w-12 lg:w-[60px]"
          />

          <p className="mt-3 text-sm sm:text-base lg:text-lg">
            <em>
              A 2 year postgraduate programme for journalists, storytellers and
              media professionals who want to lead newsrooms, content teams and
              creator-led brands in a digital first world.
            </em>
          </p>
        </div>
      </div>

      {/* Bottom Tabs */}
      <div className="w-full hidden  md:flex flex-col items-center pb-8 px-4 z-10">
        <AcademicsTabs />

        <p className="text-center text-white mt-4 text-sm sm:text-base tracking-wide">
          Learn by Creating
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
