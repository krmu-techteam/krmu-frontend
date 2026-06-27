import Image from "next/image";
// import { motion } from "framer-motion";
const Stats = () => {
  return (
    <section className="bg-[linear-gradient(93.9deg,#001732_60.99%,#004698_100%)] pb-52">
      <div className="max-w-[1664px] mx-auto flex gap-5">
        <div className="w-2/12 text-white pt-10 pr-10">
          <h2 className="text-[91px] leading-none font-semibold font-fraunces">
            800<span aria-hidden="true">+</span>
          </h2>

          <h3 className="text-3xl font-medium mb-1 font-fraunces">
            Recruiters
          </h3>

          <p className="text-sm max-w-[200px]">
            Access extensive placement and career development opportunities.
          </p>
        </div>
        <div className="w-2/12 text-white py-10">
          <h2 className="text-[91px] leading-none font-semibold font-fraunces">
            700<span aria-hidden="true">+</span>
          </h2>

          <h3 className="text-3xl font-medium mb-1 font-fraunces">
            Faculty Members
          </h3>

          <p className="text-sm max-w-[200px]">
            Learn from experienced academicians, researchers, and industry
            experts.
          </p>
        </div>
        <div className="w-5/12 text-white relative">
          <Image
            src="/international-admission/girl-2.png"
            width={580}
            height={580}
            alt=""
            className="absolute bottom-0 objec-contain"
          />
        </div>
        <div className="w-3/12 text-white py-10">
          <h2 className="text-[91px] leading-none font-semibold font-fraunces">
            12,000<span aria-hidden="true">+</span>
          </h2>

          <h3 className="text-3xl font-medium mb-1 font-fraunces">Students</h3>

          <p className="text-sm max-w-[300px]">
            Be part of a vibrant and multicultural learning environment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
