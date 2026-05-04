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

const SchoolAdvantages2 = ({
  heading,
  subtitle,
  advimg,
  advcards,
  school_advantage,
}: Props) => {
  return (
    <section className="py-10 sm:py-20 bg-[url(/schools/advantages-bg.webp)] bg-no-repeat bg-center bg-cover relative px-4">
      <div className="max-w-7xl mx-auto w-full text-center mb-10">
        <h4 className="text-3xl md:text-4xl xl:text-5xl font-semibold mb-5">
          {heading} {subtitle}
        </h4>
        {school_advantage && (
          <div
            dangerouslySetInnerHTML={{
              __html: school_advantage,
            }}
          />
        )}
      </div>
      <div className="max-w-[1664px] mx-auto w-full">
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {advcards &&
            advcards.map((advcard) => {
              return (
                <div
                  key={advcard?.id}
                  className={`p-4 bg-[#051630] text-white text-center flex flex-col items-center justify-center  w-full rounded-4xl`}
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

export default SchoolAdvantages2;
