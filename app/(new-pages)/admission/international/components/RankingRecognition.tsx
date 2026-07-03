import Image from "next/image";

const rankingData = [
  {
    image: "/international-admission/rank-1.png",
    alt: "No. 1 Ranking",
    description:
      `#1 In Haryana & No. 14 Among the Top 50 Institutes for Placements <br /><span class="font-bold sm:font-normal">(Times B School Survey 2026)</span>`,
  },
  {
    image: "/international-admission/rank-1.png",
    alt: "No. 1 Ranking",
    description:
      `#1 In Haryana & No. 17 Among the Top 100 B-Schools in India <br /><span class="font-bold sm:font-normal">(Times B School Survey 2026)</span>`,
  },
  {
    image: "/international-admission/rank-7.png",
    alt: "No. 7 Ranking",
    description:
      `#7 Among Top 40 Private Universities in India <br /><span class="font-bold sm:font-normal">(Times B School Survey 2026)</span>`,
  },
  {
    image: "/international-admission/trophy.png",
    alt: "Trophy",
    description: `Ranked in Diamond+ Band <br class="hidden sm:block" />Finest B-School Ranking 2026 <br  /><span class="font-bold sm:font-normal">(World Institutional Ranking)</span>`,
  },
];

const RankingRecognition = () => {
  return (
    <section className="px-5 xl:px-0 relative z-[99999999] py-10 lg:py-0">
      <div className="bg-[linear-gradient(145.75deg,#FFFFFF_19.74%,#EDECE4_79.7%)] p-5 sm:pt-10 sm:pb-10 xl:pb-5 sm:px-10 xl:px-20 max-w-[1427px] lg:-mt-52 mx-auto rounded-[10px] z-40 relative shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
        <div>
          <h2 className="font-host text-[#001732] text-center text-2xl sm:text-3xl md:text-4xl xl:text-6xl font-extrabold mb-1.5 sm:mb-2.5">
            Rankings & Recognition
          </h2>
          <p className="font-fraunces text-[#CB000D] text-xl sm:text-2xl md:text-3xl xl:text-3xl font-semibold text-center mb-10 italic">
            Proof That Excellence Speaks Loudly
          </p>
        </div>
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
                className="w-[150px]"
              />
              <p
                className="text-xs sm:text-sm lg:text-base"
                dangerouslySetInnerHTML={{
                  __html: item.description,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RankingRecognition;
