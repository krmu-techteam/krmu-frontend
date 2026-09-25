import Image from "next/image";
import { networkLogos } from "../constant";

const OurNetwork = () => {
  return (
    <section className="py-10 bg-[#f5f2eb]">
      <div className="max-w-7xl mx-auto w-full px-4">
        <div className="max-w-[840px] space-y-1 mb-8">
          <span className="mb-3 block text-[11px] font-bold uppercase tracking-[0.16em] text-[#b08233]">
            Our Network
          </span>

          <h2 className="text-3xl font-bold leading-tight tracking-[-0.02em] text-[#1d1d1d] md:text-4xl">
            Collaborations from the Past
          </h2>

          <p className="text-[#59544d] font-medium">
            Institutions and organizations that partnered with DESIGN 2030 and
            earlier editions of the conference series.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-5">
          {networkLogos.map((logo, index) => (
            <div
              key={`${logo.src}-${index}`}
              className="bg-white border border-[#d0c9b8] rounded-[10px] overflow-hidden flex items-center justify-center px-2 py-1 w-full h-24"
            >
              <Image
                src={logo.src}
                width={logo.width}
                height={logo.height}
                alt={logo.alt}
                className="max-w-full max-h-full w-auto h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurNetwork;
