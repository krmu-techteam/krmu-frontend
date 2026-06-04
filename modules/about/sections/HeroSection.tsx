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
        <div className="relative z-10 h-full px-0 lg:px-12 xl:px-16 flex items-end pb-0 lg:pb-16">
          <div className="bg-gradient-to-t from-[#132737] via-[#132737]/90 to-transparent lg:bg-none lg:bg-[#132737] shadow-2xl w-full lg:max-w-[420px] 2xl:max-w-[500px] rounded-none lg:rounded-[4px] px-6 py-8 pt-24 sm:px-10 sm:py-10 lg:px-8 lg:py-8 2xl:px-10 md:py-10">
            <h1 className="font-serif text-white text-[34px] leading-[1.1] lg:text-[46px] 2xl:text-[57px] font-bold mb-4 lg:mb-8 [text-shadow:_0_2px_10px_rgb(0_0_0_/_0.8)]">
              {title}
            </h1>
            <p className="text-white/95 text-[14px] sm:text-[15px] md:text-[16px] leading-[1.8] 2xl:leading-[2] tracking-[0.3px] font-light font-poppins [text-shadow:_0_1px_4px_rgb(0_0_0_/_0.8)]">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
