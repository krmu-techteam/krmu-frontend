import { MoveUpRight } from "lucide-react";
import Link from "next/link";
import CometoLifeSlide from "./CometoLifeSlide";
import { ComeToLifeSection } from "../law-2026/contentype";
import ScrollButton from "./ScrollButton";

type Props = {
  data: ComeToLifeSection;
};

const ComeToLife = ({ data }: Props) => {
  return (
    <section className="mt-10 px-4">
      <div className="max-w-[1400px] mx-auto w-full">
        {/* Header */}
        <div>
          <h3
            className="text-2xl md:text-[40px] font-bold text-center mb-5"
            dangerouslySetInnerHTML={{
              __html: "World-Class Facilities & Infrastructure",
            }}
          />
          {/* <p
            className="text-[#666666] text-center"
            dangerouslySetInnerHTML={{ __html: data.description }}
          /> */}
          <p className="text-[#666666] text-center">
            K.R. Mangalam University offers a modern and student-centric campus
            designed to support effective learning and holistic development for
            its students. The university provides smart classrooms, a
            well-equipped central library with digital resources, computer and
            analytics labs, and seminar halls to enhance academic engagement.
            Additionally, the availability of dedicated spaces for innovation,
            entrepreneurship, and skill development creates an environment that
            encourages practical learning, collaboration, and professional
            growth.
          </p>
        </div>
      </div>

      {/* Slider */}
      <div className="my-10">
        {/* <CometoLifeSlide slides={data.slides} /> */}
        <CometoLifeSlide />
      </div>

      {/* Footer CTA */}
      <div className="my-10">
        <p
          className="text-[#666666] text-center"
          dangerouslySetInnerHTML={{ __html: data.footerText }}
        />

        <div className="flex justify-center my-10">
          {/* <Link
            href={data.cta.href}
            className="flex items-center bg-[#0060aa] text-white justify-between max-w-[320px] w-full py-0.5 pl-3 pr-2 text-sm gap-2 border border-white rounded-full"
          >
            <span
              className="w-4/5 text-center"
              dangerouslySetInnerHTML={{
                __html: data.cta.label,
              }}
            />
            <span className="bg-white p-3 rounded-full w-1/5">
              <MoveUpRight className="text-[#0060aa]" size={30} />
            </span>
          </Link> */}

          <ScrollButton
            targetId="apply-section"
            highlightClass="flash-border"
            btnClass="flex items-center bg-[#0060aa] cursor-pointer text-white justify-between max-w-[320px] w-full py-0.5 pl-3 pr-2 text-sm gap-2 border border-white rounded-full"
          >
            <span
              className="w-4/5 text-center"
              dangerouslySetInnerHTML={{
                __html: data.cta.label,
              }}
            />
            <span className="bg-white p-3 rounded-full w-1/5">
              <MoveUpRight className="text-[#0060aa]" size={30} />
            </span>
          </ScrollButton>
        </div>
      </div>
    </section>
  );
};

export default ComeToLife;
