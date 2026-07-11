import PhdWhatHappCard from "./PhdWhatHappCard";

const PhdWhatsHappening = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-[1300px] mx-auto w-full">
        <div className="whyphdHeading relative">
          <h2 className="text-[32px] font-semibold mb-2.5 text-center">
            What's Happening
          </h2>
          <div
            className="faded-text font-bold text-gray-300 opacity-30
      tracking-wide uppercase
      select-none pointer-events-none"
          >
            What's Happening
          </div>
          <div className="custom-border absolute left-[50%] translate-x-[-50%]"></div>
        </div>
        <div className="mt-10">
          <PhdWhatHappCard />
        </div>
      </div>
    </section>
  );
};

export default PhdWhatsHappening;
