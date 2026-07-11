import Image from "next/image";
import Link from "next/link";

const CIFAchievements = () => {
  return (
    <section className="bg-[#2c172f] py-[50px] px-4">
      <div className="max-w-[1664px] mx-auto w-full">
        <h4 className="text-3xl md:text-5xl font-bold text-white mb-10">Achievements</h4>
        <div className="lg:flex gap-10">
          <div className="mb-5 lg:w-1/3">
            <div className="mb-2.5">
              <Image
                src="/research/achive.webp"
                width={500}
                height={382}
                alt="achievement card"
                className="w-full h-full"
              />
            </div>
            <div className="text-white">
              <h3 className="text-xl font-semibold">
                <Link href="#">
                  Tuning the structural, optical, and dielectric properties of
                  europium-doped barium titanate ceramics
                </Link>
              </h3>
            </div>
          </div>
          <div className="mb-5 lg:w-1/3">
            <div className="mb-2.5">
              <Image
                src="/research/achieve2.jpg"
                width={500}
                height={382}
                alt="achievement card"
                className="w-full h-full"
              />
            </div>
            <div className="text-white">
              <h3 className="text-xl font-semibold">
                <Link href="#">
                  Computational analysis of modified solar air heater having
                  combination of ribs and protrusion in S-shaped configuration
                </Link>
              </h3>
            </div>
          </div>
          <div className="mb-5 lg:w-1/3">
            <div className="mb-2.5">
              <Image
                src="/research/achieve3.jpg"
                width={500}
                height={382}
                alt="achievement card"
                className="w-full h-full"
              />
            </div>
            <div className="text-white">
              <h3 className="text-xl font-semibold">
                <Link href="#">
                  Comparative thermo-hydraulic analysis of periodic stepped open
                  micro pin-fin heat sink
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CIFAchievements;
