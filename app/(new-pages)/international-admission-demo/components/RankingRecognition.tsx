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
    <section>
      <div className="bg-[linear-gradient(145.75deg,#FFFFFF_19.74%,#EDECE4_79.7%)] py-10 px-20 max-w-[1664px] mx-auto rounded-[10px] -mt-52 z-30 relative shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
        <div className="grid grid-cols-4 gap-8 mb-10">
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
              />
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div>
          <h2 className="font-host text-[#001732] text-center text-6xl font-extrabold mb-2.5">
            Rankings & Recognition
          </h2>
          <p className="font-fraunces text-[#CB000D] text-3xl font-semibold text-center">
            Proof That Excellence Speaks Loudly
          </p>
        </div>
      </div>
    </section>
  );
};

export default RankingRecognition;