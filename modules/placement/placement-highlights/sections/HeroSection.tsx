
const HeroSection = ({heading}: {heading: string}) => {
    return (
        <section className="pt-20 md:pt-[15%] pb-[10%] bg-[url(/placements/placement_banner.webp)] common-overlay">
        <div className="max-w-[1530px] mx-auto w-full">
          <h1 className="text-3xl md:text-5xl text-white text-center font-bold z-10 relative">
            {heading}
          </h1>
        </div>
      </section>
    )
}
export default HeroSection;