import { CareerServiceCard } from "../components";
import { TrainingPlacementSectionProps } from "../types";


const CareerServicesSection = ({
  introText,
  topCards,
  trainingMethodology,
  skillBuilding,
}: TrainingPlacementSectionProps) => {
  return (
    <>
      <section className="px-4">
        <div className="max-w-[1530px] mx-auto w-full">
          <p className="text-xl my-10 text-center md:text-left z-100 relative font-poppins text-white font-semibold">
            {introText}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {topCards.map((card, index) => (
              <CareerServiceCard
                key={index}
                heading={card.heading}
                content={`<ul> ${card.items.map((item) => `<li>${item}</li>`).join("")} </ul>`}
              />
            ))}
          </div>

          <div className="my-5 cdccard-ul z-100 relative">
            <h3 className="text-3xl font-poppins text-white sm:text-4xl font-semibold text-center md:text-left">
              {trainingMethodology.title}
            </h3>
            <br />
            <ul className="text-white font-poppins">
              {trainingMethodology.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 gap-10">
              {trainingMethodology.cards.map((card, index) => (
                <CareerServiceCard
                  key={index}
                  heading={card.heading}
                  content={`<ul> ${card.items.map((item) => `<li>${item}</li>`).join("")} </ul>`}
                />
              ))}
            </div>
          </div>
          <div className="my-10 cdccard-ul z-100 relative">
            <h3 className="text-3xl font-poppins text-white sm:text-4xl font-semibold text-center md:text-left">
              {skillBuilding.title}
            </h3>
            <br />
            <ul className="text-white font-poppins">
              {skillBuilding.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-5 gap-10">
              {skillBuilding.cards.map((card, index) => (
                <CareerServiceCard
                  key={index}
                  heading={card.heading}
                  content={`<p>${card.description}</p>`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareerServicesSection;
