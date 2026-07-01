"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Companies, NetworkContent } from "../constant";

const SuccessNetwork = () => {
  const radius = 610;
  const duration = 25;

  return (
    <section className="overflow-hidden xl:h-[600px] flex justify-center xl:pt-32">
      <div className="relative w-[1200px] h-[1200px] hidden xl:block">
        {/* Background Circle */}
        <div className="absolute inset-0 rounded-full bg-[#efeee7]" />

        {/* Rotating Orbit */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{
            duration,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {Companies.map((company, index) => {
            const angle =
              (index / Companies.length) * (2 * Math.PI) - Math.PI / 2;

            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <motion.div
                key={company.name}
                className="absolute left-1/2 top-1/2"
                style={{
                  x,
                  y,
                  translateX: "-50%",
                  translateY: "-50%",
                }}
                animate={{ rotate: -360 }}
                transition={{
                  duration,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                <div className="flex h-[144px] w-[144px] items-center justify-center rounded-full border border-[#D8D8D8] bg-white shadow-lg hover:scale-105 transition-transform duration-300">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={85}
                    height={45}
                    className="w-[65%] h-auto object-contain"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Center Content */}
        <div className="absolute left-1/2 top-[22%] z-10 w-full max-w-[430px] -translate-x-1/2 -translate-y-1/2 text-center">
          {NetworkContent.map((item, index) => (
            <div key={item.title}>
              <h2 className="font-fraunces text-3xl font-bold text-[#CB000D]">
                {item.number}
              </h2>

              <h3 className="font-fraunces text-3xl font-bold text-[#CB000D]">
                {item.title}
              </h3>

              <p className="mx-auto mt-2 max-w-[366px] font-poppins text-sm font-semibold leading-tight text-[#001732]" dangerouslySetInnerHTML={{
                __html: item.desc
              }} />


              {index !== NetworkContent.length - 1 && (
                <div className="mx-auto my-5 h-px w-[343px] bg-[#D5D5D5]" />
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Mobile & Tablet Layout */}
      <div className="xl:hidden bg-[#efeee7] py-10">
        <div className="max-w-7xl mx-auto px-5">
          {/* Content */}
          <div className="text-center">
            {NetworkContent.map((item, index) => (
              <div key={item.title}>
                <h2 className="font-fraunces text-2xl sm:text-3xl font-bold text-[#CB000D]">
                  {item.number}
                </h2>

                <h3 className="mt-2 font-fraunces text-xl sm:text-3xl font-bold text-[#CB000D]">
                  {item.title}
                </h3>

                <p className="mx-auto mt-4 font-poppins text-sm font-semibold leading-tight text-[#001732]" dangerouslySetInnerHTML={{
                  __html: item.desc
                }} />

{/* 
                {index !== NetworkContent.length - 1 && (
                  <div className="mx-auto my-6 h-px w-10 sm:w-64 bg-[#D5D5D5]" />
                )} */}
              </div>
            ))}
          </div>

          {/* Top Slider */}
          <div className="marquee mt-10">
            <div className="marquee-track">
              {[...Companies, ...Companies].map((company, index) => (
                <div
                  key={`top-${index}`}
                  className="mx-3 flex h-[110px] w-[110px] shrink-0 items-center justify-center rounded-full border border-[#D8D8D8] bg-white shadow-lg"
                >
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={80}
                    height={45}
                    className="h-auto w-[65%] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Slider */}
          {/* <div className="marquee reverse mt-6">
            <div className="marquee-track">
              {[...Companies, ...Companies].map((company, index) => (
                <div
                  key={`bottom-${index}`}
                  className="mx-3 flex h-[110px] w-[110px] shrink-0 items-center justify-center rounded-full border border-[#D8D8D8] bg-white shadow-lg"
                >
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={80}
                    height={45}
                    className="h-auto w-[65%] object-contain"
                  />
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default SuccessNetwork;