// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const HeroVideo = ({ HeroSectionVideo }: { HeroSectionVideo?: any }) => {
  console.log(HeroSectionVideo);
  return (
    <>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover object-center z-0"
      >
        <source src="/modules/home/hero/krmu-video.mp4" type="video/mp4" />
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Gradients and Overlays */}
      <div className="absolute top-0 left-0 w-full h-full bg-brand-dark/35 z-10 transition-colors group-hover/hero:bg-brand-dark/25 duration-700"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-t from-brand-dark via-brand-dark/40 to-transparent z-10"></div>
    </>
  );
};
