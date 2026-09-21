import Image from "next/image";
import { ProminentRecruit } from "../law-2026/contentype";
import PlacementTestimonials from "../../PGComponent/PlacementTestimonials";
import { prominentRecruiterContent } from "../mba-2026/content";
import { CUET } from "./CUET";

type Props = {
  recruiters: ProminentRecruit[];
};
const prominentData = prominentRecruiterContent;

const ProminentRecruiter = ({ recruiters }: Props) => {
  return (
    <>
      <PlacementTestimonials data={prominentData} />
      <section className="px-4 overflow-hidden bg-[#f0f0f0]">
        <div className="max-w-[1400px] mx-auto w-full">
          {/* <h3 className="text-4xl text-center text-[#003fa1] font-semibold">Our Prominent Recruiters</h3> */}
          <h3 className="text-2xl md:text-[40px] mb-4 font-bold text-center pt-10">
            Our Prominent Recruiters
          </h3>

          {/* Infinite Scroll Wrapper */}
          <div className="relative w-full overflow-hidden">
            <div className="flex w-max animate-marquee gap-10 my-10">
              {/* duplicate list for seamless loop */}
              {[...recruiters, ...recruiters].map((rec, i) => (
                <div
                  key={i}
                  className="prominentrecruitShadow flex items-center justify-center h-[120px] max-w-[230px] w-fit px-4 py-2 bg-white overflow-hidden"
                >
                  <Image
                    src={rec.imgUrl}
                    alt={rec.alt}
                    width={1000}
                    height={500}
                    className="h-[100px] w-auto max-w-[200px] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-[1920px]  mt-10 mx-auto overflow-hidden">
        <CUET />
      </div>
    </>
  );
};

export default ProminentRecruiter;
