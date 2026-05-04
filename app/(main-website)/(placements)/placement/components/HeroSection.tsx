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
        <div className="md:flex w-full">
          {overviewcounter &&
            overviewcounter.map((counter) => {
              return (
                <div
                  key={counter?.id}
                  className={`md:w-1/3 p-10 ${counter?.classname || ""}`}
                >
                  <span className="flex flex-col justify-center items-center text-white">
                    <h3 className="leading-[2] text-4xl font-semibold">
                      {counter?.title}
                    </h3>
                    <p className="text-base">{counter?.subtitle}</p>
                  </span>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
