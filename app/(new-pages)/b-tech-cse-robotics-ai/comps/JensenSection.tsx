import Image from "next/image";

const JensenSection = () => {
  return (
    <section className="py-20 bg-[url(/demo/jensen-bg.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="max-w-[1126px] mx-auto flex items-center justify-between">
        <div className="w-1/2">
          <h3 className="text-[32px] font-light text-white relative">
            <Image
              src="/demo/double-quote.svg"
              width={32}
              height={32}
              alt=""
              className="absolute -top-10 -left-3"
            />
            Humanoid robotics is going to potentially be one of the largest
            industries ever.
          </h3>
          <div className="bg-[#3B91AB] w-full h-1 my-3.5"></div>
          <div className="text-white text-right">
            <p className="text-xl leading-tight">Jensen Huang</p>
            <span className="text-[10px] font-light italic">
              Founder and CEO of Nvidia
            </span>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-end">
          <Image
            src="/demo/jensen.png"
            width={342}
            height={342}
            alt="Jensen Huang"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default JensenSection;
