import { STRAPI_URL } from "@/app/constant";
import { CardWithImage, StrapiMedia } from "@/lib/types/common";
import Image from "next/image";

type Props = {
  heading: string;
  desc: string;
  subtitle: string;
  advimg: StrapiMedia;
  advcards: CardWithImage[];
  school_advantage: string;
};

const SchoolAdvantages = ({
  heading,
  subtitle,
  advimg,
  advcards,
  school_advantage,
}: Props) => {
  return (
    <section className="py-8 bg-[url(/schools/advantages-bg.webp)] bg-no-repeat bg-center bg-cover relative px-4">
      <div className="absolute left-[32%] bottom-0 hidden lg:block">
        {/* <div className="advSchoolImg hidden lg:block"> */}
        {advimg?.url && (
          <Image
            src={`${STRAPI_URL}${advimg?.url}`}
            width={400}
            height={705}
            alt={advimg?.alternativeText || "Girl Side image"}
            className=""
          />
        )}
      </div>
      <div className="max-w-[1664px] mx-auto w-full flex flex-wrap lg:flex-nowrap items-center justify-between">
        <div className="w-full lg:w-1/2">
          <div className="max-w-[500px] 2xl:max-w-[600px] text-justify">
            <h4 className="text-6xl lg:text-9xl font-semibold">{heading}</h4>
            <h5 className="text-5xl lg:text-[64px] font-semibold mb-5">
              {subtitle}
            </h5>
            {/* <p className="xl:pr-28 font-medium text-[#0060aa]"></p> */}
            {school_advantage && (
              <div
                dangerouslySetInnerHTML={{
                  __html: school_advantage,
                }}
                className="xl:pr-28 font-medium adv_content"
              />
            )}
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-5 lg:mt-0 lg:flex flex-col items-end 2xl:block">
          {advcards &&
            advcards.map((advcard) => {
              return (
                <div
                  key={advcard?.id}
                  className={`p-4 bg-[#051630] text-white text-center flex flex-col items-center justify-center lg:max-w-[420px] w-full rounded-4xl ${advcard?.cardclass}`}
                >
                  <Image
                    src={`${STRAPI_URL}${advcard?.cardimg?.url}`}
                    width={49}
                    height={49}
                    alt={advcard?.title}
                  />
                  <h6 className="text-2xl font-semibold my-3">
                    {advcard?.title}
                  </h6>
                  <p className="mb-5">{advcard?.cardcontent}</p>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default SchoolAdvantages;
