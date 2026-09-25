import Divider from "@/app/(new-pages)/placements/common/Divider";
import { Dot } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="py-10 bg-[#e4eaf1]">
      <div className="max-w-7xl mx-auto flex gap-10">
        <div className="w-[55%] pb-5 space-y-5">
          <Image src="/a/beyond-logo.jpg" width={150} height={150} alt="" />
          <h3 className="text-2xl font-normal">
            3rd International Multidisciplinary Conference
          </h3>
          <h1 className="text-7xl">
            design<strong>BEYOND</strong>
          </h1>
          <p className="text-2xl pb-14">
            Developing Efficient and Sustainable Innovations for Global Needs
            BEYOND 2030
          </p>
          <Divider />
          <div>
            <ul className="flex items-center text-xs justify-between">
              <li className="flex items-center gap-5">
                <span className="inline-block w-2 h-2 bg-black rounded-full" />{" "}
                HYBRID April 2027
              </li>
              <li className="flex items-center gap-5">
                <span className="inline-block w-2 h-2 bg-black rounded-full" />{" "}
                School of Architecture and Design
              </li>
              <li className="flex items-center gap-5">
                <span className="inline-block w-2 h-2 bg-black rounded-full" />{" "}
                K.R. Mangalam University, Gurugram
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[45%]">
          <Image
            src="/a/hero-img.png"
            width={600}
            height={300}
            alt=""
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
