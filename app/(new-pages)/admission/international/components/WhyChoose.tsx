"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const backgrounds = [
  "/international-admission/monuments/khajraho-img.png",
  "/international-admission/monuments/lotus-temple-img.png",
  "/international-admission/monuments/qutub-minar-img.png",
  "/international-admission/monuments/taj-mahal-img.png",
  "/international-admission/monuments/university-img.png",
];

const WhyChoose = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % backgrounds.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="
        relative
        overflow-hidden
        pt-[40px]
        sm:pt-[350px]
        md:pt-[420px]
        lg:pt-[520px]
        xl:pt-[542px]
        sm:-mt-20
        lg:-mt-40
        internation-admission-section
      "
      id="why-choose"
    >
      {/* Background Images */}
      <div className="absolute inset-0 -z-20">
        {backgrounds.map((bg, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-top bg-no-repeat transition-opacity duration-[1800ms] ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${bg})`,
            }}
          />
        ))}
      </div>

      {/* Optional Dark Overlay */}
      <div className="absolute inset-0 bg-black/10 -z-10" />

      {/* Girl Image */}
      <div className="relative z-20 max-w-[1427px] mx-auto">
        <Image
          src="/international-admission/girl-5.png"
          alt="Girl"
          width={438}
          height={671}
          className="
            absolute
            bottom-0
            right-0
            2xl:bottom-[-77px]
            sm:right-6
            md:right-10
            lg:right-20
            xl:right-[-40px]
            2xl:right-[-77px]
            w-[180px]
            sm:w-[220px]
            md:w-[280px]
            lg:w-[360px]
            xl:w-[438px]
            h-auto
            z-10
            why-choose-girl
            hidden xl:block
          "
        />

        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <div className="w-full lg:w-2/3 pb-10 pl-5">
            <h3
              className="
                text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
                font-extrabold
                font-poppins
                text-white
                leading-tight
                mb-4
              "
            >
              Why Choose K.R. Mangalam University for International Admission in
              India?
            </h3>

            <h4
              className="
                text-xl
                sm:text-2xl
                md:text-3xl
                lg:text-4xl
                text-[#FF9D00]
                font-semibold
                font-fraunces
                mb-4
                italic
              "
            >
              A University Built for Global Learners
            </h4>

            <p
              className="
                text-base
                md:text-lg
                text-white
                font-poppins
                max-w-[700px]
                leading-8
              "
            >
              At K.R. Mangalam University, we believe education goes beyond
              classrooms. Our academic ecosystem is designed to help
              international students learn, innovate, connect, and thrive in a
              globally competitive environment.
            </p>
          </div>

          {/* Right Space */}
          <div className="hidden lg:block lg:w-1/3" />
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;