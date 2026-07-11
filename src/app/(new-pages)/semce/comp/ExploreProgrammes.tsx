import ExploreProgrammsTab from "./ExploreProgrammsTab";

const ExploreProgrammes = () => {
  return (
    <section className="px-5">
      <div className="max-w-[1664px] mx-auto w-full">
        <h3 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-5 md:mb-10">Explore Programmes</h3>
        <p className="text-xl">
          Undergraduate, postgraduate, and doctoral programmes designed for
          careers <br className="hidden md:block" /> in journalism, media, and the creator-led digital
          economy.
        </p>
        <div className="mt-10">
          <ExploreProgrammsTab />
        </div>
      </div>
    </section>
  );
};

export default ExploreProgrammes;
