import Image from "next/image";

export default async function HeroSection({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <section className="relative overflow-hidden pt-10 lg:pt-0">
      <div className="relative h-screen min-h-[650px] sm:min-h-[720px] lg:min-h-[820px] w-full">
        <Image
          src="/images/about-us/hero/about-hero.jpg"
          alt="About Hero"
          fill
          priority
          className="object-cover"
        />

        {/* Mobile/Tablet Card */}
        <div className="relative z-10 h-full px-0 flex items-end lg:hidden">
          <div className="bg-[#132737] w-full px-6 py-8 pt-10 sm:px-10 sm:py-10 md:py-10">
            <h1 className="font-serif text-white text-4xl leading-[1.1] font-bold mb-4 [text-shadow:_0_2px_4px_rgba(0,0,0,0.8)]">
              {title}
            </h1>
            <p className="text-white/95 text-[14px] sm:text-[15px] md:text-[16px] leading-[1.8] tracking-[0.3px] font-light font-poppins [text-shadow:_0_1px_2px_rgba(0,0,0,0.8)]">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Desktop Card (Figma Specifications) */}
        <div className="hidden lg:flex absolute z-10 flex-col bg-[#132737] text-white lg:w-[386px] lg:min-h-[409px] lg:top-[280px] 2xl:top-[360px] lg:left-[65px] rounded-[4px] opacity-100 p-7">
          <h1 className="font-serif text-white text-[47px] leading-[1.3] font-bold lg:w-[342px] lg:h-[126px]">
            {title}
          </h1>
          <p className="text-white/90 text-[14.5px] leading-[1.65] tracking-[0.6px] font-light font-poppins mt-5 lg:w-[342px]">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
