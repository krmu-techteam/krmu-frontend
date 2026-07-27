import Image from "next/image";

const JensenSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[url(/demo/jensen-bg.jpg)] bg-cover bg-center bg-no-repeat px-5">
      <div className="max-w-[1126px] mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
        {/* Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h3 className="relative text-2xl md:text-3xl lg:text-[32px] font-light text-white leading-snug">
            <Image
              src="/demo/double-quote.svg"
              width={32}
              height={32}
              alt=""
              className="absolute -top-8 left-1/2 -translate-x-1/2 lg:left-0 lg:-translate-x-0 lg:-top-10"
            />

            Humanoid robotics is going to potentially be one of the largest
            industries ever.
          </h3>

          <div className="bg-[#3B91AB] w-full h-1 my-5"></div>

          <div className="text-white text-center lg:text-right">
            <p className="text-lg md:text-xl leading-tight">
              Jensen Huang
            </p>

            <span className="text-xs md:text-sm font-light italic">
              Founder and CEO of Nvidia
            </span>
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <Image
            src="/demo/jensen.png"
            width={342}
            height={342}
            alt="Jensen Huang"
            className="w-64 sm:w-72 md:w-80 lg:w-[342px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default JensenSection;