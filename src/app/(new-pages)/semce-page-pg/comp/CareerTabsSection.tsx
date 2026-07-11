import CareerTabs from "./CareerTabs";

export default function CareerTabsSection() {
  return (
    <section className="py-10 px-4">
      <div className="max-w-[1100px] mx-auto w-full">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-6xl font-bold">
            Where this MA can take you
          </h2>

          <p className="text-gray-600 mt-3 text-sm md:text-2xl italic">
            Move from being a content executor to a media professional who can
            research, design and lead.
          </p>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto w-full">
        <CareerTabs />
      </div>
    </section>
  );
}
