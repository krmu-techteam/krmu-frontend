import Image from "next/image";

const rankingData = [
  {
    image: "/international-admission/rank-1.png",
    alt: "No. 1 Ranking",
    description:
      "#1 In Haryana & No. 14 Among the Top 50 Institutes for Placements Times B School Survey 2026",
  },
  {
    image: "/international-admission/rank-1.png",
    alt: "No. 1 Ranking",
    description:
      "#1 In Haryana & No. 17 Among the Top 100 B-Schools in India Times B School Survey 2026",
  },
  {
    image: "/international-admission/rank-7.png",
    alt: "No. 7 Ranking",
    description:
      "#7 Among Top 40 Private Universities in India Times B School Survey 2026",
  },
  {
    image: "/international-admission/trophy.png",
    alt: "Trophy",
    description:
      "Finest B-School Rankings 2026 by World Institutional Ranking",
  },
];

const RankingRecognition = () => {
  return (
    <section className="px-5 xl:px-0 ">
      <div className="bg-[linear-gradient(145.75deg,#FFFFFF_19.74%,#EDECE4_79.7%)] p-5 sm:py-10 sm:px-10 xl:px-20 max-w-[1664px] -mt-52 mx-auto rounded-[10px] z-40 relative shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8 mb-5 sm:mb-10">
          {rankingData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-baseline text-center gap-5"
            >
              <Image
                src={item.image}
                width={185}
                height={163}
                alt={item.alt}
                className=""
              />
              <p className="text-xs sm:text-sm lg:text-base">{item.description}</p>
            </div>
          ))}
        </div>

        <div>
          <h2 className="font-host text-[#001732] text-center text-2xl sm:text-3xl md:text-4xl xl:text-6xl font-extrabold mb-1.5 sm:mb-2.5">
            Rankings & Recognition
          </h2>
          <p className="font-fraunces text-[#CB000D] text-xl sm:text-2xl md:text-3xl xl:text-3xl font-semibold text-center">
            Proof That Excellence Speaks Loudly
          </p>
        </div>
      </div>
    </section>
  );
};

export default RankingRecognition;