import Image from "next/image";
import ProminentRecruiterCard from "./ProminentRecruiterCard";

import { ProminentRecruiterContent } from "../admission/PGType";
import PlacementTestimonials from "./PlacementTestimonials";

type Props = {
  data: ProminentRecruiterContent;
};

const ProminentRecruiter = ({ data }: Props) => {
  return (
    <section className="py-16 px-4 overflow-hidden bg-white">
      <div className="max-w-[1400px] mx-auto w-full">
        <h3 className="text-3xl md:text-4xl text-center font-medium mb-20">
          {data?.title}
        </h3>

        {/* LOGO MARQUEE */}
        <div className="relative overflow-hidden">
          {/* <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-10" /> */}

          <div className="flex w-max animate-marquee gap-8">
            {[...data?.logos, ...data?.logos].map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center min-w-[240px] h-[100px] rounded-xl bg-[#f2f7fa] shadow-sm"
              >
                <Image
                  src={logo.src}
                  width={logo.width}
                  height={logo.height}
                  alt={logo.alt}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PEOPLE MARQUEE */}
      <PlacementTestimonials data={data} />
    </section>
  );
};

export default ProminentRecruiter;
