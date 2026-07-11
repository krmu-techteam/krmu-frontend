import Image from "next/image";

const SportOutdoor = () => {
  return (
    <section className="py-[30px]">
      <div className="max-w-[1664px] mx-auto w-full">
        <div className="text-center">
          <h3 className="text-[38px] mb-10 font-bold">
            Outdoor Sports Facilities
          </h3>
        </div>
        <div className="grid grid-cols-3 gap-2.5">
          <div>
            <Image
              src="/life-at-krmu/indoor.webp"
              width={524}
              height={350}
              alt=""
              className="w-full"
            />
            <div className="text-center">
              <h4 className="font-bold my-5">
                Spin, Shoot, Score foosball fever stikes
              </h4>
            </div>
          </div>
          <div>
            <Image
              src="/life-at-krmu/indoor.webp"
              width={524}
              height={350}
              alt=""
              className="w-full"
            />
            <div className="text-center">
              <h4 className="font-bold my-5">
                Spin, Shoot, Score foosball fever stikes
              </h4>
            </div>
          </div>
          <div>
            <Image
              src="/life-at-krmu/indoor.webp"
              width={524}
              height={350}
              alt=""
              className="w-full"
            />
            <div className="text-center">
              <h4 className="font-bold my-5">
                Spin, Shoot, Score foosball fever stikes
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SportOutdoor;
