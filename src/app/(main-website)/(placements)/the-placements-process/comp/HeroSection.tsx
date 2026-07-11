import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="pt-[25%] sm:pt-[15%] lg:pb-[9%] bg-[url(/programmes/InternationalCollaborationsBannerBackground.webp)] lg:bg-[url(/programmes/placebanner.jpg)] px-4">
      <div className="text-white max-w-[1664px] mx-auto w-full">
        <div className="max-w-3xl my-[2.5] ">
          <h1 className="text-2xl sm:text-4xl font-semibold md:text-5xl mt-2.5 mb-3.5">The Placements Process</h1>
          <p>
            K.R. Mangalam University is a preferred destination for most of the
            MNCs to hire fresh talents from various fields of Engineering,
            Management, Law, Science, and more. More than seven hundred
            companies visits the KRMU campus every year and carry out campus
            placement drives to recruit budding professionals based on their
            performances. The university boasts an excellent track record for
            placements.
          </p>
          <div className="flex justify-center">
            <Image src="/programmes/placementprocessbannerimg.webp" width={442} height={367} alt="mob banner image" className="lg:hidden" />
          </div>
        </div>
      </div>
    </section>
  );
};
