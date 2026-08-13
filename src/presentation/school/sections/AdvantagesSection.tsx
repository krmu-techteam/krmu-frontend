import { STRAPI_URL } from "@/app/constant";
import SectionDivider from "@/components/common/SectionDivider";
import { CardWithImage, StrapiMedia } from "@/lib/types/common";
import Image from "next/image";

type Props = {
  heading: string;
  desc?: string;
  subtitle: string;
  advimg: StrapiMedia;
  advcards: CardWithImage[];
  school_advantage: string;
};

const LOCAL_ADVANTAGE_ICONS = [
  "/images/school/advantages/book.png",
  "/images/school/advantages/home.png",
  "/images/school/advantages/badge.png",
  "/images/school/advantages/handshake.png",
];

const AdvantagesSection = ({
  heading,
  subtitle,
  advimg,
  advcards,
  school_advantage,
}: Props) => {
  // const imgSrc = advimg?.url
  //   ? `${STRAPI_URL}${advimg.url}`
  //   : "/images/school/advantages/advantages.jpg";
  const imgSrc = "/images/school/advantages/advantages.jpg";

  return (
    <section className="py-10 md:py-12 xl:py-20 bg-transparent relative z-10 font-poppins text-white">
      <div className="max-w-[1440px] mx-auto w-full relative px-4 md:px-8 lg:px-12">
        {/* Top Section: Image on Left + Title & Description on Right */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start pb-2 lg:pb-8">
          {/* Left: Image Card (Width: 464px, Height: 600px, Rounded: 10px) */}
          <div className="hidden lg:block lg:w-[464px] shrink-0 relative h-[480px] sm:h-[540px] lg:h-[600px] ml-2 lg:ml-5 rounded-[11px] overflow-hidden group z-10">
            <Image
              src={imgSrc}
              alt={heading || "Advantage"}
              fill
              sizes="(max-width: 1024px) 100vw, 464px"
              className="object-contain object-center"
              priority
            />
          </div>

          {/* Right: Heading & Description */}
          <div className="flex-1 flex flex-col justify-center gap-4 lg:pl-2 pt-2">
            <h2 className="heading-primary md:text-left text-center">
              {heading} {subtitle}
            </h2>

            {school_advantage && (
              <div
                dangerouslySetInnerHTML={{
                  __html: school_advantage,
                }}
                className="text-[15px] text-justify sm:text-left md:text-base leading-relaxed text-white/90 font-light font-poppins"
              />
            )}
          </div>
        </div>

        {/* Bottom Section: Gradient Advantage Cards Banner overlapping top image on desktop */}
        {advcards && advcards.length > 0 && (
          <div
            className="w-full min-h-[178px] rounded-[4px] sm:rounded-[10px] p-6 md:p-8 lg:px-10 lg:py-8 relative z-20 mt-6 lg:-mt-56 transition-all duration-500"
            style={{
              background:
                "linear-gradient(93.79deg, #061623 68.33%, #E7C268 101.64%)",
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-start">
              {advcards.map((advcard, index) => {
                const iconSrc = advcard?.cardimg?.url
                  ? `${STRAPI_URL}${advcard.cardimg.url}`
                  : LOCAL_ADVANTAGE_ICONS[index % LOCAL_ADVANTAGE_ICONS.length];

                return (
                  <div
                    key={advcard?.id || index}
                    className="flex items-start gap-4"
                  >
                    {iconSrc && (
                      <div className="shrink-0 w-10 h-10 lg:w-11 lg:h-11 flex items-center justify-center pt-0.5">
                        <Image
                          src={iconSrc}
                          width={44}
                          height={44}
                          alt={advcard?.title || "Icon"}
                          className="w-full h-full object-contain filter brightness-0 invert"
                        />
                      </div>
                    )}
                    <div className="flex flex-col">
                      <h3 className="text-sm lg:text-[15px] font-bold text-white leading-snug font-poppins">
                        {advcard?.title}
                      </h3>
                      <p className="text-[13px] lg:text-[13px] text-white/90 font-light leading-relaxed font-poppins mt-1">
                        {advcard?.cardcontent}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
      <SectionDivider />
    </section>
  );
};

export default AdvantagesSection;
