import Image from "next/image";

const RobustSeamless = () => {
  return (
    <section className="py-[30px] px-4 bg-[#051630]">
      <div className="max-w-[1664px] mx-auto w-full flex gap-10">
        <div className="w-1/2 text-white text-center">
          <h4 className="text-5xl font-semibold mb-5">
            Robust Security System
          </h4>
          <p className="mb-5">
            KRMU ensures a safe and secure environment with 24×7 CCTV
            surveillance, trained security personnel, ID-based access across
            campus, GPS-enabled buses, and well-defined emergency response and
            evacuation plans.
          </p>
          <Image
            src="/campus/robust.webp"
            width={768}
            height={387}
            alt=""
            className="w-full"
          />
        </div>
        <div className="w-1/2 text-white text-center">
          <h4 className="text-5xl font-semibold mb-5">
            Seamless Transport Facility
          </h4>
          <p className="mb-5">
            KRMU offers a fleet of GPS-enabled, air-conditioned buses with
            comfortable seating and experienced drivers, ensuring safe and
            hassle-free commutes across the entire Delhi-NCR region.
          </p>
          <Image
            src="/campus/seamless.webp"
            width={768}
            height={387}
            alt=""
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default RobustSeamless;
