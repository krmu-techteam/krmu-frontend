import { AwardCard } from "../components";
import { AWARDS_DATA } from "../constants";

const AwardsSection = () => {
  return (
    <section className="max-w-[1500px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[30px] gap-y-[45px] relative z-10">
      {AWARDS_DATA.map((card) => (
        <AwardCard key={card.id} card={card} />
      ))}
    </section>
  );
};
export default AwardsSection;
