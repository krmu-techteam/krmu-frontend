import Image from "next/image";

const CIFHeroSection = () => {
  return (
    <section className="pt-[25%] md:pt-[5%] pb-5 px-4 bg-[url(/research/cifbg.webp)] bg-no-repeat bg-cover bg-center relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#ffffffcc]">
      <div className="max-w-[1664px] mx-auto w-full md:flex items-center justify-between">
        <div className="md:w-1/3 flex justify-center md:block">
          <Image
            src="/research/ciflogo.png"
            width={328}
            height={320}
            alt="Cif Logo"
            className="z-10 relative h-80"
          />
        </div>
        <div className="md:w-2/3">
          <h1 className="text-2xl mt-24 sm:text-4xl md:text-[55px] text-[#0162b0] z-10 relative font-semibold text-center leading-[1.2] mb-10">Central Instrumentation Facility</h1>
        </div>
      </div>
    </section>
  );
};

export default CIFHeroSection;
