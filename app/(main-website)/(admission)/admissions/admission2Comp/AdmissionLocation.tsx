import Image from "next/image";

const AdmissionLocation = () => {
  return (
    <section className="py-8 md:py-16 px-2.5 bg-[#f9f9f9] sm:px-4">
      <div className="max-w-[1200px] mx-auto w-full p-6 md:p-12 bg-[#1461ac] rounded-md sm:flex gap-6 md:gap-10 text-center sm:text-left">
        <div className="sm:w-5/12">
          <Image
            src="/programmes/cyber-city.webp"
            width={486}
            height={418}
            className="w-full h-full border-[8px] border-white/90 rounded-md object-cover shadow-xl"
            alt="Our Location"
          />
        </div>
        <div className="sm:w-7/12 pt-6 sm:px-3">
          <span className="py-2.5 font-semibold text-white/90 text-md capitalize tracking-wide inline-block mb-3">
            Our Location
          </span>
          <h3 className="text-white text-3xl md:text-[36px] font-semibold leading-[1.1] mb-6">
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
