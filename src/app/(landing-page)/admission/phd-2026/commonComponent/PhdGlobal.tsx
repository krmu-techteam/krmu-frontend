import Image from "next/image";

const PhdGlobal = () => {
  return (
    <section
      className="py-20 px-4"
      style={{
        background: `url(/wp-content/landingpage/phd-2026/global.webp)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[1300px] mx-auto w-full flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-2/5 text-center md:text-left">
          <h3 className="text-4xl md:text-[50px] text-white font-semibold leading-[1.2] mb-5">
            International Collaboration
          </h3>
          <p className="text-[#828282] text-balance">
            Our international partnerships enable student and faculty exchange
            programmes, joint research, access to global labs, and study-abroad
            opportunities. Through strategic MoUs with leading universities and
            international organisations worldwide, KRMU equips students with
            global exposure and industry-ready skills—advancing its vision to
            emerge as a centre of world-class education.
          </p>
        </div>
        <div className="w-full lg:w-3/5 grid grid-cols-2 md:grid-cols-3 gap-5">
          <div className="p-5 bg-white flex items-center justify-center">
            <Image
              src="/landingpage/phd/int-collab/item-1.png"
              width={175}
              height={95}
              alt=""
            />
          </div>
          <div className="p-5 bg-white flex items-center justify-center">
            <Image
              src="/landingpage/phd/int-collab/item-2.png"
              width={120}
              height={95}
              alt=""
            />
          </div>
          <div className="p-5 bg-white flex items-center justify-center">
            <Image
              src="/landingpage/phd/int-collab/item-3.png"
              width={180}
              height={95}
              alt=""
            />
          </div>
          <div className="p-5 bg-white flex items-center justify-center">
            <Image
              src="/landingpage/phd/int-collab/item-4.png"
              width={120}
              height={95}
              alt=""
            />
          </div>
          <div className="p-5 bg-white flex items-center justify-center">
            <Image
              src="/landingpage/phd/int-collab/item-5.png"
              width={180}
              height={95}
              alt=""
            />
          </div>
          <div className="p-5 bg-white flex items-center justify-center">
            <Image
              src="/landingpage/phd/int-collab/item-6.png"
              width={120}
              height={95}
              alt=""
            />
          </div>
          <div className="p-5 bg-white flex items-center justify-center">
            <Image
              src="/landingpage/phd/int-collab/item-7.png"
              width={220}
              height={95}
              alt=""
            />
          </div>
          <div className="p-5 bg-white flex items-center justify-center">
            <Image
              src="/landingpage/phd/int-collab/item-8.png"
              width={120}
              height={95}
              alt=""
            />
          </div>
          <div className="p-5 bg-white flex items-center justify-center">
            <Image
              src="/landingpage/phd/int-collab/item-9.png"
              width={180}
              height={95}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhdGlobal;
