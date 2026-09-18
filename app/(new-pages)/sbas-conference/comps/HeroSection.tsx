import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="py-20 bg-[linear-gradient(180deg,#1C2822_0%,#33624E_100%)]">
      <div className="max-w-7xl mx-auto flex items-center">
        <div className="w-1/2">
          <p className="text-[#C3A342] text-xs font-bold tracking-[1.5px]">
            3RD INTERNATIONAL CONFERENCE · 22–23 JANUARY 2027
          </p>
          <h1 className="text-[42px] font-lora font-bold text-white leading-tight">
            Advanced Materials for Green and Sustainable Environment
          </h1>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <Image
            src="https://krmangalam.edu.in/images/sbas-conference/sbas-hero.webp"
            width={435}
            height={436}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
