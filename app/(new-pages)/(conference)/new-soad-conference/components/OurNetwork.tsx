import Image from "next/image";
import { networkLogos } from "../constant";

const OurNetwork = () => {
  return (
    <section className="bg-[#f5f2eb] py-10 sm:py-12 lg:py-16">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-6">
        {/* Section Heading */}
        <div className="mb-8 max-w-[840px] space-y-2 sm:mb-10">
          <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-[#b08233] sm:text-[11px]">
            Our Network
          </span>

          <h2 className="text-3xl font-bold leading-[1.15] tracking-[-0.02em] text-[#1d1d1d] sm:text-4xl">
            Collaborations from the Past
          </h2>

          <p className="max-w-2xl text-sm font-medium leading-relaxed text-[#59544d] sm:text-base">
            Institutions and organizations that partnered with DESIGN 2030 and
            earlier editions of the conference series.
          </p>
        </div>

        {/* Network Logos */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-7 lg:gap-5">
          {networkLogos.map((logo, index) => (
            <div
              key={`${logo.src}-${index}`}
              className="
                flex
                h-20
                w-full
                items-center
                justify-center
                overflow-hidden
                rounded-[10px]
                border
                border-[#d0c9b8]
                bg-white
                px-3
                py-2
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-md
                sm:h-24
                sm:px-4
                lg:h-24
              "
            >
              <Image
                src={logo.src}
                width={logo.width}
                height={logo.height}
                alt={logo.alt}
                className="h-auto max-h-full w-auto max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurNetwork;
