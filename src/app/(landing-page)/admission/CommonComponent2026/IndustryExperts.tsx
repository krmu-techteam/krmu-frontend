import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { IndustryExpertsSection } from "../law-2026/contentype";
import ScrollButton from "./ScrollButton";

type Props = {
  data: IndustryExpertsSection;
};

const IndustryExperts = ({ data }: Props) => {
  return (
    <section className="">
      <div className="w-full bg-[#003fa1] pt-12 px-5 sm:px-20">
        {/* Header */}
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between text-white">
            <div className="w-full lg:w-1/2 text-center md:text-left md:border-l-2 border-white md:pl-5">
              <h3 className="text-sm">{data.eyebrow}</h3>
              <h4
                className="text-3xl md:text-4xl font-semibold leading-[1.2]"
                dangerouslySetInnerHTML={{ __html: data.heading }}
              />
            </div>

            {/* Desktop description + CTA */}
            <div className="hidden lg:block w-full lg:w-1/2 lg:text-right mt-10 lg:mt-0">
              <p
                className="mb-5 hidden md:block"
                dangerouslySetInnerHTML={{
                  __html: data.description,
                }}
              />

              <div className="hidden md:flex lg:justify-end">
                {/* <Link
                href={data.cta.href}
                className="flex items-center justify-between max-w-2xs w-full py-0.5 px-2 gap-2 border border-white rounded-full"
              >
                <span className="w-4/5 text-center">{data.cta.label}</span>
                <span className="bg-white p-3 rounded-full w-1/5">
                  <MoveUpRight className="text-[#0060aa]" size={30} />
                </span>
              </Link> */}

                <ScrollButton
                  targetId="apply-section"
                  highlightClass="flash-border"
                  btnClass="flex items-center justify-between max-w-2xs w-full py-0.5 px-2 gap-2 border border-white rounded-full"
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
          </div>

          {/* Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-[repeat(auto-fit,minmax(180px,1fr))] mt-5 md:mt-5 gap-5">
            {data.cards.map((item, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-xl text-center flex  items-center justify-center"
              >
                <Image
                  src={item.imgUrl}
                  width={160}
                  height={60}
                  alt={item.alt}
                />
                {/* <p className="my-5 text-xs sm:text-base">{item.title}</p> */}
              </div>
            ))}
          </div>

          {/* Mobile description + CTA */}
          <div className="mt-10 sm:mt-5">
            <div className="md:hidden text-white">
              <p
                className="mb-5 text-center"
                dangerouslySetInnerHTML={{
                  __html: data.description,
                }}
              />
              <div className="flex justify-center">
                {/* <Link
                  href={data.cta.href}
                  className="flex items-center justify-between max-w-2xs w-full py-0.5 px-2 gap-2 border border-white rounded-full"
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
                  btnClass="flex items-center justify-between max-w-2xs w-full py-0.5 px-2 gap-2 border border-white rounded-full"
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

            {/* Banner */}
            <Image
              src={data.bannerImg}
              width={1400}
              height={500}
              alt=""
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryExperts;
