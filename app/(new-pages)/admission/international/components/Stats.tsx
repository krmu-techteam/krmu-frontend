import Image from "next/image";
// import { motion } from "framer-motion";
const Stats = () => {
  return (
    <section className="bg-[linear-gradient(93.9deg,#001732_60.99%,#004698_100%)] pt-10 sm:pt-0 lg:pb-52 px-5 relative z-[999999]">
      <div className="max-w-[1427px] mx-auto flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-1/3 xl:w-2/12 text-white sm:pt-10 xl:pr-10">
          <h2 className="text-3xl md:text-5xl lg:text-7xl 2xl:text-[70px] leading-none font-semibold font-fraunces">
            800<span aria-hidden="true">+</span>
          </h2>

          <h3 className="text-2xl font-medium mb-1 font-fraunces">
            Recruiters
          </h3>

          <p className="text-sm xl:max-w-[200px]">
            Access extensive placement and career development opportunities.
          </p>
        </div>
        <div className="w-full md:w-1/3 xl:w-2/12 text-white sm:py-10">
          <h2 className="text-3xl md:text-5xl lg:text-7xl 2xl:text-[70px] leading-none font-semibold font-fraunces">
            700<span aria-hidden="true">+</span>
          </h2>

          <h3 className="text-2xl font-medium mb-1 font-fraunces">
            Faculty Members
          </h3>

          <p className="text-sm xl:max-w-[200px]">
            Learn from experienced academicians, researchers, and industry
            experts.
          </p>
        </div>
        <div className="w-5/12 text-white relative hidden xl:block">
          <Image
            src="/international-admission/girl-2.png"
            width={580}
            height={580}
            alt=""
            className="absolute bottom-0 2xl:-bottom-10 object-contain z-40 stats-girl-img"
          />
        </div>
        <div className="w-full md:w-1/3 xl:w-3/12 text-white pb-5 sm:py-10">
          <h2 className="text-3xl md:text-5xl lg:text-7xl 2xl:text-[70px] leading-none font-semibold font-fraunces">
            12,000<span aria-hidden="true">+</span>
          </h2>

          <h3 className="text-2xl font-medium mb-1 font-fraunces">Students</h3>

          <p className="text-sm xl:max-w-[300px]">
            Be part of a vibrant and multicultural learning environment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
