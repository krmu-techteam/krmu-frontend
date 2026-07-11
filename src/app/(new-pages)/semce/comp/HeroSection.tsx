import Image from "next/image";
import AcademicsTabs from "./AcademicsTabs";

const HeroSection = () => {
  return (
    <section className="relative bg-[url(/wp-content/semce/semce-hero.webp)] bg-no-repeat bg-cover bg-center bg-black sm:min-h-screen flex flex-col justify-between">
      
      {/* Content */}
      <div className="max-w-[1664px] mx-auto w-full text-white px-5 sm:px-8 lg:px-12 pt-32 sm:pt-40 pb-20 relative">
        
        <h1 className="league-gothic font-bold leading-[1.1]
        text-3xl sm:text-4xl mb-6">
          SCHOOL OF EMERGING MEDIA <br />

          <span className="instrument-serif 
          text-4xl sm:text-6xl lg:text-7xl xl:text-[80px] block mt-2">
            & Creator Economy
          </span>
        </h1>

        <p className="text-base sm:text-lg lg:text-xl max-w-2xl">
          <em>
            India’s first university to launch a degree in the Creator Economy.
          </em>
        </p>

        {/* Quote Block */}
        <div className="
          mt-10 
          lg:mt-0
          lg:absolute 
          lg:right-12 
          lg:top-[70%]
          lg:-translate-y-1/2
          max-w-md
        ">
          <Image
            src="/wp-content/semce/doublequote.svg"
            width={60}
            height={60}
            alt="quote"
            className="w-10 sm:w-12 lg:w-[60px]"
          />

          <p className="mt-3 text-sm sm:text-base lg:text-lg">
            <em>
              A future-ready education in content, media, and digital creation
              designed for creators shaping the new economy.
            </em>
          </p>
        </div>
      </div>

      {/* Bottom Tabs */}
      <div className="w-full hidden  md:flex flex-col items-center pb-8 px-4">
        <AcademicsTabs />

        <p className="text-center text-white mt-4 text-sm sm:text-base tracking-wide">
          Learn by Creating
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
