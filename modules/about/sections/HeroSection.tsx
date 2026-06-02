import Image from "next/image";

const HeroSection = async ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-screen min-h-[650px] sm:min-h-[720px] lg:min-h-[820px] w-full">
        <Image
          src="/modules/about/hero-section/about-hero-bg.jpg"
          alt="About Hero"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/10 z-[1]" />
        <div className="relative z-10 h-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 flex items-end pb-10 sm:pb-16 md:pb-20 lg:pb-24">
          <div className="bg-[#132737]/95 backdrop-blur-sm w-full md:max-w-[420px] 2xl:max-w-[500px] rounded-[4px] px-5 py-6 sm:px-8 sm:py-8 md:px-10 md:py-10 shadow-2xl">
            <h1 className="font-serif text-white text-[34px] leading-[1.1] lg:text-[46px] 2xl:text-[57px] font-bold mb-5 sm:mb-6 md:mb-8">
              {title}
            </h1>
            <p className="text-white/95 text-[14px] sm:text-[15px] md:text-[16px] leading-[1.8] sm:leading-[2] tracking-[0.3px] font-light font-poppins">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
