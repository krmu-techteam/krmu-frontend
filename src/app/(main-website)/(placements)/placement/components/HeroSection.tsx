import { PlacementCounter } from "@/lib/types/placements/placements-overview";

type Props = {
  title: string;
  subtitle: string;
  overviewvideo: string;
  overviewcounter: PlacementCounter[];
};
const HeroSection = ({
  title,
  subtitle,
  overviewvideo,
  overviewcounter,
}: Props) => {
  const iframe = overviewvideo;
  const videoSrc = iframe?.match(/src="([^"]+)"/)?.[1];
  const ABOUT_STAT_BG_COLORS = [
    "#081D2D",
    "#0D2131",
    "#182C3C",
    "#233747",
  ];

  return (
    <>
      <section className="bg-[url(/programmes/placementprocessbannerbg.webp)] bg-no-repeat bg-center bg-cover pt-[25%] md:pt-[15%] pb-[12%] px-4">
        <div className="max-w-[1664px] mx-auto w-full lg:flex items-center">
          <div className="lg:w-1/2 text-white">
            <h3 className="text-2xl md:text-4xl font-light lg:text-4xl my-2.5">
              {subtitle}
            </h3>
            <h1 className="text-2xl md:text-[44px] lg:text-5xl font-semibold my-2.5">
              {title}
            </h1>
          </div>
          {/* <div
            dangerouslySetInnerHTML={{
              __html: overviewvideo,
            }}
            className="lg:w-1/2"
          /> */}
          <div className="lg:w-1/2 ">
            <iframe
              className="aspect-video rounded-md w-full"
              src={videoSrc}
            ></iframe>
          </div>
        </div>
      </section>
      <div className="max-w-[1664px] mx-auto w-full md:-mt-[5%] p-5 md:px-0">
        <div className="md:flex w-full gap-3 xl:gap-5">
          {overviewcounter &&
            overviewcounter.map((counter, idx) => {
              return (
                <div
                  key={counter?.id}
                  style={{
                    backgroundColor:
                      ABOUT_STAT_BG_COLORS[idx % ABOUT_STAT_BG_COLORS.length],
                  }}
                  className={`md:w-1/3 group relative overflow-hidden py-10 px-8 border border-white/5 shadow-xl hover:border-brand-gold/30 hover:shadow-2xl hover:shadow-brand-gold/10 hover:-translate-y-1 transition-all duration-500 ease-out cursor-default text-start min-h-[120px] xl:min-h-[140px] flex flex-col justify-center ${counter?.classname || ""}`}
                >
                  <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>

                  <div className="text-3xl md:text-4xl font-light text-brand-gold mb-2 leading-none relative z-10 transition-colors duration-500 ease-out font-poppins">
                    {counter?.title}
                  </div>
                  <div className="text-white/80 text-[14px] 2xl:text-[16px] capitalize tracking-wide font-light leading-tight relative z-10 transition-colors font-poppins">
                    {counter?.subtitle}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
