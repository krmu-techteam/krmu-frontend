import Image from "next/image";
import { Navigation } from "lucide-react";

const LocationSection = () => {
  return (
    <section className="relative z-10 bg-gradient-to-b from-[#071321] to-[#0c2b50] py-8 md:py-10 lg:py-16 xl:py-20 px-6 md:px-8 lg:px-11 xl:px-16">
      <div className="max-w-[1440px] mx-auto w-full">
        
        <div className="flex flex-col lg:flex-row items-stretch gap-0 lg:gap-12">
          
          {/* Left Column: Text & Map */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between">
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-white/5 border border-white/10 mb-6 shadow-sm">
                <Navigation className="w-4 h-4 text-[#3598f5]" />
                <span className="text-[#3598f5] font-semibold text-xs md:text-sm tracking-widest uppercase font-poppins">
                  Our Location
                </span>
              </div>
              <h3 className="text-4xl md:text-5xl lg:text-[52px] font-bold text-white leading-[1.15] font-serif">
                Learn at One of India’s Biggest Business Hubs, <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3598f5] to-[#60a5fa] italic">
                  Gurugram
                </span>
              </h3>
            </div>
            
            {/* Map Image (Full width of left column) */}
            <div className="w-full rounded-sm overflow-hidden border border-white/10 bg-white group p-1 lg:p-2">
              <div className="rounded-sm overflow-hidden bg-white">
                <Image
                  src="/programmes/map.webp"
                  width={608}
                  height={258}
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                  alt="KRMU Campus Map"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Cyber City Image */}
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
            <div className="w-full h-full min-h-auto lg:min-h-[400px] rounded-sm overflow-hidden border border-white/10 group">
              <Image
                src="/programmes/cyber-city.webp"
                width={800}
                height={800}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
                alt="Cyber City Gurgaon"
              />
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default LocationSection;
