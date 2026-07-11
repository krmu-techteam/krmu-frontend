import { SportFitnessSection } from "@/lib/api/krmu-campus-facility";
import SportFitnessSlide from "./SportFitnessSlide";

type Props = {
  sportFitness: SportFitnessSection;
};

const SportsFitness = ({ sportFitness }: Props) => {
  return (
    <section className="py-10 bg-[#051630]">
      <div className="max-w-[1664px] mx-auto w-full text-white">
        <h3 className="text-3xl md:text-5xl font-semibold text-center mb-5">
          {sportFitness?.heading}
        </h3>
        <p className="mb-10 text-center">{sportFitness?.content}</p>
        <div>
          <SportFitnessSlide data={sportFitness?.sport_fitness_imgs} />
        </div>
      </div>
    </section>
  );
};

export default SportsFitness;
