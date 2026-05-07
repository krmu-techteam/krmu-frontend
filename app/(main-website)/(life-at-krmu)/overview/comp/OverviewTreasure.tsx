import Link from "next/link";

const OverviewTreasure = () => {
  return (
    <>
    <div className="bg-[url(/wp-content/images/life-overview.webp)] bg-cover bg-top bg-no-repeat">
      <div className="max-w-[1440px] mx-auto w-full px-4 md:px-0 flex flex-col lg:flex-row gap-8">
        <div
          className="lg:w-1/3 mx-4 md:mx-0 px-[30px] pt-[40px] pb-[222px] text-white"
          style={{
            background:
              "linear-gradient(180deg,#051630 22%,rgba(5,22,48,0) 100%)",
          }}
        >
          <h4 className="text-3xl md:text-left text-center lg:text-left md:text-5xl font-semibold">
            A Treasure Trove of Learning Resources
          </h4>
          <p className="my-5 text-center lg:text-left">
            With thousands of volumes, journals, and digital resources, KRMU’s
            library is not just a collection of books but a quiet haven for
            thinkers, creators, and dreamers.
          </p>
          <div className="text-center lg:text-left">
            <Link
              href="/library"
              className="bg-[#e31e24] text-white py-[11px] px-[23px] hover:bg-[#051630] text-base font-semibold rounded-[4px] inline-block"
            >
              Know More
            </Link>
          </div>
        </div>
        <div className="lg:w-2/3"></div>
      </div>
    </div>
    </>
  );
};

export default OverviewTreasure;
