import { HeroSectionProps } from "../types";

const HeroSection = ({title, description, backgroundImage}: HeroSectionProps) => {
  return (
    <>
      <section className="py-[140px] pb-40 px-4 xl:pt-[9%] xl:pb-[10%] bg-no-repeat bg-cover bg-bottom" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="max-w-[1664px] mx-auto w-full flex flex-col xl:flex-row">
          <div className="w-full xl:w-1/4"></div>
          <div className="w-full xl:w-2/4 text-white text-center px-0 md:px-10 xl:px-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[58px] font-bold leading-[1.1] mb-5">
              {title}
            </h1>
            <p className="font-poppins">
              {description}
            </p>
          </div>
          <div className="w-full xl:w-1/4"></div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
