import Image from "next/image";

const ProgrammesOurLocation = () => {
    return (
        <section className="py-8 md:py-12 xl:py-20">
            <div className="mx-auto max-w-[1440px] w-full px-4 md:px-8 xl:px-12 sm:flex gap-3 md:gap-6 text-center sm:text-left">
                <div className="sm:w-5/12">
                    <Image
                        src="/programmes/cyber-city.webp"
                        width={486}
                        height={418}
                        className="w-full h-full border-[8px] border-[#061623] rounded-[6px] object-cover"
                        alt={"Our Location"}
                    />
                </div>
                <div className="sm:w-7/12 pt-6 sm:px-3">
                    <span className="py-2.5 font-normal font-poppins rounded-md text-white text-sm inline-block mb-2">
                        OUR LOCATION
                    </span>
                    <h2 className="text-white text-2xl md:text-[28px] font-medium leading-[1] mb-4">
                        Learn at One of India’s Biggest Business Hubs, Gurgaon
                    </h2>

                    <Image
                        src="/programmes/map.webp"
                        alt="our location Map"
                        width={608}
                        height={258}
                        className="w-full h-auto border-[8px] border-[#061623] rounded-[6px] inline-block"
                    />
                </div>
            </div>
        </section>
    );
};

export default ProgrammesOurLocation;
