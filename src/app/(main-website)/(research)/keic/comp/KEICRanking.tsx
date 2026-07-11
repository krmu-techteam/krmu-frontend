import Image from "next/image";

const KEICRanking = () => {
  return (
    <section className="py-[50px] px-4">
      <div className="max-w-[1664px] mx-auto w-full">
        <div className="text-center">
          <h4 className="text-3xl md:text-5xl font-semibold text-center mb-10">
            Ranking by Institution’s Innovation Council (IIC)
          </h4>
          <div className="flex justify-center">
            <Image
              src="/keic/cert.webp"
              width={768}
              height={534}
              alt="Ranking"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KEICRanking;
