import Image from "next/image";

const AdmissionLocation = () => {
  return (
    <section className="py-8 md:py-16 px-4 md:px-0 bg-[#f9f9f9]">
      <div className="max-w-[1440px] mx-auto p-6 md:p-12 bg-[#1461ac] rounded-sm md:rounded-2xl flex flex-col md:flex-row  gap-5 md:gap-10 text-center md:text-left">
        <div className="md:w-5/12">
          <Image
            src="/programmes/cyber-city.webp"
            width={486}
            height={418}
            className="w-full h-full border-[8px] border-white/90 rounded-sm md:rounded-2xl object-cover shadow-xl"
            alt="Our Location"
          />
        </div>
        <div className="md:w-7/12 mt-0 md:pt-6 md:px-3">
          <span className="py-2.5 font-semibold text-white/90 text-md capitalize tracking-wide inline-block mb-3">
            Our Location
          </span>
          <h3 className="text-white text-2xl md:text-[40px] font-bold leading-tight mb-6">
            Learn at One of India’s Biggest Business Hubs, Gurgaon
          </h3>

          <Image
            src="/programmes/map.webp"
            alt="our location Map"
            width={608}
            height={258}
            className="w-full h-auto border-[8px] border-white rounded-md inline-block shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AdmissionLocation;
