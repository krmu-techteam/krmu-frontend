import Image from "next/image";

const YRCGlimpse = () => {
  return (
    <>
      <section className="pb-[50px] px-4">
        <div className="max-w-[1664px] mx-auto w-full">
          <h4 className="text-2xl font-semibold">Glimpses of YRC @ KRMU</h4>
          <div className="mb-5">
            <h5 className="font-semibold my-3">Blood donation camps.</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div>
                <Image
                  src="/life-at-krmu/glimpses/item-1.png"
                  width={526}
                  height={314}
                  alt=""
                />
              </div>
              <div>
                <Image
                  src="/life-at-krmu/glimpses/item-2.png"
                  width={526}
                  height={314}
                  alt=""
                />
              </div>
              <div>
                <Image
                  src="/life-at-krmu/glimpses/item-3.png"
                  width={526}
                  height={314}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="mb-5">
            <h5 className="font-semibold my-3 text-2xl">
              TB Mukt Bharat Campaign
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div>
                <Image
                  src="/life-at-krmu/tb-mukt/item-1.webp"
                  width={526}
                  height={314}
                  alt=""
                />
              </div>
              <div>
                <Image
                  src="/life-at-krmu/tb-mukt/item-2.webp"
                  width={526}
                  height={314}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="mb-5">
            <h5 className="font-semibold my-3 text-2xl">
              Health Checkup Camps
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div>
                <Image
                  src="/life-at-krmu/health-checkup/item-1.webp"
                  width={526}
                  height={314}
                  alt=""
                />
              </div>
              <div>
                <Image
                  src="/life-at-krmu/health-checkup/item-2.webp"
                  width={526}
                  height={314}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="mb-5">
            <h5 className="font-semibold my-3 text-2xl">
              Providing services in Fire Incident in gurugram
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div>
                <Image
                  src="/life-at-krmu/fire-incidents/item-1.webp"
                  width={526}
                  height={314}
                  alt=""
                />
              </div>
              <div>
                <Image
                  src="/life-at-krmu/fire-incidents/item-2.webp"
                  width={526}
                  height={314}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="mb-5">
            <h5 className="font-semibold my-3 text-2xl">
             Anemia Camp
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div>
                <Image
                  src="/life-at-krmu/anemia-camp/item-1.webp"
                  width={526}
                  height={314}
                  alt=""
                />
              </div>
              <div>
                <Image
                  src="/life-at-krmu/anemia-camp/item-2.webp"
                  width={526}
                  height={314}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default YRCGlimpse;
