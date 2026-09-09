import { trainingYears } from "../constant";

const TrainingJourney = () => {
  return (
    <section className="px-5 py-10 xl:py-20 xl:px-0">
      <div className="mx-auto w-full max-w-7xl">
        {/* Header */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <span
            className="
              font-poppins
              text-xs font-medium uppercase
              tracking-[0.25em]
              text-[#7A1F2B]
              sm:text-sm
              md:text-base md:tracking-[0.4em]
            "
          >
            Training
          </span>

          <h2
            className="
              mt-2
              font-newsreader font-medium
              text-3xl leading-tight
              text-[#001836]
              sm:text-4xl
              md:text-5xl
              lg:text-[55px]
            "
          >
            The four-year arc
          </h2>

          <p
            className="
              mt-2
              max-w-2xl
              font-poppins
              text-sm leading-6
              text-[#3d3d3d]
              sm:text-base
              sm:leading-7
            "
          >
            A meticulously designed progression from foundational aptitude to
            executive readiness.
          </p>
        </div>

        {/* Training Cards */}
        <div
          className="
            grid grid-cols-1
            overflow-hidden
            border border-[#d8d5d0]
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {trainingYears.map((item, index) => (
            <div
              key={item.year}
              className={`
                flex min-h-[220px] flex-col
                bg-white
                px-5 py-6
                sm:min-h-[240px] sm:px-6 sm:py-7
                lg:min-h-[260px]

                border-[#d8d5d0]

                /* Mobile */
                ${index !== trainingYears.length - 1 ? "border-b" : ""}

                /* Tablet - 2 columns */
                sm:border-b-0
                ${index % 2 === 0 ? "sm:border-r" : ""}
                ${index < 2 ? "sm:border-b" : ""}

                /* Desktop - 4 columns */
                lg:border-b-0
                lg:border-r
                lg:last:border-r-0
              `}
            >
              <div
                className="
                  font-newsreader
                  text-2xl font-medium
                  leading-none
                  text-[#001836]
                  sm:text-[30px]
                  md:text-[32px]
                "
              >
                {item.year}
              </div>

              <h3
                className="
                  mt-3
                  font-newsreader
                  text-2xl font-medium
                  leading-tight
                  text-[#001836]
                  sm:text-[28px]
                  md:text-[32px]
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-3
                  max-w-[280px]
                  font-poppins
                  text-sm leading-6
                  text-[#444]
                  sm:mt-4
                  sm:text-base
                  sm:leading-[1.45]
                "
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingJourney;
