import { CampusLifeSectionProps } from "../types";

const CampusLifeSection = ({
  campusLifeSection,
}: {
  campusLifeSection: CampusLifeSectionProps;
}) => {
  const { title, description, videoSrc } = campusLifeSection;
  return (
    <section
      className="relative py-16 md:py-24 lg:py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #051630 0%, #004a85 45%, #0060aa 100%)",
      }}
      id="lifeBeyond"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,160,227,0.15),transparent_50%)]" />
      <div className="max-w-[1530px] mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20 px-6 md:px-7 xl:px-16">
        <div className="w-full lg:w-1/2 text-white">
          <h2 className="text-3xl md:text-[42px] text-center pr-64 md:text-left font-bold leading-tight mb-8">
            {title}
          </h2>
          <p className="text-lg font-poppins md:text-xl text-white/90 text-center md:text-left leading-relaxed">
            {description}
          </p>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="relative w-full aspect-video rounded-xs overflow-hidden border border-white/10">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={videoSrc}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusLifeSection;
