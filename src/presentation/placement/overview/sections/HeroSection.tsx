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
    <div className="relative w-full">
      {/* Full-width Gradient Hero Section */}
      <section
        style={{
          background:
            "linear-gradient(108.76deg, #061623 37.33%, #00345F 92.03%)",
        }}
        className="relative z-5 pt-[120px] md:pt-[180px] pb-12 md:pb-16 px-6 md:px-8 xl:px-16 min-h-[544px] flex items-center"
      >
        <div className="max-w-[1530px] mx-auto gap-8 md:gap-12 w-full lg:flex items-center justify-between">
          {/* Left Column: Subtitle, Title & Stat Cards */}
          <div className="lg:w-1/2 text-white flex flex-col justify-center">
            {/* Subtitle: Poppins Regular 26px */}
            <h3 className="font-poppins font-normal text-[20px] sm:text-[24px] lg:text-[26px] text-white/90 leading-[100%] tracking-normal mb-3">
              {subtitle}
            </h3>

            {/* Title: Poppins SemiBold 46px */}
            <h1 className="font-poppins font-semibold text-[32px] sm:text-[40px] lg:text-[46px] text-white leading-[115%] tracking-normal mb-8">
              {title}
            </h1>

            {/* 3 Inline Stat Cards: 189x118px, border #E7C268, rounded 10px */}
            {overviewcounter && overviewcounter.length > 0 && (
              <div className="flex flex-wrap gap-4 mt-2">
                {overviewcounter.slice(0, 3).map((counter) => (
                  <div
                    key={counter?.id}
                    className="w-[189px] h-[118px] rounded-[10px] border border-[#E7C268] bg-transparent p-3 flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-[#071d2e]/70 shrink-0"
                  >
                    <div className="text-xl sm:text-2xl lg:text-[25px] font-bold text-brand-gold font-poppins leading-tight">
                      {counter?.title}
                    </div>
                    <div className="text-white text-[18px] font-poppins font-normal leading-snug mt-1.5 capitalize">
                      {counter?.subtitle}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Embedded Video */}
          <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
            <div className="w-full max-w-[680px]">
              <iframe
                className="w-full aspect-video"
                src={videoSrc}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
